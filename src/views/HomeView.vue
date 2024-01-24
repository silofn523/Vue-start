<template>
  <div class="home">
    <a href="/user">사용자 목록</a> <br>
    <button @click="getDate">데이터 호출</button>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  methods: {
    getDate() {
      axios.get('/http://localhost:8000/')
      .then((response) => {
        console.log(response)
      }).catch((err) => {
        console.log(err)
      });
    }
  }
}
</script>

<style scoped>

a {
  color: #000;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.5rem;
}


</style>