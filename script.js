let solar = {
    "companies": [
      { 'name': 'Brooklyn SolarWorks',
        'adress': '200 6th St Suite 3G, Brooklyn, NY 11215',
        'phone' : '13474297290',
        'zip' : 11215 },
      { 'name': 'Accord Power Inc',
        'adress': '130-30 31st Ave #707, College Point, NY 11354',
        'phone' : '+17183218820',
        'zip' : 11354 },
      
    ]
}

let zip_array = [];
let difference_array = [];
let difference;

function returnText() {
    let zip_input = parseInt(document.getElementById('zip_input').value);
    console.log(zip_input);

    for(let i = 0; i < solar.companies.length; i++) {
        zip_array.push(solar.companies[i].zip);
        difference = zip_array[i] - zip_input;
        difference_array.push(difference);
    }
}


console.log(difference_array)



