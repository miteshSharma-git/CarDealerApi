import Joi from "joi";
import { v4} from 'uuid';

// UserModel
export const userModel = Joi.object({
  user_email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
  user_id: Joi.optional().default(v4()),
  user_location: Joi.string().min(3).max(30).required(),
  
  vehile_info: Joi.array().items(Joi.string()).optional(),
  user_info: {
    user_first_name: Joi.string().min(3).required(),
    user_last_name: Joi.string().min(3).required(),
    user_city: Joi.string().min(3).required(),
    user_number: Joi.string().min(3).required(),
    user_birth_date: Joi.date().required(),
  },
});

// SoldVehicles
export const soldVehiclesModel = Joi.object({
  vehicles_id: Joi.string().default(v4()),
  car_id: Joi.string().default(v4()),
  vehicle_info:{    
      vechile_type:Joi.string().min(3),
      vechile_color: Joi.string().min(3),
      vechile_energy_type:Joi.string().min(3),
      vechile_manufacturer:Joi.string().min(3),
      vechile_model:Joi.string().min(2),
      vechile_vin:Joi.string().min(3),
      vechile_vrn:Joi.string().min(3),
      vehicle_image:Joi.required().default('https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80')
      }
});

// Cars
export const carsModel = Joi.object({
   car_id:  Joi.string().default(v4()),//error
   car_type:Joi.string().min(3),
   car_name: Joi.string().min(3),
   car_model:Joi.string().min(3),
   car_info: {
    vechile_type:Joi.string().min(3),
    vechile_color: Joi.string().min(3),
    vechile_energy_type:Joi.string().min(3),
    vechile_manufacturer:Joi.string(),
    vechile_model:Joi.string().min(2),
    vechile_vin:Joi.string().min(3),
    vechile_vrn:Joi.string().min(3),
    vehicle_image:Joi.required().default('https://imgd.aeplcdn.com/370x208/n/cw/ec/156405/xuv-3xo-exterior-right-front-three-quarter-32.jpeg?isig=0&q=80')
   } 
});

// Dealership
export const dealershipModel = Joi.object({
  dealer_id:  Joi.string().default(v4()),//error
  dealer_email:Joi.string().email(),
  dealer_name: Joi.string().min(3),
  dealer_location:Joi.string().min(3),
  password: Joi.string().min(8).required(),  
  dealer_info: {
    dealer_first_name: Joi.string().min(3).required(),
    dealer_last_name: Joi.string().min(3).required(),
    dealer_city: Joi.string().min(3).required(),
    dealer_number: Joi.string().min(3).required(),
    dealer_birth_date: Joi.date().required(),
  },
});

// Deals
export const dealsModel= Joi.object({
  dealership_id:  Joi.string().default(v4()),
  car_id :  Joi.string().min(8),
  deal_info :  {
    user_id : Joi.string().min(8),
  }
});

// Admin
export const adminModel= Joi.object({
  admin_id:  Joi.string().min(6).default(v4()),
  password: Joi.string().min(6).required().default('password')
});
