const Feedback = require('../models/Feedback');

module.exports = {
  async create(req, res) {
    const { comment, evaluation, orientadorId } = req.body;
    try {
      console.log(req.body);
      const feedback = await Feedback.create({ comment, evaluation, orientadorId });
      return res.status(200).json(feedback);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'CREATE ERROR' });
    }
  },

  async read(req, res) {
    try {
      const allFeedback = await Feedback.findAll();
      if (allFeedback.length === 0)
        return res.status(404).json({ msg: 'NO FEEDBACK FOUND' });
      return res.status(200).json(allFeedback);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ msg: 'GET ALL ERROR' });
    }
  },
};