fetch('/data/mass-reading.json')
    .then(Response => Response.json())
    .then(data => {
        document.querySelector('#firstReading .reference').textContent = data.firstReading.reference;
        document.querySelector('#firstReading .text').textContent = data.firstReading.text;

        const psalm = data.psalm;   
        const container = document.querySelector('#psalm .verses');
        const responseContainer = document.querySelector('#psalm .response');

        psalm.verses.forEach(verse => {
            const list = document.createElement('li');
            list.textContent = verse;
            container.appendChild(list);
        });
        
        const response = document.createElement('li');
        const strong = document.createElement('strong');
        strong.textContent = psalm.response;
        response.appendChild(strong);
        responseContainer.appendChild(response);

        if (data.secondReading) {
            document.querySelector('#secondReading .reference').textContent = data.secondReading.reference;
            document.querySelector('#secondReading .text').textContent = data.secondReading.text;
        } else {
            document.querySelector('#secondReading').hidden = 'true';
        }

        const alleluiaverse = document.createElement('li');
        alleluiaverse.textContent = data.alleluia.verses;
        document.querySelector('#alleluia .verses').appendChild(alleluiaverse);

        const alleluiaresponse = document.createElement('li');
        const strongAlleluia = document.createElement('strong');
        strongAlleluia.textContent = data.alleluia.response;
        alleluiaresponse.appendChild(strongAlleluia);
        document.querySelector('#alleluia .response').appendChild(alleluiaresponse);


        document.querySelector('#gospel .reference').textContent = data.gospel.reference;

        document.body.classList.add(`liturgical-${data.color}`);

});

fetch('/data/quote-of-the-day.json')
    .then(Response => Response.json())
    .then(data => {
        const category = "Faith";
        const quotesArray = data[category]; 
        const randomIndex = Math.floor(Math.random() * quotesArray.length);
        const randomQuote = quotesArray[randomIndex];

        document.querySelector("#quoteOfTheDay .quote").textContent = randomQuote.text;
        document.querySelector("#quoteOfTheDay .reference").textContent = randomQuote.reference;
});
