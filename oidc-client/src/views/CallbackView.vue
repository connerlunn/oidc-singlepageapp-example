<template>
  <div class="callback">
      <callback />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Callback from '@/components/Callback.vue'; // @ is an alias to /src

@Options({
  components: {
    Callback,
  },
})
export default class CallbackView extends Vue {}
</script>