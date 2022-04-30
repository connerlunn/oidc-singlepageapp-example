<template>
  <div class="Home">
    <p v-if="isLoggedIn">User: {{ username }}</p>
    <button @click="login" v-if="!isLoggedIn">Login</button>
    <button @click="logout" v-if="isLoggedIn">Logout</button>
  </div>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import AuthService from '@/services/AuthService';

const auth = new AuthService();

export default class Heme extends Vue {

  public currentUser: string = '';
  public accessTokenExpired: boolean | undefined = false;
  public isLoggedIn: boolean = false;

  get username(): string {
    return this.currentUser;
  }

  public login() {
    auth.login();
  }

  public logout() {
    auth.logout();
  }

  public mounted() {
    auth.getUser().then((user) => {
      if (user !== null) {
        this.currentUser = user.profile.name!;
        this.accessTokenExpired = user.expired;
      }

      this.isLoggedIn = (user !== null && !user.expired);
    });
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
