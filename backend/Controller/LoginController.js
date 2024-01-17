const login_service = require("../Services/LoginService");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const result = await login_service.matchCred(email, password);
    console.log(result);
    if (result.password) {
      // console.log("data is here too");
      res.json({ success: true, message: "Login Success", data: result });
    } else {
      res.status(400).json({
        success: false,
        message: result,
      });
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};

exports.findUserById = async (req, res, next) => {
  try {
    const { id } = req.body;

    const result = await login_service.findByID(id);
    console.log(result);
    if (result) {
      // console.log("data is here too");
      res.json({ success: true, message: "User details", data: result });
    } else {
      res.status(400).json({
        success: false,
        message: result,
      });
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
