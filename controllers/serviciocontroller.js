const serviciocontroller = {};

serviciocontroller.getservicioeventos = async (req, res) => {
    try {
        const query = "SELECT * FROM servicioeventos";
        const rows = await connection.query(query);

        res.status(200).json(rows);
    } catch (error) {
        console.error("Error while fetching data:", error);
        res.status(500).json({ error: "Internal Server Error" });
    } 
};

module.exports = serviciocontroller;
