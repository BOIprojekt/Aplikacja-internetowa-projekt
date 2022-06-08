<template>
<div class="stats">
    <h1>Statystyki</h1>
    </div>
    <stats-comp></stats-comp> <br>
     <bmi-view></bmi-view>
     <br><br><br><br><br><br><br><br><br><br><br><br><br>
</template>

<script setup>
import StatsComp from '../components/StatsComp.vue';
import BmiView from '../components/BmiView.vue'
</script>

<style>
.reg2{
  visibility: visible;
}

.topnav {
  background-color: rgb(255, 255, 255);
  overflow: hidden;
}


.topnav a {
  float: left;
  display: block;
  color: #0a0909;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}


.topnav a:hover {
  background-color: rgb(122, 120, 120);
  color: rgb(255, 255, 255);
}

.topnav a.active {
  color: rgb(255, 255, 255);
}



nav {
  visibility: visible;
}

.topnav {
	background-color: rgb(46, 209, 245);
	background-image: linear-gradient(
		to bottom right,
		rgb(46, 209, 245) 0%,
		rgb(7, 126, 134) 100%
	);
  overflow: hidden;
  border: 1px;
  border-style:inherit;
  border-color: white;
  
}

.topnav a {
  float: left;
  display: block;
  color: #0a0909;
  text-align: center;
  text-decoration: none;
  font-size: 17px;
}


.topnav a:hover {
  background-color: rgb(255, 255, 255);
  color: rgb(17, 17, 17);
}

.topnav a.active {
  color: rgb(46, 209, 245);
}

input {
  box-shadow: 3px 3px 4px rgb(20, 20, 20);
}

 button{
     box-shadow: 3px 3px 4px black;
 }

.btn-primary{
    background-color: rgb(46, 209, 245)
}

</style>