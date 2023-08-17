let solar = {
  "companies": [
      { 'name': 'Brooklyn SolarWorks',
          'address': '200 6th St Suite 3G, Brooklyn, NY 11215',
          'phone' : '13474297290',
          'zip' : 11215 },
      { 'name': 'Accord Power Inc',
          'address': '130-30 31st Ave #707, College Point, NY 11354',
          'phone' : '+17183218820',
          'zip' : 11354 },
      { 'name': '1st Light Energy',
          'address': '106-55 150th St, South Jamaica, NY 11435',
          'phone' : '(866) 837-6527',
          'zip' : 11435 },
      { 'name': 'internationalenergy',
          'address': '11414 Sutphin Blvd, Queens, NY 11434',
          'phone' : '(516) 584-3312',
          'zip' : 11434 },
      { 'name': 'S&R Solar Design',
          'address': '124-15 Metropolitan Ave 2nd floor, Queens, NY 11415',
          'phone' : '(516) 884-2208',
          'zip' : 11415 },
  ]
}

function returnText() {
  let zip_input = parseInt(document.getElementById('zip_input').value);

  let zip_array = [];
  let difference_array = [];

  for (let i = 0; i < solar.companies.length; i++) {
    zip_array.push(solar.companies[i].zip);
    difference_array.push({ index: i, difference: Math.abs(zip_array[i] - zip_input) });
  }

  let outputDiv = document.querySelector('.output');
  outputDiv.innerHTML = '';

  difference_array.sort(function(a, b) { return a.difference - b.difference; });

  for (let i = 0; i < 3; i++) {
    let companyIndex = difference_array[i].index;
    let company = solar.companies[companyIndex];

    let closestParagraph = document.createElement('p');
    closestParagraph.innerHTML = '#' + (i + 1);
    outputDiv.appendChild(closestParagraph);

    let nameParagraph = document.createElement('p');
    nameParagraph.innerHTML = 'Name: ' + company.name;
    outputDiv.appendChild(nameParagraph);

    let addressParagraph = document.createElement('p');
    addressParagraph.innerHTML = 'Address: ' + company.address;
    outputDiv.appendChild(addressParagraph);

    let phoneParagraph = document.createElement('p');
    phoneParagraph.innerHTML = 'Phone: ' + company.phone;
    outputDiv.appendChild(phoneParagraph);
  }
}