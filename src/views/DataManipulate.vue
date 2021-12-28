<template>
  <div class="product">
    <h2>ข้อมูลสินค้า</h2>
    <form>
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
    </form>

    <h2 style="padding-top: 20px">เพิ่มข้อมูลสินค้าใหม่</h2>
    <!-- create new products -->
    <form>
      <ul class="wrapper">
        <li class="form-row">
          <label for="name">ชื่อสินค้า</label>
          <input type="text" id="name">
        </li>
        <li class="form-row">
          <label for="ืname">ราคา</label>
          <input type="text" id="price">
        </li>
        <li class="form-row">
          <label for="email">จำนวนสินค้าในสต็อก</label>
          <input type="text" id="stock">
        </li>
        <li class="form-row">
          <label for="email">ราคาต้นทุน</label>
          <input type="text" id="cost">
        </li>
        <li class="form-row">
          <div class="updateBtn">
            <button type="submit">ยืนยัน</button>
          </div>
          <!-- <button type="submit">ยืนยัน</button> -->
        </li>
      </ul>
    </form>
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
  padding: 20px;
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

.wrapper {
    background-color: var(--white);
    list-style-type: none;
    padding: 20px;
    box-shadow: 0 7px 25px rgba(0,0,0,0.08);
    border-radius: 20px;
    margin: 40px 0;
  }
  .form-row {
    display: flex;
    justify-content: flex-end;
    padding: .5em;
  }
  .form-row > label {
    padding: .5em 1em .5em 0;
    flex: 1;
  }
  .form-row > input {
    flex: 2;
  }
  .form-row > input,
  .form-row > button {
    padding: .5em;
  }
  .form-row > button {
   background: gray;
   color: white;
   border: 0;
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