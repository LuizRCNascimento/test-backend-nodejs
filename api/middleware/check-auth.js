const jwt = require ("jsonwebtoken");
const { JWT_key} = require ('../config/config');

module.exports = (req, res, next) => {
    try {
        //Recebe token JWT com subject e_id para validação
        const token= this.localStorage.token.split(" ")[1];
        const decoded = jwt.verify(token, JWT_key);
        res.status(200).json({
            idTokenJ: tokenJ, 
            ExpireIn: decoded.exp,
            IssuerJWT:decoded.iss
        })
        next();
        
    } catch (error) {
        console.log(req.userData); 
        return res.status(401).json({
            error: 'Invalid token',
            segredo1: JWT_key,
            segredo2: auth.secret
        });
        
    }
};