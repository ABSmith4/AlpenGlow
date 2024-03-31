import Jwt from 'jsonwebtoken';

const verifyToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({
      error: 'Authorization token not provided, access denied',
      success: false,
    });
  }
  try {
    const decoded = Jwt.verify(token, process.env.JWT_SECTET);
    if (!decoded.id) {
      return res.status(403).json({
        error: 'Invalid token: User ID not found in token',
        success: false,
      });
    }
    req.user = decoded;
    next();
  } catch (err) {
    if (err.name === 'JsonWebTokenError') {
      return res.status(403).json({
        error: 'Invalid token',
        success: false,
      });
    }
    return res.status(500).json({
      error: 'Internal server error',
      success: false,
    });
  }
  return false;
};

export default verifyToken;
