const mongoose = require(mongoose)

const AdminSchema = new mongoose.Schema(
    {
        

},{timestamps:true})

export const Admin = mongoose.model("Admin" , AdminSchema)