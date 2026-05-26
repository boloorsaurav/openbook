---
chapter: 3
title: Trigonometric Functions
route: /read/grade-11/ch3
read_time: 45
---

## Sections

### 1: Introduction
eyebrow: Introduction

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Trigonometry was originally developed to solve geometric problems involving triangles.
- It is used in navigation, surveying, engineering, seismology, electric circuits, atomic physics, tidal prediction, and music analysis.
- In earlier classes, trigonometric ratios were studied for acute angles as ratios of sides of a right-angled triangle.
- This chapter generalizes trigonometric ratios to trigonometric functions for any angle and studies their properties.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- None.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "From Ratios to Functions" | content: "Trigonometric ratios are defined for acute angles in a right triangle. Trigonometric functions extend these definitions to any angle, measured in degrees or radians."

**Widget idea:** none

**Key terms:** trigonometry, trigonometric ratios, trigonometric functions

---

### 2: Angles
eyebrow: Section 3.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- An angle is a measure of rotation of a given ray about its initial point.
- The original ray is called the initial side, and the final position of the ray after rotation is called the terminal side.
- The point of rotation is called the vertex.
- If the direction of rotation is anticlockwise, the angle is positive; if clockwise, the angle is negative.
- The measure of an angle is the amount of rotation performed to get the terminal side from the initial side.
- One complete revolution is a common unit for large angles.
- Degree measure: one degree (1°) is 1/360 of a revolution.
- One degree is divided into 60 minutes (1° = 60′), and one minute is divided into 60 seconds (1′ = 60″).
- Radian measure: an angle subtended at the centre by an arc of length 1 unit in a unit circle (radius 1 unit) has a measure of 1 radian.
- One complete revolution of the initial side subtends an angle of 2π radians.
- In a circle of radius r, an arc of length r subtends an angle of 1 radian.
- In a circle of radius r, an arc of length l subtends an angle θ radian at the centre, given by θ = l/r or l = rθ.
- Radian measures and real numbers can be considered as one and the same by wrapping a real number line around a unit circle.
- 2π radians = 360°, so π radians = 180°.
- To convert radians to degrees: Degree measure = (180/π) × Radian measure.
- To convert degrees to radians: Radian measure = (π/180) × Degree measure.
- 1 radian = 180°/π ≈ 57°16′ approximately.
- 1° = π/180 radian ≈ 0.01746 radian approximately.
- Common angle conversions: 30° = π/6, 45° = π/4, 60° = π/3, 90° = π/2, 180° = π, 270° = 3π/2, 360° = 2π.
- Notation convention: angle θ° means degree measure θ; angle β means radian measure β. The word 'radian' is often omitted.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 1: Converts 40°20′ into radian measure, obtaining 121π/540 radians.
- Example 2: Converts 6 radians into degree measure, obtaining 343°38′11″ approximately.
- Example 3: Finds the radius of a circle (35.7 cm) given a central angle of 60° and an arc length of 37.4 cm.
- Example 4: Calculates the distance the tip of a 1.5 cm minute hand moves in 40 minutes, which is 6.28 cm.
- Example 5: Finds the ratio of radii of two circles (22:13) given arcs of the same length subtending angles of 65° and 110°.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Radian Measure Defined" | content: "One radian is the angle subtended at the centre of a circle by an arc equal in length to the radius of the circle."
- title: "The Arc Length Formula" | content: "For a circle of radius r, an arc of length l subtends an angle θ at the centre, where l = rθ. This formula requires θ to be in radians."

**Widget idea:** An interactive angle explorer where users can drag a ray to form an angle, seeing both degree and radian measures update in real time, along with a visual of the subtended arc on a unit circle.

**Key terms:** angle, initial side, terminal side, vertex, positive angle, negative angle, degree, minute, second, radian, arc length, unit circle

---

