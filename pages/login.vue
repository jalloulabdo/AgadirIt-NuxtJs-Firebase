<template>
    <div class="limiter">
    		<div class="container-login100" style="background-image: url('img/bg-01.jpg');">
    			<div class="wrap-login100 p-l-80 p-r-80 p-t-2 p-b-16">
                    <div class="back"><nuxt-link to="/"><i class="bi bi-arrow-left">Back to Home</i></nuxt-link></div>
    			
    					<span class="login100-form-title p-b-53">
    						Sign In With
    					</span>
              <div class="login100-form validate-form flex-sb flex-w">
                <a @click="facebookLogin" class="btn-face m-b-20">
    						<i class="fa fa-facebook-official"></i>
    						Facebook
                </a>

                <a  @click="googleLogin" class="btn-google m-b-20">
                  <img src="img/icons/icon-google.png" alt="GOOGLE">
                  Google
    					</a>
              </div>
    					
              <form class="login100-form validate-form flex-sb flex-w" @submit.prevent="login">
    					<div class="p-t-31 p-b-9">
    						<span class="txt1">
    							Username
    						</span>
    					</div>
    					<div class="wrap-input100 validate-input" data-validate = "Username is required">
    						<input class="input100" type="text" name="username" v-model="auth.email" >
    						<span class="focus-input100" ></span>
    					</div>
					
    					<div class="p-t-13 p-b-9">
    						<span class="txt1">
    							Password
    						</span>

    						<a @click="forgotPassword" class="txt2 bo1 m-l-5">
    							Forgot?
    						</a>
    					</div>
    					<div class="wrap-input100 validate-input" data-validate = "Password is required">
    						<input class="input100" type="password" name="password"  v-model="auth.password">
    						<span class="focus-input100" ></span>
    					</div>

    					<div class="container-login100-form-btn m-t-17">
    						<button type="submit" class="login100-form-btn">
    							Sign In
    						</button>
    					</div>

    					<div class="w-full text-center p-t-55">
    						<span class="txt2">
    							Not a member?
    						</span>
                            <nuxt-link to="/signup" class="txt2 bo1">
                                Sign up now
                            </nuxt-link>
    						
    					</div>
    				</form>
    			</div>
    		</div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        snackbar: false,
        snackbarText: 'No error message',
        auth: {
          email: '',
          password: ''
        }
      }
    },
    methods: {
      login() {
        let that = this
        this.$fire.auth.signInWithEmailAndPassword(this.auth.email, this.auth.password)
        .catch(function (error){
          that.snackbarText = error.message
          that.snackbar = true
        }).then((user) => {
          //we are signed in
          $nuxt.$router.push('/')
        })
      },
      githubLogin(){
        let that = this
        const provider = new $nuxt.$fireModule.auth.GithubAuthProvider()
        this.$fire.auth.signInWithPopup(provider)
        .catch(function (error){
          that.snackbarText = error.message
          that.snackbar = true
        }).then((user) => {
          //we are signed in
          $nuxt.$router.push('/')
        })
      },
      facebookLogin(){
        let that = this
        const provider = new $nuxt.$fireModule.auth.FacebookAuthProvider()
        this.$fire.auth.signInWithPopup(provider)
        .catch(function (error){
          that.snackbarText = error.message
          that.snackbar = true
        }).then((user) => {
          //we are signed in
          $nuxt.$router.push('/')
        })
      },
      googleLogin(){
        let that = this
        const provider = new $nuxt.$fireModule.auth.GoogleAuthProvider()
        this.$fire.auth.signInWithPopup(provider)
        .catch(function (error){
          that.snackbarText = error.message
          that.snackbar = true
        }).then((user) => {
          //we are signed in
          $nuxt.$router.push('/')
        })
      },
      forgotPassword() {
        let that = this
        this.$fire.auth.sendPasswordResetEmail(this.auth.email)
        .then(function (){
          that.snackbarText = 'reset link sent to ' + that.auth.email
          that.snackbar = true
        })
        .catch(function (error) {
          that.snackbarText = error.message
          that.snackbar = true
        })
      }
    }
  }
</script>

