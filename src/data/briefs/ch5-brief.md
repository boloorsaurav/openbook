---
chapter: 5
title: Number Play
route: /read/ch5
read_time: 35 min
---

## Sections

### 1: Sums of Consecutive Numbers and Parity
eyebrow: Exploring Patterns

**Concepts (exhaustive — every rule, definition, pattern):**
- Any odd number can be written as the sum of two consecutive numbers.
- For any 4 consecutive numbers, placing '+' and '–' signs between them in all 8 possible ways always results in expressions with even parity (all results are even numbers).
- Switching a '+' to a '–' (or vice versa) in an expression changes its value by an even number.
- If the difference between two numbers is even, they have the same parity (both even or both odd).
- The parity of a ± b is the same as the parity of a and b regardless of their individual parities.
- All expressions of the form a ± b ± c ± d have the same parity.
- Even numbers can be classified by remainder when divided by 4: multiples of 4 (remainder 0) and non-multiples of 4 (remainder 2).
- Adding two even numbers that are multiples of 4 always gives a multiple of 4.
- Adding two even numbers that are not multiples of 4 always gives a multiple of 4.
- Adding a multiple of 4 to an even number that is not a multiple of 4 gives a number that is 2 more than a multiple of 4 (not a multiple of 4).

**Worked examples (1 sentence each, only if source walks through solution):**
- None.

**Callout cards (1-3 per section):**
- title: "Parity of a ± b" | content: "The expressions a + b and a – b have the same parity, regardless of the parities of a and b."
- title: "Sum of Two Even Numbers (by remainder)" | content: "Two even numbers that are multiples of 4 add to a multiple of 4. Two even numbers that are not multiples of 4 (remainder 2) also add to a multiple of 4."

**Widget idea:** Interactive tool to choose 4 consecutive numbers and see all 8 expressions evaluated, highlighting that all results are even.

**Key terms:** consecutive numbers, parity, even, odd, remainder

### 2: Always, Sometimes, or Never True
eyebrow: Reasoning About Divisibility

**Concepts (exhaustive — every rule, definition, pattern):**
- If a divides M and a divides N, then a divides M + N and a divides M – N. (Always true)
- If a number is divisible by 8, it is not necessary that any two numbers adding to it are each divisible by 8. (Sometimes true)
- If a number is divisible by 7, then all multiples of that number are divisible by 7. (Always true)
- In general, if A is divisible by k, then all multiples of A are divisible by k.
- If a number is divisible by 12, then it is also divisible by all the factors of 12. (Always true)
- In general, if A is divisible by k, then A is divisible by all the factors of k.
- If a number is divisible by 7, it is not necessarily divisible by any multiple of 7. (Sometimes true)
- If a number is divisible by both 9 and 4, it must be divisible by 36. (Always true)
- If a number is divisible by both 6 and 4, it must be divisible by 24. (Sometimes true)
- In general, if A is divisible by k and also by m, then A is divisible by the LCM of k and m.
- The sum of an odd number and an even number is odd, so it can never be a multiple of 6 (which is always even). (Never true)

**Worked examples (1 sentence each, only if source walks through solution):**
- Worked example showing that if 8 divides two numbers separately, it must divide their sum (always true).
- Worked example showing that a number divisible by 8 can be expressed as a sum of two numbers that are not multiples of 8 (sometimes true).
- Worked example showing that if a number is divisible by 7, all its multiples are divisible by 7 (always true).
- Worked example showing that a number divisible by 12 is divisible by all factors of 12 (always true).
- Worked example showing that a number divisible by 7 is not always divisible by a multiple of 7 (sometimes true).
- Worked example showing that the sum of an odd and even number is never a multiple of 6 (never true).

**Callout cards (1-3 per section):**
- title: "Divisibility of Sums and Differences" | content: "If a divides M and a divides N, then a divides M + N and a divides M – N."
- title: "Divisibility by LCM" | content: "If a number is divisible by k and also by m, then it is divisible by the LCM of k and m."

