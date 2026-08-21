import { createHtmlReport } from 'axe-html-reporter'

describe('Acessibilidade', () => {
  it('Os site da Receita Federal deve estar acessível a todos que querem navegar por ele', () => {
    cy.visit('https://www.gov.br/receitafederal/pt-br')

    cy.injectAxe()

    cy.checkA11y(null, {
        failOnViolation: true,
        retries: 3,
        interval: 1000
      },
      (violations) => {
        cy.writeFile(
          'cypress/results/axe-results.json',
          violations
        )
      }
    )
  })
})