const blurScreen = () => {
    let box = document.getElementById('calculatePage');
    if (box != null) {
        if(box.classList.contains('pointer-events-none')) {
            box.classList.remove('blur-sm', 'pointer-events-none' , 'overflow-y-hidden')
        } else {
            box.classList.add('blur-sm', 'pointer-events-none', 'overflow-y-hidden')
        }
    }
}


const containerHandler = (id:string) => {
    blurScreen()
    toggleContainer(id)
}

const toggleContainer = (id:string) => {
    let container = document.getElementById(id);
    if (container != null) {
        if (container.classList.contains('hidden')) {
            container.classList.remove('hidden')
        } else {
            container.classList.add('hidden')
        }
    }
}

const toggleLanguageContainer = () => {
    const container = document.getElementById('languageContainer')
    if (container != null) {
        container.classList.contains('hidden') ? container.classList.remove('hidden') : container.classList.add('hidden')
    }
}
const saveScoreToLocal = (scores:object) => {
    sessionStorage.setItem("scores", JSON.stringify(scores))
}
const getScoreFromLocal = () => {
    let scores = sessionStorage.getItem("scores")
    if (scores != null) {
        return JSON.parse(scores)
    }
    return {}
}
export {blurScreen, saveScoreToLocal, getScoreFromLocal, toggleLanguageContainer, toggleContainer as toggleSearchContainer, containerHandler}