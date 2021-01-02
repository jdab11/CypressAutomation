import Nav from '../../support/helper/navigation'
import Translations from '../../../translations/translations.strings'
import { automaticLoginStandardUser } from '../../support/helper/login'
import { selectItems } from '../../support/helper/inventory'
import { verifySelectedItems } from '../../support/helper/cart'
import { fillPersolalInformation } from '../../support/helper/checkout'
import { storeSession } from '../../support/helper/cookies'

context('Order functionality', () => {
    before(() => {
        automaticLoginStandardUser()
    })

    beforeEach(() => {
        storeSession()
    })

    describe('Cheking order functionality for standard user', () => {
        it('should successfully order Sauce Labs Backpack (TC03)', () => {
            const item_to_select = 'Sauce Labs Backpack'
            const first_name = Cypress.env('FIRST_NAME')
            const last_name = Cypress.env('LAST_NAME')
            const postal_code = Cypress.env('POSTAL_CODE')

            selectItems([item_to_select])

            cy.visit('/cart.html')
            Nav.pathShouldBeEqual('/cart.html')
            Nav.verifyPageTitle(Translations.cart.page_title)

            verifySelectedItems([item_to_select])
            cy.get('.checkout_button').click()

            Nav.pathShouldBeEqual('/checkout-step-one.html')
            Nav.verifyPageTitle(Translations.checkout.your_information.page_title)

            fillPersolalInformation(first_name, last_name, postal_code)
            cy.get('.cart_button').contains(Translations.checkout.your_information.continue_button).click()

            Nav.pathShouldBeEqual('/checkout-step-two.html')
            Nav.verifyPageTitle(Translations.checkout.overview.page_title)
            cy.get('.btn_action').contains(Translations.checkout.overview.finish_button).click()

            Nav.pathShouldBeEqual('/checkout-complete.html')
            Nav.verifyPageTitle(Translations.complete_page.page_title)
            cy.get('.complete-header').should('be.visible').should('contain', Translations.complete_page.order_complete_text)
        })
    })
})
