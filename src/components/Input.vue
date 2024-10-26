<script setup lang="ts">
import { PhPlusCircle } from '@phosphor-icons/vue'
</script>

<template>
  <form class="flex gap-2 h-16 w-full">
    <div class="h-full w-full">
      <input
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
</template>
