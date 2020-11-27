const util = require('util');
const sleep = util.promisify(setTimeout);

module.exports = {
    async taskOne() {
        try {
            throw new Error('SOME PROBLEM');

            await sleep(4000);
            return 'One Value';

        } catch (e) {
            console.log(e);
        }


    },
    async taskTwo() {

        await sleep(2000);
        return 'Two value';
    }
};