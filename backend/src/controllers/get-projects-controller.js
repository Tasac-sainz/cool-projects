const mysql = require("../database/mysql-pool");

const getProjectsController = async (req, res) => {
    try {
        const query =
            "SELECT * FROM projects INNER JOIN authors ON projects.fk_id_author = authors.id_author";

        const connection = await mysql.getConnection();
        const data = await connection.query(query);
        await connection.end();
        res.json(data[0]);
    } catch (error) {
        console.log(error);
        res.send("Algo ha ido mal, lo siento");
    }
};

module.exports = { getProjectsController };
