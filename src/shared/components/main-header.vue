<template>
    <div>
        <q-header elevated class="bg-primary">
            <q-toolbar>
                <q-btn class="q-mr-md" flat @click="drawerLeft = !drawerLeft" dense icon="menu" />
                <div class="row col items-center">
                    <q-toolbar-title class="col"> vue3-quasar-template</q-toolbar-title>
                    <div class="col row justify-center gt-sm">
                        <ul class="row">
                            <li class="q-mr-md"><q-btn flat>Link</q-btn></li>
                            <li class="q-mr-md"><q-btn flat>Link 2</q-btn></li>
                            <li class="q-mr-md"><q-btn flat>Link 3</q-btn></li>
                            <li class="q-mr-md"><q-btn flat>Link 4</q-btn></li>
                        </ul>
                    </div>
                    <div class="col row justify-end gt-sm">
                        Logout
                    </div>
                </div>
            </q-toolbar>

        </q-header>

        <q-drawer v-model="drawerLeft" :width="200" class="bg-primary text-white">
            <q-scroll-area class="fit">
                <nav class="q-pa-md side-nav">
                    <ul>
                        <li>
                            <q-icon name="local_shipping" /> <router-link class="nav-link" to="/">Home</router-link>
                        </li>
                        <li>
                            <q-icon name="local_shipping" /> <router-link class="nav-link" to="/users">Users</router-link>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <q-icon name="local_shipping" /> <router-link class="nav-link" to="/login">Login</router-link>
                        </li>
                    </ul>
                </nav>
            </q-scroll-area>
        </q-drawer>
    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const drawerLeft = ref(false)
</script>
<style lang="scss">
.nav-link {
    color: white;
    font-size: 16px;
}

.side-nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    width: 100%;

    position: absolute;

    &>ul>li {
        margin-bottom: 4px;

        &:hover {
            opacity: 0.8;
        }
    }
}
</style>