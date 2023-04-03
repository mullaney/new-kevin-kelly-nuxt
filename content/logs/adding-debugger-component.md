---
title: Adding a debugger component
published_on: 1605282058051
---

One thing that might be useful is to have a component that exposes useful information for debugging purposes. When you add it to a specific component, it adds a small button to the component. If you click that button, a hidden div is revealed with information about that component including:

- props
- data
- params (from the route)

## How to make the component

This is the template:

```jsx
<template>
  <div class="text-xs">
    <button
      class="bg-white hover:bg-gray-200 p-1 font-bold rounded inline-flex items-center text-red-600"
      @click="toggleInfo"
    >
      ⓘ
    </button>
    <div v-if="showInfo">
      <pre>{{ info }}</pre>
    </div>
  </div>
</template>
```

And this is the script for the component:

```js
<script>
export default {
  name: 'DebuggingInfo',
  data: () => {
    return {
      showInfo: false
    }
  },
  computed: {
    info () {
      return {
        params: this.params,
        props: this.$parent._props,
        data: this.$parent._data
      }
    },
    params () {
      if (Object.keys(this.$route.params).length === 0) { return undefined }
      return this.$route.params
    }
  },
  methods: {
    toggleInfo () {
      this.showInfo = !this.showInfo
    }
  }
}
</script>
```

The button toggles the showInfo data attribute. And when the info is shown, it displays the params for the route, and the props and data for the parent component.

Then just add that component wherever you need it. Just remember to remove it before you push to production.

```jsx
<DebuggingInfo />
```
