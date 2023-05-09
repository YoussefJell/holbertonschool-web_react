import { getFullYear } from './utils.js';
import { getFooterCopy } from './utils.js';
import { getLatestNotification } from './utils.js';

test('getFullYear returns the correct year', () => {
  const currentYear = new Date().getFullYear();
  expect(getFullYear()).toBe(currentYear);
});


test('getFooterCopy returns correct string', () => {
  const trueCopy = "Holberton School";
  const falseCopy = "Holberton School main dashboard";

  expect(getFooterCopy(true)).toBe(trueCopy);
  expect(getFooterCopy(false)).toBe(falseCopy);
});


test('getLatestNotification returns correct string', () => {
  const latestNotification = getLatestNotification();
  expect(latestNotification).toContain("<strong>Urgent requirement</strong> - complete by EOD");
});
