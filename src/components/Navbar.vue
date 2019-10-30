<template>
    <div class="navbar-wrap">
        <div class="logo">
            <img class="image" src="@/assets/stonk.png">
            <span class="text">StonkTrader</span>
        </div>
        <div class="navbar-links">
            <router-link class="nav-link" to="/">Home</router-link>
            <router-link class="nav-link" to="/trade">Trade Stonks</router-link>
            <router-link class="nav-link" to="/about">About</router-link>
            <span v-if="!isLoggedIn">
                <router-link class="nav-link" to="/login">Login</router-link>
                <router-link class="nav-link special" to="/signup">Signup</router-link>            
            </span>
            <span v-else>
                <a  class="nav-link">Logout</a>
            </span>
        </div>
    </div>    
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
        isLoggedIn: function() {
            if (window.localStorage.getItem("token") === null) {
                return false;
            } else {
                return true;
            }
        }
    }
}
</script>

<style>
    .navbar-wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #afafaf;
        padding: 0.8rem;
    }

    .logo {
        font-size: 1.5rem;
        font-style: italic;
        display: flex;
        align-items: center;
    }

    .logo .text {
        padding-left: 0.5rem;
    }

    .logo .image {
        height: 2rem;
    }

    .nav-link {
        color: #485460;
        text-decoration: none;
        margin: 0.5rem;
        border-bottom: dotted 1px #485460;
    }

    .nav-link:hover {
        border-bottom: solid 1px #485460;
    }

    .special {
        padding: 0.5rem;
        border: solid 1px #485460;
        border-radius: 4px;
    }

    .special:hover {
        background: #485460;
        color: #fff;
    }
</style>