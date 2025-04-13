[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Play11 Backend

Description-
Play11 is a fantasy cricket application that allows users to create teams, join contests, and track their scores and rankings in real-time. This backend serves as the core of the application, handling user management, match data, player information, contest creation, and wallet transactions.

Features-
User Authentication: JWT-based authentication for secure login and registration.

Player Management: CRUD operations for adding, updating, deleting, and fetching players.

Team Management: Users can create and manage cricket teams.

Match Management: Handles the status of matches (upcoming, live, completed).

Contest System: Create, join, and manage contests with real-time leaderboard updates.

Wallet System: Users can add money, withdraw, and track their balance.

Admin Controls: Admin-only routes for managing users, matches, and contests.

Leaderboard: Display contest rankings based on user performance.

Tech Stack-
Backend Framework: Node.js, Express.js

Database: MongoDB (via Mongoose)

Authentication: JWT (JSON Web Tokens)

Middleware: Custom middleware for authentication, admin checks, error handling

Validation: express-validator for input sanitization

Installation-
Prerequisites

Node.js >= 14.x

MongoDB (either local or using a cloud service like MongoDB Atlas) 

Steps-
1. Clone the repository:
git clone https://github.com/SIDD1234567890/Play11-backend.git
cd Play11-backend

3. Install dependencies:
npm install


3. Set up your environment variables:
Create a .env file in the root directory and set the required variables:
JWT_SECRET=<your_secret_key>
MONGO_URI=<your_mongo_db_connection_url>


4. Start the development server:
npm run dev
The server will run on http://localhost:5000.

API Endpoints:-

Authentication-
POST /api/auth/register: Register a new user.
POST /api/auth/login: Login and get a JWT token.


User Routes
GET /api/users/me: Get logged-in user details.
GET /api/users/:id: Get user details by ID.


Player Routes-
GET /api/players: Get all players.
POST /api/players/create: Create a new player.
GET /api/players/team/:team: Get players by team.


Team Routes-
GET /api/teams: Get all teams.
POST /api/teams: Create a new team.


Match Routes-
GET /api/matches: Get all matches.
POST /api/matches: Create a new match.
PUT /api/matches/:id: Update match details.


Contest Routes-
GET /api/contests: Get all contests.
POST /api/contests: Create a new contest.
GET /api/contests/:contestId/leaderboard: Get contest leaderboard.


Wallet Routes-
GET /api/wallet: Get wallet balance.
POST /api/wallet/add: Add money to wallet.
POST /api/wallet/withdraw: Withdraw money from wallet.


Environment Variables-
JWT_SECRET: Secret key for JWT authentication.
MONGO_URI: MongoDB connection string.

Future Enhancements-
User referral system.
Multi-language support.
Push notifications for match updates.
Integration with payment gateways for real money contests.


Contributing-
1. Fork the repository.
2. Create your feature branch: git checkout -b feature-name.
3. Commit your changes: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature-name.
5. Open a pull request.
