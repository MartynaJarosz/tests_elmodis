describe('Testing page: elmodis.com', () => {
    beforeEach(() => {
      cy.visit('https://www.elmodis.com/');
    });
  
    //sprawdzanie logo
    it('Logo display', () => {
      cy.get('.logo').should('be.visible');
    });
  
    //sprawdzanie menu
    it('Displaying the menu', () => {
        cy.get('.navbar-toggler').click(); 
        cy.get('#menu-menu').should('be.visible'); 
    });
  
    //sprawdzanie wszystkich elementów menu
    it('Checking the contents of the menu', () => {
        cy.get('.navbar-toggler').click();

        cy.get('.navbar-nav').within(() => {
            cy.contains('Assets').should('be.visible');
            cy.contains('Industries').should('be.visible');
            cy.contains('Outcomes').should('be.visible');
            cy.contains('Solution').should('be.visible');
            cy.contains('Company').should('be.visible');
            cy.contains('Downloads').should('be.visible');
        });

        cy.get('.ml-xl-1').within(() => {
            cy.contains('Contact Us').should('be.visible');
        });

        cy.get('#menu-item-39').click();

        cy.get('#menu-menu').within(() => {
            cy.contains('Pumps').should('be.visible');
            cy.contains('Blowers/ Fans').should('be.visible');
            cy.contains('Wind Turbines').should('be.visible');
            cy.contains('Energy Storage').should('be.visible');
            cy.contains('Electric Motors').should('be.visible');
            cy.contains('Other Assets').should('be.visible');
        });

        cy.get('#menu-item-40').click();

        cy.get('#menu-menu').within(() => {
            cy.contains('Utilites').should('be.visible');
            cy.contains('Manufacturing& OEM').should('be.visible');
            cy.get('[id="menu-item-359"]').contains('Energy').should('be.visible');
            cy.contains('Electric transportation').should('be.visible');
        });

        cy.get('#menu-item-41').click();

        cy.get('#menu-menu').within(() => {
            cy.contains('About Us').should('be.visible');
            cy.contains('Partners').should('be.visible');
            cy.contains('Career').should('be.visible');
            cy.contains('EU projects').should('be.visible');
        });

    });

    //wysyłanie emaila
    it('Sending email', () => {
    
      cy.visit('https://www.elmodis.com/contact-us');
        
      cy.get('[name="your-name"]').type('Ana'); 
      cy.get('[name="your-surname"]').type('XYZ'); 
      cy.get('[name="your-email"').first().type('anaxyz@example.com'); 
      cy.get('[name="your-phone"]').type('111111111'); 
      cy.get('[name="your-message"]').type('Test message.'); 
  
      cy.get('[name="acceptance-646"]').click({ force: true });
      cy.get('[value="Send Message"]').click({ force: true }); 
  
      cy.get('.wpcf7-response-output')
        .invoke('show')
        .should('be.visible')
    });
});