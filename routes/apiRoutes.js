const db = require("../db/db.json");

let noteID = 0;

module.exports = function(server){

    server.get("/api/notes", (req, res) => {

            res.json(db);
    });

    server.post("/api/notes", (req, res) => {

        let incomingData = req.body;
        
        //add ID to note
        incomingData.id = noteID++;

        db.push(incomingData);

        res.json(incomingData);

    });

    server.delete("/api/notes/:id", (req, res) => {

        let toDelete = req.params.id;

        for(let i = 0;i < db.length;i++){

            let e = db[i];

            if(e.id == toDelete){
                db.splice(i);
                res.json(true);
            }
        }
    });
}