import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { Usuario } from '@/types/usuario';
import { RowDataPacket } from 'mysql2';

export async function GET(
  request: Request,
  context: { params: { id: string } }
) {
  const id = context.params.id;

  try {
    const [rows] = await pool.query<(Usuario & RowDataPacket)[]>(
      'SELECT * FROM usuarios WHERE UsuarioID = ?',
      [id]
    );

    if (rows.length === 0) {
      return NextResponse.json({ error: 'Usuario no encontrado' }, { status: 404 });
    }

    return NextResponse.json({ usuario: rows[0] });
  } catch (error) {
    console.error('Error al consultar usuario:', error);
    return NextResponse.json({ error: 'Error al consultar la base de datos' }, { status: 500 });
  }
}
