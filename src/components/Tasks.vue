<script setup lang="ts">
import clipboard from '@/assets/images/clipboard.png'
</script>

<template>
  <section class="w-full">
    <div class="flex justify-between">
      <div class="flex gap-2 items-center">
        <p class="text-sky-600 font-bold">Tarefas Criadas</p>
        <span class="rounded-full text-white bg-gray-700 font-bold px-2 py-0.5"
          >0</span
        >
      </div>
      <div class="flex gap-2 items-center">
        <p class="text-purple-600 font-bold">Concluídas</p>
        <span class="rounded-full text-white bg-gray-700 font-bold px-2 py-0.5"
          >0</span
        >
      </div>
    </div>

    <!-- Placeholder for no tasks registered -->
    <div
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
  </section>
</template>
