export class RegistrationPage {
  visit() {
    cy.visit('/registrace');  
  }

  closePopups() {
     
    cy.get('div.focus-cookiebara.active', { timeout: 3000 })
      .invoke('hide')
      

     
    cy.get('#login', { timeout: 3000 })
      .invoke('hide')
      
  }

  closeIncomakerPopup() {
    cy.wait(1000);  
    cy.get('iframe[src*="incomaker"]', { timeout: 30000 }).then(($iframe) => {
      const iframeBody = $iframe.contents().find('body');
      const $btn = iframeBody.find('.close_button');

      if ($btn.length > 0 && $btn.is(':visible')) {
        cy.wrap($btn).click({ force: true });
      }
    })
  }

  getEmailInput() {
    return cy.get('input[data-bv-field="email"]');
  }

  getPasswordInput() {
    return cy.get('input[data-bv-field="password"]');
  }

  getGenderSelect() {
    return cy.get('select[id="gender"]');
  }

  getBirthDateInput() {
    return cy.get('input[name="birthdate"]');
  }

  getFirstNameInput() {
    return cy.get('input[data-bv-field="name"]');
  }

  getLastNameInput() {
    return cy.get('input[data-bv-field="surname"]');
  }

  getPhoneInput() {
    return cy.get('input[data-bv-field="phone"]');
  }

  getAddressInput() {
    return cy.get('input[data-bv-field="street"]');
  }

  getCityInput() {
    return cy.get('input[data-bv-field="city"]');
  }

  getZipInput() {
    return cy.get('input[data-bv-field="zip"]');
  }

  getCountrySelect() {
    return cy.get('select[id="country"]');
  }
getPrivacyCheckbox1() {
    return cy.get('input[data-cookie-bar="simpleAccept"]');
  }
getSubmitButton() {
  return cy.get('input.btn.btn-primary[type="submit"]:visible');


}

  getPrivacyCheckbox() {
    return cy.get('input[data-cookie-bar="simpleAccept"]');
  }

  register(user: {
    email: string,
    password: string,
    gender: string,
    birthDate: string,
    firstName: string,
    lastName: string,
    phone: string,
    address: string,
    city: string,
    zip: string,
   
  }) {
    this.visit();
    this.closePopups();

    cy.get('form', { timeout: 10000 }).should('be.visible');

    this.getEmailInput().clear({ force: true }).type(user.email, { force: true });
    this.getPasswordInput().clear({ force: true }).type(user.password, { force: true });
    this.getGenderSelect().select(user.gender, { force: true });
    this.getBirthDateInput().clear().type(user.birthDate);
    this.getFirstNameInput().clear().type(user.firstName);
    this.getLastNameInput().clear().type(user.lastName);
    this.getPhoneInput().clear().type(user.phone);
    this.getPhoneInput().clear({ force: true, waitForAnimations: false }).type(user.phone, { force: true });

    this.getAddressInput().clear().type(user.address);
    this.getCityInput().clear().type(user.city);
    this.closeIncomakerPopup(); //  
    this.closePopups(); 
    this.getZipInput().clear({ force: true }).type(user.zip, { force: true });

     
    this.closeIncomakerPopup();  
    this.closePopups(); this.getSubmitButton().click({ force: true });
    this.closeIncomakerPopup();  
    this.closePopups();   
     

    this.closeIncomakerPopup();  
    this.closePopups(); {
     
    cy.get('div.focus-cookiebara.active', { timeout: 3000 })
      .invoke('hide')
        }
     cy.get('div.focus-cookiebara.active', { timeout: 3000 })
      .invoke('hide') 
    
    this.closeIncomakerPopup();
     
     
  this.closePopups();
  this.closeIncomakerPopup();
  }
    }















// export class RegistrationPage {
//   visit() {
//     cy.visit('/registrace'); // Измени путь при необходимости
//   }

