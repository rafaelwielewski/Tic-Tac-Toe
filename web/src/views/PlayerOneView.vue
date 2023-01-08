<script setup>
import TicTacToe from "../components/TicTacToe.vue";
import { useRouter } from "vue-router";
import { mapActions, mapGetters, mapMutations } from 'vuex';
const router = useRouter();

</script>

<script>

export default {
    name: 'PlayerOne',
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

        ...mapMutations(['setValue', 'setPlayCounter', 'setPlayX', 'setPlayO']),
        ...mapActions(['checkWin']),

        makePlay(pos) {

            var value = this.value
            var playCount = this.playCounter

            this.value[pos] = "X"

            playCount++

            if (this.playCounter === 0) {

                if (value[4] === 'X') {
                    this.value[0] = "O"
                }

                if ('X' === value[0] ||
                    value[1] ||
                    value[2] ||
                    value[3] ||
                    value[5] ||
                    value[6] ||
                    value[7] ||
                    value[8]
                ) {
                    this.value[4] = "O"
                }
            }

            /////////////// O GANHAR ///////////

            else if (
                value[0] === 'O' && value[1] === 'O' && value[2] === false ||
                value[6] === 'O' && value[4] === 'O' && value[2] === false ||
                value[8] === 'O' && value[5] === 'O' && value[2] === false
            ) {
                this.value[2] = "O"
            }
            else if (
                value[1] === 'O' && value[2] === 'O' && value[0] === false ||
                value[3] === 'O' && value[5] === 'O' && value[0] === false ||
                value[8] === 'O' && value[4] === 'O' && value[0] === false
            ) {
                this.value[0] = "O"
            }
            else if (
                value[0] === 'O' && value[3] === 'O' && value[6] === false ||
                value[2] === 'O' && value[4] === 'O' && value[6] === false ||
                value[7] === 'O' && value[8] === 'O' && value[6] === false
            ) {
                this.value[6] = "O"
            }
            else if (
                value[2] === 'O' && value[5] === 'O' && value[8] === false ||
                value[0] === 'O' && value[4] === 'O' && value[8] === false ||
                value[6] === 'O' && value[7] === 'O' && value[8] === false
            ) {
                this.value[8] = "O"
            }

            else if (
                value[0] === 'O' && value[2] === 'O' && value[1] === false ||
                value[7] === 'O' && value[4] === 'O' && value[1] === false
            ) {
                this.value[1] = "O"
            }
            else if (
                value[4] === 'O' && value[5] === 'O' && value[3] === false ||
                value[0] === 'O' && value[6] === 'O' && value[3] === false
            ) {
                this.value[3] = "O"
            }
            else if (
                value[2] === 'O' && value[8] === 'O' && value[5] === false ||
                value[3] === 'O' && value[4] === 'O' && value[5] === false
            ) {
                this.value[5] = "O"
            }
            else if (
                value[1] === 'O' && value[4] === 'O' && value[7] === false ||
                value[6] === 'O' && value[8] === 'O' && value[7] === false
            ) {
                this.value[7] = "O"
            }

            ////////////////// X GANHAR ////////////////
            else if (
                value[0] === 'X' && value[1] === 'X' && value[2] === false ||
                value[6] === 'X' && value[4] === 'X' && value[2] === false ||
                value[8] === 'X' && value[5] === 'X' && value[2] === false
            ) {
                this.value[2] = "O"
            }
            else if (
                value[1] === 'X' && value[2] === 'X' && value[0] === false ||
                value[3] === 'X' && value[5] === 'X' && value[0] === false ||
                value[8] === 'X' && value[4] === 'X' && value[0] === false
            ) {
                this.value[0] = "O"
            }
            else if (
                value[0] === 'X' && value[3] === 'X' && value[6] === false ||
                value[2] === 'X' && value[4] === 'X' && value[6] === false ||
                value[7] === 'X' && value[8] === 'X' && value[6] === false
            ) {
                this.value[6] = "O"
            }
            else if (
                value[2] === 'X' && value[5] === 'X' && value[8] === false ||
                value[0] === 'X' && value[4] === 'X' && value[8] === false ||
                value[6] === 'X' && value[7] === 'X' && value[8] === false
            ) {
                this.value[8] = "O"
            }

            else if (
                value[0] === 'X' && value[2] === 'X' && value[1] === false ||
                value[7] === 'X' && value[4] === 'X' && value[1] === false
            ) {
                this.value[1] = "O"
            }
            else if (
                value[4] === 'X' && value[5] === 'X' && value[3] === false ||
                value[0] === 'X' && value[6] === 'X' && value[3] === false
            ) {
                this.value[3] = "O"
            }
            else if (
                value[2] === 'X' && value[8] === 'X' && value[5] === false ||
                value[3] === 'X' && value[4] === 'X' && value[5] === false
            ) {
                this.value[5] = "O"
            }
            else if (
                value[1] === 'X' && value[4] === 'X' && value[7] === false ||
                value[6] === 'X' && value[8] === 'X' && value[7] === false
            ) {
                this.value[7] = "O"
            } else {

                let result;

                for (let index = 0; index < value.length; index++) {
                    if (value[index] === false) {
                        result = index;
                        break;
                    }
                }
                this.value[result] = "O"


            }

            playCount++
            this.setPlayCounter(playCount)
            console.log(playCount)



        }

    }

}


</script>


<template>
    <main class="text-white">
        <div>
            <button @click="router.push(`/`)" class="absolute text-3xl text-white"> Back </button>
            <TicTacToe @pos="makePlay" @checkWin="makePlay" />
        </div>
    </main>
</template>
