---
chapter: 12
title: Limits and Derivatives
route: /read/grade-11/ch12
read_time: 35
---

## Sections

### 1: Introduction
eyebrow: Introduction

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Calculus is the branch of mathematics that deals with the study of change in the value of a function as the points in the domain change.
- This chapter first gives an intuitive idea of a derivative, then a naive definition of a limit and the algebra of limits, and finally a definition of a derivative and the algebra of derivatives.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- None.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "What is Calculus?" | content: "Calculus is the branch of mathematics that mainly deals with the study of change in the value of a function as the points in the domain change."

**Widget idea:** none

**Key terms:** Calculus, derivative, limit

---

### 2: Intuitive Idea of Derivatives
eyebrow: Intuitive Idea

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The distance s in metres covered by a body dropped from a tall cliff as a function of time t in seconds is given by s = 4.9 t squared.
- Average velocity between time t1 and t2 equals distance travelled between t1 and t2 seconds divided by (t2 minus t1).
- To find the instantaneous velocity at a specific time, we compute average velocities for smaller and smaller time intervals ending at that time.
- As the time intervals become smaller, the average velocities approach a common limit, which is the instantaneous velocity.
- The instantaneous velocity at a time t is equal to the slope of the tangent to the curve of distance versus time at that point.
- The derivative of the distance function at a given time is the instantaneous velocity at that time.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The average velocity of a body dropped from a cliff between t=0 and t=2 seconds is calculated as 9.8 m/s using the formula s=4.9t squared.
- A table of average velocities for time intervals ending at t=2 seconds shows the average velocity increasing and approaching a value just above 19.551 m/s.
- A table of average velocities for time intervals starting at t=2 seconds shows the average velocity decreasing and approaching a value just below 19.649 m/s.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Instantaneous Velocity" | content: "The instantaneous velocity at a given time is the limit of the average velocities as the time interval approaches zero."
- title: "Derivative as Slope" | content: "The derivative of a distance function at a point is equal to the slope of the tangent line to the curve at that point."

**Widget idea:** An interactive graph of s = 4.9t squared where a user can drag a point to see the secant line approach the tangent line as the time interval shrinks.

**Key terms:** Average velocity, instantaneous velocity, tangent, slope

---

### 3: Limits
eyebrow: Limits

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The limit of a function f(x) as x approaches a is the value that f(x) should assume at x = a, based on the values of f(x) for x near a.
- The limit of f(x) as x approaches a is written as "limit of f(x) as x tends to a equals l".
- The left hand limit of a function f(x) at a is the expected value of f at x = a given the values of f near x to the left of a.
- The right hand limit of a function f(x) at a is the expected value of f at x = a given the values of f near x to the right of a.
- If the right and left hand limits coincide, that common value is called the limit of f(x) at x = a.
- If the right and left hand limits are different, the limit of the function at that point does not exist.
- The limit of a constant function f(x) = c as x approaches any real number a is c.
- The limit of a function at a point may be different from the value of the function at that point.
- A limit can be infinite, meaning the value of the function becomes larger than any given number as x approaches a point.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- For f(x) = x squared, as x takes values very close to 0, the value of f(x) also moves towards 0, so the limit is 0.
- For g(x) = |x|, x not equal to 0, the value of g(x) moves towards 0 as x approaches 0, so the limit is 0.
- For h(x) = (x squared minus 4) / (x minus 2), x not equal to 2, the values of h(x) for x near 2 are near 4.
- For a piecewise function f(x) = 1 for x less than or equal to 0 and f(x) = 2 for x greater than 0, the left hand limit at 0 is 1 and the right hand limit at 0 is 2, so the limit does not exist.
- For f(x) = x + 10, the left and right hand limits at x = 5 are both 15, so the limit is 15.
- For f(x) = x cubed, the left and right hand limits at x = 1 are both 1, so the limit is 1.
- For f(x) = 3x, the left and right hand limits at x = 2 are both 6, so the limit is 6.
- For the constant function f(x) = 3, the limit at x = 2 is 3.
- For f(x) = x squared + x, the left and right hand limits at x = 1 are both 2, so the limit is 2.
- For f(x) = sin x, the limit as x approaches pi/2 is 1.
- For f(x) = x + cos x, the limit as x approaches 0 is 1.
- For f(x) = 1 / x squared for x greater than 0, as x tends to 0, f(x) becomes larger and larger, so the limit is positive infinity.
- For a piecewise function f(x) = x minus 2 for x less than 0, f(x) = 0 for x = 0, and f(x) = x + 2 for x greater than 0, the left hand limit at 0 is -2 and the right hand limit at 0 is 2, so the limit does not exist.
- For a piecewise function f(x) = x + 2 for x not equal to 1 and f(x) = 0 for x = 1, the left and right hand limits at x = 1 are both 3, so the limit is 3, even though the function value at 1 is 0.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Left and Right Hand Limits" | content: "The left hand limit is the expected value from values to the left of a point, and the right hand limit is the expected value from values to the right. The limit exists only if they are equal."
- title: "Limit vs. Function Value" | content: "The limit of a function at a point and the value of the function at that point may be different. The limit is about the function's behavior near the point, not necessarily at the point."

