import sqlite3 from 'sqlite3';
var db: sqlite3.Database;

db = new sqlite3.Database('db-teste.db');

export default db;