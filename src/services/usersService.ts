import jwt from 'jsonwebtoken';
import usersModel from '../models/usersModel';
import User from '../interfaces/userInterface';

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

const loginUser = async (login: User) => {
  const users = await usersModel.loginUser(login);
  if (!users || users.password !== login.password) {
    return ('Username or password invalid');
  }
  const token = jwt.sign({ login }, process.env.JWT_SECRET as string);
  return token;
};

export default {
  createUser,
  loginUser,
};