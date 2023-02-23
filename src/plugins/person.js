export default {
  install(app, options) {
    const person = {
      name: '진 형욱',
      say() {
        alert(this.name);
      },
    };
  },
};
