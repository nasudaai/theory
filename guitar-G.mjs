const STRINGSNote = ["e", "b", "g", "d", "a", "e"];

//flet on G key
//const fletNumber = [];


const GmajorScale = ["g", "a", "b", "c", "d", "e", "f#"];

const GPentatonic = [1, 2, 3, 5, 6].map( degree => {
  const note = GmajorScale[degree - 1];
  return note;
});

console.log(GPentatonic);