### 3: Trigonometric Functions
eyebrow: Section 3.3

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- For a unit circle with centre at the origin, let P(a, b) be a point on the circle with angle AOP = x radian (arc AP = x).
- cos x = a and sin x = b.
- Since OM² + MP² = OP² and OP = 1, we have a² + b² = 1, which gives cos² x + sin² x = 1 for all x.
- Quadrantal angles are angles that are integral multiples of π/2: 0, π/2, π, 3π/2, 2π.
- Coordinates of points for quadrantal angles: (1,0) for 0, (0,1) for π/2, (-1,0) for π, (0,-1) for 3π/2.
- Values of sine and cosine for quadrantal angles: cos 0° = 1, sin 0° = 0; cos π/2 = 0, sin π/2 = 1; cos π = -1, sin π = 0; cos 3π/2 = 0, sin 3π/2 = -1; cos 2π = 1, sin 2π = 0.
- Sine and cosine functions are periodic with period 2π: sin(2nπ + x) = sin x and cos(2nπ + x) = cos x for any integer n.
- sin x = 0 when x is an integral multiple of π: x = nπ, where n is any integer.
- cos x = 0 when x is an odd multiple of π/2: x = (2n+1)π/2, where n is any integer.
- Other trigonometric functions are defined in terms of sine and cosine:
  - cosec x = 1/sin x, where x ≠ nπ.
  - sec x = 1/cos x, where x ≠ (2n+1)π/2.
  - tan x = sin x / cos x, where x ≠ (2n+1)π/2.
  - cot x = cos x / sin x, where x ≠ nπ.
- Fundamental identities: sin² x + cos² x = 1; 1 + tan² x = sec² x; 1 + cot² x = cosec² x.
- Table of values for common angles (0°, 30°, 45°, 60°, 90°, 180°, 270°, 360°):
  - sin: 0, 1/2, 1/√2, √3/2, 1, 0, -1, 0.
  - cos: 1, √3/2, 1/√2, 1/2, 0, -1, 0, 1.
  - tan: 0, 1/√3, 1, √3, not defined, 0, not defined, 0.
- Sign of trigonometric functions in different quadrants:
  - Quadrant I (0 to π/2): all positive.
  - Quadrant II (π/2 to π): sin and cosec positive; cos, sec, tan, cot negative.
  - Quadrant III (π to 3π/2): tan and cot positive; sin, cos, sec, cosec negative.
  - Quadrant IV (3π/2 to 2π): cos and sec positive; sin, cosec, tan, cot negative.
- Domain and range of trigonometric functions:
  - sin x and cos x: domain is all real numbers, range is [-1, 1].
  - cosec x: domain is {x: x ∈ R, x ≠ nπ}, range is {y: y ∈ R, y ≥ 1 or y ≤ -1}.
  - sec x: domain is {x: x ∈ R, x ≠ (2n+1)π/2}, range is {y: y ∈ R, y ≥ 1 or y ≤ -1}.
  - tan x: domain is {x: x ∈ R, x ≠ (2n+1)π/2}, range is all real numbers.
  - cot x: domain is {x: x ∈ R, x ≠ nπ}, range is all real numbers.
- Behaviour of trigonometric functions in each quadrant:
  - In QI, sin increases from 0 to 1, cos decreases from 1 to 0, tan increases from 0 to ∞.
  - In QII, sin decreases from 1 to 0, cos decreases from 0 to -1, tan increases from -∞ to 0.
  - In QIII, sin decreases from 0 to -1, cos increases from -1 to 0, tan increases from 0 to ∞.
  - In QIV, sin increases from -1 to 0, cos increases from 0 to 1, tan increases from -∞ to 0.
- The values of sin x and cos x repeat after an interval of 2π; therefore, cosec x and sec x also repeat after 2π.
- The values of tan x and cot x repeat after an interval of π.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 6: Given cos x = -3/5 and x in the third quadrant, finds the values of the other five trigonometric functions.
- Example 7: Given cot x = -5/12 and x in the second quadrant, finds the values of the other five trigonometric functions.
- Example 8: Finds the value of sin(31π/3) by using the periodicity of sine, obtaining √3/2.
- Example 9: Finds the value of cos(-1710°) by using the periodicity of cosine, obtaining 0.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "The Unit Circle Definition" | content: "For any angle x, cos x and sin x are the x- and y-coordinates of the point on the unit circle at that angle."
- title: "Periodicity of Sine and Cosine" | content: "sin(2nπ + x) = sin x and cos(2nπ + x) = cos x for any integer n. This means the functions repeat every 2π radians."
- title: "Signs in Quadrants" | content: "A mnemonic: 'All Students Take Calculus' — All positive in QI, Sine positive in QII, Tangent positive in QIII, Cosine positive in QIV."

