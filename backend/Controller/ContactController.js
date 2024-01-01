const contact_service = require("../Services/ContactService");

exports.contact = async (req, res, next) => {
  try {
    const { contactNo, email, comment, name } = req.body;
    console.log("came");
    const successRes = await contact_service.sendFeed(
      name,
      contactNo,
      email,
      comment
    );
    res.json({ status: true, success: "Message Sent!" });
  } catch (error) {
    console.log(error.message);
    throw error;
  }
};
