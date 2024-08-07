import { Request, Response } from 'express';

export const getAllUser = (req: Request, res: Response): void => {
  res.json({ message: 'Obtener todos los usuarios' });
};
