Feature: Tercer conjunto de casos de prueba de pagina de compras

    Este feature esta siendo adaptado desde un formato de pom hacia cucumber

    Scenario: Crear una compra de cero
    Given el usuario se encuentra en la pagina de compra
    And el usuario busca un articulo llamado Blousa
    When agrega una blousa al carrito
    Then el valor del articulo es de 27.00 dolares
    When finaliza la compra de los articulo
    Then el mensaje de orden completada deberia aparecer
