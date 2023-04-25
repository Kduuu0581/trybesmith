import { ResultSetHeader, RowDataPacket } from 'mysql2';
import connection from './connection';
import User from '../interfaces/userInterface';
import ILogin from '../interfaces/loginInterface';

async function createUser(
  username: string,
  vocation: string,
  level: number,
  password: string,
): Promise<User> {
  const [{ insertId: id }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  const newUser: User = {
    id,
    username,
    vocation,
    level,
    password,
  };
  return newUser;
}

const loginUser = async (login: ILogin): Promise<User> => {
  const { username } = login;
  const [[rows]] = await connection.execute<RowDataPacket[] & User[]>(
    'SELECT * FROM Trybesmith.users WHERE username = ?',
    [username],
  );
  return rows;
};

export default {
  createUser,
  loginUser,
};