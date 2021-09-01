export const URL = {
  BASE_PATH: '/',
  DATA_ACCESS: '/data',
  HOME: '/home',
  LOG_IN: '/login',
  MODIFY_USERS: '/modify-users',
  NEW_PATIENT: '/new-patient',
  NEW_CHECK: '/new-check',
  PASSWORD_RECOVERY: '/password-recovery',
  PENDENT_PATIENT: '/new_patient/pendent',
  PREVIOUS_CHECKS: '/previous-checks',
  PREVIOUS_NOTES: '/previous-notes',
  PREVIOUS_PATIENT: '/previous-patient',
  USERS_STATISTICS: '/u-statistics',
  SIGN_IN: '/signin',
  SYSTEM_STATISTICS: '/s-statistics',

  ERROR_PAGE: '/404',
  REST: '/:rest*',
}

export const publicUrl = {
  [URL.SIGN_IN]: 'Sign in',
  [URL.LOG_IN]: 'Log in',
  [URL.BASE_PATH]: 'Bienvenida',
}
