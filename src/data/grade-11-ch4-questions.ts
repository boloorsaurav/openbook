import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH4_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "What is the value of i to the power 37?",
    "options": [
      "1",
      "i",
      "-1",
      "-i"
    ],
    "answer": 1,
    "hint": "Divide the exponent by 4 and use the pattern of powers of i.",
    "explanation": "37 divided by 4 gives a remainder of 1, so i to the power 37 equals i to the power (4*9 + 1) = i."
  },
  {
    "question": "If z = 3 - 4i, what is the value of |z|?",
    "options": [
      "5",
      "7",
      "25",
      "1"
    ],
    "answer": 0,
    "hint": "The modulus is the square root of the sum of the squares of the real and imaginary parts.",
    "explanation": "|z| = square root of (3 squared + (-4) squared) = square root of (9 + 16) = square root of 25 = 5."
  },
  {
    "question": "What is the conjugate of the complex number -2 + 5i?",
    "options": [
      "2 + 5i",
      "-2 - 5i",
      "2 - 5i",
      "5 - 2i"
    ],
    "answer": 1,
    "hint": "The conjugate changes the sign of the imaginary part.",
    "explanation": "The conjugate of -2 + 5i is -2 - 5i."
  },
  {
    "question": "Which of the following is the multiplicative inverse of 1 + i?",
    "options": [
      "1 - i",
      "(1 - i)/2",
      "(1 + i)/2",
      "1 + i"
    ],
    "answer": 1,
    "hint": "The multiplicative inverse is the conjugate divided by the modulus squared.",
    "explanation": "The conjugate of 1 + i is 1 - i. The modulus squared is 1 squared + 1 squared = 2. So the inverse is (1 - i)/2."
  },
  {
    "question": "What is the result of (2 + 3i) + (4 - i)?",
    "options": [
      "6 + 2i",
      "6 + 4i",
      "8 + 2i",
      "6 - 2i"
    ],
    "answer": 0,
    "hint": "Add the real parts and the imaginary parts separately.",
    "explanation": "(2 + 4) + i(3 + (-1)) = 6 + 2i."
  },
  {
    "question": "What is the product of (1 + 2i) and (3 - i)?",
    "options": [
      "5 + 5i",
      "1 + 5i",
      "5 - 5i",
      "3 + 5i"
    ],
    "answer": 0,
    "hint": "Use the multiplication rule: (ac - bd) + i(ad + bc).",
    "explanation": "(1*3 - 2*(-1)) + i(1*(-1) + 2*3) = (3 + 2) + i(-1 + 6) = 5 + 5i."
  },
  {
    "question": "If z1 = a + ib and z2 = c + id, when are they equal?",
    "options": [
      "When a = c and b = d",
      "When a = d and b = c",
      "When a + b = c + d",
      "When a - b = c - d"
    ],
    "answer": 0,
    "hint": "Two complex numbers are equal if their real parts are equal and their imaginary parts are equal.",
    "explanation": "z1 = z2 if and only if a = c and b = d."
  },
  {
    "question": "What is the value of i to the power -3?",
    "options": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "answer": 0,
    "hint": "Use the pattern for negative powers of i.",
    "explanation": "i to the power -3 = 1/(i cubed) = 1/(-i) = i."
  },
  {
    "question": "What is the real part of the complex number (5 - 3i) cubed?",
    "options": [
      "-10",
      "125",
      "-135",
      "27"
    ],
    "answer": 0,
    "hint": "Expand using the identity for (z1 - z2) cubed.",
    "explanation": "(5 - 3i) cubed = 125 - 225i - 135 + 27i = -10 - 198i. The real part is -10."
  },
  {
    "question": "Which property does NOT hold for the multiplication of complex numbers?",
    "options": [
      "Commutative law",
      "Associative law",
      "Distributive law",
      "The rule square root of a times square root of b equals square root of (ab) for all real a and b"
    ],
    "answer": 3,
    "hint": "Consider the case when both a and b are negative.",
    "explanation": "The rule square root of a times square root of b equals square root of (ab) does not hold when both a and b are negative real numbers."
  },
  {
    "question": "In the Argand plane, what does the point (3, -2) represent?",
    "options": [
      "3 - 2i",
      "3 + 2i",
      "-2 + 3i",
      "-2 - 3i"
    ],
    "answer": 0,
    "hint": "The x-coordinate is the real part and the y-coordinate is the imaginary part.",
    "explanation": "The point (3, -2) corresponds to the complex number 3 + i(-2) = 3 - 2i."
  },
  {
    "question": "What is the additive inverse of the complex number -4 + 7i?",
    "options": [
      "4 - 7i",
      "-4 - 7i",
      "4 + 7i",
      "7 - 4i"
    ],
    "answer": 0,
    "hint": "The additive inverse changes the sign of both the real and imaginary parts.",
    "explanation": "The additive inverse of -4 + 7i is -(-4 + 7i) = 4 - 7i."
  },
  {
    "question": "What is the value of (1 + i) divided by (1 - i)?",
    "options": [
      "i",
      "-i",
      "1",
      "-1"
    ],
    "answer": 0,
    "hint": "Multiply the numerator and denominator by the conjugate of the denominator.",
    "explanation": "(1 + i)/(1 - i) = (1 + i)(1 + i)/((1 - i)(1 + i)) = (1 + 2i + i squared)/(1 - i squared) = (1 + 2i - 1)/(1 + 1) = (2i)/2 = i."
  },
  {
    "question": "If z = x + iy, what is the geometric relationship between z and its conjugate z bar in the Argand plane?",
    "options": [
      "They are symmetric about the real axis",
      "They are symmetric about the imaginary axis",
      "They are symmetric about the origin",
      "They are the same point"
    ],
    "answer": 0,
    "hint": "The conjugate changes the sign of the y-coordinate.",
    "explanation": "z = (x, y) and z bar = (x, -y). The point (x, -y) is the mirror image of (x, y) across the real axis."
  },
  {
    "question": "What is the value of i to the power 4k plus 2 for any integer k?",
    "options": [
      "1",
      "i",
      "-1",
      "-i"
    ],
    "answer": 2,
    "hint": "Use the general pattern for powers of i.",
    "explanation": "For any integer k, i to the power (4k + 2) = -1."
  },
  {
    "question": "What is the result of (3 + 4i) - (1 - 2i)?",
    "options": [
      "2 + 6i",
      "4 + 2i",
      "2 + 2i",
      "4 + 6i"
    ],
    "answer": 0,
    "hint": "Subtract the real parts and the imaginary parts separately.",
    "explanation": "(3 - 1) + i(4 - (-2)) = 2 + 6i."
  },
  {
    "question": "What is the modulus of the complex number 0 + 5i?",
    "options": [
      "5",
      "0",
      "25",
      "5i"
    ],
    "answer": 0,
    "hint": "The modulus is the distance from the origin.",
    "explanation": "|0 + 5i| = square root of (0 squared + 5 squared) = square root of 25 = 5."
  },
  {
    "question": "If z1 = 2 + i and z2 = 3 - 2i, what is the conjugate of z1 z2?",
    "options": [
      "8 - i",
      "8 + i",
      "4 - 7i",
      "4 + 7i"
    ],
    "answer": 1,
    "hint": "First find the product, then find its conjugate.",
    "explanation": "z1 z2 = (2*3 - 1*(-2)) + i(2*(-2) + 1*3) = (6 + 2) + i(-4 + 3) = 8 - i. The conjugate is 8 + i."
  },
  {
    "question": "What is the square root of minus 16?",
    "options": [
      "4i",
      "-4i",
      "4",
      "Both 4i and -4i"
    ],
    "answer": 3,
    "hint": "Remember that the symbol square root of minus a means the principal square root, but both positive and negative i times the square root of a are solutions.",
    "explanation": "The square roots of -16 are 4i and -4i. The symbol square root of -16 means 4i only."
  },
  {
    "question": "What is the value of (z1 plus z2) squared for complex numbers?",
    "options": [
      "z1 squared plus z2 squared plus 2 z1 z2",
      "z1 squared plus z2 squared minus 2 z1 z2",
      "z1 squared minus z2 squared",
      "z1 squared plus z2 squared"
    ],
    "answer": 0,
    "hint": "This identity is the same as for real numbers.",
    "explanation": "(z1 + z2) squared = z1 squared + z2 squared + 2 z1 z2."
  },
  {
    "question": "Which of the following is NOT a property of the modulus?",
    "options": [
      "|z1 z2| = |z1| |z2|",
      "|z1 / z2| = |z1| / |z2|",
      "|z1 + z2| = |z1| + |z2|",
      "|z| is always non-negative"
    ],
    "answer": 2,
    "hint": "The triangle inequality states that |z1 + z2| is less than or equal to |z1| + |z2|, not equal.",
    "explanation": "The modulus of a sum is not generally equal to the sum of the moduli. The correct property is |z1 + z2| is less than or equal to |z1| + |z2|."
  },
  {
    "question": "What is the imaginary part of the complex number (3 - 2i)(2 + 3i) divided by (1 + 2i)(2 - i)?",
    "options": [
      "-16/25",
      "63/25",
      "16/25",
      "-63/25"
    ],
    "answer": 0,
    "hint": "Simplify the expression step by step, then identify the imaginary part.",
    "explanation": "The expression simplifies to (63/25) - (16/25)i. The imaginary part is -16/25."
  },
  {
    "question": "If x + iy = (a + ib) / (a - ib), what is x squared plus y squared?",
    "options": [
      "1",
      "0",
      "a squared plus b squared",
      "(a squared plus b squared) squared"
    ],
    "answer": 0,
    "hint": "Find the product of (x + iy) and (x - iy).",
    "explanation": "x squared + y squared = (x + iy)(x - iy) = 1."
  },
  {
    "question": "What is the value of i to the power 0?",
    "options": [
      "1",
      "i",
      "0",
      "undefined"
    ],
    "answer": 0,
    "hint": "Any non-zero number to the power 0 is 1.",
    "explanation": "i to the power 0 = 1."
  },
  {
    "question": "In the Argand plane, what is the distance between the points representing 3 + 4i and its conjugate?",
    "options": [
      "8",
      "6",
      "10",
      "0"
    ],
    "answer": 0,
    "hint": "The conjugate is 3 - 4i. Find the distance between (3, 4) and (3, -4).",
    "explanation": "The points are (3, 4) and (3, -4). The distance is the absolute difference in y-coordinates: 4 - (-4) = 8."
  }
]
;
