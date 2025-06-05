// Cypress.Commands.add('registerUser', (user) => {
//   const registrationPage = new (require('../pages/RegistrationPage').RegistrationPage)();
//   registrationPage.visit();
//   registrationPage.fillForm(user);
//   registrationPage.submit();
// });





// Cypress.Commands.add('handlePopups', () => {
//   // Закрытие cookie banner (если есть)
//   cy.get('button[data-cookie-bar="simpleAccept"]', { timeout: 5000, log: false })
//     .then($btn => {
//       if ($btn.length > 0) {
//         cy.wrap($btn).click({ force: true });
//       }
//     });

//   // Закрыть попап с подарком (если есть)
//   cy.get('body').then($body => {
//     if ($body.find('.popup-close').length > 0) {
//       cy.get('.popup-close').click({ force: true });
//     }
// //   });
// // });
// // Cypress/support/commands.ts
// Cypress.Commands.add('reg', (email: string, password: string) => {
//   cy.visit('https://www.profi-parfemy.cz/registrace/');
// })
// //   cy.handlePopups()
// // }); // если есть команда закрытия баннеров/попапов

//   cy.get('input[name="email"]').first().clear().type(email, { force: true });
//   cy.get('input[name="password"]').first().clear().type(password, { force: true });

// cy.get('button[type="submit"]').first().click();

// });
// import cypress = require('cypress');
// import { RegistrationPage } from '../pages/RegistrationPage';

// Cypress.Commands.add('register', (email: string, password: string) => {
//   const regPage = new RegistrationPage();

//   regPage.visit();
//   cy.handlePopups();

//   regPage.fillEmail(email);
//   regPage.fillPassword(password);
//   regPage.submit();
// });















// Cypress.Commands.add('handlePopups', () => {
//   // Попытка найти и нажать кнопку принятия cookies с атрибутом data-cookie-bar="simpleAccept"
//   cy.get('button[data-cookie-bar="simpleAccept"]', { timeout: 5000, log: false })
//     .then($btn => {
//       if ($btn.length > 0) {
//         cy.wrap($btn).click({ force: true });
//         cy.log('Accepted cookie banner');
//       } else {
//         cy.log('Cookie banner not present');
//       }
//     })
//     });
//     // cypress/support
//     // cypress/support/commands.ts

// Cypress.Commands.add('register', (email: string, password: string) => {
//   cy.visit('https://www.profi-parfemy.cz/registrace/');

//   cy.handlePopups(); // если у тебя есть команда для закрытия баннеров/попапов

//   cy.get('input[name="email"]').first().clear().type(email, { force: true });
//   cy.get('input[name="password"]').first().clear().type(password, { force: true });

//   cy.get('button[type="submit"]').click();
// });


//   // Здесь можно добавить закрытие другого попапа, если нужно
//   cy.get('.popup-close', { timeout: 5000, log: false })
//     .then($btn => {
//       if ($btn.length > 0) {
//         cy.wrap($btn).click({ force: true });
//         cy.log('Closed gift popup');
//       } else {
//         cy.log('Gift popup not present');
//       }
//     });
//     Cypress.Commands.add('register', (email: string, password: string) => {
//   cy.visit('https://www.profi-parfemy.cz/registrace/');

//   cy.handlePopups(); // закрываем баннеры и попапы, если есть

//   cy.get('input[name="email"]').first().clear().type(email, { force: true });
//   cy.get('input[name="password"]').first().clear().type(password, { force: true });

//   cy.get('button[type="submit"]').click();
// });

// ;
// // import { RegistrationPage } from '../pages/RegistrationPage';

// Cypress.Commands.add('register', (email: string, password: string) => {
//   const regPage = new RegistrationPage();

//   regPage.visit();
//   cy.handlePopups();

//   regPage.fillEmail(email);
//   regPage.fillPassword(password);
//   regPage.submit();
// });
// // === Custom командa: handlePopups ===
// Cypress.Commands.add('handlePopups', () => {
//   // Принять cookie баннер
//   cy.get('button#cookiescript_accept', { timeout: 10000 })
//     .should('be.visible')
//     .click({ force: true });

