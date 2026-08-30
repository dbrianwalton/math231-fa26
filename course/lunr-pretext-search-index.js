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
  "body": " Week 1 and Week 2   The first two weeks of class focus on some prerequisite understanding necessary for our later conversations about functions and their analysis.    P1 Linear Modeling  I can calculate a slope as a rate of change and use it with the point-slope equation of a line to model a linear relation between two variables.  What do I need to understand?    Conceptual : A slope is a proportionality constant relating the change in a dependent variable with respect to the change in an independent variable, usually written , where represents the slope, represents the increment of change in the independent variable , and represents the increment of change in the dependent variable .  The variables and represent abstract placeholders for more physically relevant variables. you will need to be able to use other variables.     Computational : Calculate the slope between two points, and as      Modeling : Although you likely currently feel most comfortable with the slope-intercept equation of a line , I am asking you to begin thinking in terms of the point-slope equation of a line given by where represents the known slope and represents a known point on the line.  This model of a line physically thinks through the process as follows. We know when , the value of starts at (because it is on the line). As changes to any other value, the value of  also changes, and the slope gives the proportional amount of change:   It is this idea that generalizes later in calculus to the idea of a definite integral measuring the change when the rate of change or slope is not constant: . You are not expected to understand this bit yet -- it is a preview to the future.       When a company sets the price of its product at $ , it is able to sell items per day. When it changes the price to $ , it is able to sell items per day. Create a linear model using the point-slope equation for the number of items sold per day as a function of the company's price .   =               S0 \/ 2       p0+delta_p    S0-delta_S    S0 - (delta_S \/ delta_p)*(p - p0)              P2 Intervals and Set Operations  I can translate a graphical representation of a set of numbers back and forth to interval notation and compute unions and intersections of multiple such sets.  What do I need to understand?   A collection of real numbers is a set . Simple sets with a finite number of values can be expressed using curly braces listing the numbers separated by commas, such as , which is a set including the values of -3, 2, and 5.    We often deal with sets formed by intervals , which are sets that include all of the values between two endpoints, and possibly the endpoints as well.  A single interval , where and represent any real numbers with (or possibly or ), describes the set of values between  and . It corresponds to the set of values such that , which in set constructor notation is . This type of interval where the endpoints are not included is called an open interval .  In order to describe an interval where the endpoint is included, we change the round parenthesis into a square bracket on the endpoint that is included. When both endpoints are included, the interval is called a closed interval .    The graphical representation of an interval is created by drawing a line segment between the endpoints, and marking the endpoints themselves with either open circles (if not included ) or closed circles (if included ). If the interval extends to infinity, instead of putting a circle on that end, we put an arrow to indicate it continues indefinitely.    When a set includes values coming from multiple disconnected or disjoint intervals, we describe the set as a union of the component intervals. A single isolated number can also be included as a set .  Suppose my set has component intervals or isolated values that can be described individually as , , , etc. Then we would write Using the union operation creates a single set from many component pieces.    Given two sets and , the union is a new set that consists of all values in at least one of the two sets (could be in just one or both).  Given two sets and , the intersection is a new set that consists of all values in both the two sets (must be in both). This is the values in the overlap   After you identify the values in a set, you then identify the new component intervals and possible isolated values to rewrite the set using interval notation.       Friday 8\/26     "
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
  "number": "2",
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
  "body": " Union and Intersection of Intervals   Today's problems are ordered so that you meet one new wrinkle at a time instead of all at once. We will start with clearly overlapping intervals to get the mechanics down, then look closely at what happens when two intervals share a single boundary point, then at intervals with a genuine gap between them. After that we will chain three sets together, and finish by intersecting two sets that are each already written as a union of two intervals.  Sketch each set on a number line before you write down an answer — it will save you from the most common mistakes.    Section 1 — Warm-Up: Clearly Overlapping Intervals   For each pair below, find and .    Problem 1  ,    Problem 2  ,    Problem 3  ,    Problem 4  ,     Section 2 — Adjacent Intervals: The Endpoint Decides Everything   Each of the four pairs below uses the same two numbers as endpoints — only whether each set includes or excludes the shared value changes. Sketch each pair on a number line before answering. For each pair, find and , and answer: can the union be written as a single interval? Why or why not?    Problem 5  , (both closed at )    Problem 6  , (open at in , closed at in )    Problem 7  , (closed at in , open at in )    Problem 8  , (both open at )    Discussion   In Problem 5, the intersection is not empty, but it is not a normal interval either — what is it?  In Problem 8, the union is missing only one point — why does that single missing point stop it from being written as one interval?      Section 3 — True Gaps: Non-Overlapping Intervals   For each pair below, find and .    Problem 9  ,    Problem 10  ,    Problem 11  ,     Section 4 — Chaining It Together   Build the union of the first three sets, then intersect that result with the last set.    Problem 12    , , , . Find .     Problem 13    , , , . Find .      Section 5 — Capstone: Intersecting Two Compound Sets   When and , distribute: Compute all four pairwise intersections (some will be empty), then combine and simplify.    Problem 14 (warm-up — is a single interval)   , . Find .     Problem 15   , . Find .     Problem 16   , . Find .     Problem 17 — Challenge    , . Find . (One of the four pairwise pieces is not an interval at all — what is it?)      Section 6 — Build-Your-Own (Paired Activity)   Write your own set as a union of two intervals of your choosing, aiming to include at least one interesting boundary. Trade with a partner and compute together.    Your set  Write your set here.    With your partner   Compute together. How many pieces does your intersection have? Could you have chosen your intervals so that the intersection was ? So that it was a single point?     "
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
  "body": " Section 5 — Capstone: Intersecting Two Compound Sets   When and , distribute: Compute all four pairwise intersections (some will be empty), then combine and simplify.    Problem 14 (warm-up — is a single interval)   , . Find .     Problem 15   , . Find .     Problem 16   , . Find .     Problem 17 — Challenge    , . Find . (One of the four pairwise pieces is not an interval at all — what is it?)    "
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
