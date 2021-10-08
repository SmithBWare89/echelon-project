import { reactive, readonly } from "vue";

const state = reactive({
    workoutData: [],
    storedWorkoutData: [],
    trainersSorted: false,
    levelSorted: false,
    categorySorted: false
})

const methods = {
    setWorkoutData(data) {
        state.workoutData = data
    },
    async sortTrainer(trainer) {
        if (!state.trainersSorted) {
            state.storedWorkoutData = state.workoutData
            state.workoutData = await state.workoutData.filter(workout => workout.inst === trainer)
            state.trainersSorted = true
        } else {
            state.workoutData = state.storedWorkoutData
            state.workoutData = await state.workoutData.filter(workout => workout.inst === trainer)
        }
    },
    async sortLevel(level) {
        if (!state.levelSorted) {
            state.storedWorkoutData = state.workoutData
            state.workoutData = await state.workoutData.filter(workout => workout.level === level)
            state.levelSorted = true
        } else {
            state.workoutData = state.storedWorkoutData
            state.workoutData = await state.workoutData.filter(workout => workout.level === level)
        }
    },
    async sortCategory(category) {
        if (!state.categorySorted) {
            state.storedWorkoutData = state.workoutData
            state.workoutData = await state.workoutData.filter(workout => workout.cat === category)
            state.categorySorted = true
        } else {
            state.workoutData = state.storedWorkoutData
            state.workoutData = await state.workoutData.filter(workout => workout.cat === category)
        }
    },
    async resetState() {
        if (state.levelSorted || state.categorySorted || state.trainersSorted) {
            state.workoutData = state.storedWorkoutData
        }
    }
}

export default { state: readonly(state), methods}