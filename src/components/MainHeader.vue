<template>
    <header class="header">
        <h1>Header</h1>
    </header>
  </template>
  
  <script>
  export default {
    name: 'MainHeader'
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style>
  .header{
    width: 100%;
    height: 150px;
    background-color: black;
    margin-bottom: 50px;
    background: url("../assets/bg.jpg");
    box-shadow: rgba(255, 232, 168, 0.664) 0px 1px 1px 0px inset, rgba(255, 232, 168, 0.664) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>
  