describe("User Journey", () => {
    it("a user can find a course on the home page and complete the courses lessons", () => {
        cy.visit('http://localhost:3001')
        cy.getByData('course-0').find('a').contains('Get started').click()
        cy.location('pathname').should('equal', '/testing-your-first-application')
        // Start the course
        cy.getByData('next-lesson-button').click()
        cy.location('pathname').should(
            'eq',
            '/testing-your-first-application/app-install-and-overview'
        )
        // Answer the first question
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should(
            'eq',
            "/testing-your-first-application/installing-cypress-and-writing-our-first-test"
        )

        // Answer the second question
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').click()
        cy.location('pathname').should(
            'eq',
            '/testing-your-first-application/setting-up-data-before-each-test'
        )

        // Answer the third and complete the course
        cy.getByData('challenge-answer-0').click()
        cy.getByData('next-lesson-button').should('exist').contains('Complete Course').click()
        cy.location('pathname').should('equal', '/')
    })
})