import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
import { name, version, dependencies } from "../../package.json";
import { constants } from "../constants.js";

export default new Vuex.Store({
    state: {
        /* hold cards of all types can cache pages */
        cards: {
            all: {
                cards: [],
                pages: {},
                link: `${constants.STARTING_LINK}?page=${constants.STARTING_PAGE}&pageSize=${constants.PAGE_SIZE}`,
                page: 1,
            },
        },
        page: constants.STARTING_PAGE,
        pageSize: constants.PAGE_SIZE,
        link: `${constants.STARTING_LINK}?page=${constants.STARTING_PAGE}&pageSize=${constants.PAGE_SIZE}`,
        rarities: constants.RARITIES,
        totalCount: 0,
        appInfo: {
            version,
            name,
            dependencies,
        }
    },
    getters: {
        cards: (state) => {
            return state.cards;
        },
        all: (state) => {
            return state.cards.all;
        },
        page: (state) => {
            return state.page;
        },
        pageSize: (state) => {
            return state.pageSize;
        },
        appInfo: (state) => {
            return state.appInfo;
        }
    },
    mutations: {
        setCards: (state, { cards, link, page }) => {
            // replace objects rather than overwrite to insure reactivity
            let copy = { ...state.cards };
            let temp = [...copy.all.cards, ...cards];
            copy.all.cards = temp;
            copy.all.page = page;
            copy.all.link = link;

            if (!(page in copy.all.pages)) {
                copy.all.pages[page] = [...cards];
            } else {
                copy.all.pages[page] = [...copy.all.pages[page], ...cards];
            }

            copy.all.pages[page] = [...copy.all.pages[page], ...cards];
            state.cards = { ...copy };
        },
        setLink: (state, link) => (state.link = link),
        setTotalCount: (state, totalPages) => (state.totalPages = totalPages),
        setPage: (state, page) => (state.page = page),
    },
    actions: {
        // retreive cards data from api
        async getCards({ state, commit }) {
            // check to see if we already have the pages cached
            if (!(state.page in state.cards.all.pages)) {

                // try to get cards from api
                try {
                    const { link } = state.cards.all;
                    let tempLink = link;

                    // wait for the api to respond
                    let response = await fetch(tempLink);
                    if (response.ok) {
                        // parse api data as json
                        let json = await response.json();

                        // update relevant card info
                        commit('setTotalCount', json._totalCount);
                        commit('setLink', json._links.next);
                        commit('setPage', state.page + 1);

                        let tempLink = json._links.next;
                        
                        commit('setCards', { cards: json.cards, link: tempLink, page: state.page });


                    } else {
                        console.log("HTTP-Error: " + response.status);
                    }
                } catch (error) {
                    //commit('setError', error);
                    console.log(error)
                }
            }
        },
    },
    modules: {},
});
