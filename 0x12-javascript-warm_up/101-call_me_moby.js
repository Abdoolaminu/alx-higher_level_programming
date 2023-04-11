
rts = {
  /**
   * callMeMoby - Invokes a function t times.
   * @param {Number} x - The number of times to invoke the function.
   * @param {Number} theFunction - The function to be invoked.
   */
  callMeMoby: function (x, theFunction) {
    for (let i = 0; i < x; i++) {
      theFunction();
    }
  }
};
