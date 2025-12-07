<-- Mini Chat System (Node.js + Express + MongoDB) -->

A small chat-based web application built using Node.js, Express, MongoDB, and EJS.
This project was created to practice RESTful routing, CRUD operations, server-side rendering, and database integration

⭐ Features

✏️ Create new chat messages

📜 View all chats

🔍 View a single chat with full details

🔧 Edit / Update an existing chat

🎨 Styled using custom CSS

🗂 RESTful structure (GET, POST, PUT)

🛢 MongoDB + Mongoose for data storage


<--🛠 Tech Stack-->

Frontend:
HTML
CSS
EJS Templates

Backend:
Node.js
Express.js
Method-Override

Database:
MongoDB

🚀 Getting Started
1️⃣ Install Dependencies
npm install

2️⃣ Start MongoDB

Make sure MongoDB is running at:

mongodb://127.0.0.1:27017/learn

3️⃣ (Optional) Seed Example Data
node init.js

4️⃣ Run the App
node index.js


Open the browser at:

👉 http://localhost:8080/chats

🔄 RESTful Routes

Here are the main routes used in the application:

Route	Method	Description : 
/chats	GET	Show all chats
/chats/new	GET	Form to create a new chat
/chats	POST	Add chat to the database
/chats/:id	GET	Show a single chat
/chats/:id	PUT	Update an existing chat

⚠️ Note: PUT requests use method-override since HTML forms don't support PUT.
