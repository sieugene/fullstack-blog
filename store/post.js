const posts = [
  {
    title: "Post1",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: "id1"
  },
  {
    title: "Post2",
    date: new Date(),
    views: 22,
    comments: [1, 2],
    _id: "id2"
  }
];

export const actions = {
  async fetchAdmin({ commit }) {
    try {
      return await this.$axios.$get("/api/post/admin");
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  async fetchAdminById({ commit }, id) {
    try {
      return await this.$axios.$get(`/api/post/admin/${id}`);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  async update({ commit }, { id, text }) {
    try {
      return await this.$axios.$put(`/api/post/admin/${id}`, { text });
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  async remove({ commit }, id) {
    try {
      return await this.$axios.$delete(`/api/post/admin/${id}`);
    } catch (e) {
      commit("setError", e, { root: true });
      throw e;
    }
  },
  async create({ commit }, { title, text, image }) {
    try {
      const fd = new FormData();
      fd.append("title", title);
      fd.append("text", text);
      fd.append("image", image, image.name);
      return await this.$axios.post("/api/post/admin", fd);
      // return await new Promise(resolve => {
      //   setTimeout(() => {
      //     resolve();
      //   }, 1000);
      // });
    } catch (e) {
      dispatch("commit", e, { root: true });
      throw e;
    }
  }
};
