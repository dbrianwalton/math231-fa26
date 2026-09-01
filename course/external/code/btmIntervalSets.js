/**
 * btmIntervalSets.js
 *
 * Represent subsets of the real line as a union of intervals (and isolated
 * points, represented as closed single-point intervals [a,a]).
 *
 * Interval endpoints may be plain JavaScript numbers (including Infinity /
 * -Infinity) or "BTM number-objects" from the btm-expressions library -
 * duck-typed as any object exposing:
 *   - isConstant(): boolean  - must return true (a variable/expression
 *                              endpoint cannot be ordered or compared)
 *   - value(): number        - the numeric value of the constant
 *   - toString(): string     - exact display form, e.g. "sqrt(2)"
 *   - toTeX(): string        - exact LaTeX display form, e.g. "\\sqrt{2}"
 *
 * Exports:
 *   - Interval    : a single interval with extended-real endpoints
 *   - Set         : a union of Intervals, with union/intersect/compare/simplify
 *   - parseSet    : parse a text representation into a Set
 *   - SetList     : an ordered list of Sets, with compare()
 *   - parseSetList: parse a comma-separated list of Set expressions into a SetList
 */

// ---------------------------------------------------------------------------
// Interval
// ---------------------------------------------------------------------------

/**
 * Validate and normalize an `ends` argument into [fOpenLeft, fOpenRight].
 * `ends` must be a 2-element array of 0 (open) or 1 (closed) values.
 */
function parseEnds(ends) {
  if (
    !Array.isArray(ends) ||
    ends.length !== 2 ||
    !(ends[0] === 0 || ends[0] === 1) ||
    !(ends[1] === 0 || ends[1] === 1)
  ) {
    throw new Error(
      `Interval: "ends" must be a 2-element array of 0 (open) or 1 (closed) ` +
      `values, e.g. [0,1] for open-left/closed-right. Got ${JSON.stringify(ends)}`
    );
  }
  return [ends[0] === 1 ? false : true, ends[1] === 1 ? false : true]; // [fOpenLeft, fOpenRight]
}

/**
 * Resolve an endpoint argument (plain number or BTM number-object) into
 * { value, obj }, where `value` is the plain numeric value used for
 * ordering/comparison, and `obj` is the original number-object (or null
 * if a plain number was supplied) used to preserve exact display form.
 */
function resolveEndpoint(x, which) {
  if (typeof x === 'number') {
    if (Number.isNaN(x)) {
      throw new Error(`Interval: ${which} endpoint is NaN`);
    }
    return { value: x, obj: null };
  }
  if (x && typeof x.isConstant === 'function') {
    if (!x.isConstant()) {
      throw new Error(
        `Interval: ${which} endpoint must be a constant value (isConstant() ` +
        `=== true); it has a free variable and cannot be used as an interval endpoint.`
      );
    }
    if (typeof x.value !== 'function') {
      throw new Error(`Interval: ${which} endpoint object has isConstant() but no value() method.`);
    }
    const v = x.value();
    if (typeof v !== 'number' || Number.isNaN(v)) {
      throw new Error(`Interval: ${which} endpoint's value() did not return a finite number.`);
    }
    return { value: v, obj: x };
  }
  throw new Error(
    `Interval: ${which} endpoint must be a number or a BTM number-object ` +
    `(with isConstant()/value()), got ${typeof x}`
  );
}

