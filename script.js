//q1
function promise1(){
    return  new Promise((resolve,reject)=>{

            // resolve('Long String');
        resolve("secses")
        reject("no")
    })
}
promise1().then((string) => (console.log(string)))

//q2
// function promise2 (firstName,lastname){
//     return new Promise ((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(firstName)
//         },1000)
        
//     })
// }


function promise2(firstName, lastname) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(firstName);  
        }, 1000);
    }).then((first) => {
        return lastName(lastname);  
    });
}
function lastName(lastname){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(lastname)
        },1000)
    })

}



// promise2("eli","pasikov").then((string)=>{console.log(string)})
//q3
function addFIve(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num +5)

        },500)
    
    })
}
function multiplyByTwo(num){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num /2)
        })
    }
    )
}
function subtractTen(num){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            resolve(num +10)
        })
    })

}
let number = 100
addFIve(number).then((num)=>{
    let bb = num;
    return multiplyByTwo(bb)
}).then((num)=>{
     let bb = num
     return subtractTen(bb)
}).then((num)=>{
    console.log(num)
})

//q4

function divide (num1 ,num2){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (num2 != 0){
                resolve(num1/num2)
            }
            else{
                reject("אי אפשר לחלק מספר  ב 00000")
            }
        })
    })
}

divide(10,2).then((num)=>{
    console.log(num)
}).catch((str)=>{console.log(str)})