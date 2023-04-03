---
title: Publishing a Nuxt application to Netlify
published_on: 1605014630870
---

Publishing a Nuxt app to Netlify is a relatively quick and painless process. There is a lot of documentation online already and the setup process on Netlify is fairly easy to figure out. However, I did run into a couple of problems when I first deployed this site.

For basic instructions, I would take a look at [this documentation](https://nuxtjs.org/faq/netlify-deployment/) from Nuxt.

## How it works

Once set up, whenever you merge new code to your main branch at github, it will trigger Netlify to generate a fresh version of your site and deploy it.

To make it work, you will need a couple of things that are specific to Nuxt.

- The build command would be `npm run generate` (if your app is meant to run in SPA mode, use `npm run build` instead)
- And the publish directory is `dist`

One bonus feature is that whenever you create a pull request on github, it will generate and deploy your branch at an alternative url, allowing you to see how the deploy looks before you merge the pull request.

## Dynamic links

I ran into a small problem when I first deployed. I had some dynamic NuxtLinks in my code which looked like this:

```jsx
  <NuxtLink
    :to="`logs/${logEntry.slug}`"
  >
    {{ logEntry.title }}
  </NuxtLink>
```

In my dev environment, this worked fine, the route became: **localhost:3000/logs/publishing-nuxt-to-netlify**. However when I deployed this to Netlify, I got links that looked like **kevin-kelly.dev/logs/logs/making-a-log-index-page**. Notice that how logs appears twice?

This was because I was using relative routes which seem to work differently in the two environments. The fix was simple, I just added a slash before the link like this:

```
  <NuxtLink
    :to="`logs/${logEntry.slug}`"
  >
    {{ logEntry.title }}
  </NuxtLink>
```

If you have questions about deploying a Nuxt app on Netlify, let me know. I am curious to find out what pain points exist in the process. I can be found on twitter at [@kvinklly](https://twitter.com/kvinklly).
