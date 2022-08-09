import {Given,When,Then,And} from "cypress-cucumber-preprocessor";
import HomePage from '../../../support/PageObjects/homePage'
import ShoppingCartSummaryPage from'../../../support/PageObjects/ShoppingCartSummaryPage'
import AddressPage from'../../../support/PageObjects/AddressPage'
import AutenticationPage from'../../../support/PageObjects/AutenticationPage'
import PaymentPage from'../../../support/PageObjects/PaymentPage'
import ShippingPage from'../../../support/PageObjects/ShippingPage'


const homePage= new HomePage()
const shoppinCartSummaryPage= new ShoppingCartSummaryPage()
const paymentPage= new PaymentPage()
const addressPage= new AddressPage()
const autenticationPage= new AutenticationPage()
const shippingPage= new ShippingPage()

Given('el usuario se encuentra en la pagina de compra',()=>{
    cy.visit("http://automationpractice.com/index.php")
})

And('el usuario busca un articulo llamado Blousa',()=>{
    homePage.getSearchBox().type('Blouse')  
    homePage.getSearchBoxBtn().click()
})
when('agrega una blousa al carrito',()=>{
    homePage.getAddToCardElementBtn('Blouse').click()
    homePage.getProceedToCheckOutBtn().click()
})

Then('el valor del articulo es de 27.00 dolares',()=>{
    shoppinCartSummaryPage.getProductName().should('contain.text', 'Blouse')
    shoppinCartSummaryPage.getProductPrice().should('contain.text', '27.00')
    shoppinCartSummaryPage.getProceedToCheckOtcBtn().click()
})
When('finaliza la compra de los articulo',()=>{
    autenticationPage.getEmailAdressInput().type('admaco1987@gmail.com')
    autenticationPage.getPasswordInput().type('PruebaUno')
    autenticationPage.getSingInBtnut().click()
    addressPage.getProceedToCheckOtcBtn().click()
    shippingPage.GetTemOfServiceCheckOut().check().should('be.checked')
    shippingPage.getProceedToCheckOtcBtn().click()
    paymentPage.getPayByBankWireOption().click()
    paymentPage.getIConfirmMyOrderBtn().click()
})
Then('el mensaje de orden completada deberia aparecer',()=>{
    paymentPage.getDescriptionTitleText().should('contain.text','Your order on My Store is complete.')
})
