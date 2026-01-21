export const getProjects = () => {
    return fetch("/api/projects")
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            return data;
        })
        .catch((error) => {
            throw error;
        });
};

export const getProjectById = (id) => {
    return fetch(`/api/project/${id}`)
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then((data) => {
            const cleanData = data.map((item) => {
                return {
                    id: item.id,
                    nameProj: item.nameProj,
                    description: item.description,
                    techs: item.techs,
                    slogan: item.slogan,
                    demo: item.demo,
                    repo: item.repo,
                    projectImage: item.projectImage,
                    id_author: item.id_author,
                    owner: item.owner,
                    jobTitle: item.jobTitle,
                    authorImage: item.authorImage,
                };
            });

            return cleanData[0];
        })
        .catch((error) => {
            throw error;
        });
};

export const addProjects = (data) => {
    return fetch("/api/project", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(() => {
            return;
        })
        .catch((error) => {
            throw error;
        });
};
