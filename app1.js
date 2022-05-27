const getSum = (arr=[])=>new Promise((resolve, reject)=>{
    if(arr.length==0) {reject('Invalid array')}
    else{
        const sum = arr.reduce((a,b)=>{
            console.log({a,b})
            return a + b
        })
        resolve(sum)
    }
     
})

const arr=[1,2,3,4,5,6,7];

getSum(arr).then(sum=>{
    console.log(sum);
})