**Widget idea:** An interactive unit circle where users can drag a point around the circle. The angle, coordinates (cos, sin), and the values of all six trigonometric functions update in real time. A quadrant indicator shows the sign of each function.

**Key terms:** trigonometric functions, unit circle, quadrantal angles, periodic functions, period, domain, range, cosecant, secant, tangent, cotangent

---

### 4: Trigonometric Functions of Sum and Difference of Two Angles
eyebrow: Section 3.4

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- sin(-x) = -sin x
- cos(-x) = cos x
- cos(x + y) = cos x cos y - sin x sin y
- cos(x - y) = cos x cos y + sin x sin y
- cos(π/2 - x) = sin x
- sin(π/2 - x) = cos x
- sin(x + y) = sin x cos y + cos x sin y
- sin(x - y) = sin x cos y - cos x sin y
- cos(π/2 + x) = -sin x
- sin(π/2 + x) = cos x
- cos(π - x) = -cos x
- sin(π - x) = sin x
- cos(π + x) = -cos x
- sin(π + x) = -sin x
- cos(2π - x) = cos x
- sin(2π - x) = -sin x
- tan(x + y) = (tan x + tan y) / (1 - tan x tan y), provided none of x, y, and (x+y) is an odd multiple of π/2.
- tan(x - y) = (tan x - tan y) / (1 + tan x tan y), provided none of x, y, and (x-y) is an odd multiple of π/2.
- cot(x + y) = (cot x cot y - 1) / (cot y + cot x), provided none of x, y, and (x+y) is a multiple of π.
- cot(x - y) = (cot x cot y + 1) / (cot y - cot x), provided none of x, y, and (x-y) is a multiple of π.
- Double-angle formulas:
  - cos 2x = cos² x - sin² x = 2 cos² x - 1 = 1 - 2 sin² x = (1 - tan² x) / (1 + tan² x)
  - sin 2x = 2 sin x cos x = (2 tan x) / (1 + tan² x)
  - tan 2x = (2 tan x) / (1 - tan² x), provided 2x is not an odd multiple of π/2.
- Triple-angle formulas:
  - sin 3x = 3 sin x - 4 sin³ x
  - cos 3x = 4 cos³ x - 3 cos x
  - tan 3x = (3 tan x - tan³ x) / (1 - 3 tan² x), provided 3x is not an odd multiple of π/2.
- Sum-to-product formulas:
  - cos x + cos y = 2 cos((x+y)/2) cos((x-y)/2)
  - cos x - cos y = -2 sin((x+y)/2) sin((x-y)/2)
  - sin x + sin y = 2 sin((x+y)/2) cos((x-y)/2)
  - sin x - sin y = 2 cos((x+y)/2) sin((x-y)/2)
- Product-to-sum formulas:
  - 2 cos x cos y = cos(x+y) + cos(x-y)
  - -2 sin x sin y = cos(x+y) - cos(x-y)
  - 2 sin x cos y = sin(x+y) + sin(x-y)
  - 2 cos x sin y = sin(x+y) - sin(x-y)

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 10: Proves that 3 sin(π/6) sec(π/3) - 4 sin(5π/6) cot(π/4) = 1.
- Example 11: Finds the value of sin 15° using the difference formula for sine, obtaining (√3 - 1)/(2√2).
- Example 12: Finds the value of tan(13π/12) using the sum formula for tangent, obtaining 2 - √3.
- Example 13: Proves that sin(x+y)/sin(x-y) = (tan x + tan y)/(tan x - tan y).
- Example 14: Shows that tan 3x tan 2x tan x = tan 3x - tan 2x - tan x.
- Example 15: Proves that cos(π/4 + x) + cos(π/4 - x) = √2 cos x.
- Example 16: Proves that (cos 7x + cos 5x) / (sin 7x - sin 5x) = cot x.
- Example 17: Proves that (sin 5x - 2 sin 3x + sin x) / (cos 5x - cos x) = tan x.
- Example 18: Given sin x = 3/5 and cos y = -12/13, with x and y in the second quadrant, finds sin(x+y) = -56/65.
- Example 19: Proves that cos 2x cos(x/2) - cos 3x cos(9x/2) = sin 5x sin(5x/2).
- Example 20: Finds the value of tan(π/8) by solving a quadratic equation, obtaining √2 - 1.
- Example 21: Given tan x = 3/4 and π < x < 3π/2, finds sin(x/2) = 3/√10, cos(x/2) = -1/√10, and tan(x/2) = -3.
- Example 22: Proves that cos² x + cos²(x + π/3) + cos²(x - π/3) = 3/2.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "The Core Sum Formulas" | content: "cos(x+y) = cos x cos y - sin x sin y and sin(x+y) = sin x cos y + cos x sin y are the foundation for all other sum, difference, double-angle, and triple-angle formulas."
- title: "Double-Angle Formulas" | content: "cos 2x = cos² x - sin² x = 2 cos² x - 1 = 1 - 2 sin² x. These three forms are useful for integration and solving equations."
- title: "Sum-to-Product Formulas" | content: "These formulas convert sums or differences of sines and cosines into products, which is useful for simplifying expressions and solving equations."

