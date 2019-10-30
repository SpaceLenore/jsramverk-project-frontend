<template>
    <div class="view">
        <Navbar></Navbar>
        <div class="content">
            main content goes here
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
    name: "home",
    components: {
        Navbar
    }
};
</script>
