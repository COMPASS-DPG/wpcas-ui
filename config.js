const courseManagerBackendUrl =
  process.env.NEXT_PUBLIC_COURSE_MANAGER_SERVICE_BACKEND_URL ||
  'http://localhost:3000';
const marketplaceBackendUrl =
  process.env.NEXT_PUBLIC_MARKETPLACE_SERVICE_BACKEND_URL ||
  'http://localhost:3000';
module.exports = {
  courseManagerBackendUrl,
  marketplaceBackendUrl,
};
