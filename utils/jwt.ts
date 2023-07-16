import jwt from 'jsonwebtoken';
import config from '../config';

const generateAccessToken = (userId: string) => {
  return jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: config.JWT_ACCESS_EXPIRATION });
};

const generateRefreshToken = (userId: string) => {
  return jwt.sign({ userId }, config.JWT_SECRET, { expiresIn: config.JWT_REFRESH_EXPIRATION });
};

export { generateAccessToken, generateRefreshToken };
