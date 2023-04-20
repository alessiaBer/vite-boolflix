<script>
import { store } from '../store';
export default {
    name: 'SearchBox',
    emits: ['searchMovie'],
    data() {
        return {
            store,
            showSearchBox: false
        }
    },
    methods: {
    }
};
</script>
<template>
  <div class="searchbox">
    <font-awesome-icon icon="fa-solid fa-magnifying-glass" 
    class="text-white glass-icon"
    v-if="!showSearchBox"
    @click="showSearchBox = true"/>
    <!--TODO CLICK-OUTSIDE-->
    <div class="input-group" v-else>
      <label class="input-group-text border-0 bg-transparent" for="search_input" @click="$emit('searchMovie')"
        ><font-awesome-icon icon="fa-solid fa-magnifying-glass" class="text-white"/>
      </label>
      <input
        type="text"
        class="form-control bg-transparent"
        id="search_input"
        placeholder="Titles, people, genres"
        v-model="store.query"
        @keyup="$emit('searchMovie')" 
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
