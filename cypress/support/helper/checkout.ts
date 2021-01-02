function fillPersolalInformation(first_name: string, last_name: string, postal_code: string) {
    cy.get('[data-test=firstName]').should('be.visible').clear().type(first_name)
    cy.get('[data-test=lastName]').should('be.visible').clear().type(last_name)
    cy.get('[data-test=postalCode]').should('be.visible').clear().type(postal_code)
}

export {
    fillPersolalInformation
}