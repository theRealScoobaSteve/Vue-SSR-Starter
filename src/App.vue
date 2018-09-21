<script>
import Navbar from "components/navbar.vue";

export default {};
</script>

<template>
  <div id="app">
        <p>
            <router-link to="/">Go To Home</router-link>
        </p>
        <router-view></router-view>
    </div>
</template>
