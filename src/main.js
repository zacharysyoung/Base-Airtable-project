/* globals output */
import { fooBar, fooBaz } from './foo.js';

/**
 * Do the main thang.
 */
async function main() {
    // @ts-ignore
    output.text(fooBar());
    // @ts-ignore
    output.text(fooBaz());

    console.log('foobar');
}

await main();
