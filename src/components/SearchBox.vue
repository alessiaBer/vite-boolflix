<script>
import { store } from '../store';
export default {
    name: 'SearchBox',
    emits: ['searchMovie'],
    data() {
        return {
            store
        }
    }
};
</script>
<template>
    <div class="container">
    <div class="input-group my-3">
      <label class="input-group-text" for="search_input" @click="$emit('searchMovie')"
        >Search
      </label>
      <input
        type="text"
        class="form-control"
        id="search_input"
        placeholder="Search film.."
        v-model="store.query"
        @keyup="$emit('searchMovie')"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
