
interface objectType {
    [key:string]: number
}

const CalNetsatScore = (weight:objectType, score:objectType):number => {
    let sum:number = 0
    for (const key of Object.keys(weight)) {
        if (score[key] == null && weight[key] != 0) {
            sum = -1
            break;
        }
        const percentage = weight[key]/100
        sum += percentage*score[key]
    }
    return sum
}

export {CalNetsatScore}