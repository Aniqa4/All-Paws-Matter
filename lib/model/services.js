import mongoose from "mongoose"

const servicesModel= new mongoose.Schema({
    service_name:String,
    description:String
})

export const Services= mongoose.models.services || mongoose.model("services",servicesModel)