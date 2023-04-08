<template>
  <p class="meta-data">
    <span
      v-if="author"
    >
      by {{ author }}
    </span>
    <br 
      v-if="publishedOn && author"
    />
    <span
      v-if="publishedOn"
    >
      {{ formattedDate }}
    </span>
  </p>
</template>

<script setup lang="ts">
const { publishedOn, author } = defineProps<{
  publishedOn: number;
  author: string;
}>();

const formattedDate = computed(() => {
  return new Date(publishedOn).toLocaleDateString('en-US', {
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
</style>