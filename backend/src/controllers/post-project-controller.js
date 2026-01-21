const mysql = require("../database/mysql-pool");

const addProjectsController = async (req, res) => {
    try {
        const { owner, jobTitle, authorImage } = req.body;

        if (!owner || !jobTitle ) {
            return res.status(400).send("Faltan campos obligatorios");
        }
        
        const queryAuthor = "INSERT INTO authors (owner, jobTitle, authorImage) VALUES ( ?, ?, ? ) ";

        const connection = await mysql.getConnection();
        const dataAuthor = await connection.query(queryAuthor, [owner, jobTitle, authorImage]);

        const { nameProj, description, techs, slogan, demo, repo, projectImage } = req.body;

        if (!nameProj || !description || !techs ) {
            return res.status(400).send("Faltan campos obligatorios");
        }
        const query = "INSERT INTO projects (nameProj, description, techs, slogan, demo, repo, projectImage, fk_id_author) VALUES ( ?, ?, ?, ?, ?, ?, ?, ?) ";

        await connection.query(query, [nameProj, description, techs, slogan, demo, repo, projectImage, dataAuthor[0].insertId])
        await connection.end()


        res.status(201).json({message: "Proyecto creado"});
    } catch {
        res.status(400).send("Algo ha ido mal");
    }
};

module.exports = {addProjectsController};
