---
chapter: 2
title: Relations and Functions
route: /read/grade-11/ch2
read_time: 35
---

## Sections

### 1: Introduction
eyebrow: Introduction

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Mathematics often involves finding patterns and links between quantities that change.
- In daily life, relations such as brother-sister or father-son involve pairs of objects in a certain order.
- In mathematics, relations like "number m is less than number n" or "line l is parallel to line m" also involve ordered pairs.
- This chapter introduces how to link pairs of objects from two sets, define relations between them, and then study special relations called functions.
- A function captures a mathematically precise correspondence between one quantity and another.

**Worked examples:**
- None.

**Callout cards:**
- title: "What is a Relation?" | content: "A relation links pairs of objects from two sets in a specific order, like 'brother and sister' or 'number m is less than number n'."

**Widget idea:** none

**Key terms:** relation, function

---

### 2: Cartesian Products of Sets
eyebrow: Section 2.1

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- An ordered pair is a pair of elements written in small brackets and grouped together in a particular order, for example (p, q) where p belongs to set P and q belongs to set Q.
- Given two non-empty sets P and Q, the Cartesian product P times Q is the set of all ordered pairs (p, q) such that p is in P and q is in Q.
- If either P or Q is the empty set, then the Cartesian product P times Q is also the empty set.
- Two ordered pairs are equal if and only if their corresponding first elements are equal and their second elements are also equal.
- If set A has p elements and set B has q elements, then the Cartesian product A times B has p times q elements.
- If A and B are non-empty sets and either A or B is an infinite set, then the Cartesian product A times B is also infinite.
- The Cartesian product A times A times A is the set of all ordered triplets (a, b, c) where a, b, and c are in A.
- In general, A times B is not equal to B times A, because the order of elements in the ordered pairs matters.
- The number of elements in A times B and B times A is the same even though the sets themselves are different.

**Worked examples:**
- Example 1: Solved for x and y given that (x + 1, y – 2) equals (3, 1), demonstrating equality of ordered pairs.
- Example 2: Formed P times Q and Q times P for P = {a, b, c} and Q = {r}, showing the two products are not equal.
- Example 3: Computed A times (B intersect C), (A times B) intersect (A times C), A times (B union C), and (A times B) union (A times C) for A = {1,2,3}, B = {3,4}, C = {4,5,6}, demonstrating distributive properties.
- Example 4: Formed the set P times P times P for P = {1, 2}, listing all 8 ordered triplets.
- Example 5: Explained that R times R represents all points in two-dimensional space, and R times R times R represents all points in three-dimensional space.
- Example 6: Given A times B = {(p, q), (p, r), (m, q), (m, r)}, found A = {p, m} and B = {q, r}.

**Callout cards:**
- title: "Cartesian Product Definition" | content: "The Cartesian product P × Q is the set of all ordered pairs (p, q) where p is in P and q is in Q."
- title: "Size of a Cartesian Product" | content: "If set A has p elements and set B has q elements, then A × B has p × q elements."

**Widget idea:** An interactive grid where users select elements from two sets and see the resulting ordered pairs displayed as a grid or list.

**Key terms:** ordered pair, Cartesian product, ordered triplet

---

### 3: Relations
eyebrow: Section 2.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- A relation R from a non-empty set A to a non-empty set B is a subset of the Cartesian product A times B.
- The subset is derived by describing a relationship between the first element and the second element of the ordered pairs in A times B.
- The second element of an ordered pair in a relation is called the image of the first element.
- The set of all first elements of the ordered pairs in a relation R is called the domain of the relation R.
- The set of all second elements in a relation R is called the range of the relation R.
- The whole set B is called the codomain of the relation R.
- The range is always a subset of the codomain.
- A relation may be represented algebraically by the Roster method or by the Set-builder method.
- An arrow diagram is a visual representation of a relation.
- The total number of relations that can be defined from a set A to a set B is the number of possible subsets of A times B.
- If n(A) = p and n(B) = q, then n(A × B) = pq and the total number of relations is 2 raised to the power pq.
- A relation R from A to A is also called a relation on A.

