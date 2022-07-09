let numberOfFilms;

function start(){
    numberOfFilms = +prompt(`How much film have you watched?`, ``);
    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt(`How much film have you watched?`, ``);
    }
};

// start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
    for (let i=0; i<2; i++) {
        let  lastWatchedFilm = prompt(`What film have you watched last?`, ``);
        let  ratingThisFilm = prompt(`What is your rating of this film?`, ``);
        if (lastWatchedFilm != null && ratingThisFilm !=null && lastWatchedFilm != '' && ratingThisFilm != '' && lastWatchedFilm.length<50){
         personalMovieDB.movies[lastWatchedFilm] = ratingThisFilm;
        } else{
         i--;
        }
     };
}

// rememberMyFilms();

function detetPersonalLevel(){
    if (personalMovieDB.count<10){
        console.log("You have watched less films");
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count <30){
        console.log("You are classic viewer");
    } else if(personalMovieDB.count >= 30){
        console.log("You have watched a realy lot of films");
    } else{
        console.log("Error");
    }
};

// detetPersonalLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
};

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i=1; i<4; i++){
        personalMovieDB.genres[i-1] = prompt(`Your favourite ganre from number ${i}`);
    }
};

writeYourGenres();