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

// testWord is a variable to set testing wording to function
// const testWords = ["sekolah.mu", "mdp.ac.id", "h!a&@.loya"];
const testWords = ["h!a&@.loya"];

// note: solution 3 there something wrong
// list existing function
const solutions = {
  1: solution1,
  2: solution2,
  3: solution3,
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
  for (let word of testWords) {
    console.log(`\nSOLUTION IS RUNNING FOR "${word}"`);
    for (let x in solutions) {
      console.log(`RESULT SOLUTION ${x} =>`, solutions[x](word));
    }
  }
}

// BENCHMARK
if (benchmarkActive) {
  for (let word of testWords) {
    console.log(`\nBENCHMARK IS RUNNING FOR "${word}"`);
    for (let x in solutions) {
      console.log(`SOLUTION ${x} =>`, benchmark(solutions[x], word, loopTimes));
    }
  }
}
