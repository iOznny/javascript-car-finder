// Variables
const res = document.querySelector('#resultado');

// Selects
const brand = document.querySelector('#marca');
const year = document.querySelector('#year');
const pricemin = document.querySelector('#minimo');
const pricemax = document.querySelector('#maximo');
const doors = document.querySelector('#puertas');
const transmission = document.querySelector('#transmision');
const color = document.querySelector('#color');

// Years
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

// Generate object
const data = {
    brand: '',
    year: '',
    pricemin: '',
    pricemax: '',
    doors: '',
    transmission: '',
    color: '',
}

// Events
document.addEventListener('DOMContentLoaded', () => {
    // Show vehicles
    showVehicles(vehicles);

    // Fill Select
    fillSelectYears();
});

// Listener of selects
brand.addEventListener('change', (e) => {
    data.brand = e.target.value;
    filterVehicle();
});

year.addEventListener('change', (e) => {
    data.year = e.target.value;
    filterVehicle();
});

pricemin.addEventListener('change', (e) => {
    data.pricemin = e.target.value;
    filterVehicle();
});

pricemax.addEventListener('change', (e) => {
    data.pricemax = e.target.value
    filterVehicle();
});

doors.addEventListener('change', (e) => {
    data.doors = e.target.value;
    filterVehicle();
});

transmission.addEventListener('change', (e) => {
    data.transmission = e.target.value;
    filterVehicle();
});

color.addEventListener('change', (e) => {
    data.color = e.target.value;
    filterVehicle();
});

// Functions
function showVehicles(vehicles) {   
    // Delete in html
    clearHTML();

    vehicles.forEach(vehicle => {
        const { brand, model, year, price, doors, color, transmission } = vehicle;
        const vHTML = document.createElement('p');

        vHTML.textContent = `
            Marca ${ brand } /
            Mode ${ model } / 
            Año ${ year } /
            Precio ${ price } /
            Puertas ${ doors } / 
            Color ${ color } /
            Transmisión ${ transmission } 
        `;

        // Insert in html
        res.appendChild(vHTML);
    });
}

// Clear html
function clearHTML() {
    while (res.firstChild) {
        res.removeChild(res.firstChild);
    }
}

// Fill selects
function fillSelectYears() {
    for (let i = maxYear; i >= minYear; i--) {
        const opc = document.createElement('option');
        opc.value = i;
        opc.textContent = i;

        // Add option at select year
        year.appendChild(opc);
    }
}

// Filters wanted vehicles
function filterVehicle() {
    const reponse = vehicles.filter( filterBrand )
        .filter(filterYear)
        .filter(filterMin)
        .filter(filterMax)
        .filter(filterDoors)
        .filter(filterTransmission)
        .filter(filterColor)
    showVehicles(reponse);
}

function filterBrand(vehicle) {
    if (data.brand) {
        return vehicle.brand === data.brand;
    } else {
        return vehicle;
    }
}

function filterYear(vehicle) {
    if (data.year) {
        return vehicle.year === parseInt(data.year);
    } else {
        return vehicle;
    }
}

function filterMin(vehicle) {
    if (data.pricemin) {
        return vehicle.price >= data.pricemin;
    } else {
        return vehicle;
    }
}

function filterMax(vehicle) {
    if (data.pricemax) {
        return vehicle.price <= data.pricemax;
    } else {
        return vehicle;
    }
}

function filterDoors(vehicle) {
    if (data.doors) {
        return vehicle.doors === parseInt(data.doors);
    } else {
        return vehicle;
    }
}

function filterTransmission(vehicle) {
    if (data.transmission) {
        return vehicle.transmission === data.transmission;
    } else {
        return vehicle;
    }
}

function filterColor(vehicle) {
    if (data.color) {
        return vehicle.color === data.color;
    } else {
        return vehicle;
    }
}