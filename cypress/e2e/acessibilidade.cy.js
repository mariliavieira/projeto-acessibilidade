import { createHtmlReport } from 'axe-html-reporter'

describe('Acessibilidade', () => {
  it('Os site da Receita Federal deve estar acessível a todos que querem navegar por ele', () => {
    cy.visit('https://www.gov.br/receitafederal/pt-br')

    cy.injectAxe()

    cy.checkA11y(
      null,
      {
        retries: 3,
        interval: 1000
      },
      (violations) => {
        cy.task(
          'log',
          '\n########### Teste de Acessibilidade #########'
        )

        cy.task(
          'log',
          `Total de violações encontradas: ${violations.length}`
        )

        violations.forEach((violation) => {
          cy.task('log', '')
          cy.task('log', `ID:       ${violation.id}`)
          cy.task('log', `Impacto:  ${violation.impact}`)
          cy.task('log', `Problema: ${violation.help}`)
          cy.task('log', `Site com a Solução:    ${violation.helpUrl}`)

          violation.nodes.forEach((node) => {
            cy.task(
              'log',
              `Elemento: ${node.target.join(', ')}`
            )
          })
        })

    cy.task(
      'log',
      '##########################################\n'
    )

    cy.writeFile(
      'cypress/results/axe-results.json',
      violations
    )
  })
  })
})