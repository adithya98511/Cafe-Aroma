const login_service = require("../Services/LoginService");

exports.__login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const successRes = await login_service.login_Func(email, password);
    res.json({ status: true, success: "Message Sent!" });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
