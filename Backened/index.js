
import express, { urlencoded } from 'express';
import bookRoute from './route/book.route.js';
import userRoute from "./route/user.route.js";
import mongoose from 'mongoose';
import fileUpload from 'express-fileupload';
// import cloudinary from './cloudinary/cloud';
// const cloudinary = require("./cloudinary/cloud");
// const upload = require("./cloudinary/upload");
// const cloudinary = require("./cloudinary/cloud");
import cloudinary from './cloudinary/cloud.js';
import ProductData from './models/product.js';

import cors from 'cors';
import dotenv from 'dotenv';
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());
app.use(urlencoded({extended:true}));
app.use(fileUpload(
  {useTempFiles:true}
 ));
 
// app.use(fileUpload());

const port = process.env.PORT;
const URI = process.env.MongoDBURI;

app.use("/book",bookRoute);
app.use("/user",userRoute);


app.get("/api/adminData",async(req,res)=>{
  try{
    const data = await ProductData.find();
    console.log("ye bck data hai->",data);
    
    res.json(data);
  }catch(err){
    res.status(500).json({message: err.message});
  }
});

app.post("/api/adminData", async(req,res)=>{
    let {name,price,description} = req.body;
  
    // const fileimg = req.files?.image;
    const fileimg = req.files?.image;
    console.log("ye fileimg hai->",fileimg);
    
    if (!fileimg) {
      return res.status(400).json({ message: "No image file uploaded." });
  }
    // const image = req.file.path;
    console.log("ye name hai-> ",name);
    console.log("ye image hai-> ",fileimg);
    console.log("ye price hai-> ",price);
    console.log("ye description hai-> ",description);
  
    // const file = req.files.photo;
    // const uploadRes = await cloudinary.uploader.upload(file.tempFilePath,{folder: "online-Shop"},(err,result)=>{
    //   console.log("empty files->",result);
    // });
    
    // console.log(req);
    try{
      // const file = image;
      const uploadRes = await cloudinary.uploader.upload(fileimg.tempFilePath,{folder: "online-Shop"},(err,result)=>{
        console.log("empty files->",result);
        console.log("empty fileserr->",err);
        
        // console.log("ye return url hai->",uploadRes);
      });
      console.log("ye return url hai->",uploadRes);
      // if(image){
      //  const uploadRes = await cloudinary.uploader.upload(image,{
      //     upload_preset: "onlineShop"
      //   })
  
        if(uploadRes){
          const adminData = new ProductData({
            name,
            price,
            description,
            image:uploadRes.secure_url
          })
  
          const savedProduct = await adminData.save();
          res.status(200).send(savedProduct);
        }
      // }
    }catch(error){
      console.log(error);
      res.status(500).send(error);
    }
    
    // const admindata = new ProductData({
    //   name:name,
    //   price:price,
    //   description:description,
    //   // image:image
    // });
    // await admindata.save();
    // res.json(admindata);
  });


try{
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected");
    

}catch(error){
    console.log(error);
}



app.listen(port, (err) => {
    if (err) {
        console.log(err.message);
    } else {
        console.log("Successfully running on http://localhost:" + port);
    }
});
