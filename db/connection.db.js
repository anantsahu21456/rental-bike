"here we will connect data base"
// const mongoose = require(mongoose)
import mongoose from 'mongoose'
async function databaseconnection(){
    try {
       const connectioninstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log(`mongodb connected !! maja a gya ${connectioninstance.connection.host}`)
    } catch (error) {
        console.log("ERROR:- hai bhaiya mongodb connection nahi ho pa raha hai",error);
        throw error
    }
}
export default databaseconnection
