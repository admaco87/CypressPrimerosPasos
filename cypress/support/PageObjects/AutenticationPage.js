class AutenticationPage
{
getEmailAdressInput(){
  return  cy.get('#email')
}

getPasswordInput(){
   return cy.get('#passwd')
}
getSingInBtnut(){
   return cy.get('#SubmitLogin')
}

}
export default AutenticationPage;