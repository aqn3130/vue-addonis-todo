<template>
    <v-toolbar color='green' dense>
      <v-toolbar-title class="mr-4">VUE TODO</v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat color='green'>
        <v-icon class="mr-2">playlist_add_check</v-icon>
        Projects
        </v-btn>
    </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat color='green' class="mr-2" to='/Register'>
        <v-icon class="mr-2">account_box</v-icon>
        Register
      </v-btn>
      <v-btn flat color='green' class="mr-2">
        <v-icon class="mr-2">fingerprint</v-icon>
        Login
      </v-btn>
      <v-btn flat color='green' class="mr-2">
        <v-icon class="mr-2">exit_to_app</v-icon>
        Logout
      </v-btn>
    </v-toolbar-items>
    </v-toolbar>
</template>
<script>
export default {
};
</script>
