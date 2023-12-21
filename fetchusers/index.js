let fetchbutton = document.getElementById("fetch");
let displayDiv = document.getElementById("display");


fetchbutton.addEventListener("click" , function(){
    fetch("https://reqres.in/api/users")
    .then(Response =>{
        if(!Response.ok){
            throw new Error(`HTTP error!`)
        }
        return Response.json();
    })

    .then(data =>{
        displayUsers(data.data);
    })
    .catch(error =>{
        console.log("error fetching users: ", error)
    });
});

function displayUsers(users){
    displayDiv.innerHTML = "";

    users.forEach(user =>{
        let userCard = document.createElement("div");
        userCard.classList.add("user-card");

        userCard.innerHTML =`<img src="${user.avatar}" alt="User Avatar">
        <p>Name: ${user.first_name} ${user.last_name}</p>
        <p>Email: ${user.email}</p>`;

        display.appendChild(userCard);
    });
};