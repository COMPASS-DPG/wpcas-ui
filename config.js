const wpcasBackendUrl = 'http://3cp.compass.samagra.io';
const marketBackendUrl =
  process.env.MARKETPLACE_SERVICE_BACKEND_IP || 'http://localhost:3000';

module.exports = {
  wpcasBackendUrl,
  marketBackendUrl,
};
