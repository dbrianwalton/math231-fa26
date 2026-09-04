var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "syllabus",
  "level": "1",
  "url": "syllabus.html",
  "type": "Section",
  "number": "",
  "title": "Syllabus",
  "body": " Syllabus        Course Information  This is the syllabus for course name (MATH xxx, section xxx) for [term] 20xx. It is a [n] credit course.    Instructor  Prof. Lastname, Office Location, prof.lastname@example.edu .    Student Hours  TBD    Class meets  course times and location.    Course Description  course description from catalog    Prerequisite  list of prerequisites    Textbook and course materials   textbook name by textbook author.       Course Overview        Assessments and Grades     "
},
{
  "id": "sec-course-info-2",
  "level": "2",
  "url": "syllabus.html#sec-course-info-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "course name (MATH xxx, section xxx) "
},
{
  "id": "notes-week-01",
  "level": "1",
  "url": "notes-week-01.html",
  "type": "Section",
  "number": "",
  "title": "Week 1 and Week 2",
  "body": " Week 1 and Week 2   The first two weeks of class focus on some prerequisite understanding necessary for our later conversations about functions and their analysis.    P1 Linear Modeling   P1  I can calculate a slope as a rate of change and use it with the point-slope equation of a line to model a linear relation between two variables.   What do I need to understand?    Conceptual : A slope is a proportionality constant relating the change in a dependent variable with respect to the change in an independent variable, usually written , where represents the slope, represents the increment of change in the independent variable , and represents the increment of change in the dependent variable .  The variables and represent abstract placeholders for more physically relevant variables. you will need to be able to use other variables.     Computational : Calculate the slope between two points, and as      Modeling : Although you likely currently feel most comfortable with the slope-intercept equation of a line , I am asking you to begin thinking in terms of the point-slope equation of a line given by where represents the known slope and represents a known point on the line.  This model of a line physically thinks through the process as follows. We know when , the value of starts at (because it is on the line). As changes to any other value, the value of  also changes, and the slope gives the proportional amount of change:   It is this idea that generalizes later in calculus to the idea of a definite integral measuring the change when the rate of change or slope is not constant: . You are not expected to understand this bit yet -- it is a preview to the future.       When a company sets the price of its product at $ , it is able to sell items per day. When it changes the price to $ , it is able to sell items per day. Create a linear model using the point-slope equation for the number of items sold per day as a function of the company's price .   =               S0 \/ 2       p0+delta_p    S0-delta_S    S0 - (delta_S \/ delta_p)*(p - p0)              P2 Intervals and Set Operations   P2  I can translate a graphical representation of a set of numbers back and forth to interval notation and compute unions and intersections of multiple such sets.   What do I need to understand?   A collection of real numbers is a set . Simple sets with a finite number of values can be expressed using curly braces listing the numbers separated by commas, such as , which is a set including the values of -3, 2, and 5.    We often deal with sets formed by intervals , which are sets that include all of the values between two endpoints, and possibly the endpoints as well.  A single interval , where and represent any real numbers with (or possibly or ), describes the set of values between  and . It corresponds to the set of values such that , which in set constructor notation is . This type of interval where the endpoints are not included is called an open interval .  In order to describe an interval where the endpoint is included, we change the round parenthesis into a square bracket on the endpoint that is included. When both endpoints are included, the interval is called a closed interval .    The graphical representation of an interval is created by drawing a line segment between the endpoints, and marking the endpoints themselves with either open circles (if not included ) or closed circles (if included ). If the interval extends to infinity, instead of putting a circle on that end, we put an arrow to indicate it continues indefinitely.    When a set includes values coming from multiple disconnected or disjoint intervals, we describe the set as a union of the component intervals. A single isolated number can also be included as a set .  Suppose my set has component intervals or isolated values that can be described individually as , , , etc. Then we would write Using the union operation creates a single set from many component pieces.    Given two sets and , the union is a new set that consists of all values in at least one of the two sets (could be in just one or both).  Given two sets and , the intersection is a new set that consists of all values in both the two sets (must be in both). This is the values in the overlap   After you identify the values in a set, you then identify the new component intervals and possible isolated values to rewrite the set using interval notation.        Suppose that is the set illustrated on the number line below.   A number line from negative four to three. The interval from negative three to negative one is shaded, with a closed (filled) circle at negative three and an open circle at negative one. The interval from one to two is shaded, with open circles at both one and two.    The set is defined by .  Find and , write them using interval notation, and illustrate them on a number line.      P3 Formula Structure, Inverses and Isolation   P3  I can identify the sequence of algebraic actions in a formula and apply inverse operations to solve an equation by isolating the variable.   This statement of the learning objective is a simplification of the learning objective stated in the original syllabus. The original included too many different skills at once to assess in a single task.  What do I need to understand?   A formula or expression involving a variable specifies a series of actions that occur in a precise order.    Parentheses group terms to force a particular order.    The order of operations is a constructed convention so that a community knows the implicit order without requiring all parentheses.    An equation where the variable appears in only one location (or that can be rewritten this way) can be solved by isolation by applying inverse operations to both sides of the equation based on the last operation for the expression with the variable.    Applying the operation to both sides is essential to retain equivalent equations.    The inverse operations are applied in exactly the reverse order as the original operations of the initial expression.    Division should really be thought of as multiplication by a reciprocal.    The reciprocal operation is its own inverse operation.       Solve the equation below using the method of isolation.  =                     a\/(b*x+c)+d    d+k    (a-c*k)\/(b*k)             "
},
{
  "id": "notes-week-01-3-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "slope proportionality constant point-slope definite integral "
},
{
  "id": "P1_Linear_Modeling",
  "level": "2",
  "url": "notes-week-01.html#P1_Linear_Modeling",
  "type": "Checkpoint",
  "number": "1",
  "title": "",
  "body": "  When a company sets the price of its product at $ , it is able to sell items per day. When it changes the price to $ , it is able to sell items per day. Create a linear model using the point-slope equation for the number of items sold per day as a function of the company's price .   =               S0 \/ 2       p0+delta_p    S0-delta_S    S0 - (delta_S \/ delta_p)*(p - p0)           "
},
{
  "id": "notes-week-01-4-3",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-4-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "set intervals open interval closed interval graphical representation line segment disjoint union union intersection "
},
{
  "id": "P2-set-operations",
  "level": "2",
  "url": "notes-week-01.html#P2-set-operations",
  "type": "Checkpoint",
  "number": "2",
  "title": "",
  "body": "  Suppose that is the set illustrated on the number line below.   A number line from negative four to three. The interval from negative three to negative one is shaded, with a closed (filled) circle at negative three and an open circle at negative one. The interval from one to two is shaded, with open circles at both one and two.    The set is defined by .  Find and , write them using interval notation, and illustrate them on a number line.   "
},
{
  "id": "notes-week-01-5-4",
  "level": "2",
  "url": "notes-week-01.html#notes-week-01-5-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "order of operations solved by isolation inverse operations "
},
{
  "id": "P3-solve-by-isolation",
  "level": "2",
  "url": "notes-week-01.html#P3-solve-by-isolation",
  "type": "Checkpoint",
  "number": "3",
  "title": "",
  "body": "  Solve the equation below using the method of isolation.  =                     a\/(b*x+c)+d    d+k    (a-c*k)\/(b*k)           "
},
{
  "id": "activity-linear-relations-slope",
  "level": "1",
  "url": "activity-linear-relations-slope.html",
  "type": "Worksheet",
  "number": "",
  "title": "Building Linear Relations from Change",
  "body": " Building Linear Relations from Change    Recognize a proportional relationship between two variables and identify its proportionality constant.  Calculate slope as an average rate of change, and explain why it does not depend on which two data points are used to compute it.  Write the equation of a linear relation in point-slope form, understood as a starting value plus an amount of change.     Today's activity is our first as a class using this format. You will work in your assigned group, moving through the questions together rather than racing ahead individually — the goal is that everyone in the group can explain why an answer is correct, not just what the answer is.  Each group member takes one of the following roles for the activity:    Role  Responsibility    Manager  Keeps the group on task and on pace; makes sure everyone has spoken before the group moves on; asks the instructor for help if the group is stuck after trying on its own.    Recorder  Writes the group's agreed-on answers, in the group's own words; notes any question the group could not resolve.    Spokesperson  Speaks for the group during whole-class discussion and can explain why the group answered as it did, not just what was written.    Reflector  Checks in periodically on whether everyone understands, not just whether the group is moving forward; leads a short end-of-activity check-in on what worked.    In a group of three, the Manager also takes on the Reflector's check-in duties.    Model 1: Paying at the Pump   Gasoline at a particular station costs per gallon. The table below shows the price paid for several purchase amounts. Fill in the two missing entries before answering the questions.    Gallons purchased  4  7  10  15    Price paid ($)  13.00   32.50       For each column, compute (price paid) ÷ (gallons purchased). What do you notice?    Pick two different columns and compute (change in price) ÷ (change in gallons) between them. Then try a different pair of columns. Does the pair you choose matter? Explain.    Write a sentence describing price in terms of gallons purchased, using the constant you found (for example, “price is ___ times the number of gallons”).    If a customer purchased gallons, what would they pay? Why must this be true for this kind of relationship between two variables?     Checkpoint: A Different Rate   A veterinarian prescribes a medication at a fixed rate of mg per kilogram of the animal's body weight.    Body weight (kg)  6  10  18    Dose (mg)  30   90      Fill in the missing dose. What is the proportionality constant here, and what does it mean physically?    Without adding a new column to the table, predict the dose for a 25 kg animal.     Model 2: Mile Markers on the Highway   A car is driving on a highway at a constant speed. A passenger records the mile marker the car is passing at several clock times, along with how many minutes have passed since 1:00 pm.    Clock time  1:15 pm  1:30 pm  1:50 pm  2:30 pm    Minutes after 1:00 pm ( )  15  30  50  90    Mile marker ( )  42  60  84  132      Using the row, find the change in time and the change in mile marker between the 1:15 pm and 1:30 pm readings. Express this as a rate in miles per minute.    Repeat using the 1:50 pm and 2:30 pm readings, and again using the 1:15 pm and 1:50 pm readings. Do you still get the same rate? What everyday word describes this rate, and what is it in miles per hour?    The 1:15 pm reading has , and the 2:30 pm reading has — exactly six times as much elapsed time since 1:00 pm. Is the mile marker at 2:30 pm six times the mile marker at 1:15 pm? Compute both and compare. Is the mile marker proportional to ? Compare this to what you found about the price of gas in Model 1, and explain the difference.    Using the 1:15 pm reading ( , ) and the rate you found, write an equation relating and using the structure (mile marker) = (mile marker at ) + (rate) × ( − 15) .    Use your equation to predict the mile marker when , that is, at 1:00 pm. Was this a point you had already recorded in the table? What does this predicted value represent?      The constant rate you found in Model 2 is called the slope of the relation, or its average rate of change . The equation you built in Task 4 has the same structure as called point-slope form , where is any known point on the relation and is the slope. It says exactly what you wrote: a new value equals a starting value plus the slope times how far you've moved from that starting point.     Applying the Idea: A Growing Plant   A plant is measured twice after it is potted: it is inches tall after weeks, and inches tall after weeks. Assume it grows at a constant rate.    Find the plant's growth rate, in inches per week.    Using one of the two given measurements, write an equation for the plant's height in terms of the number of weeks since it was potted, in point-slope form.    Use your equation to find the plant's height when . Does it make sense for a newly potted plant to already have some height? Was the plant's height proportional to the number of weeks since potting? Explain.    Rewrite your equation in the form . What does represent in this situation? Was it one of the two measurements you were originally given?    Predict the plant's height at weeks.    "
},
{
  "id": "obj-linear-relations-slope",
  "level": "2",
  "url": "activity-linear-relations-slope.html#obj-linear-relations-slope",
  "type": "Objectives",
  "number": "",
  "title": "",
  "body": "  Recognize a proportional relationship between two variables and identify its proportionality constant.  Calculate slope as an average rate of change, and explain why it does not depend on which two data points are used to compute it.  Write the equation of a linear relation in point-slope form, understood as a starting value plus an amount of change.   "
},
{
  "id": "ex-model1-gas-pump",
  "level": "2",
  "url": "activity-linear-relations-slope.html#ex-model1-gas-pump",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Model 1: Paying at the Pump.",
  "body": " Model 1: Paying at the Pump   Gasoline at a particular station costs per gallon. The table below shows the price paid for several purchase amounts. Fill in the two missing entries before answering the questions.    Gallons purchased  4  7  10  15    Price paid ($)  13.00   32.50       For each column, compute (price paid) ÷ (gallons purchased). What do you notice?    Pick two different columns and compute (change in price) ÷ (change in gallons) between them. Then try a different pair of columns. Does the pair you choose matter? Explain.    Write a sentence describing price in terms of gallons purchased, using the constant you found (for example, “price is ___ times the number of gallons”).    If a customer purchased gallons, what would they pay? Why must this be true for this kind of relationship between two variables?   "
},
{
  "id": "ex-model1-checkpoint",
  "level": "2",
  "url": "activity-linear-relations-slope.html#ex-model1-checkpoint",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Checkpoint: A Different Rate.",
  "body": " Checkpoint: A Different Rate   A veterinarian prescribes a medication at a fixed rate of mg per kilogram of the animal's body weight.    Body weight (kg)  6  10  18    Dose (mg)  30   90      Fill in the missing dose. What is the proportionality constant here, and what does it mean physically?    Without adding a new column to the table, predict the dose for a 25 kg animal.   "
},
{
  "id": "ex-model2-mile-marker",
  "level": "2",
  "url": "activity-linear-relations-slope.html#ex-model2-mile-marker",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Model 2: Mile Markers on the Highway.",
  "body": " Model 2: Mile Markers on the Highway   A car is driving on a highway at a constant speed. A passenger records the mile marker the car is passing at several clock times, along with how many minutes have passed since 1:00 pm.    Clock time  1:15 pm  1:30 pm  1:50 pm  2:30 pm    Minutes after 1:00 pm ( )  15  30  50  90    Mile marker ( )  42  60  84  132      Using the row, find the change in time and the change in mile marker between the 1:15 pm and 1:30 pm readings. Express this as a rate in miles per minute.    Repeat using the 1:50 pm and 2:30 pm readings, and again using the 1:15 pm and 1:50 pm readings. Do you still get the same rate? What everyday word describes this rate, and what is it in miles per hour?    The 1:15 pm reading has , and the 2:30 pm reading has — exactly six times as much elapsed time since 1:00 pm. Is the mile marker at 2:30 pm six times the mile marker at 1:15 pm? Compute both and compare. Is the mile marker proportional to ? Compare this to what you found about the price of gas in Model 1, and explain the difference.    Using the 1:15 pm reading ( , ) and the rate you found, write an equation relating and using the structure (mile marker) = (mile marker at ) + (rate) × ( − 15) .    Use your equation to predict the mile marker when , that is, at 1:00 pm. Was this a point you had already recorded in the table? What does this predicted value represent?   "
},
{
  "id": "def-slope-point-slope",
  "level": "2",
  "url": "activity-linear-relations-slope.html#def-slope-point-slope",
  "type": "Definition",
  "number": "4",
  "title": "",
  "body": "  The constant rate you found in Model 2 is called the slope of the relation, or its average rate of change . The equation you built in Task 4 has the same structure as called point-slope form , where is any known point on the relation and is the slope. It says exactly what you wrote: a new value equals a starting value plus the slope times how far you've moved from that starting point.   "
},
{
  "id": "ex-application-plant",
  "level": "2",
  "url": "activity-linear-relations-slope.html#ex-application-plant",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Applying the Idea: A Growing Plant.",
  "body": " Applying the Idea: A Growing Plant   A plant is measured twice after it is potted: it is inches tall after weeks, and inches tall after weeks. Assume it grows at a constant rate.    Find the plant's growth rate, in inches per week.    Using one of the two given measurements, write an equation for the plant's height in terms of the number of weeks since it was potted, in point-slope form.    Use your equation to find the plant's height when . Does it make sense for a newly potted plant to already have some height? Was the plant's height proportional to the number of weeks since potting? Explain.    Rewrite your equation in the form . What does represent in this situation? Was it one of the two measurements you were originally given?    Predict the plant's height at weeks.   "
},
{
  "id": "activity-interval-union-intersection",
  "level": "1",
  "url": "activity-interval-union-intersection.html",
  "type": "Worksheet",
  "number": "",
  "title": "Union and Intersection of Intervals",
  "body": " Union and Intersection of Intervals   Today's problems are ordered so that you meet one new wrinkle at a time instead of all at once. We will start with clearly overlapping intervals to get the mechanics down, then look closely at what happens when two intervals share a single boundary point, then at intervals with a genuine gap between them. After that we will chain three sets together, and finish by intersecting two sets that are each already written as a union of two intervals.  Sketch each set on a number line before you write down an answer — it will save you from the most common mistakes.    Section 1 — Warm-Up: Clearly Overlapping Intervals   For each pair below, find and .    Problem 1  ,    Problem 2  ,    Problem 3  ,    Problem 4  ,     Section 2 — Adjacent Intervals: The Endpoint Decides Everything   Each of the four pairs below uses the same two numbers as endpoints — only whether each set includes or excludes the shared value changes. Sketch each pair on a number line before answering. For each pair, find and , and answer: can the union be written as a single interval? Why or why not?    Problem 5  , (both closed at )    Problem 6  , (open at in , closed at in )    Problem 7  , (closed at in , open at in )    Problem 8  , (both open at )    Discussion   In Problem 5, the intersection is not empty, but it is not a normal interval either — what is it?  In Problem 8, the union is missing only one point — why does that single missing point stop it from being written as one interval?      Section 3 — True Gaps: Non-Overlapping Intervals   For each pair below, find and .    Problem 9  ,    Problem 10  ,    Problem 11  ,     Section 4 — Chaining It Together   Build the union of the first three sets, then intersect that result with the last set.    Problem 12    , , , . Find .     Problem 13    , , , . Find .      Section 5 — Capstone: Intersecting Two Compound Sets   Sketch and on two number lines, one above the other (or use two colors on the same line). Shade every piece of , then shade every piece of . The intersection is exactly wherever both shadings overlap — read the overlapping stretches straight off the picture, write each one as an interval (or as a single point, if that is all the overlap is), and combine them.  If you want the algebraic shorthand for what your picture just showed: when and , Each term is just one of the double-shaded stretches you already found — the picture and the formula describe the same thing.    Problem 14 (warm-up — is a single interval)   , . Find .     Problem 15   , . Find .     Problem 16   , . Find .     Problem 17 — Challenge    , . Find . (Somewhere the shading only touches, without overlapping into a stretch — what does that piece of the intersection look like?)      Section 6 — Build-Your-Own (Paired Activity)   Write your own set as a union of two intervals of your choosing, aiming to include at least one interesting boundary. Trade with a partner and compute together.    Your set  Write your set here.    With your partner   Compute together. How many pieces does your intersection have? Could you have chosen your intervals so that the intersection was ? So that it was a single point?     "
},
{
  "id": "ex-s1-warmup",
  "level": "2",
  "url": "activity-interval-union-intersection.html#ex-s1-warmup",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Section 1 — Warm-Up: Clearly Overlapping Intervals.",
  "body": " Section 1 — Warm-Up: Clearly Overlapping Intervals   For each pair below, find and .    Problem 1  ,    Problem 2  ,    Problem 3  ,    Problem 4  ,   "
},
{
  "id": "ex-s2-adjacent",
  "level": "2",
  "url": "activity-interval-union-intersection.html#ex-s2-adjacent",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Section 2 — Adjacent Intervals: The Endpoint Decides Everything.",
  "body": " Section 2 — Adjacent Intervals: The Endpoint Decides Everything   Each of the four pairs below uses the same two numbers as endpoints — only whether each set includes or excludes the shared value changes. Sketch each pair on a number line before answering. For each pair, find and , and answer: can the union be written as a single interval? Why or why not?    Problem 5  , (both closed at )    Problem 6  , (open at in , closed at in )    Problem 7  , (closed at in , open at in )    Problem 8  , (both open at )    Discussion   In Problem 5, the intersection is not empty, but it is not a normal interval either — what is it?  In Problem 8, the union is missing only one point — why does that single missing point stop it from being written as one interval?    "
},
{
  "id": "ex-s3-gaps",
  "level": "2",
  "url": "activity-interval-union-intersection.html#ex-s3-gaps",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Section 3 — True Gaps: Non-Overlapping Intervals.",
  "body": " Section 3 — True Gaps: Non-Overlapping Intervals   For each pair below, find and .    Problem 9  ,    Problem 10  ,    Problem 11  ,   "
},
{
  "id": "ex-s4-chaining",
  "level": "2",
  "url": "activity-interval-union-intersection.html#ex-s4-chaining",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Section 4 — Chaining It Together.",
  "body": " Section 4 — Chaining It Together   Build the union of the first three sets, then intersect that result with the last set.    Problem 12    , , , . Find .     Problem 13    , , , . Find .    "
},
{
  "id": "ex-s5-capstone",
  "level": "2",
  "url": "activity-interval-union-intersection.html#ex-s5-capstone",
  "type": "Worksheet Exercise",
  "number": "5",
  "title": "Section 5 — Capstone: Intersecting Two Compound Sets.",
  "body": " Section 5 — Capstone: Intersecting Two Compound Sets   Sketch and on two number lines, one above the other (or use two colors on the same line). Shade every piece of , then shade every piece of . The intersection is exactly wherever both shadings overlap — read the overlapping stretches straight off the picture, write each one as an interval (or as a single point, if that is all the overlap is), and combine them.  If you want the algebraic shorthand for what your picture just showed: when and , Each term is just one of the double-shaded stretches you already found — the picture and the formula describe the same thing.    Problem 14 (warm-up — is a single interval)   , . Find .     Problem 15   , . Find .     Problem 16   , . Find .     Problem 17 — Challenge    , . Find . (Somewhere the shading only touches, without overlapping into a stretch — what does that piece of the intersection look like?)    "
},
{
  "id": "ex-s6-build-your-own",
  "level": "2",
  "url": "activity-interval-union-intersection.html#ex-s6-build-your-own",
  "type": "Worksheet Exercise",
  "number": "6",
  "title": "Section 6 — Build-Your-Own (Paired Activity).",
  "body": " Section 6 — Build-Your-Own (Paired Activity)   Write your own set as a union of two intervals of your choosing, aiming to include at least one interesting boundary. Trade with a partner and compute together.    Your set  Write your set here.    With your partner   Compute together. How many pieces does your intersection have? Could you have chosen your intervals so that the intersection was ? So that it was a single point?    "
},
{
  "id": "activity-inverse-operations",
  "level": "1",
  "url": "activity-inverse-operations.html",
  "type": "Worksheet",
  "number": "",
  "title": "Method of Isolation: Solving by Inverse Operations",
  "body": " Method of Isolation: Solving by Inverse Operations   A formula is a set of instructions applied to a number , in a specific order . Solving an equation built from that formula means undoing the instructions in reverse order. This is called isolating  .  Work with your group. In this exercise, we will be deliberate in thinking through the order of operations. It will be like thinking about the formula as a story of operations that act on in turn. For each problem, clearly identify the forward story first before you try to solve anything.    Section 1: A Straightforward Story    The formula tells this story: Start with , multiply by , then add . Fill in the blank below the same way.         To solve , undo the story in reverse, undoing the last operation first. Fill in every blank, including the operation labels on the arrows.     What is ? Check your answer in the original equation.      Now do the same thing symbolically. Solve for by undoing the story.     Why must you undo \"multiply by \" last , even though it happened first in the forward story?      Solve each equation by writing and then undoing its story. Show both stories.                Section 2: Slightly More Complicated   Now consider . It's tempting to say the last step is divide by , but that's not the same kind of operation as before. Here is inside the formula you're dividing by . As an action happening to , it is not actually division. Instead, we remember that dividing by a quantity is the same as multiplying by its reciprocal .     Fill in the forward story for . ( Recip. means take the reciprocal. )         The reciprocal action is its own inverse: taking the reciprocal of a reciprocal gets you back where you started. Given that fact, what four steps and in what order will undo the actions in the story above? For this task, describe them in words. In the next task, you'll use the actions.      Solve by undoing the story, one arrow at a time — both sides together. Undo the outer two actions first to get down to an equation in , then finish it off just like Section 1. Fill in every blank.     Bring the value you just found down into the equation below.     Check your answer in the original equation.      Solve the same way. If your group has time, also solve for in terms of , , , and .     "
},
{
  "id": "activity-inverse-operations-2-1",
  "level": "2",
  "url": "activity-inverse-operations.html#activity-inverse-operations-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "isolating "
},
{
  "id": "ex-linear-story",
  "level": "2",
  "url": "activity-inverse-operations.html#ex-linear-story",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Section 1: A Straightforward Story.",
  "body": " Section 1: A Straightforward Story    The formula tells this story: Start with , multiply by , then add . Fill in the blank below the same way.         To solve , undo the story in reverse, undoing the last operation first. Fill in every blank, including the operation labels on the arrows.     What is ? Check your answer in the original equation.      Now do the same thing symbolically. Solve for by undoing the story.     Why must you undo \"multiply by \" last , even though it happened first in the forward story?      Solve each equation by writing and then undoing its story. Show both stories.              "
},
{
  "id": "ex-rational-story",
  "level": "2",
  "url": "activity-inverse-operations.html#ex-rational-story",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Section 2: Slightly More Complicated.",
  "body": " Section 2: Slightly More Complicated   Now consider . It's tempting to say the last step is divide by , but that's not the same kind of operation as before. Here is inside the formula you're dividing by . As an action happening to , it is not actually division. Instead, we remember that dividing by a quantity is the same as multiplying by its reciprocal .     Fill in the forward story for . ( Recip. means take the reciprocal. )         The reciprocal action is its own inverse: taking the reciprocal of a reciprocal gets you back where you started. Given that fact, what four steps and in what order will undo the actions in the story above? For this task, describe them in words. In the next task, you'll use the actions.      Solve by undoing the story, one arrow at a time — both sides together. Undo the outer two actions first to get down to an equation in , then finish it off just like Section 1. Fill in every blank.     Bring the value you just found down into the equation below.     Check your answer in the original equation.      Solve the same way. If your group has time, also solve for in terms of , , , and .    "
},
{
  "id": "activity-polynomial-sign-behavior",
  "level": "1",
  "url": "activity-polynomial-sign-behavior.html",
  "type": "Worksheet",
  "number": "",
  "title": "Sign Behavior of Factored Polynomials",
  "body": " Sign Behavior of Factored Polynomials   When a formula is written in factored form, its graph's sign (positive or negative) is controlled entirely by its roots. Today you will use Desmos to discover how. We will use what you notice today to solve equations and inequalities later.  Work through Sections 1-3 on your own, using your own computer or mobile device. Either scan the QR code or open the link shown. After Section 3, compare what you find with your neighbor, then work Section 4 together.    Section 1: One Root, Changing Multiplicity   Open the first Desmos page below. It graphs , with a slider for .    QR code linking to the Desmos graph for Section 1.          Set to each value below. For each one, record the sign of just to the left and just to the right of the root at , and whether the graph crosses the axis there or just touches it.     Sign for  Sign for  Cross or touch?   1  2  3  4       What determines whether the graph crosses or just touches at ? Write a one-sentence rule.      Section 2: Two Roots, Two Independent Exponents   Open the second Desmos page below. It graphs , with separate sliders for and .    QR code linking to the Desmos graph for Section 2.          Try at least three different combinations of and , including at least one even and one odd value for each. Record the sign of in each of the three intervals below.      Sign for  Sign for  Sign for           Does changing ever affect whether the graph crosses or touches at ? Does changing ever affect what happens at ? What does that tell you about how the two roots interact?      Section 3: Predict, Then Check   Do not open the Desmos page yet. Consider .     Before touching Desmos, predict the sign of in each interval below.    Interval  Predicted sign            Now open the Desmos page below. It starts with the placeholder formula . Change the polynomial from to and check your prediction. Where, if anywhere, were you wrong? Update your table above if needed.    QR code linking to the Desmos graph for Sections 3 and 4.           Use what you have seen in Sections 1-3 to make a single rule: given a polynomial in factored form, how do you decide whether the graph crosses or touches the axis at each root?      Suppose you multiplied your polynomial from this section by . Which of your answers above would change, and which would stay the same?      Section 4: Construct One Yourself (with your partner)   Compare your rule from Section 3 with your neighbor's rule. Then work together to build polynomials with the sign behavior described below. Use the last Desmos page to check your work. A constant multiple in front of your factored formula is allowed if you need.     Build a polynomial, in factored form, with a root at where the graph touches without crossing, a root at where it crosses, and a root at where it crosses, and so that is negative for . Check it in Desmos, then write your final formula below.      If you have time: build a second polynomial with a root at where the graph touches, a root at where it crosses, and a root at where it touches so that is negative for .     "
},
{
  "id": "ex-one-root",
  "level": "2",
  "url": "activity-polynomial-sign-behavior.html#ex-one-root",
  "type": "Worksheet Exercise",
  "number": "1",
  "title": "Section 1: One Root, Changing Multiplicity.",
  "body": " Section 1: One Root, Changing Multiplicity   Open the first Desmos page below. It graphs , with a slider for .    QR code linking to the Desmos graph for Section 1.          Set to each value below. For each one, record the sign of just to the left and just to the right of the root at , and whether the graph crosses the axis there or just touches it.     Sign for  Sign for  Cross or touch?   1  2  3  4       What determines whether the graph crosses or just touches at ? Write a one-sentence rule.    "
},
{
  "id": "ex-two-roots",
  "level": "2",
  "url": "activity-polynomial-sign-behavior.html#ex-two-roots",
  "type": "Worksheet Exercise",
  "number": "2",
  "title": "Section 2: Two Roots, Two Independent Exponents.",
  "body": " Section 2: Two Roots, Two Independent Exponents   Open the second Desmos page below. It graphs , with separate sliders for and .    QR code linking to the Desmos graph for Section 2.          Try at least three different combinations of and , including at least one even and one odd value for each. Record the sign of in each of the three intervals below.      Sign for  Sign for  Sign for           Does changing ever affect whether the graph crosses or touches at ? Does changing ever affect what happens at ? What does that tell you about how the two roots interact?    "
},
{
  "id": "ex-predict-check",
  "level": "2",
  "url": "activity-polynomial-sign-behavior.html#ex-predict-check",
  "type": "Worksheet Exercise",
  "number": "3",
  "title": "Section 3: Predict, Then Check.",
  "body": " Section 3: Predict, Then Check   Do not open the Desmos page yet. Consider .     Before touching Desmos, predict the sign of in each interval below.    Interval  Predicted sign            Now open the Desmos page below. It starts with the placeholder formula . Change the polynomial from to and check your prediction. Where, if anywhere, were you wrong? Update your table above if needed.    QR code linking to the Desmos graph for Sections 3 and 4.           Use what you have seen in Sections 1-3 to make a single rule: given a polynomial in factored form, how do you decide whether the graph crosses or touches the axis at each root?      Suppose you multiplied your polynomial from this section by . Which of your answers above would change, and which would stay the same?    "
},
{
  "id": "ex-construct",
  "level": "2",
  "url": "activity-polynomial-sign-behavior.html#ex-construct",
  "type": "Worksheet Exercise",
  "number": "4",
  "title": "Section 4: Construct One Yourself (with your partner).",
  "body": " Section 4: Construct One Yourself (with your partner)   Compare your rule from Section 3 with your neighbor's rule. Then work together to build polynomials with the sign behavior described below. Use the last Desmos page to check your work. A constant multiple in front of your factored formula is allowed if you need.     Build a polynomial, in factored form, with a root at where the graph touches without crossing, a root at where it crosses, and a root at where it crosses, and so that is negative for . Check it in Desmos, then write your final formula below.      If you have time: build a second polynomial with a root at where the graph touches, a root at where it crosses, and a root at where it touches so that is negative for .    "
},
{
  "id": "handouts",
  "level": "1",
  "url": "handouts.html",
  "type": "Chapter",
  "number": "",
  "title": "Handouts",
  "body": " Handouts    "
},
{
  "id": "homework",
  "level": "1",
  "url": "homework.html",
  "type": "Chapter",
  "number": "",
  "title": "Homework",
  "body": " Homework    "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
