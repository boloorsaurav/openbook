---
chapter: 11
title: Introduction to Three Dimensional Geometry
route: /read/grade-11/ch11
read_time: 30
---

## Sections

### 1: Introduction
eyebrow: Introduction

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- To locate a point in a plane, two intersecting mutually perpendicular lines (coordinate axes) and two numbers (coordinates) are needed.
- To locate a point in space, three numbers representing perpendicular distances from three mutually perpendicular planes are needed.
- The three planes are the floor of the room and two adjacent walls.
- A point in space has three coordinates.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- None.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "Two Dimensions vs. Three Dimensions" | content: "In a plane, two coordinates locate a point. In space, three coordinates are required, representing distances from three mutually perpendicular planes."

**Widget idea:** An interactive 3D room visualization showing a point (e.g., a ball or bulb) with its three perpendicular distances to the floor and two walls labeled.

**Key terms:** three dimensional geometry, coordinate axes, coordinate planes, coordinates

---

### 2: Coordinate Axes and Coordinate Planes in Three Dimensional Space
eyebrow: Section 11.2

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- Three mutually perpendicular planes intersect at a point O.
- These planes intersect along three lines called the x-axis (X'OX), y-axis (Y'OY), and z-axis (Z'OZ).
- These three lines constitute the rectangular coordinate system.
- The three coordinate planes are the XY-plane (XOY), YZ-plane (YOZ), and ZX-plane (ZOX).
- The XOY plane is taken as the plane of the paper; the Z'OZ line is perpendicular to it.
- Distances measured from the XY-plane upward along OZ are positive; downward along OZ' are negative.
- Distances measured to the right of the ZX-plane along OY are positive; to the left along OY' are negative.
- Distances measured in front of the YZ-plane along OX are positive; to the back along OX' are negative.
- The point O is called the origin.
- The three coordinate planes divide space into eight parts called octants.
- The eight octants are named XOYZ, X'OYZ, X'OY'Z, XOY'Z, XOYZ', X'OYZ', X'OY'Z', and XOY'Z', and denoted by I, II, III, IV, V, VI, VII, and VIII, respectively.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- None.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "The Three Coordinate Planes" | content: "The XY-plane, YZ-plane, and ZX-plane are the three mutually perpendicular planes that form the foundation of the 3D coordinate system."
- title: "The Eight Octants" | content: "The three coordinate planes divide space into eight regions called octants, each with a unique combination of signs for the x, y, and z coordinates."

**Widget idea:** An interactive 3D model showing the three axes, three coordinate planes, and the eight octants, with labels.

**Key terms:** x-axis, y-axis, z-axis, rectangular coordinate system, XY-plane, YZ-plane, ZX-plane, origin, octants

---

### 3: Coordinates of a Point in Space
eyebrow: Section 11.3

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- To find the coordinates of a point P in space, drop a perpendicular PM to the XY-plane, with M as the foot.
- From M, draw a perpendicular ML to the x-axis, meeting it at L.
- Let OL be x, LM be y, and MP be z. Then (x, y, z) are the coordinates of point P.
- There is a one-to-one correspondence between points in space and ordered triplets (x, y, z) of real numbers.
- Alternatively, through point P, draw three planes parallel to the coordinate planes, meeting the x-axis, y-axis, and z-axis at points A, B, and C, respectively.
- Let OA = x, OB = y, and OC = z. Then the coordinates of P are (x, y, z).
- The coordinates of the origin O are (0, 0, 0).
- The coordinates of any point on the x-axis are (x, 0, 0).
- The coordinates of any point in the YZ-plane are (0, y, z).
- The sign of the coordinates determines the octant in which a point lies.
- Table 11.1 shows the signs of coordinates in the eight octants: Octant I (+, +, +); Octant II (-, +, +); Octant III (-, -, +); Octant IV (+, -, +); Octant V (+, +, -); Octant VI (-, +, -); Octant VII (-, -, -); Octant VIII (+, -, -).

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 1: Given P is (2,4,5), find the coordinates of F in Fig 11.3; the solution shows that since F lies on the xz-plane, its y-coordinate is 0, so F is (2,0,5).
- Example 2: Determine the octant for points (-3,1,2) and (-3,1,-2); the solution uses Table 11.1 to find they lie in octant II and octant VI, respectively.

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "One-to-One Correspondence" | content: "Every point in space corresponds to exactly one ordered triplet (x, y, z), and every ordered triplet corresponds to exactly one point in space."
- title: "Signs in Octants" | content: "The signs of the x, y, and z coordinates of a point determine which of the eight octants it lies in. For example, a point with all positive coordinates lies in octant I."

**Widget idea:** An interactive 3D point plotter where users can input x, y, z coordinates and see the point plotted, its perpendicular distances to the planes, and the octant it lies in.

**Key terms:** ordered triplet, coordinates, foot of perpendicular

---

### 4: Distance between Two Points
eyebrow: Section 11.4

**Concepts (list every distinct rule, definition, and pattern — be exhaustive):**
- The distance between two points P(x1, y1, z1) and Q(x2, y2, z2) is given by the formula: PQ = square root of [(x2 - x1) squared + (y2 - y1) squared + (z2 - z1) squared].
- The distance between the origin O(0,0,0) and a point Q(x2, y2, z2) is: OQ = square root of [x2 squared + y2 squared + z2 squared].
- Points are collinear if the sum of the distances between two pairs of points equals the distance between the third pair.

**Worked examples (brief, 1 sentence each — only if the source walks through a solution):**
- Example 3: Find the distance between P(1, -3, 4) and Q(-4, 1, 2); the solution applies the distance formula to get 3 times the square root of 5 units.
- Example 4: Show that points P(-2, 3, 5), Q(1, 2, 3), and R(7, 0, -1) are collinear; the solution calculates PQ, QR, and PR, and shows that PQ + QR = PR.
- Example 5: Determine if points A(3,6,9), B(10,20,30), and C(25,-41,5) form a right-angled triangle; the solution calculates AB squared, BC squared, and CA squared, and finds that CA squared + AB squared does not equal BC squared, so it is not a right-angled triangle.
- Example 6: Find the equation of the set of points P such that PA squared + PB squared = 2k squared, where A and B are (3,4,5) and (-1,3,-7); the solution uses the distance formula and simplifies to 2x squared + 2y squared + 2z squared - 4x - 14y + 4z = 2k squared - 109.
- Example 7 (Miscellaneous): Show that points A(1,2,3), B(-1,-2,-1), C(2,3,2), and D(4,7,6) are vertices of a parallelogram but not a rectangle; the solution shows AB = CD and BC = AD, then shows diagonals AC and BD are unequal.
- Example 8 (Miscellaneous): Find the equation of the set of points P such that its distances from A(3,4,-5) and B(-2,1,4) are equal; the solution sets PA = PB and simplifies to 10x + 6y - 18z - 29 = 0.
- Example 9 (Miscellaneous): Find the coordinates of point C given the centroid of triangle ABC is (1,1,1) and A and B are (3,-5,7) and (-1,7,-6); the solution uses the centroid formula to find C is (1,1,2).

**Callout cards (1–3 per section — pick genuinely important insights):**
- title: "3D Distance Formula" | content: "The distance between two points in space is the square root of the sum of the squares of the differences in their x, y, and z coordinates."
- title: "Collinearity Test" | content: "Three points are collinear if the sum of the distances between two pairs equals the distance between the third pair."

**Widget idea:** An interactive 3D distance calculator where users can input two points and see the distance calculated and visualized as the diagonal of a rectangular box.

**Key terms:** distance formula, collinear, centroid

---

## Quiz Questions (exactly 25)
```json
[
  {
    "question": "How many mutually perpendicular planes are required to define the position of a point in three-dimensional space?",
    "options": ["One", "Two", "Three", "Four"],
    "answer": 2,
    "hint": "Think about the number of distances needed to locate a point in a room.",
    "explanation": "To locate a point in space, we need three perpendicular distances from three mutually perpendicular planes, such as the floor and two adjacent walls."
  },
  {
    "question": "What are the three coordinate axes in a rectangular coordinate system called?",
    "options": ["x-axis, y-axis, and z-axis", "X-axis, Y-axis, and Z-axis", "x-axis, y-axis, and w-axis", "a-axis, b-axis, and c-axis"],
    "answer": 0,
    "hint": "The axes are named after the standard variables used in algebra.",
    "explanation": "The three mutually perpendicular lines are called the x-axis, y-axis, and z-axis."
  },
  {
    "question": "Which of the following is NOT one of the three coordinate planes?",
    "options": ["XY-plane", "YZ-plane", "XZ-plane", "XW-plane"],
    "answer": 3,
    "hint": "The planes are defined by pairs of the three axes.",
    "explanation": "The three coordinate planes are XY-plane, YZ-plane, and ZX-plane. There is no XW-plane."
  },
  {
    "question": "How many octants are formed by the three coordinate planes?",
    "options": ["Four", "Six", "Eight", "Twelve"],
    "answer": 2,
    "hint": "Consider how many regions three planes can divide space into.",
    "explanation": "The three coordinate planes divide space into eight parts, known as octants."
  },
  {
    "question": "What are the coordinates of the origin in a three-dimensional coordinate system?",
    "options": ["(1,1,1)", "(0,0,0)", "(0,0)", "(1,0,0)"],
    "answer": 1,
    "hint": "The origin is the point where all three axes intersect.",
    "explanation": "The origin O has coordinates (0,0,0)."
  },
  {
    "question": "A point lies on the x-axis. What are its y and z coordinates?",
    "options": ["Both are zero", "Both are one", "y is zero, z is one", "y is one, z is zero"],
    "answer": 0,
    "hint": "On the x-axis, the point has no displacement along the y or z directions.",
    "explanation": "Any point on the x-axis has coordinates of the form (x, 0, 0), so both y and z are zero."
  },
  {
    "question": "A point lies in the YZ-plane. What can you say about its x-coordinate?",
    "options": ["It is zero", "It is positive", "It is negative", "It is any real number"],
    "answer": 0,
    "hint": "The YZ-plane is defined by x = 0.",
    "explanation": "Any point in the YZ-plane has coordinates of the form (0, y, z), so its x-coordinate is zero."
  },
  {
    "question": "In which octant does the point (4, -2, 3) lie?",
    "options": ["Octant I", "Octant II", "Octant IV", "Octant VIII"],
    "answer": 2,
    "hint": "Check the signs of the coordinates: x is positive, y is negative, z is positive.",
    "explanation": "According to Table 11.1, a point with signs (+, -, +) lies in Octant IV."
  },
  {
    "question": "In which octant does the point (-3, 1, -2) lie?",
    "options": ["Octant II", "Octant III", "Octant VI", "Octant VII"],
    "answer": 2,
    "hint": "Check the signs: x is negative, y is positive, z is negative.",
    "explanation": "According to Table 11.1, a point with signs (-, +, -) lies in Octant VI."
  },
  {
    "question": "What is the distance between the points (2, 3, 5) and (4, 3, 1)?",
    "options": ["2 times square root of 5", "square root of 20", "2", "square root of 24"],
    "answer": 0,
    "hint": "Use the distance formula: square root of [(x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2].",
    "explanation": "The distance is square root of [(4-2)^2 + (3-3)^2 + (1-5)^2] = square root of [4 + 0 + 16] = square root of 20 = 2 times square root of 5."
  },
  {
    "question": "What is the distance from the origin to the point (3, 4, 12)?",
    "options": ["13", "square root of 169", "25", "square root of 25"],
    "answer": 0,
    "hint": "Use the formula for distance from origin: square root of (x^2 + y^2 + z^2).",
    "explanation": "The distance is square root of [3^2 + 4^2 + 12^2] = square root of [9 + 16 + 144] = square root of 169 = 13."
  },
  {
    "question": "Three points P, Q, and R are collinear. If PQ = 5 and QR = 7, what is PR?",
    "options": ["2", "12", "square root of 74", "Cannot be determined"],
    "answer": 1,
    "hint": "For collinear points, the sum of the distances between two pairs equals the distance between the third pair.",
    "explanation": "If P, Q, and R are collinear, then PQ + QR = PR, so PR = 5 + 7 = 12."
  },
  {
    "question": "Which of the following sets of points are collinear?",
    "options": ["(1,2,3), (2,3,4), (3,4,5)", "(1,1,1), (2,2,2), (3,3,3)", "(0,0,0), (1,0,0), (0,1,0)", "(1,0,0), (0,1,0), (0,0,1)"],
    "answer": 1,
    "hint": "Check if the sum of distances between two pairs equals the distance between the third pair.",
    "explanation": "For points (1,1,1), (2,2,2), and (3,3,3), the distances are square root of 3, square root of 3, and 2 times square root of 3, and square root of 3 + square root of 3 = 2 times square root of 3, so they are collinear."
  },
  {
    "question": "The points A(1,2,3), B(2,3,4), and C(3,4,5) form what type of triangle?",
    "options": ["Equilateral", "Isosceles", "Right-angled", "Collinear"],
    "answer": 3,
    "hint": "Calculate the distances AB, BC, and AC and see if they satisfy the collinearity condition.",
    "explanation": "AB = square root of 3, BC = square root of 3, AC = 2 times square root of 3. Since AB + BC = AC, the points are collinear, not a triangle."
  },
  {
    "question": "If the distance between points (x, 2, 3) and (1, 2, 3) is 4, what is the value of x?",
    "options": ["5 or -3", "5 only", "-3 only", "4 or -4"],
    "answer": 0,
    "hint": "The y and z coordinates are the same, so the distance depends only on the difference in x.",
    "explanation": "The distance is |x - 1| = 4, so x - 1 = 4 or x - 1 = -4, giving x = 5 or x = -3."
  },
  {
    "question": "What is the equation of the set of points equidistant from A(1,2,3) and B(3,2,-1)?",
    "options": ["x - 2z = 0", "x + z = 0", "2x - 4z = 0", "x - z = 0"],
    "answer": 0,
    "hint": "Set the squared distances equal and simplify.",
    "explanation": "Setting (x-1)^2 + (y-2)^2 + (z-3)^2 = (x-3)^2 + (y-2)^2 + (z+1)^2 and simplifying gives x - 2z = 0."
  },
  {
    "question": "A point P moves such that its distance from A(0,0,0) is always 5. What is the equation of the set of points P?",
    "options": ["x^2 + y^2 + z^2 = 25", "x + y + z = 5", "x^2 + y^2 + z^2 = 5", "x + y + z = 25"],
    "answer": 0,
    "hint": "The distance from the origin is square root of (x^2 + y^2 + z^2).",
    "explanation": "The condition is square root of (x^2 + y^2 + z^2) = 5, so squaring both sides gives x^2 + y^2 + z^2 = 25."
  },
  {
    "question": "If the centroid of a triangle with vertices (1,2,3), (4,5,6), and (x,y,z) is (2,3,4), what is the value of x?",
    "options": ["1", "2", "3", "4"],
    "answer": 0,
    "hint": "The centroid is the average of the coordinates of the vertices.",
    "explanation": "The x-coordinate of the centroid is (1+4+x)/3 = 2, so 5 + x = 6, giving x = 1."
  },
  {
    "question": "Which of the following points lies in Octant VII?",
    "options": ["(-1, -2, -3)", "(1, 2, -3)", "(-1, 2, -3)", "(1, -2, -3)"],
    "answer": 0,
    "hint": "Octant VII has all three coordinates negative.",
    "explanation": "According to Table 11.1, Octant VII has signs (-, -, -), so the point (-1, -2, -3) lies in it."
  },
  {
    "question": "What is the distance between the points (a, b, c) and (a, b, -c)?",
    "options": ["2c", "2 times the absolute value of c", "c", "0"],
    "answer": 1,
    "hint": "The x and y coordinates are the same, so the distance depends only on the difference in z.",
    "explanation": "The distance is square root of [(a-a)^2 + (b-b)^2 + (-c - c)^2] = square root of [0 + 0 + (-2c)^2] = square root of (4c^2) = 2 times the absolute value of c."
  },
  {
    "question": "If a point has coordinates (0, 5, 0), where is it located?",
    "options": ["On the x-axis", "On the y-axis", "On the z-axis", "In the XY-plane"],
    "answer": 1,
    "hint": "A point on the y-axis has x and z coordinates equal to zero.",
    "explanation": "The point (0, 5, 0) has x=0 and z=0, so it lies on the y-axis."
  },
  {
    "question": "The points (1,2,3), (2,3,4), and (3,4,5) are:",
    "options": ["Vertices of an equilateral triangle", "Vertices of a right-angled triangle", "Collinear", "Vertices of an isosceles triangle"],
    "answer": 2,
    "hint": "Calculate the distances between each pair of points.",
    "explanation": "The distances are square root of 3, square root of 3, and 2 times square root of 3. Since the sum of the first two equals the third, the points are collinear."
  },
  {
    "question": "What is the distance between the points (1, -3, 4) and (-4, 1, 2)?",
    "options": ["3 times square root of 5", "square root of 45", "square root of 41", "square root of 29"],
    "answer": 0,
    "hint": "Apply the distance formula: square root of [(x2-x1)^2 + (y2-y1)^2 + (z2-z1)^2].",
    "explanation": "The distance is square root of [(-4-1)^2 + (1+3)^2 + (2-4)^2] = square root of [25 + 16 + 4] = square root of 45 = 3 times square root of 5."
  },
  {
    "question": "If the points (2,3,5), (1,2,3), and (7,0,-1) are collinear, what is the relationship between the distances PQ, QR, and PR?",
    "options": ["PQ + QR = PR", "PQ + PR = QR", "QR + PR = PQ", "PQ = QR = PR"],
    "answer": 0,
    "hint": "For collinear points, one distance equals the sum of the other two.",
    "explanation": "For points P(2,3,5), Q(1,2,3), and R(7,0,-1), PQ = square root of 14, QR = 2 times square root of 14, and PR = 3 times square root of 14, so PQ + QR = PR."
  },
  {
    "question": "What is the equation of the set of points P such that PA = PB, where A is (3,4,-5) and B is (-2,1,4)?",
    "options": ["10x + 6y - 18z - 29 = 0", "10x - 6y + 18z - 29 = 0", "10x + 6y + 18z + 29 = 0", "10x - 6y - 18z + 29 = 0"],
    "answer": 0,
    "hint": "Set the squared distances equal and simplify the equation.",
    "explanation": "Setting (x-3)^2 + (y-4)^2 + (z+5)^2 = (x+2)^2 + (y-1)^2 + (z-4)^2 and simplifying gives 10x + 6y - 18z - 29 = 0."
  }
]
```
