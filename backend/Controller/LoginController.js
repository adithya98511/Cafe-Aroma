const login_service = require("../Services/LoginService");

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (login_service.matchCred(email, password)) {
      res.status(200).json({ status: true, success: "Login Success" });
    } else {
      res
        .status(400)
        .json({ status: false, success: "Login Fail! Password Mismatch" });
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
