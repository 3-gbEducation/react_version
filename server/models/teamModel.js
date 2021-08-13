const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://admin:admin123@cluster0.ciipg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const dbName = 'react_version'

async function getTeamData(callback) {
    let data = [];
    try {
        await client.connect();
        const collection = client.db(dbName).collection("team");

        const query = {};
        const options = {};
        const cursor = collection.find(query, options);
        // print a message if no documents were found
        if ((await cursor.count()) === 0) {
            console.log("No documents found!");
            // callback({})
        }
        // replace console.dir with your callback to access individual elements
        await cursor.forEach(item => data.push(item));
        // console.dir(cursor);

    } finally {
        callback(data)
        await client.close();
    }
}

getTeamData().catch(console.log('team data fetched'));

module.exports.getTeamData = getTeamData;