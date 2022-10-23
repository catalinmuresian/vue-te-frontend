<template>
  <div id="container" class="wrapper">
    <h1>Tailor</h1>
    <div id="myGridContainerLocal" class="headerCont">
      <div class="myGridColumn grid-cell-1"></div>
      <div class="myGridColumn">
        <h2>Personality</h2>
      </div>
      <div class="myGridColumn">
        <h2>Certificate</h2>
      </div>
      <div class="myGridColumn">
        <h2>Skill</h2>
      </div>
      <div class="myGridColumn">
        <h2>Resources</h2>
      </div>
    </div>
    <div id="myGridContainerLocal" class="pink">
      <div class="myGridColumn grid-cell-1">
        <b>Selected skills</b>
      </div>
      <div class="myGridColumn">
        <p>Attention to detail</p>
      </div>
      <div class="myGridColumn">
        <p>Food safety knowledge certification</p>
      </div>
      <div class="myGridColumn">
        <p>Attention to detail</p>
      </div>
      <div class="myGridColumn">
        <p>Self employed</p>
      </div>
    </div>
    <div id="myGridContainerLocal" class="yellow">
      <div class="myGridColumn grid-cell-1">
        <b>Similar skills</b>
      </div>
      <div class="myGridColumn">
        <p>Attention to detail</p>
      </div>
      <div class="myGridColumn">
        <p>Food safety knowledge certification</p>
      </div>
      <div class="myGridColumn">
        <p>Attention to detail</p>
      </div>
      <div class="myGridColumn">
        <p>Self employed</p>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style  scoped>
#myGridContainerLocal {
  display: grid;
  grid-template-columns: 1fr 2fr 2fr 2fr 2fr;
}

.myGridColumn {
  padding: 5px;
}

.grid-cell-1 {
  transform: rotate(-90deg);
  text-align: center;
  margin: auto;
}
.headerCont {
  max-height: 72px;
}
.pink {
  background-color: #ff839929;
  min-height: 140px;
}
.yellow {
  background-color: #fdfb7b29;
  min-height: 140px;
}
</style>