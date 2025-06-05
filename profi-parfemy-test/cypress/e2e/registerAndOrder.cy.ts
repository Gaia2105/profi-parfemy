// import { RegistrationPage } from '../pages/RegistrationPage';

// const registrationPage = new RegistrationPage();

// describe('Register and order product', () => {
//   beforeEach(() => {
//     cy.fixture('user').then((data) => {
//        data.email = `testuser@outlook.com`;
//       cy.wrap(data).as('userData');
//     });
//   });

//   it('should register and complete an order', function () {
//     const user = this.userData;

     
//     registrationPage.register(user);

     
//     cy.visit('https://www.profi-parfemy.cz/tom-ford-lost-cherry-edp-100-ml-unisex_z779014/');
//     cy.get('button[class="btn btn-insert"]', { timeout: 10000 }).should('be.visible').click();

     
//     cy.get('a[href*="/kosik"]', { timeout: 10000 }).click();

    
//     cy.get('a[class="btn btn-nextstep btn-block "]', { timeout: 10000 }).click();

     
//     cy.url().should('include', '/pokladna');

//     cy.get('button[class="custom-radio custom-control delivery-content"]', { timeout: 10000 }).should('be.visible').click();
//     cy.get('button[class="delivery-content custom-radio custom-control"]', { timeout: 10000 }).should('be.visible').click();

     
// //     cy.get('button[type="submit"]').contains(/objednat/i).click({ force: true });

// //      cy.contains(/děkujeme/i, { timeout: 10000 }).should('be.visible');
//   });
// });


















// // import { RegistrationPage } from '../pages/RegistrationPage';

// // const registrationPage = new RegistrationPage();

// // describe('User Registration', () => {
// //   it('should register a new user successfully', () => {
// //     const newUser = {
// //       email: 'testuser@example.com',
// //       password: 'SecurePass123',
// //       gender: 'Muž',
// //       birthDate: '1990-01-01',
// //       firstName: 'Jan',
// //       lastName: 'Novák',
// //       phone: '123456789',
// //       address: 'Hlavní 1',
// //       city: 'Praha',
// //       zip: '11000',
// //       country: 'Česká republika',
// //     };

// //     registrationPage.register(newUser);

// //     it('should register and complete an order', function () {
// //     const user = this.userData;

// //     // Регистрация
// //     registrationPage.register(user);

// //     // ✅ Переход к товару
// //     cy.visit('https://www.profi-parfemy.cz/tom-ford-lost-cherry-edp-100-ml-unisex_z779014/');
// //     cy.get('button[id*="btn-buy"]', { timeout: 10000 }).should('be.visible').click();

// //     // ✅ Перейти в корзину
// //     cy.get('a[href*="/kosik"]', { timeout: 10000 }).click();

// //     // ✅ Оформление заказа
// //     cy.get('a[href*="pokladna"]', { timeout: 10000 }).click();

// //     // Проверка, что перешли к оформлению
// //     cy.url().should('include', '/pokladna');

// //     // Подтверждение заказа
// //     cy.get('button[type="submit"]').contains(/objednat/i).click({ force: true });

// //     // ✅ Проверка подтверждения
// //     cy.contains(/děkujeme/i, { timeout: 10000 }).should('be.visible');
// //   });
// // });
// //   });
 




// // // cypress/e2e/registerAndBuy.cy.ts

// // import { RegistrationPage } from '../pages/RegistrationPage';
// // import { ProductPage } from '../pages/ProductPage';
// // import { CartPage } from '../pages/CartPage';

// // describe('Register and order product', () => {
// //   const registrationPage = new RegistrationPage();
// //   const productPage = new ProductPage();
// //   const cartPage = new CartPage();

// //   it('Registers and buys a product', () => {
// //     // Регистрация
// //     cy.visit('/registrace');
// //     registrationPage.fillForm({
// //       email: 'novyuzivatel@example.com',
// //       password: 'SilneHeslo123!',
// //       gender: 'Neuveedeno',
// //       birthDate: '01.01.1990',
// //       firstName: 'Eva',
// //       lastName: 'Nováková',
// //       city: 'Brno',
// //       postalCode: '60200',
// //       country: 'Česká republika',
// //     });
// //     registrationPage.submit();

// //     // Перейти к продукту
// //     cy.visit('/tom-ford-lost-cherry-edp-100-ml-unisex_z779014/');

// //     // Добавить в корзину
// //     productPage.addToCart();

// //     // Перейти в корзину и к оформлению
// //     cartPage.proceedToCheckout();

// //     // Тут дальше оформляется заказ
// //     // Можно сделать Page Object для CheckoutPage
// //   });
// // });










// // import { RegistrationPage } from "../pages/RegistrationPage";
// // import { ProductPage } from "../pages/ProductPage";
// // import { CartPage } from "../pages/CartPage";

// // const registrationPage = new RegistrationPage();
// // const productPage = new ProductPage();
// // const cartPage = new CartPage();

// // describe('Register, Add Product and Order', () => {
// //   beforeEach(() => {
// //     cy.fixture('user').as('user');
// //   });

// //   it('should register, add product to cart, and order', function () {
// //     registrationPage.visit();
// //     registrationPage.fillForm(this.user);
// //     registrationPage.submit();

// //     productPage.visit();
// //     productPage.addToCart();

// //     cartPage.goToCart();
// //     cartPage.order();

// //     cy.contains('Děkujeme').should('exist');
// //   });
// // });
