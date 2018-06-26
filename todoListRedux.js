export const types = {
    ADD: 'ADD',
    REMOVE: 'REMOVE',
    TOGGLE: 'TOGGLE',
    REMOVE_DONE: 'REMOVE_DONE',
};

export const actionCreators = {
    add: (item) => {
        return {type: types.ADD, payload: item}
    },
    remove: (index) => {
        return {type: types.REMOVE, payload: index}
    },
    toggle: (index) => {
        return {type: types.TOGGLE, payload: index}
    },
    removeDone: () => {
        return {type: types.REMOVE_DONE}
    },
};

const initialState = {
    todos: [
        {text: 'Touch item to change it`s status', done: false},
        {text: 'Touch X to delete item', done: false},
    ]
};

export const reducer = (state = initialState, action) => {
    const {todos} = state;
    const {type, payload} = action;

    switch(type) {
        case types.ADD: {
            return {
                ...state,
                todos: [payload, ...todos],
            }
        }
        case types.REMOVE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => i !== payload),
            }
        }
        case types.TOGGLE: {
            return {
                ...state,
                todos: todos.map((todo, i) => {
                    if (i !== payload) return todo;
                    todo.done = !todo.done;
                    return todo;
                }),
            }
        }
        case types.REMOVE_DONE: {
            return {
                ...state,
                todos: todos.filter((todo, i) => !todo.done),
            }
        }
    }
    return state;
};