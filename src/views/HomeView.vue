<script setup lang="ts">
import Input from '@/components/Input.vue'
import Tasks from '@/components/Tasks.vue'
</script>

<template>
  <main class="bg-zinc-900 h-[calc(100vh-13rem)]">
    <div
      class="-translate-y-7 flex flex-col gap-20 justify-center items-center w-[732px] mx-auto"
    >
      <Input />
      <Tasks />
    </div>
  </main>
</template>
