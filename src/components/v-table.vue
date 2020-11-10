<template>
  <div class="v-table">
    <div class="v-table__header">
      <p @click="sortByName">ФИО</p>
      <p>Должность</p>
      <p>Оклад</p>
      <p>Статус</p>
      <p>Дата принятия на работу</p>
    </div>
    <div class="v-table__body">
      <v-table-row
        v-for="row in paginatedEmp"
        :key="row.name"
        :row_data="row"
      />
    </div>
    <div class="v-table__pagination">
      <div
        class="page"
        v-for="page in pages"
        :key="page"
        @click="pageClick(page)"
        :class="{ page_selected: page === pageNumber }"
      >
        {{ page }}
      </div>
    </div>
  </div>
</template>

<script>
import vTableRow from "./v-table-row";

export default {
  name: "v-table",
  components: {
    vTableRow
  },
  props: {
    employees_data: {
      type: Array,
      default: () => {
        [];
      }
    }
  },
  data() {
    return {
      empPerPage: 3,
      pageNumber: 1
    };
  },
  computed: {
    pages() {
      return Math.ceil(this.employees_data.length / 3);
    },
    paginatedEmp() {
      let from = (this.pageNumber - 1) * this.empPerPage;
      let to = from + this.empPerPage;
      return this.employees_data.slice(from, to);
    }
  },
  methods: {
    pageClick(page) {
      this.pageNumber = page;
    },
    sortByName() {
      this.employees_data.sort((a, b) => a.name.localeCompare(b.name));
    }
  }
};
</script>

<style>
.v-table {
  max-width: 900px;
  margin: 0 auto;
}
.v-table__header {
  display: flex;
  justify-content: space-around;
}
.v-table__header p {
  display: flex;
  align-items: center;
  flex-basis: 20%;
  text-align: left;
}
.v-table__pagination {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.page {
  padding: 8px;
  border: solid 1px #e7e7e7;
}
.page:hover {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
.page_selected {
  background: #aeaeae;
  cursor: pointer;
  color: #ffffff;
}
</style>
