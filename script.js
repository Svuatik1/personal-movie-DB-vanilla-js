let personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function(){
        personalMovieDB.count = +prompt(`How much film have you watched?`, ``);
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt(`How much film have you watched?`, ``);
    }
    },
    rememberMyFilms: function(){
        for (let i=0; i<2; i++) {
            let  lastWatchedFilm = prompt(`What film have you watched last?`, ``);
            let  ratingThisFilm = prompt(`What is your rating of this film?`, ``);
            if (lastWatchedFilm != null && ratingThisFilm !=null && lastWatchedFilm != '' && ratingThisFilm != '' && lastWatchedFilm.length<50){
             personalMovieDB.movies[lastWatchedFilm] = ratingThisFilm;
            } else{
             i--;
            }
         };
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count<10){
            console.log("You have watched less films");
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count <30){
            console.log("You are classic viewer");
        } else if(personalMovieDB.count >= 30){
            console.log("You have watched a realy lot of films");
        } else{
            console.log("Error");
        }
    },
    showMyDB: function(hidden){
        if(!hidden){
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i=1; i<2; i++){
            let genres = prompt(`Put your favourite ganres over (,)`);
            if(genres ==='' || genres == null){
                console.log('Incorrect data');
                i--;
            } else{
                personalMovieDB.genres = genres.split(', ');
            } 
        }
        this.genres.forEach(function(item, i){
            console.log(`Favourite ganre ${i+1} - is ${item}`)
        })
    },
    toggleVisibleMyDB: function(){
        personalMovieDB.privat = !personalMovieDB.privat
    }
};

