import user from "../models/Register.js";

export const saveRegisterData = async(request, response) => {
    try{
     const newUser = new user(request.body);

     await newUser.save();
     response.status(200).json({ message: "User Registered sucessfully" })
    }catch(error){
        response.status(500).json({ error: error.message });
    } 
}


export const saveloginData = async (req, res) => {
    try {
      const { username, password } = req.body;
  
      const user1 = await user.findOne({ username });
  
      if (!user1) {
        return res.status(401).json({ message: "Invalid username or password" });
      }
  
      res.status(200).json({ message: "Login successful" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
