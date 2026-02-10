describe('Newsletter Subscribe Form', () => {
    beforeEach(() => {
        cy.visit('/')
    })

    it('allows users to subscribe to the email list', () => {
        cy.getByData('email-input').type('tom@aol.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message')
        .should('exist')
        .contains('Success: tom@aol.com has been successfully subscribed')
    })

    ;['tom', 'tom@', '@aol', '@aol.com'].forEach((event) => {
        it('does NOT allow an invalid email address, ' + event, () => {
            cy.getByData('email-input').type(event)
            cy.getByData('submit-button').click()
            cy.getByData('success-message').should('not.exist')
        })
    })

    it('does NOT allow an already subscribed email address', () => {
        cy.getByData('email-input').type('john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
        cy.getByData('server-error-message')
        .should('exist')
        .contains('Error: john@example.com already exists. Please use a different email address.')
    })

    it('does NOT allow email address to be blank', () => {
        cy.getByData('submit-button').click()
        cy.getByData('success-message').should('not.exist')
        cy.getByData('error-message')
        .should('exist')
        .contains('Email is required')
    })
})