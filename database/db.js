import mongoose from "mongoose";


const DBConnection = async() => {
    const DB_URL = "mongodb+srv://user:1234@user-register.zbqizsq.mongodb.net/"
    try{
      await mongoose.connect(DB_URL, {useUnifiedTopology: true });
      console.log("Database Connected Sucessfully");
    } 
    catch(error){
        console.log(`Error while connecting with the database`, error.message);
    }
}

export default DBConnection;