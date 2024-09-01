const cron = require('node-cron');
const { fetchEthereumPrice } = require('../controller/ethereum')

exports.priceScheduler = () => {
    fetchEthereumPrice();
    cron.schedule('*/10 * * * *', fetchEthereumPrice);
}
