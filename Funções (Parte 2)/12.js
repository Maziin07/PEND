fakeRequest('url1', (err, res1) => {
  console.log(res1);
  fakeRequest('url2', (err, res2) => {
    console.log(res2);
    fakeRequest('url3', (err, res3) => {
      console.log(res3);
    });
  });
});