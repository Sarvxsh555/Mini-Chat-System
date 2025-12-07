const express=require("express");
const app=express();
const mongoose=require("mongoose");
let port=8080;
const path=require("path");
const Chat=require("./models/chats.js");
const methodOverride=require("method-override");

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/learn');
}

main()
    .then((res)=>{
    console.log("MongoDB Connected Successfully");
    })
    .catch(err => console.log(err));



app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(methodOverride("_method"));



//Home route
app.get("/",(req,res)=>{
    res.send("App is Running->Home route");
});

//Index Route
app.get("/chats",async (req,res)=>{
    let allChats=await Chat.find();
    console.log(allChats);
    res.render("index.ejs",{allChats});
});

//New Route
app.get("/chats/new",(req,res)=>{
    res.render("new.ejs");
});

//Create Route
app.post("/chats",(req,res)=>{
    let {from,to,msg}=req.body;
    let newChat=new Chat({
        from : from,
        msg : msg, 
        to : to,
        created_at : new Date()
    });


    newChat.save().then((res)=>{
        console.log(res);
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
    
});

//Show Route
app.get("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findById(id);
    console.log(chat);
    res.render("show.ejs",{chat});
});

//edit-form route
app.get("/chats/:id/edit",async(req,res)=>{
    let {id}=req.params
    let chat=await Chat.findById(id);
     console.log(chat);
    res.render("edit.ejs",{chat});
});

//Edit Route
app.put("/chats/:id",async(req,res)=>{
    let {id}=req.params
    let {newMsg}=req.body;
    let chat=await Chat.findByIdAndUpdate(id,{msg : newMsg}, { new: true });
    console.log(chat);
    res.redirect("/chats");
});

//Delete Route
app.delete("/chats/:id",async(req,res)=>{
    let {id}=req.params;
    let chat=await Chat.findByIdAndDelete(id);
    console.log(chat);
    res.redirect("/chats");
});


app.listen(port,()=>{
    console.log("SuccessFully Running at port 8080");
});