const errorMiddleware = (err, req, res, next) => {
    if (err.message === "Authorization token not found.") {
        return res.status(401).json({ error: err.message });
    }

    if (err.message === "User ID not found in token.") {
        return res.status(400).json({ error: err.message });
    }

    if (err.message === "Place is not found.") {
        return res.status(404).json({ error: err.message });
    }

    if (err.message === "Places not found.") {
        return res.status(404).json({ error: err.message });
    }

    if (err.message === "Invalid URL format") {
        return res.status(400).json({ error: err.message });
    }

    if (err.message === "User not found") {
        return res.status(404).json({ error: err.message });
    }

    if (err.message === "Invalid credentials") {
        return res.status(422).json({ error: err.message });
    }

    if (err.message === "Username, email or password are missing") {
        return res.status(400).json({ error: err.message });
    }

    if (err.message === "The user already exist. Please log in.") {
        return res.status(409).json({ error: err.message });
    }
};

module.exports = errorMiddleware;
