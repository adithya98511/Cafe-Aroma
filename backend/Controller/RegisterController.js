// const reg_service = require("../Services/RegisterService");

// exports.reg = async (req, res, next) => {
//   try {
//     const { email, username, country, password, confirmed } = req.body;

//     const existing = await reg_service.isEmailAlreadyExists(email);

//     // console.log(existing);

//     if (!existing) {
//       await reg_service.reg_func(email, username, country, password, confirmed);
//       res.json({ status: true, success: "data saved" });
//     } else {
//       res.json({ status: false, success: "Email already exists" });
//     }
//   } catch (error) {
//     console.log(error.message);
//     throw error;
//   }
// };

const reg_service = require("../Services/RegisterService");

exports.reg = async (req, res, next) => {
  try {
    const { email, username, country, password, confirmed } = req.body;

    const existing = await reg_service.isEmailAlreadyExists(email);

    if (!existing) {
      await reg_service.reg_func(email, username, country, password, confirmed);
      res.status(200).json({ status: true, success: "Data saved" });

      console.log("Data Saved");
    } else {
      res.status(200).json({ status: false, success: "Email already exists" });

      console.log("Email already exists");
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ status: false, error: "Internal Server Error" });
    console.log("Internal Server Error");
  }
};
