const contact_model = require("../Models/ContactModel");

class ContactService {
  static async sendFeed(name, contactNo, email, comment) {
    try {
      const contact__model = new contact_model({
        name,
        contactNo,
        email,
        comment,
      });
      console.log("Saved....");
      return await contact__model.save();
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ContactService;
