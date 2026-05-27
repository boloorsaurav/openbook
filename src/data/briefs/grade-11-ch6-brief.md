---
chapter: 6
title: Permutations and Combinations
route: /read/grade-11/ch6
read_time: 45
---

## Sections

### 1: Introduction
eyebrow: Introduction

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Counting techniques are needed to determine the number of ways of arranging and selecting objects without listing them all.
- The fundamental principle of counting is the most basic tool for these techniques.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- None.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Why Count Without Listing?" | content: "Listing all possible arrangements is tedious for large numbers. Counting principles let us find the total without enumeration."

**Widget idea:** none

**Key terms:** counting techniques, fundamental principle of counting

---

### 2: Fundamental Principle of Counting
eyebrow: Section 6.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The multiplication principle states: If an event can occur in m different ways, and following which another event can occur in n different ways, then the total number of occurrences of the events in the given order is m times n.
- The multiplication principle can be generalized for any finite number of events. For three events: if an event can occur in m ways, following which another event can occur in n ways, following which a third event can occur in p ways, then the total number of occurrences in the given order is m times n times p.
- When counting, the events in a problem can occur in various possible orders, but we choose any one order and count the number of different ways of occurrence in that chosen order.
- When repetition of items is allowed, each vacant place can be filled in the same number of ways as the total number of available items.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 1: Found the number of 4-letter words from the letters of ROSE without repetition (24) and with repetition (256), demonstrating the multiplication principle with and without repetition.
- Example 2: Found the number of 2-flag signals from 4 different flags (12), showing how to fill two successive places.
- Example 3: Found the number of 2-digit even numbers from digits 1,2,3,4,5 with repetition allowed (10), illustrating starting from the constrained unit's place.
- Example 4: Found the number of signals using at least 2 flags from 5 different flags (320), by summing the counts for 2, 3, 4, and 5 flag signals separately.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "The Multiplication Principle" | content: "If one event can happen in m ways and another in n ways, the two events together can happen in m times n ways. This extends to any number of events."
- title: "Repetition vs. No Repetition" | content: "When repetition is allowed, each choice is independent and the number of options stays the same. When repetition is not allowed, the number of options decreases by one after each selection."

**Widget idea:** An interactive "lock" with 4 wheels, each with digits 0-9. Let users toggle "repetition allowed" and see the total number of possible sequences update dynamically.

**Key terms:** multiplication principle, fundamental principle of counting, event, repetition

---

### 3: Permutations
eyebrow: Section 6.3

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- A permutation is an arrangement in a definite order of a number of objects taken some or all at a time.
- The number of permutations of n different objects taken r at a time, where 0 is less than r and r is less than or equal to n, and the objects do not repeat, is n times (n minus 1) times (n minus 2) ... up to (n minus r plus 1). This is denoted as nPr.
- The factorial notation n! represents the product of the first n natural numbers: 1 times 2 times 3 times ... times n.
- 0! is defined as 1.
- For a natural number n, n! equals n times (n minus 1)!.
- The formula for nPr can be written as n! divided by (n minus r)!, where 0 is less than or equal to r and r is less than or equal to n.
- The number of permutations of n different objects taken r at a time, where repetition is allowed, is n raised to the power r.
- The number of permutations of n objects, where p objects are of the same kind and the rest are all different, is n! divided by p!.
- The number of permutations of n objects, where p1 objects are of one kind, p2 are of a second kind, ..., pk are of the kth kind, and the rest, if any, are of different kinds, is n! divided by (p1! times p2! times ... times pk!).

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 5: Evaluated 5! (120), 7! (5040), and 7! minus 5! (4920), demonstrating factorial calculation.
- Example 6: Computed 7! divided by 5! (42) and 12! divided by (10! times 2!) (66), showing simplification of factorial ratios.
- Example 7: Evaluated n! divided by (r! times (n minus r)!) for n=5, r=2, getting 10.
- Example 8: Solved for x in the equation 1/8! + 1/9! = x/10!, finding x = 100.
- Example 9: Found the number of permutations of the letters of ALLAHABAD (7560), applying the formula for objects with repetitions.
- Example 10: Found the number of 4-digit numbers from digits 1 to 9 without repetition (3024), using 9P4.
- Example 11: Found the number of 3-digit numbers between 100 and 1000 from digits 0-5 without repetition (100), by subtracting numbers starting with 0 from 6P3.
- Example 12: Solved for n in nP5 = 42 times nP3 (n=10) and nP4 divided by (n-1)P4 = 5/3 (n=10), demonstrating algebraic manipulation of permutation equations.
- Example 13: Found r if 5 times 4Pr equals 6 times 5P(r-1), getting r = 8 or 3.
- Example 14: Found the number of 8-letter arrangements from DAUGHTER with all vowels together (4320) and with vowels not together (36000), using the "treat as one object" technique.
- Example 15: Found the number of arrangements of 4 red, 3 yellow, and 2 green discs in a row (1260), applying the formula for permutations of objects with multiple repetitions.
- Example 16: Found the number of arrangements of the letters of INDEPENDENCE (1663200), and then for words starting with P (138600), with all vowels together (16800), with vowels never together (1646400), and beginning with I and ending with P (12600).

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "What is a Permutation?" | content: "A permutation is an ordered arrangement. Changing the order creates a different permutation. Order matters."
- title: "Factorial Notation" | content: "n! is the product of all natural numbers from 1 to n. It is a shorthand for the product used in permutation formulas."
- title: "Permutations with Identical Objects" | content: "When objects are identical, the number of distinct permutations is reduced. Divide the total permutations (n!) by the factorial of the count of each identical type."

