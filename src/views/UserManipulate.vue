<template>
  <div class="User-container">
    <div class="User-spliter">
      <div class="left-panel">
        <h2>ข้อมูลลูกค้า</h2>
        <!-- <form> -->
          <div class="urdetails">
            <div class="usertable">
              <table>
                <!-- <caption>Statement Summary</caption> -->
                <thead>
                  <tr>
                    <th scope="col">ชื่อ</th>
                    <th scope="col">นามสกุล</th>
                    <th scope="col">เบอร์โทร</th>
                    <th scope="col">แก้ไข</th>
                    <th scope="col">ลบ</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(user,index) in users" :key="index">
                    <td data-label="name">
                      <label :hidden="user.on">{{user.name}}</label>
                      <input type="text" :value="user.name" :hidden="!user.on">
                    </td>
                    <td data-label="lastname">
                      <label :hidden="user.on">{{user.lastname}}</label>
                      <input type="text" :value="user.lastname" :hidden="!user.on">
                    </td>
                    <td data-label="phonenumber">
                      <label :hidden="user.on">{{user.phonenumber}}</label>
                      <input type="text" :value="user.phonenumber" :hidden="!user.on">
                    </td>
                    <td data-label="edit"><label class="labelRow" @click="SwitchEdit(index)">แก้ไข</label></td>
                    <td data-label="delete"><label class="labelRow">ลบ</label></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="updateBtn">
            <!-- <button class="learn-more">อัพเดทข้อมูล</button> -->
            <button>อัพเดทข้อมูล</button>
          </div>
        <!-- </form> -->
      </div>
      <div class="right-panel">
        <h2>เพิ่มผู้ใช้งาน</h2>
        <form>
          <ul class="wrapper">
            <li class="form-row">
              <label for="name">ชื่อ</label>
              <input type="text" id="name" v-model="firstnames">
            </li>
            <li class="form-row">
              <label for="ืname">นามสกุล</label>
              <input type="text" id="lastname" v-model="lastnames">
            </li>
            <li class="form-row">
              <label for="ืname">เบอร์โทร</label>
              <input type="text" id="phonenumber" v-model="phonenumbers">
            </li>
            <li class="form-row">
              <div class="updateBtn">
                <button @click="AddData()">ยืนยัน</button>
              </div>
              <!-- <button type="submit">ยืนยัน</button> -->
            </li>
          </ul>
        </form>
      </div>
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
      firstnames: "",
      lastnames: "",
      phonenumbers: "",
      users: [
        {
          id: 1,
          name: "วิษณุ",
          lastname: "ถึงรัตน์",
          phonenumber: "089-934-0993",
          on: false
        },
        {
          id: 2,
          name: "วิเศษ",
          lastname: "คำสร้อย",
          phonenumber: "082-745-2231",
          on: false
        },
        {
          id: 3,
          name: "วันดี",
          lastname: "แสร้างว่า",
          phonenumber: "062-989-0012",
          on: false
        },
        {
          id: 4,
          name: "วรรลพ",
          lastname: "เพิ่มทรัพย์",
          phonenumber: "092-887-8675",
          on: false
        },
        {
          id: 5,
          name: "วรรณวิสา",
          lastname: "ประสงค์โชค",
          phonenumber: "085-555-6879",
          on: false
        }
      ]
    }
  },
  methods:{
    SwitchEdit(idx: number){
      this.users[idx].on = !this.users[idx].on;
    },
    AddData(){
      // convert datatype using operator
      // and push new data to array
      if(this.firstnames != "" && this.lastnames != "" && this.phonenumbers != "")
      {
        let idx = this.users.length + 1;
        this.users.push({
          id: idx,
          name: ""+this.firstnames,
          lastname: ""+this.lastnames,
          phonenumber: ""+this.phonenumbers,
          on: false
        });
      }
      // reset data for two-way-binding
      this.firstnames = "";
      this.lastnames = "";
      this.phonenumbers = "";

      // for (let i = 0; i < this.users.length; i++) {
      //   console.log(this.users[i].id);
      //   console.log(this.users[i].name);
      //   console.log(this.users[i].lastname);
      //   console.log(this.users[i].phonenumber);
      // }
    }
  }
})
export default class DataManipulate extends Vue {}
</script>

<style scoped>

.User-container{
  position: relative;
  width: 100%;
  padding: 20px;
}

.User-spliter{
  position: relative;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 40px;
}

.User-spliter h2{
  font-weight: 600;
  color: var(--blue);
}

.left-panel{
  position: relative;
  display: grid;
}

.right-panel{
  position: relative;
  display: grid;
  align-self: flex-start;
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
  /* line-height: 1em; */
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

/* customer information table */

.urdetails {
  position: relative;
  /* padding: 20px; */
  display: grid;
  grid-template-columns: 1fr;
  /* grid-gap: 30px; */
  margin: 40px 0 20px 0;
}

.urdetails .usertable
{
  position: relative;
  /* display: grid; */
  min-height: 450px;
  background: var(--white);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: 20px;
}

.urdetails table {
  /* border: 1px solid #ccc; */
  border-collapse: collapse;
  margin: 0;
  padding: 0;
  width: 100%;
  table-layout: fixed;
}

.urdetails .usertable table tr {
  color: var(--black1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  line-height: 2.5em;
}

.urdetails table thead td {
  font-weight: 600;
}

.urdetails .usertable table tr:last-child{
  border-bottom: none;
}

.urdetails .usertable table tr td{
  padding: 10px;
}

.urdetails .usertable table tr td input{
  line-height: 2em;
}

.urdetails .usertable table th,
.urdetails .usertable table td {
  padding: .625em;
  text-align: center;
}

.urdetails .usertable table th {
  font-size: .85em;
  letter-spacing: .1em;
  text-transform: uppercase;
}

/* label row in table */

.labelRow {
  color: #551A8B;
  cursor: pointer;
  text-decoration: underline;
}


@media (max-width: 991px){

  .pro-tex p:nth-child(1) {
    font-size: 14px;
  }

  .pro-content p {
    font-size: 14px;
  }

  .User-spliter{
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {

  .pro-tex p:nth-child(1) {
    font-size: 14px;
  }

  .pro-content p {
    font-size: 14px;
  }

}

@media (max-width: 480px) {

  .pro-tex p:nth-child(1) {
    font-size: 12px;
  }

  .pro-content p {
    font-size: 12px;
  }
}

</style>