const mongoose = require(mongoose)

const OwnerSchema = new mongoose.Schema({
    
},{timestramps:true})

export const Owner = mongoose.model("Owner", OwnerSchema)