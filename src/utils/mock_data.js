import { faker } from "@faker-js/faker";
import Joi from "joi";
import { db } from "./mongodb.js";
import { v4 } from "uuid";

const usersList = [];
const carsList = [];
const dealershipList = [];
const dealsList = [];
const soldVehicleList=[];
export function generateMockDataForUser() {
  for (let i = 0; i <= 10; i++) {
    let user = {
      user_email: faker.internet.email(),
      user_id: faker.string.uuid(),
      user_location: faker.location.country(),
      user_info: {
        user_first_name: faker.person.firstName(),
        user_last_name: faker.person.lastName(),
        user_city: faker.location.city(),
        user_number: faker.phone.number(),
        user_birth_date: faker.date.between({
          from: "01-03-1999",
          to: "01.03-2004",
        }),
      },
      user_password: faker.internet.password(),
    };
    usersList.push(user);
  }
  users.insertMany(usersList);
}

export async function genrateCarsData() {
  for (let i = 0; i <= 10; i++) {
    let car = {
      car_id: faker.string.uuid(),
      type: faker.vehicle.type(),
      name: faker.company.name(),
      model: faker.vehicle.model(),
      car_info: {
        vechile_type: faker.vehicle.type(),
        vechile_color: faker.vehicle.color(),
        vechile_energy_type: faker.vehicle.fuel(),
        vechile_manufacturer: faker.vehicle.manufacturer(),
        vechile_model: faker.vehicle.model(),
        vechile_vin: faker.vehicle.vin(),
        vechile_vrn: faker.vehicle.vrm(),
        vehicle_image: faker.image.transport(1234, 2345, true),
      },
    };
    carsList.push(car);
  }
  console.log(carsList);
  return await db.collection("Cars").insertMany(carsList);
}

// Dealership
export async function genrateDealershipData() {
  for (let i = 0; i <= 10; i++) {
    let dealership = {
      dealership_email: faker.internet.email(),
      dealership_id: faker.string.uuid(),
      user_location: faker.location.country(),
      dealership_name: faker.company.name(),
      cars_id: faker.string.uuid(),
      dealership_info: {
        user_first_name: faker.person.firstName(),
        user_last_name: faker.person.lastName(),
        user_city: faker.location.city(),
        user_number: faker.phone.number(),
        user_birth_date: faker.date.between({
          from: "01-03-1999",
          to: "01.03-2004",
        }),
      },
      user_password: faker.internet.password(),
    };
    dealershipList.push(dealership);
  }
  return await db.collection("Dealership").insertMany(dealershipList);
}
// Deals
export async function genrateDealsData() {
  for (let i = 0; i <= 10; i++) {
    let deal = {
      dealership_id: faker.string.uuid(),
      cars_id: faker.string.uuid(),
      dealership_info: {
        user_id: faker.string.uuid(),
      },
    };
    dealsList.push(deal);
  }
  return await db.collection("Deals").insertMany(dealsList);
}

// Sold Vechile
export async function genrateSoldVechile() {
  for (let i = 0; i <= 10; i++) {
    let soldVehicle = {
      vehicles_id: faker.string.uuid(),
      car_id: faker.string.uuid(),
      dealership_info: {
        vechile_type: faker.vehicle.type(),
        vechile_color: faker.vehicle.color(),
        vechile_energy_type: faker.vehicle.fuel(),
        vechile_manufacturer: faker.vehicle.manufacturer(),
        vechile_model: faker.vehicle.model(),
        vechile_vin: faker.vehicle.vin(),
        vechile_vrn: faker.vehicle.vrm(),
        vehicle_image: faker.image.transport(1234, 2345, true),
      },
    };
    soldVehicleList.push(soldVehicle);
  }
  return await db.collection("SoldVehicles").insertMany(soldVehicleList);
}



