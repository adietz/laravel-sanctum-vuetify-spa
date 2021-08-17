import user from '@/api/user';

export default {
    namespaced: true,
    state: {
        authenticated: false,
        username: '',
        name: '',
        userType: '',
    },

    getters: {
        isAuthenticated (state) {
            return state.authenticated;
        }
    },

    actions: {
        authenticate ({
                          commit,
                          dispatch
                      }, formData) {
            user.authenticateUser(formData).then(({data}) => {
                commit('AUTHENTICATE', data);
                dispatch('fetchUser');
            });
        },
        create ({dispatch}, formData) {
            user.registerUser(formData).then(({data}) => {
                dispatch('authenticate');
            });
        },
        deauthenticate ({commit}) {
            user.deauthenticateUser();
            commit('DEAUTHENTICATE');
        },
        fetchUser ({commit}) {
            user.fetchUser().then(({data}) => {
                commit('FETCH', data);
            });
        }
    },

    mutations: {
        AUTHENTICATE (state, data) {
            state.authenticated = true;
        },
        DEAUTHENTICATE (state) {
            state.username = '';
            state.authenticated = false;
        },
        FETCH (state, data) {
            state.username = data.email;
            state.name = data.name;
            state.userType = data.userType;
        }
    }

};
