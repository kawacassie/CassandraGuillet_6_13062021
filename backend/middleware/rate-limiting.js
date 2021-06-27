const rateLimit = require ('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 60 * 1000, // 10 mins
    max: 3, // nombre de requêtes
    message: 'Trop de tentatives de connexion. Veuillez attendre 10 min avant une nouvelle tentative'
});

module.exports = { limiter}
