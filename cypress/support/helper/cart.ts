function verifySelectedItems(itemList: string[]) {
    for (let i = 0; i < itemList.length; i++) {
        cy.get('.cart_item')
            .contains(itemList[i])
            .should('be.visible')
            .as('selected_item')

        cy.get('@selected_item')
            .parent()
            .parent()
            .children('.cart_item_label')
            .find('.item_pricebar')
            .children('.inventory_item_price')
            .should('be.visible')
    }
}

export {
    verifySelectedItems
}