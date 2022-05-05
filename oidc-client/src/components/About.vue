<template>
  <div class="About">
    <p>User: {{ currentUser }}</p>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { authService } from '@/services/AuthService';

export default class about extends Vue {

  public currentUser: string = '';

  public mounted() {
    authService.getUser().then((user) => {
      if (user !== null) {
        this.currentUser = user.profile.name!;
      }
    });
  }
}
</script>