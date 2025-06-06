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
  })
   {
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
     
 {
    cy.get('div.focus-cookiebara.active', { timeout: 3000 })
      .invoke('hide')
        }
     cy.get('div.focus-cookiebara.active', { timeout: 3000 })
      .invoke('hide') 
    
    this.closeIncomakerPopup();

    this.closePopups();
    
  }
  }













 