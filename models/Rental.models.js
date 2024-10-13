const mongoose = require(mongoose)

const RentalSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        lowercase: true,  // This is good for consistency
    },
    lastname: {
        type: String,
        required: true,
        lowercase: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,  // Unique makes sense for email
        lowercase: true,
    },
    phoneNumber: {  // Standard camelCase
        type: Number,
        required: true,
        unique: true,
    },
    password: {  // Fixing the typo
        type: String,
        required: true,
    }
},{timestamps:true})

export const Rental = mongoose.model("Rental" , RentalSchema)