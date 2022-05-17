import mongoose from "mongoose";

const connectDatabase = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });
        console.log("Mongo Connected");
    } catch (error) {
        console.log(`Error: ${errpr.message}`);
        process.exit(1);
    }

};
export default connectDatabase;