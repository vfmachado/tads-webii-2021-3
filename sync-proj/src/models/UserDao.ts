import db from "../config/Database";

function getAllUsers(): Promise<any> {
  return new Promise((resolve, reject) => {
    db.all('select * from users', (err, ok) => {
      console.log('OK', ok);
      console.log('Err', err);
      if (err) {
        reject(err);
      }
      resolve(ok);
    });
  })
}

function getUser(id: number, cb) {
  db.all('select * from users where id = ?', id, (err, ok) => {
    console.log('OK', ok);
    console.log('Err', err);
    cb(ok[0]);
  });
}


export { getAllUsers, getUser }
