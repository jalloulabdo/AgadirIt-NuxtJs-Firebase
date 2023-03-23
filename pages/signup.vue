<template>
    <div class="limiter">
        <div class="container-login100" style="background-image: url('img/bg-01.jpg');">
            <div class="wrap-login100 p-l-80 p-r-80 p-t-2 p-b-16">
                <div class="back"><nuxt-link to="/"><i class="bi bi-arrow-left">Back to Home</i></nuxt-link></div>
                
                    <span class="login100-form-title p-b-20">
                        Sign Up With
                    </span>
                    <div class="login100-form validate-form flex-sb flex-w">
                        <a @click="facebookLogin" class="btn-face m-b-20">
                        <i class="fa fa-facebook-official"></i>
                        Facebook
                        </a>

                        <a @click="googleLogin" class="btn-google m-b-20">
                            <img src="img/icons/icon-google.png" alt="GOOGLE">
                            Google
                        </a>
                    </div>
                    
                    <form class="login100-form validate-form flex-sb flex-w"  @submit.prevent="signup">
                    <div class="p-t-10 p-b-9">
                        <span class="txt1">
                            Username
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Username is required">
                        <input class="input100" type="text" name="username" v-model="auth.username">
                        <span class="focus-input100" > </span>
                    </div>

                    <div class="p-t-10 p-b-9">
                            <span class="txt1">
                                Email
                            </span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Email is required">
                            <input class="input100" type="text" name="email" v-model="auth.email">
                            <span class="focus-input100" ></span>
                        </div>

                    <div class="p-t-10 p-b-9">
                        <span class="txt1">
                            Password
                        </span>
                    </div>
                    <div class="wrap-input100 validate-input" data-validate="Password is required">
                        <input class="input100" type="password" name="password" v-model="auth.password">
                        <span class="focus-input100" ></span>
                    </div>

                    <div class="p-t-10 p-b-9">
                            <span class="txt1">
                                Repeat your password
                            </span>
                        </div>
                        <div class="wrap-input100 validate-input" data-validate="Password is required">
                            <input class="input100" type="password" name="confirmPassword" v-model="auth.registrationPassword">
                        <span class="focus-input100"></span>

                        </div>

                    <div class="container-login100-form-btn m-t-17">
                        <button type="submit" class="login100-form-btn">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script >

export default {
    data() {
        return {
        snackbar: false,
        snackbarText: 'No error message',
        auth: {
          username:'',
          email: '',
          password: '',
          registrationPassword: ''
        }
      }
    },
    methods: {
    async signup() {
        if (this.auth.password === this.auth.registrationPassword) {
            let that = this
            const userCreds = await  this.$fire.auth.createUserWithEmailAndPassword(this.auth.email, this.auth.password)
            .then((user) => {
                //we are signed in
                $nuxt.$router.push('/')
            })
            .catch(function (error){
                that.snackbarText = error.message
                that.snackbar = true
            })
        }
        
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
      }
    }
}
</script>