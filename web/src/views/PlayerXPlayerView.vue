<script setup>
import TicTacToe from "../components/TicTacToe.vue";
import { useRouter } from "vue-router";
import { mapActions, mapGetters, mapMutations } from 'vuex';
const router = useRouter();

</script>

<script>

export default {
  name: 'PlayerXPlayer',
  components: {
  },

  data() {
    return {


    }
  },

  computed: {
    ...mapGetters(['value', 'playCounter', 'playX', 'playO'])
    
  },

  methods: {

    ...mapMutations(['setValue','setPlayCounter', 'setPlayX', 'setPlayO']),
    ...mapActions(['checkWin']),

    makePlay(pos) {
      const value = this.value

      if (this.playX.includes(this.playCounter) && value[pos] === false) {
        var playCount = this.playCounter + 1
        this.setPlayCounter(playCount)
        this.value[pos] = "X"


      } else if (this.playO.includes(this.playCounter) && value[pos] === false) {
        var playCount = this.playCounter + 1
        this.setPlayCounter(playCount)
        this.value[pos] = "O"

      }

      this.$emit('checkWin');
    }

  }

}


</script>


<template>
  <main class="text-white">
    {{ value }}
    {{ playCounter }}
    <div>
      <button @click="router.push(`/`)" class="absolute text-3xl text-white"> Back </button>
      <TicTacToe @pos="makePlay" @checkWin="makePlay"/>
    </div>
  </main>
</template>
