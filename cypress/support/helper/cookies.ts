function storeSession(){
    Cypress.Cookies.preserveOnce('PHPSESSID')
}

function clearCookies(){
    cy.clearCookies()
}

export{
    storeSession,
    clearCookies
}