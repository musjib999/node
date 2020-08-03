// Create a function that adds 2 numbers

function add(a, b) {
    return a + b;
}
// console.log(add(2, 4));

// converting the above function to async
function addAsync(a, b) {
    setTimeout(() => {
        let sum = a + b;
        console.log(sum);
    }, 2000)
}
// addAsync(1, 5);


//Promisify addAsync to addPromise

function addPromise(a, b) {
    // Promises
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            let sum = a + b;
            if (sum > 10) {
                reject('Error sum more than 7');
            } else {
                resolve(sum);
            }
        }, 2000);
    });
}


// addPromise(13, 6).then((r) => {
//     console.log(r);
// }).catch((err) => {
//     console.log(err);
// });

//Calculating the sum of 1 to 5 using addPromise in sequential order

addPromise(5, 5).then((r) => {
    console.log(r);
    return addPromise(4, 4).then((r) => {
        console.log(r);
        return addPromise(3, 3).then((r)=>{
            console.log(r);
            return addPromise(2, 2).then((r)=>{
                console.log(r);
                return addPromise(1, 1).then((r)=>{
                    console.log(r);
                    return console.log('Boom!!!');
                })
            })
        })
    })
}).catch((e) => {
    console.log(e);
});


//Craete a generator
function* naming () {
    var name = yield 'hello, what is your name?';
    return 'My name is ' + name
  }
  var gen = naming();
  console.log(gen.next().value);
  console.log(gen.next('Musa').value);