**Widget idea:** Interactive quiz where students classify statements as "Always True", "Sometimes True", or "Never True" with feedback.

**Key terms:** always true, sometimes true, never true, factor, multiple, divisible, LCM

### 3: What Remains?
eyebrow: Numbers with a Given Remainder

**Concepts (exhaustive — every rule, definition, pattern):**
- Numbers that leave a remainder of 3 when divided by 5 are of the form 5k + 3.
- These numbers can also be expressed as 5k – 2 (for k ≥ 1).
- Multiple algebraic expressions can represent the same set of numbers.

**Worked examples (1 sentence each, only if source walks through solution):**
- Worked example showing that numbers leaving remainder 3 when divided by 5 are of the form 5k + 3, and also 5k – 2.

**Callout cards (1-3 per section):**
- title: "Numbers with a Given Remainder" | content: "Numbers that leave a remainder r when divided by n are of the form nk + r."

**Widget idea:** Interactive slider for k to generate numbers of the form 5k + 3 and visualize them on a number line.

**Key terms:** remainder, multiple, algebraic expression

### 4: Checking Divisibility Quickly
eyebrow: Divisibility Shortcuts

**Concepts (exhaustive — every rule, definition, pattern):**
- A number is divisible by 10 if and only if its units digit is 0.
- A number is divisible by 9 if and only if the sum of its digits is divisible by 9.
- The remainder when a number is divided by 9 can be found by repeatedly adding its digits until a single digit is obtained (the digital root).
- A number is divisible by 3 if the sum of its digits is divisible by 3.
- The shortcut for divisibility by 11 is based on the alternating pattern of place values being 1 more or 1 less than a multiple of 11.
- To check divisibility by 11: add digits in odd places (units, hundreds, etc.) and digits in even places (tens, thousands, etc.), then find the difference. If the difference is 0 or a multiple of 11, the number is divisible by 11.
- An equivalent method: place alternating '+' and '–' signs before every digit starting from the units digit, evaluate the expression; the result is the remainder when divided by 11.
- To check divisibility by 6, check divisibility by both 2 and 3.
- To check divisibility by 24, check divisibility by 3 and 8 (not 4 and 6), because 24 = 3 × 8 and 3 and 8 are coprime.

**Worked examples (1 sentence each, only if source walks through solution):**
- Worked example showing why the divisibility shortcut for 10 works using algebra (place value expansion).
- Worked example finding the remainder of 427 when divided by 9 using place value decomposition.
- Worked example finding the remainder of 7309 when divided by 9 using digit sum.
- Worked example checking divisibility of 320185 by 11 using the alternating sum method.

**Callout cards (1-3 per section):**
- title: "Divisibility by 9" | content: "A number is divisible by 9 if and only if the sum of its digits is divisible by 9."
- title: "Divisibility by 11" | content: "Find the difference between the sum of digits in odd places and the sum of digits in even places. If the difference is 0 or a multiple of 11, the number is divisible by 11."
- title: "Checking Divisibility by Composite Numbers" | content: "To check divisibility by a composite number, check divisibility by its coprime factors. For example, check 3 and 8 for 24, not 4 and 6."

**Widget idea:** Interactive tool where students enter a number and see the step-by-step application of the divisibility rule for 9 or 11.

**Key terms:** divisibility, place value, digit sum, alternating sum, composite number, coprime

### 5: Digital Roots
eyebrow: Repeated Digit Sum

**Concepts (exhaustive — every rule, definition, pattern):**
- The digital root of a number is the single-digit number obtained by repeatedly adding its digits.
- The digital root of a multiple of 9 is always 9.
- The digital root is the remainder when the number is divided by 9 (with 0 represented as 9).

**Worked examples (1 sentence each, only if source walks through solution):**
- Worked example finding the digital root of 489710.

