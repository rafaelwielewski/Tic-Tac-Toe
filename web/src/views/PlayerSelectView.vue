<script setup>

import { useRouter } from "vue-router";
const router = useRouter();

</script>

<template>
  <main>
    <button @click="router.push(`/`)" class="absolute text-3xl text-white"> Back </button>
    <div class="text-center justify-center w-full text-center justify-center" >
        <p><button @click="router.push(`/playerone`)" class="text-5xl text-danger"> Player One </button></p>
        <p><button @click="router.push(`/playertwo`)" class="text-5xl text-blue"> Player Two </button></p>
    </div>
  </main>
</template>
