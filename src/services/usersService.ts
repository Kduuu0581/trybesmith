import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
) {
  const newUser = await usersModel.createUser(
    username,
    vocation,
    level,
    password,
  );
  return {
    token: jwt.sign(newUser, process.env.JWT_SECRET || 'secret', {
      expiresIn: '1d',
      algorithm: 'HS256',
    }),
  };
}

export default {
  createUser,
};