const app  = require("./app");
const connectDatabase = require("./db/Database");

// handling uncaught exception error  
process.on("uncaughtException", (err) => {
    console.log(`error: ${err}`);
    console.log("shutting down the server for uncaught exception error")
});
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config({
        path: "backend/config/.env"
    })
}

// connect db
connectDatabase();

// create server 
const server = app.listen(process.env.PORT, () => {
    console.log("listening on port " + process.env.PORT)
})

// unhandled promise rejection 

process.on("unhandledRejection", (err) => {
    console.log(`error: ${err}`);
    console.log("shutting down the server for unhandled rejection error")
    server.close(() => {
        
        process.exit(1)
    })
})