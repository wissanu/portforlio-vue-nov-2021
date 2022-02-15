<template>
  <div class="container">
    <div class="navigation" :class="{ active: toggle_nav }">
      <ul>
        <li>
          <router-link to="" id="nav">
            <span class="icon"> <ion-icon name="logo-apple"></ion-icon> </span>
            <span class="title">POS-TOR</span>
          </router-link>
        </li>
        <li :class="{ hovered: position.third_link }">
          <router-link to="/" id="nav" @click="ThirdLink()">
            <span class="icon">
              <ion-icon name="podium-outline"></ion-icon>
            </span>
            <span class="title">ข้อมูลสรุปการขาย</span>
          </router-link>
        </li>
        <li :class="{ hovered: position.fourth_link }">
          <router-link to="/datamanipulate" id="nav" @click="FourthLink()">
            <span class="icon">
              <ion-icon name="bag-handle-outline"></ion-icon>
            </span>
            <span class="title">การจัดการข้อมูลสินค้า</span>
          </router-link>
        </li>
        <li :class="{ hovered: position.fifth_link }">
          <router-link to="/usermanipulate" id="nav" @click="FifthLink()">
            <span class="icon">
              <ion-icon name="person-outline"></ion-icon>
            </span>
            <span class="title">การจัดการข้อมูลสมาชิก</span>
          </router-link>
        </li>
        <li :class="{ hovered: position.second_link }">
          <router-link to="/permission" id="nav" @click="SecondLink()">
            <span class="icon">
              <ion-icon name="lock-closed-outline"></ion-icon>
            </span>
            <span class="title">การกำหนดสิทธิ์</span>
          </router-link>
        </li>
        <li :class="{ hovered: position.first_link }">
          <router-link to="/about" id="nav" @click="FirstLink()">
            <span class="icon">
              <ion-icon name="help-circle-outline"></ion-icon>
            </span>
            <span class="title">เกี่ยวกับเรา</span>
          </router-link>
        </li>
      </ul>
    </div>
    <!-- top navbar and search bar -->
    <div class="main" :class="{ active: toggle_nav }">
      <div class="topbar">
        <!-- toggle bar -->
        <div class="toggle" @click="ToggleNav()">
          <ion-icon name="menu-outline"></ion-icon>
        </div>
        <!-- search bar -->
        <div class="search">
          <label>
            <input type="text" placeholder="ค้นหา..." />
            <ion-icon name="search-outline"></ion-icon>
          </label>
        </div>
        <!-- user image -->
        <div class="user">
          <img src="./assets/logo.png" alt="Profiles" />
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "Event",
  data() {
    return {
      /**
       * state of link
       **/
      toggle_nav: false,
      position: [
        { first_link: false },
        { second_link: false },
        { third_link: false },
        { fourth_link: false },
        { fifth_link: false },
      ],
    };
  },
  methods: {
    ToggleNav() {
      this.toggle_nav = !this.toggle_nav;
    },
    FirstLink() {
      this.position.first_link = true;
      this.position.second_link = false;
      this.position.third_link = false;
      this.position.fourth_link = false;
      this.position.fifth_link = false;
    },
    SecondLink() {
      this.position.first_link = false;
      this.position.second_link = true;
      this.position.third_link = false;
      this.position.fourth_link = false;
      this.position.fifth_link = false;
    },
    ThirdLink() {
      this.position.first_link = false;
      this.position.second_link = false;
      this.position.third_link = true;
      this.position.fourth_link = false;
      this.position.fifth_link = false;
    },
    FourthLink() {
      this.position.first_link = false;
      this.position.second_link = false;
      this.position.third_link = false;
      this.position.fourth_link = true;
      this.position.fifth_link = false;
    },
    FifthLink() {
      this.position.first_link = false;
      this.position.second_link = false;
      this.position.third_link = false;
      this.position.fourth_link = false;
      this.position.fifth_link = true;
    },
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --blue: #287bff;
  --white: #fff;
  --grey: #f5f5f5;
  --black1: #222;
  --black2: #999;
}

