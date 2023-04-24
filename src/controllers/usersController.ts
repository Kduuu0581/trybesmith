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

export default {
  createUser,
};