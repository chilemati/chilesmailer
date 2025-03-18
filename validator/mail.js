const { check, validationResult, body } = require("express-validator");

exports.validateMail = [
  check("subject")
    .isString()
    .withMessage("password must be a s string")
    .isLength({ min: 2 })
    .withMessage('subject too short'),
  check("from")
    .isString()
    .withMessage("email must be a s string")
    .isEmail()
    .withMessage("Invalid email format: eg. example@gmail.com"),
  check("to")
    .isString()
    .withMessage("email must be a s string")
    .isEmail()
    .withMessage("Invalid email format: eg. example@gmail.com"),
  check("html")
  .isString()
    .withMessage("html must be string")
    .isLength({ min: 2 })
    .withMessage('html too short'),
  async(req, res, next) => {
    
        const errors = validationResult(req);
        if (!errors.isEmpty())
          return res.status(422).json({ errors: errors.array() });
        next();
        
        
     
  }
];
