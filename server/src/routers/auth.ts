import User from "#/models/user";
import { Router } from "express";

const router = Router(); // creat router

//whenever we want to sign up/create we will use this function of post with  req,res
//data we want from  schema  will be in req.body

//async makes a binding promise with postman which takes time so we have to await task to be completed
router.post('/create', async (req, res) => {
  const{name , email, password} = req.body();   //request for attributes to be created

  //await for newly created user with attributes and then respond 
  const user = await User.create({name, email, password})
  res.json({user});

});

export default router;