<template>

    <div class="m-auto">
      <h1 class="text-2xl text-center"> My Heros {{herosCount}}</h1>
      <ul>
        <li class="flex justify-between" v-for="(hero,index) in heros" :key="hero.name">
          <div>
            {{ hero.name }}
          </div>
          <button @click="remove(index)"> x</button>
        </li>
      </ul>

      <form class="mt-10" @submit.prevent="addHero()">
        <input
            class="border rounded-lg"
            v-model="newhero"
            placeholder="Type new Hero!"
            ref="heroRef"
        />
        <button class="border rounded" type="submit">Add Hero</button>
      </form>
    </div>
</template>

<script>
import { onMounted, ref,  computed } from "vue";

export default {
  setup(){

    const heroRef = ref("")
    const newhero = ref("")
    const heros = ref([
      {name: "Fuyang Baby"},
      {name: "Wonder Jing"},
      {name: "Fector"},
      {name: "Fugo"}
    ])

    onMounted(() => {
      heroRef.value.focus()
    })

    function remove(index){
        heros.value = heros.value.filter((hero, i) => i !== index)
    }

    function addHero() {
      if (newhero.value == "") {
        alert("Type hero name!");
        return
      }
      heros.value.push({name: newhero.value});
      newhero.value = '';
    }

    const herosCount = computed({
      get: () => heros.value.length
    })

    return {heros, newhero, remove, addHero, heroRef, herosCount};
  },

    // randM() {
    //   return Math.random();
    // },
    // setFullName(){
    //   this.fullname = 'Bitfumes Tutorial'
    // }

    // randC() {
    //   return Math.random()
    // },
    // fullname: {
    //   get() {
    //     return `The fullname is ${this.fname} ${this.lname}`
    //   },
    //   set(fullname) {
    //     const values = fullname.split(" ");
    //     this.fname = values[0];
    //     this.lname = values[1];
    //   },
    // },
}

</script>