import PropTypes from 'prop-types'

/**Placeholder for answer input that will provide underscore */

export const placeholder = (value, answer) =>
  [...value].reduce((placeholder, char) => {
    return placeholder.replace('_', char)
  }, answer.replace(/[^\s]/g, '_'))

placeholder.propTypes = {
  answer: PropTypes.string,
  value: PropTypes.string
}
