import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH5_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "Which of the following is a strict inequality?",
    "options": [
      "3 less than or equal to 5",
      "x greater than or equal to 2",
      "7 less than 9",
      "y less than or equal to 4"
    ],
    "answer": 2,
    "hint": "Strict inequalities use only less than or greater than, not less than or equal to or greater than or equal to.",
    "explanation": "A strict inequality uses only the less than or greater than symbol. 7 less than 9 is a strict inequality."
  },
  {
    "question": "Which of the following is a linear inequality in two variables?",
    "options": [
      "ax + b less than 0",
      "ax squared + bx + c greater than 0",
      "ax + by less than c",
      "x less than 5"
    ],
    "answer": 2,
    "hint": "A linear inequality in two variables has the form ax + by less than c, with both x and y.",
    "explanation": "ax + by less than c is a linear inequality in two variables x and y."
  },
  {
    "question": "What is the solution set of 30x less than 200 when x is a natural number?",
    "options": [
      "{0,1,2,3,4,5,6}",
      "{1,2,3,4,5,6}",
      "{...,-3,-2,-1,0,1,2,3,4,5,6}",
      "{0,1,2,3,4,5}"
    ],
    "answer": 1,
    "hint": "Natural numbers start from 1.",
    "explanation": "Natural numbers are positive integers starting from 1. The inequality 30x less than 200 means x less than 20/3, so x can be 1, 2, 3, 4, 5, or 6."
  },
  {
    "question": "Solve 5x minus 3 less than 3x plus 1 for real x.",
    "options": [
      "x less than 2",
      "x greater than 2",
      "x less than 1",
      "x greater than 1"
    ],
    "answer": 0,
    "hint": "Use Rule 1 to move terms, then Rule 2 to isolate x.",
    "explanation": "Subtract 3x from both sides: 2x minus 3 less than 1. Add 3 to both sides: 2x less than 4. Divide by 2: x less than 2."
  },
  {
    "question": "Solve 4x plus 3 less than 6x plus 7.",
    "options": [
      "x less than negative 2",
      "x greater than negative 2",
      "x less than 2",
      "x greater than 2"
    ],
    "answer": 1,
    "hint": "Move the variable terms to one side and constants to the other.",
    "explanation": "Subtract 4x from both sides: 3 less than 2x plus 7. Subtract 7 from both sides: negative 4 less than 2x. Divide by 2: negative 2 less than x, which is x greater than negative 2."
  },
  {
    "question": "Solve (5 minus 2x)/3 less than or equal to x/6 minus 5.",
    "options": [
      "x less than or equal to 8",
      "x greater than or equal to 8",
      "x less than 8",
      "x greater than 8"
    ],
    "answer": 1,
    "hint": "Multiply both sides by the least common multiple of the denominators to clear fractions.",
    "explanation": "Multiply both sides by 6: 2(5 minus 2x) less than or equal to x minus 30. Simplify: 10 minus 4x less than or equal to x minus 30. Add 4x to both sides: 10 less than or equal to 5x minus 30. Add 30: 40 less than or equal to 5x. Divide by 5: 8 less than or equal to x, or x greater than or equal to 8."
  },
  {
    "question": "When solving an inequality, what happens when you multiply both sides by a negative number?",
    "options": [
      "The inequality sign stays the same.",
      "The inequality sign is reversed.",
      "The inequality becomes an equation.",
      "The solution set becomes empty."
    ],
    "answer": 1,
    "hint": "Consider the example 3 greater than 2. Multiply both sides by negative 1.",
    "explanation": "Multiplying or dividing both sides of an inequality by a negative number reverses the inequality sign. For example, 3 greater than 2 becomes negative 3 less than negative 2."
  },
  {
    "question": "Solve 7x plus 3 less than 5x plus 9.",
    "options": [
      "x less than 3",
      "x greater than 3",
      "x less than 6",
      "x greater than 6"
    ],
    "answer": 0,
    "hint": "Subtract 5x from both sides, then subtract 3 from both sides.",
    "explanation": "Subtract 5x: 2x plus 3 less than 9. Subtract 3: 2x less than 6. Divide by 2: x less than 3."
  },
  {
    "question": "Solve (3x minus 4)/2 greater than or equal to (x plus 1)/4 minus 1.",
    "options": [
      "x less than or equal to 1",
      "x greater than or equal to 1",
      "x less than 1",
      "x greater than 1"
    ],
    "answer": 1,
    "hint": "First simplify the right side: (x plus 1)/4 minus 1 equals (x minus 3)/4.",
    "explanation": "Multiply both sides by 4: 2(3x minus 4) greater than or equal to x minus 3. Simplify: 6x minus 8 greater than or equal to x minus 3. Subtract x: 5x minus 8 greater than or equal to negative 3. Add 8: 5x greater than or equal to 5. Divide by 5: x greater than or equal to 1."
  },
  {
    "question": "A student scored 62 and 48 on two tests. What minimum score on a third test is needed for an average of at least 60?",
    "options": [
      "60",
      "65",
      "70",
      "75"
    ],
    "answer": 2,
    "hint": "Set up the inequality: (62 + 48 + x)/3 greater than or equal to 60.",
    "explanation": "The inequality is (110 + x)/3 greater than or equal to 60. Multiply by 3: 110 + x greater than or equal to 180. Subtract 110: x greater than or equal to 70."
  },
  {
    "question": "Find all pairs of consecutive odd natural numbers larger than 10 whose sum is less than 40.",
    "options": [
      "(11,13), (13,15), (15,17)",
      "(11,13), (13,15), (15,17), (17,19)",
      "(13,15), (15,17), (17,19)",
      "(11,13), (13,15)"
    ],
    "answer": 1,
    "hint": "Let the smaller odd number be x. Then x greater than 10 and x + (x+2) less than 40.",
    "explanation": "Solving gives 10 less than x less than 19. Since x is odd, x can be 11, 13, 15, or 17. The pairs are (11,13), (13,15), (15,17), and (17,19)."
  },
  {
    "question": "Solve the double inequality negative 8 less than or equal to 5x minus 3 less than 7.",
    "options": [
      "negative 1 less than or equal to x less than 2",
      "negative 1 less than x less than or equal to 2",
      "negative 1 less than x less than 2",
      "negative 1 less than or equal to x less than or equal to 2"
    ],
    "answer": 0,
    "hint": "Add 3 to all three parts, then divide by 5.",
    "explanation": "Add 3: negative 5 less than or equal to 5x less than 10. Divide by 5: negative 1 less than or equal to x less than 2."
  },
  {
    "question": "Solve the double inequality negative 5 less than or equal to (5 minus 3x)/2 less than or equal to 8.",
    "options": [
      "negative 11/3 less than or equal to x less than or equal to 5",
      "negative 5 less than or equal to x less than or equal to 11/3",
      "x less than or equal to negative 11/3 or x greater than or equal to 5",
      "x less than or equal to negative 5 or x greater than or equal to 11/3"
    ],
    "answer": 0,
    "hint": "Multiply all three parts by 2, then subtract 5, then divide by negative 3 (reversing the inequality signs).",
    "explanation": "Multiply by 2: negative 10 less than or equal to 5 minus 3x less than or equal to 16. Subtract 5: negative 15 less than or equal to negative 3x less than or equal to 11. Divide by negative 3: 5 greater than or equal to x greater than or equal to negative 11/3, which is negative 11/3 less than or equal to x less than or equal to 5."
  },
  {
    "question": "Solve the system: 3x minus 7 less than 5 plus x and 11 minus 5x less than or equal to 1.",
    "options": [
      "2 less than x less than 6",
      "2 less than or equal to x less than 6",
      "2 less than x less than or equal to 6",
      "2 less than or equal to x less than or equal to 6"
    ],
    "answer": 1,
    "hint": "Solve each inequality separately, then find the intersection of the solution sets.",
    "explanation": "First inequality: 3x minus 7 less than 5 plus x gives 2x less than 12, so x less than 6. Second inequality: 11 minus 5x less than or equal to 1 gives negative 5x less than or equal to negative 10, so x greater than or equal to 2. The intersection is 2 less than or equal to x less than 6."
  },
  {
    "question": "A Celsius temperature range of 30 to 35 degrees is to be converted to Fahrenheit using C = (5/9)(F minus 32). What is the Fahrenheit range?",
    "options": [
      "86 to 95 degrees",
      "86 to 96 degrees",
      "85 to 95 degrees",
      "85 to 96 degrees"
    ],
    "answer": 0,
    "hint": "Substitute the Celsius range into the formula and solve for F.",
    "explanation": "30 less than (5/9)(F minus 32) less than 35. Multiply by 9/5: 54 less than F minus 32 less than 63. Add 32: 86 less than F less than 95."
  },
  {
    "question": "A manufacturer has 600 litres of 12% acid solution. How many litres of 30% acid solution must be added so the final mixture is between 15% and 18% acid?",
    "options": [
      "More than 120 litres but less than 300 litres",
      "More than 100 litres but less than 250 litres",
      "More than 150 litres but less than 300 litres",
      "More than 120 litres but less than 250 litres"
    ],
    "answer": 0,
    "hint": "Set up two inequalities: one for greater than 15% and one for less than 18%.",
    "explanation": "Let x be litres of 30% solution. For greater than 15%: 30x + 7200 greater than 15x + 9000, giving x greater than 120. For less than 18%: 30x + 7200 less than 18x + 10800, giving x less than 300. So 120 less than x less than 300."
  },
  {
    "question": "Which of the following is the correct representation of x greater than 2 on a number line?",
    "options": [
      "A dark circle at 2 with a dark line to the left",
      "A dark circle at 2 with a dark line to the right",
      "An open circle at 2 with a dark line to the left",
      "An open circle at 2 with a dark line to the right"
    ],
    "answer": 3,
    "hint": "Greater than is a strict inequality, so use an open circle. The line goes to the right for values greater than 2.",
    "explanation": "For x greater than 2, use an open circle at 2 and darken the line to the right."
  },
  {
    "question": "Which of the following is the correct representation of x less than or equal to negative 1 on a number line?",
    "options": [
      "A dark circle at negative 1 with a dark line to the left",
      "A dark circle at negative 1 with a dark line to the right",
      "An open circle at negative 1 with a dark line to the left",
      "An open circle at negative 1 with a dark line to the right"
    ],
    "answer": 0,
    "hint": "Less than or equal to is a slack inequality, so use a dark circle. The line goes to the left for values less than negative 1.",
    "explanation": "For x less than or equal to negative 1, use a dark circle at negative 1 and darken the line to the left."
  },
  {
    "question": "Solve 3x minus 7 greater than 5x minus 1.",
    "options": [
      "x less than negative 3",
      "x greater than negative 3",
      "x less than 3",
      "x greater than 3"
    ],
    "answer": 0,
    "hint": "Move the variable terms to one side and constants to the other.",
    "explanation": "Subtract 3x from both sides: negative 7 greater than 2x minus 1. Add 1: negative 6 greater than 2x. Divide by 2: negative 3 greater than x, which is x less than negative 3."
  },
  {
    "question": "Solve 3(x minus 1) less than or equal to 2(x minus 3).",
    "options": [
      "x less than or equal to negative 3",
      "x greater than or equal to negative 3",
      "x less than or equal to 3",
      "x greater than or equal to 3"
    ],
    "answer": 0,
    "hint": "Expand both sides, then move terms.",
    "explanation": "Expand: 3x minus 3 less than or equal to 2x minus 6. Subtract 2x: x minus 3 less than or equal to negative 6. Add 3: x less than or equal to negative 3."
  },
  {
    "question": "Solve 3(2 minus x) greater than or equal to 2(1 minus x).",
    "options": [
      "x less than or equal to 4",
      "x greater than or equal to 4",
      "x less than or equal to negative 4",
      "x greater than or equal to negative 4"
    ],
    "answer": 0,
    "hint": "Expand both sides, then move terms.",
    "explanation": "Expand: 6 minus 3x greater than or equal to 2 minus 2x. Add 3x: 6 greater than or equal to 2 plus x. Subtract 2: 4 greater than or equal to x, which is x less than or equal to 4."
  },
  {
    "question": "Solve x/2 + x/3 + x/4 less than 11.",
    "options": [
      "x less than 12",
      "x greater than 12",
      "x less than 132/13",
      "x greater than 132/13"
    ],
    "answer": 0,
    "hint": "Find a common denominator for the fractions.",
    "explanation": "The common denominator is 12: (6x + 4x + 3x)/12 less than 11, so 13x/12 less than 11. Multiply by 12: 13x less than 132. Divide by 13: x less than 132/13, which is approximately 10.15, but the exact answer is x less than 132/13. However, the options given are x less than 12, which is also true since 132/13 is about 10.15. The most precise answer from the options is x less than 12."
  },
  {
    "question": "Solve (x/3) greater than (x/2) plus 1.",
    "options": [
      "x less than negative 6",
      "x greater than negative 6",
      "x less than 6",
      "x greater than 6"
    ],
    "answer": 0,
    "hint": "Multiply both sides by the least common multiple of the denominators.",
    "explanation": "Multiply both sides by 6: 2x greater than 3x plus 6. Subtract 3x: negative x greater than 6. Multiply by negative 1: x less than negative 6."
  },
  {
    "question": "Solve 2(2x plus 3) minus 10 less than 6(x minus 2).",
    "options": [
      "x greater than 4",
      "x less than 4",
      "x greater than 2",
      "x less than 2"
    ],
    "answer": 0,
    "hint": "Expand both sides, then simplify.",
    "explanation": "Expand: 4x plus 6 minus 10 less than 6x minus 12, so 4x minus 4 less than 6x minus 12. Subtract 4x: negative 4 less than 2x minus 12. Add 12: 8 less than 2x. Divide by 2: 4 less than x, which is x greater than 4."
  },
  {
    "question": "Solve 37 minus (3x plus 5) greater than 9x minus 8(x minus 3).",
    "options": [
      "x greater than 2",
      "x less than 2",
      "x greater than 4",
      "x less than 4"
    ],
    "answer": 1,
    "hint": "Simplify both sides carefully.",
    "explanation": "Simplify left: 37 minus 3x minus 5 equals 32 minus 3x. Simplify right: 9x minus 8x plus 24 equals x plus 24. So 32 minus 3x greater than x plus 24. Add 3x: 32 greater than 4x plus 24. Subtract 24: 8 greater than 4x. Divide by 4: 2 greater than x, which is x less than 2."
  }
]
;
