const express = require('express')
const app = express()
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
require('dotenv').config()

let db, 
    dbConnectionString = process.env.DB_STRING,
    dbName = 'beachwood',
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('employee_info')
    })

 
app.set('view engine', 'ejs')
app.use(express.static('public')) 
app.use(express.urlencoded({extended:true})) 
app.use(express.json()) 
app.use(cors())

app.get('/', async(request, response) => {
    try{
        response.render('index.ejs')
    }
    catch (error){
        response.status(500).send({message: error.message})
    }
})
    
app.listen(process.env.PORT || 8000, () => {
    console.log(`Server is running on port`)
})