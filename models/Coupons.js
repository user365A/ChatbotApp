const mongoose = require('mongoose');
const { Schema } = mongoose;

const couponSchema = new Schema({
   course:String,
   link:String
});

mongoose.model('coupons', couponSchema);
