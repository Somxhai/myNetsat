
interface scoreType {
  [key: string]: number | object;
}
const getNetSatScore = ():scoreType => {
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

const getLanguagesScore = ():scoreType => {
  const france = document.getElementById("fr") as HTMLInputElement
  const germany = document.getElementById("gr") as HTMLInputElement
  const china = document.getElementById("cn") as HTMLInputElement
  const japan = document.getElementById("jp") as HTMLInputElement
  const korea = document.getElementById("kr") as HTMLInputElement
  let languageInt: scoreType = {
    fr: parseInt(france.value),
    gr: parseInt(germany.value),
    cn: parseInt(china.value),
    jp: parseInt(japan.value),
    kr: parseInt(korea.value)
  }
  for (const key of Object.keys(languageInt)) {
    if (languageInt[key] > 100) {
      languageInt[key] = 100;
    }
  }
  return languageInt;
}
const getFineArtScore = ():scoreType => {
  const drawing = document.getElementById("drawing") as HTMLInputElement
  const makeup = document.getElementById("makeup") as HTMLInputElement
  const drawcom = document.getElementById("drawcom") as HTMLInputElement
  const vart = document.getElementById("vart") as HTMLInputElement
  const music = document.getElementById("music") as HTMLInputElement
  const dance = document.getElementById("dance") as HTMLInputElement
  let fineArtInt: scoreType = {
    drawing: parseInt(drawing.value),
    makeup: parseInt(makeup.value),
    drawcom: parseInt(drawcom.value),
    vart: parseInt(vart.value),
    music: parseInt(music.value),
    dance: parseInt(dance.value),
  }
  for (const key of Object.keys(fineArtInt)) {
    if (fineArtInt[key] > 100) {
      fineArtInt[key] = 100;
    }
  }
  return fineArtInt
}
const getArchitectScore = ():scoreType => {
  const arch = document.getElementById('arch') as HTMLInputElement
  const design = document.getElementById('design') as HTMLInputElement
  let archInt: scoreType = {
      arch: parseInt(arch.value),
      design: parseInt(design.value)
  }
  for (const key of Object.keys(archInt)) {
    if (archInt[key] > 100) {
      archInt[key] = 100;
    }
  }
  return archInt
}
const getEducationScore = ():scoreType => {
  const body = document.getElementById('body') as HTMLInputElement
  const goodatart = document.getElementById('goodatart') as HTMLInputElement
  let eduInt: scoreType = {
    body: parseInt(body.value),
    goodatart: parseInt(goodatart.value)
  }
  for (const key of Object.keys(eduInt)) {
    if (eduInt[key] > 100) {
      eduInt[key] = 100;
    }
  }
  return eduInt

}
const getMedicalVisionScore = ():scoreType => {
  const techmed = document.getElementById('techmed') as HTMLInputElement
  const artmed = document.getElementById('artmed') as HTMLInputElement
  let medicalVisionInt:scoreType = {
    techmed:parseInt(techmed.value),
    artmed:parseInt(artmed.value),
  }
  for (const key of Object.keys(medicalVisionInt)) {
    if (medicalVisionInt[key] > 100) {
      medicalVisionInt[key] = 100;
    }
  }
  return medicalVisionInt
}

interface capabilityScoreType {
  [key:string]: scoreType | number
}

const getCapabilityScore = ():capabilityScoreType => {
  const engi = document.getElementById('engi') as HTMLInputElement
  let engiInt = parseInt(engi.value)
  if( engiInt > 100) engiInt = 100
  let capabilityInt: capabilityScoreType = {
    foreign: getLanguagesScore(),
    fine_arts: getFineArtScore(),
    engineer: engiInt,
    architect: getArchitectScore(),
    education: getEducationScore(),
    medical_vision: getMedicalVisionScore()
  }
  return capabilityInt
}



export { getNetSatScore, getCapabilityScore };
