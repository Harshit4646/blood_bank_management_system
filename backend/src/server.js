require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes =
    require("./routes/authRoutes");

const dashboardRoutes =
    require("./routes/dashboardRoutes");

const userRoutes =
    require("./routes/userRoutes");

const hospitalRoutes =
    require("./routes/hospitalRoutes");

const donorRoutes =
    require("./routes/donorRoutes");

const inventoryRoutes =
    require("./routes/inventoryRoutes");

const hospitalRequestRoutes =
    require("./routes/hospitalRequestRoutes");

const bloodBankRequestRoutes =
    require("./routes/bloodBankRequestRoutes");

const allocationRoutes =
    require("./routes/allocationRoutes");

const reportRoutes =
    require("./routes/reportRoutes");


const app = express();


// ============================================================
// MIDDLEWARE
// ============================================================

app.use(

    cors({

        origin: [

            "http://localhost:5173",

            process.env.FRONTEND_URL

        ].filter(Boolean),

        methods: [

            "GET",
            "POST",
            "PUT",
            "DELETE",
            "PATCH",
            "OPTIONS"

        ],

        allowedHeaders: [

            "Content-Type",
            "Authorization"

        ]

    })

);


app.use(

    express.json()

);


// ============================================================
// ROUTES
// ============================================================


// AUTH

app.use(

    "/api/auth",

    authRoutes

);


// DASHBOARD

app.use(

    "/api/blood-bank/dashboard",

    dashboardRoutes

);


// USERS

app.use(

    "/api/blood-bank/users",

    userRoutes

);


// HOSPITALS

app.use(

    "/api/blood-bank/hospitals",

    hospitalRoutes

);


// DONORS

app.use(

    "/api/blood-bank/donors",

    donorRoutes

);


// INVENTORY

app.use(

    "/api/blood-bank/inventory",

    inventoryRoutes

);


// HOSPITAL REQUESTS

app.use(

    "/api/hospital/requests",

    hospitalRequestRoutes

);


// BLOOD BANK REQUESTS

app.use(

    "/api/blood-bank/requests",

    bloodBankRequestRoutes

);


// ALLOCATIONS

app.use(

    "/api/blood-bank/allocations",

    allocationRoutes

);


// REPORTS

app.use(

    "/api/blood-bank/reports",

    reportRoutes

);


// ============================================================
// HEALTH CHECK
// ============================================================

app.get(

    "/",

    (req, res) => {

        res.status(200).json({

            success: true,

            message:
                "Blood Bank Management System Backend is running"

        });

    }

);


// ============================================================
// 404 HANDLER
// ============================================================

app.use(

    (req, res) => {

        res.status(404).json({

            success: false,

            message:
                "Route not found"

        });

    }

);


// ============================================================
// SERVER PORT
//
// Render automatically provides process.env.PORT
//
// Local development uses 5000
// ============================================================

const PORT =

    process.env.PORT ||

    5000;


app.listen(

    PORT,

    () => {

        console.log(

            `Server running on port ${PORT}`

        );

    }

);