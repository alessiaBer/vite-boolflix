<script>
import { store } from '../store';
export default {
    name: 'SelectBox',
    emits: ['chooseMedia'],
    data() {
        return {
            store
        }
    }
};
</script>
<template>
    <div class="select-group">
        <div class="select-type">
          <label>Filter by type</label>
          <select v-model="store.selectedType" @change="$emit('chooseMedia')">
            <option value="movie">Movies</option>
            <option value="tv">Series</option>
          </select>
        </div>
      </div> 
</template>

<style lang="scss" scoped>
@use '../assets/scss/partials/common' as *;
.select-group {
  color: $lighter;
  font-size: 0.8rem;
  select {
    background-color: $darker;
    color: $lighter;
    margin: 0.3rem 0.5rem;
    padding: 0.3rem;
  }
}</style>
