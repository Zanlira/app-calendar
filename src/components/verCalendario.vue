<template>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Calories
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in desserts" :key="item.name">
                <td>{{ item.name }}</td>
                <td>{{ item.calories }}</td>
            </tr>
        </tbody>
    </v-table>
</template>
<script setup>
import { useDate } from 'vuetify/labs/date'

const date = useDate()
const formatted = date.format('2010-04-13 00:00:00', 'fullDateWithWeekday')
console.log(formatted) 
</script>