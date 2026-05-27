import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH11_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "How many mutually perpendicular planes are required to define the position of a point in three-dimensional space?",
    "options": [
      "One",
      "Two",
      "Three",
      "Four"
    ],
    "answer": 2,
    "hint": "Think about the number of distances needed to locate a point in a room.",
    "explanation": "To locate a point in space, we need three perpendicular distances from three mutually perpendicular planes, such as the floor and two adjacent walls."
  },
  {
    "question": "What are the three coordinate axes in a rectangular coordinate system called?",
    "options": [
      "x-axis, y-axis, and z-axis",
      "X-axis, Y-axis, and Z-axis",
      "x-axis, y-axis, and w-axis",
      "a-axis, b-axis, and c-axis"
    ],
    "answer": 0,
    "hint": "The axes are named after the standard variables used in algebra.",
    "explanation": "The three mutually perpendicular lines are called the x-axis, y-axis, and z-axis."
  },
  {
    "question": "Which of the following is NOT one of the three coordinate planes?",
    "options": [
      "XY-plane",
      "YZ-plane",
      "XZ-plane",
      "XW-plane"
    ],
    "answer": 3,
    "hint": "The planes are defined by pairs of the three axes.",
    "explanation": "The three coordinate planes are XY-plane, YZ-plane, and ZX-plane. There is no XW-plane."
  },
  {
    "question": "How many octants are formed by the three coordinate planes?",
    "options": [
      "Four",
      "Six",
      "Eight",
      "Twelve"
    ],
    "answer": 2,
    "hint": "Consider how many regions three planes can divide space into.",
    "explanation": "The three coordinate planes divide space into eight parts, known as octants."
  },
  {
    "question": "What are the coordinates of the origin in a three-dimensional coordinate system?",
    "options": [
      "(1,1,1)",
      "(0,0,0)",
      "(0,0)",
      "(1,0,0)"
    ],
    "answer": 1,
    "hint": "The origin is the point where all three axes intersect.",
    "explanation": "The origin O has coordinates (0,0,0)."
  },
  {
    "question": "A point lies on the x-axis. What are its y and z coordinates?",
    "options": [
      "Both are zero",
      "Both are one",
      "y is zero, z is one",
      "y is one, z is zero"
    ],
    "answer": 0,
    "hint": "On the x-axis, the point has no displacement along the y or z directions.",
    "explanation": "Any point on the x-axis has coordinates of the form (x, 0, 0), so both y and z are zero."
  },
  {
    "question": "A point lies in the YZ-plane. What can you say about its x-coordinate?",
    "options": [
      "It is zero",
      "It is positive",
      "It is negative",
      "It is any real number"
    ],
    "answer": 0,
    "hint": "The YZ-plane is defined by x = 0.",
    "explanation": "Any point in the YZ-plane has coordinates of the form (0, y, z), so its x-coordinate is zero."
  },
  {
    "question": "In which octant does the point (4, -2, 3) lie?",
    "options": [
      "Octant I",
      "Octant II",
      "Octant IV",
      "Octant VIII"
    ],
    "answer": 2,
    "hint": "Check the signs of the coordinates: x is positive, y is negative, z is positive.",
    "explanation": "According to Table 11.1, a point with signs (+, -, +) lies in Octant IV."
  },
  {
    "question": "In which octant does the point (-3, 1, -2) lie?",
    "options": [
      "Octant II",
      "Octant III",
      "Octant VI",
      "Octant VII"
    ],
    "answer": 2,
    "hint": "Check the signs: x is negative, y is positive, z is negative.",
    "explanation": "According to Table 11.1, a point with signs (-, +, -) lies in Octant VI."
  },
  {
    "question": "What is the distance between the points (2, 3, 5) and (4, 3, 1)?",
    "options": [
      "2 times square root of 5",
      "square root of 20",
      "2",
      "square root of 24"
    ],
    "answer": 0,
    "hint": "Use the distance formula: square root of [(x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2].",
    "explanation": "The distance is square root of [(4-2)^2 + (3-3)^2 + (1-5)^2] = square root of [4 + 0 + 16] = square root of 20 = 2 times square root of 5."
  },
  {
    "question": "What is the distance from the origin to the point (3, 4, 12)?",
    "options": [
      "13",
      "square root of 169",
      "25",
      "square root of 25"
    ],
    "answer": 0,
    "hint": "Use the formula for distance from origin: square root of (x^2 + y^2 + z^2).",
    "explanation": "The distance is square root of [3^2 + 4^2 + 12^2] = square root of [9 + 16 + 144] = square root of 169 = 13."
  },
  {
    "question": "Three points P, Q, and R are collinear. If PQ = 5 and QR = 7, what is PR?",
    "options": [
      "2",
      "12",
      "square root of 74",
      "Cannot be determined"
    ],
    "answer": 1,
    "hint": "For collinear points, the sum of the distances between two pairs equals the distance between the third pair.",
    "explanation": "If P, Q, and R are collinear, then PQ + QR = PR, so PR = 5 + 7 = 12."
  },
  {
    "question": "Which of the following sets of points are collinear?",
    "options": [
      "(1,2,3), (2,3,4), (3,4,5)",
      "(1,1,1), (2,2,2), (3,3,3)",
      "(0,0,0), (1,0,0), (0,1,0)",
      "(1,0,0), (0,1,0), (0,0,1)"
    ],
    "answer": 1,
    "hint": "Check if the sum of distances between two pairs equals the distance between the third pair.",
    "explanation": "For points (1,1,1), (2,2,2), and (3,3,3), the distances are square root of 3, square root of 3, and 2 times square root of 3, and square root of 3 + square root of 3 = 2 times square root of 3, so they are collinear."
  },
  {
    "question": "The points A(1,2,3), B(2,3,4), and C(3,4,5) form what type of triangle?",
    "options": [
      "Equilateral",
      "Isosceles",
      "Right-angled",
      "Collinear"
    ],
    "answer": 3,
    "hint": "Calculate the distances AB, BC, and AC and see if they satisfy the collinearity condition.",
    "explanation": "AB = square root of 3, BC = square root of 3, AC = 2 times square root of 3. Since AB + BC = AC, the points are collinear, not a triangle."
  },
  {
    "question": "If the distance between points (x, 2, 3) and (1, 2, 3) is 4, what is the value of x?",
    "options": [
      "5 or -3",
      "5 only",
      "-3 only",
      "4 or -4"
    ],
    "answer": 0,
    "hint": "The y and z coordinates are the same, so the distance depends only on the difference in x.",
    "explanation": "The distance is |x - 1| = 4, so x - 1 = 4 or x - 1 = -4, giving x = 5 or x = -3."
  },
  {
    "question": "What is the equation of the set of points equidistant from A(1,2,3) and B(3,2,-1)?",
    "options": [
      "x - 2z = 0",
      "x + z = 0",
      "2x - 4z = 0",
      "x - z = 0"
    ],
    "answer": 0,
    "hint": "Set the squared distances equal and simplify.",
    "explanation": "Setting (x-1)^2 + (y-2)^2 + (z-3)^2 = (x-3)^2 + (y-2)^2 + (z+1)^2 and simplifying gives x - 2z = 0."
  },
  {
    "question": "A point P moves such that its distance from A(0,0,0) is always 5. What is the equation of the set of points P?",
    "options": [
      "x^2 + y^2 + z^2 = 25",
      "x + y + z = 5",
      "x^2 + y^2 + z^2 = 5",
      "x + y + z = 25"
    ],
    "answer": 0,
    "hint": "The distance from the origin is square root of (x^2 + y^2 + z^2).",
    "explanation": "The condition is square root of (x^2 + y^2 + z^2) = 5, so squaring both sides gives x^2 + y^2 + z^2 = 25."
  },
  {
    "question": "If the centroid of a triangle with vertices (1,2,3), (4,5,6), and (x,y,z) is (2,3,4), what is the value of x?",
    "options": [
      "1",
      "2",
      "3",
      "4"
    ],
    "answer": 0,
    "hint": "The centroid is the average of the coordinates of the vertices.",
    "explanation": "The x-coordinate of the centroid is (1+4+x)/3 = 2, so 5 + x = 6, giving x = 1."
  },
  {
    "question": "Which of the following points lies in Octant VII?",
    "options": [
      "(-1, -2, -3)",
      "(1, 2, -3)",
      "(-1, 2, -3)",
      "(1, -2, -3)"
    ],
    "answer": 0,
    "hint": "Octant VII has all three coordinates negative.",
    "explanation": "According to Table 11.1, Octant VII has signs (-, -, -), so the point (-1, -2, -3) lies in it."
  },
  {
    "question": "What is the distance between the points (a, b, c) and (a, b, -c)?",
    "options": [
      "2c",
      "2 times the absolute value of c",
      "c",
      "0"
    ],
    "answer": 1,
    "hint": "The x and y coordinates are the same, so the distance depends only on the difference in z.",
    "explanation": "The distance is square root of [(a-a)^2 + (b-b)^2 + (-c - c)^2] = square root of [0 + 0 + (-2c)^2] = square root of (4c^2) = 2 times the absolute value of c."
  },
  {
    "question": "If a point has coordinates (0, 5, 0), where is it located?",
    "options": [
      "On the x-axis",
      "On the y-axis",
      "On the z-axis",
      "In the XY-plane"
    ],
    "answer": 1,
    "hint": "A point on the y-axis has x and z coordinates equal to zero.",
    "explanation": "The point (0, 5, 0) has x=0 and z=0, so it lies on the y-axis."
  },
  {
    "question": "The points (1,2,3), (2,3,4), and (3,4,5) are:",
    "options": [
      "Vertices of an equilateral triangle",
      "Vertices of a right-angled triangle",
      "Collinear",
      "Vertices of an isosceles triangle"
    ],
    "answer": 2,
    "hint": "Calculate the distances between each pair of points.",
    "explanation": "The distances are square root of 3, square root of 3, and 2 times square root of 3. Since the sum of the first two equals the third, the points are collinear."
  },
  {
    "question": "What is the distance between the points (1, -3, 4) and (-4, 1, 2)?",
    "options": [
      "3 times square root of 5",
      "square root of 45",
      "square root of 41",
      "square root of 29"
    ],
    "answer": 0,
    "hint": "Apply the distance formula: square root of [(x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2].",
    "explanation": "The distance is square root of [(-4-1)^2 + (1+3)^2 + (2-4)^2] = square root of [25 + 16 + 4] = square root of 45 = 3 times square root of 5."
  },
  {
    "question": "If the points (2,3,5), (1,2,3), and (7,0,-1) are collinear, what is the relationship between the distances PQ, QR, and PR?",
    "options": [
      "PQ + QR = PR",
      "PQ + PR = QR",
      "QR + PR = PQ",
      "PQ = QR = PR"
    ],
    "answer": 0,
    "hint": "For collinear points, one distance equals the sum of the other two.",
    "explanation": "For points P(2,3,5), Q(1,2,3), and R(7,0,-1), PQ = square root of 14, QR = 2 times square root of 14, and PR = 3 times square root of 14, so PQ + QR = PR."
  },
  {
    "question": "What is the equation of the set of points P such that PA = PB, where A is (3,4,-5) and B is (-2,1,4)?",
    "options": [
      "10x + 6y - 18z - 29 = 0",
      "10x - 6y + 18z - 29 = 0",
      "10x + 6y + 18z + 29 = 0",
      "10x - 6y - 18z + 29 = 0"
    ],
    "answer": 0,
    "hint": "Set the squared distances equal and simplify the equation.",
    "explanation": "Setting (x-3)^2 + (y-4)^2 + (z+5)^2 = (x+2)^2 + (y-1)^2 + (z-4)^2 and simplifying gives 10x + 6y - 18z - 29 = 0."
  }
]
;
