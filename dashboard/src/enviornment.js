let IS_PROD = true;
const server = IS_PROD ?
    "https://tradeflow-stock-platform.onrender.com" :
    "http://localhost:3002" ;

module.exports = { server };