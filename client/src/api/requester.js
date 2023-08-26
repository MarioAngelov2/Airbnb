const URL = "http://localhost:5001";

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

export async function login() {
    try {
        const response = await fetch(`${URL}/login`);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}
