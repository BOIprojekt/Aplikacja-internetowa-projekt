<template>
  <div class="profil">
      <profil-bar></profil-bar> <br>
      <measures-list></measures-list> <br>
      <tasks-list></tasks-list>
      <br><br><br><br><br><br><br><br><br><br>
  </div>
</template>


<script setup>
import ProfilBar from '../components/ProfilBar.vue';
import TasksList from '@/components/TasksList.vue';
import MeasuresList from '@/components/MeasuresList.vue';
</script>