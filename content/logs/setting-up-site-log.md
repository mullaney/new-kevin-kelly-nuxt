---
title: Setting up a site log
published_on: 1604789775995
---
It occurred to me that I should keep a log of the changes and improvements to this site over time. The log would record the steps I took to make those changes. So this first log entry will detail how I implemented a log entry.

The first step was to add a directory under content called 'logs' and then to add a markdown file. The markdown files contain a yaml section at the top with two data points:

```yaml
---
title: Setting up a site log
published_on: 1604789775995
```

I'll use the title for the content of the H1 header, and published_on will be the time that I started or finished the log entry. To get the value, I just ran this in the console:

```js
Date.now()
```

I'm going to use snake case for attributes in these yaml files to distinguish between values brought in from other sources, and values established from within JavaScript.

## Setting up the dynamic route

The next step will be to create a template that converts the markdown into an actual route. To do this I added a directory to pages/ called 'logs' and a file within it called '_slug.vue'.

The first step was to pull in content from a logEntry markdown file, based on the slug parameter:

```js
export default {
  async asyncData ({ params, $content }) {
    const logEntry = await $content(`log/${params.slug}`).fetch()
    return { logEntry }
  }
}
```

And then I used logEntry for the :document prop of a NuxtContent component:

```jsx
<NuxtContent
  :document="logEntry"
/>
```

## Setting up tailwind typography

I took a workshop at VueConf Toronto this year and one of the topics we covered was using tailwind typography with Nuxt content. There is documentation on how to do this, but I'm having trouble following it. So instead, I think these are the steps I followed from the workshop:

- yarn add @tailwindcss/typography
- add a tailwind.config.js file with:

```js
module.exports = {
  plugins: [require('@tailwindcss/typography')]
}
```

- then add some classes to the NuxtContent component:

```jsx
<NuxtContent
  :document="logEntry"
  class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto"
/>
```

At this point you will need to stop and restart your dev server to see the changes to your format. You will notice that the markdown is now formatted nicely with nice big accessible font.

By the way all of this only works if you chose tailwindcss when you setup the Nuxt app. I'm sure there is a way to add it to a project later, but you'll have to look elsewhere for those tips.

## Adding date format

The native date formatting functionality for JavaScript leaves a lot to be desired, so I decided to try an npm package called [dateformat](https://www.npmjs.com/package/dateformat). I used this to take that timestamp number and turn it back into a date.

## Summary

And there you are! These are the rough steps I took to get log entries up and working.
