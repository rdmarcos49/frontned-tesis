// @constants
import { URL } from 'constants/urls'

export const AdminOptions = [
  {
    icon: 'fas fa-9x fa-user-cog',
    path: URL.MODIFY_USERS,
    text: 'Alta, baja, modifición de usuarios/as'
  },
  {
    icon: 'fas fa-9x fa-chart-bar',
    path: URL.USERS_STATISTICS,
    text: 'Estadisticas de usuario/a'
  },
  {
    icon: 'fas fa-9x fa-server',
    path: URL.SYSTEM_STATISTICS,
    text: 'Estadisticas del sistema'
  },
  {
    icon: 'fas fa-9x fa-database',
    path: URL.DATA_ACCESS,
    text: 'Acceso a datos'
  },
]
