const { Schema, model, SchemaTypes } = require("mongoose");

const commentsSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  postId: {
    ref: "posts",
    type: SchemaTypes.ObjectId
  }
});

module.exports = model("comments", commentsSchema);
