<script setup>

import { mapGetters, mapMutations } from 'vuex';

</script>

<script>


export default {
    name: 'TicTacToe',
    components: {
    },

    data() {
        return {
            winner: false,
        }
    },

    computed: {

        ...mapGetters(['value', 'playCounter', 'playX', 'playO'])
    },

    mounted() {

        this.newGame();

    },

    watch: {

        playCounter() {
            this.checkWin()
        },
    },

    methods: {

        ...mapMutations(['setValue', 'setPlayCounter', 'setPlayX', 'setPlayO']),

        newGame() {
            this.setValue([
                false, false, false,
                false, false, false,
                false, false, false,
            ])
            this.winner = false,
                this.setPlayCounter(0)
            this.setPlayO([1, 3, 5, 7, 9])
            this.setPlayX([0, 2, 4, 6, 8])
        },

        checkWin() {


            if (
                this.value[0] === 'X' && this.value[1] === 'X' && this.value[2] === 'X' ||
                this.value[3] === 'X' && this.value[4] === 'X' && this.value[5] === 'X' ||
                this.value[6] === 'X' && this.value[7] === 'X' && this.value[8] === 'X' ||

                this.value[0] === 'X' && this.value[3] === 'X' && this.value[6] === 'X' ||
                this.value[1] === 'X' && this.value[4] === 'X' && this.value[7] === 'X' ||
                this.value[2] === 'X' && this.value[5] === 'X' && this.value[8] === 'X' ||

                this.value[0] === 'X' && this.value[4] === 'X' && this.value[8] === 'X' ||
                this.value[2] === 'X' && this.value[4] === 'X' && this.value[6] === 'X'

            ) {
                this.winner = 'X'
            }

            if (
                this.value[0] === 'O' && this.value[1] === 'O' && this.value[2] === 'O' ||
                this.value[3] === 'O' && this.value[4] === 'O' && this.value[5] === 'O' ||
                this.value[6] === 'O' && this.value[7] === 'O' && this.value[8] === 'O' ||

                this.value[0] === 'O' && this.value[3] === 'O' && this.value[6] === 'O' ||
                this.value[1] === 'O' && this.value[4] === 'O' && this.value[7] === 'O' ||
                this.value[2] === 'O' && this.value[5] === 'O' && this.value[8] === 'O' ||

                this.value[0] === 'O' && this.value[4] === 'O' && this.value[8] === 'O' ||
                this.value[2] === 'O' && this.value[4] === 'O' && this.value[6] === 'O'

            ) {
                this.winner = 'O'
            }

            if (this.playCounter === 9 && this.winner === false || this.playCounter === 10 && this.winner === false) {
                this.winner = 'draw';
            }
        }


    }
}


</script>


<template>
    <main>
        <div class="">
            <div class="text-white flex h-screen justify-center w-full text-center">
                <span v-if="winner === 'X'" class="absolute w-96 text-5xl text-danger">Player One Win</span>
                <span v-if="winner === 'O'" class="absolute w-96 text-5xl text-blue">Player Two Win</span>
                <span v-if="winner === 'draw'" class="absolute w-96 text-5xl text-white">Draw</span>
                <button v-if="winner !== false" @click="newGame()" class="absolute w-96 h-48 text-5xl text-green">New
                    Game</button>

                <table class="flex items-center text-5xl cursor-default ">
                    <tbody class="bg-dark">
                        <tr class="">

                            <td v-if="value[0] === false" @click="$emit('pos', '0')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[0] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[0] === 'O'" class="border border-white text-blue w-32 h-32">O</td>


                            <td v-if="value[1] === false" @click="$emit('pos', '1')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[1] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[1] === 'O'" class="border border-white text-blue w-32 h-32">O</td>


                            <td v-if="value[2] === false" @click="$emit('pos', '2')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[2] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[2] === 'O'" class="border border-white text-blue w-32 h-32">O</td>

                        </tr>


                        <tr class="">

                            <td v-if="value[3] === false" @click="$emit('pos', '3')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[3] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[3] === 'O'" class="border border-white text-blue w-32 h-32">O</td>


                            <td v-if="value[4] === false" @click="$emit('pos', '4')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[4] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[4] === 'O'" class="border border-white text-blue w-32 h-32">O</td>


                            <td v-if="value[5] === false" @click="$emit('pos', '5')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[5] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[5] === 'O'" class="border border-white text-blue w-32 h-32">O</td>

                        </tr>

                        <tr class="">

                            <td v-if="value[6] === false" @click="$emit('pos', '6')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[6] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[6] === 'O'" class="border border-white text-blue w-32 h-32">O</td>


                            <td v-if="value[7] === false" @click="$emit('pos', '7')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[7] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[7] === 'O'" class="border border-white text-blue w-32 h-32">O</td>


                            <td v-if="value[8] === false" @click="$emit('pos', '8')"
                                class="border border-white cursor-pointer w-32 h-32"></td>
                            <td v-if="value[8] === 'X'" class="border border-white text-danger w-32 h-32 ">X</td>
                            <td v-if="value[8] === 'O'" class="border border-white text-blue w-32 h-32">O</td>

                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    </main>
</template>
