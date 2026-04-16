import sql from 'mssql';

const config = {
  server: 'localhost',
  port: 59839,
  database: 'bullionshop',
  user: 'sa',
  password: 'Sa@123456',
  options: {
    trustServerCertificate: true,
    enableArithAbort: true,
    encrypt: false,
  },
};

let pool;

export async function getDb() {
  try {
    if (!pool) {
      pool = await sql.connect(config);
    }
    return pool;
  } catch (err) {
    console.error('DB Connection Error:', err.message);
    throw err;
  }
}