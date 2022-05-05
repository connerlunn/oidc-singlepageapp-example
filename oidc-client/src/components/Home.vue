<template>
  <div class="Home">
    <button @click="login" v-if="!isLoggedIn">Login</button>
    <button @click="logout" v-if="isLoggedIn">Logout</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { authService } from '@/services/AuthService';

export default class Heme extends Vue {

  public isLoggedIn: boolean = false;

  public login() {
    authService.login();
  }

  public logout() {
    authService.logout();
  }

  public mounted() {
    authService.getUser().then((user) => {
      this.isLoggedIn = (user !== null && !user.expired);
    });
  }
}
</script>