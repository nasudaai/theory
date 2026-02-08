//sample
/*
const cMajor7 = {
  root: "C",
  M3rd: "E",
  P5th: "G",
  M7th: "B"
};
*/

const cMajorScale = ["c", "d", "e", "f", "g", "a", "b"];
const Cmajor7Note = [1, 3, 5, 7];

const cMaj7 = { //cMaj7 -> cord
  1: "",
  3: "",
  5: "",
  7: ""
};

// create CM7 obj
for (let i = 0; i < Cmajor7Note.length; i++) {
  let key = "";
  key = Cmajor7Note[i];
  cMaj7[key] = cMajorScale[Cmajor7Note[i] - 1];
}

console.log(cMaj7);