export class Interval {
  /**
   * @param {number|Object} a - left endpoint: a number (may be -Infinity)
   *   or a BTM number-object with isConstant()===true
   * @param {number|Object} b - right endpoint: a number (may be Infinity)
   *   or a BTM number-object with isConstant()===true
   * @param {[number, number]} ends - [leftFlag, rightFlag], each 0 (open)
   *   or 1 (closed), e.g. [0,1] means open on the left, closed on the right
   */
  constructor(a, b, ends) {
    const [fOpenLeftRequested, fOpenRightRequested] = parseEnds(ends);

    const left = resolveEndpoint(a, 'left');
    const right = resolveEndpoint(b, 'right');

    // Infinite endpoints are never "included" - force them open.
    const fOpenLeft = left.value === -Infinity ? true : fOpenLeftRequested;
    const fOpenRight = right.value === Infinity ? true : fOpenRightRequested;

    if (left.value > right.value) {
      throw new Error(
        `Interval: left endpoint (${left.value}) cannot be greater than right endpoint (${right.value})`
      );
    }
    if (left.value === right.value && (fOpenLeft || fOpenRight)) {
      throw new Error(
        `Interval: degenerate interval at ${left.value} must be closed on both ends ` +
        `(use ends [1,1] to represent the single point).`
      );
    }

    this.left = left.value;
    this.right = right.value;
    this.leftObj = left.obj;   // original BTM number-object, or null
    this.rightObj = right.obj; // original BTM number-object, or null
    this.fOpenLeft = fOpenLeft;
    this.fOpenRight = fOpenRight;
  }

  /** The value or object originally supplied for the left endpoint. */
  leftRaw() {
    return this.leftObj !== null ? this.leftObj : this.left;
  }

  /** The value or object originally supplied for the right endpoint. */
  rightRaw() {
    return this.rightObj !== null ? this.rightObj : this.right;
  }

  /** True if this interval is a single isolated point [a,a]. */
  get isPoint() {
    return this.left === this.right && !this.fOpenLeft && !this.fOpenRight;
  }

  clone() {
    return new Interval(this.leftRaw(), this.rightRaw(), endsOf(this));
  }

  toString() {
    if (this.isPoint) {
      return `{${formatEndpoint(this.left, this.leftObj)}}`;
    }
    const lb = this.fOpenLeft ? '(' : '[';
    const rb = this.fOpenRight ? ')' : ']';
    return `${lb}${formatEndpoint(this.left, this.leftObj)},${formatEndpoint(this.right, this.rightObj)}${rb}`;
  }

  toTeX() {
    if (this.isPoint) {
      return `\\{${formatEndpointTeX(this.left, this.leftObj)}\\}`;
    }
    const lb = this.fOpenLeft ? '(' : '[';
    const rb = this.fOpenRight ? ')' : ']';
    return `${lb}${formatEndpointTeX(this.left, this.leftObj)},${formatEndpointTeX(this.right, this.rightObj)}${rb}`;
  }
}

/** [leftFlag, rightFlag] (0/1 form) reconstructed from an Interval's current flags. */
function endsOf(interval) {
  return [interval.fOpenLeft ? 0 : 1, interval.fOpenRight ? 0 : 1];
}

function formatEndpoint(value, obj) {
  if (obj !== null && obj !== undefined) return obj.toString();
  if (value === Infinity) return 'INF';
  if (value === -Infinity) return '-INF';
  return String(value);
}

function formatEndpointTeX(value, obj) {
  if (obj !== null && obj !== undefined) return obj.toTeX();
  if (value === Infinity) return '\\infty';
  if (value === -Infinity) return '-\\infty';
  return String(value);
}

// Ordering used to sort intervals left-to-right: sort by left endpoint,
// and when left endpoints are equal, a closed left endpoint sorts before
// (counts as "less than") an open left endpoint.
function compareIntervalsByLeft(a, b) {
  if (a.left !== b.left) return a.left - b.left;
  if (a.fOpenLeft === b.fOpenLeft) return 0;
  return a.fOpenLeft ? 1 : -1; // closed (false) before open (true)
}

// Do interval A (which sorts before/at B) and interval B overlap or touch
// closely enough that their union is a single continuous interval?
function shouldMergeIntervals(a, b) {
  if (b.left < a.right) return true;
  if (b.left > a.right) return false;
  // b.left === a.right: they touch at a single point. They merge into a
  // continuous interval unless that shared point is excluded by both sides.
  return !(a.fOpenRight && b.fOpenLeft);
}

