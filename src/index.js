const characterName = document.getElementById("name")
const image = document.getElementById("image")
const votes = document.getElementById("vote-count")

function updateDetails(cuties){
    characterName.innerText = cuties.name
    image.src = cuties.image
}

function updateVotes(){
    document.getElementById('votes-form').addEventListener('submit',(e)=>{
    
        e.preventDefault()
        console.log(e.target.votes.value)
        votes.innerText=e.target.votes.value
            
    })
}
    
function getData(){
    fetch("http://localhost:3000/characters")
    .then(res => res.json())
    .then(data => {
        data.forEach(cuties => {
            console.log(cuties.name)
            const character = document.createElement("span")
            character.innerText = cuties.name;
            character.addEventListener("click", ()=>{updateDetails(cuties), updateVotes(cuties)})
            document.getElementById("character-bar").appendChild(character)
        });
    })
}


//checks whether the browser loads
window.addEventListener("load", getData)








