const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin123@cluster0.ciipg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'react_version'

async function getTutorData(callback) {
    try {
        await client.connect();
        const collection = client.db(dbName ).collection("tutors");

        const query = {"name": "Praveen Divakar"};
        const options = {};
        const cursor = collection.find(query, options);
        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
        }
        // replace console.dir with your callback to access individual elements
        await cursor.forEach(console.dir);
        console.dir(cursor);

    } finally {
        await client.close();
    }
}

getTutorData().catch(console.log('done'));

module.exports.getTutorData = getTutorData;



