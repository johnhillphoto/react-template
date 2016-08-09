var names = ['John', 'Jen', 'Jasper', 'Bella', 'Molly'];
//
// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
//
// names.forEach((name) => {
//   console.log('arrowfunc', name);
// });
//
//
// names.forEach((name) => console.log(name));

// var returnMe = (name) => name + '!';
//
// console.log(returnMe('John'));
//
// var person = {
//   name: 'John',
//   greet: function () {
//     names.forEach((name) => {
//       console.log(this.name + ' says hi to ' + name);
//     });
//   }
// };
//
// person.greet();


//statement version can take multiple lines
var addStatement = (a,b) =>  {
  return a + b;
};
console.log(addStatement(22,100));

//expression version is one line, no return needed
var addExpression = (a,b) =>  a + b;
console.log(addExpression(22,69));
