import { NextResponse } from 'next/server';
import { query } from '../../database';

export async function GET() {
  try {
    const result = await query('SELECT id, name FROM users');
    return NextResponse.json(result.rows);
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
  }
}
