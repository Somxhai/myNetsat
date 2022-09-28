import { ValType } from "../components/Types/ValType";

export const blurScreen = () => {
    let box = document.getElementById('calculatePage');
    if (box != null) {
        if(box.classList.contains('blurScreen')) {
            box.classList.remove('blurScreen')
        } else {
            box.classList.add('blurScreen')
        }
    }
}

export const isInputRequired = (id:string, selectedData:ValType[]) => {
    for (const select of selectedData) {
        // search in netsat
        for (const netsatKey of Object.keys(select.weight)) {
            if (id == netsatKey && select.weight[netsatKey as keyof typeof select.weight] != 0) {
                return true
            }
        }
        // search in capability
        for (const capKey of Object.keys(select.specific_capability)) {
            const capKeyVal = select.specific_capability[capKey as keyof typeof select.specific_capability]
            if (typeof capKeyVal == "object") {
                for (const capability of Object.keys(capKeyVal)) {
                    if (id == capability && capKeyVal[capability as keyof typeof capKeyVal] != 0) return true
                }
            } else if (typeof capKeyVal == "number") {
                if (id == capKey && select.specific_capability[capKey as keyof typeof select.specific_capability] !=0) return true
            }
        }
    }
    return false
}



