
const input = document.getElementById("input")
const convBtn = document.querySelector(".conv-btn")
const length = document.getElementById("len-p")
const volume = document.querySelector(".vol-p")
const mass = document.querySelector(".mass-p")



// 1 meter = 3.281 feet
// 1 liter = 0.264 gallons
// 1 kilogram = 2.204 pounds

convBtn.addEventListener("click", () => {
    getLength(input.value);
    getVolume(input.value);
    getMass(input.value);
    input.value = " "
})

function getLength(inpt) {
    let metToFeet = input.value * 3.281
    let feetToMet = input.value / 3.281
    length.textContent = `${inpt} meters = ${metToFeet.toFixed(3)} feet | ${inpt} feet = ${feetToMet.toFixed(3)} meters`
}

function getVolume(inpt) {
    let litToGal = input.value * 0.264
    let galToLitt = input.value / 0.264
    volume.textContent = `${inpt} liters = ${litToGal.toFixed(3)} gallons | ${inpt} gallons = ${galToLitt.toFixed(3)} liters`
}

function getMass(inpt) {
    let kilToPound = input.value * 2.204
    let poundToKil = input.value / 2.204
    mass.textContent = `${inpt} liters = ${kilToPound.toFixed(3)} gallons | ${inpt} gallons = ${poundToKil.toFixed(3)} liters`
}