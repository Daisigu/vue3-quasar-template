

<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
import { storeToRefs } from "pinia";

const usersStore = useUsersStore();
const { selectedUser } = storeToRefs(usersStore);
</script>
<template>
    users details
</template>