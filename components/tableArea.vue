<template>
    <div>
        <table v-if="type == 'tableSuccseess'"  class="table">
            <tr class="table-header">
                <th rowspan="2">id</th>
                <th rowspan="2">name</th>
                <th rowspan="2">username</th>
                <th rowspan="2">email</th>
                <th rowspan="2">address</th>
                <th rowspan="2">phone</th>
                <th rowspan="2">website</th>
                <th colspan="3">company</th>
            </tr>
            <tr class="table-header">
                <th>name</th>
                <th>catchPhrase</th>
                <th>bs</th>
            </tr> 
            <item v-for="item of successObjects" :key="item.id" :item="item"/>
        </table>
        <p v-if="type == 'tableFailed'" class="error">Ошибка, запрос не отработан ({{errorObject.message}})</p>
    </div>
</template>

<script>

import item from './item.vue';

export default {

    components: { item },

    props: {
        type: {
            type: String,
            default: 'hidden'
        },
        successObjects: {
            type: Array,
        },
        errorObject: {
            type: String.value
        }
    }
}
</script>

<style>

</style>