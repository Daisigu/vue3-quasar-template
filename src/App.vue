<template>
  <q-layout view="hHh Lpr lff" class="shadow-2">
    <mainHeader />
    <q-page-container>
      <q-page padding>
        <router-view />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
<script setup lang="ts">
import mainHeader from './shared/components/main-header.vue';
</script>
