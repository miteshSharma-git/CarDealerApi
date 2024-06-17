import { adminModel, carsModel, dealershipModel,dealsModel,soldVehiclesModel } from "../modals/models.js";
import { invalidateToken } from "../utils/jwt.js";
import { db } from "../utils/mongodb.js";

const dealershipDB=  db.collection('Dealership');
const soldVehiclesDB=  db.collection('SoldVehicles');
const carsDB=  db.collection('Cars');


export const createDealerRouter = async (req, res) => {
  // only for swagger documentation
  const {
    dealer_id,
    dealer_email,
    dealer_name,
    dealer_location,
    password,    
    dealer_info
    // dealer_first_name,
    // dealer_last_name,
    // dealer_city,
    // dealer_number,
    // dealer_birth_date
  } = req.body;

  // Validation Using Joi
  const { error, value } = dealershipModel.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const savedDealer = await dealershipDB.insertOne(value);
  return res.json(savedDealer);
};

export const soldVehiclesRouter = async (req, res) => {
  // only for swagger documentation
  const {
    vehicles_id,
    car_id,
    vehicles_info,
    // vechile_type,
    // vechile_color,
    // vechile_energy_type,
    // vechile_manufacturer,
    // vechile_model,
    // vechile_vin,
    // vechile_vrn,
    // vehicle_image,
   } = req.body;

  // Validation Using Joi
  const { error, value } = soldVehiclesModel.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const soldVehicles = await soldVehiclesDB.insertOne(value);
  return res.json(soldVehicles);
};


export const carsRouter = async (req, res) => {
  // only for swagger documentation
  const {
    car_id,
    car_type,
    car_name,
    car_model,
    car_info
    // vechile_type,
    // vechile_color,
    // vechile_energy_type,
    // vechile_manufacturer,
    // vechile_model,
    // vechile_vin,
    // vechile_vrn
   } = req.body;

  // Validation Using Joi
  const { error, value } = carsModel.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const car = await carsDB.insertOne(value);
  return res.json(car);
};


export const dealsRouter = async (req, res) => {
  // only for swagger documentation
  const {
    dealership_id,
    car_id,
    user_id
   } = req.body;

  // Validation Using Joi
  const { error, value } = dealsModel.validate(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }

  const car = await carsDB.insertOne(value);
  return res.json(car);
};




