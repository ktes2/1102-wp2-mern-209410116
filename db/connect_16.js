import mongoose from "mongoose";

const connectDB_16 = (url) => {
    return mongoose.connect(url);
}

export default connectDB_16;