Cypress.Commands.add('signin', (user) => {
  window.sessionStorage.clear()
  cy.request('POST', 'http://localhost:3030/api/testing/reset')

  cy.visit('http://localhost:3000/login')

  cy.request('POST', 'http://localhost:3030/api/users', user)
})
