---
chapter: 14
title: Probability
route: /read/grade-11/ch14
read_time: 40
---

## Sections

### 1: Event
eyebrow: Section 14.1

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Any subset E of a sample space S is called an event.
- An event E of a sample space S is said to have occurred if the outcome ω of the experiment is such that ω ∈ E. If ω ∉ E, the event has not occurred.
- The empty set φ is called an impossible event.
- The whole sample space S is called the sure event.
- If an event E has only one sample point of a sample space, it is called a simple (or elementary) event.
- In a sample space containing n distinct elements, there are exactly n simple events.
- If an event has more than one sample point, it is called a compound event.
- For every event A, there corresponds another event A′ called the complementary event to A, also called the event ‘not A’. A′ = {ω : ω ∈ S and ω ∉ A} = S – A.
- The event ‘A or B’ is A ∪ B = {ω : ω ∈ A or ω ∈ B}.
- The event ‘A and B’ is A ∩ B = {ω : ω ∈ A and ω ∈ B}.
- The event ‘A but not B’ is A – B = A ∩ B′.
- Two events A and B are called mutually exclusive events if the occurrence of any one of them excludes the occurrence of the other event, i.e., if they cannot occur simultaneously. In this case, the sets A and B are disjoint (A ∩ B = φ).
- Simple events of a sample space are always mutually exclusive.
- If E1, E2, ..., En are n events of a sample space S and if E1 ∪ E2 ∪ E3 ∪ ... ∪ En = S, then E1, E2, ..., En are called exhaustive events. In other words, events are exhaustive if at least one of them necessarily occurs whenever the experiment is performed.
- If Ei ∩ Ej = φ for i ≠ j (pairwise disjoint) and the union of all Ei equals S, then events E1, E2, ..., En are called mutually exclusive and exhaustive events.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 1: For rolling a die, given A = {2, 3, 5} and B = {1, 3, 5}, the sets for A or B, A and B, A but not B, and not A are found.
- Example 2: Two dice are thrown; events A (sum even), B (sum multiple of 3), C (sum less than 4), D (sum greater than 11) are analyzed to find which pairs are mutually exclusive.
- Example 3: A coin is tossed three times; events A (no head), B (exactly one head), C (at least two heads) are shown to be a set of mutually exclusive and exhaustive events.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Event as a Subset" | content: "An event is any subset of the sample space S. The empty set φ is the impossible event, and S itself is the sure event."
- title: "Mutually Exclusive Events" | content: "Two events A and B are mutually exclusive if A ∩ B = φ, meaning they cannot occur simultaneously."
- title: "Exhaustive Events" | content: "A set of events is exhaustive if their union is the entire sample space S, meaning at least one of them must occur."

**Widget idea:** Interactive Venn diagram where users can select events A and B from a sample space (e.g., rolling a die) and see the highlighted regions for A ∪ B, A ∩ B, A – B, and A′.

**Key terms:** event, sample space, subset, impossible event, sure event, simple event, elementary event, compound event, complementary event, not A, A or B, A ∪ B, A and B, A ∩ B, A but not B, A – B, mutually exclusive events, disjoint, exhaustive events, mutually exclusive and exhaustive events

