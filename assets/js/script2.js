




var category = localStorage.getItem('category')
console.log(category)

// these see's what the user puts in and based off of that, runs the correlating function 
if (category === 'Box Office Hits') {
	boxOfficeHits();
} else if (category === 'Top 250 Movies') {
	top250Movies();
} else if (category === 'Top 250 TV Shows') {
	top250TvShows();
} else if (category === 'test bottom left') {
	bottomLeft();
} else if (category == 'test middle') {
	bottomMiddle();
} else if (category == 'test bottom right') {
	bottomRight();
}

// the parent element that will hold all the information 
var parentMovieContainerEl = $("#movie-container");



function boxOfficeHits(params) {

	// fetches API info
	fetch("https://imdb-api.com/en/API/BoxOfficeAllTime/k_x8psmgh3")
		.then(function (data) {
			data.json().then(function (info) {
				// variables thats values are the endpoints info that we need 
				// variable for the picture
				for (var i = 0; i < info.items.length; i++) {
					var currentMovie = info.items[i];
					console.log(currentMovie)
					// create HTML element for currentMovie
					var movieCard = $("<div></div>").addClass("movie-item card");
					var cardBody = $("<div></div").addClass("card-body");
					var movieName = $("<h5></h5").addClass("card-title").text(currentMovie.title);
					var movieGross = $("<h4></h4").addClass("card-title").text(currentMovie.worldwideLifetimeGross);

					cardBody.append(movieName);
					cardBody.append(movieGross);
					movieCard.append(cardBody);

					movieCard.appendTo(parentMovieContainerEl);
				}
				// variable for the name 

				// variable for the length
			})
		})
}

function top250Movies(params) {

	fetch('https://imdb-api.com/en/API/Top250Movies/k_93qlp9fw')
		.then(function (res) {
			return res.json();
		})
		.then(function (data) {

		})

	for (var i = 0; i < info.items.length; i++) {
		var currentMovie = info.items[i];
		console.log(currentMovie)
		// create HTML element for currentMovie
		var movieCard = $("<div></div>").addClass("movie-item card");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title").text(currentMovie.title);
		var movieGross = $("<h4></h4").addClass("card-title").text(currentMovie.worldwideLifetimeGross);

		cardBody.append(movieName);
		cardBody.append(movieGross);
		movieCard.append(cardBody);

		movieCard.appendTo(parentMovieContainerEl);
	}
}

function top250TvShows(params) {
	for (let i = 0; i < array.length; i++) {
		const element = array[i];

		var movieCard = $("<div></div>").addClass("movie-item card");
		var movieImage = $("<img></img").addClass("card-img-top")
			.attr("alt", "...");
		var cardBody = $("<div></div").addClass("card-body");
		var movieName = $("<h5></h5").addClass("card-title")
			.text("Pizza Hut");

		cardBody.append(movieName);
		movieCard.append(movieImage);
		movieCard.append(cardBody);

		movieCard.appendTo(parentMovieContainerEl);
	}
}



boxOfficeHits();
top250Movies();
top250TvShows();

localStorage.clear();