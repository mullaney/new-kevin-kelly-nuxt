<template>
  <header>
    <NuxtLink to="/" class="reversed">kevin-kelly.dev</NuxtLink>
    <NavBar />
  </header>
</template>

<style scoped>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #12159c;
  color: white;
}

.reversed {
  color: white;
  text-decoration: none;
}

</style>