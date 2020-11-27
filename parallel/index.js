const {
    taskOne,
    taskTwo
} = require('./tasks');

async function main() {
    try {
        console.time('Measuring time');
        const results = await Promise.all([taskOne(), taskTwo()]); //ejecucion de dos funciones en paralelo
        //guardara lo que devuelvan las funciones en un arreglo
        console.timeEnd('Measuring time');
        console.log('Task One returned ', results[0]);
        console.log('Task Two returned ', results[1]);

    } catch (e) {
        console.log(e);
    }



}

main();