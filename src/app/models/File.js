import mongoose from "mongoose";

const schema = new mongoose.Schema(
  {
    id: String,
    active: { type: Boolean, default: true },
    version: { type: String, default: '1.0.0', required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    categoryMain: { type: String, required: true },
    categories: [{ value: { type: String, required: true }}],
    keys: [{ value: { type: String, required: true }}],
    fileAccess: { type: Number, required: true },
    fileType: { type: String, required: true },
    fileSize: { type: Number, required: true },
    fileBuffer: { type: Buffer, required: true },
    updatedBy: { type: String, default: " " },
    isDeleted: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    deletedBy: { type: String, default: " " }
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("fileDetail", schema);
