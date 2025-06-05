import { LoginPage } from '..//pages/loginPage';

describe('Login Test', () => {
  const loginPage = new LoginPage();

  it('should log in successfully with valid credentials', () => {
    loginPage.login({
      email: 'sarkisian.gaiane@gmail.com',
      password: 'Armenia87'
    });
  });
});


 