<template>
    <tr>
        <td class="id-cell">{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.username}}</td>
        <td>{{item.email}}</td>
        <td>{{item.address.zipcode}}, {{item.address.city}}, {{item.address.street}}, {{item.address.suite}} (lat: {{item.address.geo.lat}}/lng: {{item.address.geo.lng}})</td>
        <td>{{item.phone}}</td>
        <td>{{item.website}}</td>
        <td>{{item.company.name}}</td>
        <td>{{item.company.catchPhrase}}</td>
        <td>{{item.company.bs}}</td>
    </tr>
    
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    }
}
</script>

<style>

</style>