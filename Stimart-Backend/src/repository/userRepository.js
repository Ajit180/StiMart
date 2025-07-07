import User from "../schema/user.js";
import crudRepository from "./crudRepository.js";

const userRepository ={
    ...crudRepository(User),
    
    getbyemail:async function(email){
      const user= await User.findOne({email});
      return user;
    },

    findbyusername:async function(username){
       const user =  await User.findOne({username});  
       return user;
    },
    
    getbyToken:async function(token){
       const user= await User.findOne({verificationToken:token}); //doubt
       return user;
    },
    getUserById: async (userId) => {
      try {
        const user = await User.findById(userId); // This will find a user by their _id
        return user; // Returns the user object
      } catch (error) {
        console.log("Error fetching user by ID:", error.message);
        throw new Error("User not found");
      }
    },

    createAdmin:async()=>{
      
    }
}


export default userRepository;