//   closePopups() {
//     // Закрыть cookie-баннер, если видим
//     cy.get('div.focus-cookiebara.active', { timeout: 3000 })
//       .should('exist')
//       .invoke('hide')
//       // .catch(() => cy.log('Cookie bar not found or already hidden.'));

//     // Закрыть модалку входа, если она открыта
//     cy.get('#login', { timeout: 3000 })
//       .should('exist')
//       .invoke('hide')
//       // .catch(() => cy.log('Login popup not found or already hidden.'));
//   }

//   closeIncomakerPopup() {
//     cy.wait(1000); // немного подождать для появления iframe
//     cy.get('iframe[src*="incomaker"]', { timeout: 10000 }).then(($iframe) => {
//       const iframeBody = $iframe.contents().find('body');
//       const $btn = iframeBody.find('.close_button');

//       if ($btn.length > 0 && $btn.is(':visible')) {
//         cy.wrap($btn).click({ force: true });
//       }
//     // }).catch(() => {
//     //   cy.log('Incomaker popup not found, skipping...');
//     });
//   }

//   getEmailInput() {
//     return cy.get('input[data-bv-field="email"]');
//   }

//   getPasswordInput() {
//     return cy.get('input[data-bv-field="password"]');
//   }

//   getGenderSelect() {
//     return cy.get('select[id="gender"]');
//   }

//   getBirthDateInput() {
//     return cy.get('input[name="birthdate"]');
//   }

//   getFirstNameInput() {
//     return cy.get('input[data-bv-field="name"]');
//   }

//   getLastNameInput() {
//     return cy.get('input[data-bv-field="surname"]');
//   }

//   getPhoneInput() {
//     return cy.get('input[data-bv-field="phone"]');
//   }

//   getAddressInput() {
//     return cy.get('input[data-bv-field="street"]');
//   }

//   getCityInput() {
//     return cy.get('input[data-bv-field="city"]');
//   }

//   getZipInput() {
//     return cy.get('input[data-bv-field="zip"]');
//   }

//   getCountrySelect() {
//     return cy.get('select[id="country"]');
//   }

//   // getPrivacyCheckbox() {
//   //   return cy.get('input[data-cookie-bar="simpleAccept"]');
//   // }

//   getSubmitButton() {
//     return cy.get('button[data-callback="onComplete"]');
//   }

//   register(user: {
//     email: string,
//     password: string,
//     gender: string,
//     birthDate: string,
//     firstName: string,
//     lastName: string,
//     phone: string,
//     address: string,
//     city: string,
//     zip: string,
//     country: string
//   }) {
//     this.visit();
//     this.closePopups();

//     cy.get('form').should('be.visible');

//     this.getEmailInput().clear({ force: true }).type(user.email, { force: true });
//     this.getPasswordInput().clear({ force: true }).type(user.password, { force: true });
//     this.getGenderSelect().select(user.gender);
//     this.getBirthDateInput().clear().type(user.birthDate);
//     this.getFirstNameInput().clear().type(user.firstName);
//     this.getLastNameInput().clear().type(user.lastName);
//     this.getPhoneInput().clear().type(user.phone);
//     this.getAddressInput().clear().type(user.address);
//     this.getCityInput().clear().type(user.city);
//     this.getZipInput().clear().type(user.zip);
//     this.getCountrySelect().select(user.country, { force: true });

//     // this.getPrivacyCheckbox().check({ force: true });

//     this.closeIncomakerPopup(); // 👈 обязательно закрываем рекламный iframe

//     // this.getSubmitButton().click({ force: true });
//   }
// }







// export interface RegistrationUser {
//   email: string;
//   password: string;
//   gender: string;
//   birthDate: string;
//   firstName: string;
//   lastName: string;
//   phone: string;
//   address: string;
//   city: string;
//   zip: string;
//   country: string;
// }

// export class RegistrationPage {
//   visit() {
//     cy.visit('/registrace');
//   }