**Widget idea:** An interactive graph where a user can toggle between different functions (e.g., continuous, piecewise, with a hole) and see the left and right hand limits as they approach a point.

**Key terms:** Limit, left hand limit, right hand limit, does not exist, infinite limit

---

### 4: Algebra of Limits
eyebrow: Algebra of Limits

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The limit of the sum of two functions is the sum of their limits.
- The limit of the difference of two functions is the difference of their limits.
- The limit of the product of two functions is the product of their limits.
- The limit of the quotient of two functions is the quotient of their limits, provided the limit of the denominator is not zero.
- As a special case of the product rule, the limit of a constant times a function is the constant times the limit of the function.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The limit of x squared plus x as x approaches 1 is shown to be equal to the sum of the limit of x squared and the limit of x.
- The limit of x times (x+1) as x approaches 1 is shown to be equal to the product of the limit of x and the limit of (x+1).

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Algebra of Limits" | content: "Limits respect addition, subtraction, multiplication, and division, as long as the limits exist and the denominator's limit is not zero."

**Widget idea:** none

**Key terms:** Sum rule, difference rule, product rule, quotient rule

---

### 5: Limits of Polynomials and Rational Functions
eyebrow: Limits of Polynomials and Rational Functions

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- A polynomial function of degree n is of the form f(x) = a0 + a1 x + a2 x squared + ... + an x to the power n, where the a's are real numbers and an is not zero.
- The limit of x as x approaches a is a.
- The limit of x squared as x approaches a is a squared.
- The limit of x to the power n as x approaches a is a to the power n.
- The limit of a polynomial function f(x) as x approaches a is f(a).
- A rational function is of the form f(x) = g(x) / h(x), where g(x) and h(x) are polynomials and h(x) is not zero.
- The limit of a rational function f(x) = g(x)/h(x) as x approaches a is g(a)/h(a), provided h(a) is not zero.
- If h(a) = 0 and g(a) is not zero, the limit does not exist.
- If both h(a) = 0 and g(a) = 0, we can factor out common factors of (x minus a) from the numerator and denominator and then evaluate the limit.
- For any positive integer n, the limit of (x to the power n minus a to the power n) divided by (x minus a) as x approaches a is n times a to the power (n minus 1).
- This theorem is also true for any rational number n and a positive a.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The limit of (x cubed minus x squared plus 1) as x approaches 1 is found by direct substitution to be 1.
- The limit of x(x+1) as x approaches 3 is found by direct substitution to be 12.
- The limit of (1 + x + x squared + ... + x to the power 10) as x approaches -1 is found by direct substitution to be 1.
- The limit of (x squared + 1) / (x + 100) as x approaches 1 is found by direct substitution to be 2/101.
- The limit of (x cubed minus 4x squared + 4x) / (x squared minus 4) as x approaches 2 is found by factoring and canceling (x-2) to be 0.
- The limit of (x squared minus 4) / (x cubed minus 4x squared + 4x) as x approaches 2 is found to be undefined because the denominator becomes zero after canceling.
- The limit of (x cubed minus 2x squared) / (x squared minus 5x + 6) as x approaches 2 is found by factoring and canceling (x-2) to be -4.
- The limit of a complex rational function as x approaches 1 is found by simplifying to a single rational function, factoring, and canceling (x-1) to be 2.
- The limit of (x to the power 15 minus 1) / (x to the power 10 minus 1) as x approaches 1 is found using the theorem to be 3/2.
- The limit of (square root of (1+x) minus 1) / x as x approaches 0 is found by substituting y = 1+x and using the theorem to be 1/2.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Limit of a Polynomial" | content: "The limit of a polynomial function f(x) as x approaches a is simply f(a)."
- title: "Indeterminate Form 0/0" | content: "When evaluating a rational function and both numerator and denominator are zero at the limit point, factor and cancel the common factor before substituting."

