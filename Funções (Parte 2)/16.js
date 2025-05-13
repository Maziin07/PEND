

const obj = {
  name: "Matheus",
  sayThisArrow: () => {
    console.log(this); // não é o obj
  },
  sayThisTraditional: function() {
    console.log(this); // é o obj
  }
};