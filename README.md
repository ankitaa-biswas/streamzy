#  Streamzy

**Streamzy** is a **full-stack MERN real-time chat and video calling application** designed to help people **meet new friends and learn new languages** through live communication.

The platform enables users to interact using **real-time messaging and video calls**, making language learning more social, interactive, and practical.

---

##  Live Application

🔗 **Production:**  
https://streamzy-3b59.onrender.com



---

##  Tech Stack (MERN)

### Frontend
- React
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- Cookie-based authentication
- Stream Chat & Stream Video SDK

### Real-Time Features
- Stream Chat (real-time messaging)
- Stream Video (video calling)

---

##  Features

-  Secure user authentication (Signup / Login / Logout)
-  Real-time chat using Stream Chat
-  Video calling with Stream Video SDK
-  Share Screen and give Reaction
-  Meet new people to practice and learn new languages
-  Cookie-based JWT authentication
-  Secure frontend–backend communication with CORS
-  Production-ready MERN architecture

---

##  Environment Variables (Backend)

Create a `.env` file inside the `backend` folder:

```env
PORT=5001
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
STREAM_API_KEY=your_stream_api_key
STREAM_API_SECRET=your_stream_api_secret
CLIENT_URL=http://localhost:5173
NODE_ENV=production
```

##  Running Locally
```
git clone https://github.com/ankitaa-biswas/streamzy.git
cd streamzy
```

## Run Backend
```
cd backend
npm install
npm run dev
```

## Run Frontend
```
cd frontend
npm install
npm run dev
```
