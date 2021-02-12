/* eslint-disable no-param-reassign */
import Vue from 'vue';
import Vuex from 'vuex';
import Colour from './components/HomeCanvas/Colour';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Home Canvas Grid
    grid: Array(16).fill().map((_, y) => Array(16).fill().map((_2, x) => ({
      x,
      y,
      rotation: 0,
      ink: 0,
      colour: new Colour(40, 90, 242),
    }))),
    colourToUse: new Colour(40, 90, 242),
    targetColour: new Colour(255, 0, 0),

    // Books
    bookMap: {},
  },
  mutations: {
    // Home Canvas Grid
    resetGrid(state) {
      state.grid = Array(16).fill().map((_, y) => Array(16).fill().map((_2, x) => ({
        x,
        y,
        rotation: 0,
        ink: 0,
        colour: new Colour(80, 20, 42),
      })));
    },
    updateRotation(state, data) {
      const { x, y, rotation } = data;
      state.grid[y][x].rotation = rotation;
    },
    updateInk(state, data) {
      const { x, y, ink } = data;
      state.grid[y][x].ink = ink;
    },
    updateColour(state, data) {
      const { x, y } = data;
      if (state.colourToUse.equals(state.targetColour)) {
        state.targetColour = new Colour(
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
          Math.floor(Math.random() * 255),
        );
      }
      state.colourToUse.stepTowardsColour(state.targetColour);
      state.colourToUse = new Colour(state.colourToUse.r, state.colourToUse.g, state.colourToUse.b);
      state.grid[y][x].colour.copy(state.colourToUse);
    },
    stepTowardsColour(state, data) {
      const { x, y, targetColour } = data;
      state.grid[y][x].colour.stepTowardsColour(targetColour);
    },

    // Books
    addToBookMap(state, data) {
      const { bookName, title, imageLink } = data;
      state.bookMap[bookName] = { title, imageLink };
    },
  },
  getters: {
    grid: state => state.grid,
    bookMap: state => state.bookMap,
  },
});
