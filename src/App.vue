<template>
  <v-app>
    <v-main>
      <v-app-bar :elevation="7">
        <v-btn to="/" class="ma-2"><v-icon start icon="mdi mdi-home"></v-icon>
          Inicio
        </v-btn>
        <v-btn to="/Scheduler" class="ma-2"><v-icon start icon="mdi mdi-calendar-range"></v-icon>
          calendario
        </v-btn>

        My app
        <template v-slot:append>
          <v-btn class="ma-2"><v-icon start icon="mdi mdi-logout"></v-icon>
          </v-btn>
        </template>

      </v-app-bar>
      <router-view />
      <v-footer>
        <v-col class="text-center mt-4" cols="12">
          {{ new Date().getFullYear() }} — <strong>Calendar by Zantlira</strong>
        </v-col>
      </v-footer>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
}
</script>
