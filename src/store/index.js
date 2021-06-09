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
        },
        search: {
            cards: [],
            pages: {},
            link: `${constants.STARTING_LINK}?page=${constants.STARTING_PAGE}&pageSize=${constants.PAGE_SIZE}&name=`,
            term: "",
            page: 1,
            loading: false
        },
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
        },
        search: (state) => {
            return state.search
        },
        searchLoading: (state) => {
            return state.search.loading
        }
    },
    mutations: {
        // set the cards state after copying and applying changes
        setCards: (state, {cards, rarity, link}) => {
        
            // copy the current state
            const copy = {...state.cards};
            
            // destructure from copy 
            const {page, pages} = copy[rarity];        
            
            // update the list of cards with the new cards
            copy[rarity].cards = [...copy[rarity].cards, ...cards];
            
            // add the page of cards to the page cache if it's not there already
            if(!(page in pages)) copy[rarity].pages[page] = [...cards] ;
            
            // update link and page
            copy[rarity].link = link; 
            copy[rarity].page += 1;
    
            // overwrite state cards
            state.cards = copy;
        },
        setLink: (state, link) => (state.link = link),
        setTotalCount: (state, totalPages) => (state.totalPages = totalPages),
        setPage: (state, page) => (state.page = page),
        setSearchTerm: (state, term) => {
            let copy = { ...state.search };
            copy.term = term;
            state.search = { ...copy };
        },
        setSearch: (state, search) => {
            let copy = { ...state.search };
            copy.cards = [...search];
            state.search = { ...copy };
        },
        setSearchResults: (state, results) => {
            let copy = { ...state.search };
            copy.cards = [...results];
            state.search = { ...copy };
        },
        setSearchLoading: (state, loading) => {
            let copy = { ...state.search };
            copy.loading = loading;
            state.search = { ...copy };
        },
    },
    actions: {
        // retreive cards data from api
        async getCards({ state, commit }, { rarity, pageNumber }) {
            console.log(rarity, pageNumber);
            // check to see if we already have the pages cached
            if (!(pageNumber in state.cards[rarity].pages)) {

                // try to get cards from api
                try {
                    const { link } = state.cards[rarity];
                    let tempLink = link;

                    // wait for the api to respond
                    let response = await fetch(tempLink);
                    if (response.ok) {
                        // parse api data as json
                        let json = await response.json();

                        // update relevant card info
                        commit('setTotalCount', json._totalCount);
                        commit('setLink', json._links.next);

                        let tempLink = json._links.next;
                        if (rarity != "all") {
                            tempLink += `&rarity=${rarity}`;
                        }
                        // set the cards in state
                        commit('setCards', { cards: json.cards, rarity, link: tempLink });

                        // increment the page
                        commit('setPage', state.page + 1);

                    } else {
                        console.log("HTTP-Error: " + response.status);
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        },

        async customSearch({ state, commit }) {
            if (state.search.term) {
                commit("setSearchLoading", true);
                let searchLink = `${state.search.link}${state.search.term}`;
                try {
                    // wait for the api to respond
                    let response = await fetch(searchLink);
                    if (response.ok) {
                        // parse api data as json
                        let json = await response.json();

                        // update relevant card info
                        commit("setSearch", json.cards);
                        commit("setSearchLoading", false);
                    } else {
                        console.log("HTTP-Error: " + response.status);
                    }
                } catch (error) {
                    console.log(error);
                }
            }
        },

        updateSearchTerm({ commit }, searchTerm) {
            commit("setSearchTerm", searchTerm);
        },
        // focus on a focusable element, such as the searchbar
        focus({state}, element){
            if(state && element instanceof HTMLElement && element.focus)
            {
                element.focus();
            }
        },
    },
    modules: {},
});
