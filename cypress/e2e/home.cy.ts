describe('home page', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  context('Hero section', () => {
    it('the h1 contains the correct text', () => {
      cy.getByData('hero-heading')
      .should('exist')
      .contains("Testing Next.js Applications with Cypress")
      // Sometimes the Time Travel takes the snapshot too fast and so you can't
      // see the page as it is just blank. You can add a wait after an action
      // to give it time to load.
      // .then(() => {
      //     cy.wait(100); // Small delay to ensure rendering
      //   });
    })

    it('the features on the homepage are correct', () => {
      cy.get('dt').eq(0).contains('4 Courses')
      cy.get('dt').eq(1).contains('25+ Lessons')
      cy.get('dt').eq(2).contains('Free and Open Source')
    })
  })

  context('Courses section', () => {
    it('navigate to Course: Testing Your First Next.js Application', () => {
      cy.getByData('course-0').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-your-first-application')
      cy.getByData('course-heading').should('contain', 'Testing Your First Next.js Application')
    })

    it('navigate to Course: Testing Foundations', () => {
      cy.getByData('course-1').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/testing-foundations')
      cy.getByData('course-heading').should('contain', 'Testing Foundations')
    })

    it('navigate to Course: Cypress Fundamentals', () => {
      cy.getByData('course-2').find('a').contains('Get started').click()
      cy.location('pathname').should('equal', '/cypress-fundamentals')
      cy.getByData('course-heading').should('contain', 'Cypress Fundamentals')
    })
  })
})