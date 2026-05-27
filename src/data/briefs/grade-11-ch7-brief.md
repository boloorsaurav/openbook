---
chapter: 7
title: Binomial Theorem
route: /read/grade-11/ch7
read_time: 30
---

## Sections

### 1: Introduction
eyebrow: Introduction

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The binomial theorem provides an easier way to expand (a + b)^n for higher powers, avoiding repeated multiplication.
- In this chapter, the binomial theorem is studied for positive integral indices only.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- None.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Purpose of the Binomial Theorem" | content: "The binomial theorem gives an easier way to expand (a + b)^n for higher powers, like (98)^5 or (101)^6, without repeated multiplication."

**Widget idea:** none

**Key terms:** binomial theorem

---

### 2: Binomial Theorem for Positive Integral Indices
eyebrow: Section 7.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- In the expansion of (a + b)^n, the total number of terms is one more than the index n.
- In successive terms, the powers of the first quantity 'a' decrease by 1, and the powers of the second quantity 'b' increase by 1.
- In each term of the expansion, the sum of the indices of a and b is equal to n.
- The coefficients in the expansions of (a + b)^n form Pascal's triangle, where each row starts and ends with 1, and each interior number is the sum of the two numbers above it.
- Pascal's triangle is also known as Meru Prastara by Pingla.
- The numbers in Pascal's triangle can be expressed using combinations: nCr = n! / (r!(n-r)!), where 0 ≤ r ≤ n and n is a non-negative integer.
- For any index n, the row of Pascal's triangle is nC0, nC1, nC2, ..., nCn.
- The binomial theorem for any positive integer n states: (a + b)^n = nC0 a^n + nC1 a^(n-1) b + nC2 a^(n-2) b^2 + ... + nC(n-1) a b^(n-1) + nCn b^n.
- The proof of the binomial theorem is obtained by applying the principle of mathematical induction.
- The notation sum from k=0 to n of nCk a^(n-k) b^k stands for the entire expansion.
- The coefficients nCr occurring in the binomial theorem are known as binomial coefficients.
- There are (n+1) terms in the expansion of (a+b)^n.
- In the expansion of (a+b)^n, the sum of the indices of a and b is n in every term.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Expansion of (2x + 3y)^5 using Pascal's triangle: demonstrates using the row for index 5 (1, 5, 10, 10, 5, 1) to expand the binomial.
- Expansion of (x + 2)^6 using the binomial theorem: demonstrates applying the theorem to find the expansion, resulting in x^6 + 12x^5 + 60x^4 + 160x^3 + 240x^2 + 192x + 64.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Pascal's Triangle" | content: "Pascal's triangle is an array of binomial coefficients where each row starts and ends with 1, and each interior number is the sum of the two numbers directly above it."
- title: "Binomial Theorem Statement" | content: "For any positive integer n, (a + b)^n = nC0 a^n + nC1 a^(n-1) b + nC2 a^(n-2) b^2 + ... + nCn b^n."
- title: "Key Observations" | content: "In the expansion of (a+b)^n, there are (n+1) terms, the powers of a decrease while powers of b increase, and the sum of the indices of a and b is always n."

**Widget idea:** Interactive Pascal's Triangle: allow users to generate rows up to a given index and click on a coefficient to see its combination notation (e.g., nCr).

**Key terms:** Pascal's triangle, Meru Prastara, binomial coefficients, principle of mathematical induction

---

