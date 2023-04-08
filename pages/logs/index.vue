<template>
  <div>
    <section>
      <article
        v-for="log in logPosts"
        :key="log._id"
      >
        <h2>
          <NuxtLink :to="log._path">
            {{ log.title }}
          </NuxtLink>
        </h2>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const logPosts = await queryContent('/logs').find();

</script>

<style scoped>
h2 a {
  color: black;
  text-decoration: none;
}

</style>