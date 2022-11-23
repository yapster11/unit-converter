/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.getElementById("input-el")
const resultLenEl = document.getElementById("resultLen-el")
const resultVolEl = document.getElementById("resultVol-el")
const resultMassEl = document.getElementById("resultMass-el")
const convertBtn = document.getElementById("convert-btn")

convertBtn.addEventListener("click", function() {
    if (isNaN(inputEl.value)) {
        alert("Input is not a number. Please try again.")
    } else {
        convertLength()
        convertVolume()
        convertMass() 
    }
    
})

function convertLength() {
    let resultFeet = (Number(inputEl.value)*3.281).toFixed(3)
    let resultMeters = (Number(inputEl.value)/3.281).toFixed(3)
    resultLenEl.innerHTML = 
        `${inputEl.value} meters = ${resultFeet} feet | ${inputEl.value} feet = ${resultMeters} meters`
}

function convertVolume() {
    let resultGallons = (Number(inputEl.value)*0.264).toFixed(3)
    let resultLiters = (Number(inputEl.value)/0.264).toFixed(3)
    resultVolEl.innerHTML = 
        `${inputEl.value} liters = ${resultGallons} gallons | ${inputEl.value} gallons = ${resultLiters} liters`
}

function convertMass() {
    let resultPound = (Number(inputEl.value)*2.204).toFixed(3)
    let resultKilo = (Number(inputEl.value)/2.204).toFixed(3)
    resultMassEl.innerHTML = 
        `${inputEl.value} kilograms = ${resultPound} pounds | ${inputEl.value} pounds = ${resultKilo} kilograms`
}