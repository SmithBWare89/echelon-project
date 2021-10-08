<template>
  <div class="dropdown-container">
    <el-dropdown 
      split-button 
      v-if="workout.state.levelSorted || workout.state.productSorted"
      disabled
      class="dropdown"
    >
      Sort By Trainer
    </el-dropdown>
    <el-dropdown split-button v-else class="dropdown">
      Sort By Trainer
      <template #dropdown>
        <el-dropdown-menu v-for="trainer in trainerOptions" :key="trainer">
          <el-dropdown-item @click="handleTrainerSort(trainer)">{{ trainer }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown 
      v-if="workout.state.trainersSorted || workout.state.productSorted" 
      split-button 
      disabled
      class="dropdown"
    >
      Sort By Level
    </el-dropdown>
    <el-dropdown 
      v-else
      split-button 
      class="dropdown"
    >
      Sort By Level
      <template #dropdown>
        <el-dropdown-menu v-for="level in levelOptions" :key="level">
          <el-dropdown-item @click="handleLevelSort(level)">{{ level }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-dropdown 
      v-if="workout.state.trainersSorted || workout.state.levelSorted" 
      split-button 
      diasbled
      class="dropdown"
    >
      Sort By Category
    </el-dropdown>
    <el-dropdown split-button v-else 
    class="dropdown">
      Sort By Category
      <template #dropdown>
        <el-dropdown-menu v-for="category in categoryOptions" :key="category">
          <el-dropdown-item @click="handleCategorySort(category)">{{ category }}</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>

    <el-button class="reset-button" @click="handleResetState">Reset</el-button>
  </div>
  <el-scrollbar height="100%">
    <el-space
      :wrap="false"
      v-for="workout in workout.state.workoutData"
      :key="workout.id"
    >
      <el-card
        :body-style="{ padding:'0px' }"
        shadow="never"
      >
        <div>
          <div class="workout-title-container">
            <span class="workout-title-item">{{workout.name}}</span>
            <!-- Workout Level Tags -->
            <el-tag 
              v-if="workout.level === 'Advanced'"
              size="small"
              class="advanced"
            >
              {{ workout.level }}
            </el-tag>
            <el-tag 
              v-else-if="workout.level === 'Beginner'"
              size="small"
              class="beginner"
            >
              {{ workout.level }}
            </el-tag>
            <el-tag 
              v-else-if="workout.level === 'Intermediate'"
              size="small"
              class="intermediate"
            >
              {{ workout.level }}
            </el-tag>
            <el-tag 
              v-else
              size="small"
              class="not-rated"
            >
              Not Rated
            </el-tag>
          </div>
          <!-- Workout Subtitle -->
          <div class="workout-subtitle-container">
            <span class="workout-subtitle-item">
              Instructor: {{workout.inst}}
            </span>
            <el-divider direction="vertical" />
            <span class="workout-subtitle-item">
              Equipment: {{workout.product}}
            </span>
            <el-divider direction="vertical" />
            <span class="workout-subtitle-item">
              Time: {{ convertWorkoutLength (workout.len )}}
            </span>
            <el-divider direction="vertical" />
            <span class="workout-subtitle-item">
              Updated: {{ convertTime(workout.updatedAt) }}
            </span>
          </div>
        </div>
        <!-- Workout Image -->
        <el-image :src="workout.image" class="workout-image"/>
      </el-card>
    </el-space>
  </el-scrollbar>
</template>

<script>
import { inject, ref, onBeforeMount } from 'vue-demi'
import { ElSpace, ElCard, ElImage, ElScrollbar, ElDivider, ElTag, ElDropdown, ElDropdownMenu, ElDropdownItem } from 'element-plus';
import { convertTime, convertWorkoutLength } from '../composables/convertTime'
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    ElSpace,
    ElCard,
    ElImage,
    ElScrollbar,
    ElDivider,
    ElTag,
    ElDropdown,
    ElDropdownMenu,
    ElDropdownItem
  },
  setup() {
    const { workout } = inject('store')
    const trainerOptions = ref([])
    const levelOptions = ref([])
    const categoryOptions = ref([])

    onBeforeMount(() => {
      workout.state.workoutData.forEach(workout => {
        if (!trainerOptions.value.includes(workout.inst)) {
          return trainerOptions.value.push(workout.inst)
        }
      })

      workout.state.workoutData.forEach(workout => {
        if (!levelOptions.value.includes(workout.level)) {
          return levelOptions.value.push(workout.level)
        }
      })

      workout.state.workoutData.forEach(workout => {
        if (!categoryOptions.value.includes(workout.cat)) {
          return categoryOptions.value.push(workout.cat)
        }
      })
    })

    const handleTrainerSort = (trainer) => {
      workout.methods.sortTrainer(trainer)
    }

    const handleLevelSort = (level) => {
      workout.methods.sortLevel(level)
    }

    const handleCategorySort = (category) => {
      workout.methods.sortCategory(category)
    }

    const handleResetState = () => {
      workout.methods.resetState()
    }

    return { workout, convertTime, convertWorkoutLength, trainerOptions, levelOptions, categoryOptions, handleTrainerSort, handleLevelSort, handleCategorySort, handleResetState }
  }
}
</script>

<style scoped>
  .el-space {
    color: var(--white);
    overflow: hidden;
  }

  .el-card {
    background-color: var(--dark);
    color: var(--white);
    margin: 5px;
    padding: 0px;
    border-radius: none;
    height: 300px;
    width: 450px;
  }
  
  .workout-title-container {
    font-size: 1.25em;
    margin-top: 10px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .workout-subtitle-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    font-size: .80rem;
    margin-top: 5px;
    margin-left: 10px;
    margin-bottom: 10px;
    line-height: 20px;
  }

  .workout-subtitle-item {
    margin-right: 5px;
  }

  .el-tag {
    font-size: .75rem;
  }

  .advanced, .beginner, .not-rated, .intermediate {
    margin-left: 10px;
    border: none;
    font-weight: 700;
    color: var(--white);
  }

  .beginner {
    background-color: var(--beginner);
  }

  .advanced {
    background-color: var(--advanced);
  }

  .intermediate {
    background-color: var(--intermediate);
  }

  .not-rated {
    background-color: var(--not-rated);
  }

  .workout-image {
    object-fit: contain;
    border-bottom-right-radius: 15px;
    border-bottom-left-radius: 15px;
  }

  .dropdown-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 10px;
    width: 75%;
  }

  .el-dropdown-menu {
    margin: 5px !important;
  }

  .reset-button {
    width: 100px;
    background-color: var(--dark);
    color: var(--white);
    font-size: .80rem;
    margin-left: 5px;
  }

  .reset-button:hover {
    background-color: var(--white);
    color: var(--dark);
  }

@media screen and (max-width: 960px) {
}

@media screen and (max-width: 768px) {
  .el-card {
    width: 400px;
  }

  .workout-image {
    object-fit: contain;
    border-bottom-right-radius: 4px;
    border-bottom-left-radius: 4px;
  }

  .workout-subtitle-container {
    font-size: .79rem;
    font-weight: 400;
  }

  .dropdown-container {
    flex-direction: column;
    width: 100%;
  }
}

@media screen and (max-width: 600px) {
  .el-card {
    width: 375px;
    height: 300px;
  }

  .workout-subtitle-container {
    line-height: 20px;
    margin-right: 5px;
  }

  .workout-image {
    height: 250px;
  }

  .workout-title-container {
    font-size: 1rem;
  }
}
</style>
