import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import { db } from "./mongodb.js";

const blaclistTokens = db.collection("BlaclistTokens");
dotenv.config();

export function genrateToken(id) {
  let secretKey = "MItesh";
  let data = {
    time: Date(),
    userId: id,
  };
  const token = jwt.sign(data, secretKey, { expiresIn: "12h" });
  return token;
}

export async function  validateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Access denied" });
  try {
    const decoded = jwt.verify(token, "MItesh");
   const isTokenExist = await  blaclistTokens.findOne({  token:token });
    if(isTokenExist){
        return res.status(401).json({ error: "Access denied" });
    }
      
    req.userId = decoded.userId;
    next();
  } catch (error) {
    res.status(401).json({ error: "Invalid token" });
  }
}

export async function invalidateToken(token) {
   const blackListToken = await blaclistTokens.insertOne({ token: token });
  return blackListToken;
}
