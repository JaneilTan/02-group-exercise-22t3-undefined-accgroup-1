const formatChirps = (chirp) => {
  // Convert the mongoose result to a normal object
  const object = chirp.toObject();

  object.id = object._id;
  delete object._id;

  return object;
};

module.exports = formatChirps;
