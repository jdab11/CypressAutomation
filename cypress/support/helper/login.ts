import Nav from '../../support/helper/navigation'

function doLogin(username: string, password: string) {
    cy.get('[data-test=username]').clear().as('empty_urername_field')
    cy.get('[data-test=password]').clear().as('empty_password_field')

    if (username == '' && password == '') {
        cy.get('@empty_urername_field')
            .should('be.visible')

        cy.get('@empty_password_field')
            .should('be.visible')
    } else {

        cy.get('@empty_urername_field')
            .should('be.visible')
            .type(username)

        cy.get('@empty_password_field')
            .should('be.visible')
            .type(password)
    }

    cy.get('#login-button')
        .contains('LOGIN')
        .should('be.visible')
        .click()

    if (username != '' && password != '') {
        Nav.pathShoudBeDifferent('/index.html')
        Nav.pathShouldBeEqual('/inventory.html')

        cy.window()
            .its("sessionStorage")
            .invoke("getItem", "session-username")
            .should('eq', Cypress.env('USERSNAME'))
    }

}

function automaticLoginStandardUser() {
    const standard_user = Cypress.env('USERSNAME')
    const standard_password = Cypress.env('USER_PASSWORD')

    Nav.indexLocation()
    doLogin(standard_user, standard_password)
}

export {
    doLogin,
    automaticLoginStandardUser
}