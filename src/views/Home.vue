<template>
    <div class="view">
        <Navbar></Navbar>
        <div class="content">
            <div class="banner">
                <div class="placement">
                    <div class="card small-card light banner-card">
                        <h1>World Best stonk</h1>
                        <p>
                            The best place to trade stonks. We have all the stonks from
                            the latest and gratest companies such as TechCo, dbwebb, and EvilCo.
                            <br><br>
                        <router-link to="/signup" class="fancy-bt invite-bt">Create Account</router-link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
    name: "home",
    components: {
        Navbar
    }
};
</script>

<style>
    .banner {
        height: 80vh;
        background: url("../assets/stonks.png") center center fixed;
        background-size: cover;
    }

    .placement {
        height: inherit;
        display: flex;
        align-items: center;
    }

    .banner-card {
        box-shadow: none;
    }

    .banner-card h1 {
        margin: 0.1rem;
    }

</style>