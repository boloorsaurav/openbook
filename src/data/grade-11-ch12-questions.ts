import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH12_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "A body is dropped from a cliff, and its distance s in metres at time t in seconds is given by s = 4.9 t squared. What is the average velocity between t = 1 and t = 2 seconds?",
    "options": [
      "4.9 m/s",
      "9.8 m/s",
      "14.7 m/s",
      "19.6 m/s"
    ],
    "answer": 2,
    "hint": "Average velocity is the change in distance divided by the change in time.",
    "explanation": "Distance at t=2 is 19.6 m, at t=1 is 4.9 m. Change in distance is 14.7 m, change in time is 1 s. Average velocity = 14.7 / 1 = 14.7 m/s."
  },
  {
    "question": "What does the instantaneous velocity of a body at a given time represent on a distance-time graph?",
    "options": [
      "The slope of the secant line",
      "The slope of the tangent line",
      "The area under the curve",
      "The y-intercept of the curve"
    ],
    "answer": 1,
    "hint": "Think about what happens to the secant line as the time interval becomes very small.",
    "explanation": "As the time interval approaches zero, the secant line approaches the tangent line, and the slope of the tangent line represents the instantaneous velocity."
  },
  {
    "question": "For the function f(x) = x squared, what is the limit of f(x) as x approaches 0?",
    "options": [
      "0",
      "1",
      "Does not exist",
      "Infinity"
    ],
    "answer": 0,
    "hint": "Consider the values of f(x) for x very close to 0.",
    "explanation": "As x takes values very close to 0, the value of x squared also moves towards 0."
  },
  {
    "question": "For the function f(x) = |x|, x not equal to 0, what is the limit of f(x) as x approaches 0?",
    "options": [
      "0",
      "1",
      "Does not exist",
      "Infinity"
    ],
    "answer": 0,
    "hint": "Consider the values of |x| for x very close to 0 from both sides.",
    "explanation": "As x approaches 0 from either side, the value of |x| approaches 0."
  },
  {
    "question": "For the function f(x) = (x squared minus 4) / (x minus 2), x not equal to 2, what is the limit of f(x) as x approaches 2?",
    "options": [
      "0",
      "2",
      "4",
      "Does not exist"
    ],
    "answer": 2,
    "hint": "Factor the numerator and see if you can simplify the expression.",
    "explanation": "x squared minus 4 = (x-2)(x+2). So f(x) = x+2 for x not equal to 2. As x approaches 2, x+2 approaches 4."
  },
  {
    "question": "For the piecewise function f(x) = 1 for x less than or equal to 0, and f(x) = 2 for x greater than 0, what is the limit of f(x) as x approaches 0?",
    "options": [
      "1",
      "2",
      "0",
      "Does not exist"
    ],
    "answer": 3,
    "hint": "Check the left-hand limit and the right-hand limit.",
    "explanation": "The left-hand limit is 1, and the right-hand limit is 2. Since they are different, the limit does not exist."
  },
  {
    "question": "If the limit of f(x) as x approaches a is L, and the limit of g(x) as x approaches a is M, what is the limit of [f(x) + g(x)] as x approaches a?",
    "options": [
      "L + M",
      "L - M",
      "L * M",
      "L / M"
    ],
    "answer": 0,
    "hint": "This is a basic rule of the algebra of limits.",
    "explanation": "The limit of the sum of two functions is the sum of their limits."
  },
  {
    "question": "What is the limit of the constant function f(x) = 5 as x approaches any real number a?",
    "options": [
      "0",
      "5",
      "a",
      "Does not exist"
    ],
    "answer": 1,
    "hint": "A constant function has the same value everywhere.",
    "explanation": "The limit of a constant function is the constant itself."
  },
  {
    "question": "What is the limit of (x to the power 5 minus 32) divided by (x minus 2) as x approaches 2?",
    "options": [
      "5",
      "16",
      "80",
      "32"
    ],
    "answer": 2,
    "hint": "Use the theorem for the limit of (x^n - a^n) / (x - a).",
    "explanation": "Using the theorem, the limit is n * a^(n-1) = 5 * 2^(4) = 5 * 16 = 80."
  },
  {
    "question": "For the rational function f(x) = (x squared minus 1) / (x minus 1), what is the limit as x approaches 1?",
    "options": [
      "0",
      "1",
      "2",
      "Does not exist"
    ],
    "answer": 2,
    "hint": "Factor the numerator and cancel the common factor.",
    "explanation": "x squared minus 1 = (x-1)(x+1). Canceling (x-1) gives x+1. The limit as x approaches 1 is 1+1 = 2."
  },
  {
    "question": "What is the limit of sin x / x as x approaches 0?",
    "options": [
      "0",
      "1",
      "Infinity",
      "Does not exist"
    ],
    "answer": 1,
    "hint": "This is a standard trigonometric limit.",
    "explanation": "The limit of sin x / x as x approaches 0 is 1."
  },
  {
    "question": "What is the limit of (1 minus cos x) / x as x approaches 0?",
    "options": [
      "0",
      "1",
      "Infinity",
      "Does not exist"
    ],
    "answer": 0,
    "hint": "Use the trigonometric identity 1 - cos x = 2 sin squared (x/2).",
    "explanation": "The limit of (1 - cos x) / x as x approaches 0 is 0."
  },
  {
    "question": "Using the Sandwich Theorem, if for all x near a, x squared is less than or equal to g(x) is less than or equal to x, and the limit of x squared as x approaches 0 is 0 and the limit of x as x approaches 0 is 0, what is the limit of g(x) as x approaches 0?",
    "options": [
      "0",
      "1",
      "Infinity",
      "Cannot be determined"
    ],
    "answer": 0,
    "hint": "The Sandwich Theorem states that if a function is squeezed between two functions with the same limit, it must have that limit.",
    "explanation": "Since g(x) is squeezed between x squared and x, both of which have a limit of 0 as x approaches 0, the limit of g(x) must also be 0."
  },
  {
    "question": "What is the derivative of the constant function f(x) = 7 at any point x?",
    "options": [
      "7",
      "0",
      "1",
      "Does not exist"
    ],
    "answer": 1,
    "hint": "Think about the rate of change of a constant function.",
    "explanation": "The derivative of a constant function is always 0."
  },
  {
    "question": "Using the first principle of derivative, what is the derivative of f(x) = x squared?",
    "options": [
      "x",
      "2x",
      "x squared",
      "2"
    ],
    "answer": 1,
    "hint": "Use the definition: f'(x) = limit as h approaches 0 of (f(x+h) - f(x)) / h.",
    "explanation": "f'(x) = limit as h->0 of ((x+h)^2 - x^2)/h = limit as h->0 of (2xh + h^2)/h = limit as h->0 of (2x + h) = 2x."
  },
  {
    "question": "What does the derivative of a function at a point represent geometrically?",
    "options": [
      "The y-intercept of the tangent line",
      "The slope of the tangent line",
      "The area under the curve",
      "The x-intercept of the curve"
    ],
    "answer": 1,
    "hint": "Think about the limit of the slopes of secant lines.",
    "explanation": "The derivative at a point is the slope of the tangent line to the curve at that point."
  },
  {
    "question": "If u and v are functions of x, what is the derivative of their product uv?",
    "options": [
      "u'v'",
      "u'v + uv'",
      "u'v - uv'",
      "(u'v - uv') / v squared"
    ],
    "answer": 1,
    "hint": "This is the product rule.",
    "explanation": "The product rule states that (uv)' = u'v + uv'."
  },
  {
    "question": "If u and v are functions of x, what is the derivative of their quotient u/v?",
    "options": [
      "u'v'",
      "u'v + uv'",
      "u'v - uv'",
      "(u'v - uv') / v squared"
    ],
    "answer": 3,
    "hint": "This is the quotient rule.",
    "explanation": "The quotient rule states that (u/v)' = (u'v - uv') / v squared."
  },
  {
    "question": "What is the derivative of f(x) = x to the power 10?",
    "options": [
      "10 x to the power 9",
      "x to the power 9",
      "10 x to the power 10",
      "9 x to the power 10"
    ],
    "answer": 0,
    "hint": "Use the power rule: derivative of x^n is n x^(n-1).",
    "explanation": "The derivative of x to the power 10 is 10 x to the power 9."
  },
  {
    "question": "What is the derivative of sin x?",
    "options": [
      "cos x",
      "-cos x",
      "sin x",
      "-sin x"
    ],
    "answer": 0,
    "hint": "This is a standard derivative from first principles.",
    "explanation": "The derivative of sin x is cos x."
  },
  {
    "question": "What is the derivative of cos x?",
    "options": [
      "cos x",
      "-cos x",
      "sin x",
      "-sin x"
    ],
    "answer": 3,
    "hint": "This is a standard derivative from first principles.",
    "explanation": "The derivative of cos x is -sin x."
  },
  {
    "question": "What is the derivative of f(x) = 3x to the power 5 minus 2x squared plus 7?",
    "options": [
      "15 x to the power 4 minus 4x",
      "15 x to the power 4 minus 4x plus 7",
      "3 x to the power 5 minus 2x squared",
      "5 x to the power 4 minus 2x"
    ],
    "answer": 0,
    "hint": "Apply the power rule to each term and the sum/difference rule.",
    "explanation": "The derivative of 3x^5 is 15x^4, the derivative of -2x^2 is -4x, and the derivative of 7 is 0. So f'(x) = 15x^4 - 4x."
  },
  {
    "question": "What is the derivative of f(x) = x sin x?",
    "options": [
      "sin x + x cos x",
      "cos x",
      "x cos x",
      "sin x - x cos x"
    ],
    "answer": 0,
    "hint": "Use the product rule.",
    "explanation": "Using the product rule, (x sin x)' = (1)(sin x) + x(cos x) = sin x + x cos x."
  },
  {
    "question": "What is the derivative of f(x) = tan x?",
    "options": [
      "secant squared x",
      "cosecant squared x",
      "secant x tan x",
      "cosine squared x"
    ],
    "answer": 0,
    "hint": "Rewrite tan x as sin x / cos x and use the quotient rule.",
    "explanation": "The derivative of tan x is secant squared x."
  },
  {
    "question": "What is the derivative of f(x) = (x + 1) / x?",
    "options": [
      "1/x squared",
      "-1/x squared",
      "1/x",
      "1"
    ],
    "answer": 1,
    "hint": "Use the quotient rule.",
    "explanation": "Using the quotient rule, f'(x) = ((1)(x) - (x+1)(1)) / x squared = (x - x - 1) / x squared = -1 / x squared."
  }
]
;
