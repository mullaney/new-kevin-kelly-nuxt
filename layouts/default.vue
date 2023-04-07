<template>
  <DefaultHeader />
  <div id="content-wrapper">
    <main>
      <slot />
    </main>
  </div>
  <footer>
    <p>
      <ul class="no-bullets flex-row">
        <li>
          <NuxtLink to="https://mastodon.social/@mullaney">
            <img src="~/assets/img/mastodon-logo.svg" class="icon-size"/></NuxtLink>
          </li>
        <li>
          <NuxtLink to="https://www.linkedin.com/in/kvinklly/">
            <img src="~/assets/img/linkedin.png" class="icon-size"/>
          </NuxtLink></li>
      </ul>
    </p>
    <p>© 2023 Kevin Kelly</p>
  </footer>
</template>

<script setup lang="ts">

</script>

<style scoped>
main {
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  min-width: min(80ch, calc(100vw - 4rem));
}

main, header, footer {
  padding: 1rem 2rem;
}

footer {
  padding: 1rem 2rem;
}

#content-wrapper {
  display: flex;
  justify-content: center;
}

#content-wrapper > * {
  max-width: min(80ch, calc(100vw - 4rem));
  place-self: center;
}

.no-bullets {
  list-style-type: none;
  padding: 0;
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
}

.icon-size {
  width: 2rem;
  height: 2rem;
}
</style>