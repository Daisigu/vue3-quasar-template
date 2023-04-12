

<script setup lang="ts">
import { useUsersStore } from "@/stores/users";
import { storeToRefs } from "pinia";
const usersStore = useUsersStore();
const { fetchUsers } = usersStore;
const { users, selectedUser, loading, searchValue } = storeToRefs(usersStore)
</script>
<template>
    users list
</template>