/// <reference types="Cypress"/>
//importamos Clases de Pag Objects
import AddressPage from'../support/PageObjects/AddressPage'
import AutenticationPage from'../support/PageObjects/AutenticationPage'
import HomePage from '../support/PageObjects/homePage'
import PaymentPage from'../support/PageObjects/PaymentPage'
import ShippingPage from'../support/PageObjects/ShippingPage'
import ShoppingCartSummaryPage from'../support/PageObjects/ShoppingCartSummaryPage'


//Suite de casos que contiene cada caso

describe('Tercer conjunto de casos de prueba', function(){
    const addressPage= new AddressPage()
    const autenticationPage= new AutenticationPage()
    const homePage= new HomePage()
    const paymentPage= new PaymentPage()
    const shippingPage= new ShippingPage()
    const shoppinCartSummaryPage= new ShoppingCartSummaryPage()

    beforeEach(()=>{
        //ingresar a la pagina
        cy.visit("http://automationpractice.com/index.php")
    }
    )
    it('Crear una compra de cero',function() {
        homePage.getSearchBox().type('Blouse')  
        homePage.getSearchBoxBtn().click()
        homePage.getAddToCardElementBtn('Blouse').click()
        homePage.getProceedToCheckOutBtn().click()
        shoppinCartSummaryPage.getProductName().should('contain.text', 'Blouse')
        shoppinCartSummaryPage.getProductPrice().should('contain.text', '27.00')
        shoppinCartSummaryPage.getProceedToCheckOtcBtn().click()
        autenticationPage.getEmailAdressInput().type('admaco1987@gmail.com')
        autenticationPage.getPasswordInput().type('PruebaUno')
        autenticationPage.getSingInBtnut().click()
        addressPage.getProceedToCheckOtcBtn().click()
        shippingPage.GetTemOfServiceCheckOut().check().should('be.checked')
        shippingPage.getProceedToCheckOtcBtn().click()
        paymentPage.getPayByBankWireOption().click()
        paymentPage.getIConfirmMyOrderBtn().click()
        paymentPage.getDescriptionTitleText().should('contain.text','Your order on My Store is complete.')
               
        })
    


})