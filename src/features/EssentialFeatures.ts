import { useEffect } from "react";

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



export {blurScreen}