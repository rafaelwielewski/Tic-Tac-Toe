<script setup>

import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <main>
    <div class="text-center justify-center w-full text-center justify-center" >
        <p><button @click="router.push(`/playerxplayer`)" class="text-5xl text-danger"> Player x Player - local </button></p>
        <p><button @click="router.push(`/playerselect`)" class="text-5xl text-blue"> Player x Computer </button></p>
    </div>
  </main>
</template>
