import path from 'node:path';
import gendiff from '../src/index.js';
import resultStylish from '../__fixtures__/result.js';
import resultJSON from '../__fixtures__/resultJson.js';
import resultPlain from '../__fixtures__/resultPlain.js';

const testList = [
  'yml',
  'json',
];

const resolvePath = (filePath) => path.resolve(process.cwd(), `__fixtures__/${filePath}`);

describe('gendiff', () => {
  test.each(testList)('gendiff %s', (format) => {
    const filepath1 = resolvePath(`file1.${format}`);
    const filepath2 = resolvePath(`file2.${format}`);

    expect(gendiff(filepath1, filepath2)).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'stylish')).toEqual(resultStylish);
    expect(gendiff(filepath1, filepath2, 'plain')).toEqual(resultPlain);
    expect(gendiff(filepath1, filepath2, 'json')).toEqual(resultJSON);
  });
});
