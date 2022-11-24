<template>
  <div class="app">
    <SideBar />
    <RouterView />
    <Footer />
  </div>
</template>

<script>
import SideBar from '@/components/SideBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    SideBar,
    Footer
  }
} 

</script>

<style lang="scss">
:root {
  --primary: #dede4a;
  --secondary: #4ade80;
  --tertiary: #de4a4a;
  --grey: #64748b;
  --dark: #1e293b;
  --dark-alt: #334155;
  --light: #f1f5f9;
  --sidebar-width: 300px;
}
* {
  box-sizing: border-box;
  font-family: 'Fira sans', sans-serif;
}

body{
  margin: 0px; 
  padding: 0px;
  background: var(--light);
}
button{ 
  cursor: pointer;
  appearance: none;
  border: none;
  outline: none;
  background: none;
}

p, h3 {
  color: var(--light);
}
.app{
  display: flex;
  main{
    flex: 1 1 0;
    padding:  1.5rem 1.5rem 1rem 9rem;

    @media(max-width: 768px){
      padding-left: 7rem;
    }
  }
}

#app {

  .header{
    nav {
      a.router-link-exact-active {
        /*?????*/
        color: #ff0c0c;
      }
    }
  }
}

</style>
