const login_service = require("../Services/LoginService");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (await login_service.matchCred(email, password)) {
      // console.log("data is here too");
      res.json({ success: true, message: "Login Success" });
    } else {
      res.status(400).json({
        success: false,
        message: "Login Fail! No such account exst!",
      });
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
