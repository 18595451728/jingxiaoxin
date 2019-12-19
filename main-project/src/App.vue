<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  *{
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    outline: none;
  }
  @font-face {
    font-family: 'pfr';
    src: url("/static/Fonts/PingFang Regular.otf");
    font-weight: bold;
    font-style: normal;
  }
  @font-face {
    font-family: 'pfb';
    src: url("/static/Fonts/PingFang Bold.ttf");
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'noodle';
    src: url("/static/Fonts/noodle.ttf");
    font-weight: normal;
    font-style: normal;
  }
#app {
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body{
  padding-top: 70px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  /*font-family: 'pfb';*/
}
ul{
  list-style: none;
}
  a{
    text-decoration: none;
  }

  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  input::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  textarea::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  textarea::-webkit-outer-spin-button {
    -webkit-appearance: none;
  }
  textarea{
    resize: none;
  }

</style>
