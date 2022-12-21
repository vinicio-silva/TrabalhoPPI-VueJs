<template>
	<div class="h-100">
		<v-row class="h-100 ma-0">
			<v-col class="login-bg-left" cols="6">
				<img src="src/assets/login/login.png" alt="">
			</v-col>
			<v-col class="login-bg-right" cols="6">
				<v-card class="elevation-12">
					<v-card-text>
						<v-form>
							<v-text-field prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
							<v-text-field id="password" prepend-icon="lock" name="password" label="Password"
								type="password"></v-text-field>
						</v-form>
					</v-card-text>
					<v-card-actions>
						<v-spacer></v-spacer>
						<v-btn class="login-bg-left" variant="flat" to="/dashboard">
							Login
						</v-btn>
					</v-card-actions>
				</v-card>
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
	background: #DDDDDD;
}

.h-100 {
	height: 100%;
}
</style>
