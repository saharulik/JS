"use strict";

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

let v = 0;

if (numberOfFilms.count<10) {
    alert('Просмотрено довольно мало фильмов');                               
}
else if (numberOfFilms.count>=10 && numberOfFilms.count <= 30) {
    alert('Вы классический зритель');                               
 }
 else if  (numberOfFilms.count>30) {
    alert('Вы киноман');                               

 } else {
    alert('Произошла ошибка'); 
 }


    do {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
       if (a != null && b != null && a != '' && b != '' && a.length <= 50) {
        v++; 
        personalMovieDB.movies[a] = b;   
    } else {
            alert('error'); }
    } while (v!=2); 

console.log(personalMovieDB);