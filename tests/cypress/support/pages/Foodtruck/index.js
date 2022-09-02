

class FoodTruckPage {

    addReview(review) {
        cy.get('textarea[name=comment]').type(review.comment)
        cy.get(`input[name=stars][value="${review.stars}"]`)
            .click({force: true})
        cy.contains('button', 'Enviar avaliação').click()
    }
    validReview(truckPage){
        cy.contains('h3', truckPage.titleReviews)
            .should('be.visible')
        cy.contains('.details', truckPage.user.name)
            .should('be.visible')
            .parent()
            .contains('.details', truckPage.user.instagram)
            .should('be.visible')

        cy.contains('.comment', truckPage.review.comment)
            .should('be.visible')

        cy.get('.stars')
            .find('svg')
            .should('have.length', truckPage.review.stars)
    }

}

export default new FoodTruckPage()