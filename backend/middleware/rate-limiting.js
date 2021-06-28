const rateLimit = require ('express-rate-limit');

const limiter = rateLimit({
    windowMs: 5 * 60 * 1000, // 5 mins
    max: 5, // nombre de requêtes
    message: 'Trop de tentatives de connexion. Veuillez attendre 5 min avant une nouvelle tentative'
});

module.exports = { limiter}
