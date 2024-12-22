<script setup lang="ts">
import { DongJianMonitor } from "./monitor"

const monitor = DongJianMonitor.init({
  appId: "123456",
  SecretKey: "123456"
})

function handleClick(){
  console.log(a);
  
}

</script>

<template>
  <div>
    123123123
    <button @click="handleClick">click</button>
  </div>
</template>

<style scoped></style>
