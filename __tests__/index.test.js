import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';
import resultPlain from '../__fixtures__/resultPlain.js';
import resultJSON from '../__fixtures__/resultJson.js';

test('json', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(result);
});

test('yml', () => {
  expect(gendiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(result);
});

test('yaml', () => {
  expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(result);
});

test('json', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'plain')).toBe(resultPlain);
});

test('yml', () => {
  expect(gendiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'plain')).toBe(resultPlain);
});

test('yaml', () => {
  expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'plain')).toBe(resultPlain);
});

test('json', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json', 'json')).toBe(resultJSON);
});

test('yml', () => {
  expect(gendiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml', 'json')).toBe(resultJSON);
});

test('yaml', () => {
  expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml', 'json')).toBe(resultJSON);
});
