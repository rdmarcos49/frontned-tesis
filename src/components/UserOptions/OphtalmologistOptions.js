// @constants
import { URL } from 'constants/urls'

export const OphtalmologistOptions = [
  {
    icon: 'fas fa-9x fa-user-cog',
    path: URL.NEW_CHECK,
    text: 'Consulta de nuevo paciente'
  },
  {
    icon: 'fas fa-9x fa-user-clock',
    path: URL.PREVIOUS_CHECKS,
    text: 'Revisar mis consultas previas'
  },
  {
    icon: 'fas fa-9x fa-user-check',
    path: URL.NEW_PATIENT,
    text: 'Informar un nuevo paciente'
  },
  {
    icon: 'fas fa-9x fa-user-edit',
    path: URL.PENDENT_PATIENT,
    text: 'Continuar informe pendiente'
  },
  {
    icon: 'fas fa-9x fa-notes-medical',
    path: URL.PREVIOUS_NOTES,
    text: 'Consultar mis informes anteriores'
  },
]
