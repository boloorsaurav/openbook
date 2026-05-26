import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH3_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "An angle of 1 radian is defined as the angle subtended at the centre of a circle by an arc whose length is equal to:",
    "options": [
      "The diameter of the circle",
      "The radius of the circle",
      "The circumference of the circle",
      "Half the circumference of the circle"
    ],
    "answer": 1,
    "hint": "Recall the definition of a radian.",
    "explanation": "One radian is the angle subtended at the centre of a circle by an arc of length equal to the radius of the circle."
  },
  {
    "question": "What is the degree measure of an angle of 3π/4 radians?",
    "options": [
      "120°",
      "135°",
      "150°",
      "270°"
    ],
    "answer": 1,
    "hint": "Use the conversion factor: π radians = 180°.",
    "explanation": "3π/4 radians * (180°/π) = (3 * 180°)/4 = 135°."
  },
  {
    "question": "A central angle of 45° in a circle of radius 10 cm intercepts an arc of what length?",
    "options": [
      "(45π)/180 cm",
      "(10π)/4 cm",
      "(45π)/10 cm",
      "(10π)/45 cm"
    ],
    "answer": 1,
    "hint": "Convert the angle to radians first, then use the formula l = rθ.",
    "explanation": "45° = π/4 radians. l = rθ = 10 * (π/4) = (10π)/4 cm."
  },
  {
    "question": "If sin x = 0, then x must be:",
    "options": [
      "An odd multiple of π/2",
      "An even multiple of π/2",
      "An integral multiple of π",
      "An integral multiple of 2π"
    ],
    "answer": 2,
    "hint": "Think about where the y-coordinate on the unit circle is zero.",
    "explanation": "sin x = 0 at x = 0, ±π, ±2π, ... which are integral multiples of π (x = nπ)."
  },
  {
    "question": "In which quadrant does the terminal side of an angle of 210° lie?",
    "options": [
      "First",
      "Second",
      "Third",
      "Fourth"
    ],
    "answer": 2,
    "hint": "Angles between 180° and 270° lie in the third quadrant.",
    "explanation": "210° is between 180° and 270°, so its terminal side lies in the third quadrant."
  },
  {
    "question": "If cos x = -1/2 and x lies in the third quadrant, what is the value of sin x?",
    "options": [
      "√3/2",
      "-√3/2",
      "1/2",
      "-1/2"
    ],
    "answer": 1,
    "hint": "Use the identity sin² x + cos² x = 1 and consider the sign of sin x in the third quadrant.",
    "explanation": "sin² x = 1 - (1/4) = 3/4, so sin x = ±√3/2. In the third quadrant, sin x is negative, so sin x = -√3/2."
  },
  {
    "question": "What is the range of the function y = sec x?",
    "options": [
      "[-1, 1]",
      "All real numbers",
      "(-∞, -1] ∪ [1, ∞)",
      "(0, ∞)"
    ],
    "answer": 2,
    "hint": "Sec x is the reciprocal of cos x. Consider the range of cos x.",
    "explanation": "Since cos x ∈ [-1, 1], its reciprocal sec x = 1/cos x will be in (-∞, -1] ∪ [1, ∞)."
  },
  {
    "question": "Which of the following is equal to sin(π - x)?",
    "options": [
      "-sin x",
      "cos x",
      "sin x",
      "-cos x"
    ],
    "answer": 2,
    "hint": "Use the sine difference formula or the symmetry of the unit circle.",
    "explanation": "sin(π - x) = sin π cos x - cos π sin x = (0)(cos x) - (-1)(sin x) = sin x."
  },
  {
    "question": "The expression cos(x + y) cos y + sin(x + y) sin y simplifies to:",
    "options": [
      "cos x",
      "sin x",
      "cos(x + 2y)",
      "sin(x + 2y)"
    ],
    "answer": 0,
    "hint": "Recognize this as the cosine of a difference formula: cos(A - B) = cos A cos B + sin A sin B.",
    "explanation": "Let A = x + y and B = y. Then cos(A - B) = cos((x+y) - y) = cos x."
  },
  {
    "question": "What is the value of sin 75°?",
    "options": [
      "(√3 + 1)/(2√2)",
      "(√3 - 1)/(2√2)",
      "(√6 + √2)/4",
      "(√6 - √2)/4"
    ],
    "answer": 0,
    "hint": "Write 75° as 45° + 30° and use the sine sum formula.",
    "explanation": "sin 75° = sin(45°+30°) = sin45°cos30° + cos45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√3+1)/(2√2)."
  },
  {
    "question": "If tan x = 1/2 and tan y = 1/3, what is the value of tan(x + y)?",
    "options": [
      "5/6",
      "1",
      "5/7",
      "6/5"
    ],
    "answer": 1,
    "hint": "Use the formula tan(x+y) = (tan x + tan y) / (1 - tan x tan y).",
    "explanation": "tan(x+y) = (1/2 + 1/3) / (1 - (1/2)(1/3)) = (5/6) / (1 - 1/6) = (5/6) / (5/6) = 1."
  },
  {
    "question": "Which of the following is an expression for cos 2x?",
    "options": [
      "2 sin² x - 1",
      "1 - 2 sin² x",
      "2 cos² x + 1",
      "sin² x - cos² x"
    ],
    "answer": 1,
    "hint": "Recall the double-angle formulas for cosine.",
    "explanation": "cos 2x = cos² x - sin² x = 1 - 2 sin² x = 2 cos² x - 1."
  },
  {
    "question": "The expression sin 3x can be written as:",
    "options": [
      "3 sin x + 4 sin³ x",
      "3 sin x - 4 sin³ x",
      "4 sin³ x - 3 sin x",
      "4 cos³ x - 3 cos x"
    ],
    "answer": 1,
    "hint": "Use the triple-angle formula for sine.",
    "explanation": "sin 3x = 3 sin x - 4 sin³ x."
  },
  {
    "question": "What is the value of cos 15°?",
    "options": [
      "(√6 - √2)/4",
      "(√6 + √2)/4",
      "(√3 - 1)/(2√2)",
      "(√3 + 1)/(2√2)"
    ],
    "answer": 1,
    "hint": "Write 15° as 45° - 30° and use the cosine difference formula.",
    "explanation": "cos 15° = cos(45°-30°) = cos45°cos30° + sin45°sin30° = (1/√2)(√3/2) + (1/√2)(1/2) = (√6+√2)/4."
  },
  {
    "question": "The expression sin x + sin y is equal to:",
    "options": [
      "2 sin((x+y)/2) cos((x-y)/2)",
      "2 cos((x+y)/2) sin((x-y)/2)",
      "2 sin((x+y)/2) sin((x-y)/2)",
      "2 cos((x+y)/2) cos((x-y)/2)"
    ],
    "answer": 0,
    "hint": "Use the sum-to-product formula for sine.",
    "explanation": "sin x + sin y = 2 sin((x+y)/2) cos((x-y)/2)."
  },
  {
    "question": "Which of the following is equal to 2 cos x cos y?",
    "options": [
      "cos(x+y) - cos(x-y)",
      "cos(x+y) + cos(x-y)",
      "sin(x+y) + sin(x-y)",
      "sin(x+y) - sin(x-y)"
    ],
    "answer": 1,
    "hint": "Use the product-to-sum formulas.",
    "explanation": "2 cos x cos y = cos(x+y) + cos(x-y)."
  },
  {
    "question": "If sin x = 3/5 and x is in the second quadrant, what is the value of cos x?",
    "options": [
      "4/5",
      "-4/5",
      "3/4",
      "-3/4"
    ],
    "answer": 1,
    "hint": "Use sin² x + cos² x = 1 and consider the sign of cos x in the second quadrant.",
    "explanation": "cos² x = 1 - 9/25 = 16/25, so cos x = ±4/5. In the second quadrant, cos x is negative, so cos x = -4/5."
  },
  {
    "question": "What is the value of tan(π/8)?",
    "options": [
      "√2 + 1",
      "√2 - 1",
      "2 - √2",
      "2 + √2"
    ],
    "answer": 1,
    "hint": "Use the half-angle or double-angle formula for tangent, or solve the equation tan(2x) = 1 for x = π/8.",
    "explanation": "Using the double-angle formula, tan(π/4) = 1 = 2t/(1-t²) where t = tan(π/8). Solving t² + 2t - 1 = 0 gives t = -1 ± √2. Since π/8 is in the first quadrant, tan(π/8) is positive, so t = √2 - 1."
  },
  {
    "question": "The expression (cos 7x + cos 5x) / (sin 7x - sin 5x) simplifies to:",
    "options": [
      "tan 6x",
      "cot 6x",
      "tan x",
      "cot x"
    ],
    "answer": 3,
    "hint": "Use the sum-to-product formulas for both numerator and denominator.",
    "explanation": "cos 7x + cos 5x = 2 cos 6x cos x. sin 7x - sin 5x = 2 cos 6x sin x. The ratio is (2 cos 6x cos x) / (2 cos 6x sin x) = cot x."
  },
  {
    "question": "What is the period of the function y = tan x?",
    "options": [
      "π/2",
      "π",
      "2π",
      "It is not periodic"
    ],
    "answer": 1,
    "hint": "Consider the repeating pattern of the tangent function on the unit circle.",
    "explanation": "tan(π + x) = tan x, so the period of tan x is π."
  },
  {
    "question": "If cos x = -1/3 and x is in the third quadrant, what is the value of sin(x/2)?",
    "options": [
      "√(2/3)",
      "-√(2/3)",
      "√(1/3)",
      "-√(1/3)"
    ],
    "answer": 0,
    "hint": "Use the half-angle formula sin²(x/2) = (1 - cos x)/2. Determine the quadrant of x/2 to find the sign.",
    "explanation": "sin²(x/2) = (1 - (-1/3))/2 = (4/3)/2 = 2/3. Since x is in QIII (π < x < 3π/2), x/2 is in QII (π/2 < x/2 < 3π/4), where sin is positive. So sin(x/2) = √(2/3)."
  },
  {
    "question": "The value of cos 2x when x = 30° is:",
    "options": [
      "1/2",
      "√3/2",
      "0",
      "1"
    ],
    "answer": 0,
    "hint": "Use the double-angle formula cos 2x = 2 cos² x - 1.",
    "explanation": "cos 60° = 2 cos² 30° - 1 = 2(√3/2)² - 1 = 2(3/4) - 1 = 3/2 - 1 = 1/2."
  },
  {
    "question": "Which of the following is NOT a valid identity?",
    "options": [
      "sin² x + cos² x = 1",
      "1 + tan² x = sec² x",
      "1 + cot² x = cosec² x",
      "tan² x + sec² x = 1"
    ],
    "answer": 3,
    "hint": "Recall the Pythagorean identities derived from sin² x + cos² x = 1.",
    "explanation": "Dividing sin² x + cos² x = 1 by cos² x gives tan² x + 1 = sec² x, not tan² x + sec² x = 1."
  },
  {
    "question": "If sin x = 1/2, which of the following could be a value of x?",
    "options": [
      "π/6",
      "π/3",
      "π/4",
      "π/2"
    ],
    "answer": 0,
    "hint": "Recall the standard values of sine for common angles.",
    "explanation": "sin(π/6) = sin 30° = 1/2."
  },
  {
    "question": "The expression cos(π/2 + x) is equal to:",
    "options": [
      "sin x",
      "-sin x",
      "cos x",
      "-cos x"
    ],
    "answer": 1,
    "hint": "Use the cosine sum formula: cos(A+B) = cos A cos B - sin A sin B.",
    "explanation": "cos(π/2 + x) = cos(π/2)cos x - sin(π/2)sin x = (0)(cos x) - (1)(sin x) = -sin x."
  }
]
;
