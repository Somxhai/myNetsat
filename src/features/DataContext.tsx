import { createContext, useReducer, useState } from "react";

interface DataType {
    selected: string[]
    setSelected: (val:string[])=> void
}

export const DataContext = createContext<DataType>({
    selected: [],
    setSelected: () => [],
})


const DataProvider = ({children}:any) => {
    const [selected, setSelected] = useState<string[]>([])
    return(<DataContext.Provider value={{selected, setSelected}}>
        {children}
    </DataContext.Provider>)
}
export default DataProvider