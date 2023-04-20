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
    <div class="input-group ms-auto">
      <label class="input-group-text" for="search_input" @click="$emit('searchMovie')"
        ><font-awesome-icon icon="fa-solid fa-magnifying-glass" />
      </label>
      <!-- @keyup="$emit('searchMovie')" -->
      <input
        type="text"
        class="form-control"
        id="search_input"
        placeholder="Search film.."
        v-model="store.query"
      />
    </div>
</template>

<style lang="scss" scoped></style>
