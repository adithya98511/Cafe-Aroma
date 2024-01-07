const login_model = require("../Models/LoginModel");
const reg_model = require("../Models/RegisterModel");

class LoginService {
  static async matchCred(email, password) {
    try {
      const result = await reg_model.findOne({ email: email });
      console.log("pass:", password);
      //console.log("databse pass:", result.password);
      if (result) {
        if (result.password == password) {
          console.log("Password is correct");
          return true;
        } else {
          console.log("Password Mismatched");
          return false;
        }
      } else {
        console.log("no account exist for that email");
        return false;
      }
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LoginService;
