import bcrypt from 'bcryptjs';
import Jwt from 'jsonwebtoken';
import userModels from '../models/user.models';
import { costFactor } from '../hiddenhelpers/variables';

async function registerNewUser(username, email, password) {
  const existing = await userModels.findOne({ where: { email } });
  if (existing) {
    throw new Error('Email already registered');
  }

  const salt = bcrypt.genSalt(costFactor);

  const hashword = bcrypt.hash(password, salt);

  const newUser = await userModels.create({ username, email, password: hashword });

  const token = Jwt.sign({ userId: newUser.id }, privateKey,  )

  return token;
}

async function loginExistingUser(email, password) {
  const user = await userModels.findOne({ where: { email } });

  if (!user) {
    throw new Error('User not found');
  }

  const validPW = await bcrypt.compare(password, user.password);

  if (!validPW) {
    throw new Error('Invalid Password');
  }

  const token = Jwt.sign({ userId: user.id }, privateKey)

  return token;
}

async function getUserById(userId) {
  const foundUser = await userModels.findByPk(userId);

  if (!foundUser) {
    throw new Error('user not found');
  }
  return foundUser;
}

export { registerNewUser, loginExistingUser, getUserById };
