<script setup lang="ts">
import { PhTrash, PhCircle } from '@phosphor-icons/vue'
import { defineProps, withDefaults } from 'vue'
import type { Task } from './Tasks.vue'

defineProps<{
  task: Task
  onRemoveTask: (taskId: string) => void
  onCompleteTask: (taskId: string) => void
}>()
</script>

<template>
  <div class="flex items-center rounded-lg px-4 bg-zinc-800">
    <div class="flex flex-1 py-4 gap-4">
      <PhCircle
        v-if="!task.completed"
        @click="onCompleteTask(task.id)"
        class="rounded-full border-2 border-sky-500 p-2.5 hover:bg-sky-900/20 cursor-pointer"
      />

      <PhCircle
        v-else
        @click="onCompleteTask(task.id)"
        class="rounded-full border-2 p-2.5 bg-purple-400 cursor-pointer"
      />
      <p
        :class="['text-white', 'flex-1', task.completed ? 'line-through' : '']"
      >
        {{ task.description }}
      </p>
      <PhTrash
        @click="onRemoveTask(task.id)"
        size="25"
        weight="regular"
        class="text-gray-400 hover:text-gray-700 cursor-pointer"
      />
    </div>
  </div>
</template>
