export default {
  setup() {
    const title = 'barabashka оставил home';
    
    return {
      title
    }
  },
  template: /*html*/`
  <h1>{{title}}</h1>
  <router-link to="/freelance">freelance</router-link>
  <router-link to="/resume">resume</router-link>
  `
  
}