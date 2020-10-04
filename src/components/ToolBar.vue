<template>
  <header class="header">
    <router-link to="/news" class="header-link">News</router-link>
    <router-link to="/ask" class="header-link">Ask</router-link>
    <router-link to="/jobs" class="header-link">Jobs</router-link>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
.header {
  display: flex;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #36a372;
  height: 48px;
}

.header-link {
  color: white;
  padding: 12px 24px 12px 24px;
}
</style>