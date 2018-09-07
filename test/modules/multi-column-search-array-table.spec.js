import {
  data,
  dataWithNullAndUndefined,
} from '../fixtures/data';
import {
  multiColumnSearchOtpionsIncludes as includes,
  multiColumnSearchOtpionsExact as exact,
} from '../fixtures/options';
import {
  expectedExactAr,
  expectedExactMark,
  expectedIncludesAa,
  expectedIncludesAr,
  expectedWithNullAndUndefined,
} from '../fixtures/expected-results';
import { multiColumnSearchArrayTable as search } from '../../src';

test('check if data[0...n].first includes "ar"', () => {
  const result = search(data, includes('ar'));

  expect(result).toEqual(expectedIncludesAr);
});

test('check if data[0...n].first includes "aa"', () => {
  const result = search(data, includes('aa'));

  expect(result).toEqual(expectedIncludesAa);
});

test('check if data[0...n].first is exact "ar"', () => {
  const result = search(data, exact('ar'));

  expect(result).toEqual(expectedExactAr);
});

test('check if data[0...n].first is exact "mark"', () => {
  const result = search(data, exact('mark'));

  expect(result).toEqual(expectedExactMark);
});

test('check exact with missing values (e.g. `null` and `undefined`)', () => {
  const result = search(dataWithNullAndUndefined, exact('mark'));

  expect(result).toEqual(expectedWithNullAndUndefined);
});

test('check includes with missing values (e.g. `null` and `undefined`)', () => {
  const result = search(dataWithNullAndUndefined, includes('m'));

  expect(result).toEqual(expectedWithNullAndUndefined);
});

test('throw error: data has to be array', () => {
  const result = () => search({}, exact('mark'));

  expect(result).toThrow('data has to be typeof: object data instanceof Array: true but got typeof: object data instanceof Array: false');
});

test('throw error: data has to contain objects', () => {
  const result = () => search([0], exact('mark'));

  expect(result).toThrow('data has to be an array of objects but data[0] got typeof: number');
});
