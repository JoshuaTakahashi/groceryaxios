<template>
  <div id="main">
    <div id="chart">
      <axiosExample></axiosExample>
    </div>
    <div id="chart">
      <PSIIndex></PSIIndex>
    </div>
    <div id="chart">
      <corona></corona>
    </div>
  </div>
</template>

<script>
import axiosExample from "../axiosExample.js";
import PSIIndex from "../PSIIndex.js";
import corona from "../coronaIndex";

export default {
  components: {
    axiosExample,
    PSIIndex,
    corona
  }
};
</script>>
<style scoped>
#main {
  content: "";
  display: table;
  clear: both;
}
#chart {
  height: 240px;
  width: 300px;
  border-style: solid;
  border-color: rgb(155, 84, 84);
  border-width: 1px;
  padding-bottom: 60px;
  float: left;
}
</style>