### 2: Axiomatic Approach to Probability
eyebrow: Section 14.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Probability P is a real-valued function whose domain is the power set of the sample space S and whose range is the interval [0, 1].
- Axiom (i): For any event E, P(E) ≥ 0.
- Axiom (ii): P(S) = 1.
- Axiom (iii): If E and F are mutually exclusive events, then P(E ∪ F) = P(E) + P(F).
- It follows from axiom (iii) that P(φ) = 0.
- For a sample space S = {ω1, ω2, ..., ωn}, the axiomatic definition implies: (i) 0 ≤ P(ωi) ≤ 1 for each ωi ∈ S; (ii) P(ω1) + P(ω2) + ... + P(ωn) = 1; (iii) For any event A, P(A) = Σ P(ωi) for all ωi ∈ A.
- The singleton {ωi} is called an elementary event, and for convenience, P(ωi) is written for P({ωi}).
- There are many (infinite) ways to assign probabilities to outcomes of an experiment, as long as the axioms are satisfied.
- If all outcomes are equally likely to occur, then P(ωi) = 1/n for each ωi, where n = n(S).
- For equally likely outcomes, P(E) = m/n = (Number of outcomes favorable to E) / (Total possible outcomes).
- For any two events A and B, P(A ∪ B) = P(A) + P(B) – P(A ∩ B).
- If A and B are mutually exclusive events, then P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B).
- For any event A, P(A′) = P(not A) = 1 – P(A).

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 4: Six assignments of probabilities to outcomes ω1 through ω6 are checked for validity against the axiomatic conditions.
- Example 5: The probability of drawing a diamond, not an ace, a black card, not a diamond, and not a black card from a well-shuffled deck of 52 cards is calculated.
- Example 6: From a bag of 9 discs (4 red, 3 blue, 2 yellow), the probability of drawing a red, yellow, blue, not blue, and either red or blue disc is calculated.
- Example 7: Given P(Anil qualifies) = 0.05, P(Ashima qualifies) = 0.10, and P(both qualify) = 0.02, the probabilities that both do not qualify, at least one does not qualify, and only one qualifies are found.
- Example 8: A committee of two is selected from two men and two women; the probabilities of having no man, one man, and two men are calculated using combinations.
- Example 9: Veena visits four cities in random order; the probability that she visits A before B, A before B and B before C, A first and B last, A either first or second, and A just before B is found.
- Example 10: A hand of 7 cards is drawn from 52; the probability of having all Kings, 3 Kings, and at least 3 Kings is calculated.
- Example 11: A proof is given that P(A ∪ B ∪ C) = P(A) + P(B) + P(C) – P(A ∩ B) – P(A ∩ C) – P(B ∩ C) + P(A ∩ B ∩ C).
- Example 12: In a relay race with five teams, the probability that A, B, C finish first, second, third respectively, and that A, B, C are the first three to finish in any order is calculated.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Axioms of Probability" | content: "Probability is a function from events to [0,1] satisfying: (i) P(E) ≥ 0, (ii) P(S) = 1, (iii) For mutually exclusive events, P(E ∪ F) = P(E) + P(F)."
- title: "Equally Likely Outcomes" | content: "If all outcomes are equally likely, the probability of an event E is the number of favorable outcomes divided by the total number of outcomes: P(E) = n(E)/n(S)."
- title: "Addition Rule" | content: "For any two events A and B, P(A ∪ B) = P(A) + P(B) – P(A ∩ B). For mutually exclusive events, this simplifies to P(A ∪ B) = P(A) + P(B)."

**Widget idea:** Interactive probability calculator where users define a sample space and assign probabilities to outcomes, then select events and see the computed probabilities (P(A), P(B), P(A ∪ B), P(A ∩ B), P(A′)) update in real-time.

