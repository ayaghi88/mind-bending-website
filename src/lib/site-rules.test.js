import { describe, expect, test } from 'bun:test';
import { scrollPageToTop } from './navigation-scroll';
import { appCreationAvailable } from './service-availability';

describe('Requested website rules', () => {
  test('every selected page resets vertical scroll to zero immediately', () => {
    const calls = [];
    scrollPageToTop({ scrollTo: (options) => calls.push(options) });
    expect(calls).toEqual([{ top: 0, left: 0, behavior: 'instant' }]);
  });

  test('app creation has no available booking slots', () => {
    expect(appCreationAvailable).toBe(false);
  });
});