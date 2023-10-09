import VideoService from "@/services/videoService.js";

export const namespaced = true;

export const state = {
  vidoes: [],
};

export const mutations = {
  SET_VIDEOS(state, list) {
    state.vidoes = list;
  },
};
export const actions = {
  fetchVidoes({ commit }) {
    VideoService.getCategories()
      .then((response) => {
        commit("SET_VIDEOS", response.data);
      })
      .catch((error) => {
        commit("SET_ERROR", { isError: true, errMsg: error });
      });
  },
};

export const getters = {
  getVideosByCategory(state) {
    return state.vidoes;
  },
};
