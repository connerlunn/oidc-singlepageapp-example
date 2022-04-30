<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <home />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Home from '@/components/Home.vue'; // @ is an alias to /src

@Options({
  components: {
    Home,
  },
})
export default class HomeView extends Vue {}
</script>
