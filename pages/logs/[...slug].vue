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
    <p class="meta-data">
      <span
        v-if="author"
      >
        by {{ author }}
      </span>
      <br 
        v-if="published_on && author"
      />
      <span
        v-if="published_on"
      >
        published {{ formattedDate }}
      </span>

    </p>
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

const formattedDate = computed(() => {
  return new Date(published_on).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  });
});
</script>

<style scoped>
p.meta-data {
  font-size: 1rem;
  font-style: italic;
  color: #666;
  margin-top: -1.5rem;
  line-height: 1.5rem;
}

.top-image {
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
}
</style>
