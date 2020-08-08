'use strict';
import request from 'request';
import { Movies, TranslateMovie } from '../../app/models';

exports.initSeaders = async () => {
  createMovies();
};

const createMovies = async () => {
  try {
    let movieList = await getMovies();

    if (movieList.results.length > 0) {
      for (const key in movieList.results) {
        if (movieList.results.hasOwnProperty(key)) {
          const e = movieList.results[key];
          e.id_movie = e.id;
          e.createdAt = new Date();
          e.updatedAt = new Date();

          let movie = await Movies.findOne({ where: { id_movie: e.id } });
          if (!movie) {
            movie = await Movies.create(e);
          }

          let trasnlateList = await getTranslate(movie);
          await mountTranslate(trasnlateList, movie);
        }
      }
    }
  } catch (error) {
    console.log(error);
  }
};

const mountTranslate = (trasnlateList, movie) => {
  return new Promise(async (resolve, reject) => {
    try {
      let translateMovie;
      for (const key in trasnlateList.translations) {
        if (trasnlateList.translations.hasOwnProperty(key)) {
          const e = trasnlateList.translations[key];
          console.log(e)
          /**
           * include id movie
           */
          e.movieId = movie.id;
          e.createdAt = new Date();
          e.updatedAt = new Date();

          translateMovie = await TranslateMovie.findOne({
            where: {
              movieId: movie.id_movie,
              english_name: e.english_name,
            },
          });
          console.log(translateMovie)
          if (!translateMovie) {
            translateMovie = await TranslateMovie.create(e);
          }
        }
      }
      return resolve(translateMovie);
    } catch (error) {
      return reject(error);
    }
  });
};

const getMovies = () => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US`,
    };

    request(options, async (error, response) => {
      if (error) return reject(error);
      return resolve(JSON.parse(response.body));
    });
  });
};

const getTranslate = (movie) => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${movie.id_movie}/translations?api_key=${process.env.API_KEY}`,
    };

    request(options, async (error, response) => {
      if (error) return reject(error);
      return resolve(JSON.parse(response.body));
    });
  });
};
