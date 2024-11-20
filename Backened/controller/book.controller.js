import Book from "../models/book.model.js";

export const getBook=async(req,res)=>{
    try{

        const book=await Book.find();
        res.status(200).json(book);
    }catch(error){
console.log(error);
res.status(505).json(error);

    }
}