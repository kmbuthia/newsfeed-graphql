const jwt = require('jsonwebtoken');

const APP_SECRET = 'GraphQL-is-aw3some';
const bcryptSaltRounds = 10;

function getUserId(context) {
  const auth = context.request.get('Authorization');
  if (auth) {
    const token = auth.split(' ')[1];
    const { userId } = jwt.verify(token, APP_SECRET);
    return userId;
  }
  throw new Error('Not authenticated');
}

module.exports = {
  APP_SECRET,
  bcryptSaltRounds,
  getUserId,
}