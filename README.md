# admin-ui

Welcome to the Admin-UI project! This is an admin interface with the following features:

1. **Admin Sign Up and Login:**

   - Allows administrators to create accounts and log in securely.

2. **Course Provider Management:**

   - Admins can approve or reject third-party course providers and their courses.
   - Courses are reviewed based on the provider's profile and course content.

3. **Credit Settlement:**

   - Admins can settle credits for third-party course providers.

4. **WPCAS (User Management):**

   - View user details and profiles.
   - Set up new surveys for users.
   - Add competency and level-based questions.

5. **User Wallet Management:**

   - Admins can view user wallets.
   - Add or remove credits for course consumers (users).

6. **Backend Service Connections:**
   - Connects to the following backend services:
   - `marketplace-service`: Fetches user (course consumer) data and updates accordingly.
   - `course-manager-service`: Fetches third-party course provider courses and profiles, updating them accordingly.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following installed on your machine:

Node.js: Download and install Node.js

### Installation

Clone the repository:

```
git clone https://github.com/COMPASS-DPG/admin-ui.git
cd admin-ui
```

Install dependencies:

```
npm install
```

.env

Configure the connection to the backend service by updating the .env file with the appropriate API endpoint.

### Development

To start the development server, run the following command:

```
npm run dev
```

Visit http://localhost:3000 in your browser to view the application.

### Deployment

Follow these steps to deploy the project:

Build the project:

```
npm run build
```

Start the production server:

```
npm start
```
