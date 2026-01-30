import createCalc, { Operator } from './Submission/math';
const calc = createCalc(Operator.ADD);

console.log(calc.execute(5, 10));
