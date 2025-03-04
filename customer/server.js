import express from "express";

const app=express();


app.use(express.json());

connectdb();

app.get("/test",async(req,res)=>{
    res.send("hello");
})

app.listen(process.env.PORT,()=>{
    console.log("app is listening ");
})


