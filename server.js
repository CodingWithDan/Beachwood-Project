const express = require('express')
const app = express()
const cors = require('cors')
const { domainToASCII } = require('url')
const MongoClient = require('mongodb').MongoClient
require ('dotenv').config()

let db,
    dbConnectionString = process.env.DB_STRING,
    dbName = 'beachwood'
    collection 

MongoClient.connect(dbConnectionString)
    .then(client => {
        console.log('Connected to database')
        db = client.db(dbName)
        collection = db.collection('employee_info')
    })