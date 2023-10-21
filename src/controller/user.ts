import { Request,Response } from "express";
const user = (req:Request,res:Response) =>{
    const data = req.body;
    res.send(data)
};

export default user;

