import { db } from "../utils/mongodb.js";
  
const userDB = db.collection("User");

export const loginRoute = async (req, res) => {
    const { email, password } = req.body;
    const user = await userDB.findOne({ user_email: email, password: password });
    if (user) {
      return res.json(genrateToken(user._id));
    } else {
      res.json({ message: "UserName or Password are wrong" });
    }
  };


  export const logoutRouter = async (req, res) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader.split(" ")[1];
    return res.json(await invalidateToken(token));
  };