**Worked examples:**
- Example 7: Defined R = {(x, y): y = x + 1} from A = {1,2,3,4,5,6} to itself, depicted it with an arrow diagram, and listed domain = {1,2,3,4,5}, range = {2,3,4,5,6}, codomain = {1,2,3,4,5,6}.
- Example 8: From an arrow diagram, wrote the relation "x is the square of y" in set-builder and roster form, and found domain = {4, 9, 25}, range = {–2, 2, –3, 3, –5, 5}.
- Example 9: For A = {1,2} and B = {3,4}, found the number of relations from A to B is 2 raised to the power 4, which equals 16.

**Callout cards:**
- title: "Relation Definition" | content: "A relation R from set A to set B is a subset of A × B, describing a relationship between the first and second elements of ordered pairs."
- title: "Domain, Range, Codomain" | content: "Domain is the set of all first elements. Range is the set of all second elements. Codomain is the entire set B. Range is always a subset of codomain."

**Widget idea:** An interactive arrow diagram where users can define a relation by clicking pairs, and the domain, range, and codomain are automatically displayed.

**Key terms:** relation, domain, range, codomain, arrow diagram, image

---

### 4: Functions
eyebrow: Section 2.3

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- A function is a special type of relation.
- A relation f from a set A to a set B is a function if every element of set A has one and only one image in set B.
- In other words, a function f is a relation from a non-empty set A to a non-empty set B such that the domain of f is A and no two distinct ordered pairs in f have the same first element.
- If f is a function from A to B and (a, b) is in f, then f(a) = b, where b is called the image of a under f and a is called the preimage of b under f.
- The function f from A to B is denoted by f: A → B.
- A relation is not a function if an element in the domain has no image, or if an element in the domain is connected to more than one image.
- A function which has either R or one of its subsets as its range is called a real valued function.
- If the domain of a real valued function is also either R or a subset of R, it is called a real function.

**Worked examples:**
- Example 10: For R = {(x, y): y = 2x, x, y in N}, determined domain = N, codomain = N, range = even natural numbers, and concluded it is a function because every natural number has one and only one image.
- Example 11: Examined three relations: (i) R = {(2,1),(3,1),(4,2)} is a function because each first element has a unique image; (ii) R = {(2,2),(2,4),(3,3),(4,4)} is not a function because first element 2 has two images; (iii) R = {(1,2),(2,3),(3,4),(4,5),(5,6),(6,7)} is a function.
- Example 12: Completed a table for f(x) = 2x + 1 for x = 1 to 7, showing f(1)=3, f(2)=5, f(3)=7, f(4)=9, f(5)=11, f(6)=13, f(7)=15.

**Callout cards:**
- title: "Function Definition" | content: "A function is a relation where every element of the domain has exactly one image in the codomain. No element in the domain can be left out or have more than one image."

**Widget idea:** An interactive activity where users drag arrows from domain elements to codomain elements to form relations, and the system checks if the relation is a function.

**Key terms:** function, image, preimage, real valued function, real function

---

### 5: Some Functions and Their Graphs
eyebrow: Section 2.4

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The identity function f: R → R is defined by f(x) = x for each x in R. Its domain and range are both R. Its graph is a straight line passing through the origin.
- The constant function f: R → R is defined by f(x) = c, where c is a constant. Its domain is R and its range is the singleton set {c}. Its graph is a line parallel to the x-axis.
- A polynomial function f: R → R is defined by f(x) = a0 + a1x + a2x squared + ... + an x to the power n, where n is a non-negative integer and all coefficients are real numbers.
- The function f(x) = x squared is a polynomial function. Its domain is R and its range is the set of non-negative real numbers. Its graph is a parabola opening upward.
- The function f(x) = x cubed is a polynomial function. Its domain and range are both R. Its graph passes through the origin and is symmetric about the origin.
- Rational functions are functions of the form f(x)/g(x), where f(x) and g(x) are polynomial functions and g(x) is not zero.
- The function f(x) = 1/x is a rational function. Its domain is all real numbers except 0, and its range is also all real numbers except 0. Its graph is a hyperbola.
- The modulus function f: R → R is defined by f(x) = |x|. For x greater than or equal to 0, f(x) = x. For x less than 0, f(x) = -x. Its graph is V-shaped.
- The signum function f: R → R is defined by f(x) = 1 if x > 0, f(x) = 0 if x = 0, and f(x) = -1 if x < 0. Its domain is R and its range is the set {-1, 0, 1}.
- The greatest integer function f: R → R is defined by f(x) = [x], where [x] is the greatest integer less than or equal to x. For example, [x] = -1 for -1 ≤ x < 0, [x] = 0 for 0 ≤ x < 1, [x] = 1 for 1 ≤ x < 2, and so on. Its graph is a step function.

