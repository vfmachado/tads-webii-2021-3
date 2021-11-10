const Favorite = require("../models/favorite");
const { getData, newList, getCategory, itemAppend, deleteCategory } = require("../models/repository");

class MainController {

  showIndexPage(req, res) {
    console.log('Index page');
    const data = getData();
    return res.render('home', {list: data});
  }


  detailPage(req, res) {
    const category = getCategory(req.params.category_id);
    console.log('Category', category)
    return res.render('detail', {category});
  }

  insertList(req, res) {
    const {title, description} = req.body;
    const favorite = new Favorite(title, description);
    newList(favorite);
    return res.redirect('/');
  }

  removeCategory(req, res) {
    const id = req.params.category_id;
    deleteCategory(id);
    return res.redirect('/');
  }

  addItem(req, res) {
    const {item} = req.body;
    const id = req.params.category_id;
    itemAppend(id, item);
    return res.redirect(`/detail/${id}`);
  }
}

module.exports = MainController;