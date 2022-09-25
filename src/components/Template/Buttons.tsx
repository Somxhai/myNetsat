import { containerHandler } from "../../features/EssentialFeatures"


const CloseIcon = () => {
    return (<div
        className="text-xs bg-white border-b-2 border-gray-300 p-1 rounded-lg z-20 hover:border-red-400"
        id="escapeKey"
      >
        ESC
      </div>)
}

interface OpenFormType {
  title:string
  placeholder:string
  containerID: string
}
const OpenFormButton = ({title, placeholder, containerID}:OpenFormType) => {
  return (<button
  className="outline-none"
  title={placeholder}
  onClick={e => {
    containerHandler(containerID)
    e.preventDefault()
  }}>
    <div className="mt-3">
    <p className="text-text_primary">{title}</p>
    <div className="m-auto rounded-lg text-sm w-48 border-b-2 line-clamp-1 px-3 pt-2  select-none text-text_secondary hover:border-purple-500 max-w-xs">
      {placeholder}
    </div>
  </div>
  </button>)
}

export {CloseIcon, OpenFormButton}