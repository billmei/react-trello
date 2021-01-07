export const CARD_ADD = 'swimlane/CARD::ADD'
export const CARD_DELETE = 'swimlane/CARD::DELETE'

let nextId = 1;

export const addCard = ({title, desc, lane}) => ({
    type: CARD_ADD,
    cardInfo: {
      id: ++nextId,
      title,
      desc,
      lane
    }
  });


export const deleteCard = (cardId) => ({
    type: CARD_DELETE,
    cardId
  });

