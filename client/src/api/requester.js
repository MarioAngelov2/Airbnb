const URL = process.env.NODE_ENV === 'development' ? 'http://127.0.0.1:5001' : "https://airbnb-clone-64cu.onrender.com";

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
        const response = await fetch(`${URL}/upload-by-link`, {
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

export async function uploadPhotoFromDevice(data) {
    try {
        const response = await fetch(`${URL}/upload`, {
            method: "POST",
            body: data,
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function createPlace(data) {
    try {
        const response = await fetch(`${URL}/add-place`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ...data }),
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getUserPlaces() {
    try {
        const response = await fetch(`${URL}/user-places`, {
            method: "GET",
            credentials: "include",
        });
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function getPlace(id) {
    try {
        const response = await fetch(`${URL}/place/` + id);
        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function updatePlace(id, data) {
    try {
        const response = await fetch(`${URL}/place/${id}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, ...data }),
        });

        return response;
    } catch (error) {}
}

export async function getPlaces() {
    try {
        const response = await fetch(`${URL}/places`);
        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function bookPlace(id, data) {
    try {
        const response = await fetch(`${URL}/place/booking/${id}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ id, ...data }),
        });

        return response.json;
    } catch (error) {
        console.log(error);
    }
}

export async function getBookings() {
    try {
        const response = await fetch(`${URL}/account/bookings`, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deletePlace(id) {
    try {
        const response = await fetch(`${URL}/place/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}

export async function getBookedPlace(id) {
    try {
        const response = await fetch(`${URL}/account/bookings/` + id, {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response.json();
    } catch (error) {
        console.log(error);
    }
}

export async function deleteBooking(id) {
    try {
        const response = await fetch(`${URL}/account/bookings/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
        });

        return response;
    } catch (error) {
        console.log(error);
    }
}
