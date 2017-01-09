var open = require("open");

module.exports = {
  name: 'dora-plugin-open',
  'server.after': function() {
    const { query } = this;
    let url = query.url || `http://localhost:${this.port}`;
    open(url);
  }
};