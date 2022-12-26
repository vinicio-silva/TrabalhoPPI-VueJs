<template>
	<div class="h-100">
		<v-row class="h-100 ma-0">
			<!-- parte da esquerda -->
			<v-col class="login-bg-left" cols="6">
				<img src="src/assets/login/login.png" alt="">
				<h1 class="title-login"><strong>Todos os seus agendamentos em um só lugar</strong></h1>
				<h2 class="sub-title">Se inscreva e comece agora a fazer suas reservas!</h2>
			</v-col>

			<!-- parte da direita -->
			<v-col class="login-bg-right" cols="6">
				<img class="logo" src="src/assets/logo.png">
				<p class="titulo">Olá, bem vindo!</p>
				<v-form>
					<v-label class="lab">Email</v-label>
					<v-text-field class="box" prepend-icon="person" name="login" type="text"></v-text-field>
					<v-label class="lab">Senha</v-label>
					<v-text-field class="box" id="password" prepend-icon="lock" name="password" type="password"></v-text-field>
					<input class="cb" type="checkbox" id="keepConnected">
					<label style="margin-left: 1%;" for="keepConnected"> Mater Conectado</label>
					<a class="esqueciSenha" href="https://ufu.br/">Esqueci a senha!</a><br>
					<button class="Entrar">Entrar</button>
				</v-form>
				<h2 class=""><span>ou</span></h2>

				<a class="google" href="http://google.com"><img src="src/assets/login/🦆 icon _google_.svg"></a>
				<a class="face" href="http://www.facebook.com"><img src="src/assets/login/🦆 icon _facebook_.svg"></a>
				<a class="apple" href="http://www.facebook.com"><img src="src/assets/login/ic_baseline-apple.svg"></a>

				<p class="ainda" >Ainda não tem conta?
					<a style="color: #3F72AF" href="https://ufu.br/">Crie uma conta</a>
				</p>
			</v-col>
		</v-row>
	</div>
</template>
<script>
export default {

}
</script>

<style scoped>
.login-bg-left {
	background: #6C63FF;
}

.login-bg-right {
	background: #F2F2F2;
}

.h-100 {
	height: 100%;
}

.logo{
	display: block;
	margin-top: 5%;
	margin-left: auto;
	margin-right: auto;
	width: 15%;
}

.titulo{
	margin-top: 3%;
	text-align: center;
	font-size: 150%;
}

.lab{
	margin-top: 3%;
	margin-left: 15%;
}

.box{
	margin-left: auto;
	margin-right: auto;
	width: 80%;
}

.cb{
	transform: scale(1.5);
	margin-left: 15%;
	margin-top: 1%;
}

.esqueciSenha{
	margin-left: 41%;
	color: #3F72AF;
}

.Entrar{
	width: 75%;
	height: 65px;
	margin-top: 5%;
	margin-left: 15%;

	background: #6c63fe;
	border-radius: 10px;

	color: white;
	font-size: larger;
}

h2 {
   width: 75%;
   text-align: center;
   margin-top: 5%;
   border-bottom: 1px solid #acabab;
   line-height: 0.1em;
   margin-left: 15%;
}

h2 span {
    background:#F2F2F2;
	color: #acabab;
	font-size: medium;
    padding:0 6px;
}

.google{
	position: absolute;
	left: 66%;
	top: 75%;
}

.face{
	position: absolute;
	left: 74.5%;
	top: 75%;
}

.apple{
	position: absolute;
	left: 83%;
	top: 75%;
}

.ainda{
	margin-top: 15%;
	text-align: center;
}

.title-login{

	position: absolute;
	width: 634px;
	height: 290px;
	left: 30px;
	top: 250px;

	font-family: 'Inter';
	font-style: normal;
	font-weight: 700;
	font-size: 70px;
	line-height: 90px;
	display: flex;
	align-items: center;
	text-align: left;

	color: white;
}

.sub-title{
  position: absolute;
  width: 592px;
  height: 134px;
  left: -240px;
  top: 473px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: left;

  color: white;
}

</style>
