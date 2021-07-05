<template>
    <div class="container">
        <button @click="initTable()" class="btn">Получить данные</button>
        <tableArea :type="typeCheckbox" :successObjects="successObjects" :errorObject="errorObject" />
    </div>
</template>

<script>

import tableArea from './components/tableArea.vue';

export default {
    components: { tableArea },

    data() {
        return {
            successObjects: [],
            errorObject: '',
            url: 'https://jsonplaceholder.typicode.com/users',
        }
    },

    methods: {
        initTable() {
            fetch(this.url)
                .then(response => response.json())
                .then(object => this.successObjects = object)
                .catch(error => this.errorObject = error);
        }
    },

    computed: {
        typeCheckbox() {
            if (this.errorObject) {
                return 'tableFailed';
            } else if (this.successObjects != 0) {
                return 'tableSuccseess';
            }
        }
    }
}
</script>

<style>

</style>