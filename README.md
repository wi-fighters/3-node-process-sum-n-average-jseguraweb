# Sum N' Average

Create a program that takes in an operation to perform ("sum" / "avg"), and a set of numbers as arguments. The program should print out the result of the calculation to the terminal.

## Constraints:

- The first argument can only either be the string `"sum"` or the string `"avg"`. In case it is not, the program should exit and print the following message: "I cannot calculate that, please type either Sum (sum) or Average (avg)"

- Any following arguments must be numbers. In case one of the is not a number, the program should exit and print the following message: "Sorry, but one of the arguments you passed, is not a number, please try again".

## Examples:

## Bonus:

Add support for an additional operation, `"med"`, which calculates the [**_Median_**](https://en.wikipedia.org/wiki/Median) number in the set. To calculate the median you will have to follow the steps below:

1. Sort the set of numbers
2. Get the index of the middle number by dividing the last index of the set to two `<last index> / 2`
3. If the resulting index is a whole whole number (i.e. 7) then the median of the set is the value in that index.
4. Otherwise (if the uber is a fraction, i.e. 7.5) then the median is calculated by adding the two values in the indexes around it (for 7.5 it would be 7, and 8) and dividing them by two.

Example (a): For the set 4 ,7, 8, 11, 24 the median index would be 2 (last index: 4, 4 / 2 = 2) and the median value is 8 (the number at position 2).

Example (b): For the set 1, 12, 15, 21 the median index would be 1.5 (last index: 3, 3 / 2 = 1.5) and the median value would be 13.5 (the number at position 1: **12** + the number at position 2: **15** = **27**, 27 / 2 = 13.5).
