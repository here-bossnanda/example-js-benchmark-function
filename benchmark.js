const benchmark = (func, input, iterations) => {
    const start = new Date();
    for (let i = 0; i < iterations; i++) {
        func(input);
    }
    const finish = new Date();
    return `${(finish - start) / 1000.0}s`;
};

module.exports = { benchmark }