**Key terms:** axiomatic approach, probability, real-valued function, power set, axiom, mutually exclusive, elementary event, equally likely outcomes, favorable outcomes, total possible outcomes, addition rule, complementary event, not A

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "In the experiment of tossing a coin twice, which of the following is the event 'at least one head appears'?",
    "options": ["{HH, HT, TH}", "{HT, TH, TT}", "{HH, TT}", "{HH, HT, TH, TT}"],
    "answer": 0,
    "hint": "List all outcomes that contain at least one head.",
    "explanation": "The sample space is {HH, HT, TH, TT}. Outcomes with at least one head are HH, HT, and TH, so the event is {HH, HT, TH}."
  },
  {
    "question": "A die is rolled. Event A is 'getting an even number' and event B is 'getting a number greater than 4'. What is A ∩ B?",
    "options": ["{2, 4, 6}", "{5, 6}", "{6}", "{2, 4, 5, 6}"],
    "answer": 2,
    "hint": "Find the numbers that are both even and greater than 4.",
    "explanation": "A = {2, 4, 6} and B = {5, 6}. The common element is 6, so A ∩ B = {6}."
  },
  {
    "question": "Which of the following pairs of events are mutually exclusive when a die is rolled?",
    "options": ["A: odd number; B: number less than 4", "A: even number; B: number greater than 2", "A: prime number; B: number greater than 5", "A: number less than 3; B: number greater than 4"],
    "answer": 3,
    "hint": "Mutually exclusive events cannot occur simultaneously. Check if A ∩ B = φ.",
    "explanation": "A = {1, 2} and B = {5, 6}. Their intersection is empty, so they are mutually exclusive."
  },
  {
    "question": "In the experiment of tossing a coin three times, which set of events is exhaustive?",
    "options": ["A: exactly one head; B: exactly two heads", "A: no heads; B: exactly one head; C: exactly two heads; D: three heads", "A: at most one head; B: at least two heads", "A: first toss is head; B: second toss is tail"],
    "answer": 2,
    "hint": "Exhaustive events cover the entire sample space. Check if their union is S.",
    "explanation": "The sample space has 8 outcomes. 'At most one head' covers outcomes with 0 or 1 head, and 'at least two heads' covers outcomes with 2 or 3 heads. Their union is the entire sample space."
  },
  {
    "question": "For any event A, what is the complementary event A'?",
    "options": ["The event that A occurs", "The event that A does not occur", "The event that A occurs twice", "The event that is the same as A"],
    "answer": 1,
    "hint": "The complement of an event is 'not A'.",
    "explanation": "A' is the set of all outcomes in the sample space that are not in A, meaning event A does not occur."
  },
  {
    "question": "If A and B are two events such that A ∩ B = φ, what is P(A ∪ B)?",
    "options": ["P(A) + P(B)", "P(A) × P(B)", "P(A) – P(B)", "P(A) / P(B)"],
    "answer": 0,
    "hint": "This is a direct consequence of the third axiom of probability.",
    "explanation": "If A and B are mutually exclusive (A ∩ B = φ), then P(A ∪ B) = P(A) + P(B)."
  },
  {
    "question": "A sample space S = {ω1, ω2, ω3} has probabilities P(ω1) = 0.2, P(ω2) = 0.5, and P(ω3) = 0.3. What is P({ω1, ω3})?",
    "options": ["0.2", "0.3", "0.5", "0.8"],
    "answer": 3,
    "hint": "The probability of an event is the sum of the probabilities of its outcomes.",
    "explanation": "P({ω1, ω3}) = P(ω1) + P(ω3) = 0.2 + 0.3 = 0.5."
  },
  {
    "question": "Which of the following assignments of probabilities to outcomes of a sample space with two outcomes is NOT valid?",
    "options": ["P(ω1) = 0.5, P(ω2) = 0.5", "P(ω1) = 0, P(ω2) = 1", "P(ω1) = 0.2, P(ω2) = 0.8", "P(ω1) = 0.6, P(ω2) = 0.6"],
    "answer": 3,
    "hint": "Check the two conditions: each probability must be between 0 and 1, and their sum must be 1.",
    "explanation": "The sum of probabilities is 0.6 + 0.6 = 1.2, which is greater than 1, violating the axiom that the sum must equal 1."
  },
  {
    "question": "A fair coin is tossed. What is the probability of getting heads?",
    "options": ["0", "0.25", "0.5", "1"],
    "answer": 2,
    "hint": "A fair coin has two equally likely outcomes.",
    "explanation": "For a fair coin, P(heads) = 1/2 = 0.5."
  },
  {
    "question": "A card is drawn from a well-shuffled deck of 52 cards. What is the probability of drawing a king?",
    "options": ["1/52", "1/13", "4/13", "1/4"],
    "answer": 1,
    "hint": "There are 4 kings in a deck of 52 cards.",
    "explanation": "P(king) = number of kings / total cards = 4/52 = 1/13."
  },
  {
    "question": "Two dice are thrown. What is the probability that the sum of the numbers is 7?",
    "options": ["1/6", "1/12", "5/36", "1/9"],
    "answer": 0,
    "hint": "List all pairs (x, y) where x + y = 7. There are 36 total outcomes.",
    "explanation": "The pairs that sum to 7 are (1,6), (2,5), (3,4), (4,3), (5,2), (6,1). That's 6 favorable outcomes out of 36, so P = 6/36 = 1/6."
  },
  {
    "question": "If P(A) = 0.4, P(B) = 0.3, and P(A ∩ B) = 0.1, what is P(A ∪ B)?",
    "options": ["0.7", "0.6", "0.5", "0.8"],
    "answer": 1,
    "hint": "Use the addition rule: P(A ∪ B) = P(A) + P(B) – P(A ∩ B).",
    "explanation": "P(A ∪ B) = 0.4 + 0.3 – 0.1 = 0.6."
  },
  {
    "question": "If P(A) = 0.6, what is P(not A)?",
    "options": ["0.4", "0.6", "0.3", "1.0"],
    "answer": 0,
    "hint": "The probability of an event and its complement sum to 1.",
    "explanation": "P(not A) = 1 – P(A) = 1 – 0.6 = 0.4."
  },
  {
    "question": "A bag contains 5 red and 3 blue balls. One ball is drawn at random. What is the probability that it is blue?",
    "options": ["5/8", "3/8", "1/3", "1/5"],
    "answer": 1,
    "hint": "There are 3 blue balls out of a total of 8 balls.",
    "explanation": "P(blue) = number of blue balls / total balls = 3/8."
  },
  {
    "question": "In a single throw of a die, what is the probability of getting a number less than 3?",
    "options": ["1/6", "1/3", "1/2", "2/3"],
    "answer": 1,
    "hint": "Numbers less than 3 are 1 and 2.",
    "explanation": "Favorable outcomes: {1, 2}. Total outcomes: 6. P = 2/6 = 1/3."
  },
  {
    "question": "Events A and B are such that P(A) = 0.5, P(B) = 0.4, and A and B are mutually exclusive. What is P(A ∪ B)?",
    "options": ["0.1", "0.2", "0.9", "0.5"],
    "answer": 2,
    "hint": "For mutually exclusive events, P(A ∪ B) = P(A) + P(B).",
    "explanation": "P(A ∪ B) = 0.5 + 0.4 = 0.9."
  },
  {
    "question": "A coin is tossed three times. What is the probability of getting exactly two heads?",
    "options": ["1/8", "3/8", "1/2", "1/4"],
    "answer": 1,
    "hint": "List all 8 outcomes and count those with exactly two heads.",
    "explanation": "Outcomes with exactly two heads: HHT, HTH, THH. That's 3 out of 8, so P = 3/8."
  },
  {
    "question": "From a well-shuffled deck of 52 cards, what is the probability of drawing a red card?",
    "options": ["1/4", "1/2", "1/13", "2/13"],
    "answer": 1,
    "hint": "Half the cards are red (hearts and diamonds).",
    "explanation": "There are 26 red cards out of 52, so P = 26/52 = 1/2."
  },
  {
    "question": "Two events A and B are such that P(A) = 0.3, P(B) = 0.5, and P(A ∩ B) = 0.2. Are A and B mutually exclusive?",
    "options": ["Yes, because P(A) + P(B) > 1", "No, because P(A ∩ B) ≠ 0", "Yes, because P(A ∪ B) = 0.8", "No, because P(A) < P(B)"],
    "answer": 1,
    "hint": "Mutually exclusive events have an empty intersection, so P(A ∩ B) = 0.",
    "explanation": "Since P(A ∩ B) = 0.2 ≠ 0, A and B are not mutually exclusive."
  },
  {
    "question": "A die is rolled. What is the probability of getting a prime number?",
    "options": ["1/6", "1/3", "1/2", "2/3"],
    "answer": 2,
    "hint": "Prime numbers on a die are 2, 3, and 5.",
    "explanation": "Favorable outcomes: {2, 3, 5}. Total outcomes: 6. P = 3/6 = 1/2."
  },
  {
    "question": "If P(A) = 0.7, P(B) = 0.2, and A and B are mutually exclusive, what is P(A ∩ B)?",
    "options": ["0.9", "0.5", "0.14", "0"],
    "answer": 3,
    "hint": "Mutually exclusive events cannot occur together.",
    "explanation": "Since A and B are mutually exclusive, A ∩ B = φ, so P(A ∩ B) = 0."
  },
  {
    "question": "A box contains 4 red, 3 green, and 2 blue marbles. One marble is drawn at random. What is the probability that it is not green?",
    "options": ["1/3", "2/3", "4/9", "5/9"],
    "answer": 1,
    "hint": "Find the probability of green first, then subtract from 1.",
    "explanation": "Total marbles = 9. P(green) = 3/9 = 1/3. P(not green) = 1 – 1/3 = 2/3."
  },
  {
    "question": "In a class, 60% of students study math, 40% study physics, and 20% study both. What is the probability that a randomly selected student studies math or physics?",
    "options": ["0.8", "0.6", "0.4", "1.0"],
    "answer": 0,
    "hint": "Use the addition rule: P(M ∪ P) = P(M) + P(P) – P(M ∩ P).",
    "explanation": "P(M ∪ P) = 0.6 + 0.4 – 0.2 = 0.8."
  },
  {
    "question": "A number is chosen at random from 1 to 10. What is the probability that it is a multiple of 3?",
    "options": ["1/10", "1/5", "3/10", "1/3"],
    "answer": 2,
    "hint": "Multiples of 3 between 1 and 10 are 3, 6, and 9.",
    "explanation": "Favorable outcomes: {3, 6, 9}. Total outcomes: 10. P = 3/10."
  },
  {
    "question": "If P(A) = 0.8, P(B) = 0.6, and P(A ∪ B) = 0.9, what is P(A ∩ B)?",
    "options": ["0.5", "0.4", "0.3", "0.2"],
    "answer": 0,
    "hint": "Rearrange the addition rule: P(A ∩ B) = P(A) + P(B) – P(A ∪ B).",
    "explanation": "P(A ∩ B) = 0.8 + 0.6 – 0.9 = 0.5."
  }
]
```
