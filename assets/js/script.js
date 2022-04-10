


// title cards
var topLeftCard = $("#c2");
var topMiddleCard = $("#c0");
var topRightCard = $("#c1");
var bottomLeftCard = $("#c4");
var bottomMiddleCard = $("#c3");
var bottomRightCard = $("#c5");


// a function that listens for what the user clicks on 
var titleCardListener = function () {

    topLeftCard.on("click", function () {
        var topLeftCardTextValue = $(topLeftCard)[0].innerText;
        console.log(topLeftCardTextValue);
        // takes the var that has the cards text value, then sends it to the second JS file 

        // then opens the second html page that is populated with the api information 
        localStorage.setItem('category', 'top250')
        window.location.href = './index2.html'
    });

    topMiddleCard.on("click", function () {
        var topMiddleCardTextValue = $(topMiddleCard)[0].innerText;
        console.log(topMiddleCardTextValue);
        // takes the var that has the cards text value, then sends it to the second JS file 
        // then opens the second html page that is populated with the api information 
        localStorage.setItem('category', 'top250')
        window.location.href = './index2.html'
    });

    topRightCard.on("click", function () {
        var topRightCardTextValue = $(topRightCard)[0].innerText;
        console.log(topRightCardTextValue);
        // takes the var that has the cards text value, then sends it to the second JS file 
        // then opens the second html page that is populated with the api information 
        localStorage.setItem('category', 'top250')
        window.location.href = './index2.html'
    });


};

titleCardListener();

// then takes its value and gives it to the next js file