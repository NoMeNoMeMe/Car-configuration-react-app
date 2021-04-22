export function addAdditional(newAdditional) {
    return {
      type: 'ADD_ADDITIONAL',
      payload: {
        new: newAdditional
      }
    }
}
