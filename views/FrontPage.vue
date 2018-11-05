<template>
    <div class="h-full">
        <h1>{{msg}}</h1>
        <ListItem />
    </div>
</template>

<script>
import ListItem from '~/components/ListItem'
export default {
    data() {
        return {
            msg: 'Hello World'
        }
    },

    components: {
        ListItem,
    }
}
</script>

