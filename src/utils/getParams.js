import getAttrNameFromSelector from "./gerAttrNameFromSelector"

const getParams = (element, dataAttrSelector) => {
  return JSON.parse(
    element.getAttribute(getAttrNameFromSelector(dataAttrSelector))
  )
}

export default getParams
