<template>
  <div class="flex flex-wrap w-full">
    <h1 class="w-full text-center text-3xl my-4">Markdown App</h1>
    <section class="flex m-auto w-10/12 h-screen">
      <article class="w-1/2 border">
        <textarea
            class="w-full h-full"
            :value="text"
            @input="update"
            ref="markdownTextArea"
        >
        </textarea>
      </article>
      <article class="w-1/2 border bg-gray-100" v-html="markedText">
      </article>
    </section>
  </div>
  <div>
    <p v-for="item in items" :key="item">{{item}}}</p>
  </div>
</template>

<script>
import marked from "marked";
import useDebounce from "@/components/composition/useDebounce";
import { itemStore } from "@/store/store";

export default {
  data() {
    return {
      text: "**this is markdown app**",
      debounce: "",
      items: itemStore.state.items,
    };
  },
  computed: {
    markedText() {
      return marked(this.text);
    },
  },
  methods: {
    update(e) {
      const task = () => (this.text = e.target.value);
      this.debounce(task, 500);
      console.log(itemStore)
    },
  },
  mounted() {
    this.debounce = useDebounce();
    this.$refs.markdownTextArea.focus();
  },
};
</script>

<style></style>