// Merge two overlapping/touching intervals (a assumed to sort before/at b).
function mergeIntervals(a, b) {
  let right, fOpenRight, rightRaw;
  if (a.right > b.right) {
    right = a.right;
    fOpenRight = a.fOpenRight;
    rightRaw = a.rightRaw();
  } else if (b.right > a.right) {
    right = b.right;
    fOpenRight = b.fOpenRight;
    rightRaw = b.rightRaw();
  } else {
    right = a.right;
    fOpenRight = a.fOpenRight && b.fOpenRight;
    // Tie on value: prefer whichever side is closed (it "wins" the value);
    // if both open (or both closed), a's endpoint object is used.
    rightRaw = !a.fOpenRight ? a.rightRaw() : (!b.fOpenRight ? b.rightRaw() : a.rightRaw());
  }
  return new Interval(a.leftRaw(), rightRaw, [a.fOpenLeft ? 0 : 1, fOpenRight ? 0 : 1]);
}

// Intersection of two intervals, or null if the intersection is empty.
function intersectIntervals(a, b) {
  let left, fOpenLeft, leftRaw;
  if (a.left > b.left) {
    left = a.left;
    fOpenLeft = a.fOpenLeft;
    leftRaw = a.leftRaw();
  } else if (b.left > a.left) {
    left = b.left;
    fOpenLeft = b.fOpenLeft;
    leftRaw = b.leftRaw();
  } else {
    left = a.left;
    fOpenLeft = a.fOpenLeft || b.fOpenLeft;
    // Tie on value: prefer whichever side is open (it's the binding
    // constraint); if both open or both closed, a's endpoint object is used.
    leftRaw = a.fOpenLeft ? a.leftRaw() : (b.fOpenLeft ? b.leftRaw() : a.leftRaw());
  }

  let right, fOpenRight, rightRaw;
  if (a.right < b.right) {
    right = a.right;
    fOpenRight = a.fOpenRight;
    rightRaw = a.rightRaw();
  } else if (b.right < a.right) {
    right = b.right;
    fOpenRight = b.fOpenRight;
    rightRaw = b.rightRaw();
  } else {
    right = a.right;
    fOpenRight = a.fOpenRight || b.fOpenRight;
    rightRaw = a.fOpenRight ? a.rightRaw() : (b.fOpenRight ? b.rightRaw() : a.rightRaw());
  }

  if (left > right) return null;
  if (left === right && (fOpenLeft || fOpenRight)) return null;
  return new Interval(leftRaw, rightRaw, [fOpenLeft ? 0 : 1, fOpenRight ? 0 : 1]);
}

// ---------------------------------------------------------------------------
// Set
// ---------------------------------------------------------------------------

export class Set {
  /**
   * @param {Interval[]} [intervals=[]] - initial intervals making up the set
   */
  constructor(intervals = []) {
    this.intervals = intervals.map((iv) => iv.clone());
    this._sort();
  }

  _sort() {
    this.intervals.sort(compareIntervalsByLeft);
  }

  /** Add an interval to the set (does not simplify). Returns this. */
  addInterval(interval) {
    this.intervals.push(interval.clone());
    this._sort();
    return this;
  }

  /** Deep copy of this set. */
  clone() {
    return new Set(this.intervals);
  }

  /**
   * Rewrite this set's intervals into an equivalent disjoint, merged,
   * left-to-right sorted representation. Mutates and returns this set.
   */
  simplify() {
    if (this.intervals.length === 0) return this;

    const sorted = [...this.intervals].sort(compareIntervalsByLeft);
    const merged = [sorted[0].clone()];

    for (let i = 1; i < sorted.length; i++) {
      const next = sorted[i];
      const current = merged[merged.length - 1];
      if (shouldMergeIntervals(current, next)) {
        merged[merged.length - 1] = mergeIntervals(current, next);
      } else {
        merged.push(next.clone());
      }
    }

    this.intervals = merged;
    return this;
  }

