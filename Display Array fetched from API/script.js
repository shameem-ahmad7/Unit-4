const tableBody = document.querySelector('table');
const AppendToTable=(type,details)=>{
    const row = tableBody.insertRow();
    row.innerHTML+=`
    <td>${type}</td>
    <td>${details}</td>
    `;
}
const PromiseAPI1 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/posts').
                then((response) => response.json()).
                then((data) => {
                    AppendToTable('Posts', JSON.stringify(data.posts.slice(0, 3)));
                    res();
                })
        }, 1000);
    });
};
const PromiseAPI2 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products').
                then((response) => response.json()).
                then((data) => {
                    AppendToTable('Products', JSON.stringify(data.products.slice(0, 3)));
                    res();
                })
        }, 2000);
    });
};
const PromiseAPI3 = () => {
    return new Promise((res, rej) => {
        setTimeout(() => {
            fetch('https://dummyjson.com/todos').
                then((response) => response.json()).
                then((data) => {
                    AppendToTable('Todos', JSON.stringify(data.todos.slice(0, 3)));
                    res();
                })
        }, 3000);
    });
};
const fetchData = () => {
    tableBody.innerHTML=`
    <tr>
        <th>Type</th>
        <th>Details</th>
    </tr>
    `;
    PromiseAPI1().then(() => PromiseAPI2()).then(() => PromiseAPI3()).catch((error) => console.log(error))

}
document.querySelector('#fetch-data').addEventListener('click', fetchData);