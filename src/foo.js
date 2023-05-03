/**
 * @typedef Bar
 * @property {number} bar
 */

/**
 * @return {Bar}
 */
function fooBar() {
    return { bar: 42 };
}
/**
 * @typedef Baz
 * @property {number} baz
 */

/**
 * @return {Baz}
 */
function fooBaz() {
    return { baz: 42 };
}

export { fooBar, fooBaz };
