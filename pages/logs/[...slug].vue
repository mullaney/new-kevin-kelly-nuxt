<template>
  <div 
    v-if="showPost"
    class="content"
  >
    <div 
      v-if="image"
    >
      <img
        class="top-image"
        :src="image"
        :alt="title"
      />
    </div>
    <h1>{{ title }}</h1>
    <LogMetaData
      :publishedOn="published_on"
      :author="author"
    />
    <ContentDoc />
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { path } = route;
const { published_on, title, author, image } = await queryContent('logs').where({ _path: path }).findOne();

const showPost = computed(() => {
  return published_on <= new Date().getTime();
});
</script>

<style scoped>

.top-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
