// constants.js

// User Roles
const ROLES = {
  USER: 'user',
  ADMIN: 'admin'
};

// Match Statuses
const MATCH_STATUS = {
  UPCOMING: 'upcoming',
  LIVE: 'live',
  COMPLETED: 'completed'
};

// Contest Types
const CONTEST_TYPE = {
  PRACTICE: 'practice',
  PAID: 'paid'
};

// Other config
const MAX_PLAYERS_PER_TEAM = 11;
const MAX_TEAMS_PER_USER = 6;

module.exports = {
  ROLES,
  MATCH_STATUS,
  CONTEST_TYPE,
  MAX_PLAYERS_PER_TEAM,
  MAX_TEAMS_PER_USER
};
