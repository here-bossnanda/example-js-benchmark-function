# :rocket: example js benchmark function
A simple example compares benchmark function in javascript made by vanilla js.
I made a simple logic challenge to solve. A reverse word without affecting any special character.

> Input: 
> sekolah.mu
> | Output: 
> muhalok.es
> 
> Input: 
> h!a&@.loya
> | Output: 
> a!y&@.olah

from the above problem, I made 6 solutions with different logic which are in the solutions folder.
after running all benchmarks with 10000000 epoch I got a conclusion that functions the fastest to slower are:

| SOLUTION | SPEED | Complexity |
| ------ | ------ | ------ |
| SOLUTION 6 | 1.358s | O(n) |
| SOLUTION 3 | 1.47s | O(n) |
| SOLUTION 5 | 2.001s | O(2n) |
| SOLUTION 4 | 2.188s | O(n)(log n) |
| SOLUTION 1 | 6.106s | O(2n) |
| SOLUTION 2 | 6.802s | O(n2)O(log n) |


SOLUTION 6 :crown:
