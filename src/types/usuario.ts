export interface Usuario {
  UsuarioID: number;
  Nombre: string;
  Apellido_Paterno: string;
  Apellido_Materno: string;
  Tipo: string;
  Pin: number;
  Usuario: string;
  Puede_verificar_asignaciones: number;
  Puede_cobrar: number;
  Status: number;
  Gerencia: string;
  Agencia: string;
  Fecha_ingreso: string;
  Telegram_id: string | null;
  Numero_celular: string;
  Created_at: string;
  Updated_at: string;
} 