<template>
    <div :class="$style.referenceForm">
      <h3>Reference {{ index }}</h3>
      <FormItem label="Name" type="input" placeholder="Enter name..." />
      <FormItem label="Phone Number" type="input" placeholder="Enter phone number..." />
      <FormItem label="Email" type="input" placeholder="Enter email..." />
      <FormItem label="Relationship" type="dropdown" placeholder="Choose relationship..." />
    </div>
  </template>
  
  <script lang="ts">
  import FormItem from "./FormItem.vue";
  
  export default {
    props: {
      index: Number,
    },
    components: {
      FormItem,
    },
  };
  </script>
  
  <style module>
  .referenceForm {
    margin-bottom: 30px;
  }
  </style>