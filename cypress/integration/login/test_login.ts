import Nav from '../../support/helper/navigation'
import Translations from '../../../translations/translations.strings'
import { doLogin } from '../../support/helper/login'

context('Login functionality', () => {
    describe('Check log in functionality for standard user', () => {
        it('should display an error after submiting empty form (TC01)', () => {
            Nav.indexLocation()
            doLogin('', '')

            cy.get('[data-test="error"]')
                .contains(Translations.login.missing_username_error)
                .should('be.visible')
        })

        it('should successfully log in to the service (TC02)', () => {
            const username = Cypress.env('USERSNAME')
            const password = Cypress.env('USER_PASSWORD')

            Nav.indexLocation()
            doLogin(username, password)
        })

    })
})
