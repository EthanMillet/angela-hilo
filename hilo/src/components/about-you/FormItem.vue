<template>
    <div :class="$style.formItem">
      <label :class="$style.label">{{ label }}</label>
      <div v-if="type === 'dropdown'" :class="$style.dropdown">
        <span>{{ placeholder }}</span>
        <img :class="$style.icon" src="./assets/about-you/" alt="Dropdown Icon" />
      </div>
      <input v-else-if="type === 'input'" :placeholder="placeholder" :class="$style.input" />
      <textarea v-else-if="type === 'textarea'" :placeholder="placeholder" :class="$style.textarea" />
    </div>
  </template>
  
  <script lang="ts">
  export default {
    props: {
      label: String,
      type: String,
      placeholder: String,
    },
  };
  </script>
  
  <style module>
  .formItem {
    margin-bottom: 20px;
  }
  
  .label {
    display: block;
    margin-bottom: 8px;
    font-weight: bold;
    color: #404040;
  }
  
  .dropdown,
  .input,
  .textarea {
    display: flex;
    align-items: center;
    padding: 10px;
    border: 1px solid rgba(64, 64, 64, 0.2);
    border-radius: 8px;
    background-color: rgba(64, 64, 64, 0.05);
    color: rgba(64, 64, 64, 0.8);
  }
  
  .icon {
    margin-left: auto;
    width: 16px;
    height: 16px;
  }
  </style>