//   closePopups() {
//     // Удаляем cookie-блок, если он есть
//     cy.get('body').then(($body) => {
//       if ($body.find('.focus-cookiebara').length > 0) {
//         cy.get('.focus-cookiebara').then(($el) => {
//           if ($el.is(':visible')) {
//             cy.wrap($el).invoke('remove');
//           }
//         });
//       }
//     });

//     // Закрыть модальное окно входа
//     cy.get('body').then(($body) => {
//       if ($body.find('#login').length > 0) {
//         cy.get('#login').invoke('hide');
//       }
//     });

//     // Закрыть iframe с кнопкой закрытия, если он есть
//     cy.get('iframe[src*="incomaker"]', { timeout: 3000 }).then(($iframe) => {
//       const body = $iframe.contents().find('body');
//       const closeButton = body.find('.close_button');

//       if (closeButton.length > 0 && closeButton.is(':visible')) {
//         cy.wrap(closeButton).click({ force: true });
//       }
//     // }).catch(() => {
//     //   // Ничего — iframe может отсутствовать
//     });
//   }

//   getEmailInput() {
//     return cy.get('input[data-bv-field="email"]').first();
//   }

//   getPasswordInput() {
//     return cy.get('input[data-bv-field="password"]').first();
//   }

//   getGenderSelect() {
//     return cy.get('select[id="gender"]');
//   }

//   getBirthDateInput() {
//     return cy.get('input[name="birthdate"]');
//   }

//   getFirstNameInput() {
//     return cy.get('input[data-bv-field="name"]');
//   }

//   getLastNameInput() {
//     return cy.get('input[data-bv-field="surname"]');
//   }

//   getPhoneInput() {
//     return cy.get('input[data-bv-field="phone"]');
//   }

//   getAddressInput() {
//     return cy.get('input[data-bv-field="street"]');
//   }

//   getCityInput() {
//     return cy.get('input[data-bv-field="city"]');
//   }

//   getZipInput() {
//     return cy.get('input[data-bv-field="zip"]');
//   }

//   getCountrySelect() {
//     return cy.get('select[id="country"]');
//   }

//   // getPrivacyCheckbox() {
//   //   return cy.get('input[data-cookie-bar="simpleAccept"]');
//   // }

//   // getSubmitButton() {
//   //   return cy.get('button[data-callback="onComplete"]');
//   // }

//   register(user: RegistrationUser) {
//     this.visit();
//     this.closePopups();

//     cy.get('form').should('be.visible');

//     this.getEmailInput().clear({ force: true }).type(user.email, { force: true });
//     this.getPasswordInput().clear({ force: true }).type(user.password, { force: true });
//     this.getGenderSelect().select(user.gender);
//     this.getBirthDateInput().clear({ force: true }).type(user.birthDate);
//     this.getFirstNameInput().clear({ force: true }).type(user.firstName);
//     this.getLastNameInput().clear({ force: true }).type(user.lastName);
//     this.getPhoneInput().clear({ force: true }).type(user.phone);
//     this.getAddressInput().clear({ force: true }).type(user.address);
//     this.getCityInput().clear({ force: true }).type(user.city);
//     this.getZipInput().clear({ force: true }).type(user.zip);
//     this.getCountrySelect().select(user.country);
//     // this.getPrivacyCheckbox().check({ force: true });

//     // this.getSubmitButton().click({ force: true });
//   }
// }

















// export class RegistrationPage {
//   visit() {
//     cy.visit('/registrace'); // измени путь, если нужно
//   }

// //   closePopups() {
// //     // Закрыть cookie-баннер
// //     cy.get('.focus-cookiebar', { timeout: 5000 }).then(($el) => {
// //       if ($el.is(':visible')) {
// //         cy.get('.focus-cookiebar').invoke('hide');
// //       }
// //     });

