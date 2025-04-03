// src/app/api/usuarios/[id]/route.ts
import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { RowDataPacket } from 'mysql2';
import { Usuario } from '@/types/usuario';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const { id } = context.params;

  try {
    const [rows] = await pool.query<(Usuario & RowDataPacket)[]>(
      'SELECT * FROM usuarios WHERE id = ?',
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ usuario: rows[0] });
  } catch (error) {
    console.error('Error al obtener usuario:', error);
    return NextResponse.json({ error: 'Error al consultar la base de datos' }, { status: 500 });
  }
}
