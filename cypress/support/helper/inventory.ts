import Translations from '../../../translations/translations.strings'

function selectItems(itemList: string[]) {
    cy.get('#inventory_container').should('be.visible')

    for (let i = 0; i < itemList.length; i++) {
        cy.get('.inventory_item')
            .find('.inventory_item_label')
            .contains(itemList[i])
            .parent()
            .next()
            .children('button')
            .as('add_remove_button')

        cy.get('@add_remove_button')
            .contains(Translations.inventory.add_button)
            .click()

        cy.get('@add_remove_button')
            .contains(Translations.inventory.remove_button)
            .should('be.visible')
    }
}

export {
    selectItems
}