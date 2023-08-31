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
};

module.exports = errorMiddleware;
