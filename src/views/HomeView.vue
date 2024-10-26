<script setup lang="ts">
import Tasks from '@/components/Tasks.vue'
import { PhPlusCircle } from '@phosphor-icons/vue'

import { reactive } from 'vue'
import { uuid } from 'vue-uuid'

interface Task {
  id: string
  description: string
  completed: boolean
}

interface Tasks {
  tasks: Task[]
}

const task = reactive<Task>({
  id: '',
  description: '',
  completed: false,
})

const state = reactive<Tasks>({
  tasks: [],
})

function addTask() {
  if (task.description.trim() === '') return

  const newTask = {
    id: uuid.v4(),
    description: task.description,
    completed: false,
  }

  state.tasks.push(newTask)
  task.description = ''
}

function removeTask(taskId: string) {
  const taskIndex = state.tasks.findIndex(task => task.id === taskId)

  if (taskIndex !== -1) {
    state.tasks.splice(taskIndex, 1)
  }
}

function completeTask(taskId: string) {
  const taskIndex = state.tasks.findIndex(task => task.id === taskId)
  if (taskIndex !== -1) {
    state.tasks[taskIndex].completed = !state.tasks[taskIndex].completed
  }
}
</script>

<template>
  <main class="bg-zinc-900 h-[calc(100vh-13rem)]">
    <div
      class="-translate-y-7 flex flex-col gap-20 justify-center items-center w-[732px] mx-auto"
    >
      <form @submit.prevent="addTask" class="flex gap-2 h-16 w-full">
        <div class="h-full w-full">
          <input
            v-model="task.description"
            placeholder="Adicione uma nova tarefa"
            class="w-full h-full bg-gray-700 border-black border-2 outline-none shadow-none rounded-md px-4 text-white"
            type="text"
          />
        </div>
        <button
          class="flex gap-2 bg-sky-600 font-bold rounded-md px-4 text-white items-center"
          type="submit"
        >
          Criar
          <PhPlusCircle size="20" weight="bold" />
        </button>
      </form>

      <Tasks
        :tasks="state.tasks"
        :onRemoveTask="removeTask"
        :onCompleteTask="completeTask"
      />
    </div>
  </main>
</template>
