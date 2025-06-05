export class PopupComponent {
  acceptCookies() {
    cy.get('button#cookiescript_accept', { timeout: 10000 })
      .should('be.visible')
      .click();
  }

  closeGiftPopup() {
    // Подождем немного, пока появится попап
    cy.wait(2000); // иногда появляется с задержкой

    cy.get('.popup__close', { timeout: 10000 }) // кнопка "×"
      .should('be.visible')
      .click({ force: true });
  }
}
