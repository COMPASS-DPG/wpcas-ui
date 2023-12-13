const courseManagerBackendUrl =
  process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL ||
  'http://localhost:3000';

const wpcasBackendUrl =
  process.env.NEXT_PUBLIC_WPCAS_SERVICE_BACKEND_IP || 'http://localhost:3000';

const marketBackendUrl =
  process.env.NEXT_PUBLIC_MARKETPLACE_SERVICE_BACKEND_IP ||
  'http://localhost:3000';

module.exports = {
  wpcasBackendUrl,
  marketBackendUrl,
  courseManagerBackendUrl,
};
