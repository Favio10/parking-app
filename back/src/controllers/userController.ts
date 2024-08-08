import { Request, Response } from 'express';

export const getAllUser = (req: Request, res: Response): void => {
  res.json({ message: 'Obtener todos los usuarios' });
};

export const getUser = (req, res) => {
  const { id } = req.params;
  // Aquí deberías obtener un solo usuario por ID desde la base de datos
  // Ejemplo:
  res.json({ message: `Obtener usuario con ID: ${id}` });
};

export const createUser = (req, res) => {
  const newUser = req.body;
  // Aquí deberías crear un nuevo usuario en la base de datos
