
const state = {
    todos : [
        {
            id:1,
            title:"deneme1"
        },
        {
            id:2,
            title:"deneme2"
        }
    ]
}

const getters = {
    allTodos : (state) => state.todos
    
}

const actions = {}

const mutations = {}

export default {
    state,
    getters,
    actions,
    mutations
}