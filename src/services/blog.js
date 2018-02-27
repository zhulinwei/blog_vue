import Common from './common'

export default {
  Acticle: {
    asd() {
      return {
        content: '123'
      }
    },
    query(id) {
      const url = `https://www.51linwei.top/blog.html/detail?acticleId=${id}`;
      return Common.client.get(url);
    },
  },
  Menu: {

  }
  
}