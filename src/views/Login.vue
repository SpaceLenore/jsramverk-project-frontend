<template>
    <div class="view">
        <div class="content">
            <div class="card half-width split">
                <div class="half-card dark">
                    <h1>Login</h1>
                    <p>
                        By logging in you get access to all your online wallets and trading options.
                        Shitty economical misstakes right at your fingertips accessible from anywhere in the world!
                    </p>
                </div>
                <div class="half-card light">
                    <div class="login-form">
                        <form @submit.prevent="sendForm">
                            <input type="email" placeholder="Email" v-model="email">
                            <input type="password" placeholder="Password" v-model="password">
                            <input type="submit" value="Login">
                        </form>
                    </div>
                    <div v-if="error" class="error">
                        {{error}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Api from "@/Apicaller.js";

export default {
    name: "login",
    data() {
        return {
            email: null,
            password: null,
            error: null
        }
    },
    methods: {
        async sendForm() {
            if (!this.email || !this.password) {
                this.error = "All fields must be filled out";
                return false;
            }

            this.error = null;
            let response = await Api.req("/login" , 'POST', false, {
                email: this.email,
                password: this.password
            });

            console.log(response);
        }
    }
};
</script>

<style>
    .login-form {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .login-form form {
        display: flex;
        flex-direction: column;
    }

    .login-form form input {
        margin: 0.5rem auto;
        padding: 5px;
        border: 1px solid #485460;
        background: #d2dae2;
        color: #485460;
    }

    .error {
        color: #ff3f34;
        width: 100%;
        text-align: center;
    }
</style>