import mongoose, { Document, Model, models, Schema } from "mongoose";

export type TestType = {
  name: string;
};

const testSchema = new Schema<TestType & Document>({
  name: String,
});

const Test: Model<TestType & Document> =
  models.Test || mongoose.model<TestType & Document>("Test", testSchema);

export default Test;
