const jwt = require('jsonwebtoken');
const { AuthenticationError } = require('apollo-server-express');

const secret = 'mysecretsshhhhh';

const authMiddleware = ({ req }) => {
  // allows token to be sent via req.body, req.query, or headers
  let token = req.body.token || req.query.token || req.headers.authorization;

  // separate "Bearer" from "<tokenvalue>"
  if (req.headers.authorization) {
    token = token.split(' ').pop().trim();
  }

  // if no token, return request object as is
  if (!token) {
    return req;
  }

  try {
    // decode and attach user to request object
    const { data } = jwt.verify(token, secret, { maxAge: '1d' });
    req.user = data;
  } catch {
    throw new AuthenticationError('Invalid token');
  }

  // return updated request object
  return req;
};

module.exports = authMiddleware;

