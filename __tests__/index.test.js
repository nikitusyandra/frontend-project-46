import { fileURLToPath } from 'url';
import { dirname } from 'path';
import gendiff from '../src/index.js';
import result from '../__fixtures__/result.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('json', () => {
  expect(gendiff('/__fixtures__/file1.json', '/__fixtures__/file2.json')).toBe(result);
});
