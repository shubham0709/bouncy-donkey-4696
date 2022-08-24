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
export { addProject };
