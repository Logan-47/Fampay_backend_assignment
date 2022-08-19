const setAPIToken = (req, res, next) => {
  req.apiKey = process.env.apiKey;
  next();
};

module.exports = {
  setAPIToken,
};
