import mongoose, { Document, Model, models, Schema } from "mongoose";

type UserType = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: "e-Money" | "cash";
};

const userSchema = new Schema<UserType & Document>({
  fullName: { type: String, required: [true, "User must have fullname"] },
  emailAddress: {
    type: String,
    required: [true, "User must have email address"],
  },
  phoneNumber: {
    type: String,
    required: [true, "User must have phone number"],
  },
  address: {
    type: String,
    required: [true, "User must have address"],
  },
  zipcode: { type: String, required: [true, "User must have zipcode"] },
  city: { type: String, required: [true, "User must have city"] },
  country: { type: String, required: [true, "User must have country"] },
  paymentMethod: {
    type: String,
    required: [true, "User must have payment method"],
  },
});

const User: Model<UserType & Document> =
  models.User || mongoose.model<UserType & Document>("User", userSchema);

export default User;
