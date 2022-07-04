class HomePage
{
getSearchBox(){
    return cy.get('#search_query_top')
}
getSearchBoxBtn(){
   return cy.get('#searchbox > .btn')
}
getAddToCardElementBtn(productDescription){
    return cy.get('.product-container:has(.product-name[title="'+productDescription+'"]) .ajax_add_to_cart_button')
}
getProceedToCheckOutBtn(){
    return cy.get('.button-medium[title="Proceed to checkout"]')
}
}
export default HomePage;