  /** Returns a *new* Set that is the (simplified) union of this and other. */
  union(other) {
    const combined = [
      ...this.intervals.map((iv) => iv.clone()),
      ...other.intervals.map((iv) => iv.clone()),
    ];
    const result = new Set(combined);
    result.simplify();
    return result;
  }

  /** Returns a *new* Set that is the (simplified) intersection of this and other. */
  intersect(other) {
    const resultIntervals = [];
    for (const a of this.intervals) {
      for (const b of other.intervals) {
        const r = intersectIntervals(a, b);
        if (r) resultIntervals.push(r);
      }
    }
    const result = new Set(resultIntervals);
    result.simplify();
    return result;
  }

  /**
   * Check whether this set is equivalent to another set.
   *
   * @param {Set} other
   * @param {boolean} [simplified=false] - if true, assumes this set and
   *   `other` are already simplified equivalent-canonical representations,
   *   and skips re-simplifying them before comparing.
   * @param {boolean} [strictEndpoints=true] - if true, open/closed flags on
   *   endpoints must match exactly; if false, only the numeric endpoints
   *   need to match.
   */
  compare(other, simplified = false, strictEndpoints = true) {
    let a = this;
    let b = other;
    if (!simplified) {
      a = this.clone().simplify();
      b = other.clone().simplify();
    }

    if (a.intervals.length !== b.intervals.length) return false;

    for (let i = 0; i < a.intervals.length; i++) {
      const ia = a.intervals[i];
      const ib = b.intervals[i];
      if (ia.left !== ib.left || ia.right !== ib.right) return false;
      if (strictEndpoints) {
        if (ia.fOpenLeft !== ib.fOpenLeft || ia.fOpenRight !== ib.fOpenRight) {
          return false;
        }
      }
    }
    return true;
  }

  toString() {
    if (this.intervals.length === 0) return '{}';
    return this.intervals.map((iv) => iv.toString()).join('U');
  }

  toTeX() {
    if (this.intervals.length === 0) return '\\{\\}';
    return this.intervals.map((iv) => iv.toTeX()).join(' \\cup ');
  }
}

// ---------------------------------------------------------------------------
// SetList
// ---------------------------------------------------------------------------

export class SetList {
  /**
   * @param {Set[]} [sets=[]] - initial sets making up the list, in order
   */
  constructor(sets = []) {
    this.sets = sets.map((s) => s.clone());
  }

  /** Deep copy of this list. */
  clone() {
    return new SetList(this.sets);
  }

  toString() {
    return this.sets.map((s) => s.toString()).join(',');
  }

  toTeX() {
    return this.sets.map((s) => s.toTeX()).join(', ');
  }

  /**
   * Check whether this list of sets is equivalent to another list of sets.
   *
   * @param {SetList} other
   * @param {boolean} [preserveOrder=true] - if true, the i-th set of `this`
   *   must match the i-th set of `other`, for every i. If false, this list
   *   matches `other` as long as every set in `this` can be paired with a
   *   distinct, not-yet-matched set in `other` that it compares equal to
   *   (in any order).
   * @param {boolean} [strictEndpoints=true] - forwarded to each pairwise
   *   Set.compare() call: if true, open/closed endpoint flags must match
   *   exactly; if false, only the numeric endpoints need to match.
   */
  compare(other, preserveOrder = true, strictEndpoints = true) {
    // Cheap length check first, before doing any pairwise comparisons.
    if (this.sets.length !== other.sets.length) return false;

    if (preserveOrder) {
      for (let i = 0; i < this.sets.length; i++) {
        if (!this.sets[i].compare(other.sets[i], false, strictEndpoints)) {
          return false;
        }
      }
      return true;
    }

    // Arbitrary order: greedily pair each set in `this` with the first
    // not-yet-matched set in `other` that it compares equal to.
    const remaining = other.sets.slice();
    for (const a of this.sets) {
      const idx = remaining.findIndex((b) => a.compare(b, false, strictEndpoints));
      if (idx === -1) return false;
      remaining.splice(idx, 1);
    }
    return true;
  }
}

