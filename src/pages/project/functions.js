import axios from "axios";
const addProject = (payload) => {
    const token = localStorage.getItem("token");
    axios
        .post("http://localhost:7000/project/create", payload, {
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
        .get("http://localhost:7000/project/", {
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
    let url = "http://localhost:7000/project/" + id;
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
    let url = "http://localhost:7000/project/" + payload._id + "/edit";
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
    let url = "http://localhost:7000/project/" + id + "/delete";
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
    deleteSingleProjectAPI
};