**Widget idea:** An interactive tool where a user can input a rational function and see the steps for factoring and canceling common factors to evaluate a limit.

**Key terms:** Polynomial function, rational function, direct substitution, factoring, canceling

---

### 6: Limits of Trigonometric Functions
eyebrow: Limits of Trigonometric Functions

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- If f(x) is less than or equal to g(x) for all x in the domain, and both limits exist, then the limit of f(x) is less than or equal to the limit of g(x).
- The Sandwich Theorem (or Squeeze Theorem): If f(x) is less than or equal to g(x) is less than or equal to h(x) for all x in the common domain, and the limits of f(x) and h(x) as x approaches a are both equal to l, then the limit of g(x) as x approaches a is also l.
- For 0 less than x less than pi/2, the inequality cos x is less than (sin x)/x is less than 1 holds.
- The limit of sin x / x as x approaches 0 is 1.
- The limit of (1 minus cos x) / x as x approaches 0 is 0.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The limit of sin(4x) / sin(2x) as x approaches 0 is evaluated by rewriting and using the standard limit to be 2.
- The limit of tan x / x as x approaches 0 is evaluated by rewriting as (sin x / x) * (1 / cos x) to be 1.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Sandwich Theorem" | content: "If a function is squeezed between two other functions that have the same limit, then the squeezed function also has that limit."
- title: "Key Trigonometric Limits" | content: "The limit of sin x / x as x approaches 0 is 1, and the limit of (1 - cos x) / x as x approaches 0 is 0."

**Widget idea:** An interactive unit circle animation showing the geometric proof of the inequality cos x < sin x / x < 1.

**Key terms:** Sandwich theorem, squeeze theorem, trigonometric limits

---

### 7: Derivatives
eyebrow: Derivatives

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The derivative of a function f at a point a, denoted f'(a), is defined as the limit of (f(a+h) minus f(a)) / h as h approaches 0, provided this limit exists.
- The derivative quantifies the change in f(x) at a with respect to x.
- The derivative of a function at a point is equal to the slope of the tangent line to the curve y = f(x) at that point.
- If the derivative exists at every point, it defines a new function called the derivative of f.
- The derivative of f at x, denoted f'(x), is defined by the limit of (f(x+h) minus f(x)) / h as h approaches 0, wherever the limit exists. This is called the first principle of derivative.
- The derivative of f(x) can be denoted as d/dx (f(x)) or if y = f(x), as dy/dx.
- The derivative of a constant function is zero at every point.
- The derivative of f(x) = x is the constant function 1.
- The derivative of f(x) = x squared is 2x.
- The derivative of f(x) = x to the power n is n times x to the power (n minus 1) for any positive integer n. This is also true for any real number n.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The derivative of f(x) = 3x at x = 2 is found using the definition to be 3.
- The derivative of f(x) = 2x squared + 3x - 5 at x = -1 is found to be -1, and at x = 0 is found to be 3, proving f'(0) + 3f'(-1) = 0.
- The derivative of sin x at x = 0 is found using the definition and the limit of sin h / h to be 1.
- The derivative of f(x) = 3 at x = 0 and x = 3 is found to be 0.
- The derivative of f(x) = 10x is found using the definition to be 10.
- The derivative of f(x) = x squared is found using the definition to be 2x.
- The derivative of the constant function f(x) = a is found to be 0.
- The derivative of f(x) = 1/x is found using the definition to be -1 / x squared.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Definition of Derivative" | content: "The derivative of a function at a point is the limit of the difference quotient as the change in x approaches zero. It represents the instantaneous rate of change."
- title: "Derivative as Slope of Tangent" | content: "The derivative of a function at a point is the slope of the tangent line to the graph of the function at that point."

**Widget idea:** An interactive graph where a user can move a point on a curve and see the secant line approach the tangent line as h approaches 0, with the derivative value displayed.

