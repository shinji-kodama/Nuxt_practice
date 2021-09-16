<template>
    <div class="pt-4 md:pt-6">
    <form
        action="."
        @submit.prevent
    >
        <div class="">
        <label for="" class="py-2 fs-small-regular">Search</label>
        <div class="flex border-b">
            <input
            type="search"
            @keypress.enter="search"
            v-model="input"
            placeholder="Type it in"
            class="outline-none py-4 flex-1 min-w-0 bg-cWhite"
            >

        </div>
        </div>
    </form>
    </div>
</template>

<script>
export default {
  name: 'BaseSearchForm'
}
</script>
