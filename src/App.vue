<template>
    <AppMenu />
    <RouterView />
</template>

<script setup lang="ts">
import { ref, PropType, watch, computed } from 'vue';
import { RouterView } from 'vue-router';

const props = defineProps({
    item: {
        type: String,
        required: true,
    },
});
</script>