**Widget idea:** An interactive word re-arranger. Input a word (e.g., "ROOT" or "ALLAHABAD") and see all distinct permutations generated and counted.

**Key terms:** permutation, factorial, nPr, n!, repetition, identical objects

---

### 4: Combinations
eyebrow: Section 6.4

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- A combination is a selection of objects where order is not important.
- The number of combinations of n different objects taken r at a time is denoted by nCr.
- The relationship between permutations and combinations is: nPr equals nCr times r!.
- The formula for nCr is n! divided by (r! times (n minus r)!), where 0 is less than or equal to r and r is less than or equal to n.
- nC0 is defined as 1.
- nCn is equal to 1.
- nC(n minus r) is equal to nCr. Selecting r objects is the same as rejecting (n minus r) objects.
- If nCa equals nCb, then either a equals b or a plus b equals n.
- Theorem: nCr plus nC(r minus 1) equals (n+1)Cr.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 17: Found nC17 given nC9 = nC8, determining n = 17 and thus the value is 1.
- Example 18: Found the number of ways to form a 3-person committee from 2 men and 3 women (10), and the number with 1 man and 2 women (6).
- Example 19: Found the number of ways to choose 4 cards from a deck of 52 (270725), and then for specific conditions: four of the same suit (2860), four from different suits (13^4), four face cards (495), two red and two black (105625), and four of the same colour (29900).

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "What is a Combination?" | content: "A combination is a selection where order does not matter. The team {X, Y} is the same as the team {Y, X}."
- title: "The Key Relationship" | content: "For every combination of r objects, there are r! permutations. So, nPr = nCr * r!. This gives us the formula for nCr."
- title: "Combinations are Symmetric" | content: "Choosing r objects to take is the same as choosing (n minus r) objects to leave behind. So, nCr = nC(n minus r)."

**Widget idea:** An interactive "committee selector". Given a pool of people (e.g., 2 men, 3 women), let users select a committee size and see the number of possible committees, and filter by conditions (e.g., at least 1 woman).

**Key terms:** combination, nCr, selection, order not important

---

### 5: Miscellaneous Examples
eyebrow: Miscellaneous Examples

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Problems often require a combination of selection (combinations) and arrangement (permutations).
- When a problem states "at least" or "at most", it is often solved by summing the counts for each possible case.
- When arranging objects with a condition like "no two boys are together", first arrange the unrestricted group, then place the restricted group in the gaps.
- When forming numbers from a given set of digits with repetitions, the number of times each digit can be used is as given in the list.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 20: Found the number of words with 3 vowels and 2 consonants from INVOLUTE (2880), by first selecting the letters and then arranging them.
- Example 21: Found the number of 5-member teams from 4 girls and 7 boys with no girl (21), at least one boy and one girl (441), and at least 3 girls (91).
- Example 22: Found the number of words from AGAIN (60) and then determined the 50th word in a dictionary listing (NAAIG).
- Example 23: Found the number of 7-digit numbers greater than 1000000 from digits 1,2,0,2,4,2,4 (360), by considering numbers starting with 1, 2, or 4.
- Example 24: Found the number of ways to seat 5 girls and 3 boys in a row so that no two boys are together (14400), by seating girls first and then placing boys in the gaps.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Selection then Arrangement" | content: "Many problems require first selecting a group (combinations) and then arranging the selected items (permutations). Multiply the two counts."
- title: "The 'Gap' Method" | content: "To ensure no two items from a restricted group are together, first arrange the unrestricted items, then place the restricted items in the gaps between them."

**Widget idea:** An interactive "dictionary word finder". Input a word (e.g., "AGAIN") and see the list of all permutations sorted alphabetically, with the ability to jump to a specific rank (e.g., 50th word).