**Callout cards (1-3 per section):**
- title: "Digital Root" | content: "The digital root is the single-digit number obtained by repeatedly adding the digits of a number. It is the remainder when the number is divided by 9 (with 0 represented as 9)."

**Widget idea:** Interactive tool to compute the digital root of any number and show the step-by-step addition.

**Key terms:** digital root

### 6: Digits in Disguise
eyebrow: Cryptarithms

**Concepts (exhaustive — every rule, definition, pattern):**
- In a cryptarithm, each letter stands for a unique digit.
- The first digit of a number is never 0.
- Cryptarithms can be solved using patterns, properties, and reasoning related to numbers and operations.

**Worked examples (1 sentence each, only if source walks through solution):**
- Worked example solving PQ × 8 = RS, showing that PQ must be 12.
- Worked example solving GH × H = 9K, listing possible solutions.
- Worked example solving BYE × 6 = RAY, reasoning that B must be 1 and Y must be even and less than 7.

**Callout cards (1-3 per section):**
- title: "Cryptarithm Rules" | content: "Each letter stands for a unique digit. The first digit of a number is never 0."

**Widget idea:** Interactive cryptarithm solver where students can input guesses and get feedback.

**Key terms:** cryptarithm, digit

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "If you take any four consecutive numbers and place '+' or '–' signs between them in all possible ways, what is true about all the results?",
    "options": [
      "They are all odd",
      "They are all even",
      "They are all multiples of 4",
      "They are all positive"
    ],
    "answer": 1,
    "hint": "Think about the parity of each expression when you change signs.",
    "explanation": "For any four consecutive numbers, all 8 expressions with '+' and '–' signs yield even numbers because the parity of a ± b is the same as that of a and b, and the sum of four numbers (two odd, two even) is even."
  },
  {
    "question": "Which of the following statements about parity is always true?",
    "options": [
      "a + b and a – b always have opposite parity",
      "a + b and a – b always have the same parity",
      "a + b is always even if a is even",
      "a – b is always odd if a is odd"
    ],
    "answer": 1,
    "hint": "Consider the difference between a + b and a – b.",
    "explanation": "The expressions a + b and a – b have the same parity because their difference is 2b, which is even, so they are either both even or both odd."
  },
  {
    "question": "If two even numbers are both not multiples of 4 (remainder 2 when divided by 4), what is their sum?",
    "options": [
      "A multiple of 2 but not of 4",
      "A multiple of 4",
      "A number with remainder 2 when divided by 4",
      "An odd number"
    ],
    "answer": 1,
    "hint": "Add two numbers that are each 2 more than a multiple of 4.",
    "explanation": "Two even numbers that are not multiples of 4 each have remainder 2 mod 4, so their sum has remainder 2+2=4 ≡ 0 mod 4, making it a multiple of 4."
  },
  {
    "question": "If a number is divisible by 8, which of the following is always true?",
    "options": [
      "Any two numbers that add to it are each divisible by 8",
      "It is divisible by 4",
      "It is divisible by 16",
      "It is odd"
    ],
    "answer": 1,
    "hint": "Think about factors of 8.",
    "explanation": "If a number is divisible by 8, it is also divisible by all factors of 8, including 4. The other statements are not always true."
  },
  {
    "question": "If a number is divisible by both 9 and 4, which of the following must be true?",
    "options": [
      "It is divisible by 36",
      "It is divisible by 24",
      "It is divisible by 13",
      "It is divisible by 6"
    ],
    "answer": 0,
    "hint": "Consider the least common multiple of 9 and 4.",
    "explanation": "Since 9 and 4 are coprime, a number divisible by both must be divisible by their product, 36."
  },
  {
    "question": "If a number is divisible by both 6 and 4, which of the following is always true?",
    "options": [
      "It is divisible by 24",
      "It is divisible by 12",
      "It is divisible by 8",
      "It is divisible by 36"
    ],
    "answer": 1,
    "hint": "Find the least common multiple of 6 and 4.",
    "explanation": "The LCM of 6 and 4 is 12, so any number divisible by both is divisible by 12, but not necessarily by 24."
  },
  {
    "question": "If a divides M and a divides N, which of the following is always true?",
    "options": [
      "a divides M + N",
      "a divides M × N",
      "a divides M – N only if M > N",
      "a divides M + N only if M and N are positive"
    ],
    "answer": 0,
    "hint": "Think about the distributive property of divisibility.",
    "explanation": "If a divides M and N, then M = a × p and N = a × q, so M + N = a(p+q), which is divisible by a. This is always true."
  },
  {
    "question": "If a number is divisible by 7, which of the following is always true?",
    "options": [
      "All multiples of that number are divisible by 7",
      "That number is divisible by 14",
      "That number is divisible by 49",
      "That number is odd"
    ],
    "answer": 0,
    "hint": "Consider the property of multiples of a multiple.",
    "explanation": "If A is divisible by 7, then A = 7k, so any multiple of A is 7(k × m), which is divisible by 7."
  },
  {
    "question": "If a number is divisible by 12, which of the following must be true?",
    "options": [
      "It is divisible by 24",
      "It is divisible by 6",
      "It is divisible by 36",
      "It is divisible by 8"
    ],
    "answer": 1,
    "hint": "List the factors of 12.",
    "explanation": "Since 6 is a factor of 12, any number divisible by 12 is also divisible by 6. The other numbers are not necessarily factors."
  },
  {
    "question": "What is the parity of the expression 7 + 3 – 5 + 1?",
    "options": [
      "Even",
      "Odd",
      "Cannot be determined",
      "Depends on the order"
    ],
    "answer": 0,
    "hint": "Count the number of odd numbers in the expression.",
    "explanation": "The numbers 7, 3, 5, 1 are all odd. The sum of four odd numbers is even, so the result is even."
  },
  {
    "question": "If you switch a '+' to a '–' in an expression of the form a ± b ± c ± d, how does the value change?",
    "options": [
      "It changes by an odd number",
      "It changes by an even number",
      "It changes by 2",
      "It changes sign"
    ],
    "answer": 1,
    "hint": "Consider the effect of changing the sign of a term.",
    "explanation": "Switching '+' to '–' changes the term from +x to –x, a difference of 2x, which is even."
  },
  {
    "question": "Which of the following numbers can be written as the sum of two consecutive numbers?",
    "options": [
      "12",
      "13",
      "14",
      "15"
    ],
    "answer": 1,
    "hint": "Think about the parity of the sum of two consecutive numbers.",
    "explanation": "The sum of two consecutive numbers is always odd. Among the options, only 13 is odd."
  },
  {
    "question": "If two numbers have the same parity, what can you say about their difference?",
    "options": [
      "It is odd",
      "It is even",
      "It is positive",
      "It is a multiple of 4"
    ],
    "answer": 1,
    "hint": "Consider the difference between two even or two odd numbers.",
    "explanation": "If both numbers are even or both odd, their difference is even."
  },
  {
    "question": "What is the remainder when the sum of two even numbers (each with remainder 2 mod 4) is divided by 4?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 0,
    "hint": "Add the remainders.",
    "explanation": "Each number has remainder 2 mod 4, so their sum has remainder 2+2=4 ≡ 0 mod 4."
  },
  {
    "question": "If a number is divisible by 7, is it necessarily divisible by 14?",
    "options": [
      "Yes, always",
      "No, only if it is even",
      "No, only if it is odd",
      "Sometimes, depending on the number"
    ],
    "answer": 1,
    "hint": "Consider the factors of 14.",
    "explanation": "14 = 2 × 7, so a number divisible by 7 must also be even to be divisible by 14. It is not always true."
  },
  {
    "question": "Which of the following statements about divisibility is always true?",
    "options": [
      "If a number is divisible by 8, it is divisible by 16",
      "If a number is divisible by 9 and 4, it is divisible by 36",
      "If a number is divisible by 6 and 4, it is divisible by 24",
      "If a number is divisible by 7, it is divisible by 49"
    ],
    "answer": 1,
    "hint": "Check the least common multiple condition.",
    "explanation": "Since 9 and 4 are coprime, divisibility by both implies divisibility by their product 36. The other statements are not always true."
  },
  {
    "question": "What is the parity of the expression 2 + 4 – 6 + 8?",
    "options": [
      "Even",
      "Odd",
      "Cannot be determined",
      "Depends on the order"
    ],
    "answer": 0,
    "hint": "All numbers are even.",
    "explanation": "All numbers are even, so any sum or difference of even numbers is even."
  },
  {
    "question": "If a number is divisible by both 6 and 4, which of the following is not necessarily true?",
    "options": [
      "It is divisible by 2",
      "It is divisible by 12",
      "It is divisible by 24",
      "It is divisible by 3"
    ],
    "answer": 2,
    "hint": "Find a counterexample.",
    "explanation": "12 is divisible by both 6 and 4 but not by 24. So divisibility by 24 is not guaranteed."
  },
  {
    "question": "How many different results are there when placing '+' and '–' signs between four consecutive numbers?",
    "options": [
      "4",
      "8",
      "16",
      "Depends on the numbers"
    ],
    "answer": 1,
    "hint": "Count the number of sign combinations.",
    "explanation": "There are 2 choices for each of the 3 signs, giving 2^3 = 8 possible expressions."
  },
  {
    "question": "If a number is divisible by 12, which of the following is always true?",
    "options": [
      "It is divisible by 24",
      "It is divisible by 36",
      "It is divisible by 4",
      "It is divisible by 8"
    ],
    "answer": 2,
    "hint": "List the factors of 12.",
    "explanation": "4 is a factor of 12, so any number divisible by 12 is divisible by 4. The others are not necessarily factors."
  },
  {
    "question": "What is the parity of the sum of any four consecutive numbers?",
    "options": [
      "Always even",
      "Always odd",
      "Sometimes even, sometimes odd",
      "Always a multiple of 4"
    ],
    "answer": 0,
    "hint": "Consider the pattern of odd and even numbers in four consecutive numbers.",
    "explanation": "Four consecutive numbers contain two odds and two evens. The sum of two odds is even, plus two evens is even, so total is even."
  },
  {
    "question": "If a number is divisible by 7, which of the following is not necessarily true?",
    "options": [
      "It is divisible by 7",
      "All multiples of it are divisible by 7",
      "It is divisible by 14",
      "It is divisible by 1"
    ],
    "answer": 2,
    "hint": "Consider the factor 2.",
    "explanation": "Divisibility by 14 requires divisibility by 2 as well, which is not guaranteed."
  },
  {
    "question": "What is the remainder when the sum of a multiple of 4 and an even number that is not a multiple of 4 is divided by 4?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": 2,
    "hint": "Add the remainders mod 4.",
    "explanation": "A multiple of 4 has remainder 0, and an even non-multiple of 4 has remainder 2, so the sum has remainder 2 mod 4."
  },
  {
    "question": "If a divides M and a divides N, which of the following is not necessarily true?",
    "options": [
      "a divides M + N",
      "a divides M – N",
      "a divides M × N",
      "a divides M / N"
    ],
    "answer": 3,
    "hint": "Division is not always an integer.",
    "explanation": "M/N may not be an integer, so a dividing it is not guaranteed. The other statements are always true."
  },
  {
    "question": "Which of the following numbers cannot be written as the sum of two consecutive numbers?",
    "options": [
      "7",
      "9",
      "11",
      "12"
    ],
    "answer": 3,
    "hint": "The sum of two consecutive numbers is always odd.",
    "explanation": "12 is even, so it cannot be the sum of two consecutive numbers. The others are odd."
  }
]
```
