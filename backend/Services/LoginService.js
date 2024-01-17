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
          return result;
        } else {
          console.log("Password Mismatched");
          return "Password Mismatched";
        }
      } else {
        console.log("no account exist for that email");
        return "no account exist for that email";
      }
    } catch (error) {
      console.log(error);
    }
  }

  static async findByID(id) {
    try {
      const result = await reg_model.findById({ _id: id });
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = LoginService;
