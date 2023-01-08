import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    dark: false,
    value: [
        false, false, false,
        false, false, false,
        false, false, false,
    ],
    playCounter: 0,
    playX: [0, 2, 4, 6, 8],
    playO: [1, 3, 5, 7, 9],
  },
  mutations: {
    SET_DARK: (state, bool) => {
      state.dark = bool;
    },
    setValue: (state, payload) => {
        state.value = payload;
      },
    setPlayCounter: (state, payload) => {
        state.playCounter = payload;
      },
      setPlayX: (state, payload) => {
        state.playX = payload;
      },
      setPlayO: (state, payload) => {
        state.playO = payload;
      },
  },
  actions: {
    checkWin
  },
  getters: {
    value: (state) => state.value,
    playCounter: (state) => state.playCounter,
    playX: (state) => state.playX,
    playO: (state) => state.playO,
  } 
})

export default store