**Widget idea:** An interactive formula explorer. Users can select a formula category (e.g., Sum/Difference, Double Angle, Sum-to-Product). The widget displays the formula and allows users to input values for x and y (in degrees or radians) to see a numerical verification.

**Key terms:** sum formulas, difference formulas, double-angle formulas, triple-angle formulas, sum-to-product formulas, product-to-sum formulas, half-angle formulas

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "An angle of 1 radian is defined as the angle subtended at the centre of a circle by an arc whose length is equal to:",
    "options": ["The diameter of the circle", "The radius of the circle", "The circumference of the circle", "Half the circumference of the circle"],
    "answer": 1,
    "hint": "Recall the definition of a radian.",
    "explanation": "One radian is the angle subtended at the centre of a circle by an arc of length equal to the radius of the circle."
  },
  {
    "question": "What is the degree measure of an angle of 3π/4 radians?",
    "options": ["120°", "135°", "150°", "270°"],
    "answer": 1,
    "hint": "Use the conversion factor: π radians = 180°.",
    "explanation": "3π/4 radians * (180°/π) = (3 * 180°)/4 = 135°."
  },
  {
    "question": "A central angle of 45° in a circle of radius 10 cm intercepts an arc of what length?",
    "options": ["(45π)/180 cm", "(10π)/4 cm", "(45π)/10 cm", "(10π)/45 cm"],
    "answer": 1,
    "hint": "Convert the angle to radians first, then use the formula l = rθ.",
    "explanation": "45° = π/4 radians. l = rθ = 10 * (π/4) = (10π)/4 cm."
  },
  {
    "question": "If sin x = 0, then x must be:",
    "options": ["An odd multiple of π/2", "An even multiple of π/2", "An integral multiple of π", "An integral multiple of 2π"],
    "answer": 2,
    "hint": "Think about where the y-coordinate on the unit circle is zero.",
    "explanation": "sin x = 0 at x = 0, ±π, ±2π, ... which are integral multiples of π (x = nπ)."
  },
  {
    "question": "In which quadrant does the terminal side of an angle of 210° lie?",
    "options": ["First", "Second", "Third", "Fourth"],
    "answer": 2,
    "hint": "Angles between 180° and 270° lie in the third quadrant.",
    "explanation": "210° is between 180° and 270°, so its terminal side lies in the third quadrant."
  },
  {
    "question": "If cos x = -1/2 and x lies in the third quadrant, what is the value of sin x?",
    "options": ["√3/2", "-√3/2", "1/2", "-1/2"],
    "answer": 1,
    "hint": "Use the identity sin² x + cos² x = 1 and consider the sign of sin x in the third quadrant.",
    "explanation": "sin² x = 1 - (1/4) = 3/4, so sin x = ±√3/2. In the third quadrant, sin x is negative, so sin x = -√3/2."
  },
  {
    "question": "What is the range of the function y = sec x?",
    "options": ["[-1, 1]", "All real numbers", "(-∞, -1] ∪ [1, ∞)", "(0, ∞)"],
    "answer": 2,
    "hint": "Sec x is the reciprocal of cos x. Consider the range of cos x.",
    "explanation": "Since cos x ∈ [-1, 1], its reciprocal sec x = 1/cos x will be in (-∞, -1] ∪ [1, ∞)."
  },
  {
    "question": "Which of the following is equal to sin(π - x)?",
    "options": ["-sin x", "cos x", "sin x", "-cos x"],
    "answer": 2,
    "hint": "Use the sine difference formula or the symmetry of the unit circle.",
    "explanation": "sin(π - x) = sin π cos x - cos π sin x = (0)(cos x) - (-1)(sin x) = sin x."
  },
  {
    "question": "The expression cos(x + y) cos y + sin(x + y) sin y simplifies to:",
    "options": ["cos x", "sin x", "cos(x + 2y)", "sin(x + 2y)"],
    "answer": 0,
    "hint": "Recognize this as the cosine of a difference formula: cos(A - B) = cos A cos B + sin A sin B.",
    "explanation": "Let A = x + y and B = y. Then cos(A - B) = cos((x+y) - y) = cos x."
  },
  {
    "question": "What is the value of sin 75°?",
    "options": ["(√3 + 1)/(2√2)", "(√3 - 1)/(2√2)", "(√6 + √2)/4", "(√6 - √2)/4"],
    "answer": 0,
    "hint": "Write 75° as 45° + 30° and use the sine sum formula.",
    "explanation": "sin 75° = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3+1)/(2√2)."
  },
  {
    "question": "If tan x = 1/2 and tan y = 1/3, what is the value of tan(x + y)?",
    "options": ["5/6", "1", "5/7", "6/5"],
    "answer": 1,
    "hint": "Use the formula tan(x+y) = (tan x + tan y) / (1 - tan x tan y).",
    "explanation": "tan(x+y) = (1/2 + 1/3) / (1 - (1/2)(1/3)) = (5/6) / (1 - 1/6) = (5/6) / (5/6) = 1."
  },
  {
    "question": "Which of the following is an expression for cos 2x?",
    "options": ["2 sin² x - 1", "1 - 2 sin² x", "2 cos² x + 1", "sin² x - cos² x"],
    "answer": 1,
    "hint": "Recall the double-angle formulas for cosine.",
    "explanation": "cos 2x = cos² x - sin² x = 1 - 2 sin² x = 2 cos² x - 1."
  },
  {
    "question": "The expression sin 3x can be written as:",
    "options": ["3 sin x + 4 sin³ x", "3 sin x - 4 sin³ x", "4 sin³ x - 3 sin x", "4 cos³ x - 3 cos x"],
    "answer": 1,
    "hint": "Use the triple-angle formula for sine.",
    "explanation": "sin 3x = 3 sin x - 4 sin³ x."
  },
  {
    "question": "What is the value of cos 15°?",
    "options": ["(√6 - √2)/4", "(√6 + √2)/4", "(√3 - 1)/(2√2)", "(√3 + 1)/(2√2)"],
    "answer": 1,
    "hint": "Write 15° as 45° - 30° and use the cosine difference formula.",
    "explanation": "cos 15° = cos(45°-30°) = cos45°cos30° + sin45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√6+√2)/4."
  },
  {
    "question": "The expression sin x + sin y is equal to:",
    "options": ["2 sin((x+y)/2) cos((x-y)/2)", "2 cos((x+y)/2) sin((x-y)/2)", "2 sin((x+y)/2) sin((x-y)/2)", "2 cos((x+y)/2) cos((x-y)/2)"],
    "answer": 0,
    "hint": "Use the sum-to-product formula for sine.",
    "explanation": "sin x + sin y = 2 sin((x+y)/2) cos((x-y)/2)."
  },
  {
    "question": "Which of the following is equal to 2 cos x cos y?",
    "options": ["cos(x+y) - cos(x-y)", "cos(x+y) + cos(x-y)", "sin(x+y) + sin(x-y)", "sin(x+y) - sin(x-y)"],
    "answer": 1,
    "hint": "Use the product-to-sum formulas.",
    "explanation": "2 cos x cos y = cos(x+y) + cos(x-y)."
  },
  {
    "question": "If sin x = 3/5 and x is in the second quadrant, what is the value of cos x?",
    "options": ["4/5", "-4/5", "3/4", "-3/4"],
    "answer": 1,
    "hint": "Use sin² x + cos² x = 1 and consider the sign of cos x in the second quadrant.",
    "explanation": "cos² x = 1 - 9/25 = 16/25, so cos x = ±4/5. In the second quadrant, cos x is negative, so cos x = -4/5."
  },
  {
    "question": "What is the value of tan(π/8)?",
    "options": ["√2 + 1", "√2 - 1", "2 - √2", "2 + √2"],
    "answer": 1,
    "hint": "Use the half-angle or double-angle formula for tangent, or solve the equation tan(2x) = 1 for x = π/8.",
    "explanation": "Using the double-angle formula, tan(π/4) = 1 = 2t/(1-t²) where t = tan(π/8). Solving t² + 2t - 1 = 0 gives t = -1 ± √2. Since π/8 is in the first quadrant, tan(π/8) is positive, so t = √2 - 1."
  },
  {
    "question": "The expression (cos 7x + cos 5x) / (sin 7x - sin 5x) simplifies to:",
    "options": ["tan 6x", "cot 6x", "tan x", "cot x"],
    "answer": 3,
    "hint": "Use the sum-to-product formulas for both numerator and denominator.",
    "explanation": "cos 7x + cos 5x = 2 cos 6x cos x. sin 7x - sin 5x = 2 cos 6x sin x. The ratio is (2 cos 6x cos x) / (2 cos 6x sin x) = cot x."
  },
  {
    "question": "What is the period of the function y = tan x?",
    "options": ["π/2", "π", "2π", "It is not periodic"],
    "answer": 1,
    "hint": "Consider the repeating pattern of the tangent function on the unit circle.",
    "explanation": "tan(π + x) = tan x, so the period of tan x is π."
  },
  {
    "question": "If cos x = -1/3 and x is in the third quadrant, what is the value of sin(x/2)?",
    "options": ["√(2/3)", "-√(2/3)", "√(1/3)", "-√(1/3)"],
    "answer": 0,
    "hint": "Use the half-angle formula sin²(x/2) = (1 - cos x)/2. Determine the quadrant of x/2 to find the sign.",
    "explanation": "sin²(x/2) = (1 - (-1/3))/2 = (4/3)/2 = 2/3. Since x is in QIII (π < x < 3π/2), x/2 is in QII (π/2 < x/2 < 3π/4), where sin is positive. So sin(x/2) = √(2/3)."
  },
  {
    "question": "The value of cos 2x when x = 30° is:",
    "options": ["1/2", "√3/2", "0", "1"],
    "answer": 0,
    "hint": "Use the double-angle formula cos 2x = 2 cos² x - 1.",
    "explanation": "cos 60° = 2 cos² 30° - 1 = 2(√3/2)² - 1 = 2(3/4) - 1 = 3/2 - 1 = 1/2."
  },
  {
    "question": "Which of the following is NOT a valid identity?",
    "options": ["sin² x + cos² x = 1", "1 + tan² x = sec² x", "1 + cot² x = cosec² x", "tan² x + sec² x = 1"],
    "answer": 3,
    "hint": "Recall the Pythagorean identities derived from sin² x + cos² x = 1.",
    "explanation": "Dividing sin² x + cos² x = 1 by cos² x gives tan² x + 1 = sec² x, not tan² x + sec² x = 1."
  },
  {
    "question": "If sin x = 1/2, which of the following could be a value of x?",
    "options": ["π/6", "π/3", "π/4", "π/2"],
    "answer": 0,
    "hint": "Recall the standard values of sine for common angles.",
    "explanation": "sin(π/6) = sin 30° = 1/2."
  },
  {
    "question": "The expression cos(π/2 + x) is equal to:",
    "options": ["sin x", "-sin x", "cos x", "-cos x"],
    "answer": 1,
    "hint": "Use the cosine sum formula: cos(A+B) = cos A cos B - sin A sin B.",
    "explanation": "cos(π/2 + x) = cos(π/2)cos x - sin(π/2)sin x = (0)(cos x) - (1)(sin x) = -sin x."
  }
]
```
