'use strict';
import request from 'request';
import { Movies, TranslateMovie } from '../../app/models';

exports.initSeaders = async () => {
  createMovies();
};

const createMovies = async () => {
  try {
    let movieList = await getMovies();
    if (movieList.results.length <= 0) console.log('movies not found.');

    for (const key in movieList.results) {
      if (movieList.results.hasOwnProperty(key)) {
        let e = movieList.results[key];
        e.id_movie = e.id;
        e.createdAt = new Date();
        e.updatedAt = new Date();

        const movie = await Movies.findOne({ where: { id_movie: e.id } });
        if (!movie) {
          movie = await Movies.create(e);
        }

        const trasnlateList = await getTranslate(
          movie.getDataValue('id_movie')
        );
        await mountTranslate(trasnlateList, movie);
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

          let e = trasnlateList.translations[key];
          e.movieId = movie.getDataValue('id');
          e.createdAt = new Date();
          e.updatedAt = new Date();

          translateMovie = await TranslateMovie.findOne({
            where: {
              movieId: movie.getDataValue('id_movie'),
              english_name: e.english_name,
            },
          });

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

const getTranslate = (id_movie) => {
  return new Promise((resolve, reject) => {
    var options = {
      method: 'GET',
      url: `https://api.themoviedb.org/3/movie/${id_movie}/translations?api_key=${process.env.API_KEY}`,
    };

    request(options, async (error, response) => {
      if (error) return reject(error);
      return resolve(JSON.parse(response.body));
    });
  });
};
