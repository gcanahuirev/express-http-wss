import { Request, Response } from 'express';

// Create File
export const createFile = async (req: Request, res: Response) => {
  const columnId = parseInt(req.params['column_id']);
  const { description } = req.body;
  res.json({ data: { columnId, description } });
};

// Delete File
export const deleteFile = async (req: Request, res: Response) => {
  const id = parseInt(req.params['id']);
  res.json({ data: id });
};
