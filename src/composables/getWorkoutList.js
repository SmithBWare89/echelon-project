import { ref } from 'vue'

    const error = ref(null)
    const isLoading = ref(false)
    const workoutData = ref()

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))

    const getWorkoutList = async () => {
        try {
            isLoading.value = true
            const response = await fetch('https://gist.githubusercontent.com/jasonbyrne/881459829d342a2ddd495165fb815c2d/raw/e0fb08e2fa2a8288a124b1a187b86ecba35d2cb9/echelon-videos-example.json')
            const responseJSON = await response.json()
            workoutData.value = responseJSON.items
            sleep(1000)
            isLoading.value = false
            return workoutData.value
        } catch (err) {
            error.value = err.message
        }
    }

const useGetWorkoutList = () => {
    return { error, isLoading, workoutData, getWorkoutList }
}

export default useGetWorkoutList

