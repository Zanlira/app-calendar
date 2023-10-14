<template>
    <v-sheet width="500" class="mx-auto">
        <v-form validate-on="submit lazy" @submit.prevent="submit">
            <v-container>
                <v-row>
                    <v-col cols="12" md="4">
                        <v-text-field v-model="titulo" :rules="tituloRules" :counter="10" label="Titulo"
                            required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field v-model="lastname" :rules="lastNameRules" :counter="10" label="Last name"
                            required></v-text-field>
                    </v-col>

                    <v-col cols="12" md="4">
                        <v-text-field v-model="email" :rules="emailRules" label="E-mail" required></v-text-field>
                    </v-col>
                </v-row>
                <v-container>
                    <v-row justify="space-around">
                        <v-date-picker show-adjacent-months color="primary" locale="es"></v-date-picker>
                    </v-row>
                </v-container>
            </v-container>
            <v-btn type="submit" block class="mt-2" text="Agregar"></v-btn>
        </v-form>

    </v-sheet>
</template>
<script>

export default {
    data() {
        return {
            titulo: '',
            tituloRules: [
                value => {
                    if (value?.length > 3) return true

                    return 'Titulo debe contener almenos 3 letras.'
                },
            ],
            lastname: '',
            lastNameRules: [
                value => {
                    if (/[^0-9]/.test(value)) return true

                    return 'Last name can not contain digits.'
                },
            ],
            email: '',
            emailRules: [
                value => {
                    if (/^[a-z.-]+@[a-z.-]+\.[a-z]+$/i.test(value)) return true

                    return 'Must be a valid e-mail.'
                },
            ],

        }
    },
    methods: {
        async submit() {
            alert('true')
        },
    },
}
</script>