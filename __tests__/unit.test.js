// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
// || isPhoneNumber testing
test('7 digit phone num', () => {
  expect(isPhoneNumber("123-4567")).toBe(true);
});

test('10 digit phone num', () => {
  expect(isPhoneNumber("123-123-4567")).toBe(true);
});

test('non number', () => {
  expect(isPhoneNumber("abc")).toBe(false);
});

test('invalid phone number', () => {
  expect(isPhoneNumber("123-123-456")).toBe(false);
});

// || isEmail testing
test('simple email pattern x@y.z', () => {
  expect(isEmail("test@gmail.com")).toBe(true);
});

test('allow numbers in email', () => {
  expect(isEmail("test123@gmail.com")).toBe(true);
});

test('invalid format with x@z', () => {
  expect(isEmail("test@gmailcom")).toBe(false);
});

test('email with two @s', () => {
  expect(isEmail("te@st@gmail.com")).toBe(false);
});

// || isStrongPassword testing
test('valid strong password', () => {
  expect(isStrongPassword("abcBfsad")).toBe(true);
});

test('valid strong password with numbers', () => {
  expect(isStrongPassword("abcB94fsad3")).toBe(true);
});

test('password with invalid length', () => {
  expect(isStrongPassword("abc")).toBe(false);
});

test('password with invalid characters', () => {
  expect(isStrongPassword("abc#def")).toBe(false);
});

// || isDate testing
test('valid date', () => {
  expect(isDate("12/25/2025")).toBe(true);
});

test('valid date with leading zeroes', () => {
  expect(isDate("09/01/1980")).toBe(true);
});

test('invalid year format', () => {
  expect(isDate("09/01/25")).toBe(false);
});

test('invalid date format', () => {
  expect(isDate("09-01-1980")).toBe(false);
});

// isHexColor testing
test('valid 6 digit hex code', () => {
  expect(isHexColor("#ffffff")).toBe(true);
});

test('valid 3 digit hex code', () => {
  expect(isHexColor("#fff")).toBe(true);
});

test('invalid hex code with 5 digits', () => {
  expect(isHexColor("#fff12")).toBe(false);
});

test('invalid hex code with invalid digits', () => {
  expect(isHexColor("#fffggg")).toBe(false);
});