**Key terms:** selection and arrangement, at least, at most, gap method, dictionary order

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "A restaurant offers 3 types of soup, 5 main courses, and 2 desserts. How many different three-course meals (one soup, one main, one dessert) can a customer order?",
    "options": ["10", "15", "30", "32"],
    "answer": 2,
    "hint": "Apply the multiplication principle for three events.",
    "explanation": "The number of ways is 3 × 5 × 2 = 30."
  },
  {
    "question": "How many 3-letter words (with or without meaning) can be formed from the letters of the word 'APPLE' if repetition of letters is NOT allowed?",
    "options": ["60", "125", "15", "10"],
    "answer": 0,
    "hint": "This is a permutation of 5 distinct objects taken 3 at a time.",
    "explanation": "The number is 5P3 = 5 × 4 × 3 = 60."
  },
  {
    "question": "What is the value of 0! ?",
    "options": ["0", "1", "Undefined", "Infinity"],
    "answer": 1,
    "hint": "This is a standard definition in factorial notation.",
    "explanation": "By definition, 0! = 1."
  },
  {
    "question": "How many different signals can be made by hoisting 4 flags of different colours one above the other on a vertical staff?",
    "options": ["4", "16", "24", "256"],
    "answer": 2,
    "hint": "This is the number of permutations of 4 distinct objects taken all at a time.",
    "explanation": "The number is 4P4 = 4! = 24."
  },
  {
    "question": "In how many ways can the letters of the word 'BANANA' be arranged?",
    "options": ["720", "60", "120", "30"],
    "answer": 1,
    "hint": "There are 6 letters, with 3 A's and 2 N's.",
    "explanation": "The number is 6! / (3! × 2!) = 720 / (6 × 2) = 60."
  },
  {
    "question": "How many 2-digit numbers can be formed from the digits 1, 2, 3, 4, 5 if repetition is allowed?",
    "options": ["20", "25", "10", "5"],
    "answer": 1,
    "hint": "Each of the two places can be filled in 5 ways.",
    "explanation": "The number is 5 × 5 = 25."
  },
  {
    "question": "If nP3 = 60, what is the value of n?",
    "options": ["3", "4", "5", "6"],
    "answer": 2,
    "hint": "nP3 = n × (n-1) × (n-2). Find n such that this product equals 60.",
    "explanation": "5 × 4 × 3 = 60, so n = 5."
  },
  {
    "question": "How many 3-digit numbers can be formed from the digits 0, 1, 2, 3, 4, 5 without repetition?",
    "options": ["120", "100", "60", "80"],
    "answer": 1,
    "hint": "The hundreds place cannot be 0. First fix the hundreds place, then fill the tens and units.",
    "explanation": "Hundreds place: 5 choices (1-5). Then 5P2 ways for the remaining two places. Total = 5 × 5 × 4 = 100."
  },
  {
    "question": "Which of the following is equal to nCr?",
    "options": ["n! / r!", "n! / (n-r)!", "n! / (r! × (n-r)!)", "r! × nPr"],
    "answer": 2,
    "hint": "Recall the relationship between permutations and combinations.",
    "explanation": "The formula for nCr is n! / (r! × (n-r)!)."
  },
  {
    "question": "If 5C3 = 5Cx, what is the value of x?",
    "options": ["2", "3", "5", "8"],
    "answer": 0,
    "hint": "Use the property nCa = nCb implies a = b or a + b = n.",
    "explanation": "Since 5C3 = 5Cx, either x = 3 or x = 5-3 = 2. The distinct value is 2."
  },
  {
    "question": "A committee of 2 is to be formed from 4 boys and 3 girls. How many committees can be formed if the committee must have at least one girl?",
    "options": ["15", "21", "12", "18"],
    "answer": 0,
    "hint": "Find the total number of committees and subtract those with no girls.",
    "explanation": "Total committees = 7C2 = 21. Committees with no girls (only boys) = 4C2 = 6. Required = 21 - 6 = 15."
  },
  {
    "question": "How many ways can 5 different books be arranged on a shelf?",
    "options": ["25", "120", "5", "15"],
    "answer": 1,
    "hint": "This is the number of permutations of 5 distinct objects taken all at a time.",
    "explanation": "The number is 5! = 120."
  },
  {
    "question": "How many 4-digit numbers can be formed from the digits 1, 2, 3, 4, 5, 6 without repetition that are divisible by 5?",
    "options": ["60", "120", "24", "360"],
    "answer": 0,
    "hint": "A number is divisible by 5 if its last digit is 0 or 5. Here, only 5 is available.",
    "explanation": "Fix the last digit as 5. Then arrange the remaining 5 digits in the first 3 places: 5P3 = 5 × 4 × 3 = 60."
  },
  {
    "question": "In how many ways can 5 people be seated in a row if two particular people must always sit together?",
    "options": ["48", "24", "120", "96"],
    "answer": 0,
    "hint": "Treat the two people as a single unit. Then arrange the 4 units, and finally arrange the two people within their unit.",
    "explanation": "Treat the pair as one object: 4! = 24 arrangements. The pair can be arranged in 2! = 2 ways. Total = 24 × 2 = 48."
  },
  {
    "question": "What is the value of 7C0?",
    "options": ["0", "1", "7", "7!"],
    "answer": 1,
    "hint": "This is a standard definition.",
    "explanation": "nC0 = 1 for any n."
  },
  {
    "question": "How many chords can be drawn through 10 points on a circle?",
    "options": ["90", "45", "10", "100"],
    "answer": 1,
    "hint": "A chord is defined by any two points. Order does not matter.",
    "explanation": "The number is 10C2 = 45."
  },
  {
    "question": "If nC2 = 15, what is the value of n?",
    "options": ["5", "6", "7", "8"],
    "answer": 1,
    "hint": "nC2 = n × (n-1) / 2. Solve for n.",
    "explanation": "n(n-1)/2 = 15 => n(n-1) = 30 => n = 6."
  },
  {
    "question": "How many 3-letter words (with or without meaning) can be formed from the letters of the word 'NUMBER' if repetition is allowed?",
    "options": ["120", "216", "20", "18"],
    "answer": 1,
    "hint": "Each of the 3 places can be filled by any of the 6 letters.",
    "explanation": "The number is 6^3 = 216."
  },
  {
    "question": "In how many ways can 4 boys and 4 girls be seated in a row so that boys and girls sit alternately?",
    "options": ["1152", "576", "288", "40320"],
    "answer": 0,
    "hint": "There are two patterns: BGBGBGBG or GBGBGBGB. Arrange boys and girls separately.",
    "explanation": "Two patterns. For each, arrange 4 boys in 4! ways and 4 girls in 4! ways. Total = 2 × 4! × 4! = 2 × 24 × 24 = 1152."
  },
  {
    "question": "How many 5-digit numbers can be formed from the digits 0, 1, 2, 3, 4, 5, 6 without repetition that are greater than 50000?",
    "options": ["720", "1440", "2160", "4320"],
    "answer": 1,
    "hint": "The first digit must be 5 or 6.",
    "explanation": "First digit: 2 choices (5 or 6). Remaining 4 digits from the other 6: 6P4 = 360. Total = 2 × 360 = 720."
  },
  {
    "question": "If 12Pr = 132, what is the value of r?",
    "options": ["1", "2", "3", "11"],
    "answer": 1,
    "hint": "12P1 = 12, 12P2 = 12 × 11 = 132.",
    "explanation": "12P2 = 12 × 11 = 132, so r = 2."
  },
  {
    "question": "How many ways can the letters of the word 'MISSISSIPPI' be arranged?",
    "options": ["34650", "34650", "11550", "69300"],
    "answer": 0,
    "hint": "There are 11 letters: M=1, I=4, S=4, P=2.",
    "explanation": "The number is 11! / (4! × 4! × 2!) = 39916800 / (24 × 24 × 2) = 34650."
  },
  {
    "question": "A bag contains 5 red and 4 black balls. In how many ways can 3 balls be drawn so that at least 2 are black?",
    "options": ["34", "40", "24", "10"],
    "answer": 0,
    "hint": "Consider two cases: exactly 2 black and 1 red, or exactly 3 black.",
    "explanation": "Case 1 (2 black, 1 red): 4C2 × 5C1 = 6 × 5 = 30. Case 2 (3 black): 4C3 = 4. Total = 30 + 4 = 34."
  },
  {
    "question": "How many 4-digit numbers can be formed from the digits 0, 1, 2, 3, 4, 5 if repetition is allowed and the number is even?",
    "options": ["648", "324", "540", "1080"],
    "answer": 0,
    "hint": "The last digit must be even (0,2,4). The first digit cannot be 0. Consider cases based on the last digit.",
    "explanation": "If last digit is 0: first digit has 5 choices, middle two have 6 each = 5×6×6 = 180. If last digit is 2 or 4: first digit has 4 choices (not 0 and not the last digit), middle two have 6 each = 2 × 4 × 6 × 6 = 288. Total = 180 + 288 = 468."
  },
  {
    "question": "In how many ways can 5 men and 3 women be seated in a row so that no two women are together?",
    "options": ["14400", "7200", "2880", "40320"],
    "answer": 0,
    "hint": "First arrange the men, then place the women in the gaps between them.",
    "explanation": "Arrange 5 men: 5! = 120. There are 6 gaps (including ends). Choose 3 gaps for women: 6P3 = 120. Total = 120 × 120 = 14400."
  }
]
```
