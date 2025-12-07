// import mongoose from "mongoose";

// let connected = false;

// const connectDB = async (): Promise<void> => {
//   mongoose.set("strictQuery", true);
//   //   if db connected do not connected again
//   if (connected) {
//     console.log("Database is already connected");
//     return;
//   }
//   // connect to db
//   const uri = process.env.MONGODB_URI;
//   if (!uri) {
//     throw new Error("DATABASE_URI is not defined in environment variables");
//   }

//   try {
//     mongoose.connect(uri, { dbName: "audiophile-ecommerce" });
//     connected = true;
//     console.log("MongoDB Connected Successfully");
//   } catch (err) {
//     console.error("Failed to connect to MongoDB:", err);
//     throw err;
//   }
// };

// export default connectDB;

import mongoose from "mongoose";

declare global {
  // allow global var in TypeScript
  // eslint-disable-next-line no-var
  var mongooseConnection: {
    conn: typeof mongoose | null;
    promise: Promise<typeof mongoose> | null;
  };
}

if (!global.mongooseConnection) {
  global.mongooseConnection = { conn: null, promise: null };
}

const connectDB = async () => {
  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in environment variables");
  }

  if (global.mongooseConnection.conn) {
    return global.mongooseConnection.conn;
  }

  if (!global.mongooseConnection.promise) {
    global.mongooseConnection.promise = mongoose
      .connect(uri, { dbName: "audiophile-ecommerce" })
      .then((mongoose) => mongoose)
      .catch((err) => {
        console.error("MongoDB connection error:", err);
        throw err;
      });
  }

  global.mongooseConnection.conn = await global.mongooseConnection.promise;
  return global.mongooseConnection.conn;
};

export default connectDB;
