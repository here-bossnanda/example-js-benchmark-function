const {
    solution1,
    solution2,
    solution3,
    solution4,
    solution5,
    solution6,
    solution7,
    solution8,
    solution9,
    solution10,
    solution11,
} = require("./solutions");


// reverse without special character
// example:
// input: sekolah.mu
// output: muhalok.es

// example:
// input: mdp.ac.id
// output: dic.ap.dm

// example:
// input: h!a&@.loya
// output: a!y&@.olah


// setting
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

// note: solution 3 there something wrong
// list existing function
const solution = {
    1: solution1,
    2: solution2,
    4: solution4,
    5: solution5,
    6: solution6,
    7: solution7,
    8: solution8,
    9: solution9,
    10: solution10,
    11: solution11,
};


// TEST SOLUTION
if (logSolutionActive) {
    console.log("SOLUTION IS RUNNING....");
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
    console.log("\nBENCHMARK IS RUNNING....");
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