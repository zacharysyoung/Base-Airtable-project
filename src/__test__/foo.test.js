/* globals test, expect */
import { fooBar } from '../foo';

test('Test the bar of foo', () => {
    expect(fooBar()).toStrictEqual({ bar: 42 });
});
