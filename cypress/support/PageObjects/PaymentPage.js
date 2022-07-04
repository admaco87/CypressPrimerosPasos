class PaymentPage
{

getPayByBankWireOption(){
   return cy.get('.bankwire')

}
getIConfirmMyOrderBtn(){
   return cy.get('.cart_navigation > .button')
}
getDescriptionTitleText(){
   return cy.get('.cheque-indent > .dark')
}
}
export default PaymentPage;