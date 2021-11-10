//IMPLEMENTAÇÃO CONCRETA EM MEMORIA
const data = [
  {
    title: 'Cat A',
    items: []
  },
  {
    title: 'Cat B',
    items: []
  }
];

const getData = () => data;

const newList = (favorite) => {
  data.push(favorite);
}

const getCategory = (title) => {
  const idx = data.findIndex(e => e.title == title);  
  return data[idx];
}

const deleteCategory = (title) => {
  const idx = data.findIndex(e => e.title == title);  
  return data.splice(idx, 1);
}

const itemAppend = (title, item) => {
  const idx = data.findIndex(e => e.title == title);  
  data[idx].items.push({
    item,
    createdAt: new Date()
  })
}

module.exports = {
  getData,
  newList,
  getCategory,
  itemAppend,
  deleteCategory
}