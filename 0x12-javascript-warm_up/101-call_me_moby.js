
rts = {
  /**
   * callMeMoby - Invokes a function t times.
   * @param {Number} t - The number of times to invoke the function.
   * @param {Number} theFunction - The function to be invoked.
   */
  callMeMoby: function (t, theFunction) {
    for (let i = 0; i < t; i++) {
      theFunction();
    }
  }
};
