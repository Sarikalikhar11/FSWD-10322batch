const endpoint="https://jsonplaceholder.typicode.com/todos";

// const response = fetch(endpoint);

// console.log(response);

// response.then((data_stream)=>{
//     // console.log(data_stream);
//     const data = data_stream.json();

//     data.then(finalData =>{
//         console.log(finalData);
//     });
//     // console.log(data);
//     data.then(d=>{
//         console.log(d);
//     })
// });

// response
// .then(stream =>stream.json())
// .then(dataFromPreviousPromise =>50)
// .then(prev=>console.log(prev))
// .catch(error=>console.log(error));

// const myPromise = new Promise((resolve, reject)=>{
    // if(value%2==0)
    //     resolve("value is even")
    //     else reject("value is odd")
    // })
// const response = getData(5)
// response.then(data=>console.log(data))
// .catch(error=>console.log(error))

// myPromise
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// const data = ['Jake', 'John', 'Peter', 'James', 'Jane'];
// const fetchData = () =>new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve(data);
//     },2000);
// });
// const response = fetchData();
// response.then(data=>{
//     console.log(data);
// })

const data = [1,2,3,4,5,6,7];

const fetchData = () => new Promise((resolve, reject) =>{
    resolve(data);
});

const fetchDataSync = ()=>{
    return(data);
}

fetchData().then(data=>{
    console.log(data);
})
console.log('a');
console.log(fetchDataSync());

for(let i=0;i<10000;i++){
    console.log('exec');
}