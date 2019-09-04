import HTTP from '../http';

export default {
    namespaced: true,
    state: {
        registerEmail: null,
        registerPassword: null,

    },
    actions: {
        register({ state }) {
            return HTTP().post('/auth/register', {
                email: state.registerEmail,
                password: state.registerEmail,
            });
        },
    },
    mutations: {
        setRegisterEmail(state, email) {
            state.registerEmail = email;
        },
        setRegisterPassword(state, password) {
            state.registerPassword = password;
        },
    },
};
