<template>
    <div class="view">
        <Navbar></Navbar>
        <div class="content">
            <div class="card half-width split">
                <div class="half-card dark">
                    <h1>Sign up today</h1>
                    <p>
                        Get the best deals on stonks! Buy, sell, walk around with a breifcase and suit,
                        look important, be stressed, email - at all times, interupt every conversation with 
                        "sorry I gotta take this, it's my boss." and much more! Sign up to day to get the latest
                        Stonk markets!
                    </p>
                </div>
                <div class="half-card light">
                    <div class="signup-form">
                        <form @submit.prevent="sendForm">
                            <input type="text" placeholder="Name">
                            <input type="email" placeholder="Email">
                            <input type="password" placeholder="Password">
                            <input type="password" placeholder="Password (again)">
                            <input type="submit" value="Sign up!">
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";

export default {
    name: "signup",
    components: {
        Navbar
    },
    data() {
        return {

        }
    },
    methods: {
        sendForm: function() {

        }
    }
};
</script>

<style>
    .signup-form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .signup-form form {
        display: flex;
        flex-direction: column;
    }

    .signup-form form input {
        margin: 0.5rem auto;
        padding: 5px;
        border: 1px solid #485460;
        background: #d2dae2;
        color: #485460;
    }
</style>