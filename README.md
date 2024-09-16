The application is about multiple users accessing and editing a document on the shared drive. It allows users to simultaneously edit the doc and see other user’s changes.


Frontend is implemented using HTML/CSS, Bootstrap and ReactJS.
Backend is implemented using NodeJS, ExpressJS and PostreSQL.


**Functionalities Working**

Login UI 
Real time edit by multiple users.
If new document is created, it does not affect the old one.


**Remaining**

Auto suggestion and grammar checks



**Improvements**

State management
Error handling
Unit test cases


Frontend

Navigate to
cd realTimeDocumentEditor

Install Dependencies
npm install

Create a .env file with sample fields in .env.sample

To run the application
npm run dev

Navigate to eg url to edit the document
http://localhost:5173/document/c4a94d72-2896-44d5-a00a-ac33a054aaa2


Backend

Navigate to
cd realTimeDocumentEditor-BE

Install Dependencies
npm install

Create a .env file with fields in .env.sample

Postgres
Create a postgres database
npx prisma generate
npx prisma migrate dev --create-only

To run the application
npm run dev
