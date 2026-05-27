import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH6_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "A restaurant offers 3 types of soup, 5 main courses, and 2 desserts. How many different three-course meals (one soup, one main, one dessert) can a customer order?",
    "options": [
      "10",
      "15",
      "30",
      "32"
    ],
    "answer": 2,
    "hint": "Apply the multiplication principle for three events.",
    "explanation": "The number of ways is 3 × 5 × 2 = 30."
  },
  {
    "question": "How many 3-letter words (with or without meaning) can be formed from the letters of the word 'APPLE' if repetition of letters is NOT allowed?",
    "options": [
      "60",
      "125",
      "15",
      "10"
    ],
    "answer": 0,
    "hint": "This is a permutation of 5 distinct objects taken 3 at a time.",
    "explanation": "The number is 5P3 = 5 × 4 × 3 = 60."
  },
  {
    "question": "What is the value of 0! ?",
    "options": [
      "0",
      "1",
      "Undefined",
      "Infinity"
    ],
    "answer": 1,
    "hint": "This is a standard definition in factorial notation.",
    "explanation": "By definition, 0! = 1."
  },
  {
    "question": "How many different signals can be made by hoisting 4 flags of different colours one above the other on a vertical staff?",
    "options": [
      "4",
      "16",
      "24",
      "256"
    ],
    "answer": 2,
    "hint": "This is the number of permutations of 4 distinct objects taken all at a time.",
    "explanation": "The number is 4P4 = 4! = 24."
  },
  {
    "question": "In how many ways can the letters of the word 'BANANA' be arranged?",
    "options": [
      "720",
      "60",
      "120",
      "30"
    ],
    "answer": 1,
    "hint": "There are 6 letters, with 3 A's and 2 N's.",
    "explanation": "The number is 6! / (3! × 2!) = 720 / (6 × 2) = 60."
  },
  {
    "question": "How many 2-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if repetition is allowed?",
    "options": [
      "20",
      "25",
      "10",
      "5"
    ],
    "answer": 1,
    "hint": "Each of the two places can be filled in 5 ways.",
    "explanation": "The number is 5 × 5 = 25."
  },
  {
    "question": "If nP3 = 60, what is the value of n?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 2,
    "hint": "nP3 = n × (n-1) × (n-2). Find n such that this product equals 60.",
    "explanation": "5 × 4 × 3 = 60, so n = 5."
  },
  {
    "question": "How many 3-digit numbers can be formed from the digits 0, 1, 2, 3, 4, 5 without repetition?",
    "options": [
      "120",
      "100",
      "60",
      "80"
    ],
    "answer": 1,
    "hint": "The hundreds place cannot be 0. First fix the hundreds place, then fill the tens and units.",
    "explanation": "Hundreds place: 5 choices (1-5). Then 5P2 ways for the remaining two places. Total = 5 × 5 × 4 = 100."
  },
  {
    "question": "Which of the following is equal to nCr?",
    "options": [
      "n! / r!",
      "n! / (n-r)!",
      "n! / (r! × (n-r)!)",
      "r! × nPr"
    ],
    "answer": 2,
    "hint": "Recall the relationship between permutations and combinations.",
    "explanation": "The formula for nCr is n! / (r! × (n-r)!)."
  },
  {
    "question": "If 5C3 = 5Cx, what is the value of x?",
    "options": [
      "2",
      "3",
      "5",
      "8"
    ],
    "answer": 0,
    "hint": "Use the property nCa = nCb implies a = b or a + b = n.",
    "explanation": "Since 5C3 = 5Cx, either x = 3 or x = 5-3 = 2. The distinct value is 2."
  },
  {
    "question": "A committee of 2 is to be formed from 4 boys and 3 girls. How many committees can be formed if the committee must have at least one girl?",
    "options": [
      "15",
      "21",
      "12",
      "18"
    ],
    "answer": 0,
    "hint": "Find the total number of committees and subtract those with no girls.",
    "explanation": "Total committees = 7C2 = 21. Committees with no girls (only boys) = 4C2 = 6. Required = 21 - 6 = 15."
  },
  {
    "question": "How many ways can 5 different books be arranged on a shelf?",
    "options": [
      "25",
      "120",
      "5",
      "15"
    ],
    "answer": 1,
    "hint": "This is the number of permutations of 5 distinct objects taken all at a time.",
    "explanation": "The number is 5! = 120."
  },
  {
    "question": "How many 4-digit numbers can be formed from the digits 1, 2, 3, 4, 5, 6 without repetition that are divisible by 5?",
    "options": [
      "60",
      "120",
      "24",
      "360"
    ],
    "answer": 0,
    "hint": "A number is divisible by 5 if its last digit is 0 or 5. Here, only 5 is available.",
    "explanation": "Fix the last digit as 5. Then arrange the remaining 5 digits in the first 3 places: 5P3 = 5 × 4 × 3 = 60."
  },
  {
    "question": "In how many ways can 5 people be seated in a row if two particular people must always sit together?",
    "options": [
      "48",
      "24",
      "120",
      "96"
    ],
    "answer": 0,
    "hint": "Treat the two people as a single unit. Then arrange the 4 units, and finally arrange the two people within their unit.",
    "explanation": "Treat the pair as one object: 4! = 24 arrangements. The pair can be arranged in 2! = 2 ways. Total = 24 × 2 = 48."
  },
  {
    "question": "What is the value of 7C0?",
    "options": [
      "0",
      "1",
      "7",
      "7!"
    ],
    "answer": 1,
    "hint": "This is a standard definition.",
    "explanation": "nC0 = 1 for any n."
  },
  {
    "question": "How many chords can be drawn through 10 points on a circle?",
    "options": [
      "90",
      "45",
      "10",
      "100"
    ],
    "answer": 1,
    "hint": "A chord is defined by any two points. Order does not matter.",
    "explanation": "The number is 10C2 = 45."
  },
  {
    "question": "If nC2 = 15, what is the value of n?",
    "options": [
      "5",
      "6",
      "7",
      "8"
    ],
    "answer": 1,
    "hint": "nC2 = n × (n-1) / 2. Solve for n.",
    "explanation": "n(n-1)/2 = 15 => n(n-1) = 30 => n = 6."
  },
  {
    "question": "How many 3-letter words (with or without meaning) can be formed from the letters of the word 'NUMBER' if repetition is allowed?",
    "options": [
      "120",
      "216",
      "20",
      "18"
    ],
    "answer": 1,
    "hint": "Each of the 3 places can be filled by any of the 6 letters.",
    "explanation": "The number is 6^3 = 216."
  },
  {
    "question": "In how many ways can 4 boys and 4 girls be seated in a row so that boys and girls sit alternately?",
    "options": [
      "1152",
      "576",
      "288",
      "40320"
    ],
    "answer": 0,
    "hint": "There are two patterns: BGBGBGBG or GBGBGBGB. Arrange boys and girls separately.",
    "explanation": "Two patterns. For each, arrange 4 boys in 4! ways and 4 girls in 4! ways. Total = 2 × 4! × 4! = 2 × 24 × 24 = 1152."
  },
  {
    "question": "How many 5-digit numbers can be formed from the digits 0, 1, 2, 3, 4, 5, 6 without repetition that are greater than 50000?",
    "options": [
      "720",
      "1440",
      "2160",
      "4320"
    ],
    "answer": 1,
    "hint": "The first digit must be 5 or 6.",
    "explanation": "First digit: 2 choices (5 or 6). Remaining 4 digits from the other 6: 6P4 = 360. Total = 2 × 360 = 720."
  },
  {
    "question": "If 12Pr = 132, what is the value of r?",
    "options": [
      "1",
      "2",
      "3",
      "11"
    ],
    "answer": 1,
    "hint": "12P1 = 12, 12P2 = 12 × 11 = 132.",
    "explanation": "12P2 = 12 × 11 = 132, so r = 2."
  },
  {
    "question": "How many ways can the letters of the word 'MISSISSIPPI' be arranged?",
    "options": [
      "34650",
      "34650",
      "11550",
      "69300"
    ],
    "answer": 0,
    "hint": "There are 11 letters: M=1, I=4, S=4, P=2.",
    "explanation": "The number is 11! / (4! × 4! × 2!) = 39916800 / (24 × 24 × 2) = 34650."
  },
  {
    "question": "A bag contains 5 red and 4 black balls. In how many ways can 3 balls be drawn so that at least 2 are black?",
    "options": [
      "34",
      "40",
      "24",
      "10"
    ],
    "answer": 0,
    "hint": "Consider two cases: exactly 2 black and 1 red, or exactly 3 black.",
    "explanation": "Case 1 (2 black, 1 red): 4C2 × 5C1 = 6 × 5 = 30. Case 2 (3 black): 4C3 = 4. Total = 30 + 4 = 34."
  },
  {
    "question": "How many 4-digit numbers can be formed from the digits 0, 1, 2, 3, 4, 5 if repetition is allowed and the number is even?",
    "options": [
      "648",
      "324",
      "540",
      "1080"
    ],
    "answer": 0,
    "hint": "The last digit must be even (0,2,4). The first digit cannot be 0. Consider cases based on the last digit.",
    "explanation": "If last digit is 0: first digit has 5 choices, middle two have 6 each = 5×6×6 = 180. If last digit is 2 or 4: first digit has 4 choices (not 0 and not the last digit), middle two have 6 each = 2 × 4 × 6 × 6 = 288. Total = 180 + 288 = 468."
  },
  {
    "question": "In how many ways can 5 men and 3 women be seated in a row so that no two women are together?",
    "options": [
      "14400",
      "7200",
      "2880",
      "40320"
    ],
    "answer": 0,
    "hint": "First arrange the men, then place the women in the gaps between them.",
    "explanation": "Arrange 5 men: 5! = 120. There are 6 gaps (including ends). Choose 3 gaps for women: 6P3 = 120. Total = 120 × 120 = 14400."
  }
]
;
