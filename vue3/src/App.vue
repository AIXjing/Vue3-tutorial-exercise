<template>
  <AppHeader />
  <div class="w-full flex">
<!--    <Heros />-->
    <Calendar />
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Calendar from "@/components/Calendar";
// import Heros from "@/components/Heros";


export default {
  components:{AppHeader, Calendar}
}
</script>
