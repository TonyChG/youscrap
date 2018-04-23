/*
 *  Github/TonyChG
 *  main.js
 *  Description:
**/

const Tree = require('./tree');
const format = require('./format');
const { requestAllPage } = require('./scrapper');

module.exports = async (options) => {
    const tree = new Tree(options.target);

    do {
        try {
            await requestAllPage(tree);
        } catch (e) {
            console.error(e);
            process.exit(42);
        }
        options.depth--;
    } while (options.depth > 0)
}
