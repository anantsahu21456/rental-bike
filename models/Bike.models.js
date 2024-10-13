const mongoose = require(mongoose)

const BikeSchema = new mongoose.Schema({},{timestamps:true})

export const Bike = mongoose.model("Bike" , BikeSchema)