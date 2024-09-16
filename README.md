The application is about multiple users accessing and editing a document on the shared drive. It allows users to simultaneously edit the doc and see other user’s changes.


Frontend is implemented using HTML/CSS, Bootstrap and ReactJS.
Backend is implemented using NodeJS, ExpressJS and PostreSQL.


**Functionalities**

Login UI 
Real time edit by multiple users.
If new document is created, it does not affect the old one.


# Real-time Collaborative Document Editor

The application is about multiple users accessing and editing a document on the shared drive. It allows users to simultaneously edit the doc and see other user’s changes.

Frontend is implemented using HTML/CSS, Bootstrap and ReactJS. Backend is implemented using NodeJS, ExpressJS and PostreSQL.

## Features
User Signup/Login
Real time editing of document
User friendly UI with responsiveness
Live document updates

## Setup Instructions

### Prerequisites
Ensure you have the following installed:
Node.js (v18 or higher)
Postgres installed
Backend server (built with Express and Socket.io)

### Frontend Setup

1- Navigate to
   ```cd realTimeDocumentEditor```

2- Install the required dependencies:
   
  ``` npm install ```
   
3- Create a .env file with sample fields in .env.sample

4- To run the application
   ```npm run dev```



### Backend Setup
1- Navigate to
```cd realTimeDocumentEditor-BE```

2. Install the required dependencies:
   ```npm install```

3- Create a .env file with fields in .env.sample

4- Postgres

Create a postgres database

```npx prisma generate```

```npx prisma migrate dev --create-only```

5- To run the application:
```npm run dev```

   
