const title = document.querySelector('#title');
const title2 = document.querySelector('#title2');
const director = document.querySelector('#director');
const year = document.querySelector('#year');
const rating = document.querySelector('#rating');

const movie = {
    title: 'SuperMovie',
    director: 'John Doe',
    year: 2023,
    rating: 9,

    checkRating: function () {
        if (this.rating > 8) {
            title.style.color = "green";
            title2.style.color = "green";
        } else {
            title.style.color = "red";
            title2.style.color = "red";
        }
    }
}

title.textContent = movie.title;
director.textContent = movie.director;
year.textContent = movie.year;
rating.textContent = movie.rating;

movie.checkRating();