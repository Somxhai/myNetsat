



const saveScoreToLocal = (scores:object) => {
    localStorage.setItem("scores", JSON.stringify(scores))
}
const getScoreFromLocal = () => {
    let scores = localStorage.getItem("scores")
    if (scores != null) {
        return JSON.parse(scores)
    }
    return {}
}
export {saveScoreToLocal, getScoreFromLocal}