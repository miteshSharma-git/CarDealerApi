import express from "express";
import {validateToken } from "./src/utils/jwt.js";
import swaggerUi  from 'swagger-ui-express';
import swaggerDocument from './src/resources/swagger.json' with {type: "json"};
import { getUserByUserId } from "./src/routes/userRoutes.js";
import dotenv from 'dotenv';
import { crateUserRouter } from "./src/routes/userRoutes.js";
import { carsRouter, createDealerRouter,dealsRouter,soldVehiclesRouter } from "./src/routes/Dealer.js";
import {  createAdminRouter, getAllUsersRoute } from "./src/routes/adminRoutes.js";


import { loginRoute, logoutRouter } from "./src/routes/commanRoutes.js";


// Property
dotenv.config();
const app = express();
const port = 3000



// functions
app.listen(port, () => console.log(`Server Runnig on ${port}`));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));



// ADMIN ROUTES START //

/**
 * Get All Simple Users 
 * Date 16-06-2024 (Api Created Date)
 * Created By : Mitesh  
 * Modification (No)
  */ 
app.get("/admin/users", getAllUsersRoute);

/**
 * Get All Dealer 
 * Date 16-06-2024 (Api Created Date)
 * Created By : Mitesh  
 * Modification (No)
  */ 
app.get("/admin/createAdmin", createAdminRouter);




// ADMIN ROUTES END //


/**
 *  User/DealerShip Login
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/login",loginRoute );


/**
 *  User/DealerShip Logout
 *  Date 16-06-2024 (Api Created Date)
 * Created By : Mitesh  
 *  Modification (No)
 */
app.get("/logout",logoutRouter)


/**
 *   Create Normal User 
 *  Date 16-06-2024 (Api Created Date)
 *  Discription : Taking Parameter of isUser , Which is type of Boolean 
 *                if its True then simpleUseris Created if its false then 
 *                create Dealership User
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/createUser", validateToken,crateUserRouter);


/**
 *  Create Dealer User 
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/createDealer", validateToken,createDealerRouter);


/**
 *  Create SoldVehicles 
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/soldVehicles", validateToken,soldVehiclesRouter);


/**
 *  Create Car 
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/createCar", validateToken,carsRouter);

/**
 *  Create Deal 
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/createDeal", validateToken,dealsRouter);

/**
 *  Create Admin User 
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.post("/createAdmin", validateToken,createAdminRouter);

/**
 *  Get  User By Id
 *  Date 16-06-2024 (Api Created Date)
 *  Created By : Mitesh  
 *  Modification (No)
 */
app.get("/user/:id", validateToken,getUserByUserId)





