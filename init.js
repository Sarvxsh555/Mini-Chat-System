const mongoose = require("mongoose");

const Chat=require("./models/chats.js");

main()
    .then((res)=>{
        console.log("Connection Successfull");
    })
    .catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/learn');
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Send me your exam sheets",
        created_at: new Date()
    },
    {
        from: "rahul",
        to: "neha",
        msg: "Are you coming to college tomorrow?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "rahul",
        msg: "Yes, I will be there by 9 AM.",
        created_at: new Date()
    },
    {
        from: "arjun",
        to: "neha",
        msg: "Can you share the project files?",
        created_at: new Date()
    },
    {
        from: "meera",
        to: "arjun",
        msg: "Don't forget about today's meeting.",
        created_at: new Date()
    },
    {
        from: "vikram",
        to: "meera",
        msg: "Assignment submitted!",
        created_at: new Date()
    },
    {
        from: "sanjay",
        to: "rahul",
        msg: "Let's go to the gym in the evening?",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "sanjay",
        msg: "I'll send you the notes soon.",
        created_at: new Date()
    },
    {
        from: "neha",
        to: "meera",
        msg: "Call me when you are free.",
        created_at: new Date()
    },
    {
        from: "arjun",
        to: "vikram",
        msg: "Bro, did you finish the DSA assignment?",
        created_at: new Date()
    }
];

Chat.insertMany(allChats);
