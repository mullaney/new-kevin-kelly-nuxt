<template>
  <div>
    <section>
      <h1>Logs</h1>
      <article
        v-for="log in logPosts"
        :key="log._id"
        class="log-post-summary"
      >
        <h2>
          <NuxtLink :to="log._path">
            {{ log.title }}
          </NuxtLink>
        </h2>
        <LogMetaData
          :publishedOn="log.published_on"
          :author="log.author"
        />
        <p>
          {{ log.description }}
          [ <NuxtLink :to="log._path">
            Read more
          </NuxtLink> ]
        </p>
      </article>
    </section>
  </div>
</template>

<script setup lang="ts">
const logPosts = await queryContent('/logs').find()
  .then((logs) => {
    return logs.sort((a, b) => {
      return b.published_on - a.published_on;
    });
  });

</script>

<style scoped>
h2 a {
  color: black;
  text-decoration: none;
}

h2 a:hover {
  text-decoration: underline;
}

.log-post-summary {
  margin-bottom: 4rem;
  border: 1px solid #ccc;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

</style>