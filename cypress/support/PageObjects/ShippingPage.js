class ShippingPage
{
GetTemOfServiceCheckOut(){
    return cy.get('#cgv')
}
getProceedToCheckOtcBtn(){
    return cy.get('.cart_navigation > .button')
}
}
export default ShippingPage;