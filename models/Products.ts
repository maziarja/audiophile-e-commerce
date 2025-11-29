import mongoose, { Document, Model, models, Schema } from "mongoose";

type ProductType = {
  _id: mongoose.Types.ObjectId;
  slug: string;
  name: string;
  image: { mobile: string; tablet: string; desktop: string };
  category: string;
  categoryImage: { mobile: string; tablet: string; desktop: string };
  new: boolean;
  price: number;
  description: string;
  features: string;
  includes: { quantity: number; item: string }[];
  gallery: {
    first: { mobile: string; tablet: string; desktop: string };
    second: { mobile: string; tablet: string; desktop: string };
    third: { mobile: string; tablet: string; desktop: string };
  };
  others: {
    slug: string;
    name: string;
    image: { mobile: string; tablet: string; desktop: string };
  }[];
};

const productSchema = new Schema<ProductType & Document>(
  {
    slug: { type: String, required: [true, "Product must have slug"] },
    name: { type: String, required: [true, "Product must have name"] },
    image: {
      type: { mobile: String, tablet: String, desktop: String },
      required: [true, "Product must have image"],
    },
    category: { type: String, required: [true, "Product must have category"] },
    categoryImage: {
      type: { mobile: String, tablet: String, desktop: String },
      required: [true, "Product must have category image"],
    },
    new: { type: Boolean, default: true },
    price: { type: Number, required: [true, "Product must have price"] },
    description: {
      type: String,
      required: [true, "Product must have description"],
    },
    features: { type: String, required: [true, "Product must have features"] },
    includes: {
      type: [{ quantity: Number, item: String }],
      required: [true, "Product must have some includes items"],
    },
    gallery: {
      type: {
        first: { mobile: String, tablet: String, desktop: String },
        second: { mobile: String, tablet: String, desktop: String },
        third: { mobile: String, tablet: String, desktop: String },
      },
      required: [true, "Product must have gallery"],
    },
    others: {
      type: [
        {
          slug: String,
          name: String,
          image: { mobile: String, tablet: String, desktop: String },
        },
      ],
      required: [true, "Product must have some other products"],
    },
  },
  { timestamps: true }
);

const Product: Model<ProductType & Document> =
  models.Product ||
  mongoose.model<ProductType & Document>("Product", productSchema);

export default Product;
