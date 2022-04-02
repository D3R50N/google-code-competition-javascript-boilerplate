# google-code-competition-javascript-boilerplate

This is the code I use for Google competitive programming.

It can be used as it is for problems where inputs are as follows:

```
testCasesNb
firstTestInputsNb
a b c d e
secondTestInputsNb
a b c
```

Example:

```
3
8
10 8 34 7 9 87 11 4
2
3 8
6
23 98 6 75 38 52
```

## Usage

- You will receive in the `solve` function, the case line without its number of element because you can simply `split` on spaces to get all of them.
- You must return the Test Case's result as a string which will be printed when every Test Cases (which are asynchronous functions) are finished.

Then you can execute it using `node`

```
> node main.js
```
