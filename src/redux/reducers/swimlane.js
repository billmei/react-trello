import { CARD_ADD, CARD_DELETE } from '../actions'

const initialState = {
  cardList: [
    {id: 1, title: "Reticulate splines", desc: "Set up splines and reticulate them", lane: "Todo"}
  ],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case CARD_ADD: {
      return {
        ...state,
        cardList: [...state.cardList, action.cardInfo]
      }
    }
    case CARD_DELETE: {
      const changedCardList = state.cardList.filter(item => item.id !== action.cardId)
      return {
        ...state,
        cardList: changedCardList
      }
    }
    default:
      return state;
  }
}
