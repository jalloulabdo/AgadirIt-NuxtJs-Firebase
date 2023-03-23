export default function ({app, route, redirect}){
    
    if (route.path === '/login') {
      //we are on a protected route
      if(!app.$fire.auth.currentUser) {
       
      }
    } else if (route.path !== '/login') {
      if(!app.$fire.auth.currentUser) {
        
      } else {
        
      }
    }
  }