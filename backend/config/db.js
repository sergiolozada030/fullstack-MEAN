import mongoose from "mongoose";

mongoose.set("strictQuery", false);

export const connetDB = (uri) => {
  return mongoose.connect(uri);
};
