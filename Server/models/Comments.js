const mongoose = require("mongoose");

const CommentSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    content: {
        type: String,
        required: true,
    },
    reactions: {
        type: [String],
    }
  },
  { timestamps: true }
);

const Comments = mongoose.model("Comments", CommentSchema);
module.exports = Comments;