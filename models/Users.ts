import mongoose, { Document, Model, models, Schema } from "mongoose";
import Product from "./Products";
import { REGISTRATION_DISCOUNT } from "@/lib/const";

type UserType = {
  fullName?: string;
  emailAddress: string;
  password: string;
  phoneNumber?: string;
  address?: string;
  zipcode?: string;
  city?: string;
  country?: string;
  paymentMethod?: "e-Money" | "cash";
  cart?: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    discount: number;
  }[];
};

const userSchema = new Schema<UserType & Document>({
  fullName: {
    type: String,
    // required: [true, "User must have fullname"]
  },
  emailAddress: {
    type: String,
    unique: true,
    required: [true, "Please enter your email address"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
  },

  cart: {
    _id: false,
    type: [
      {
        productId: {
          type: Schema.Types.ObjectId,
          ref: Product,
        },
        quantity: {
          type: Number,
          min: [1, "Cart quantity cannot be negative or zero"],
        },
        discount: {
          type: Number,
          default: REGISTRATION_DISCOUNT,
        },
      },
    ],
    default: [],
  },
  phoneNumber: {
    type: String,
    // required: [true, "User must have phone number"],
  },
  address: {
    type: String,
    // required: [true, "User must have address"],
  },
  zipcode: {
    type: String,
    // required: [true, "User must have zipcode"]
  },
  city: {
    type: String,
    //  required: [true, "User must have city"]
  },
  country: {
    type: String,
    //  required: [true, "User must have country"]
  },
  paymentMethod: {
    type: String,
    // required: [true, "User must have payment method"],
  },
});

const User: Model<UserType & Document> =
  models.User || mongoose.model<UserType & Document>("User", userSchema);

export default User;
