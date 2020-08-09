import { Movies, TranslateMovie } from '../models';

class MoviesController {
  async getAll(req, res) {
    try {
      const x = req.query;

      const movies = await Movies.findAll({
        where: [x],
        include: [{ model: TranslateMovie, as: 'translate' }],
      });

      return res.status(200).json({
        data: movies,
      });
    } catch (error) {
      return res.status(400).json(error.message);
    }
  }
}

export default new MoviesController();
