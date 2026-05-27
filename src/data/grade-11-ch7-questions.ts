import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH7_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "What is the total number of terms in the expansion of (a + b)^n, where n is a positive integer?",
    "options": [
      "n",
      "n - 1",
      "n + 1",
      "2n"
    ],
    "answer": 2,
    "hint": "Consider the pattern for small values of n like n=1, n=2.",
    "explanation": "In the expansion of (a + b)^n, the number of terms is always one more than the index n, so there are n+1 terms."
  },
  {
    "question": "In the expansion of (a + b)^n, what is the sum of the powers of a and b in any term?",
    "options": [
      "n - 1",
      "n",
      "n + 1",
      "2n"
    ],
    "answer": 1,
    "hint": "Check the first term: a^n b^0 has sum n+0 = n.",
    "explanation": "In every term of the expansion, the sum of the indices of a and b is always equal to n."
  },
  {
    "question": "Which of the following is the correct row of Pascal's triangle for index 4?",
    "options": [
      "1, 3, 3, 1",
      "1, 4, 6, 4, 1",
      "1, 5, 10, 10, 5, 1",
      "1, 4, 4, 1"
    ],
    "answer": 1,
    "hint": "Pascal's triangle starts with row 0: 1. Row 1: 1,1. Row 2: 1,2,1. Row 3: 1,3,3,1.",
    "explanation": "Row for index 4 is 1, 4, 6, 4, 1, which corresponds to 4C0, 4C1, 4C2, 4C3, 4C4."
  },
  {
    "question": "What is the coefficient of the term a^3 b^2 in the expansion of (a + b)^5?",
    "options": [
      "5",
      "10",
      "20",
      "15"
    ],
    "answer": 1,
    "hint": "The coefficient is 5C2 or 5C3.",
    "explanation": "The term a^3 b^2 corresponds to r=2, so the coefficient is 5C2 = 10."
  },
  {
    "question": "Using the binomial theorem, what is the expansion of (x - y)^3?",
    "options": [
      "x^3 - 3x^2 y + 3x y^2 - y^3",
      "x^3 + 3x^2 y + 3x y^2 + y^3",
      "x^3 - 3x^2 y - 3x y^2 - y^3",
      "x^3 - 3x^2 y + 3x y^2 + y^3"
    ],
    "answer": 0,
    "hint": "The signs alternate starting with positive for the first term.",
    "explanation": "Using (x - y)^3 = 3C0 x^3 - 3C1 x^2 y + 3C2 x y^2 - 3C3 y^3 = x^3 - 3x^2 y + 3x y^2 - y^3."
  },
  {
    "question": "What is the value of (1 + x)^n when x = 1?",
    "options": [
      "1",
      "n",
      "2^n",
      "n^2"
    ],
    "answer": 2,
    "hint": "Substitute x=1 into the expansion of (1+x)^n.",
    "explanation": "When x=1, (1+1)^n = 2^n, which equals the sum of all binomial coefficients nC0 + nC1 + ... + nCn."
  },
  {
    "question": "What is the third term in the expansion of (2x + 3)^4?",
    "options": [
      "216 x^2",
      "216 x^3",
      "96 x^2",
      "96 x^3"
    ],
    "answer": 0,
    "hint": "The third term corresponds to r=2 in the binomial theorem.",
    "explanation": "The third term is 4C2 (2x)^2 (3)^2 = 6 * 4x^2 * 9 = 216 x^2."
  },
  {
    "question": "Which of the following is the correct expansion of (1 - x)^5?",
    "options": [
      "1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5",
      "1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5",
      "1 - 5x - 10x^2 - 10x^3 - 5x^4 - x^5",
      "1 - 5x + 10x^2 + 10x^3 + 5x^4 + x^5"
    ],
    "answer": 0,
    "hint": "The signs alternate starting with positive.",
    "explanation": "Using (1 - x)^5 = 5C0 - 5C1 x + 5C2 x^2 - 5C3 x^3 + 5C4 x^4 - 5C5 x^5 = 1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5."
  },
  {
    "question": "What is the coefficient of x^3 in the expansion of (1 + 2x)^4?",
    "options": [
      "8",
      "16",
      "24",
      "32"
    ],
    "answer": 3,
    "hint": "The term with x^3 corresponds to r=3.",
    "explanation": "The term is 4C3 (1)^1 (2x)^3 = 4 * 8x^3 = 32x^3, so the coefficient is 32."
  },
  {
    "question": "Using the binomial theorem, what is (99)^5 approximately equal to?",
    "options": [
      "9509900499",
      "9039207968",
      "9509900499",
      "10000000000"
    ],
    "answer": 1,
    "hint": "Express 99 as (100 - 1) and expand.",
    "explanation": "(99)^5 = (100 - 1)^5 = 100^5 - 5*100^4 + 10*100^3 - 10*100^2 + 5*100 - 1 = 9039207968."
  },
  {
    "question": "What is the sum of the coefficients in the expansion of (x + y)^n?",
    "options": [
      "n",
      "2^n",
      "n^2",
      "1"
    ],
    "answer": 1,
    "hint": "Set x = 1 and y = 1 in the expansion.",
    "explanation": "The sum of coefficients is obtained by setting x=1 and y=1, giving (1+1)^n = 2^n."
  },
  {
    "question": "In the expansion of (a + b)^n, what is the power of b in the first term?",
    "options": [
      "1",
      "n",
      "0",
      "n-1"
    ],
    "answer": 2,
    "hint": "Look at the pattern: the first term is a^n b^0.",
    "explanation": "In the first term, the power of b is 0, and it increases by 1 in each subsequent term."
  },
  {
    "question": "What is the value of nC0 + nC1 + nC2 + ... + nCn?",
    "options": [
      "n",
      "2^n",
      "n^2",
      "1"
    ],
    "answer": 1,
    "hint": "This is the sum of all binomial coefficients for a given n.",
    "explanation": "The sum of all binomial coefficients for a given n is 2^n, as shown by setting x=1 in (1+x)^n."
  },
  {
    "question": "What is the middle term in the expansion of (x + 2)^4?",
    "options": [
      "24x^2",
      "24x^3",
      "96x^2",
      "96x^3"
    ],
    "answer": 0,
    "hint": "For n=4, there are 5 terms, so the middle term is the third term (r=2).",
    "explanation": "The third term is 4C2 x^2 (2)^2 = 6 * x^2 * 4 = 24x^2."
  },
  {
    "question": "What is the coefficient of x^2 in the expansion of (1 - 3x)^3?",
    "options": [
      "-27",
      "27",
      "-9",
      "9"
    ],
    "answer": 1,
    "hint": "The term with x^2 corresponds to r=2.",
    "explanation": "The term is 3C2 (1)^1 (-3x)^2 = 3 * 9x^2 = 27x^2, so the coefficient is 27."
  },
  {
    "question": "Using the binomial theorem, what is (1.01)^1000000 compared to 10000?",
    "options": [
      "Less than 10000",
      "Equal to 10000",
      "Greater than 10000",
      "Cannot be determined"
    ],
    "answer": 2,
    "hint": "Expand (1 + 0.01)^1000000 and look at the first two terms.",
    "explanation": "(1.01)^1000000 = 1 + 1000000*0.01 + other positive terms = 1 + 10000 + ... > 10000."
  },
  {
    "question": "What is the last term in the expansion of (a + b)^n?",
    "options": [
      "a^n",
      "b^n",
      "a b^(n-1)",
      "a^(n-1) b"
    ],
    "answer": 1,
    "hint": "The powers of b increase from 0 to n.",
    "explanation": "The last term is nCn b^n = b^n."
  },
  {
    "question": "What is the coefficient of a^2 b^3 in the expansion of (a + b)^5?",
    "options": [
      "5",
      "10",
      "15",
      "20"
    ],
    "answer": 1,
    "hint": "The coefficient is 5C3 or 5C2.",
    "explanation": "The term a^2 b^3 corresponds to r=3, so the coefficient is 5C3 = 10."
  },
  {
    "question": "What is the expansion of (x + 1/x)^3?",
    "options": [
      "x^3 + 3x + 3/x + 1/x^3",
      "x^3 + 3x^2 + 3x + 1",
      "x^3 + 3x + 3/x^2 + 1/x^3",
      "x^3 + 3x^2 + 3/x + 1/x^3"
    ],
    "answer": 0,
    "hint": "Use the binomial theorem with a=x and b=1/x.",
    "explanation": "(x + 1/x)^3 = 3C0 x^3 + 3C1 x^2 (1/x) + 3C2 x (1/x)^2 + 3C3 (1/x)^3 = x^3 + 3x + 3/x + 1/x^3."
  },
  {
    "question": "What is the value of nC0 - nC1 + nC2 - ... + (-1)^n nCn?",
    "options": [
      "2^n",
      "0",
      "1",
      "-1"
    ],
    "answer": 1,
    "hint": "Set x=1 in the expansion of (1-x)^n.",
    "explanation": "Setting x=1 in (1-x)^n gives 0 = nC0 - nC1 + nC2 - ... + (-1)^n nCn."
  },
  {
    "question": "In the expansion of (2x - y)^4, what is the coefficient of x^2 y^2?",
    "options": [
      "24",
      "12",
      "6",
      "48"
    ],
    "answer": 0,
    "hint": "The term with x^2 y^2 corresponds to r=2.",
    "explanation": "The term is 4C2 (2x)^2 (-y)^2 = 6 * 4x^2 * y^2 = 24x^2 y^2, so the coefficient is 24."
  },
  {
    "question": "What is the number of terms in the expansion of (x + 2y)^10?",
    "options": [
      "9",
      "10",
      "11",
      "12"
    ],
    "answer": 2,
    "hint": "The number of terms is one more than the index.",
    "explanation": "For n=10, the number of terms is n+1 = 11."
  },
  {
    "question": "What is the second term in the expansion of (x - 3)^5?",
    "options": [
      "-15x^4",
      "15x^4",
      "-15x^3",
      "15x^3"
    ],
    "answer": 0,
    "hint": "The second term corresponds to r=1.",
    "explanation": "The second term is 5C1 x^4 (-3)^1 = 5 * x^4 * (-3) = -15x^4."
  },
  {
    "question": "What is the value of (1 + 2)^4 using the binomial theorem?",
    "options": [
      "16",
      "27",
      "64",
      "81"
    ],
    "answer": 3,
    "hint": "Compute (1+2)^4 = 3^4, or expand using binomial theorem.",
    "explanation": "(1+2)^4 = 3^4 = 81. Alternatively, expand: 1 + 4*2 + 6*4 + 4*8 + 16 = 1+8+24+32+16 = 81."
  },
  {
    "question": "What is the coefficient of x^4 in the expansion of (x^2 + 2)^3?",
    "options": [
      "6",
      "12",
      "8",
      "4"
    ],
    "answer": 0,
    "hint": "The term with x^4 corresponds to r=1.",
    "explanation": "The term is 3C1 (x^2)^2 (2)^1 = 3 * x^4 * 2 = 6x^4, so the coefficient is 6."
  }
]
;
