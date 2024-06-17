import { MongoClient } from "mongodb";
import { faker } from "@faker-js/faker";


// Properties
const password = encodeURIComponent("Utl1LQXFd0wGJk2d");
const username = encodeURIComponent("miteshsharma706");
const cluster = "cluster0.ueat4zw.mongodb.net";
const uri = `mongodb+srv://${username}:${password}@${cluster}/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri);



// Functions
// export async function connect() {
//   try {
//     const database = client.db("CarApp");
//     const users = da tabase.collection("User");
//     console.log(await users.find().toArray());
//   } catch (error) {
//     console.error(error);
//   }
// }

const db=  client.db("CarApp");
export {db};