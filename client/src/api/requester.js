import axios from "axios";

const URL = "http://127.0.0.1:5001";

export async function register(data) {
    try {
        const response = await fetch(`${URL}/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function login(data) {
    try {
        const response = await fetch(`${URL}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function getUser() {
    try {
        const response = await fetch(`${URL}/profile`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function logout() {
    try {
        await fetch(`${URL}/logout`, {
            credentials: "include",
        });
    } catch (error) {}
}

export async function uploadPhotoFromLink(data) {
    try {
        const response = await fetch("http://127.0.0.1:5001/upload-by-link", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ link: data }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

// axios

// export async function register(data) {
//     try {
//         const response = await axios.post("/register", data);
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function login(data) {
//     try {
//         const response = await axios.post("/login", data);
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// }

// export async function getUser() {
//     try {
//         const response = await axios.get("/profile");
//         return response;
//     } catch (error) {
//         console.log(error);
//     }
// }