// //     // Закрыть модалку входа
// //     cy.get('#login', { timeout: 5000 }).then(($el) => {
// //       if ($el.is(':visible')) {
// //         cy.get('#login').invoke('hide');
// //       }
// //     });

// //     // Закрыть другие всплывающие окна (например, .js-modal)
// //     // Закрыть модальные окна, если они есть
// // cy.get('.js-modal[class="cookiebara-wrapper focus-cookiebar"]', { timeout: 5000 })  // даем время на появление
// //   .then(($el) => {
// //     if ($el.is(':visible')) {
// //       cy.wrap($el).invoke('hide');  // скрываем
// //     }
// //   })
// //   // .catch(() => {
// //   //   // окно не найдено — ничего страшного, просто пропускаем
// //   // });

//   }

//   getEmailInput() {
//     return cy.get('input[data-bv-field="email"]').first();
//   }

//   getPasswordInput() {
//     return cy.get('input[data-bv-field="password"]').first();
//   }

//   getGenderSelect() {
//     return cy.get('select[id="gender"]');
//   }

//   getBirthDateInput() {
//     return cy.get('input[name="birthdate"]');
//   }

//   getFirstNameInput() {
//     return cy.get('input[data-bv-field="name"]');
//   }

//   getLastNameInput() {
//     return cy.get('input[data-bv-field="surname"]');
//   }

//   getPhoneInput() {
//     return cy.get('input[data-bv-field="phone"]');
//   }

//   getAddressInput() {
//     return cy.get('input[data-bv-field="street"]');
//   }

//   getCityInput() {
//     return cy.get('input[data-bv-field="city"]');
//   }

//   getZipInput() {
//     return cy.get('input[data-bv-field="zip"]');
//   }

//   getCountrySelect() {
//     return cy.get('select[id="country"]');
//   }

//   getPrivacyCheckbox() {
//     return cy.get('input[data-cookie-bar="simpleAccept"]');
//   }

//   getSubmitButton() {
//     return cy.get('button[data-callback="onComplete"]');
//   }
// closePopups() {
//   // Попытка закрыть cookie-баннер, если он есть
//   cy.get('body').then(($body) => {
//     if ($body.find('#cookieBar button.btn.btn-primary').length) {
//       cy.get('#cookieBar button.btn.btn-primary').click({ force: true });
//     }
//   });

//   // Попытка скрыть модалку входа, если она есть
//   cy.get('body').then(($body) => {
//     if ($body.find('#login').length) {
//       cy.get('#login').invoke('hide');
//     }
//   });

//   // Попытка закрыть iframe-модалку (Incomaker)
//   cy.get('iframe[src*="incomaker"]').then(($iframe) => {
//     const body = $iframe.contents().find('body');
//     if (body.find('.close_button').length) {
//       cy.wrap(body).find('.close_button').click({ force: true });
//     }
//   }).catch(() => {
//     // iframe не найден — игнорируем
//   });
// }

//   register(user: RegistrationPage) {
//     this.visit();

//     this.closePopups(); // 👈 Важно! Сначала закрываем все всплывающие окна

//     cy.get('form').should('be.visible'); // Убедиться, что форма загрузилась

//     this.getEmailInput().clear().type(user.email, { force: true });
//     this.getPasswordInput().clear().type(user.password, { force: true });
//     this.getGenderSelect().select(user.gender);
//     this.getBirthDateInput().clear().type(user.birthDate);
//     this.getFirstNameInput().clear().type(user.firstName);
//     this.getLastNameInput().clear().type(user.lastName);
//     this.getPhoneInput().clear().type(user.phone);
//     this.getAddressInput().clear().type(user.address);
//     this.getCityInput().clear().type(user.city);
//     this.getZipInput().clear().type(user.zip);
//     this.getCountrySelect().select(user.country);

//     this.getPrivacyCheckbox().check({ force: true });

//     this.getSubmitButton().click({ force: true });
//   }
// }
 





