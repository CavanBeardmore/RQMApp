const NEXT = 'NEXT';

const nextQuote = () => {
   return {
    type: 'NEXT'
   }
};

const initState = {
    input: 0
};

const quoteReducer = (state = initState, action) => {
    switch(action.type) {
        case NEXT:
            return state.input += 1
        break;
        default:
            return state
    }
}

export default quoteReducer;