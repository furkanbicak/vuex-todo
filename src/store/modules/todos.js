import axios from "axios"

const state = {
    todos : []
}

const getters = {
    allTodos : (state) => state.todos
    
}

const mutations = {
    setTodos : (state, todos) => state.todos = todos,

    newTodo : (state, todo) => state.todos.unshift(todo),

    removeTodo : (state, id) => {
        state.todos = state.todos.filter(res => {
            return res.id != id
        })
    }
}

const actions = {

    fetchTodos({ commit }) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(res => {
            commit("setTodos", res.data)
            console.log("Response",res.data)
        })
    },

    addTodo({ commit }, title) {
        axios.post('https://jsonplaceholder.typicode.com/todos',{title, completed: false})
            .then(res => {
                commit("newTodo",res.data)
            })   
    },

    deleteTodo({ commit }, id) {
        console.log("Sil ulan", id)
        commit('removeTodo', id)
    }
}


export default {
    state,
    getters,
    actions,
    mutations
}