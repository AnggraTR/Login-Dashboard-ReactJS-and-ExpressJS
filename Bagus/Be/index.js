/////////////////////////////
//AUTHOR  BAGUS ANDRE WIJAYA
///////////////////////////
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set, get, child } = require('firebase/database');
const { v4: uuidv4 } = require('uuid');
const app = express();
require('dotenv').config();

// MySQL Connection
const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
    port: process.env.DB_PORT
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});
////////////////////////////////////////
//
//CONFIGURASI KAMU DIBAWAH
//
//////////////////////////////////////

const firebaseConfig = {
    apiKey: "AIzaSyAxHewvHY8332f-DmSnuZ4SPjoEM1-HaXQ",
    authDomain: "webtools-9a679.firebaseapp.com", 
    databaseURL: "https://webtools-9a679-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "webtools-9a679",
    storageBucket: "webtools-9a679.appspot.com",
    messagingSenderId: "887212198058",
    appId: "1:887212198058:web:258fd52dd16f89c74468d3",
    measurementId: "G-BT9XFBQG0E"
    
};



// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getDatabase(firebaseApp);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: '*' }));

// MySQL Login endpoint
app.post('/login', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    // Query the database to check if the username exists
    connection.query('SELECT * FROM tbl_users WHERE username = ? and password = ?', [username,password], (err, results) => {
        if (err) {
            console.error('Error querying the database:', err);
            res.status(500).json({ message: 'Internal server error' });
            return;
        }

        // Check if the username exists in the database
        const userExists = results.length > 0;

        // Set status code based on userExists value
        const statusCode = userExists ? 200 : 401;

        // Return the result
        res.status(statusCode).json({
            message: userExists ? 'Login successful' : 'Login failed',
            username: username
        });
    });
});

// Firebase Product endpoints
//
//contoh request body nya
/////////////////////////////////////////
        // {
        //     "name": "Product Name",
        //     "description": "Product Description", 
        //     "price": 99.99,
        //     "category": "Electronics",
        //     "stock": 100
        // }
/////////////////////////////////////////
    //
    //
    //
app.post('/products', async (req, res) => {
    try {
        const product = req.body;
       
        const id = uuidv4(); // Generate UUID v4 for product
        product.id = id; // Add UUID to product object
        const productRef = ref(db, 'products/' + id);
        await set(productRef, product);
        res.status(201).json({ message: 'Product created successfully', product });
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

// Get all products
app.get('/products', async (req, res) => {
    try {
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, 'products'));
        if (snapshot.exists()) {
            const products = snapshot.val();
            const productsArray = Object.values(products).map(product => {
                return product;
            });
            res.status(200).json({
                metadata: {
                    status: "ok",
                    code: 200
                },
                data: productsArray
            });
        } else {
            res.status(404).json({
                metadata: {
                    status: "error", 
                    code: 404
                },
                data: []
            });
        }
    } catch (error) {
        console.error('Error fetching products:', error);
        res.status(500).json({
            metadata: {
                status: "error",
                code: 500
            },
            data: []
        });
    }
});

// Delete product by ID
app.delete('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const productRef = ref(db, `products/${productId}`);
        
        // Check if product exists
        const snapshot = await get(productRef);
        if (!snapshot.exists()) {
            return res.status(404).json({
                metadata: {
                    status: "error",
                    code: 404,
                    message: "Product not found"
                }
            });
        }

        // Delete the product
        await set(productRef, null);
        
        res.status(200).json({
            metadata: {
                status: "ok",
                code: 200,
                message: "Product deleted successfully"
            }
        });
    } catch (error) {
        console.error('Error deleting product:', error);
        res.status(500).json({
            metadata: {
                status: "error",
                code: 500,
                message: "Internal server error"
            }
        });
    }
});


app.get('/products/:id', async (req, res) => {
    try {
        const productId = req.params.id;
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, `products/${productId}`));
        if (snapshot.exists()) {
            res.status(200).json(snapshot.val());
        } else {
            res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.listen(5050, () => {
    console.log(`Server is running on port 5001`);
});
