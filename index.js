const parse = require('./Parser');
const evaluate = require('./SpecialForms');
const topScope = require('./TheEnvironment');

// console.log(parse("+(a, 10)"));
// → {type: "apply",
//    operator: {type: "word", name: "+"},
//    args: [{type: "word", name: "a"},
//           {type: "value", value: 10}]}

let prog = parse(`if(true, false, true)`);
console.log(evaluate(prog, topScope));
// → false

// function run(program) {
//   return evaluate(parse(program), Object.create(topScope));
// }
//
// run(`
// do(define(total, 0),
//    define(count, 1),
//    while(<(count, 11),
//          do(define(total, +(total, count)),
//             define(count, +(count, 1)))),
//    print(total))
// `);
// → 55
