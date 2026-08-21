describe('Acessibilidade', () => {
  it('Os site da Receita Federal deve estar acessível a todos que querem navegar por ele', () => {
    cy.visit('https://www.gov.br/receitafederal/pt-br')

    cy.injectAxe()

    cy.checkA11y(null, {
      failOnViolation: true
    })
  })
})