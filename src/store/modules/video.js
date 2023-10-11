import VideoService from "@/services/videoService.js";

export const namespaced = true;

export const state = {
  vidoes: [],
  video: {},
};

export const mutations = {
  SET_VIDEOS(state, list) {
    state.vidoes = list;
  },
  SET_VIDEO(state, video) {
    state.video = video;
  },
};
export const actions = {
  fetchVidoes({ commit }) {
    return VideoService.getCategories()
      .then((response) => {
        commit("SET_VIDEOS", response.data);
      })
      .catch((error) => {
        commit("SET_ERROR", { isError: true, errMsg: error });
      });
  },
  fetchVideo({ commit }, payload) {
    return VideoService.getVideo(payload.catId).then((response) => {
      const allVideos = response.data;
      console.log(allVideos, payload.catId);
      const video = allVideos.thumbnails.find(
        (video) => video.id === payload.id
      );
      console.log(video, "video");
      commit("SET_VIDEO", video);
      return video;
    });
  },
};

export const getters = {
  getVideosByCategory(state) {
    return state.vidoes;
  },
  getVideoByid: () => (catId, id) => {
    console.log(state, "this state");
    console.log(id, "this id");
    console.log(catId, "this cat id");
  },
  getVideo(state) {
    return state.video;
  },
};
