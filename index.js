const {
    solution1,
    solution2,
    solution3,
    solution4,
    solution5,
    solution6,
} = require('./solutions')
const { benchmark } = require("./benchmark");

// loopTimes is variable for setting looping times
const loopTimes = 10000000;

// benchmarkActive is a variable to switch if want see result of benchmark
// set true to see solution result benchmark in console
const benchmarkActive = true;

// logSolutionActive is a variable to switch if want see result of solution each function
// set true to see solution result in console
const logSolutionActive = true;

// total function
const totalFunc = 100

// testWord is a variable to set testing wording to function
const testWord = "h!a&@.loya";

// list existing function
const solution = {
    1: solution1,
    2: solution2,
    3: solution3,
    4: solution4,
    5: solution5,
    6: solution6
};

// reverse without special character
// example:
// input: tiket.com
// output: mocte.kit

// example:
// input: t!ke&.com
// output: m!oc&.ekt

// TEST SOLUTION
if (logSolutionActive) {
    for (let i = 1; i <= totalFunc; i++) {
        if (solution.hasOwnProperty(i)) {
            console.log(
                solution[i](testWord),
                `RESULT SOLUTION ${i}`
            ); // a!y&@.olah
        }
    }
}

// BENCHMARK
if (benchmarkActive) {
    // benchmark solution 1
    // SOLUTION 4 improvent function from solution 2
    // SOLUTION 5 improvent function from solution 1
    // SOLUTION 6 improvent function from solution 2 and 3
    for (let i = 1; i <= totalFunc; i++) {
        if (solution.hasOwnProperty(i)) {
            console.log(
                benchmark(solution[i],
                    testWord,
                    loopTimes
                ),
                `=> SOLUTION ${i}`
            );
        }
    }
}