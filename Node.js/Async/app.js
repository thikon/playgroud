function sayHello(){
    return 'hello';
}

function delaySayHello(){
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve('inside hello');
        }, 1000);

    } );
}

async function longTimeHello(){
    await setTimeout(() => {}, 1000);
    return 'Long Time Hello';
}

/* basic calling */
// function main(){
//     let a = sayHello();
//     let b = delaySayHello();

//     console.log(a);
//     console.log(b);
// }

/* calling solve could not extract resolve(object) for callback */
// function main(){
//     let a = sayHello();
//     delaySayHello().then( (value) =>{
//         let b = value;
//         console.log(b);
//     });
//     console.log(a);
// }

/* main calling top to down */
// async function main(){
//     let a = sayHello();
//     let b = await delaySayHello(); // <- with promise inside function
//     let c = await longTimeHello(); // <- without promise function

//     console.log(a)
//     console.log(b)
//     console.log(c)
// }

//main();

/* main calling parallelRun */
async function parallelRun(){
    let a = await Promise.all([delaySayHello(),longTimeHello()]);
    console.log(a);
}
parallelRun();