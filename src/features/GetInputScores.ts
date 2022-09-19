interface scoreType {
  [key: string]: number;
}
const getNetSatScore = () => {
  const thai = document.getElementById("thai") as HTMLInputElement;
  const eng = document.getElementById("eng") as HTMLInputElement;
  const math = document.getElementById("math") as HTMLInputElement;
  const sci = document.getElementById("sci") as HTMLInputElement;
  const chem = document.getElementById("chem") as HTMLInputElement;
  const bio = document.getElementById("bio") as HTMLInputElement;
  const phys = document.getElementById("phy") as HTMLInputElement;
  let scoresInt: scoreType = {
    thai: parseInt(thai.value),
    eng: parseInt(eng.value),
    math: parseInt(math.value),
    sci: parseInt(sci.value),
    chem: parseInt(chem.value),
    bio: parseInt(bio.value),
    phy: parseInt(phys.value),
  };
  for (const key of Object.keys(scoresInt)) {
    if (scoresInt[key] > 100) {
      scoresInt[key] = 100;
    }
  }
  return scoresInt;
};
export { getNetSatScore as getAllScore };
