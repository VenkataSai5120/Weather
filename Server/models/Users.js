const mongoose = require("mongoose");
const comments = require("./Comments")

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      min: 8,
      max: 15,
      required: true,
    },
    country: {
      type: String,
      min: 6,
      max: 6,
      required: true,
    },
    // comments: {
    //     type: [comments],
    //     default: [],
    // }
  },
  { timestamps: true }
);

const User = mongoose.model("User", UserSchema);
module.exports = User;
