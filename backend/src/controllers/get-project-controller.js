const mysql = require("../database/mysql-pool");

const getProjectByIdController = async (req, res) => {
    try {
        const { id } = req.params;
        if (!id || isNaN(id)) {
            res.status(400).send("Formato incorrecto")
        };

        const query = "SELECT * FROM projects INNER JOIN authors ON projects.fk_id_author = authors.id_author WHERE id = ?";

        const connection = await mysql.getConnection();
        const data = await connection.query(query, [id]);
        await connection.end()
        res.json(data[0]);
    } catch {
        res.status(400).send("Algo ha ido mal");
    }
};

module.exports = {getProjectByIdController};