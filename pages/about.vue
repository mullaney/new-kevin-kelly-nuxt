<template>
  <div>
    <h1>About Me</h1>
    <p>
      I'm a software engineer, working for an education company. I mostly do front end work using Vue. I have experience various libraries and languages including ruby, rails, react, php, python and rust.
    </p>
    <div class="pull-right">
      <img src="~/assets/img/dogs-in-hats-playing-poker.png" alt="an ai generated, black and white image of dogs in hats playing poker. The1 style like a graphic novel image" class="constrain-size"/>
    </div>
    <p>
      Before working as a software engineer full time I worked in the theater, mainly teaching improv comedy. I also enjoy poker and puppies. If you want to here more about improv, poker or puppies, check out <NuxtLink to="https://kevinmullaney.com">kevinmullaney.com</NuxtLink>. Or follow me on mastodon or linkedin (see below).
    </p>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.pull-right {
  float: right;
  margin-left: 1rem;
}

.constrain-size {
  max-width: min(40ch, 45vw);
}

@media (max-width: 600px) {
  .pull-right {
    float: none;
    margin-left: 0;
  }

  .constrain-size {
    max-width: 100%;
  }
}
</style>
