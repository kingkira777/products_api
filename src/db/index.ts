import {  connect } from 'mongoose';

//connection string
const uri = "mongodb+srv://admin:admin1234@cluster0.ubnliui.mongodb.net/Products?retryWrites=true&w=majority&appName=Cluster0";

const ConnectToMongoDB = async () => {
    try {
        await connect(uri);
        console.log("Connected to DB");
    } catch (error) {
        console.log(error);
    }
};

export default ConnectToMongoDB;