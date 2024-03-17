var creditoscontrollers = {};
//Estructura de un METODO
creditoscontrollers.getCreditos = async (req, res) => {
    if (connection) {
        await connection.query(
            "SELECT * FROM creditos",
            (err, rows) => {
                if (err) {
                    res.status(400).json({ error: "Not FOUND" });
                } else {
                    res.status(200).json(rows);
                }
            }
        )
    }
};

//PUT 
creditoscontrollers.updateCreditos = async (req, res) => {
    if (connection) {
        await connection.query(
            "UPDATE creditos SET anticipo= " + req.body.anticipo + " WHERE id_creditos=" + req.params.id + ";",
            (err, rows) => {
                if (err) {
                    res.status(400).json({ error: "Not FOUND" });
                } else {
                    res.status(200).json(rows);
                }
            }
        )
    }
};

//POST
creditoscontrollers.postCreditos = async (req, res) => {
    if (connection){
        const query = "INSERT INTO creditos SET anticipo = ?";
        const values = [req.body.anticipo];
        await connection.query(query, values, (err, rows) => {
            if(err){
                console.log(err);
                res.status(400).json({error: "NOT FOUND"});
            } else {
                res.status(200).json(rows);
            }
        })
    }
};
//DELETE
creditoscontrollers.deleteCreditos = async (req, res) => {
    if (connection){
        const query = "DELETE FROM creditos WHERE id_creditos = ?";
        const values = [req.params.id_creditos];
        await connection.query(query, values, (err, rows) => {
            if(err){
                console.log(err);
                res.status(400).json({error: "NOT FOUND"});
            } else {
                res.status(200).json(rows);
            }
        })
    }
};
//GET
creditoscontrollers.getCreditos = async (req, res) => {
    if (connection){
        const query = "SELECT * FROM creditos WHERE id_creditos = ?";
        const values = [req.params.id_creditos];
        await connection.query(query, values, (err, rows) => {
            if(err){
                console.log(err);
                res.status(400).json({error: "NOT FOUND"});
            } else {
                res.status(200).json(rows);
            }
        })
    }
};
module.exports = creditoscontrollers;
