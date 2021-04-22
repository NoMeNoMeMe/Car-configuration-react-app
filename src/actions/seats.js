export function changeSeats(newSeats) {
    return {
      type: 'CHANGE_SEATS',
      seats: newSeats
    }
  }