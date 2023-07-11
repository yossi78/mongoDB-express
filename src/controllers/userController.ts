import express from 'express';

import { createUser } from '../db/users';
import { deleteUserById, getUsers, getUserById } from '../db/users';



export const register = async (req: express.Request, res: express.Response) => {
  try {
    const { email, password, username } = req.body;
    
    const user = await createUser({
      email,
      username,
      password 
    });

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}


export const getAllUsers = async (req: express.Request, res: express.Response) => {
  try {
    const users = await getUsers();

    return res.status(200).json(users);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};



export const updateUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.params;
    const { username } = req.body;
    const { password } = req.body;
    const { email } = req.body;

    if (!username) {
      return res.sendStatus(400);
    }

    const user = await getUserById(id);
    
    user.username = username;
    user.password=password;
    user.email=email;
    await user.save();

    return res.status(200).json(user).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}



export const deleteUser = async (req: express.Request, res: express.Response) => {
  try {
    const { id } = req.query;

    const deletedUser = await deleteUserById(id as string);

    return res.json(deletedUser);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
}






