export const validateSchema = (schema) => (req, res, next) => {
    try {
        schema.parse(req.body);//it allow me validate with any schema like registerSchema from ../schema/auth.schema.js
        next();
    } catch (error) {
        return res.status(400).json(error.errors.map(err => err.message));
    }//try catch is because it can overturn the server if it is not handle
}