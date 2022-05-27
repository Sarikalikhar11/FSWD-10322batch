const endpoint="https://jsonplaceholder.typicode.com/todos";

const response = fetch(endpoint);

console.log(response);

response.then((data_stream)=>{
    // console.log(data_stream);
    const data = data_stream.json();

    data.then(finalData =>{
        console.log(finalData);
    });
    // console.log(data);
});