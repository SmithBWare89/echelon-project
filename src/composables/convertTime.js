const convertTime = (timestamp) => {
    const date = timestamp.split('T')[0]
    const dateArray = date.split('-')
    const convertedDate = `${dateArray[1]}-${dateArray[2]}-${dateArray[0]}`
    return convertedDate
}

const convertWorkoutLength = (workoutTime) => {
    const minutes = parseInt(workoutTime.split(':')[1], 10)
    const hours = parseInt(workoutTime.split(':')[0], 10)

    if (hours === 0 && minutes > 0) {
        return `${minutes} min`
    } else if (hours === 1 && minutes === 0) {
        return `${hours} hr`
    } else if (hours === 1 && minutes > 0) {
        return `${hours} hr ${minutes} mins`
    } else if (hours === 1 && minutes === 1) {
        return `${hours} hr ${minutes} min`
    } else if (hours > 1 && minutes === 0) {
        return `${hours} hrs`
    } else if (hours > 1 && minutes === 1) {
        return `${hours} hrs ${minutes} mins`
    } else if (hours > 1 && minutes > 1) {
        return `${hours} hrs ${minutes} mins`
    } else {
        return null
    }
}


export { convertTime, convertWorkoutLength}