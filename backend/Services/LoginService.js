const login_model = require("../Models/LoginModel");

class LoginService {
  static async matchCred(email, password) {
    try {
      const result = await login_model.findOne({ email: email }).password;
      if (result === password) {
        return true;
      } else {
        console.log("password mismatch!");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LoginService;
