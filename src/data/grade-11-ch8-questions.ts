import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH8_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "A sequence is defined by an = 3n - 2. What is its 5th term?",
    "options": [
      "13",
      "15",
      "17",
      "11"
    ],
    "answer": 0,
    "hint": "Substitute n = 5 into the formula for an.",
    "explanation": "a5 = 3(5) - 2 = 15 - 2 = 13."
  },
  {
    "question": "Which of the following is a finite sequence?",
    "options": [
      "The sequence of successive quotients of 10 divided by 3",
      "The sequence of ancestors over 10 generations",
      "The sequence of even natural numbers",
      "The Fibonacci sequence"
    ],
    "answer": 1,
    "hint": "A finite sequence has a fixed number of terms.",
    "explanation": "The sequence of ancestors over 10 generations has exactly 10 terms, making it finite. The others are infinite."
  },
  {
    "question": "The Fibonacci sequence is defined by a1 = a2 = 1 and an = an-2 + an-1 for n > 2. What is a6?",
    "options": [
      "5",
      "8",
      "13",
      "3"
    ],
    "answer": 1,
    "hint": "Generate the sequence term by term using the recurrence relation.",
    "explanation": "a1=1, a2=1, a3=2, a4=3, a5=5, a6=8."
  },
  {
    "question": "A sequence is defined by a1 = 2 and an = 3an-1 for n ≥ 2. What is a3?",
    "options": [
      "6",
      "18",
      "54",
      "12"
    ],
    "answer": 1,
    "hint": "Apply the recurrence relation step by step.",
    "explanation": "a2 = 3 * a1 = 3 * 2 = 6. a3 = 3 * a2 = 3 * 6 = 18."
  },
  {
    "question": "What is the sum of the series represented by Σ (from k=1 to 3) (2k + 1)?",
    "options": [
      "15",
      "12",
      "21",
      "9"
    ],
    "answer": 0,
    "hint": "Write out the terms of the series and then add them.",
    "explanation": "The terms are: 2(1)+1=3, 2(2)+1=5, 2(3)+1=7. The sum is 3+5+7=15."
  },
  {
    "question": "In a geometric progression, what is the common ratio of the sequence 1/2, -1/4, 1/8, -1/16, ...?",
    "options": [
      "-1/2",
      "1/2",
      "-2",
      "2"
    ],
    "answer": 0,
    "hint": "Divide any term by its preceding term.",
    "explanation": "The common ratio r = (-1/4) / (1/2) = -1/2."
  },
  {
    "question": "The nth term of a G.P. is given by an = 3 * (2)^(n-1). What is the first term and common ratio?",
    "options": [
      "a=3, r=2",
      "a=2, r=3",
      "a=3, r=1",
      "a=1, r=6"
    ],
    "answer": 0,
    "hint": "The general form of the nth term of a G.P. is a * r^(n-1).",
    "explanation": "Comparing an = 3 * 2^(n-1) with an = a * r^(n-1) gives a=3 and r=2."
  },
  {
    "question": "What is the 6th term of the G.P. 2, 6, 18, ...?",
    "options": [
      "486",
      "162",
      "54",
      "1458"
    ],
    "answer": 0,
    "hint": "First find the common ratio, then use the formula an = a * r^(n-1).",
    "explanation": "a=2, r=6/2=3. a6 = 2 * 3^(6-1) = 2 * 3^5 = 2 * 243 = 486."
  },
  {
    "question": "The sum of the first n terms of a G.P. is given by Sn = 2(3^n - 1). What is the common ratio?",
    "options": [
      "3",
      "2",
      "1",
      "6"
    ],
    "answer": 0,
    "hint": "Use the formula Sn = a(r^n - 1)/(r - 1) and compare it to the given expression.",
    "explanation": "The given Sn = 2(3^n - 1) matches the form a(r^n - 1)/(r-1) with r=3 and a/(r-1)=2, so a=4."
  },
  {
    "question": "For a G.P. with a=5 and r=2, what is S4?",
    "options": [
      "75",
      "80",
      "40",
      "155"
    ],
    "answer": 0,
    "hint": "Use the sum formula for a G.P. where r ≠ 1.",
    "explanation": "S4 = 5(2^4 - 1)/(2-1) = 5(16-1)/1 = 5*15 = 75."
  },
  {
    "question": "What is the geometric mean of 4 and 9?",
    "options": [
      "6",
      "6.5",
      "36",
      "13"
    ],
    "answer": 0,
    "hint": "The geometric mean of two numbers a and b is √(ab).",
    "explanation": "G.M. = √(4 * 9) = √36 = 6."
  },
  {
    "question": "Insert one geometric mean between 2 and 18. What is it?",
    "options": [
      "6",
      "10",
      "9",
      "36"
    ],
    "answer": 0,
    "hint": "If G is the geometric mean between a and b, then a, G, b are in G.P., so G = √(ab).",
    "explanation": "G = √(2 * 18) = √36 = 6."
  },
  {
    "question": "If the A.M. of two positive numbers is 10 and their G.M. is 8, what is one of the numbers?",
    "options": [
      "4",
      "6",
      "12",
      "20"
    ],
    "answer": 0,
    "hint": "Use the relationships a+b=2*A.M. and ab=(G.M.)^2 to form a quadratic equation.",
    "explanation": "a+b=20, ab=64. The quadratic is x^2 - 20x + 64 = 0, which factors to (x-4)(x-16)=0. So the numbers are 4 and 16."
  },
  {
    "question": "Which of the following is true for any two positive numbers a and b?",
    "options": [
      "A.M. ≥ G.M.",
      "A.M. ≤ G.M.",
      "A.M. = G.M. always",
      "A.M. and G.M. have no fixed relationship"
    ],
    "answer": 0,
    "hint": "Consider the expression A - G and its value.",
    "explanation": "A - G = (√a - √b)^2 / 2 ≥ 0, so A ≥ G."
  },
  {
    "question": "A sequence is defined by an = n^2 + 1. What type of sequence is this?",
    "options": [
      "It is a sequence with a general term",
      "It is a geometric progression",
      "It is an arithmetic progression",
      "It is a Fibonacci sequence"
    ],
    "answer": 0,
    "hint": "Check if the terms follow a constant difference or ratio.",
    "explanation": "The terms are 2, 5, 10, 17, ... The differences are 3, 5, 7, ... and the ratios are 2.5, 2, 1.7, ... Neither is constant, so it is just a sequence defined by a formula."
  },
  {
    "question": "The series 1 + 1/2 + 1/4 + 1/8 + ... is an example of:",
    "options": [
      "An infinite geometric series",
      "A finite geometric series",
      "An arithmetic series",
      "A Fibonacci series"
    ],
    "answer": 0,
    "hint": "Look at the pattern of terms and whether the series has an end.",
    "explanation": "The terms are 1, 1/2, 1/4, ... which form a G.P. with r=1/2. The '...' indicates it continues indefinitely, so it is an infinite geometric series."
  },
  {
    "question": "What is the sum of the infinite geometric series 1 + 1/3 + 1/9 + 1/27 + ...?",
    "options": [
      "3/2",
      "4/3",
      "3",
      "It does not have a finite sum"
    ],
    "answer": 0,
    "hint": "Use the formula for the sum of an infinite G.P.: S∞ = a/(1-r) for |r| < 1.",
    "explanation": "a=1, r=1/3. S∞ = 1/(1 - 1/3) = 1/(2/3) = 3/2."
  },
  {
    "question": "For a G.P., if the 2nd term is 12 and the 4th term is 48, what is the common ratio?",
    "options": [
      "2",
      "4",
      "-2",
      "±2"
    ],
    "answer": 3,
    "hint": "Use the formula an = a * r^(n-1) to set up two equations and solve for r.",
    "explanation": "a2 = ar = 12, a4 = ar^3 = 48. Dividing a4 by a2 gives r^2 = 4, so r = ±2."
  },
  {
    "question": "The sum of the first n terms of a G.P. is 255, the first term is 1, and the common ratio is 2. What is n?",
    "options": [
      "8",
      "7",
      "9",
      "6"
    ],
    "answer": 0,
    "hint": "Use the sum formula Sn = a(r^n - 1)/(r - 1) and solve for n.",
    "explanation": "255 = 1(2^n - 1)/(2-1) => 2^n - 1 = 255 => 2^n = 256 => n = 8."
  },
  {
    "question": "What is the 10th term of the sequence defined by an = (-1)^(n+1) * n^2?",
    "options": [
      "-100",
      "100",
      "-10",
      "10"
    ],
    "answer": 0,
    "hint": "Substitute n=10 into the formula and evaluate the power of -1.",
    "explanation": "a10 = (-1)^(10+1) * 10^2 = (-1)^11 * 100 = -1 * 100 = -100."
  },
  {
    "question": "Which of the following is NOT a geometric progression?",
    "options": [
      "1, -2, 4, -8",
      "2, 4, 6, 8",
      "100, 10, 1, 0.1",
      "x, x^2, x^3, x^4"
    ],
    "answer": 1,
    "hint": "Check if the ratio between consecutive terms is constant.",
    "explanation": "For 2, 4, 6, 8, the ratios are 2, 1.5, 1.33..., which are not constant. The others have constant ratios: -2, 0.1, and x respectively."
  },
  {
    "question": "If a, b, c are in G.P., then which of the following is true?",
    "options": [
      "b^2 = ac",
      "b = (a+c)/2",
      "a + c = 2b",
      "a = b = c"
    ],
    "answer": 0,
    "hint": "Recall the definition of a G.P.: the ratio of consecutive terms is constant.",
    "explanation": "If a, b, c are in G.P., then b/a = c/b, which implies b^2 = ac."
  },
  {
    "question": "A sequence is defined by a1 = 1, a2 = 1, and an = an-1 + 2an-2 for n > 2. What is a4?",
    "options": [
      "5",
      "3",
      "7",
      "1"
    ],
    "answer": 0,
    "hint": "Apply the recurrence relation step by step.",
    "explanation": "a3 = a2 + 2a1 = 1 + 2(1) = 3. a4 = a3 + 2a2 = 3 + 2(1) = 5."
  },
  {
    "question": "What is the sum of the first 5 terms of the series 2 + 6 + 18 + 54 + ...?",
    "options": [
      "242",
      "80",
      "162",
      "726"
    ],
    "answer": 0,
    "hint": "Identify the series as a G.P. and use the sum formula.",
    "explanation": "a=2, r=3. S5 = 2(3^5 - 1)/(3-1) = 2(243-1)/2 = 242."
  },
  {
    "question": "If the A.M. and G.M. of two numbers are 5 and 4 respectively, what is the product of the numbers?",
    "options": [
      "16",
      "20",
      "25",
      "10"
    ],
    "answer": 0,
    "hint": "The geometric mean G is √(ab), so ab = G^2.",
    "explanation": "G = 4, so ab = 4^2 = 16."
  }
]
;
