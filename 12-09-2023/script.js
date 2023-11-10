const f1 = (year, favoriteNumber) => {
    const div = document.createElement("p");
    div.textContent = `Ulubioną liczbą osoby urodzonej w ${year} jest ${favoriteNumber}`
    document.body.appendChild(div)
}

const f2 = () => {
    let year, favoriteNumber;
    do{
        year = prompt("Podaj rok urodzenia")
    }
    while(isNaN(+year))
    
    do{
        favoriteNumber = prompt("Podaj ulubioną liczbę")
    }
    while(isNaN(+favoriteNumber))

    if((year < 1920 & year > 2023) || !(favoriteNumber in [69, 420, 2137])) f2()

    f1(year, favoriteNumber)
    
}


const interval = setInterval(f2, 60000)