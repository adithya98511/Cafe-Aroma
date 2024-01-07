const reg_service = require("../Services/RegisterService");

exports.reg = async (req, res, next) => {
  try {
    const { email, username, country, password, confirmed } = req.body;

    const isEmailExist = await reg_service.isEmailAlreadyExists(email);
    console.log(isEmailExist);

    if (!isEmailExist) {
      const successRes = await reg_service.reg_func(
        email,
        username,
        country,
        password,
        confirmed
      );
      res.json({ status: true, success: "data saved" });
    } else {
      res.json({ status: false, success: "Email already exists" });
    }
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