**Worked examples:**
- Example 13: Completed a table for f(x) = x squared for x from -4 to 4, and stated domain = R, range = set of non-negative real numbers.
- Example 14: Drew the graph of f(x) = x cubed, listing values like f(0)=0, f(1)=1, f(-1)=-1, f(2)=8, f(-2)=-8.
- Example 15: Completed a table for f(x) = 1/x for various x values, and stated domain and range are both all real numbers except 0.

**Callout cards:**
- title: "Modulus Function" | content: "The modulus function f(x) = |x| gives the non-negative value of x. It is defined as f(x) = x for x ≥ 0 and f(x) = -x for x < 0."
- title: "Greatest Integer Function" | content: "The greatest integer function f(x) = [x] returns the largest integer less than or equal to x. Its graph is a step function."

**Widget idea:** An interactive graphing tool where users can select different function types (identity, constant, polynomial, rational, modulus, signum, greatest integer) and see the graph plotted dynamically.

**Key terms:** identity function, constant function, polynomial function, rational function, modulus function, signum function, greatest integer function

---

### 6: Algebra of Real Functions
eyebrow: Section 2.5

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Two real functions can be added: (f + g)(x) = f(x) + g(x) for all x in the common domain X.
- One real function can be subtracted from another: (f – g)(x) = f(x) – g(x) for all x in X.
- A real function can be multiplied by a scalar (a real number): (αf)(x) = α f(x) for all x in X.
- Two real functions can be multiplied pointwise: (fg)(x) = f(x) g(x) for all x in X.
- One real function can be divided by another: (f/g)(x) = f(x) / g(x) for all x in X, provided g(x) is not zero.

**Worked examples:**
- Example 16: For f(x) = x squared and g(x) = 2x + 1, computed (f+g)(x) = x squared + 2x + 1, (f-g)(x) = x squared – 2x – 1, (fg)(x) = 2x cubed + x squared, and (f/g)(x) = x squared / (2x + 1), with x not equal to -1/2.
- Example 17: For f(x) = square root of x and g(x) = x over non-negative reals, computed (f+g)(x) = square root of x + x, (f-g)(x) = square root of x – x, (fg)(x) = x to the power 3/2, and (f/g)(x) = 1 / square root of x, with x not equal to 0.

**Callout cards:**
- title: "Operations on Functions" | content: "Real functions can be added, subtracted, multiplied by a scalar, multiplied pointwise, and divided (where denominator is non-zero)."

**Widget idea:** An interactive calculator where users input two function definitions and see the resulting sum, difference, product, and quotient functions displayed symbolically.

