import{APIKey,APIToken} from "../support/constants.cy"

class dataUtils{

    createBoard=(boardName)=>{
        return cy.request("POST",`https://api.trello.com/1/boards/?name=${boardName}&key=${APIKey}&token=${APIToken}`)
    }
    getListsOnBoard = (boardId) => {
            return cy.request(
                "GET",
                `https://api.trello.com/1/boards/${boardId}/lists?key=${APIKey}&token=${APIToken}`
            );
        };
    createCard=(cardName,listId)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?name=${cardName}&idList=${listId}&key=${APIKey}&token=${APIToken}`)
    }
    
    deleteBoard=(id)=>{
        return cy.request("DELETE",`https://api.trello.com/1/boards/${id}?key=${APIKey}&token=${APIToken}`)
    }
    deleteCard=(cardId)=>{
        return cy.request({
            method: "DELETE",
            url: `https://api.trello.com/1/cards/${cardId}`,
            qs: {
                key: APIKey,
                token: APIToken
            }
        });
    }


  createCardTemplate = (cardName, listId) => {

    return cy.request({
        method: "POST",
        url: "https://api.trello.com/1/cards",
        qs: {
            name: cardName,
            idList: listId,
            key: APIKey,
            token: APIToken
        }
    }).then((response) => {

        const cardId = response.body.id;

        return cy.request({
            method: "PUT",
            url: `https://api.trello.com/1/cards/${cardId}`,
            qs: {
                key: APIKey,
                token: APIToken,
                isTemplate: true
            }
        }).then((templateResponse) => {

            return templateResponse;

        });

    });

}


    getCard = (cardId) => {
        return cy.request({
            method: "GET",
            url: `https://api.trello.com/1/cards/${cardId}`,
            qs: {
                key: APIKey,
                token: APIToken
            }
        });
    }


    updateCardName = (cardId, newName) => {
        return cy.request({
            method: "PUT",
            url: `https://api.trello.com/1/cards/${cardId}`,
            qs: {
                key: APIKey,
                token: APIToken,
                name: newName
            }
        });
    }


}
export default dataUtils