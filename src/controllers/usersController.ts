import { Request, Response } from 'express';
import usersService from '../services/usersService';

async function createUser(req: Request, res: Response) {
  const { username, vocation, level, password } = req.body;
  const newUser = await usersService.createUser(
    username,
    vocation,
    level,
    password,
  );
  res.status(201).json(newUser);
}

const loginUser = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const usernameRequired = '"username" is required';
  const passwordRequired = '"password" is required';

  if (!username) return res.status(400).json({ message: usernameRequired });
  if (!password) return res.status(400).json({ message: passwordRequired });

  const result = await usersService.loginUser(req.body);
  if (result.includes('invalid')) return res.status(401).json({ message: result });
  return res.status(200).json({ token: result });
};

export default {
  createUser,
  loginUser,
};