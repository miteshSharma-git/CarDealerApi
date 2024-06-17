import { genrateToken, invalidateToken } from "../utils/jwt.js";
import { db } from "../utils/mongodb.js";
import { userModel } from "../modals/models.js";

// Propperty
const userDB = db.collection("User");



export const crateUserRouter = async (req, res) => {
  // only for swagger documentation
  const {
    user_email,
    password,
    user_id,
    user_location,
    vehile_info,
    user_first_name,
    user_city,
    user_number,
    user_birth_date
  } = req.body;

  // Validation Using Joi
  const { error, value } = userModel.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const savedUser = await userDB.insertOne(value);
  return res.json(savedUser);
};



export const getUserByUserId =async (req, res) => {
     const userId= req.params.id;
     console.log(userId)
     if(userId==null || userId==undefined || userId ==''){
      return res.json({'message':'provide valid id'});
     }

      const user = await userDB.findOne({user_id: userId});
      return await res.json(user); 
};