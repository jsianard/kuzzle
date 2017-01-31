function getReturn () {
  const
    args = Array.prototype.slice.call(arguments),
    action = args.shift(),
    cb = args.pop();

  this.api[action].apply(this.api, args)
    .then(response => {
      if (response.error) {
        this.result = response;
        return cb();
      }

      this.result = response;
      cb();
    })
    .catch(error => {
      this.result = error;
      cb();
    });
}

module.exports = getReturn;