**Key terms:** addition of functions, subtraction of functions, multiplication by scalar, multiplication of functions, quotient of functions

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "If (x + 2, y – 1) = (5, 3), what are the values of x and y?",
    "options": ["x = 3, y = 4", "x = 5, y = 3", "x = 2, y = 1", "x = 7, y = 2"],
    "answer": 0,
    "hint": "Two ordered pairs are equal when their corresponding first and second elements are equal.",
    "explanation": "Equating first elements: x + 2 = 5 gives x = 3. Equating second elements: y – 1 = 3 gives y = 4."
  },
  {
    "question": "If set A has 4 elements and set B has 5 elements, how many elements are in A × B?",
    "options": ["9", "20", "4", "5"],
    "answer": 1,
    "hint": "The number of elements in a Cartesian product is the product of the sizes of the two sets.",
    "explanation": "n(A × B) = n(A) × n(B) = 4 × 5 = 20."
  },
  {
    "question": "If A = {a, b} and B = {1, 2}, which of the following is an element of A × B?",
    "options": ["(1, a)", "(a, 1)", "{a, 1}", "a1"],
    "answer": 1,
    "hint": "In A × B, the first element comes from A and the second from B.",
    "explanation": "A × B contains ordered pairs where the first element is from A and the second from B. So (a, 1) is correct."
  },
  {
    "question": "If A = {x, y} and B = {3, 4}, what is the number of elements in B × A?",
    "options": ["2", "4", "8", "16"],
    "answer": 1,
    "hint": "The number of elements in a Cartesian product depends only on the sizes of the sets, not the order.",
    "explanation": "n(B × A) = n(B) × n(A) = 2 × 2 = 4."
  },
  {
    "question": "If A × B = {(p, r), (p, s), (q, r), (q, s)}, what are sets A and B?",
    "options": ["A = {p, q}, B = {r, s}", "A = {r, s}, B = {p, q}", "A = {p, r}, B = {q, s}", "A = {p, q, r, s}, B = {p, q, r, s}"],
    "answer": 0,
    "hint": "The first elements of all ordered pairs form set A, and the second elements form set B.",
    "explanation": "First elements are p and q, so A = {p, q}. Second elements are r and s, so B = {r, s}."
  },
  {
    "question": "What is the domain of the relation R = {(2, 5), (3, 7), (4, 9)}?",
    "options": ["{5, 7, 9}", "{2, 3, 4}", "{2, 3, 4, 5, 7, 9}", "{2, 5}"],
    "answer": 1,
    "hint": "The domain is the set of all first elements of the ordered pairs in the relation.",
    "explanation": "The first elements are 2, 3, and 4, so the domain is {2, 3, 4}."
  },
  {
    "question": "If a relation R from A to B has domain = {1, 2} and range = {a, b}, what is the minimum number of ordered pairs in R?",
    "options": ["2", "4", "1", "3"],
    "answer": 0,
    "hint": "Each element in the domain must appear as a first element in at least one ordered pair.",
    "explanation": "The domain has 2 elements, so there must be at least 2 ordered pairs to cover them."
  },
  {
    "question": "If n(A) = 2 and n(B) = 3, how many relations can be defined from A to B?",
    "options": ["6", "12", "64", "32"],
    "answer": 2,
    "hint": "The number of relations is the number of subsets of A × B.",
    "explanation": "n(A × B) = 2 × 3 = 6. Number of relations = 2^6 = 64."
  },
  {
    "question": "Which of the following relations is a function?",
    "options": ["{(1, 2), (1, 3), (2, 4)}", "{(1, 2), (2, 3), (3, 4)}", "{(1, 2), (2, 2), (2, 3)}", "{(1, 1), (2, 2), (1, 3)}"],
    "answer": 1,
    "hint": "In a function, no first element can appear more than once.",
    "explanation": "In option B, each first element (1, 2, 3) appears exactly once, so it is a function."
  },
  {
    "question": "If f(x) = 3x – 2, what is f(4)?",
    "options": ["10", "12", "14", "6"],
    "answer": 0,
    "hint": "Substitute x = 4 into the expression for f(x).",
    "explanation": "f(4) = 3(4) – 2 = 12 – 2 = 10."
  },
  {
    "question": "What is the range of the identity function f(x) = x?",
    "options": ["{0}", "All real numbers", "All positive real numbers", "All integers"],
    "answer": 1,
    "hint": "The identity function outputs the same value as its input.",
    "explanation": "Since f(x) = x can produce any real number, the range is all real numbers."
  },
  {
    "question": "What is the range of the constant function f(x) = 5?",
    "options": ["All real numbers", "{5}", "{0, 5}", "All integers"],
    "answer": 1,
    "hint": "A constant function always outputs the same value.",
    "explanation": "f(x) = 5 for every x, so the range is just the single value 5."
  },
  {
    "question": "What is the domain of the rational function f(x) = 1/(x – 3)?",
    "options": ["All real numbers", "All real numbers except 3", "All real numbers except 0", "All real numbers greater than 3"],
    "answer": 1,
    "hint": "The denominator cannot be zero.",
    "explanation": "The function is undefined when x – 3 = 0, i.e., x = 3. So domain is all real numbers except 3."
  },
  {
    "question": "What is the value of the modulus function f(x) = |x| at x = –5?",
    "options": ["–5", "5", "0", "–1"],
    "answer": 1,
    "hint": "The modulus function returns the non-negative value of x.",
    "explanation": "|–5| = 5."
  },
  {
    "question": "What is the value of the signum function at x = 0?",
    "options": ["1", "–1", "0", "Undefined"],
    "answer": 2,
    "hint": "The signum function has a specific definition for x = 0.",
    "explanation": "By definition, signum(0) = 0."
  },
  {
    "question": "What is the value of the greatest integer function [x] at x = 2.7?",
    "options": ["2", "3", "2.7", "0"],
    "answer": 0,
    "hint": "The greatest integer function returns the largest integer less than or equal to x.",
    "explanation": "The largest integer less than or equal to 2.7 is 2."
  },
  {
    "question": "If f(x) = x squared and g(x) = x + 1, what is (f + g)(2)?",
    "options": ["5", "7", "9", "3"],
    "answer": 1,
    "hint": "First find f(2) and g(2), then add them.",
    "explanation": "f(2) = 4, g(2) = 3, so (f + g)(2) = 4 + 3 = 7."
  },
  {
    "question": "If f(x) = 2x and g(x) = x – 1, what is (fg)(3)?",
    "options": ["6", "12", "18", "9"],
    "answer": 1,
    "hint": "Multiply the values of f(3) and g(3).",
    "explanation": "f(3) = 6, g(3) = 2, so (fg)(3) = 6 × 2 = 12."
  },
  {
    "question": "If f(x) = x + 2 and g(x) = x – 1, what is (f/g)(2)?",
    "options": ["4", "3", "2", "1"],
    "answer": 0,
    "hint": "Divide f(2) by g(2), making sure g(2) is not zero.",
    "explanation": "f(2) = 4, g(2) = 1, so (f/g)(2) = 4/1 = 4."
  },
  {
    "question": "If f(x) = x squared, what is (3f)(x)?",
    "options": ["3x squared", "x squared + 3", "3x", "x squared/3"],
    "answer": 0,
    "hint": "Multiplying a function by a scalar multiplies its output by that scalar.",
    "explanation": "(3f)(x) = 3 × f(x) = 3x squared."
  },
  {
    "question": "What is the range of the function f(x) = x squared?",
    "options": ["All real numbers", "All non-negative real numbers", "All positive real numbers", "All integers"],
    "answer": 1,
    "hint": "The square of any real number is never negative.",
    "explanation": "x squared is always greater than or equal to 0, so the range is all non-negative real numbers."
  },
  {
    "question": "What is the domain of the function f(x) = square root of (x – 2)?",
    "options": ["All real numbers", "x ≥ 2", "x > 2", "x ≤ 2"],
    "answer": 1,
    "hint": "The expression under a square root must be non-negative.",
    "explanation": "x – 2 ≥ 0 implies x ≥ 2."
  },
  {
    "question": "Which of the following is NOT a polynomial function?",
    "options": ["f(x) = x squared + 2x + 1", "f(x) = x to the power 3", "f(x) = 1/x", "f(x) = 5"],
    "answer": 2,
    "hint": "Polynomial functions have only non-negative integer exponents.",
    "explanation": "1/x = x to the power –1, which has a negative exponent, so it is not a polynomial."
  },
  {
    "question": "What is the value of the greatest integer function [x] at x = –1.3?",
    "options": ["–1", "–2", "0", "1"],
    "answer": 1,
    "hint": "The greatest integer less than or equal to a negative number is the next smaller integer.",
    "explanation": "The largest integer less than or equal to –1.3 is –2."
  },
  {
    "question": "If f(x) = 2x + 1 and g(x) = x – 3, what is (f – g)(5)?",
    "options": ["9", "7", "11", "5"],
    "answer": 0,
    "hint": "Subtract g(5) from f(5).",
    "explanation": "f(5) = 11, g(5) = 2, so (f – g)(5) = 11 – 2 = 9."
  }
]
```
