import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Usuario } from '@/types/usuario';
import { RowDataPacket } from 'mysql2';

export async function GET() {
  try {
    const [rows] = await pool.query<(Usuario & RowDataPacket)[]>('SELECT * FROM usuarios');
    return NextResponse.json({ usuarios: rows });
  } catch (error) {
    console.error('Error al consultar usuarios:', error);
    return NextResponse.json(
      { error: 'Error al consultar la base de datos' },
      { status: 500 }
    );
  }
} 