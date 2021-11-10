import { Request, Response } from "express";
import { getAllUsers, getUser } from "../models/UserDao";

export class PublicController {
  access: number;

  constructor() {
    console.log('Class instantiated')
    this.access = 0;
  }

  async RenderInitialPage(req: Request, res: Response) {
    this.access++;
    return res.render('initial', {access: this.access});
  }

  // //SOLUTION A
  // async ListUsers(req: Request, res: Response) {
  //   const users = await getAll();
  //   console.log('Users', users);
  //   res.json(users);
  // }

  //SOLUTION B
  ListUsers(req: Request, res: Response) {
    getAllUsers()
    .then(users => this.renderUsersFn(users, res))
    .catch(error => {
      res.status(500).json(error)
    });
    
  }

  FindById(req: Request, res: Response) {
    getUser(1, user => {
      res.json(user);
    })  
  }

  renderUsersFn(users, res) {
    //PARSE GIGANTESCO DE DADOS PARA O VIEW
    res.json(users);
  }
}
