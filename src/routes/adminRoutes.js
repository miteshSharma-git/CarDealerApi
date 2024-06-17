import { adminModel } from "../modals/models.js";
import { db } from "../utils/mongodb.js";



const adminDB=  db.collection('Admin');
const dealershipDB=  db.collection('Dealership');

export const getAllUsersRoute = async (req, res) => {
    return res.json(await userDB.find({}).toArray());
};


export const createAdminRouter = async (req, res) => {
    // only for swagger documentation
    const {
      admin_id,
      password
     } = req.body;
  
    // Validation Using Joi
    const { error, value } = adminModel.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const admin = await adminDB.insertOne(value);
    return res.json(admin);
};


export const getAllDealersRouter = async (req, res) => {
    // only for swagger documentation
    const {
      admin_id,
      password
     } = req.body;
  
    // Validation Using Joi
    const { error, value } = adminModel.validate(req.body);
    if (error) {
      return res.status(400).json({ message: error.details[0].message });
    }
    const admin = await adminDB.insertOne(value);
    return res.json(admin);
}




  