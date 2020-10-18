<template>
  <div>
    <h1 class="text-center"> My Heros </h1>
    <ul>
      <li v-for="(hero,index) in heros" :key="hero.name">
        <div>{{ hero.name }}
          <button @click="remove(index)"> x</button>
        </div>
      </li>
    </ul>

    <form @submit.prevent="addHero()">
      <input v-model="newhero" placeholder="Type new Hero!"/>
      <button type="submit">Add Hero</button>
    </form>
  </div>
</template>


<script>
export default {
  data() {
    return {
      heros: [
        {name: "1"},
        {name: "2"},
        {name: "3"},
      ],
      newhero: "",
      // fname: "Sar",
      // lname: "Shri",
      attribute: "value",
      isDisable: false,
    }
  },

  methods: {
    addHero() {
      if (this.newhero == "") {
        alert("Type hero name!");
        return
      }
      this.heros.push({name: this.newhero});
      this.newhero = '';
    },
    remove(index) {
      this.heros = this.heros.filter((hero, i) => i !== index)
    }
    // randM() {
    //   return Math.random();
    // },
    // setFullName(){
    //   this.fullname = 'Bitfumes Tutorial'
    // }
  },

  computed: {
    herosCount() {
      return this.heros.length
    },
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
}
</script>
