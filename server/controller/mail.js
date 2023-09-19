const mail = async (req, res) => {
  try {
    res.status(200).json(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  mail,
};
