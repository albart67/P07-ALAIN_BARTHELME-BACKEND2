



function authRole(role) {
    return (req, res, next) => {
        if (req.id !== id) {
            res.status(401)
            return res.send("not allowed")
        }
        next()
    }
}