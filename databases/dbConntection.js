import mongoose, { connect } from "mongoose";
import validator from "validator";
export const dbConnection =()=>{
    mongoose
        .connect(process.env.MONGO_URL,{
            dbName:"MERN_STACK_JOB_SEEKING"
        })
        .then(()=>{
            console.log("Database connected successfully")

        })
        .catch((err)=>{
            console.log(`something went wrong ${err}`);
        })

}