const Cinema = function (films) {
  this.films = films;
};

Cinema.prototype.filmTitles = function (films) {
  const titles = this.films.map((film) => {
    return film.title;
  });
  return titles;
}

Cinema.prototype.findFilmByTitle = function (name) {
  const movie = this.films.find((film) => {
    return film.title === name;
  });
  return movie;
}

Cinema.prototype.filterFilmsByGenre = function (genre) {
  const movie = this.films.filter((film) => {
    return film.genre === genre;
  });
  return movie;
}

Cinema.prototype.findFilmByYear = function (year) {
  const movie = this.films.some((film) => {
    return film.year === year;
  });
  return movie;
}

Cinema.prototype.filmLength = function (length) {
  const movie = this.films.every((film) => {
    return film.length > length;
  });
  return movie;
}

Cinema.prototype.totalRunTime = function () {
  const movie = this.films.reduce((total, film) => {
    return total + film.length;
  }, 0);
  return movie;
}













module.exports = Cinema;