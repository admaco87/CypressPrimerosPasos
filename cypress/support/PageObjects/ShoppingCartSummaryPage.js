class ShoppingCartSummaryPage
{
getProductName(){
    return cy.get('tr[id^=product]').find('.product-name>a')
}
getProductPrice(){
   return cy.get('tr[id^=product]').find('.price')
}
getProceedToCheckOtcBtn(){
    return cy.get('.cart_navigation > .button')
}

}
export default ShoppingCartSummaryPage;