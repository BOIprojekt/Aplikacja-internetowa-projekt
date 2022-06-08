<template>
       <register-comp></register-comp>
       <login-comp></login-comp>
</template>

<script setup>
import RegisterComp from '../components/RegisterComp.vue'
import LoginComp from '../components/LoginComp.vue'
</script>

<style>
.forms {
	display: flex;
    margin-top: 0%;
}
div {
	flex: 1 1 0%;
}
div.register, div.login {
	color: #FFF;
	background-image: linear-gradient(
		to bottom right,
		rgb(46, 209, 245) 0%,
		rgb(7, 126, 134) 75%
	);
}
h2 {
	font-size: 1.75rem;
	text-transform: uppercase;
    margin-bottom: 1rem;
}
input, button {
	appearance: none;
	border: none;
	outline: none;
	background: none;
	display: block;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	font-size: 1.5rem;
	margin-bottom: 2rem;
	padding: 0.5rem 0rem;
}
input [type="text"], [type="password"] {
	opacity: 0.8;
	transition: 0.4s;
}
input:focus([type="text"], [type="password"]) {
	opacity: 1;
}
input::placeholder {
	color: inherit;
}
div.login input[type="text"], [type="password"], 
div.register input[type="text"], [type="password"] {
	color: #010102;
	border-bottom: 2px solid #010102;
}
div.login button:not([type="handleSignOut"]){
	background-color: rgb(46, 209, 245);
	color: #FFF;
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
}
div.register button:not([type="handleSignOut"]) {
	background-color: #FFF;
	color: rgb(46, 209, 245);
	font-weight: 700;
	padding: 1rem 2rem;
	border-radius: 0.5rem;
	cursor: pointer;
}
</style>