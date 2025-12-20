import mongoose, { Document, Model, models, Schema } from "mongoose";
import Product from "./Products";
import { REGISTRATION_DISCOUNT } from "@/lib/const";

type GuestType = {
  fullName: string;
  emailAddress: string;
  phoneNumber: string;
  address: string;
  zipcode: string;
  city: string;
  country: string;
  paymentMethod: "e-money" | "cash" | null;
  cart: {
    productId: mongoose.Types.ObjectId;
    quantity: number;
    discount: number;
  }[];
};

const guestSchema = new Schema<GuestType & Document>({
  fullName: {
    type: String,
    required: [true, "Guest must have fullname"],
  },
  emailAddress: {
    type: String,
    required: [true, "Please enter your email address"],
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
    required: [true, "Guest must have phone number"],
  },
  address: {
    type: String,
    required: [true, "Guest must have address"],
  },
  zipcode: {
    type: String,
    required: [true, "Guest must have zipcode"],
  },
  city: {
    type: String,
    required: [true, "Guest must have city"],
  },
  country: {
    type: String,
    required: [true, "Guest must have country"],
  },
  paymentMethod: {
    type: String,
    required: [true, "Guest must have payment method"],
  },
});

const Guest: Model<GuestType & Document> =
  models.Guest || mongoose.model<GuestType & Document>("Guest", guestSchema);

export default Guest;
