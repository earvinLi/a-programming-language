const parse = require('./Parser');
const evaluate = require('./SpecialForms');
const topScope = require('./TheEnvironment');

// console.log(parse("+(a, 10)"));
// → {type: "apply",
//    operator: {type: "word", name: "+"},
//    args: [{type: "word", name: "a"},
//           {type: "value", value: 10}]}

// let prog = parse(`if(true, false, true)`);
// console.log(evaluate(prog, topScope));
// → false

function run(program) {
  console.log(parse(program), Object.create(topScope));
  return evaluate(parse(program), Object.create(topScope));
}

// run(`
// do(define(total, 0),
//    define(count, 1),
//    while(<(count, 11),
//          do(define(total, +(total, count)),
//             define(count, +(count, 1)))),
//    print(total))
// `);
// → 55

run(`
  do(define(sum, fun(array,
     do(define(i, 0),
        define(sum, 0),
        while(<(i, length(array)),
          do(define(sum, +(sum, element(array, i))),
             define(i, +(i, 1)))),
        sum))),
   print(sum(array(1, 2, 3))))
`);
