<template>
   <MainHeader/>
    <div class="hello">
      <h1>This is homepage</h1>
      <router-link to="login">
        <button>Login</button>
      </router-link>
    </div>
  </template>
  <script>

   import MainHeader from "../components/MainHeader.vue"

  export default {
    name: 'HomePage',
    components:{
      MainHeader
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  .hello{
    display: flex;
    width: 100%;
    padding: 20px;
    flex-direction: column;
  }
  a{
      margin: 20px;
  }
  button{
    cursor: pointer;
    width: 100px;
    height: 30px;
    border-radius: 30px;
    outline: none;
    border: none;
    background-color: rgb(170, 235, 255);
  }
  button:hover{
    border: 1px solid black;
  }
  </style>
  