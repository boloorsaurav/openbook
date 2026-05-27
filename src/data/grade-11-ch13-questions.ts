import { QuizQuestion } from "@/components/widgets/Quiz";

export const GRADE_11_CH13_QUESTIONS: QuizQuestion[] = 
[
  {
    "question": "Two datasets have the same mean but different ranges. What does this imply?",
    "options": [
      "The datasets have the same dispersion.",
      "The datasets have different dispersions.",
      "The datasets have the same median.",
      "The datasets have the same mode."
    ],
    "answer": 1,
    "hint": "Range is a measure of dispersion.",
    "explanation": "The range is the difference between the maximum and minimum values. If two datasets have the same mean but different ranges, their spreads are different."
  },
  {
    "question": "What is the range of the data: 12, 15, 8, 22, 10, 18?",
    "options": [
      "10",
      "12",
      "14",
      "22"
    ],
    "answer": 2,
    "hint": "Range = Maximum value – Minimum value.",
    "explanation": "The maximum value is 22 and the minimum is 8. The range is 22 – 8 = 14."
  },
  {
    "question": "Why is the sum of deviations from the mean not used as a measure of dispersion?",
    "options": [
      "It is always zero.",
      "It is always positive.",
      "It is always negative.",
      "It is too large."
    ],
    "answer": 0,
    "hint": "Consider the definition of the mean.",
    "explanation": "The sum of deviations from the mean is always zero because the positive and negative deviations cancel out."
  },
  {
    "question": "For the data 4, 8, 12, 16, 20, what is the mean deviation about the mean?",
    "options": [
      "4.0",
      "4.8",
      "5.6",
      "6.4"
    ],
    "answer": 1,
    "hint": "First find the mean, then the absolute deviations, then their average.",
    "explanation": "The mean is 12. The absolute deviations are 8, 4, 0, 4, 8. Their sum is 24. The mean deviation is 24/5 = 4.8."
  },
  {
    "question": "What is the median of the data: 5, 2, 9, 1, 7, 6?",
    "options": [
      "5",
      "5.5",
      "6",
      "6.5"
    ],
    "answer": 1,
    "hint": "Arrange the data in ascending order first.",
    "explanation": "Arranged in order: 1, 2, 5, 6, 7, 9. Since there are 6 (even) observations, the median is the mean of the 3rd and 4th values: (5+6)/2 = 5.5."
  },
  {
    "question": "For a discrete frequency distribution, what does 'N' represent in the formula for mean deviation?",
    "options": [
      "The number of distinct values.",
      "The sum of all frequencies.",
      "The mean of the data.",
      "The median of the data."
    ],
    "answer": 1,
    "hint": "N is used as a divisor in the formula.",
    "explanation": "N is the sum of all frequencies, i.e., the total number of observations."
  },
  {
    "question": "In a continuous frequency distribution, what value is used to represent each class in calculations of mean and mean deviation?",
    "options": [
      "The lower limit of the class.",
      "The upper limit of the class.",
      "The mid-point of the class.",
      "The frequency of the class."
    ],
    "answer": 2,
    "hint": "This is a standard assumption for grouped data.",
    "explanation": "The mid-point of each class is used as the representative value (xi) for that class."
  },
  {
    "question": "What is the main limitation of mean deviation that leads to the use of standard deviation?",
    "options": [
      "It is difficult to calculate.",
      "It uses absolute values and cannot be used in further algebra.",
      "It is always larger than the standard deviation.",
      "It is only defined for ungrouped data."
    ],
    "answer": 1,
    "hint": "Think about the mathematical properties of absolute values.",
    "explanation": "Mean deviation uses absolute values, which are not easily manipulated algebraically, unlike the squares used in variance and standard deviation."
  },
  {
    "question": "The variance of a dataset is 25. What is the standard deviation?",
    "options": [
      "5",
      "25",
      "625",
      "12.5"
    ],
    "answer": 0,
    "hint": "Standard deviation is the square root of the variance.",
    "explanation": "Standard deviation = sqrt(variance) = sqrt(25) = 5."
  },
  {
    "question": "If each observation in a dataset is multiplied by 3, what happens to the variance?",
    "options": [
      "It is multiplied by 3.",
      "It is multiplied by 9.",
      "It remains the same.",
      "It is divided by 3."
    ],
    "answer": 1,
    "hint": "Consider the effect on the deviations from the mean.",
    "explanation": "If each observation is multiplied by 3, the variance is multiplied by 3^2 = 9."
  },
  {
    "question": "If a constant 5 is added to every observation in a dataset, what happens to the standard deviation?",
    "options": [
      "It increases by 5.",
      "It decreases by 5.",
      "It remains the same.",
      "It is multiplied by 5."
    ],
    "answer": 2,
    "hint": "Think about how the spread of the data changes.",
    "explanation": "Adding a constant shifts all data points, but the spread (dispersion) remains unchanged, so the standard deviation is unchanged."
  },
  {
    "question": "For the data: 2, 4, 6, 8, 10, what is the sum of squares of deviations from the mean?",
    "options": [
      "8",
      "20",
      "40",
      "80"
    ],
    "answer": 2,
    "hint": "The mean is 6. Find each deviation, square it, and sum them.",
    "explanation": "Deviations: -4, -2, 0, 2, 4. Squares: 16, 4, 0, 4, 16. Sum = 40."
  },
  {
    "question": "In the shortcut method for standard deviation, what does the variable 'yi' represent?",
    "options": [
      "The original observation.",
      "The frequency of a class.",
      "The step-deviation: (xi – A)/h.",
      "The cumulative frequency."
    ],
    "answer": 2,
    "hint": "It is a transformed variable to simplify calculations.",
    "explanation": "yi = (xi – A)/h, where A is the assumed mean and h is the class width."
  },
  {
    "question": "A student calculates the mean of 10 observations as 20. Later, she finds that one observation 30 was incorrectly read as 20. What is the correct mean?",
    "options": [
      "19",
      "20",
      "21",
      "22"
    ],
    "answer": 2,
    "hint": "Find the incorrect sum, correct it, then recalculate the mean.",
    "explanation": "Incorrect sum = 10 * 20 = 200. Correct sum = 200 – 20 + 30 = 210. Correct mean = 210/10 = 21."
  },
  {
    "question": "What is the median class for a continuous frequency distribution?",
    "options": [
      "The class with the highest frequency.",
      "The first class.",
      "The class whose cumulative frequency is just greater than or equal to N/2.",
      "The last class."
    ],
    "answer": 2,
    "hint": "The median is the middle value.",
    "explanation": "The median class is the class interval where the cumulative frequency first reaches or exceeds N/2."
  },
  {
    "question": "The mean deviation about the mean is always:",
    "options": [
      "Greater than or equal to the standard deviation.",
      "Less than or equal to the standard deviation.",
      "Equal to the standard deviation.",
      "Unrelated to the standard deviation."
    ],
    "answer": 1,
    "hint": "Consider the effect of squaring versus taking absolute values.",
    "explanation": "The standard deviation gives more weight to larger deviations due to squaring, so it is generally greater than or equal to the mean deviation."
  },
  {
    "question": "For the data: 10, 20, 30, 40, 50, what is the mean deviation about the median?",
    "options": [
      "10",
      "12",
      "15",
      "20"
    ],
    "answer": 0,
    "hint": "The median is 30. Find the absolute deviations from 30.",
    "explanation": "Absolute deviations: 20, 10, 0, 10, 20. Sum = 60. Mean deviation = 60/5 = 12."
  },
  {
    "question": "What is the variance of the first n natural numbers?",
    "options": [
      "(n^2 – 1)/12",
      "(n^2 + 1)/12",
      "(n – 1)/2",
      "(n + 1)/2"
    ],
    "answer": 0,
    "hint": "Recall the formulas for sum and sum of squares of first n natural numbers.",
    "explanation": "The variance of the first n natural numbers is (n^2 – 1)/12."
  },
  {
    "question": "If the standard deviation of a dataset is 0, what can you conclude?",
    "options": [
      "All observations are equal.",
      "The mean is 0.",
      "The data is symmetric.",
      "The range is 0."
    ],
    "answer": 0,
    "hint": "Standard deviation measures spread.",
    "explanation": "A standard deviation of 0 means there is no spread, so all observations must be equal."
  },
  {
    "question": "In the formula for mean deviation about the median for grouped data, what does 'M' represent?",
    "options": [
      "The mean of the data.",
      "The mode of the data.",
      "The median of the data.",
      "The mid-point of a class."
    ],
    "answer": 2,
    "hint": "It is the central value about which the deviation is measured.",
    "explanation": "M represents the median of the data."
  },
  {
    "question": "Which measure of dispersion is considered the most reliable and is widely used in statistical analysis?",
    "options": [
      "Range",
      "Mean deviation",
      "Standard deviation",
      "Quartile deviation"
    ],
    "answer": 2,
    "hint": "This measure is based on squares of deviations and has desirable mathematical properties.",
    "explanation": "Standard deviation is the most widely used and reliable measure of dispersion because it uses all data points and is algebraically tractable."
  },
  {
    "question": "The mean and standard deviation of 5 observations are 10 and 2, respectively. If one observation 12 is removed, what is the new mean?",
    "options": [
      "8.5",
      "9.5",
      "10.5",
      "11.5"
    ],
    "answer": 1,
    "hint": "Find the sum of all 5 observations, subtract the removed value, then divide by 4.",
    "explanation": "Sum of 5 observations = 5 * 10 = 50. New sum = 50 – 12 = 38. New mean = 38/4 = 9.5."
  },
  {
    "question": "What is the first step in calculating the mean deviation about the median for ungrouped data?",
    "options": [
      "Find the mean.",
      "Find the median.",
      "Find the absolute deviations.",
      "Arrange the data in ascending order."
    ],
    "answer": 3,
    "hint": "The median is defined based on ordered data.",
    "explanation": "The first step is to arrange the data in ascending or descending order to find the median."
  },
  {
    "question": "For a symmetric distribution, the mean deviation about the mean is equal to:",
    "options": [
      "The standard deviation.",
      "Half the standard deviation.",
      "Approximately 0.8 times the standard deviation.",
      "Twice the standard deviation."
    ],
    "answer": 2,
    "hint": "This is a known approximate relationship for normal-like distributions.",
    "explanation": "For a symmetric distribution, the mean deviation about the mean is approximately 0.8 times the standard deviation."
  },
  {
    "question": "If the variance of a dataset is 36 and each observation is divided by 2, what is the new variance?",
    "options": [
      "6",
      "9",
      "18",
      "36"
    ],
    "answer": 1,
    "hint": "Dividing by a constant is like multiplying by its reciprocal.",
    "explanation": "Dividing by 2 is the same as multiplying by 1/2. The new variance is (1/2)^2 * 36 = (1/4)*36 = 9."
  }
]
;