//   // Закрыть попап с подарком, если он появился
//   cy.get('div.popup-content', { timeout: 10000 }).then($popup => {
//     if ($popup.is(':visible')) {
//       cy.get('button.popup-close').click({ force: true });
//     }
//   });
// });
// Cypress.Commands.add('handlePopups', () => {
//   // Принять cookie
//   cy.get('button#cookiescript_accept', { timeout: 10000 })
//     .should('be.visible')
//     .click({ force: true }); // принудительно — чтобы точно кликнул

//   // Закрыть всплывающее окно с подарком, если оно появилось
//   cy.get('div.popup-content', { timeout: 10000 }).then($popup => {
//     if ($popup.is(':visible')) {
//       cy.get('button.popup-close').click({ force: true });
//     }
//   });
// });

// // === Кастомная команда: закрыть cookie и всплывающие окна ===
// Cypress.Commands.add('handlePopups', () => {
//   // Проверяем: есть ли кнопка "Принять куки"
//   cy.get('body').then(($body) => {
//     if ($body.find('button#cookiescript_accept').length > 0) {
//       cy.get('button#cookiescript_accept')
//         .should('be.visible')
//         .click({ force: true }); // Кликаем, если нашли
//     }
//   });

//   // Ждём немного — иногда попап появляется с задержкой
//   cy.wait(1000);

//   // Проверяем: есть ли попап с подарком
//   cy.get('body').then(($body) => {
//     if ($body.find('.popup__close').length > 0) {
//       cy.get('.popup__close').click({ force: true }); // Закрываем попап
//     }
//   });
// });

// // === Кастомная команда: регистрация пользователя ===
// Cypress.Commands.add('register', (email: string, password: string) => {
//   cy.visit('/registrace'); // Переход на страницу регистрации

//   cy.handlePopups();  

 
//  cy.get('input[name="email"]').first().type(email);
// cy.get('input[name="password"]').first().type(password);

 
//   cy.get('button[type="submit"]').click();
// });



// Cypress.Commands.add('handlePopups', () => {
//   // Принять cookie баннер, если есть
//   cy.get('button#cookiescript_accept', { timeout: 10000 })
//     .should('be.visible')
//     .click({ force: true });

//   // Закрыть всплывающее окно с подарком, если появилось
//   cy.wait(1000); // чуть подождать
//   cy.get('.popup__close', { timeout: 10000 }).then(($el) => {
//     if ($el.is(':visible')) {
//       cy.wrap($el).click({ force: true });
//     }
//   });
// });
// Cypress.Commands.add('register', (email: string, password: string) => {
//   cy.visit('/registrace');

//   // Закрытие попапов, если нужно
//   cy.handlePopups();

//   // Заполнение формы
//   cy.get('input[name="email"]').type(email);
//   cy.get('input[name="password"]').type(password);

//   // Отправка формы
//   cy.get('button[type="submit"]').click();
// });
// // Cypress.Commands.add('handlePopups', () => {
// //   // Cookie баннер
// //   cy.get('button#cookiescript_accept', { timeout: 10000 }).click();

// //   // Подарочный popup
// //   cy.wait(2000);
// //   cy.get('.popup__close', { timeout: 10000 }).click({ force: true });
// // });
 
// // import { RegistrationPage } from '../pages/RegistrationPage';

// Cypress.Commands.add('register', (email: string, password: string) => {
//   const registrationPage = new RegistrationPage();
//   registrationPage.visit();
//   registrationPage.fillEmail(email);
//   registrationPage.fillPassword(password);
//   registrationPage.fillConfirmPassword(password);
//   registrationPage.submit();
// });
// import { RegistrationPage } from '../pages/RegistrationPage';
// import { PopupComponent } from './components/PopupComponent';
// import { support } from 'cypress/types/jquery';

// Cypress.Commands.add('handlePopups', () => {
//   const popup = new PopupComponent();

//   cy.then(() => {
//     popup.acceptCookies();
//   });

//   cy.then(() => {
//     popup.closeGiftPopup();
//   });
// });
