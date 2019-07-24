const bean = "Colombian"
const style = "Espresso"
const size = "Medium"
const customer = {
    firstName: "Johann",
    lastName: "Abramovitz"
}

// Use a string template that uses interpolation to generate the following string
// "Medium Colombian Espresso is ready for Johann Abramovitz!!"

const coffeeInput = document.querySelector("#Coffee")

const message = `${size} ${bean} ${style} is ready for ${customer.firstName} ${customer.lastName}`

coffeeInput.innerHTML = message;