import Nav from '../../support/helper/navigation'


function pathShouldBeEqual(path: string) {
    return cy.location().should((location) => {
        expect(location.pathname).to.eq(path)
    })
}

function pathShoudBeDifferent(path: string) {
    return cy.location().should((location) => {
        expect(location.pathname).not.to.eq(path)
    })
}

function indexLocation() {
    cy.visit('/index.html')
    Nav.pathShouldBeEqual('/index.html')
}

function verifyPageTitle(page_title) {
    cy.get('.subheader').contains(page_title).should('be.visible')
}

export default {
    pathShouldBeEqual,
    pathShoudBeDifferent,
    indexLocation,
    verifyPageTitle
}