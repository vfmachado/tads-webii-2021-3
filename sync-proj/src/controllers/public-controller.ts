import { Request, Response } from "express";

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
}
