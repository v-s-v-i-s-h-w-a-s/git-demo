const { greet, calculateAge, formatDate, add, subtract } = require('../src/utils');

describe('Utils Functions', () => {
  describe('greet', () => {
    test('should return greeting message with name', () => {
      const result = greet('Alice');
      expect(result).toBe('Hello, Alice! Welcome to the Git workshop!');
    });

    test('should throw error for empty name', () => {
      expect(() => greet('')).toThrow('Name must be a non-empty string');
    });

    test('should throw error for non-string input', () => {
      expect(() => greet(123)).toThrow('Name must be a non-empty string');
    });
  });

  describe('calculateAge', () => {
    test('should calculate age correctly', () => {
      const currentYear = new Date().getFullYear();
      const birthYear = currentYear - 25;
      const result = calculateAge(birthYear);
      expect(result).toBe(25);
    });

    test('should throw error for future birth year', () => {
      const futureYear = new Date().getFullYear() + 1;
      expect(() => calculateAge(futureYear)).toThrow('Birth year cannot be in the future');
    });

    test('should throw error for non-number input', () => {
      expect(() => calculateAge('1990')).toThrow('Birth year must be a number');
    });
  });

  describe('formatDate', () => {
    test('should format date correctly', () => {
      const testDate = new Date('2024-01-15');
      const result = formatDate(testDate);
      expect(result).toBe('January 15, 2024');
    });

    test('should throw error for non-Date input', () => {
      expect(() => formatDate('2024-01-15')).toThrow('Input must be a Date object');
    });
  });

  describe('add', () => {
    test('should add two numbers correctly', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    test('should subtract two numbers correctly', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(1, 1)).toBe(0);
      expect(subtract(0, 5)).toBe(-5);
    });
  });
});
