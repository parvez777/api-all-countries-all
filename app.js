// <<<<<<<<<<<<<<<<<< All Country Sectio >>>>>>>>>>>>>>>>>>>
fetch('https://restcountries.com/v3.1/all')
.then(res => res.json())
.then(data => showCountries(data))

function showCountries(countries){
    countries.map(country => {
        const allCountries = document.getElementById('allCountries');
        const div = document.createElement('div');
        div.innerHTML = `
        <h1>${country.name.common}</h1>
        <h2><span>Capital: </span>${country.capital}</h2>
        <h2><span>Population: </span>${country.population}</h2>
        <h2><span>Area: </span>${country.area}</h2>
        <span id="select1">Select Country: </span><input type="checkbox" id="select" onclick="selected('${country.name.common}')">
        <button onclick="details('${country.name.common}')"> See more details </button>
        <img src=${country.flags.png} />
        `

        allCountries.appendChild(div);
        
    })
    
}
// <<<<<<<<<<<<<<<< Selected County Section >>>>>>>>>>>>>>>

function selected(selectCountry){

    const url = `https://restcountries.com/v3.1/name/${selectCountry}`

    fetch(url)
    .then(res => res.json())
    .then(data => showSelected(data[0]))

    const showSelected = (country) =>{
        const checkBox = document.getElementById('select');
        const population = country.population;
        const countryNum = document.getElementById('countryNum');
        let count = 0;
        const showPopulation = parseInt(document.getElementById('population'));

        
        if(checkBox.checked === true){
            count ++;
            countryNum.innerText = count;
            showPopulation.innerText = population
        }
        else{
            count --;
            countryNum.innerText = count;
        }

        
        
    }
}
// <<<<<<<<<<<<<<< Single country Search Section >>>>>>>>>>>>>>>>

function searchCountry(){
    
    const input = document.getElementById('input').value;
   
    if(input.length > 0){
    document.getElementById('allCountries').style.display = "none";
    document.getElementById('titleDiv').style.display = "block";
    document.getElementById('titleDiv1').style.display = "none";

    const url = `https://restcountries.com/v3.1/name/${input}`

    fetch(url)
    .then(res => res.json())
    .then(data => showCountry(data[0]))
    }

    

    const showCountry = (country) =>{

        const titleDiv = document.getElementById('titleDiv');
        const container2 = document.getElementById('container2');
        container2.innerHTML = '';
        const left = document.createElement('div');
        left.className = "leftSide"
        const right = document.createElement('div');
        right.className = "rightSide"

        titleDiv.innerHTML = `
        <h1 id="title">${country.name.common}</h1>
        `
        left.innerHTML = `
        <img src=${country.flags.png} />
        `
        right.innerHTML = `
        <h1>${country.name.common}</h1>
        <h2><span>Capital: </span>${country.capital}</h2>
        <h2><span>Population: </span>${country.population}</h2>
        <h2><span>Area: </span>${country.area}</h2>
        <button onclick="details('${country.name.common}')"> See More Details </button>
        `
        
        titleDiv.appendChild(title)
        titleDiv.appendChild(container2)
        container2.appendChild(left)
        container2.appendChild(right)
    }
    
}
document.getElementById('input').addEventListener('keypress', function(event){
    if( event.keyCode === 13 ){
        document.getElementById('search-btn').click();

    }
})

// <<<<<<<<<<<<<<< Details Section >>>>>>>>>>>>>>>

function details(countryName){
    document.getElementById('allCountries').style.display = "none";
    document.getElementById('titleDiv').style.display = "none";
    document.getElementById('titleDiv1').style.display = "block";

    const url = `https://restcountries.com/v3.1/name/${countryName}`

    fetch(url)
    .then(res => res.json())
    .then(data => showDetails(data[0]))

    const showDetails = (countryD) =>{

        const titleDiv1 = document.getElementById('titleDiv1');
        // const title = document.createElement('div');
        const container3 = document.getElementById('container3');
        container3.innerHTML = '';
        const left1 = document.createElement('div');
        left1.className = "leftSide1"
        const right1 = document.createElement('div');
        right1.className = "rightSide1"

        titleDiv1.innerHTML = `
        <h1 id="title1">${countryD.name.official}</h1>
        `
        left1.innerHTML = `
        <h1>${countryD.name.common}</h1>
        <h2><span>Full Name: </span>${countryD.name.official}</h2>
        <h2><span>Capital: </span>${countryD.capital}</h2>
        <h2><span>Region: </span>${countryD.region}</h2>
        <h2><span>SubRegion: </span>${countryD.subregion}</h2>
        <h2><span>Population: </span>${countryD.population}</h2>
        <h2><span>Area: </span>${countryD.area}</h2>
        <h2><span>TimeZone: </span>${countryD.timezones}</h2>
        <button onclick="back()"> Back to Home </button>
        `
        right1.innerHTML = `
        <img src=${countryD.flags.png} />
        `
        
        // titleDiv1.appendChild(title1)
        titleDiv1.appendChild(container3)
        container3.appendChild(left1)
        container3.appendChild(right1)
    }
}

function back(){
    document.getElementById('titleDiv').style.display = "none";
    document.getElementById('titleDiv1').style.display = "none";
    document.getElementById('allCountries').style.display = "block";
}


