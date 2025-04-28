import jwt from "jsonwebtoken";

const ensureAuthenticated = (req, res, next) => {
  const auth = req.headers["authorization"];
  if (!auth) {
    res.status(403);
    throw new Error("Unauthorized, JWT token is require");
  }
  try {
    const decoded = jwt.verify(auth, process.env.JWT_KEY);
    req.user = decoded;
    next();
  } catch {
    res.status(403);

    throw new Error("Unauthorized, JWT token is wrong or expired");
  }
};

export default ensureAuthenticated;
