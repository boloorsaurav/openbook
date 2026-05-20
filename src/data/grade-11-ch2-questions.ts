import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH2_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "If (x + 2, y – 1) = (5, 3), what are the values of x and y?",
    "options": [
      "x = 3, y = 4",
      "x = 5, y = 3",
      "x = 2, y = 1",
      "x = 7, y = 2"
    ],
    "answer": 0,
    "hint": "Two ordered pairs are equal when their corresponding first and second elements are equal.",
    "explanation": "Equating first elements: x + 2 = 5 gives x = 3. Equating second elements: y – 1 = 3 gives y = 4."
  },
  {
    "question": "If set A has 4 elements and set B has 5 elements, how many elements are in A × B?",
    "options": [
      "9",
      "20",
      "4",
      "5"
    ],
    "answer": 1,
    "hint": "The number of elements in a Cartesian product is the product of the sizes of the two sets.",
    "explanation": "n(A × B) = n(A) × n(B) = 4 × 5 = 20."
  },
  {
    "question": "If A = {a, b} and B = {1, 2}, which of the following is an element of A × B?",
    "options": [
      "(1, a)",
      "(a, 1)",
      "{a, 1}",
      "a1"
    ],
    "answer": 1,
    "hint": "In A × B, the first element comes from A and the second from B.",
    "explanation": "A × B contains ordered pairs where the first element is from A and the second from B. So (a, 1) is correct."
  },
  {
    "question": "If A = {x, y} and B = {3, 4}, what is the number of elements in B × A?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "hint": "The number of elements in a Cartesian product depends only on the sizes of the sets, not the order.",
    "explanation": "n(B × A) = n(B) × n(A) = 2 × 2 = 4."
  },
  {
    "question": "If A × B = {(p, r), (p, s), (q, r), (q, s)}, what are sets A and B?",
    "options": [
      "A = {p, q}, B = {r, s}",
      "A = {r, s}, B = {p, q}",
      "A = {p, r}, B = {q, s}",
      "A = {p, q, r, s}, B = {p, q, r, s}"
    ],
    "answer": 0,
    "hint": "The first elements of all ordered pairs form set A, and the second elements form set B.",
    "explanation": "First elements are p and q, so A = {p, q}. Second elements are r and s, so B = {r, s}."
  },
  {
    "question": "What is the domain of the relation R = {(2, 5), (3, 7), (4, 9)}?",
    "options": [
      "{5, 7, 9}",
      "{2, 3, 4}",
      "{2, 3, 4, 5, 7, 9}",
      "{2, 5}"
    ],
    "answer": 1,
    "hint": "The domain is the set of all first elements of the ordered pairs in the relation.",
    "explanation": "The first elements are 2, 3, and 4, so the domain is {2, 3, 4}."
  },
  {
    "question": "If a relation R from A to B has domain = {1, 2} and range = {a, b}, what is the minimum number of ordered pairs in R?",
    "options": [
      "2",
      "4",
      "1",
      "3"
    ],
    "answer": 0,
    "hint": "Each element in the domain must appear as a first element in at least one ordered pair.",
    "explanation": "The domain has 2 elements, so there must be at least 2 ordered pairs to cover them."
  },
  {
    "question": "If n(A) = 2 and n(B) = 3, how many relations can be defined from A to B?",
    "options": [
      "6",
      "12",
      "64",
      "32"
    ],
    "answer": 2,
    "hint": "The number of relations is the number of subsets of A × B.",
    "explanation": "n(A × B) = 2 × 3 = 6. Number of relations = 2^6 = 64."
  },
  {
    "question": "Which of the following relations is a function?",
    "options": [
      "{(1, 2), (1, 3), (2, 4)}",
      "{(1, 2), (2, 3), (3, 4)}",
      "{(1, 2), (2, 2), (2, 3)}",
      "{(1, 1), (2, 2), (1, 3)}"
    ],
    "answer": 1,
    "hint": "In a function, no first element can appear more than once.",
    "explanation": "In option B, each first element (1, 2, 3) appears exactly once, so it is a function."
  },
  {
    "question": "If f(x) = 3x – 2, what is f(4)?",
    "options": [
      "10",
      "12",
      "14",
      "6"
    ],
    "answer": 0,
    "hint": "Substitute x = 4 into the expression for f(x).",
    "explanation": "f(4) = 3(4) – 2 = 12 – 2 = 10."
  },
  {
    "question": "What is the range of the identity function f(x) = x?",
    "options": [
      "{0}",
      "All real numbers",
      "All positive real numbers",
      "All integers"
    ],
    "answer": 1,
    "hint": "The identity function outputs the same value as its input.",
    "explanation": "Since f(x) = x can produce any real number, the range is all real numbers."
  },
  {
    "question": "What is the range of the constant function f(x) = 5?",
    "options": [
      "All real numbers",
      "{5}",
      "{0, 5}",
      "All integers"
    ],
    "answer": 1,
    "hint": "A constant function always outputs the same value.",
    "explanation": "f(x) = 5 for every x, so the range is just the single value 5."
  },
  {
    "question": "What is the domain of the rational function f(x) = 1/(x – 3)?",
    "options": [
      "All real numbers",
      "All real numbers except 3",
      "All real numbers except 0",
      "All real numbers greater than 3"
    ],
    "answer": 1,
    "hint": "The denominator cannot be zero.",
    "explanation": "The function is undefined when x – 3 = 0, i.e., x = 3. So domain is all real numbers except 3."
  },
  {
    "question": "What is the value of the modulus function f(x) = |x| at x = –5?",
    "options": [
      "–5",
      "5",
      "0",
      "–1"
    ],
    "answer": 1,
    "hint": "The modulus function returns the non-negative value of x.",
    "explanation": "|–5| = 5."
  },
  {
    "question": "What is the value of the signum function at x = 0?",
    "options": [
      "1",
      "–1",
      "0",
      "Undefined"
    ],
    "answer": 2,
    "hint": "The signum function has a specific definition for x = 0.",
    "explanation": "By definition, signum(0) = 0."
  },
  {
    "question": "What is the value of the greatest integer function [x] at x = 2.7?",
    "options": [
      "2",
      "3",
      "2.7",
      "0"
    ],
    "answer": 0,
    "hint": "The greatest integer function returns the largest integer less than or equal to x.",
    "explanation": "The largest integer less than or equal to 2.7 is 2."
  },
  {
    "question": "If f(x) = x squared and g(x) = x + 1, what is (f + g)(2)?",
    "options": [
      "5",
      "7",
      "9",
      "3"
    ],
    "answer": 1,
    "hint": "First find f(2) and g(2), then add them.",
    "explanation": "f(2) = 4, g(2) = 3, so (f + g)(2) = 4 + 3 = 7."
  },
  {
    "question": "If f(x) = 2x and g(x) = x – 1, what is (fg)(3)?",
    "options": [
      "6",
      "12",
      "18",
      "9"
    ],
    "answer": 1,
    "hint": "Multiply the values of f(3) and g(3).",
    "explanation": "f(3) = 6, g(3) = 2, so (fg)(3) = 6 × 2 = 12."
  },
  {
    "question": "If f(x) = x + 2 and g(x) = x – 1, what is (f/g)(2)?",
    "options": [
      "4",
      "3",
      "2",
      "1"
    ],
    "answer": 0,
    "hint": "Divide f(2) by g(2), making sure g(2) is not zero.",
    "explanation": "f(2) = 4, g(2) = 1, so (f/g)(2) = 4/1 = 4."
  },
  {
    "question": "If f(x) = x squared, what is (3f)(x)?",
    "options": [
      "3x squared",
      "x squared + 3",
      "3x",
      "x squared/3"
    ],
    "answer": 0,
    "hint": "Multiplying a function by a scalar multiplies its output by that scalar.",
    "explanation": "(3f)(x) = 3 × f(x) = 3x squared."
  },
  {
    "question": "What is the range of the function f(x) = x squared?",
    "options": [
      "All real numbers",
      "All non-negative real numbers",
      "All positive real numbers",
      "All integers"
    ],
    "answer": 1,
    "hint": "The square of any real number is never negative.",
    "explanation": "x squared is always greater than or equal to 0, so the range is all non-negative real numbers."
  },
  {
    "question": "What is the domain of the function f(x) = square root of (x – 2)?",
    "options": [
      "All real numbers",
      "x ≥ 2",
      "x > 2",
      "x ≤ 2"
    ],
    "answer": 1,
    "hint": "The expression under a square root must be non-negative.",
    "explanation": "x – 2 ≥ 0 implies x ≥ 2."
  },
  {
    "question": "Which of the following is NOT a polynomial function?",
    "options": [
      "f(x) = x squared + 2x + 1",
      "f(x) = x to the power 3",
      "f(x) = 1/x",
      "f(x) = 5"
    ],
    "answer": 2,
    "hint": "Polynomial functions have only non-negative integer exponents.",
    "explanation": "1/x = x to the power –1, which has a negative exponent, so it is not a polynomial."
  },
  {
    "question": "What is the value of the greatest integer function [x] at x = –1.3?",
    "options": [
      "–1",
      "–2",
      "0",
      "1"
    ],
    "answer": 1,
    "hint": "The greatest integer less than or equal to a negative number is the next smaller integer.",
    "explanation": "The largest integer less than or equal to –1.3 is –2."
  },
  {
    "question": "If f(x) = 2x + 1 and g(x) = x – 3, what is (f – g)(5)?",
    "options": [
      "9",
      "7",
      "11",
      "5"
    ],
    "answer": 0,
    "hint": "Subtract g(5) from f(5).",
    "explanation": "f(5) = 11, g(5) = 2, so (f – g)(5) = 11 – 2 = 9."
  }
]
;
