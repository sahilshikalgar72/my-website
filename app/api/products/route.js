import { NextResponse } from 'next/server';
import { getDb } from '../../lib/db';

export async function GET() {
  try {
    const pool = await getDb();
    const result = await pool.request().query('SELECT * FROM Products');
    return NextResponse.json(result.recordset);
  } catch (error) {
    console.error('Database error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    );
  }
}