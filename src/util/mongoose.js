import mongoose from "mongoose"

export default {
    mutilpleMongooseToObject: function (mongooses) {
        return mongooses.map(mongoose => mongoose.toObject())
    },
    mongooseToObject: function (mongoose) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
}