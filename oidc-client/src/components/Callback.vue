<template>
    <p> Logging in...</p>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import { authService } from '@/services/AuthService';

export default class Callback extends Vue {
  public mounted() {
    authService.loginCallback().then(() => {
        this.$router.push('/');
    });
  }
}
</script>