const wpcasBackendUrl =
  process.env.WPCAS_SERVICE_BACKEND_IP || 'http://localhost:3000';
const marketBackendUrl =
  process.env.MARKETPLACE_SERVICE_BACKEND_IP || 'http://localhost:3000';

module.exports = {
  wpcasBackendUrl,
  marketBackendUrl,
};
