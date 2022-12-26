<template>
	<v-toolbar outlined elevation="2" color="white" class="pa-2 toolbar">
    <v-row class="justify-between">
      <v-col>
        <v-btn variant="plain" height="70px" class=" text-h4 font-weight-bold brand-color title" to="/">
        Agendify
      </v-btn>
      </v-col>
      <v-col class="d-flex justify-end">
        <v-btn stacked variant="outlined" class="align-self-center" height="45px" to="/login">
          Login
        </v-btn>
        <v-btn stacked variant="flat" height="45px" class="px-4 mx-3 button-color align-self-center">
          Cadastrar
        </v-btn>
      </v-col>
    </v-row>
	</v-toolbar>

  <div>
    <h1 class="title-home"><strong>Lorem ipsum dolor sit amet, consectetur.</strong></h1>
    <h2 class="sub-title">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </h2>

    <button class="fazer-reserva text-white">Fazer reserva!</button>
    <button class="encontrar-servico">Encontrar Serviços</button>
  </div>

  <div>
      <h2 class="profissional-text">Escolha o profissional</h2>
      <img src="src/assets/home/arrow.png" class="arrow-profissional">
      <img src="src/assets/home/escolha-profissional.png " alt="profissional choose" class="img-prof-choose">
  </div>

  <div>
    <h2 class="reserve-text">Reserve um horário</h2>
    <img src="src/assets/home/arrow2.png" alt="arrow" class="arrow-reserve">
    <img src="src/assets/home/reserva-horario.png" alt="profissional choose" class="img-reserva-horario">
  </div>

</template>

<script>
export default {

}
</script>
<style scoped>

.toolbar{
  position:relative;
  z-index:1;
}
.button-color {
	background: #1C10DA;
	color: #FFFFFF;
}

.brand-color {
  color: #1C10DA;
}

.img-prof-choose{
  position:absolute;
  z-index:0;
  left: 73.91%;
  right: -6.43%;
  top: -3.98%;
  bottom: 47.11%;
}

.img-reserva-horario{
  position: absolute;
  width: 639px;
  height: 462px;
  left: 906px;
  top: 571px;
}

.title-home{

  position: absolute;
  width: 634px;
  height: 290px;
  left: 30px;
  top: 199px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  font-size: 70px;
  line-height: 60px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.sub-title{
  position: absolute;
  width: 592px;
  height: 134px;
  left: 51px;
  top: 473px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  font-size: 32px;
  line-height: 39px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.arrow-profissional{
    position: absolute;
    width: 110.29px;
    height:40.1px;
    left: 1272.69px;
    top: 250px;
    transform: rotate(2.01deg);
}

.profissional-text{
  position: absolute;
  width: 336px;
  height: 41px;
  left: 1019.36px;
  top: 200px;

  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  transform: rotate(0.5deg);
}

.arrow-reserve{
  box-sizing: border-box;

  position: absolute;
  left: 1152.62px;
  top: 481px;

  transform: rotate(5.24deg);
}

.reserve-text{
  position: absolute;
  width: 303px;
  height: 41px;
  left: 900.36px;
  top: 430px;

  font-family: 'Comic Neue';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;

  transform: rotate(0.5deg);
}

.fazer-reserva{
  position: absolute;
  width: 350px;
  height: 89px;
  left: 170px;
  top: 646px;

  background: #1C10DA;
  border-radius: 10px;
}

.encontrar-servico{
  box-sizing: border-box;
  position: absolute;
  width: 350px;
  height: 89px;
  left: 170px;
  top: 762px;
  background: #FFFFFF;
  border: 1px solid #CCCCCC;
  border-radius: 10px;
}

</style>