// ---------------------------------------------------------------------------
// parseSet
// ---------------------------------------------------------------------------

const PLAIN_NUMBER_REGEX = /^-?\d+(?:\.\d+)?$/;

function isWhitespace(c) {
  return c === ' ' || c === '\t' || c === '\n' || c === '\r';
}

/**
 * Split `str` on top-level commas only - i.e. commas that are not nested
 * inside parentheses/brackets/braces, so a formula like "min(1,2)" is not
 * split internally, and (when splitting a SetList's terms) a point-set like
 * "{3,4}" or an interval like "[5,6]" is not split internally either.
 */
function splitTopLevelCommas(str) {
  const parts = [];
  let depth = 0;
  let current = '';
  for (const c of str) {
    if (c === '(' || c === '[' || c === '{') depth++;
    else if (c === ')' || c === ']' || c === '}') depth = Math.max(0, depth - 1);
    if (c === ',' && depth === 0) {
      parts.push(current);
      current = '';
    } else {
      current += c;
    }
  }
  parts.push(current);
  return parts;
}

/**
 * Parse a single endpoint's text into a plain number or a BTM number-object.
 *
 * "-INF"/"INF" and plain numeric literals are always recognized directly.
 * Anything else is treated as a formula and requires a math environment
 * (`menv`, an object exposing `parseExpression(text, type)`, as provided by
 * btm-expressions) to parse it into a number-object via
 * `menv.parseExpression(text, "number")`. The Interval constructor itself
 * validates that the resulting object is constant (isConstant() === true).
 */
function parseEndpointText(str, which) {
  const trimmed = str.trim();
  if (trimmed.length === 0) {
    throw new TypeError(`Interval is missing the ${which} endpoint.`);
  }
  if (trimmed === '-INF') return -Infinity;
  if (trimmed === 'INF') return Infinity;
  if (PLAIN_NUMBER_REGEX.test(trimmed)) return parseFloat(trimmed);
  if (Set.prototype.menv) {
    if (typeof Set.prototype.menv.parseExpression !== 'function') {
      throw new Error('parseSet: menv must provide a parseExpression(text, type) method');
    }
    return Set.prototype.menv.parseExpression(trimmed, 'number');
  }
  throw new TypeError(`Unable to interpret the ${which} endpoint.`);
}

/**
 * Scan `text` left-to-right into interval/singleton terms separated by "U",
 * tracking parenthesis depth so that nested formulas (e.g. "(sqrt(2),5)" or
 * "{min(1,2), 3}") are handled correctly. Every "(" opened within a term's
 * endpoint expressions must have a matching ")" before the term can close.
 */
