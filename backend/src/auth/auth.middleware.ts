import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    // Implement your authentication logic here
    const token = req.headers['authorization'];

    if (!token) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    try {
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Invalid or expired token' });
    }
  }
}