**Key terms:** Derivative, first principle, difference quotient, tangent, slope

---

### 8: Algebra of Derivative of Functions
eyebrow: Algebra of Derivatives

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The derivative of the sum of two functions is the sum of their derivatives.
- The derivative of the difference of two functions is the difference of their derivatives.
- The derivative of the product of two functions (product rule) is the derivative of the first function times the second function plus the first function times the derivative of the second function.
- The derivative of the quotient of two functions (quotient rule) is (the derivative of the numerator times the denominator minus the numerator times the derivative of the denominator) all divided by the denominator squared, provided the denominator is not zero.
- The product rule can be remembered as (uv)' = u'v + uv'.
- The quotient rule can be remembered as (u/v)' = (u'v - uv') / v squared.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The derivative of f(x) = 10x is computed using the product rule with u=10 and v=x to be 10.
- The derivative of f(x) = x squared is computed using the product rule with u=x and v=x to be 2x.
- The derivative of f(x) = x to the power n is proved by induction using the product rule.
- The derivative of f(x) = (x+1)/x is found using the quotient rule to be -1 / x squared.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Product Rule" | content: "The derivative of a product of two functions is the derivative of the first times the second plus the first times the derivative of the second."
- title: "Quotient Rule" | content: "The derivative of a quotient of two functions is (derivative of numerator times denominator minus numerator times derivative of denominator) all over denominator squared."

**Widget idea:** none

**Key terms:** Sum rule, difference rule, product rule, quotient rule, Leibnitz rule

---

### 9: Derivative of Polynomials and Trigonometric Functions
eyebrow: Derivatives of Polynomials and Trigonometric Functions

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The derivative of a polynomial function f(x) = an x to the power n + a(n-1) x to the power (n-1) + ... + a1 x + a0 is given by f'(x) = n an x to the power (n-1) + (n-1) a(n-1) x to the power (n-2) + ... + 2 a2 x + a1.
- The derivative of sin x is cos x.
- The derivative of cos x is negative sin x.
- The derivative of tan x is secant squared x.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- The derivative of 6x to the power 100 minus x to the power 55 plus x is found to be 600 x to the power 99 minus 55 x to the power 54 plus 1.
- The derivative of f(x) = 1 + x + x squared + ... + x to the power 50 at x = 1 is found to be 1275.
- The derivative of sin x is derived from first principles to be cos x.
- The derivative of tan x is derived from first principles to be secant squared x.
- The derivative of f(x) = sin squared x is found using the product rule to be sin 2x.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Derivative of sin x" | content: "The derivative of sin x is cos x."
- title: "Derivative of cos x" | content: "The derivative of cos x is -sin x."

**Widget idea:** An interactive graph showing the function sin x and its derivative cos x, allowing the user to see the relationship between the slope of the tangent and the value of the derivative.

