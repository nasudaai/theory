const args = process.argv.slice(2);
const cKey = args[0];
//diatonic code

const key = "C";
const majorScale = ["c", "d", "e", "f", "g", "a", "b"];

for (let i = 0; i < majorScale.length; i++ ) {
  const degree = i+1;
  const note = majorScale[i];

  if (degree !== 1 && degree !== 4 && degree !== 5) {
    const majorInterVal = "M" + degree.toString();
    console.log(majorInterVal);
  }

  console.log(`"interval": ${degree} "note:" ${note}`);
}
