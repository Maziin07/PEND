function fakeRequest(url, callback) {
  setTimeout(() => {
    callback(null, "OK");
  }, 1000);
}