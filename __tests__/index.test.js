import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';

test('json', () => {
  expect(gendiff('./__fixtures__/file1.json', './__fixtures__/file2.json')).toBe(result);
});

test('yml', () => {
  expect(gendiff('./__fixtures__/file1.yml', './__fixtures__/file2.yml')).toBe(result);
});

test('yaml', () => {
  expect(gendiff('./__fixtures__/file1.yaml', './__fixtures__/file2.yaml')).toBe(result);
});
