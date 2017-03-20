// @flow weak
import isValid from './isValid'

export default time => {
  const d = new Date(time)
  return isValid(d) ? d : new Date('Invalid')
}
