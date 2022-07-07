let numberOfFilms = +prompt(`How much film do you watched?`, ``);


let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let lastWatchedFilm = prompt(`What film do you watched last?`, ``),
    ratingThisFilm = prompt(`What is your rating of this film?`, ``),
    lastWatchedFilm2 = prompt(`What film do you watched last?`, ``),
    ratingThisFilm2 = prompt(`What is your rating of this film?`, ``);

personalMovieDB.movies[lastWatchedFilm] = ratingThisFilm;
personalMovieDB.movies[lastWatchedFilm2] = ratingThisFilm2;

console.log(personalMovieDB)