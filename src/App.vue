<script setup lang="ts">
import { DongJianMonitor } from "./monitor"

const monitor = DongJianMonitor.init({
  appId: 'app_0b2aaa4500a646a1a0ef4d708045d285',
  secretKey: 'sk_da130b1a47474279ac53130a8cf276c3',
  // reportUrl: 'https://report.example.com/collect',
  // autoTracker: true,
  // delay: 1000,
  // hashPage: true,
  // errorReport: true
})

function handleClick() {
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
