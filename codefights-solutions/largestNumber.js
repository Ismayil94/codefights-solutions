/*Given an integer n, return the largest number that contains exactly n digits.

Example

For n = 2, the output should be
largestNumber(n) = 99.

Input/Output

[time limit] 4000ms (js)
[input] integer n

Constraints:
1 = n = 7.

[output] integer

The largest integer of length n.*/
function largestNumber(n) {
     return Math.pow(10, n)-1;
    
}
