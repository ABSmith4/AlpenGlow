import verifyToken from '../middleware/verifyAuth';
import { registerNewUser, loginExistingUser, getUserById } from '../services/user.service';

async function registerUser(req, res) {
  try {
    const { username, email, password } = req.body;

    if (!username || !email || !password) {
      res.status(400).json({
        error: 'insufficient information, please fill the required fields',
        success: false
      });
    }

    const token = await registerNewUser(username, email, password);
    return res.status(201).json({ token, message: 'User created successfully' });
  } catch (error) {
    if (error.message === 'Email already registered') {
      return res.status(409).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An error occurred during user registration.\nPlease try again.' });
  }
}

async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({
        error: 'insufficient information, please fill the required fields',
        success: false
      });
    }

    const token = await loginExistingUser(email, password);
    return res.status(200).json({ token, message: 'Login successful' });
  } catch (error) {
    if (error.message === 'User not found' || error.message === 'Invalid Password') {
      return res.status(401).json({ error: error.message });
    }
    return res.status(500).json({ error: 'An error occurred during login. Please try again.' });
  }
}

async function getCurrentUser(req, res) {
  try {
    const token = req.headers.authorization.split(' ')[1];

    const dToken = verifyToken(token);
    // eslint-disable-next-line prefer-destructuring
    const userId = dToken.userId;

    const user = await getUserById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    return res.status(200).json({ user });
  } catch (error) {
    if (error.name === 'JsonWebTokenError') {
      return res.status(401).json({ error: 'Invalid token' });
    }
    return res.status(500).json({ error: 'An error occurred while fetching user information' });
  }
}

export { registerUser, loginUser, getCurrentUser };
