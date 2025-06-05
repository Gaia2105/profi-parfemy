export class LoginPage {
  visit() {
    cy.visit('https://www.profi-parfemy.cz/prihlaseni');
  }

  closeAllPopups() {
    cy.get('div.focus-cookiebara.active', { timeout: 3000 }).then(($el) => {
      if ($el.is(':visible')) {
        cy.wrap($el).invoke('hide');
      }
    });

    cy.get('#login', { timeout: 3000 }).then(($el) => {
      if ($el.is(':visible')) {
        cy.wrap($el).invoke('hide');
      }
    });
  }

  closeIncomakerPopup() {
    cy.get('iframe[src*="incomaker"]', { timeout: 5000 }).then(($iframe) => {
      const body = $iframe.contents().find('body');
      const closeBtn = body.find('.close_button');
      if (closeBtn.length > 0 && closeBtn.is(':visible')) {
        cy.wrap(closeBtn).click({ force: true });
      }
    })
    
  }

  getEmailInput() {
    return cy.get('input#email', { timeout: 10000 });
  }

  getPasswordInput() {
    return cy.get('input#pass', { timeout: 10000 });
  }

  getLoginButton() {
    return cy.get('input[type="submit"][class="btn btn-primary"]');
  }

  searchProduct(query: string) {
  this.closeAllPopups(); 
    cy.get('input[name="search"]', { timeout: 10000 })
      .clear({ force: true })
      .type(query + '{enter}', { force: true });

    cy.get('body', { timeout: 10000 }).should('contain.text', query.split(' ')[0]);
  }

  login(user: { email: string; password: string }) {
  this.visit();
  this.closeAllPopups();
  this.closeIncomakerPopup();

  this.getEmailInput()
    .should('be.visible')
    .clear({ force: true })
    .type(user.email, { force: true });

  this.getPasswordInput()
    .should('be.visible')
    .clear({ force: true })
    .type(user.password, { force: true });

  this.getLoginButton().click({ force: true });

  cy.get('body', { timeout: 10000 }).should('contain.text', 'Můj účet');

  this.closeAllPopups();
  this.closeIncomakerPopup();


  this.closeAllPopups();
  this.closeIncomakerPopup();

  this.searchProduct('"Tom Ford Lost Cherry EDP 50 ml UNISEX"');
  cy.get('button.btn-insert[data-tracking-clickaddtocart*="737658"]', { timeout: 10000 })
    .should('be.visible')
    .click({ force: true });

  cy.get('button.btn.btn-insert', { timeout: 10000 })
   
  cy.contains('Tom Ford Lost Cherry EDP 50 ml UNISEX').click({ force: true });

  cy.wait(1000);
  
  this.closeAllPopups();
  this.closeIncomakerPopup();
     cy.wait(5000);
  this.closeAllPopups();
  this.closeIncomakerPopup();

  cy.get('a.btn.btn-block.btn-primary', { timeout: 10000 }).click({ force: true });
  cy.wait(1000);

  this.closeAllPopups();
  this.closeIncomakerPopup();

  cy.get('button[name="OrderNext"]', { timeout: 10000 })
   .click({ force: true });
  cy.get('label[for="del10"]').click({ force: true });
  cy.get('label[for="pay2"]').click({ force: true });
  cy.get('button[name="OrderNext"].btn-nextstep')
   
  .click({ force: true });

  this.closeAllPopups();
  this.closeIncomakerPopup();
// cy.get('button[name="SubmitOrder"].btn-nextstep.last', { timeout: 10000 })
//   .should('be.visible')
//   .click({ force: true });

}
}
























// export class LoginPage {
//   visit() {
//     cy.visit('https://www.profi-parfemy.cz/prihlaseni');
//   }

//   closeAllPopups() {
//     cy.get('div.focus-cookiebara.active', { timeout: 3000 }).then(($el) => {
//       if ($el.is(':visible')) {
//         cy.wrap($el).invoke('hide');
//       }
//     });

//     cy.get('#login', { timeout: 3000 }).then(($el) => {
//       if ($el.is(':visible')) {
//         cy.wrap($el).invoke('hide');
//       }
//     });
//   }

//   closeIncomakerPopup() {
//     cy.wait(1000);
//     cy.get('iframe[src*="incomaker"]', { timeout: 5000 }).then(($iframe) => {
//       const body = $iframe.contents().find('body');
//       const closeBtn = body.find('.close_button');
//       if (closeBtn.length > 0 && closeBtn.is(':visible')) {
//         cy.wrap(closeBtn).click({ force: true });
//       }
//     });
//   }

//   getEmailInput() {
//     return cy.get('input#email', { timeout: 10000 });
//   }

//   getPasswordInput() {
//     return cy.get('input#pass', { timeout: 10000 }); // Уточни ID, если другой
//   }

//   getLoginButton() {
//   return cy.get('input[type="submit"][class="btn btn-primary"]');
// }






// searchProduct(query: string) {
//     cy.get('input#search', { timeout: 10000 })
//       .should('be.visible')
//       .clear()
//       .type(query);

//     cy.get('button.btn-search', { timeout: 5000 })
//       .should('be.visible')
//       .click();

//     cy.get('body', { timeout: 10000 }).should('contain.text', query.split(' ')[0]);
//   }






//   login(user: { email: string; password: string }) {
//   this.visit();
//   this.closeAllPopups();
//   this.closeIncomakerPopup();

//   cy.get('input#email', { timeout: 10000 })
//     .should('be.visible')
//     .clear({ force: true })
//     .type(user.email, { force: true });

//   cy.get('input#pass', { timeout: 10000 })
//     .should('be.visible')
//     .clear({ force: true })
//     .type(user.password, { force: true });

//   this.getLoginButton().click({ force: true });

//   cy.get('body', { timeout: 10000 }).should('contain.text', 'Můj účet');

//   this.closeAllPopups(); {
//     cy.get('div.focus-cookiebara.active', { timeout: 3000 }).then(($el) => {
//       if ($el.is(':visible')) {
//         cy.wrap($el).invoke('hide');
//   this.searchProduct('tom ford lost cherry');

//   this.closeIncomakerPopup() ; {
//     cy.wait(1000);
//     cy.get('iframe[src*="incomaker"]', { timeout: 5000 }).then(($iframe) => {
//       const body = $iframe.contents().find('body');
//       const closeBtn = body.find('.close_button');
//       if (closeBtn.length > 0 && closeBtn.is(':visible')) {
//         cy.wrap(closeBtn).click({ force: true });
//       }      
//       })
//     }  
//   }}
//   )}
// }
// }  









 