function parseTerms(text) {
  const intervals = [];
  const n = text.length;
  let i = 0;
  let expectTerm = true;

  while (i < n) {
    while (i < n && isWhitespace(text[i])) i++;
    if (i >= n) break;

    if (!expectTerm) {
      if (text[i] !== 'U') {
        throw new TypeError(`Unexpected character ${text[i]} after a set or interval. Did you forget a "U"?`);
      }
      i++;
      expectTerm = true;
      continue;
    }

    const c = text[i];

    if (c === '{') {
      let j = i + 1;
      while (j < n && text[j] !== '}') j++;
      if (j >= n) {
        throw new TypeError(`Missing closing "}" in "${text}"`);
      }
      const interior = text.slice(i + 1, j);
      if (interior.trim().length > 0) {
        const values = splitTopLevelCommas(interior);
        for (const v of values) {
          const val = parseEndpointText(v, 'value');
          intervals.push(new Interval(val, val, [1, 1]));
        }
      }
      // An empty "{}" contributes no intervals - it is the empty set,
      // matching Set.toString()'s own rendering of the empty set as "{}".
      i = j + 1;
      expectTerm = false;
      continue;
    }

    if (c === '(' || c === '[') {
      let parenDepth = 0;
      let j = i + 1;
      let closeChar = null;
      while (j < n) {
        const cc = text[j];
        if (cc === '(') {
          parenDepth++;
        } else if (cc === ')') {
          if (parenDepth === 0) {
            closeChar = ')';
            break;
          }
          parenDepth--;
        } else if (cc === ']') {
          if (parenDepth === 0) {
            closeChar = ']';
            break;
          }
        }
        j++;
      }
      if (closeChar === null) {
        throw new TypeError(`Missing closing parenthesis or bracket on an interval.`);
      }
      const interior = text.slice(i + 1, j);
      const parts = splitTopLevelCommas(interior);
      if (parts.length !== 2) {
        throw new TypeError(
          `The possible interval "${text.slice(i, j + 1)}" must have exactly two comma-separated endpoints`
        );
      }
      const leftVal = parseEndpointText(parts[0], 'left');
      const rightVal = parseEndpointText(parts[1], 'right');
      const fOpenLeft = text[i] === '(';
      const fOpenRight = closeChar === ')';
      intervals.push(new Interval(leftVal, rightVal, [fOpenLeft ? 0 : 1, fOpenRight ? 0 : 1]));
      i = j + 1;
      expectTerm = false;
      continue;
    }

    throw new TypeError(`Unexpected character "${c}" in "${text}"`);
  }

  if (expectTerm) {
    throw new TypeError(`Unexpected end to set description.`);
  }

  return intervals;
}

/**
 * Parse a text representation of a Set, e.g. "(1,3)U[3,5)" or "{1,2,3}".
 * Endpoints may also be formulas, e.g. "(sqrt(2),5]" or "{min(1,2), 3}",
 * when a math environment is supplied via `menv`.
 *
 * @param {string} text
 * @param {boolean} [simplify=false] - if true, simplify() the resulting set
 * @returns {Set}
 */
export function parseSet(text, simplify = false) {
  if (typeof text !== 'string') {
    throw new Error('parseSet: expected a string argument');
  }

  const trimmed = text.trim();
  if (trimmed.length === 0) {
    throw new TypeError('Unanswered. An empty set can be entered "{}"');
  }

  const intervals = parseTerms(trimmed);

  const result = new Set(intervals);
  if (simplify) {
    result.simplify();
  }
  return result;
}

// ---------------------------------------------------------------------------
// parseSetList
// ---------------------------------------------------------------------------

/**
 * Parse a comma-separated list of Set expressions into a SetList, e.g.
 * "(1,3)U[3,5), {7,8}, (9,INF)" parses into three Sets. Each comma-separated
 * term is itself a full Set expression (it may contain unions and formula
 * endpoints); only commas outside any "(...)"/"[...]"/"{...}" are treated as
 * separators between list elements.
 *
 * @param {string} text
 * @param {boolean} [simplify=false] - if true, simplify() each resulting Set
 * @returns {SetList}
 */
export function parseSetList(text, simplify = false) {
  if (typeof text !== 'string') {
    throw new Error('parseSetList: expected a string argument');
  }

  const trimmed = text.trim();
  if (trimmed.length === 0) {
    throw new Error('parseSetList: cannot parse an empty string');
  }

  const parts = splitTopLevelCommas(trimmed);
  const sets = parts.map((part) => {
    const partTrimmed = part.trim();
    if (partTrimmed.length === 0) {
      throw new TypeError(`List appears to have two commas with nothing in between.`);
    }
    return parseSet(partTrimmed, simplify);
  });

  return new SetList(sets);
}
