/**All letters to uppercase */

export const normalise = value => value.toUpperCase().replace(/[^A-Z]/g, '')
