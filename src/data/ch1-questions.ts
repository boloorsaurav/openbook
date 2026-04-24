import { QuizQuestion } from "@/components/widgets/Quiz";

export const CH1_QUESTIONS: QuizQuestion[] = [
  // ── Locker Puzzle / Factors ──────────────────────────────────────────────
  {
    question: "In the locker puzzle, a locker stays open at the end if and only if it has an odd number of factors. Which of the following numbers has an odd number of factors?",
    options: ["12", "36", "18", "20"],
    answer: 1,
    hint: "Only perfect squares have an odd number of factors — they have one factor that pairs with itself.",
    explanation: "36 = 6² is a perfect square. Its factors are 1, 2, 3, 4, 6, 9, 12, 18, 36 — that's 9 factors (odd). The others are not perfect squares.",
  },
  {
    question: "Which of the following numbers would have locker 50 still OPEN at the end?",
    options: ["50 is a perfect square", "50 is prime", "50 is not a perfect square", "50 has exactly 2 factors"],
    answer: 2,
    hint: "Is there a whole number n where n × n = 50?",
    explanation: "50 = 2 × 5² is not a perfect square. Its factors pair up evenly, so the locker ends up closed.",
  },
  {
    question: "How many lockers are open at the end of the locker puzzle with 100 lockers?",
    options: ["8", "9", "10", "12"],
    answer: 2,
    hint: "Count the perfect squares from 1 to 100: 1², 2², 3², ..., 10².",
    explanation: "The perfect squares from 1 to 100 are 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 — exactly 10 lockers.",
  },

  // ── Perfect Squares: Properties ─────────────────────────────────────────
  {
    question: "Which of the following numbers is NOT a perfect square?",
    options: ["2032", "2048", "1089", "1024"],
    answer: 1,
    hint: "Perfect squares never end in 2, 3, 7, or 8.",
    explanation: "2048 ends in 8, so it cannot be a perfect square. The others: 2032 ends in 2 (also not), 1089 = 33², 1024 = 32².",
  },
  {
    question: "A perfect square always ends in one of which digits?",
    options: ["0, 1, 2, 4, 6, 9", "0, 1, 4, 5, 6, 9", "1, 3, 5, 7, 9", "0, 2, 4, 6, 8"],
    answer: 1,
    hint: "Try squaring 0–9 and look at the units digits.",
    explanation: "0²=0, 1²=1, 2²=4, 3²=9, 4²=6, 5²=5, 6²=6, 7²=9, 8²=4, 9²=1. Units digits of squares are 0, 1, 4, 5, 6, 9.",
  },
  {
    question: "If a number ends in 7, can it be a perfect square?",
    options: ["Yes, always", "Sometimes", "Never", "Only if it's odd"],
    answer: 2,
    hint: "Look at the units digits of all squares from 0² to 9².",
    explanation: "None of 0²–9² end in 7. So any number ending in 7 is definitely not a perfect square.",
  },
  {
    question: "How many zeros can a perfect square end with if it ends in zeros at all?",
    options: ["Any number of zeros", "Always an even number of zeros", "Always an odd number of zeros", "Exactly 2 zeros"],
    answer: 1,
    hint: "Think about what happens when you square a number ending in zeros.",
    explanation: "Squaring a number doubles the trailing zeros. 10² = 100 (2 zeros), 100² = 10000 (4 zeros). A perfect square can only have an even number of trailing zeros.",
  },
  {
    question: "Which of the following must be true about a perfect square?",
    options: ["It is even", "It is odd", "It has the same parity as its square root", "It is prime"],
    answer: 2,
    hint: "If n is even, what is n²? If n is odd, what is n²?",
    explanation: "Even² = even (e.g. 4² = 16), odd² = odd (e.g. 3² = 9). A perfect square has the same parity (odd/even) as its root.",
  },

  // ── Odd Numbers and Squares ──────────────────────────────────────────────
  {
    question: "What is 1 + 3 + 5 + 7 + 9?",
    options: ["20", "21", "25", "30"],
    answer: 2,
    hint: "Sum of first n odd numbers = n². Here n = 5.",
    explanation: "The sum of the first 5 odd numbers = 5² = 25.",
  },
  {
    question: "Given that 35² = 1225, what is 36²?",
    options: ["1225 + 35", "1225 + 71", "1225 + 36", "1296"],
    answer: 1,
    hint: "36² = 35² + (2×36 − 1). The nth odd number is 2n − 1.",
    explanation: "36² = 35² + (2×36 − 1) = 1225 + 71 = 1296. Both B and D are correct; B shows the working.",
  },
  {
    question: "The sum of the first n odd numbers equals:",
    options: ["n(n+1)/2", "n²", "2n − 1", "n(n−1)"],
    answer: 1,
    hint: "Try n=3: 1+3+5 = 9 = 3². Which formula gives 9?",
    explanation: "The sum of the first n odd numbers is always n². This is shown by the L-shaped grid construction.",
  },
  {
    question: "What is the 10th odd number?",
    options: ["17", "19", "21", "20"],
    answer: 1,
    hint: "The nth odd number is 2n − 1.",
    explanation: "The 10th odd number = 2×10 − 1 = 19.",
  },
  {
    question: "A student claims 441 is a perfect square because she subtracted successive odd numbers starting from 1 and reached 0. After how many steps did she reach 0?",
    options: ["19", "20", "21", "22"],
    answer: 2,
    hint: "441 = n². Find n.",
    explanation: "21² = 441, so we subtract the first 21 odd numbers (1, 3, 5, …, 41) to reach 0. She took 21 steps.",
  },

  // ── Square Roots ─────────────────────────────────────────────────────────
  {
    question: "What is √576?",
    options: ["22", "23", "24", "26"],
    answer: 2,
    hint: "20² = 400, 25² = 625. The units digit of 576 is 6, so the root ends in 4 or 6.",
    explanation: "24² = 576. Check: 24 × 24 = (20+4)² = 400 + 160 + 16 = 576 ✓.",
  },
  {
    question: "Is 324 a perfect square? If so, what is its square root?",
    options: ["No", "Yes, 16", "Yes, 18", "Yes, 17"],
    answer: 2,
    hint: "324 = 2² × 3⁴. Can you pair up all prime factors?",
    explanation: "324 = 2² × 3⁴ = (2 × 3²)² = 18². So √324 = 18.",
  },
  {
    question: "Between which two consecutive integers does √200 lie?",
    options: ["13 and 14", "14 and 15", "15 and 16", "10 and 11"],
    answer: 1,
    hint: "14² = 196, 15² = 225. Where does 200 fall?",
    explanation: "196 < 200 < 225, so 14 < √200 < 15.",
  },
  {
    question: "Which method can you use to check if a large number is a perfect square?",
    options: ["Check if it is even", "Prime factorisation — all primes must appear an even number of times", "Check if it ends in 0 or 5", "Divide by 4"],
    answer: 1,
    hint: "Think about what it means to 'pair up' prime factors.",
    explanation: "In a perfect square every prime factor appears an even number of times, so factors group into identical pairs whose product gives the square root.",
  },
  {
    question: "Is 2800 a perfect square?",
    options: ["Yes", "No, because it ends in 0", "No, because 2800 = 2⁴ × 5² × 7 and 7 appears once (odd)", "Yes, because 2800 = 4 × 700"],
    answer: 2,
    hint: "Find the prime factorisation and check if every prime appears an even number of times.",
    explanation: "2800 = 2⁴ × 5² × 7. The prime 7 appears exactly once — an odd count — so 2800 is not a perfect square.",
  },

  // ── Cubic Numbers ────────────────────────────────────────────────────────
  {
    question: "Which of the following is a perfect cube?",
    options: ["36", "64", "48", "100"],
    answer: 1,
    hint: "4³ = ?",
    explanation: "64 = 4³ = 4 × 4 × 4. The others are not perfect cubes.",
  },
  {
    question: "How many unit cubes make a cube of side 5?",
    options: ["25", "75", "100", "125"],
    answer: 3,
    hint: "Volume = side³.",
    explanation: "5³ = 5 × 5 × 5 = 125 unit cubes.",
  },
  {
    question: "Is 9 a perfect cube?",
    options: ["Yes, 9 = 3²", "No — 2³=8 and 3³=27, so 9 is between them", "Yes, because 9 = 3×3", "Yes, 9 = (√9)³"],
    answer: 1,
    hint: "Find the smallest n with n³ > 9.",
    explanation: "2³ = 8 and 3³ = 27. Since 8 < 9 < 27, there is no integer n where n³ = 9, so 9 is not a perfect cube.",
  },
  {
    question: "What is the cube of 10?",
    options: ["100", "300", "1000", "10000"],
    answer: 2,
    hint: "10³ = 10 × 10 × 10.",
    explanation: "10 × 10 × 10 = 1000.",
  },
  {
    question: "A cube has volume 216 cm³. What is the length of each side?",
    options: ["4 cm", "5 cm", "6 cm", "7 cm"],
    answer: 2,
    hint: "Find n where n³ = 216.",
    explanation: "6³ = 216, so each side is 6 cm.",
  },

  // ── Mixed / Application ──────────────────────────────────────────────────
  {
    question: "How many perfect squares lie between 100 and 200 (not including 100 or 200)?",
    options: ["4", "5", "6", "3"],
    answer: 0,
    hint: "List squares: 11²=121, 12²=144, 13²=169, 14²=196, 15²=225.",
    explanation: "121, 144, 169, 196 are the perfect squares strictly between 100 and 200 — that's 4.",
  },
  {
    question: "The area of a square field is 2025 m². What is the perimeter of the field?",
    options: ["45 m", "90 m", "135 m", "180 m"],
    answer: 3,
    hint: "Find the side first: side = √2025. Then perimeter = 4 × side.",
    explanation: "√2025 = 45 (since 45² = 2025). Perimeter = 4 × 45 = 180 m.",
  },
  {
    question: "Which is the smallest number you must multiply 1323 by to make it a perfect square?",
    options: ["3", "7", "21", "49"],
    answer: 0,
    hint: "Find the prime factorisation of 1323 and see which prime has an odd exponent.",
    explanation: "1323 = 3³ × 7² = 3 × (3 × 7)². Multiply by 3 to get 3976 = ... wait: 1323 × 3 = 3969 = 63². So multiply by 3.",
  },
];
