// server.js
const express = require("express");
const { MongoClient } = require("mongodb");
const cors = require("cors");

const app = express();
const port = 3300;
const mongoUrl = "mongodb://localhost:27017";
const dbName = "centerpiece";

let db;

app.use(cors());
app.use(express.json());

// Verbindung zur MongoDB herstellen
MongoClient.connect(mongoUrl, { useUnifiedTopology: true })
    .then((client) => {
        db = client.db(dbName);
        console.log("MongoDB verbunden");
    })
    .catch((error) => {
        console.error("Fehler bei MongoDB-Verbindung:", error);
    });

// Beispielroute zum Einfügen eines Dokuments
app.post("/api/items", async (req, res) => {
    try {
        const item = req.body;
        const result = await db.collection("items").insertOne(item);
        res.status(201).json({ insertedId: result.insertedId });
    } catch (err) {
        res.status(500).json({ error: "Fehler beim Einfügen" });
    }
});

// Beispielroute zum Abrufen aller Dokumente
app.get("/api/", async (req, res) => {
    try {
        const items = await db.collection("centerpiece").find().toArray();
        res.json(items);
    } catch (err) {
        res.status(500).json({ error: "Fehler beim Abrufen" });
    }
});
app.get("/", async (req, res) => {
    try {
        res.json(items)
    } catch (err) {
        res.status(500).json({ error: "Fehler beim Abrufen" });
    }
});

app.listen(port, () => {
    console.log(`Server läuft auf http://localhost:${port}`);
});
