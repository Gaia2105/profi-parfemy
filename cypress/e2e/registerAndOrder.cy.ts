import { RegistrationPage } from '../pages/RegistrationPage';

const registrationPage = new RegistrationPage();

describe('Register and order product', () => {
  beforeEach(() => {
    cy.fixture('user').then((data) => {
       data.email = `testuser@outlook.com`;
      cy.wrap(data).as('userData');
    });
  });

  it('should register and complete an order', function () {
    const user = this.userData;

     
    registrationPage.register(user);
;
  });
});







