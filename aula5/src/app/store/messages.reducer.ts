const initialState = {
    loading: false,
    messages: [],
};

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MESSAGE':
            state = {
                ...state,   //faz uma cópia do estado anterior
                messages: [...state.messages, action.payload],  //faz uma cópia das mensagens e adiciona uma nova
                /*
                Para adicionar uma nova basta colocar isso nos componentes:
                    this.store.dispatch({
                        type: 'ADD_MESSAGE',
                        payload: {
                            id: Math.random(),
                            text: this.message,
                            created: new Date()
                        }
                    });
                */
            }
            return state;
        case 'DELETE_MESSAGE':
            state = {
                ...state,
                messages: state.messages.filter(m => m.id !== action.payload)
            }
            return state;
        default:
            return state;
    }
}