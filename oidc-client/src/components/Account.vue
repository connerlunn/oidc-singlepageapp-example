<template>
  <div class="Account">
    <p>Name: {{ fullName }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { authService } from '@/services/AuthService';

export default class Account extends Vue {

  public fullName: string = '';

  public mounted() {
    authService.getUser().then((user) => {
      if (user !== null) {
        this.fullName = user.profile.name!;
      }
    });
  }
}
</script>