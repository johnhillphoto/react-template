function addPromise (a, b){
  return new Promise(function (resolve, reject){
    if (typeof a === 'number' && typeof b === 'number'){
      resolve(a+b);
    } else{
      reject ('both not numbers');
    }
  });
}

addPromise(4, 5)
.then(function(res){
  console.log("res", res);
}, function(err){
  console.log('shit not worky', err);
});
addPromise(4, 'frack')
.then(function(res){
  console.log("res", res);
}, function(err){
  console.log('shoot not worky', err);
});
