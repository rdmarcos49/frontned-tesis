describe('views/Login', () => {
  const delay = 60

  const user = {
    name: 'Roberto',
    lastname: 'Marcos',
    username: 'rober',
    password: 'toftum',
    repeatPassword: 'toftum',
    email: 'rt@rt.com',
    avatar: null,
    role: 'technical'
  }
  
  beforeEach(() => {
    cy.signin(user)
  })

  it('login page can be opened', () => {
    cy.get('img').should('be.visible')
    cy.get('button').contains('Log in')
    cy.get('button').contains('Solicitar Registro')
  })

  it('login redirect to home page in the happy path', () => {
    cy.get('input[name="username"]').type(user.username, { delay })
    cy.get('input[name="password"]').type(user.password, { delay })
    cy.get('button').contains('Log in').click()
    cy.contains('Bienvenido/a a Retinar')
  })
})
