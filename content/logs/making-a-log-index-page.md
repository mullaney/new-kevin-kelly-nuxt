---
title: Making a log index page
published_on: 1604845167551
---

The next step for the log feature would be to setup an index page which would list the log entries in reverse chronological order.

This time we add an index.vue file to the pages/logs directory. In it we grab the info of all the files in the logs folder.

```js
  async asyncData ({ $content }) {
    const logEntries = await $content('logs').fetch()
    return { logEntries }
  }
```

The template is pretty straight forward. I used a v-for to iterate over the log entries.

```jsx
<template>
  <div
    id="log-entries"
    class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
  >
    <h1 class="text-3xl font-bold leading-tight text-gray-900">
      Log Entries
    </h1>
    <article
      v-for="logEntry in sortedLogEntries"
      :key="logEntry.slug"
      class="log-entry"
    >
      <h2>
        <NuxtLink
          :to="`/logs/${logEntry.slug}`"
        >
          {{ logEntry.title }}
        </NuxtLink>
      </h2>
      <div class="metadata">
        <span v-if="logEntry.published_on">Published on {{ formattedDate(logEntry.published_on) }}<span /></span>
      </div>
      <p>
        {{ firstText(logEntry) }}
        [ <NuxtLink :to="`/logs/${logEntry.slug}`">
          read more
        </NuxtLink> ]
      </p>
    </article>
  </div>
</template>
```

Getting the first text section of the first paragraph was useful for the summary are for each log entry.

```js
firstText (logEntry) {
  const paragraph = logEntry.body.children.find(child => child.tag === 'p')
  return paragraph.children.find(child => child.type === 'text').value
}
```

We'll see how that holds up when the first paragraph has multiple children. It may be worth adding an optional summary in the metadata when This firstText method doesn't apply well to a particular log entry.

I'm reusing the metadata css class. I may want to think about making a global css file, or one that applies to just logs.
