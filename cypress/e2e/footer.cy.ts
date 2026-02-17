describe('Site footer', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('should be visible on the homepage', () => {
        cy.get('footer').should('be.visible');
    });

    describe('External Links', () => {
        it('should have correct Next.js link', () => {
            cy.get('footer')
                .find('a[href*="nextjs.org"]')
                .should('have.attr', 'href', 'https://nextjs.org/')
        });

        it('should have correct Cypress link', () => {
            cy.get('footer')
                .find('a[href*="cypress.io"]')
                .should('have.attr', 'href', 'https://www.cypress.io/')
        });
        
        it('should have correct GitHub link', () => {
            cy.get('footer')
                .find('a[href*="github.com"]')
                .should('have.attr', 'href', 'https://github.com/cypress-io/cypress')
        });
    })
})