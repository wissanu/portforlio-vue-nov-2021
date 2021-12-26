<template>
  <div class="product">
    <h2>เพิ่มข้อมูลสินค้าใหม่</h2>
    <!-- create new products -->
    <h2>ข้อมูลสินค้า</h2>
    <div class="product-container">
      <div class="product-card" v-for="product in products" :key="product.id">
        <div class="pro-img">
          <img src="../assets/shanom.png" alt="">
        </div>
        <div class="pro-tex">
          <p><b><u>{{product.title}}</u></b></p>
        </div>
        <div class="pro-content">
          <p>ราคา:</p> <input type="text" :value="product.price">
          <p>คงเหลือ:</p> <input type="text" :value="product.remaining">
          <p>ราคาต้นทุน:</p> <input type="text" :value="product.cost">
        </div>
      </div>
    </div>
    <div class="updateBtn">
      <!-- <button class="learn-more">อัพเดทข้อมูล</button> -->
      <button>อัพเดทข้อมูล</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Header from '@/components/Header.vue'; 

@Options({
  components: {
    Header,
  },
  data() {
    return {
      products: [
        {
          id: 1,
          title: "ชาเขียว",
          price: 19,
          remaining: 20,
          cost: 2
        },
        {
          id: 2,
          title: "ชาไทย",
          price: 19,
          remaining: 31,
          cost: 2
        },
        {
          id: 3,
          title: "ชากุหลาบ",
          price: 25,
          remaining: 1,
          cost: 2
        },
        {
          id: 4,
          title: "ช็อคโก้บานาน่า",
          price: 30,
          remaining: 12,
          cost: 2
        },
        {
          id: 5,
          title: "กาแฟร้อน",
          price: 45,
          remaining: 102,
          cost: 2
        },
        {
          id: 6,
          title: "ชาสตอเบอรี่",
          price: 19,
          remaining: 20,
          cost: 2
        },
        {
          id: 7,
          title: "บราวนี่ช็อคโกแลต",
          price: 35,
          remaining: 5,
          cost: 2
        }
      ]
    }
  }
})
export default class DataManipulate extends Vue {}
</script>

<style scoped>

.product{
  position: relative;
  width: 100%;
  padding: 20px;
}

.product .product-container{
  position: relative;
  width: 100%;
  padding-top: 40px;  
  display: grid;
  grid-template-columns: repeat(5,1fr);
  grid-gap: 30px;
}

.product .nwproduct-container{
  position: relative;
  width: 100%;
  padding-top: 40px;  
  display: grid;
  grid-template-columns: repeat(2,1fr);
  grid-gap: 30px;
}

.product h2 {
  font-weight: 600;
  color: var(--blue);
}

.product-card{
  position: relative;
  display: grid;
  /* min-height: 500px; */
  background: var(--white);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: 20px;
}

.nwpro-content {
  position: relative;
  display: grid;
}


.pro-img {
  position: relative;
  width: 100%;
  min-height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.product-container .product-card .pro-img img{
  position: relative;
  background: cadetblue;
  -o-object-fit: cover;
     object-fit: cover;
  width: 100%;
  height: 100%;
}

.pro-tex {
  padding-top: 20px;
  padding-bottom: 20px;
}

.pro-tex p:nth-child(1) {
  text-align: center;
}

.pro-content p {
  display: inline-block;
  width: 48%;
  line-height: 2em;
}

.pro-content input {
  display: inline-block;
  width:48%;
  line-height: 2em;
}

input[type=text]{
  border:2px solid #aaa;
  border-radius:4px;
  margin:4px 0;
  outline:none;
  padding-left:8px;
  box-sizing:border-box;
  transition:.3s;
}
  
input[type=text]:focus{
  border-color:dodgerBlue;
  box-shadow:0 0 8px 0 dodgerBlue;
}

.updateBtn {
  padding: 20px 0 20px 0;
}
/* 
.updateBtn button {
  position: relative;
  display: inline-block;
  cursor: pointer;
  outline: none;
  border: 0;
  vertical-align: middle;
  text-decoration: none;
  font-size: inherit;
  font-family: inherit;
  width: 15%;
}
button.learn-more {
  font-weight: 600;
  color: #fff;
  text-transform: uppercase;
  padding: 1.25em 2em;
  background: #287bff;
  border: 2px solid #4389f2;
  border-radius: 0.75em;
  transform-style: preserve-3d;
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), background 150ms cubic-bezier(0, 0, 0.58, 1);
}
button.learn-more::before {
  position: absolute;
  content: "";
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: #3d8aff;
  border-radius: inherit;
  box-shadow: 0 0 0 2px #9ac0f9, 0 0.625em 0 0 #9ac0f9;
  transform: translate3d(0, 0.75em, -1em);
  transition: transform 150ms cubic-bezier(0, 0, 0.58, 1), box-shadow 150ms cubic-bezier(0, 0, 0.58, 1);
}
button.learn-more:hover {
  background: #4389f2;
  transform: translate(0, 0.25em);
}
button.learn-more:hover::before {
  box-shadow: 0 0 0 2px #7caef9, 0 0.5em 0 0 #8cb5f2;
  transform: translate3d(0, 0.5em, -1em);
}
button.learn-more:active {
  background: #0c69f4;
  transform: translate(0em, 0.75em);
}
button.learn-more:active::before {
  box-shadow: 0 0 0 2px #7caef9, 0 0 #8cb5f2;
  transform: translate3d(0, 0, -1em);
} */

.updateBtn button {
  position: relative;
  padding: 5px 10px;
  background: var(--blue);
  text-decoration: none;
  color: var(--white);
  border-radius: 6px;
  border-color: var(--blue);
  width: 100%;
  font-size: 1.25em;
}

.updateBtn button:hover{
  background: #4a90f9;
}

.updateBtn button:active{
  margin-top: 3px;
  background: #085ad6;
}



@media (max-width: 991px){
  .product .product-container{
    grid-template-columns: repeat(4,1fr);
  }
  .pro-tex p:nth-child(1) {
    font-size: 14px;
  }

  .pro-content p {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
.product .product-container{
    grid-template-columns: repeat(3,1fr);
  }
  .pro-tex p:nth-child(1) {
    font-size: 14px;
  }

  .pro-content p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
.product .product-container{
    grid-template-columns: repeat(2,1fr);
  }
  .pro-tex p:nth-child(1) {
    font-size: 12px;
  }

  .pro-content p {
    font-size: 12px;
  }
}

</style>