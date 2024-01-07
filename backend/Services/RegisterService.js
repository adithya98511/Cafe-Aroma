const reg_model = require("../Models/RegisterModel");
const login_model = require("../Models/LoginModel");

class RegService {
  static async reg_func(email, username, country, password, confirmed) {
    try {
      const reg__model = new reg_model({
        email,
        username,
        country,
        password,
        confirmed,
      });

      // const login__model = new login_model({
      //   userid:reg__model._id,
      //   email,
      //   username,
      // });

      return await reg__model.save();
    } catch (error) {
      throw error;
    }
  }

  // function to chech if the email already exist

  static async isEmailAlreadyExists(email) {
    try {
      const result = await reg_model.findOne({ email: email });
      return result;
    } catch (error) {
      console.error("Error checking email existence:", error);
      return false;
    }
  }
}

module.exports = RegService;
