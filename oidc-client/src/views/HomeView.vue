<template>
  <div class="home">
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
