<template>
	<Title />
	<div class="login-container">
		<form class="form" method="POST" @submit.prevent="loginUser">
			<h2 class="login-title">登入</h2>
			<div class="group">
				<label for="account">帳號:</label>
				<input
					type="email"
					class="account"
					id="account"
					placeholder="帳號:john@mail.com"
					v-model="user.email"
					@focusin="focusValue"
					@focusout="focusValue"
				/>
				<span style="color: #f00" class="account-error" v-if="isNullValue">帳號必填</span>
			</div>
			<div class="group">
				<label for="password">密碼:</label>
				<input
					type="password"
					class="password"
					id="password"
					placeholder="密碼:changeme"
					v-model="user.password"
					@focusin="focusValue"
					@focusout="focusValue"
				/>
				<span style="color: #f00" class="password-error" v-if="isNullValue">密碼必填</span>
			</div>
			<div class="login-wrap">
				<button
					type="submit"
					class="login-button"
					:class="{ success: canSubmit }"
					@click="loginUser"
					@touchstart.stop="loginUser"
					:disabled="!canSubmit"
				>
					登入
				</button>
			</div>
			<span style="color: #fff" v-if="errorMessage">帳號或密碼錯誤</span>
		</form>
	</div>
</template>

<script>
import Title from '../../component/Title.vue';
import { login } from '../../api/index.js';
export default {
	name: 'Login',
	data() {
		return {
			user: {
				email: '',
				password: '',
			},
			isNullValue: false,
			errorMessage: false,
		};
	},
	components: {
		Title,
	},
	computed: {
		canSubmit() {
			const { email, password } = this.user;
			return Boolean(email && password);
		},
	},
	methods: {
		focusValue(e) {
			const allHaveValue = Boolean(this.user.email !== '' && this.user.password !== '');
			const target = e.target;
			switch (target.className) {
				case 'account' || 'password':
					allHaveValue ? (this.isNullValue = false) : (this.isNullValue = true);
					break;
				default:
					break;
			}
		},
		loginUser() {
			login(this.user)
				.then((res) => {
					const { access_token } = res;
					localStorage.setItem('token', access_token);
					this.$router.push('/Home');
					return;
				})
				.catch((err) => {
					this.errorMessage = true;
					setTimeout(() => (this.errorMessage = false), 3000);
					return Promise.reject(err);
				});
		},
	},
};
</script>

<style scoped>
.login-container {
	display: flex;
	justify-content: center;
	align-items: center;
	background: linear-gradient(180deg, #001e40, #002d5f) no-repeat;
	min-height: 100vh;
	color: #e5e57e;
	backdrop-filter: blur(20px);
	overflow-x: hidden;
}
.form {
	width: 500px;
	margin: 0 8px;
}
.form .login-title {
	text-align: center;
	font-size: 1.5rem;
	margin-bottom: 16px;
	padding-bottom: 8px;
	font-weight: bolder;
}
.form label {
	line-height: 2;
	font-size: 1.2rem;
}
.form .account,
.password {
	width: 100%;
	line-height: 2;
	background-color: transparent;
	outline: none;
	border: none;
	border-bottom: 1px solid #e5e57e;
	color: #fff;
	font-size: 1.5rem;
	border-radius: 0;
}
.form .group {
	margin-bottom: 32px;
}
.login-wrap {
	display: flex;
	justify-content: center;
}
.login-button {
	outline: none;
	width: 20%;
	padding: 16px 0;
	color: #fff;
	font-size: 1.2rem;
	border: none;
	border-radius: 8px;
	box-shadow: 0 0 5px #001e40;
	cursor: pointer;
	opacity: 1;
}
.success {
	background-color: rgb(15, 191, 15);
}
.account-error,
.password-error {
	padding: 8px 0;
	display: block;
	font-size: 1.2rem;
	position: absolute;
}
.login-button:disabled {
	cursor: no-drop;
}
@media screen and (max-width: 820px) and (min-width: 375px) {
	.form {
		min-width: 200px;
		overflow: hidden;
	}
	.form label {
		display: block;
		font-size: 1.2rem;
		margin-left: 1rem;
	}
	.form .account,
	.password {
		width: 90%;
		margin-left: 1rem;
	}
}
</style>
