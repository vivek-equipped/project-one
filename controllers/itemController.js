const { MongoClient } = require('mongodb');
const url = 'mongodb+srv://adminuser:wyPCWvdlcoKDvZ61@minerva.jee9t.mongodb.net';  // MongoDB connection URL
const dbName = 'crud-app';  // Database name

async function getItems() {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('items');  // The collection we are working with
        const items = await collection.find().sort({_id:-1}).toArray();  // Fetch all items

        return items;
    } finally {
        await client.close();
    }
}

module.exports = {
    getItems,
};
