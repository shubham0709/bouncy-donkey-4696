import axios from "axios";
const addProject = (payload) => {
    const token = localStorage.getItem("token");
    axios
        .post("https://lit-lowlands-05042.herokuapp.com/project/create", payload, {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err));
}

const getProjectsAPI = () => {
    const token = localStorage.getItem("token");
    return axios
        .get("https://lit-lowlands-05042.herokuapp.com/project/", {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => { return err });
}
const getSingleProjectAPI = (id) => {
    const token = localStorage.getItem("token");
    let url = "https://lit-lowlands-05042.herokuapp.com/project/" + id;
    return axios
        .get(url, {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err);

}
const editSingleProjectAPI = (payload) => {
    const token = localStorage.getItem("token");
    let url = "https://lit-lowlands-05042.herokuapp.com/project/" + payload._id + "/edit";
    return axios
        .patch(url, payload, {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err);

}
const deleteSingleProjectAPI = (id) => {
    const token = localStorage.getItem("token");
    let url = "https://lit-lowlands-05042.herokuapp.com/project/" + id + "/delete";
    return axios
        .delete(url, {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err);
}


// client====================//
const addClient = (payload) => {
    const token = localStorage.getItem("token");
    axios
        .post("https://lit-lowlands-05042.herokuapp.com/client/create", payload, {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            console.log(res.data)
        })
        .catch((err) => console.log(err));
}

const getClientsAPI = () => {
    const token = localStorage.getItem("token");
    return axios
        .get("https://lit-lowlands-05042.herokuapp.com/client", {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => { return err });
}

const deleteSingleClientAPI = (id) => {
    const token = localStorage.getItem("token");
    let url = "https://lit-lowlands-05042.herokuapp.com/client/" + id + "/delete";
    return axios
        .delete(url, {
            headers: {
                authorization: "Bearer " + token,
                "Content-Type": "application/json",
            },
        })
        .then((res) => {
            return res.data;
        })
        .catch((err) => err);
}

export {
    addProject,
    getProjectsAPI,
    getSingleProjectAPI,
    editSingleProjectAPI,
    deleteSingleProjectAPI,
    addClient,
    getClientsAPI,
    deleteSingleClientAPI
};
