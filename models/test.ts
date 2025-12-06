import mongoose, { Schema, models, Model, Document } from "mongoose";

export interface TestType extends Document {
  name: string;
}

const testSchema = new Schema<TestType>(
  {
    name: { type: String, required: true },
  },
  { timestamps: true },
);

// On Vercel serverless, you MUST do this check to avoid recompilation
const Test: Model<TestType> =
  models.Test || mongoose.model<TestType>("Test", testSchema);

export default Test;
