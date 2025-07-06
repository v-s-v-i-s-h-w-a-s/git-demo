/**
 * Utility functions for the workshop demo
 */

/**
 * Greet a person with a welcome message
 * @param {string} name - Person's name
 * @returns {string} Greeting message
 */
function greet(name) {
  if (!name || typeof name !== 'string') {
    throw new Error('Name must be a non-empty string');
  }
  return `Hello, ${name}! Welcome to the Git workshop!`;
}

/**
 * Calculate age based on birth year
 * @param {number} birthYear - Year of birth
 * @returns {number} Current age
 */
function calculateAge(birthYear) {
  if (!birthYear || typeof birthYear !== 'number') {
    throw new Error('Birth year must be a number');
  }

  const currentYear = new Date().getFullYear();

  if (birthYear > currentYear) {
    throw new Error('Birth year cannot be in the future');
  }

  return currentYear - birthYear;
}

/**
 * Format a date to a readable string
 * @param {Date} date - Date object
 * @returns {string} Formatted date string
 */
function formatDate(date) {
  if (!(date instanceof Date)) {
    throw new Error('Input must be a Date object');
  }

  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

/**
 * Add two numbers (students can extend this)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Sum of a and b
 */
function add(a, b) {
  return a + b;
}

/**
 * Subtract two numbers (students can extend this)
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} Difference of a and b
 */
function subtract(a, b) {
  return a - b;
}

module.exports = {
  greet,
  calculateAge,
  formatDate,
  add,
  subtract
};
