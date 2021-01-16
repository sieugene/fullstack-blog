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
  async fetchAdmin({}) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts);
      }, 1000);
    });
  },
  async fetchAdminById({}, id) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve(posts.find(p => p._id === id));
      }, 1000);
    });
  },
  async update({}, { id, text }) {},
  async remove({}, id) {},
  async create({}, { title, text }) {
    return await new Promise(resolve => {
      setTimeout(() => {
        resolve();
      }, 1000);
    });
  }
};
