const login_model = require("../Models/LoginModel");

class LoginService {
  static async login_Func(email, password) {
    try {
      const login__model = new login_model({
        email,
        password,
      });
      console.log("Saved....");
      return await login__model.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = LoginService;
