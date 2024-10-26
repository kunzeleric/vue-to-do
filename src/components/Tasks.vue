<script setup lang="ts">
import clipboard from '@/assets/images/clipboard.png'
import { defineProps, computed } from 'vue'
import TaskCard from './TaskCard.vue'

export interface Task {
  id: string
  description: string
  completed: boolean
}
const props = defineProps<{
  tasks: Task[]
  onRemoveTask: (id: string) => void
  onCompleteTask: (taskId: string) => void
}>()

const tasksStatus = computed(() => {
  return props.tasks.reduce(
    (acc, task) => {
      acc.total += 1
      if (task.completed) acc.completed += 1
      return acc
    },
    { total: 0, completed: 0 },
  )
})
</script>

<template>
  <section class="w-full">
    <div class="flex justify-between">
      <div class="flex gap-2 items-center">
        <p class="text-sky-600 font-bold">Tarefas Criadas</p>
        <span
          class="rounded-full text-white bg-gray-700 font-bold px-2 py-0.5"
          >{{ props.tasks.length }}</span
        >
      </div>
      <div class="flex gap-2 items-center">
        <p class="text-purple-600 font-bold">Concluídas</p>
        <span
          v-if="tasks.length == 0"
          class="rounded-full text-white bg-gray-700 font-bold px-2 py-0.5"
          >{{ props.tasks.length }}</span
        >
        <span
          v-else
          class="rounded-full text-white bg-gray-700 font-bold px-2 py-0.5"
          >{{ tasksStatus.completed }} de {{ props.tasks.length }}</span
        >
      </div>
    </div>

    <!-- Placeholder for no tasks registered -->
    <div
      v-if="tasks.length === 0"
      class="flex justify-center items-center border-t border-gray-400 rounded-t-md mt-4 flex-col"
    >
      <div class="flex flex-col pt-12 items-center gap-4">
        <img v-bind:src="clipboard" alt="" class="w-16 h-16" />
        <div class="flex flex-col justify-center items-center">
          <p class="font-bold text-gray-400">
            Você ainda não tem tarefas cadastradas
          </p>
          <p class="text-gray-400">
            Crie tarefas e organize seus itens a fazer
          </p>
        </div>
      </div>
    </div>

    <div class="flex flex-col gap-2 mt-4" v-else>
      <TaskCard
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        :onRemoveTask="props.onRemoveTask"
        :onCompleteTask="props.onCompleteTask"
      />
    </div>
  </section>
</template>