### 3: Special Cases of the Binomial Theorem
eyebrow: Section 7.2.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- For (x - y)^n, substitute b = -y into the binomial theorem: (x - y)^n = nC0 x^n - nC1 x^(n-1) y + nC2 x^(n-2) y^2 - nC3 x^(n-3) y^3 + ... + (-1)^n nCn y^n.
- For (1 + x)^n, substitute a = 1 and b = x: (1 + x)^n = nC0 + nC1 x + nC2 x^2 + nC3 x^3 + ... + nCn x^n.
- In particular, for x = 1 in (1 + x)^n, we get 2^n = nC0 + nC1 + nC2 + ... + nCn.
- For (1 - x)^n, substitute a = 1 and b = -x: (1 - x)^n = nC0 - nC1 x + nC2 x^2 - ... + (-1)^n nCn x^n.
- In particular, for x = 1 in (1 - x)^n, we get 0 = nC0 - nC1 + nC2 - ... + (-1)^n nCn.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Expansion of (x - 2y)^5: demonstrates using the special case (x - y)^n to expand, resulting in x^5 - 10x^4 y + 40x^3 y^2 - 80x^2 y^3 + 80x y^4 - 32y^5.
- Expansion of (x^2 + 3/x)^4: demonstrates applying the binomial theorem to a binomial with a variable in the denominator, resulting in x^8 + 12x^5 + 54x^2 + 108/x + 81/x^4.
- Computing (98)^5: demonstrates expressing 98 as (100 - 2) and using the binomial theorem to compute the value, resulting in 9039207968.
- Comparing (1.01)^1000000 and 10000: demonstrates using the binomial theorem to show (1.01)^1000000 > 10000 by expanding the first few terms.
- Proving 6^n - 5^n leaves remainder 1 when divided by 25: demonstrates using the binomial theorem on (1+5)^n to show 6^n - 5^n = 25k + 1 for some natural number k.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Special Case: (x - y)^n" | content: "In the expansion of (x - y)^n, the signs alternate: the first term is positive, the second is negative, and so on, ending with (-1)^n times the last term."
- title: "Special Case: (1 + x)^n" | content: "The expansion of (1 + x)^n gives a sum of binomial coefficients: (1 + x)^n = nC0 + nC1 x + nC2 x^2 + ... + nCn x^n."
- title: "Sum of Binomial Coefficients" | content: "Setting x = 1 in (1 + x)^n gives 2^n = nC0 + nC1 + nC2 + ... + nCn, the sum of all binomial coefficients for a given n."

**Widget idea:** Interactive expansion calculator: allow users to input a binomial like (x - 2y)^5 or (1.01)^1000000 and see the expanded form or computed value step-by-step.

