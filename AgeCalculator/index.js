const btnE1 = document.getElementById("btn")
const birthdayE1 = document.getElementById("birthday")
const resultE1 = document.getElementById('result')

function calculateAge() {
    const birthdayValue = birthdayE1.value;
    if (birthdayValue === "") {
        alert("Please Enter Your birthday")
    } else {
        const age = getAge(birthdayValue)
        resultE1.innerText = `Your Age is ${age} years Old ${age > 1 ? "years" : "year"} old`
    }
}
function getAge(birthdayValue) {
    const currentDate = new Date()
    const birthDate = new Date(birthdayValue)
    let age = currentDate.getFullYear() - birthDate.getFullYear();
    const month = currentDate.getMonth() - birthDate.getMonth();
    if (month < 0 || currentDate.getDate() < birthDate.getDate()) {
        age--
    }
}
btnE1.addEventListener("click", calculateAge)