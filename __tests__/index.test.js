import { test, expect } from '@jest/globals';
import reverse from '../index.js';

test('reverse', () => {
  expect(reverse('hello')).toEqual('olleh');
  expect(reverse('')).toEqual('');
});
