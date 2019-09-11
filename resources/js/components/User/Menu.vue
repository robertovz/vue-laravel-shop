<template>
    
<div class="wrapper" id="app">

  <!-- Navbar -->
  <nav class="main-header navbar navbar-expand bg-white navbar-light border-bottom">

    <!-- Left navbar links -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#"><i class="fa fa-bars"></i></a>
      </li>

      <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
      </li>

    </ul>

    <!-- SEARCH FORM -->

  </nav>
  <!-- /.navbar -->

  <!-- Main Sidebar Container -->
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <!-- Brand Logo -->
    <a href="index3.html" class="brand-link">
      <!-- <img src=" " alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
           style="opacity: .8">-->
      <router-link to="/"><span class="brand-text font-weight-light text-center ml-4 white">Lara Start</span></router-link>
    </a>

    <!-- Sidebar -->
    <div class="sidebar text-left">
      <!-- Sidebar user panel (optional) -->
      <div class="user-panel mt-3 pb-3 mb-3 d-flex">
        <div class="image">
          <img src="/img/profile/profile.png" class="img-circle elevation-2" alt="User Image" style="width: 45px">
        </div>
        <div class="info">
          <a href="#" class="d-block">
              <span class="text-capitalize white">{{ $gate.userName() }}</span>
              <p class="white" v-if="$gate.isAdmin()">Admin</p>
              <p class="white" v-if="$gate.isUser()">User</p>
          </a>
        </div>
      </div>

      <!-- Sidebar Menu -->
      <nav class="mt-2">
        <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
          <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <li class="nav-item white ml-5 brand-text">
              <span class="mx-2">Menu</span>
            </li>
            <li class="nav-item">
            <router-link to="/users" class="nav-link">
                <i class="nav-icon fas fa-tachometer-alt cyan"></i>
                <p class="white">
                Dashboard

                </p>
            </router-link>
            </li>

          <li class="nav-item has-treeview" v-if="$gate.isAdmin()">
            <a href="#" class="nav-link"  @click="openMenu">
              <i class="nav-icon fa fa-cog cyan"></i>
              <p class="white">
                Management
                <i class="right fa fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link to="/users" class="nav-link">
                  <i class="fas fa-users nav-icon"></i>
                  <p class="white">Users</p>
                </router-link>
              </li>
            <li class="nav-item">
            <router-link to="/product" class="nav-link">
                <i class="nav-icon fas fa-cubes"></i>
                <p class="white">
                Products

                </p>
            </router-link>
            </li>

            <li class="nav-item">
            <router-link to="/orders" class="nav-link">
                <i class="nav-icon fas fa-tag"></i>
                <p class="white">
                Orders

                </p>
            </router-link>
            </li>

            </ul>
          </li>

          <li class="nav-item" v-if="$gate.isAdmin()">
                <router-link to="/developer" class="nav-link">
                    <i class="nav-icon fas fa-cogs cyan"></i>
                    <p class="white">
                        Developer
                    </p>
                </router-link>
         </li>

          <li class="nav-item">
                <router-link to="/profile" class="nav-link">
                    <i class="nav-icon fas fa-user cyan"></i>
                    <p class="white">
                        Profile
                    </p>
                </router-link>
         </li>

          <li class="nav-item">
                <router-link to="/userBoard" class="nav-link">
                  <i class="nav-icon fas fa-tags cyan"></i>
                    <p class="white">
                        My Orders
                    </p>
                </router-link>
         </li>
         
          <li class="nav-item">
                <a class="nav-link" href="">
                    <i class="nav-icon fa fa-power-off red"></i>
                    <p class="white">
                        Logout
                    </p>
                 </a>

             <form id="logout-form" style="display: none;">
             </form>
        </li>
         
        </ul>
      </nav>
      <!-- /.sidebar-menu -->
    </div>
    <!-- /.sidebar -->
  </aside>

  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">

    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <router-view :key="$route.fullPath"></router-view>
        <vue-progress-bar></vue-progress-bar>
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- /.content-wrapper -->
  
</div>
</template>

<script>
  export default {
    methods: {
      openMenu() {
        $('.nav-treeview').toggleClass("toggled");
      }
    } 
  }
</script>

<style lang="scss">
    .nav-icon {
        text-align: center;
        width: 1.6rem;
        font-size: 1.2rem;
        margin-right: .2rem!important;
    }
</style>