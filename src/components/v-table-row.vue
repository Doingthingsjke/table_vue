<template>
  <div class="v-table-row">
    <div class="row row_name" contenteditable>{{ row_data.name }}</div>
    <div class="row row_position" contenteditable>{{ row_data.position }}</div>
    <div class="row row_salary" contenteditable>{{ row_data.salary }}</div>
    <div class="row row_status" contenteditable>{{ row_data.status }}</div>
    <div class="row row_date" contenteditable>{{ row_data.employment_date }}</div>
  </div>
</template>

<script>
export default {
  name: "v-table-row",
  props: {
    row_data: {
      type: Object,
      default: () => {
        return {};
      }
    }
  },
  data() {},
  computed: {}
};
</script>

<style>
.v-table-row {
  display: flex;
  justify-content: space-around;
}
.row {
  text-align: left;
  padding: 8px 16px;
  flex-basis: 20%;
}
</style>