**Key terms:** alternating signs, sum of binomial coefficients

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "What is the total number of terms in the expansion of (a + b)^n, where n is a positive integer?",
    "options": ["n", "n - 1", "n + 1", "2n"],
    "answer": 2,
    "hint": "Consider the pattern for small values of n like n=1, n=2.",
    "explanation": "In the expansion of (a + b)^n, the number of terms is always one more than the index n, so there are n+1 terms."
  },
  {
    "question": "In the expansion of (a + b)^n, what is the sum of the powers of a and b in any term?",
    "options": ["n - 1", "n", "n + 1", "2n"],
    "answer": 1,
    "hint": "Check the first term: a^n b^0 has sum n+0 = n.",
    "explanation": "In every term of the expansion, the sum of the indices of a and b is always equal to n."
  },
  {
    "question": "Which of the following is the correct row of Pascal's triangle for index 4?",
    "options": ["1, 3, 3, 1", "1, 4, 6, 4, 1", "1, 5, 10, 10, 5, 1", "1, 4, 4, 1"],
    "answer": 1,
    "hint": "Pascal's triangle starts with row 0: 1. Row 1: 1,1. Row 2: 1,2,1. Row 3: 1,3,3,1.",
    "explanation": "Row for index 4 is 1, 4, 6, 4, 1, which corresponds to 4C0, 4C1, 4C2, 4C3, 4C4."
  },
  {
    "question": "What is the coefficient of the term a^3 b^2 in the expansion of (a + b)^5?",
    "options": ["5", "10", "20", "15"],
    "answer": 1,
    "hint": "The coefficient is 5C2 or 5C3.",
    "explanation": "The term a^3 b^2 corresponds to r=2, so the coefficient is 5C2 = 10."
  },
  {
    "question": "Using the binomial theorem, what is the expansion of (x - y)^3?",
    "options": ["x^3 - 3x^2 y + 3x y^2 - y^3", "x^3 + 3x^2 y + 3x y^2 + y^3", "x^3 - 3x^2 y - 3x y^2 - y^3", "x^3 - 3x^2 y + 3x y^2 + y^3"],
    "answer": 0,
    "hint": "The signs alternate starting with positive for the first term.",
    "explanation": "Using (x - y)^3 = 3C0 x^3 - 3C1 x^2 y + 3C2 x y^2 - 3C3 y^3 = x^3 - 3x^2 y + 3x y^2 - y^3."
  },
  {
    "question": "What is the value of (1 + x)^n when x = 1?",
    "options": ["1", "n", "2^n", "n^2"],
    "answer": 2,
    "hint": "Substitute x=1 into the expansion of (1+x)^n.",
    "explanation": "When x=1, (1+1)^n = 2^n, which equals the sum of all binomial coefficients nC0 + nC1 + ... + nCn."
  },
  {
    "question": "What is the third term in the expansion of (2x + 3)^4?",
    "options": ["216 x^2", "216 x^3", "96 x^2", "96 x^3"],
    "answer": 0,
    "hint": "The third term corresponds to r=2 in the binomial theorem.",
    "explanation": "The third term is 4C2 (2x)^2 (3)^2 = 6 * 4x^2 * 9 = 216 x^2."
  },
  {
    "question": "Which of the following is the correct expansion of (1 - x)^5?",
    "options": ["1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5", "1 + 5x + 10x^2 + 10x^3 + 5x^4 + x^5", "1 - 5x - 10x^2 - 10x^3 - 5x^4 - x^5", "1 - 5x + 10x^2 + 10x^3 + 5x^4 + x^5"],
    "answer": 0,
    "hint": "The signs alternate starting with positive.",
    "explanation": "Using (1 - x)^5 = 5C0 - 5C1 x + 5C2 x^2 - 5C3 x^3 + 5C4 x^4 - 5C5 x^5 = 1 - 5x + 10x^2 - 10x^3 + 5x^4 - x^5."
  },
  {
    "question": "What is the coefficient of x^3 in the expansion of (1 + 2x)^4?",
    "options": ["8", "16", "24", "32"],
    "answer": 3,
    "hint": "The term with x^3 corresponds to r=3.",
    "explanation": "The term is 4C3 (1)^1 (2x)^3 = 4 * 8x^3 = 32x^3, so the coefficient is 32."
  },
  {
    "question": "Using the binomial theorem, what is (99)^5 approximately equal to?",
    "options": ["9509900499", "9039207968", "9509900499", "10000000000"],
    "answer": 1,
    "hint": "Express 99 as (100 - 1) and expand.",
    "explanation": "(99)^5 = (100 - 1)^5 = 100^5 - 5*100^4 + 10*100^3 - 10*100^2 + 5*100 - 1 = 9039207968."
  },
  {
    "question": "What is the sum of the coefficients in the expansion of (x + y)^n?",
    "options": ["n", "2^n", "n^2", "1"],
    "answer": 1,
    "hint": "Set x = 1 and y = 1 in the expansion.",
    "explanation": "The sum of coefficients is obtained by setting x=1 and y=1, giving (1+1)^n = 2^n."
  },
  {
    "question": "In the expansion of (a + b)^n, what is the power of b in the first term?",
    "options": ["1", "n", "0", "n-1"],
    "answer": 2,
    "hint": "Look at the pattern: the first term is a^n b^0.",
    "explanation": "In the first term, the power of b is 0, and it increases by 1 in each subsequent term."
  },
  {
    "question": "What is the value of nC0 + nC1 + nC2 + ... + nCn?",
    "options": ["n", "2^n", "n^2", "1"],
    "answer": 1,
    "hint": "This is the sum of all binomial coefficients for a given n.",
    "explanation": "The sum of all binomial coefficients for a given n is 2^n, as shown by setting x=1 in (1+x)^n."
  },
  {
    "question": "What is the middle term in the expansion of (x + 2)^4?",
    "options": ["24x^2", "24x^3", "96x^2", "96x^3"],
    "answer": 0,
    "hint": "For n=4, there are 5 terms, so the middle term is the third term (r=2).",
    "explanation": "The third term is 4C2 x^2 (2)^2 = 6 * x^2 * 4 = 24x^2."
  },
  {
    "question": "What is the coefficient of x^2 in the expansion of (1 - 3x)^3?",
    "options": ["-27", "27", "-9", "9"],
    "answer": 1,
    "hint": "The term with x^2 corresponds to r=2.",
    "explanation": "The term is 3C2 (1)^1 (-3x)^2 = 3 * 9x^2 = 27x^2, so the coefficient is 27."
  },
  {
    "question": "Using the binomial theorem, what is (1.01)^1000000 compared to 10000?",
    "options": ["Less than 10000", "Equal to 10000", "Greater than 10000", "Cannot be determined"],
    "answer": 2,
    "hint": "Expand (1 + 0.01)^1000000 and look at the first two terms.",
    "explanation": "(1.01)^1000000 = 1 + 1000000*0.01 + other positive terms = 1 + 10000 + ... > 10000."
  },
  {
    "question": "What is the last term in the expansion of (a + b)^n?",
    "options": ["a^n", "b^n", "a b^(n-1)", "a^(n-1) b"],
    "answer": 1,
    "hint": "The powers of b increase from 0 to n.",
    "explanation": "The last term is nCn b^n = b^n."
  },
  {
    "question": "What is the coefficient of a^2 b^3 in the expansion of (a + b)^5?",
    "options": ["5", "10", "15", "20"],
    "answer": 1,
    "hint": "The coefficient is 5C3 or 5C2.",
    "explanation": "The term a^2 b^3 corresponds to r=3, so the coefficient is 5C3 = 10."
  },
  {
    "question": "What is the expansion of (x + 1/x)^3?",
    "options": ["x^3 + 3x + 3/x + 1/x^3", "x^3 + 3x^2 + 3x + 1", "x^3 + 3x + 3/x^2 + 1/x^3", "x^3 + 3x^2 + 3/x + 1/x^3"],
    "answer": 0,
    "hint": "Use the binomial theorem with a=x and b=1/x.",
    "explanation": "(x + 1/x)^3 = 3C0 x^3 + 3C1 x^2 (1/x) + 3C2 x (1/x)^2 + 3C3 (1/x)^3 = x^3 + 3x + 3/x + 1/x^3."
  },
  {
    "question": "What is the value of nC0 - nC1 + nC2 - ... + (-1)^n nCn?",
    "options": ["2^n", "0", "1", "-1"],
    "answer": 1,
    "hint": "Set x=1 in the expansion of (1-x)^n.",
    "explanation": "Setting x=1 in (1-x)^n gives 0 = nC0 - nC1 + nC2 - ... + (-1)^n nCn."
  },
  {
    "question": "In the expansion of (2x - y)^4, what is the coefficient of x^2 y^2?",
    "options": ["24", "12", "6", "48"],
    "answer": 0,
    "hint": "The term with x^2 y^2 corresponds to r=2.",
    "explanation": "The term is 4C2 (2x)^2 (-y)^2 = 6 * 4x^2 * y^2 = 24x^2 y^2, so the coefficient is 24."
  },
  {
    "question": "What is the number of terms in the expansion of (x + 2y)^10?",
    "options": ["9", "10", "11", "12"],
    "answer": 2,
    "hint": "The number of terms is one more than the index.",
    "explanation": "For n=10, the number of terms is n+1 = 11."
  },
  {
    "question": "What is the second term in the expansion of (x - 3)^5?",
    "options": ["-15x^4", "15x^4", "-15x^3", "15x^3"],
    "answer": 0,
    "hint": "The second term corresponds to r=1.",
    "explanation": "The second term is 5C1 x^4 (-3)^1 = 5 * x^4 * (-3) = -15x^4."
  },
  {
    "question": "What is the value of (1 + 2)^4 using the binomial theorem?",
    "options": ["16", "27", "64", "81"],
    "answer": 3,
    "hint": "Compute (1+2)^4 = 3^4, or expand using binomial theorem.",
    "explanation": "(1+2)^4 = 3^4 = 81. Alternatively, expand: 1 + 4*2 + 6*4 + 4*8 + 16 = 1+8+24+32+16 = 81."
  },
  {
    "question": "What is the coefficient of x^4 in the expansion of (x^2 + 2)^3?",
    "options": ["6", "12", "8", "4"],
    "answer": 0,
    "hint": "The term with x^4 corresponds to r=1.",
    "explanation": "The term is 3C1 (x^2)^2 (2)^1 = 3 * x^4 * 2 = 6x^4, so the coefficient is 6."
  }
]
```
