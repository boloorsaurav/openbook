import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH10_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "A plane intersects a double-napped cone at an angle beta equal to the generator angle alpha, cutting entirely across one nappe. Which conic section is formed?",
    "options": [
      "Circle",
      "Ellipse",
      "Parabola",
      "Hyperbola"
    ],
    "answer": 2,
    "hint": "This is the boundary case between an ellipse and a hyperbola.",
    "explanation": "When beta equals alpha, the plane is parallel to a generator of the cone, and the intersection is a parabola."
  },
  {
    "question": "A plane passes through the vertex of a cone and makes an angle beta such that 0 is less than or equal to beta and beta is less than alpha. What is the resulting degenerated conic section?",
    "options": [
      "A point",
      "A single straight line",
      "A pair of intersecting straight lines",
      "A circle"
    ],
    "answer": 2,
    "hint": "This is the degenerated case of a hyperbola.",
    "explanation": "When the plane cuts through both nappes at the vertex, the section is a pair of intersecting straight lines."
  },
  {
    "question": "What is the equation of a circle with centre at (2, -3) and radius 5?",
    "options": [
      "(x + 2)^2 + (y - 3)^2 = 25",
      "(x - 2)^2 + (y + 3)^2 = 25",
      "(x - 2)^2 + (y - 3)^2 = 5",
      "(x + 2)^2 + (y + 3)^2 = 5"
    ],
    "answer": 1,
    "hint": "The standard form is (x - h)^2 + (y - k)^2 = r^2.",
    "explanation": "Substituting h = 2, k = -3, and r = 5 into (x - h)^2 + (y - k)^2 = r^2 gives (x - 2)^2 + (y + 3)^2 = 25."
  },
  {
    "question": "Find the centre of the circle given by x^2 + y^2 - 6x + 4y - 12 = 0.",
    "options": [
      "(3, -2)",
      "(-3, 2)",
      "(6, -4)",
      "(-6, 4)"
    ],
    "answer": 0,
    "hint": "Complete the square for the x and y terms.",
    "explanation": "Completing the square gives (x - 3)^2 + (y + 2)^2 = 25, so the centre is (3, -2)."
  },
  {
    "question": "For a parabola with equation y^2 = -12x, what is the focus?",
    "options": [
      "(3, 0)",
      "(-3, 0)",
      "(0, 3)",
      "(0, -3)"
    ],
    "answer": 1,
    "hint": "The standard form is y^2 = -4ax.",
    "explanation": "Comparing y^2 = -12x with y^2 = -4ax gives a = 3. The focus for this form is at (-a, 0), which is (-3, 0)."
  },
  {
    "question": "What is the length of the latus rectum of the parabola x^2 = 8y?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 2,
    "hint": "The standard form is x^2 = 4ay.",
    "explanation": "Comparing x^2 = 8y with x^2 = 4ay gives a = 2. The length of the latus rectum is 4a = 8."
  },
  {
    "question": "A parabola has its vertex at the origin and opens to the left. Which of the following could be its equation?",
    "options": [
      "y^2 = 4x",
      "y^2 = -4x",
      "x^2 = 4y",
      "x^2 = -4y"
    ],
    "answer": 1,
    "hint": "A parabola opening left has a negative coefficient for x.",
    "explanation": "A parabola opening left has the form y^2 = -4ax, so y^2 = -4x is correct."
  },
  {
    "question": "For the ellipse x^2/25 + y^2/9 = 1, what are the coordinates of the vertices?",
    "options": [
      "(0, ±5)",
      "(±5, 0)",
      "(0, ±3)",
      "(±3, 0)"
    ],
    "answer": 1,
    "hint": "The vertices are the endpoints of the major axis.",
    "explanation": "Since the denominator of x^2 is larger, the major axis is along the x-axis. a^2 = 25, so a = 5, and the vertices are at (±5, 0)."
  },
  {
    "question": "What is the eccentricity of the ellipse x^2/16 + y^2/7 = 1?",
    "options": [
      "3/4",
      "4/3",
      "√7/4",
      "3/√7"
    ],
    "answer": 0,
    "hint": "Eccentricity e = c/a, where c^2 = a^2 - b^2.",
    "explanation": "a^2 = 16, b^2 = 7, so c^2 = 16 - 7 = 9, and c = 3. e = c/a = 3/4."
  },
  {
    "question": "The foci of an ellipse are at (±4, 0) and the vertices are at (±5, 0). What is the equation of the ellipse?",
    "options": [
      "x^2/25 + y^2/9 = 1",
      "x^2/25 + y^2/16 = 1",
      "x^2/16 + y^2/9 = 1",
      "x^2/9 + y^2/25 = 1"
    ],
    "answer": 0,
    "hint": "Use c^2 = a^2 - b^2 to find b^2.",
    "explanation": "a = 5, c = 4, so b^2 = a^2 - c^2 = 25 - 16 = 9. The equation is x^2/25 + y^2/9 = 1."
  },
  {
    "question": "What is the length of the latus rectum of the ellipse x^2/36 + y^2/16 = 1?",
    "options": [
      "16/3",
      "32/3",
      "8/3",
      "16/9"
    ],
    "answer": 0,
    "hint": "The length is 2b^2/a.",
    "explanation": "a^2 = 36, so a = 6. b^2 = 16. The latus rectum length is 2b^2/a = 2*16/6 = 32/6 = 16/3."
  },
  {
    "question": "For the hyperbola x^2/9 - y^2/16 = 1, what are the coordinates of the foci?",
    "options": [
      "(±3, 0)",
      "(±4, 0)",
      "(±5, 0)",
      "(0, ±5)"
    ],
    "answer": 2,
    "hint": "c^2 = a^2 + b^2.",
    "explanation": "a^2 = 9, b^2 = 16, so c^2 = 9 + 16 = 25, and c = 5. The foci are at (±5, 0)."
  },
  {
    "question": "What is the eccentricity of the hyperbola y^2/4 - x^2/5 = 1?",
    "options": [
      "2/3",
      "3/2",
      "√5/2",
      "3/√5"
    ],
    "answer": 1,
    "hint": "Eccentricity e = c/a, where c^2 = a^2 + b^2.",
    "explanation": "a^2 = 4, so a = 2. b^2 = 5, so c^2 = 4 + 5 = 9, and c = 3. e = c/a = 3/2."
  },
  {
    "question": "A hyperbola has vertices at (0, ±6) and foci at (0, ±10). What is its equation?",
    "options": [
      "x^2/36 - y^2/64 = 1",
      "y^2/36 - x^2/64 = 1",
      "x^2/64 - y^2/36 = 1",
      "y^2/64 - x^2/36 = 1"
    ],
    "answer": 1,
    "hint": "The transverse axis is along the y-axis.",
    "explanation": "a = 6, c = 10, so b^2 = c^2 - a^2 = 100 - 36 = 64. The equation is y^2/36 - x^2/64 = 1."
  },
  {
    "question": "What is the length of the latus rectum of the hyperbola x^2/4 - y^2/12 = 1?",
    "options": [
      "3",
      "6",
      "12",
      "24"
    ],
    "answer": 2,
    "hint": "The length is 2b^2/a.",
    "explanation": "a^2 = 4, so a = 2. b^2 = 12. The latus rectum length is 2b^2/a = 2*12/2 = 12."
  },
  {
    "question": "Which of the following is the equation of a hyperbola with a = b?",
    "options": [
      "x^2/9 - y^2/16 = 1",
      "x^2/25 - y^2/25 = 1",
      "x^2/9 + y^2/16 = 1",
      "x^2/25 + y^2/25 = 1"
    ],
    "answer": 1,
    "hint": "This is called an equilateral hyperbola.",
    "explanation": "An equilateral hyperbola has a = b, so the equation is x^2/25 - y^2/25 = 1."
  },
  {
    "question": "A point P moves such that the sum of its distances from two fixed points is constant. What is the locus of P?",
    "options": [
      "A circle",
      "A parabola",
      "An ellipse",
      "A hyperbola"
    ],
    "answer": 2,
    "hint": "This is the definition of one of the conic sections.",
    "explanation": "An ellipse is defined as the set of points where the sum of distances to two foci is constant."
  },
  {
    "question": "A point P moves such that the difference of its distances from two fixed points is constant. What is the locus of P?",
    "options": [
      "A circle",
      "A parabola",
      "An ellipse",
      "A hyperbola"
    ],
    "answer": 3,
    "hint": "This is the definition of one of the conic sections.",
    "explanation": "A hyperbola is defined as the set of points where the difference of distances to two foci is constant."
  },
  {
    "question": "For the ellipse 4x^2 + 9y^2 = 36, what is the length of the major axis?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 3,
    "hint": "First write the equation in standard form.",
    "explanation": "Dividing by 36 gives x^2/9 + y^2/4 = 1. a^2 = 9, so a = 3. The major axis length is 2a = 6."
  },
  {
    "question": "For the hyperbola 9x^2 - 4y^2 = 36, what is the length of the transverse axis?",
    "options": [
      "2",
      "3",
      "4",
      "6"
    ],
    "answer": 2,
    "hint": "First write the equation in standard form.",
    "explanation": "Dividing by 36 gives x^2/4 - y^2/9 = 1. a^2 = 4, so a = 2. The transverse axis length is 2a = 4."
  },
  {
    "question": "A parabola has its focus at (0, -5) and directrix y = 5. What is its equation?",
    "options": [
      "y^2 = -20x",
      "y^2 = 20x",
      "x^2 = -20y",
      "x^2 = 20y"
    ],
    "answer": 2,
    "hint": "The focus is on the y-axis, so the equation is of the form x^2 = 4ay or x^2 = -4ay.",
    "explanation": "The focus is at (0, -5) and directrix is y = 5, so the parabola opens downwards. a = 5, so the equation is x^2 = -20y."
  },
  {
    "question": "What is the directrix of the parabola y^2 = 16x?",
    "options": [
      "x = -4",
      "x = 4",
      "y = -4",
      "y = 4"
    ],
    "answer": 0,
    "hint": "The standard form is y^2 = 4ax.",
    "explanation": "Comparing with y^2 = 4ax gives a = 4. The directrix is x = -a = -4."
  },
  {
    "question": "An ellipse has eccentricity 0.6 and its major axis is along the x-axis. If a = 10, what is the distance from the centre to each focus?",
    "options": [
      "4",
      "6",
      "8",
      "10"
    ],
    "answer": 1,
    "hint": "The distance from the centre to a focus is ae.",
    "explanation": "The distance is ae = 10 * 0.6 = 6."
  },
  {
    "question": "A hyperbola has eccentricity 2 and its transverse axis is along the x-axis. If a = 3, what is the distance from the centre to each focus?",
    "options": [
      "3",
      "4",
      "5",
      "6"
    ],
    "answer": 3,
    "hint": "The distance from the centre to a focus is ae.",
    "explanation": "The distance is ae = 3 * 2 = 6."
  },
  {
    "question": "Which conic section is formed when a plane cuts a cone parallel to the axis of the cone?",
    "options": [
      "Circle",
      "Ellipse",
      "Parabola",
      "Hyperbola"
    ],
    "answer": 3,
    "hint": "This plane cuts through both nappes.",
    "explanation": "A plane parallel to the axis cuts through both nappes, forming a hyperbola."
  }
]
;