**Key terms:** Polynomial derivative, derivative of sin x, derivative of cos x, derivative of tan x

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "A body is dropped from a cliff, and its distance s in metres at time t in seconds is given by s = 4.9 t squared. What is the average velocity between t = 1 and t = 2 seconds?",
    "options": ["4.9 m/s", "9.8 m/s", "14.7 m/s", "19.6 m/s"],
    "answer": 2,
    "hint": "Average velocity is the change in distance divided by the change in time.",
    "explanation": "Distance at t=2 is 19.6 m, at t=1 is 4.9 m. Change in distance is 14.7 m, change in time is 1 s. Average velocity = 14.7 / 1 = 14.7 m/s."
  },
  {
    "question": "What does the instantaneous velocity of a body at a given time represent on a distance-time graph?",
    "options": ["The slope of the secant line", "The slope of the tangent line", "The area under the curve", "The y-intercept of the curve"],
    "answer": 1,
    "hint": "Think about what happens to the secant line as the time interval becomes very small.",
    "explanation": "As the time interval approaches zero, the secant line approaches the tangent line, and the slope of the tangent line represents the instantaneous velocity."
  },
  {
    "question": "For the function f(x) = x squared, what is the limit of f(x) as x approaches 0?",
    "options": ["0", "1", "Does not exist", "Infinity"],
    "answer": 0,
    "hint": "Consider the values of f(x) for x very close to 0.",
    "explanation": "As x takes values very close to 0, the value of x squared also moves towards 0."
  },
  {
    "question": "For the function f(x) = |x|, x not equal to 0, what is the limit of f(x) as x approaches 0?",
    "options": ["0", "1", "Does not exist", "Infinity"],
    "answer": 0,
    "hint": "Consider the values of |x| for x very close to 0 from both sides.",
    "explanation": "As x approaches 0 from either side, the value of |x| approaches 0."
  },
  {
    "question": "For the function f(x) = (x squared minus 4) / (x minus 2), x not equal to 2, what is the limit of f(x) as x approaches 2?",
    "options": ["0", "2", "4", "Does not exist"],
    "answer": 2,
    "hint": "Factor the numerator and see if you can simplify the expression.",
    "explanation": "x squared minus 4 = (x-2)(x+2). So f(x) = x+2 for x not equal to 2. As x approaches 2, x+2 approaches 4."
  },
  {
    "question": "For the piecewise function f(x) = 1 for x less than or equal to 0, and f(x) = 2 for x greater than 0, what is the limit of f(x) as x approaches 0?",
    "options": ["1", "2", "0", "Does not exist"],
    "answer": 3,
    "hint": "Check the left-hand limit and the right-hand limit.",
    "explanation": "The left-hand limit is 1, and the right-hand limit is 2. Since they are different, the limit does not exist."
  },
  {
    "question": "If the limit of f(x) as x approaches a is L, and the limit of g(x) as x approaches a is M, what is the limit of [f(x) + g(x)] as x approaches a?",
    "options": ["L + M", "L - M", "L * M", "L / M"],
    "answer": 0,
    "hint": "This is a basic rule of the algebra of limits.",
    "explanation": "The limit of the sum of two functions is the sum of their limits."
  },
  {
    "question": "What is the limit of the constant function f(x) = 5 as x approaches any real number a?",
    "options": ["0", "5", "a", "Does not exist"],
    "answer": 1,
    "hint": "A constant function has the same value everywhere.",
    "explanation": "The limit of a constant function is the constant itself."
  },
  {
    "question": "What is the limit of (x to the power 5 minus 32) divided by (x minus 2) as x approaches 2?",
    "options": ["5", "16", "80", "32"],
    "answer": 2,
    "hint": "Use the theorem for the limit of (x^n - a^n) / (x - a).",
    "explanation": "Using the theorem, the limit is n * a^(n-1) = 5 * 2^(4) = 5 * 16 = 80."
  },
  {
    "question": "For the rational function f(x) = (x squared minus 1) / (x minus 1), what is the limit as x approaches 1?",
    "options": ["0", "1", "2", "Does not exist"],
    "answer": 2,
    "hint": "Factor the numerator and cancel the common factor.",
    "explanation": "x squared minus 1 = (x-1)(x+1). Canceling (x-1) gives x+1. The limit as x approaches 1 is 1+1 = 2."
  },
  {
    "question": "What is the limit of sin x / x as x approaches 0?",
    "options": ["0", "1", "Infinity", "Does not exist"],
    "answer": 1,
    "hint": "This is a standard trigonometric limit.",
    "explanation": "The limit of sin x / x as x approaches 0 is 1."
  },
  {
    "question": "What is the limit of (1 minus cos x) / x as x approaches 0?",
    "options": ["0", "1", "Infinity", "Does not exist"],
    "answer": 0,
    "hint": "Use the trigonometric identity 1 - cos x = 2 sin squared (x/2).",
    "explanation": "The limit of (1 - cos x) / x as x approaches 0 is 0."
  },
  {
    "question": "Using the Sandwich Theorem, if for all x near a, x squared is less than or equal to g(x) is less than or equal to x, and the limit of x squared as x approaches 0 is 0 and the limit of x as x approaches 0 is 0, what is the limit of g(x) as x approaches 0?",
    "options": ["0", "1", "Infinity", "Cannot be determined"],
    "answer": 0,
    "hint": "The Sandwich Theorem states that if a function is squeezed between two functions with the same limit, it must have that limit.",
    "explanation": "Since g(x) is squeezed between x squared and x, both of which have a limit of 0 as x approaches 0, the limit of g(x) must also be 0."
  },
  {
    "question": "What is the derivative of the constant function f(x) = 7 at any point x?",
    "options": ["7", "0", "1", "Does not exist"],
    "answer": 1,
    "hint": "Think about the rate of change of a constant function.",
    "explanation": "The derivative of a constant function is always 0."
  },
  {
    "question": "Using the first principle of derivative, what is the derivative of f(x) = x squared?",
    "options": ["x", "2x", "x squared", "2"],
    "answer": 1,
    "hint": "Use the definition: f'(x) = limit as h approaches 0 of (f(x+h) - f(x)) / h.",
    "explanation": "f'(x) = limit as h->0 of ((x+h)^2 - x^2)/h = limit as h->0 of (2xh + h^2)/h = limit as h->0 of (2x + h) = 2x."
  },
  {
    "question": "What does the derivative of a function at a point represent geometrically?",
    "options": ["The y-intercept of the tangent line", "The slope of the tangent line", "The area under the curve", "The x-intercept of the curve"],
    "answer": 1,
    "hint": "Think about the limit of the slopes of secant lines.",
    "explanation": "The derivative at a point is the slope of the tangent line to the curve at that point."
  },
  {
    "question": "If u and v are functions of x, what is the derivative of their product uv?",
    "options": ["u'v'", "u'v + uv'", "u'v - uv'", "(u'v - uv') / v squared"],
    "answer": 1,
    "hint": "This is the product rule.",
    "explanation": "The product rule states that (uv)' = u'v + uv'."
  },
  {
    "question": "If u and v are functions of x, what is the derivative of their quotient u/v?",
    "options": ["u'v'", "u'v + uv'", "u'v - uv'", "(u'v - uv') / v squared"],
    "answer": 3,
    "hint": "This is the quotient rule.",
    "explanation": "The quotient rule states that (u/v)' = (u'v - uv') / v squared."
  },
  {
    "question": "What is the derivative of f(x) = x to the power 10?",
    "options": ["10 x to the power 9", "x to the power 9", "10 x to the power 10", "9 x to the power 10"],
    "answer": 0,
    "hint": "Use the power rule: derivative of x^n is n x^(n-1).",
    "explanation": "The derivative of x to the power 10 is 10 x to the power 9."
  },
  {
    "question": "What is the derivative of sin x?",
    "options": ["cos x", "-cos x", "sin x", "-sin x"],
    "answer": 0,
    "hint": "This is a standard derivative from first principles.",
    "explanation": "The derivative of sin x is cos x."
  },
  {
    "question": "What is the derivative of cos x?",
    "options": ["cos x", "-cos x", "sin x", "-sin x"],
    "answer": 3,
    "hint": "This is a standard derivative from first principles.",
    "explanation": "The derivative of cos x is -sin x."
  },
  {
    "question": "What is the derivative of f(x) = 3x to the power 5 minus 2x squared plus 7?",
    "options": ["15 x to the power 4 minus 4x", "15 x to the power 4 minus 4x plus 7", "3 x to the power 5 minus 2x squared", "5 x to the power 4 minus 2x"],
    "answer": 0,
    "hint": "Apply the power rule to each term and the sum/difference rule.",
    "explanation": "The derivative of 3x^5 is 15x^4, the derivative of -2x^2 is -4x, and the derivative of 7 is 0. So f'(x) = 15x^4 - 4x."
  },
  {
    "question": "What is the derivative of f(x) = x sin x?",
    "options": ["sin x + x cos x", "cos x", "x cos x", "sin x - x cos x"],
    "answer": 0,
    "hint": "Use the product rule.",
    "explanation": "Using the product rule, (x sin x)' = (1)(sin x) + x(cos x) = sin x + x cos x."
  },
  {
    "question": "What is the derivative of f(x) = tan x?",
    "options": ["secant squared x", "cosecant squared x", "secant x tan x", "cosine squared x"],
    "answer": 0,
    "hint": "Rewrite tan x as sin x / cos x and use the quotient rule.",
    "explanation": "The derivative of tan x is secant squared x."
  },
  {
    "question": "What is the derivative of f(x) = (x + 1) / x?",
    "options": ["1/x squared", "-1/x squared", "1/x", "1"],
    "answer": 1,
    "hint": "Use the quotient rule.",
    "explanation": "Using the quotient rule, f'(x) = ((1)(x) - (x+1)(1)) / x squared = (x - x - 1) / x squared = -1 / x squared."
  }
]
```
