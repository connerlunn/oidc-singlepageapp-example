<template>
  <div class="account">
      <account />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Account from '@/components/Account.vue'; // @ is an alias to /src

@Options({
  components: {
    Account,
  },
})
export default class AccountView extends Vue {}
</script>