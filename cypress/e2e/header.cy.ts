describe('Site header', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3001')
    })

    it('can navigate to the home page', () => {
        // Given
        // Start on a page that is not the homepage.
        cy.visit('http://localhost:3001/testing-your-first-application')
        cy.location('pathname').should('eq', '/testing-your-first-application')
        // When
        cy.getByData('logo-home-link').click()
        // Then
        cy.location('pathname').should('eq','/')
    })

    it('can view a list of courses to navigate to', () => {
        // When
        cy.getByData('courses-dropdown').click()
        // Then
        cy.getByData('courses-dropdown-menu').should('be.visible')
        cy.getByData('courses-dropdown-menu').within(() => {
            cy.contains('1. Testing Your First Next.js Application').should('be.visible')
            cy.contains('2. Testing Foundations').should('be.visible')
            cy.contains('3. Cypress Fundamentals').should('be.visible')
        })
    })

    it('can navigate to the "Testing Your First Next,js Application" course', () => {
        // Given
        cy.getByData('courses-dropdown').click()
        cy.getByData('courses-dropdown-menu').should('be.visible')
        // When
        cy.getByData('courses-dropdown-menu').contains('1. Testing').click()
        // Then
        cy.location('pathname').should('eq', '/testing-your-first-application')
        cy.getByData('course-heading').should('contain', 'Testing Your First Next.js Application')
    })
})