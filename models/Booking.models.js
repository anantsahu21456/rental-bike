const mongoose =  require(mongoose)

const BookingSchema = new mongoose.Schema({},{timestamps:true})

export const Booking  = mongoose.model("Booking",BookingSchema)