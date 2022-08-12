const mongoose = require("mongoose")

module.exports = async () => {
  try {
    await mongoose.connect(process.env.DB)
    console.log("Connected to database Successfully")
  } catch (error) {
    console.log("Could not connect to database")
  }
}
