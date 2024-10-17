const adminauth = (req, res, next) => {
  const token = "xyznk";
  const isadmin = token === "xyz";
  if (!isadmin) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

const userauth = (req, res, next) => {
  const token = "xyz";
  const isadmin = token === "xyz";
  if (!isadmin) {
    res.status(401).send("Unauthorized request");
  } else {
    next();
  }
};

module.exports = { adminauth, userauth };
