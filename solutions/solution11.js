function isAlphabet(x) {
    return (x >= "A" && x <= "Z") || (x >= "a" && x <= "z");
}

function swap(str, a, b) {
    var c = "";
    for (var i = 0; i < str.length; i++) {
        if (i == a) c = c + str[b];
        else if (i == b) c = c + str[a];
        else c = c + str[i];
    }
    return c;
}

function solution11(str) {
    // Initialize left and right pointers
    var r = str.length - 1,
        l = 0;

    // Traverse string from both ends until
    // 'l' and 'r'
    while (l < r) {
        // Ignore special characters
        if (!isAlphabet(str[l])) l++;
        else if (!isAlphabet(str[r])) r--;
        // Both str[l] and str[r] are not spacial
        else {
            str = swap(str, l, r);
            l++;
            r--;
        }
    }
    return str;
}

module.exports = { solution11 };

// created by: https://www.geeksforgeeks.org/reverse-a-string-without-affecting-special-characters/