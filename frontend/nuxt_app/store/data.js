import axios from 'axios';

export const state = () => ({
    posts: [],
})

export const mutations = {
    setData: function(state, data) {
      state.posts = data;
      console.log(state.posts);
    },
}

export const actions = {
    getData: function( { commit } ){
      return axios.get
      ("https://jsonplaceholder.typicode.com/posts")
      .then(res => { commit("setData", res.data) });
    }
}

