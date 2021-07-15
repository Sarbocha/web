const name = document.getElementById("name")
const password = document.getElementById("password")
const form = document.getElementById("form")
const form_banaune = document.getElementById("Number")


form.addEventListener("submit", (e) => {
    let messages = []
    if (name.value === "" || name.value == null){
        messages.push("Name is required")

    }
    if (password.value.length <= 6){
        messages.push("Password must be longer thn 6 characters")
    
    }
    if (password.value.length >= 20){
        messages.push("Password is too long")}
    if (form_banaune.value.length >= 0 || form_banaune.value.length > 20){
        messages.push("Invalid number")
    for (number in form_banaune){
        messages.push("Make dir")
        
    }
    }
    if (messages.length > 0 ){
        e.preventDefault()
        errorElement.innertext = messages.join(",")
        
    }

})







