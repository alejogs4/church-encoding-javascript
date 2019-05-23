// Booleans
/**
 * These functions represents what's means boolean in programming
 * When you use if (true) you return the block inside the if, otherwise returns the else block
 */
const TRUE = x => y => x
const FALSE = x => y => y
/**
 * In this case the if function would be the identity function, The identity function takes a value as argument
 * and returns it
 */
const IF = x => x
// console.log(IF(TRUE('This is true')('Naa')), FALSE('This is true')('This is false'))
/**
 * NUMBERS:
 * When we think about numbers, we think about its representation, but a number means the n times that a thing have been repeat
 * The same thougth can be get in lambda calculus
 */
const toNumber = fn => fn(x => x + 1)(0)
const ZERO = fn => x => x
const ONE = fn => x => fn(x)
const TWO = fn => x => fn(fn(x))
/**
 * Succesor function
 */
const SUCCESOR = n => fn => x => fn(n(fn)(x))
const ADDITION = a => b => a(SUCCESOR)(b)
const THREE = SUCCESOR(TWO) 
const FIVE = ADDITION(TWO)(THREE)
const FOUR = ADDITION(TWO)(TWO)
const NINE = ADDITION(FIVE)(FOUR) 
