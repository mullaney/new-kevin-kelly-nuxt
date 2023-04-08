<template>
  <nav>
    <NuxtLink to="/" class="reversed">Home</NuxtLink>
    <NuxtLink to="/about" class="reversed" >About</NuxtLink>
    <NuxtLink to="/logs" class="reversed" >Logs</NuxtLink>
  </nav>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'



</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.reversed {
  color: white;
  text-decoration: none;
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.reversed.router-link-active {
  color: #12159c;
  background-color: white;
}
</style>