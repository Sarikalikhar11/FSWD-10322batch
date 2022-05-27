const endpoint = "https://jsonplaceholder.typicode.com/todos";

// const getSum = (arr=[])=>new Promise((resolve, reject)=>{
//     if(arr.length==0) {reject('Invalid array')}
//     else{
//         const sum = arr.reduce((a,b)=>{
//             console.log({a,b})
//             return a + b
//         })
//         resolve(sum)
//     }
     
// })

// const arr=[1,2,3,4,5,6,7];

// getSum(arr).then(sum=>{
//     console.log(sum);
// })

const button = document.querySelector('button');
const list = document.querySelector('ol');
console.log(button,list);

const fetchData = ()=>{
    fetch(endpoint)
    .then(stream=>stream.json())
    .then(todos=>{
            todos.map(todo=>{
            const listelement = document.createElement('li');
            listelement.innerHTML = todo.title;
            const isCompleted = todo.completed;
            if(isCompleted){
                listelement.style = "color:crimson"
            }else{
                listelement.style = "color:lime"
            }
            console.log(listelement);
            list.appendChild(listelement);
        })
    })
}
button.addEventListener('click',fetchData)



