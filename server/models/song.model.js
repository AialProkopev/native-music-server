const { Schema, model } = require("mongoose")

const songSchema = new Schema({
  name: { type: String, required: true },
  artist: { type: String, required: true },
  song: { type: String, required: true },
  img: { type: String, required: true },
})

module.exports = model("song", songSchema)
