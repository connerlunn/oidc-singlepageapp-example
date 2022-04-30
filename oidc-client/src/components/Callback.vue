<template>
    <p> Do a spinner here </p>
</template>

<script lang="ts">
import { Vue } from 'vue-class-component';
import AuthService from '@/services/AuthService';

const auth = new AuthService();

export default class Callback extends Vue {
  public mounted() {
    auth.loginCallback().then(() => {
        this.$router.push('/');

    });
  }

}
</script>