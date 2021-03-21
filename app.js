function fetchData(){
    fetch("https://api.github.com/users/dillibhai/repos")
    .then(response =>{
        if(!response.ok){
            throw Error("ERROR");

        }
        return response.json();

    }).then(data =>{
        console.log(data);
        const html = data.map(user =>{
            return `
           


<table class="styled-table">
    <thead>
        <tr>
            <th>ID:</th>
            <th>Name</th>
            <th>User type</th>
            <th>Login</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.type}</td>
            <td>${user.login}</td>
        </tr>
    </tbody>
</table>

            `;
        })
        .join('');
        console.log(html);
        document.querySelector("#app").insertAdjacentHTML("afterbegin", html);
    }).catch(error =>{
        console.log(error);
    });
}
fetchData();