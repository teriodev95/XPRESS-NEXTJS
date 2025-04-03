import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'calaverita.tech',
  port: 63306,
  database: 'xpress_for_testing',
  user: 'xpress_for_testing_u',
  password: 'RL5aR8ATctkd3s',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool; 