body {
  min-height: 100vh;
  overflow-x: hidden;
}

.container {
  position: relative;
  width: 100%;
}

.navigation {
  position: fixed;
  width: 300px;
  height: 100%;
  background: var(--blue);
  border-left: 10px solid(var(--blue));
  transition: 0.5s;
  overflow: hidden;
}

.navigation.active {
  width: 60px;
}

.navigation ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
}

.navigation ul li {
  position: relative;
  width: 100%;
  list-style: none;
  border-top-left-radius: 30px;
  border-bottom-left-radius: 30px;
}

.navigation ul li:hover,
.navigation ul li.hovered {
  background: var(--white);
}

.navigation ul li:nth-child(1) {
  margin-bottom: 40px;
  pointer-events: none;
}

.navigation ul li a {
  position: relative;
  display: block;
  width: 100%;
  display: flex;
  text-decoration: none;
  color: var(--white);
}

.navigation ul li:hover a,
.navigation ul li.hovered a {
  color: var(--blue);
}

.navigation ul li a .icon {
  position: relative;
  display: block;
  min-width: 60px;
  height: 60px;
  line-height: 70px;
  text-align: center;
}

.navigation ul li a .icon ion-icon {
  font-size: 1.75em;
}

.navigation ul li a .title {
  position: relative;
  display: block;
  padding: 0px 10px;
  height: 60px;
  line-height: 60px;
  text-align: start;
  white-space: nowrap;
}

.navigation ul li:hover a::before,
.navigation ul li.hovered a::before {
  content: "";
  position: absolute;
  right: 0;
  top: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 35px 35px 0 10px var(--white);
  /* box-shadow: 35px -35px 5px 5px var(--white); */
  pointer-events: none;
}
.navigation ul li:hover a::after,
.navigation ul li.hovered a::after {
  content: "";
  position: absolute;
  right: 0;
  bottom: -50px;
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 50%;
  /* box-shadow: 35px -35px 0 10px var(--white); */
  box-shadow: 25px -25px 0px 5px var(--white);
  pointer-events: none;
}

/* main */

.main {
  position: absolute;
  width: calc(100% - 300px);
  left: 300px;
  min-height: 100vh;
  background: var(--white);
  transition: 0.5s;
}

.main.active {
  width: calc(100% - 80px);
  left: 80px;
}

.topbar {
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.toggle {
  position: relative;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  cursor: pointer;
}

.search {
  position: relative;
  width: 400px;
  margin: 0 10px;
}

.search label {
  position: relative;
  width: 100%;
}

.search label input {
  width: 100%;
  height: 40px;
  border-radius: 40px;
  padding: 5px 20px;
  padding-left: 35px;
  font-size: 1em;
  outline: none;
  border: 1px solid var(--black2);
}

.search label ion-icon {
  position: absolute;
  top: 0;
  left: 10px;
  font-size: 1.2em;
}

.user {
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
}

.user img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* responsive design */
@media (max-width: 991px) {
  .navigation {
    left: -300px;
  }
  .navigation.active {
    width: 300px;
    left: 0;
  }
  .main {
    width: 100%;
    left: 0;
  }
  .main.active {
    left: 300px;
  }
}

/* @media (max-width: 480px){
  .cardBox{
    grid-template-columns: repeat(1, 1fr);
  }
  .cardHeader h2{
    font-size: 20px;
  }
  .user{
    min-width: 40px;
  }
  .navigation{
    width: 100%;
    left: -100%;
    z-index: 1000;
  }
  .navigation.active{
    width: 100%;
    left: 0;
  }
  .toggle{
    z-index: 10001;
  }
  .main.active .toggle{
    position: fixed;
    right: 0;
    left: initial;
    color: var(--white);
  }
} */
</style>
