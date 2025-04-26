import joi from "joi";

const registerValidation = (req, res, next) => {
  const schema = joi.object({
    username: joi.string().min(3).max(30).required().messages({
      "string.min": "Username must be at least 3 characters long",
      "string.max": "Username must be at most 30 characters long",
      "any.required": "Username is required",
    }),
    email: joi.string().required().email().messages({
      "string.email": "Please enter a valid email",
      "any.required": "Email is required",
    }),
    password: joi.string().min(3).max(30).required().messages({
      "string.min": "Password must be at least 3 characters long",
      "string.max": "Password must be at most 30 characters long",
      "any.required": "Password is required",
    }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

const loginValidation = (req, res, next) => {
  const schema = joi.object({
    email: joi.string().required().email().messages({
      "string.email": "Please enter a valid email",
      "any.required": "Email is required",
    }),
    password: joi.string().min(3).max(30).required().messages({
      "string.min": "Password must be at least 3 characters long",
      "string.max": "Password must be at most 30 characters long",
      "any.required": "Password is required",
    }),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  next();
};

export { registerValidation, loginValidation };
