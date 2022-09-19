import { useContext } from "react"
import { DataContext } from "./DataContext"




const addOrUpdateSelected = ([selected, setSelected] ,faculty:string, syllabus:string) => {
    const {selected} = useContext(DataContext)
    if (selected.hasOwnProperty(faculty)) {
        selected[faculty] = [...selected[faculty], syllabus]
      } else {
        selected[faculty] = [syllabus]
      }
      return selected
}


const updateSelect = (add:boolean, faculty:string, syllabus:string) => {
    const {selected, setSelected} = useContext(DataContext)
    if (add)
        setSelected(addOrUpdateSelected(faculty, syllabus))
    else if (selected[faculty] != undefined && !add)
        setSelected(selected[faculty].filter((v:string)=> v!=syllabus))
}

export {updateSelect}