// //     cy.visit('/registrace/');
// //   }

// //   getEmailInput() {
// //     return cy.get('input[data-bv-field="email"]').first();
// //   }

// //   getPasswordInput() {
// //     return cy.get('input[data-bv-field="password"]').first();
// //   }

// //   getGenderSelect() {
// //     return cy.get('select[id="gender"]');
// //   }

// //   getBirthDateInput() {
// //     return cy.get('input[name="birthdate"]');
// //   }

// //   getFirstNameInput() {
// //     return cy.get('input[data-bv-field="name"]');
// //   }

// //   getLastNameInput() {
// //     return cy.get('input[data-bv-field="surname"]');
// //   }

// //   getPhoneInput() {
// //     return cy.get('input[data-bv-field="phone"]');
// //   }

// //   getAddressInput() {
// //     return cy.get('input[data-bv-field="street"]');
// //   }

// //   getCityInput() {
// //     return cy.get('input[data-bv-field="city"]');
// //   }

// //   getZipInput() {
// //     return cy.get('input[data-bv-field="zip"]');
// //   }

// //   getCountrySelect() {
// //     return cy.get('select[id="country"]');
// //   }

// //   getPrivacyCheckbox() {
// //     return cy.get('input[data-cookie-bar="simpleAccept"]');
// //   }

// //   getSubmitButton() {
// //     return cy.get('button[data-callback="onComplete"]');
// //   }

// //   register(user:RegistrationPage) {
// //     this.visit();

// //     this.getEmailInput().clear().type(user.email, { force: true });
// //     this.getPasswordInput().clear().type(user.password, { force: true });
// //     this.getGenderSelect().select(user.gender);
// //     this.getBirthDateInput().clear().type(user.birthDate);
// //     this.getFirstNameInput().clear().type(user.firstName);
// //     this.getLastNameInput().clear().type(user.lastName);
// //     this.getPhoneInput().clear().type(user.phone);
// //     this.getAddressInput().clear().type(user.address);
// //     this.getCityInput().clear().type(user.city);
// //     this.getZipInput().clear().type(user.zip);
// //     this.getCountrySelect().select(user.country);

// //     // Ставим галочку согласия с политикой конфиденциальности
// //     this.getPrivacyCheckbox().check({ force: true });

// //     this.getSubmitButton().click({ force: true });
// //   }
// // }

















// //   fillForm(user: any) {
// //     cy.get('#form-field-first_name').type(user.firstName);
// //     cy.get('#form-field-last_name').type(user.lastName);
// //     cy.get('#form-field-email').type(user.email);
// //     cy.get('#form-field-password').type(user.password);
// //     cy.get('#form-field-password_repeat').type(user.password);
// //   }

// //   submit() {
// //     cy.get('button[type=submit]').click();
// //   }
// // }
// // export class RegistrationPage {
// //   fillEmail(email: string) {
// //     throw new Error('Method not implemented.');
// //   }
// //   fillPassword(password: string) {
// //     throw new Error('Method not implemented.');
// //   }
// //   fillConfirmPassword(password: string) {
// //     throw new Error('Method not implemented.');
// //   }
// //   fillForm(user: any) {
// //     throw new Error("Method not implemented.");
// //   }
// //   submit() {
// //     throw new Error("Method not implemented.");
// //   }
// //   visit() {
// //     cy.visit('/registrace/');

// //     // Скрыть cookie-баннер, если он есть
// //     cy.get('.focus-cookiebara').then(($el) => {
// //       if ($el.is(':visible')) {
// //         cy.wrap($el).invoke('hide');
// //       }
// //     })
//   // }

// // export interface RegistrationUser {
// //     email: string;
// //     password: string;
// //     gender: string;
// //     birthDate: string;
// //     firstName: string;
// //     lastName: string;
// //     phone: string;
// //     address: string;
// //     city: string;
// //     zip: string;
// //     country: string;
// // }