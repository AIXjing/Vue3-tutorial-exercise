<template>
  <nav
      class="w-full bg-gradient-to-r
      from-blue-800 to-blue-600 text-white
      px-4 py-2 flex justify-between"
  >
    <router-link v-for="item in list" :key="item.to"
                 class="mx-4" :to="item.to"> {{ item.title }} </router-link>

    <button v-if="isLoggedIn" class="mx-4" @click="logout"> Log out </button>
    <button v-else class="mx-10" @click="$emit('open-login-modal')"> Log in </button>
  </nav>
</template>

<script>
import firebase from "@/utilities/firebase"
export default {
  props: {isLoggedIn: Boolean},

  data(){
    return {
      list:[
        {title: "Home", to: "/"},
        {title: "My heros", to: "/heros"},
        {title: "Calendar", to: "/calendar"},
        {title: "Markdown", to: "/markdown"},
        {title: "Slider Carousel", to: "/slider"},
        {title: "Calculator", to: "/calculator"},
        {title: "ReuseableModal", to: "/modal"}
      ]
    }
  },

  methods: {
    logout() {
      firebase
      .auth()
      .signOut()
      .then((res) => {res})
      .catch((e) => {e});
    }
  }
}

</script>