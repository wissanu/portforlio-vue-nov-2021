<template>
  <!-- card list -->
  <div class="cardBox">
    <div class="card">
      <div>
        <div class="numbers">1,500 ชิ้น</div>
        <div class="cardName">จำนวนที่ขายได้วันนี้ </div>
      </div>
      <div class="iconBx">
        <ion-icon name="cart-outline"></ion-icon>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="numbers">6,200 บาท</div>
        <div class="cardName">รายได้สุทธิของวันนี้</div>
      </div>
      <div class="iconBx">
        <ion-icon name="cash-outline"></ion-icon>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="numbers">2,000 บาท</div>
        <div class="cardName">ต้นทุนที่ใช้ของวันนี้</div>
      </div>
      <div class="iconBx">
        <ion-icon name="cash-outline"></ion-icon>
      </div>
    </div>
    <div class="card">
      <div>
        <div class="numbers">200 คน</div>
        <div class="cardName">จำนวนลูกค้าวันนี้</div>
      </div>
      <div class="iconBx">
        <ion-icon name="accessibility-outline"></ion-icon>
      </div>
    </div>
  </div>

  <!-- chart list -->
  <div class="graphBox">
    <!-- <h2>ผลประกอบการประจำวัน</h2> -->
    <div class="box"><Testchart /></div>
    <div class="box"><Stestchart /></div>
  </div>

  <!-- data list -->
  <div class="details">
    <div class="recentOrders">
      <div class="cardHeader">
        <h2>สินค้าที่สั่งซื้อล่าสุด</h2>
        <a href="#" class="btn">ดูทั้งหมด</a>
      </div>
      <table>
        <thead>
          <tr>
            <td>ชื่อสินค้า</td>
            <td>ราคา</td>
            <td>จำนวน</td>
            <td>ช่องทางการชำระ</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status return">เงินสด</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status delivered">แสกนจ่าย</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status pending">Pending</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status pending">Pending</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status Inprogress">In progress</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status delivered">Delivered</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status return">Return</span></td>
          </tr>
          <tr>
            <td>Bubble Tea</td>
            <td>19.00 baht</td>
            <td>Paid</td>
            <td><span class="status Inprogress">In progress</span></td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- recent Customer -->
    <div class="recentCustomers">
      <div class="cardHeader">
        <h2>สมาชิกใหม่</h2>
      </div>
      <table>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>วิษณุ ถึงรัตน์ <br><span>เบอร์โทร : 089-934-0993</span></h4></td>
        </tr>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>Tor <br><span>Thailand</span></h4></td>
        </tr>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>Tor <br><span>Thailand</span></h4></td>
        </tr>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>Tor <br><span>Thailand</span></h4></td>
        </tr>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>Tor <br><span>Thailand</span></h4></td>
        </tr>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>Tor <br><span>Thailand</span></h4></td>
        </tr>
        <tr>
          <td width="60px"><div class="imgBx"><img src="../assets/logo.png" alt=""></div></td>
          <td><h4>Tor <br><span>Thailand</span></h4></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Testchart from '@/components/Testchart.vue';
import Stestchart from '@/components/Stestchart.vue';

@Options({
  components: {
    Testchart,
    Stestchart
  },
})
export default class Dashboard extends Vue {}
</script>

<style scoped>

.cardBox {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4,1fr);
  grid-gap: 30px;
}

.cardBox .card{
  position: relative;
  background: var(--white);
  padding: 30px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-shadow: 0 7px 20px rgba(0, 0, 0, 0.08);
}

.cardBox .card .numbers {
  position: relative;
  font-weight: 500;
  font-size: 2.5em;
  color: var(--blue);
}

.cardBox .card .cardName {
  color: var(--black2);
  font-size: 1.1em;
  margin-top: 5px;
}

.cardBox .card .iconBx {
  font-size: 3.5em;
  color: var(--black2);
}

.cardBox .card:hover {
  background: var(--blue);
}

.cardBox .card:hover .numbers,
.cardBox .card:hover .iconBx,
.cardBox .card:hover .cardName {
  color: var(--white);
}

/* chart css */

.graphBox
{
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 30px;
  min-height: 200px;
  overflow-x: auto;
}

.graphBox .box {
  position: relative;
  background: #fff;
  padding: 20px;
  width: 100%;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.details {
  position: relative;
  width: 100%;
  padding: 20px;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  /* margin-top: 10px; */
}

.details .recentOrders
{
  position: relative;
  display: grid;
  min-height: 500px;
  background: var(--white);
  padding: 20px;
  box-shadow: 0 7px 25px rgba(0,0,0,0.08);
  border-radius: 20px;
}

.cardHeader{
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}

.cardHeader h2{
  font-weight: 600;
  color: var(--blue);
}

.btn {
  position: relative;
  padding: 5px 10px;
  background: var(--blue);
  text-decoration: none;
  color: var(--white);
  border-radius: 6px;
}

.details table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

.details table thead td {
  font-weight: 600;
}

.details .recentOrders table tr {
  color: var(--black1);
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
} 

.details .recentOrders table tr:last-child{
  border-bottom: none;
}

.details .recentOrders table tbody tr:hover {
  background: var(--blue);
  color: var(--white);
}

.details .recentOrders table tr td{
  padding: 10px;
}

.details .recentOrders table tr td:last-child{
  text-align: end;
}

/* price column alignment */
.details .recentOrders table tr td:nth-child(2) 
{
  text-align: end;
}
/* payment column aligment */
.details .recentOrders table tr td:nth-child(3)
{
  text-align: center;
}

/* status color as tag */
.status.delivered
{
  padding: 2px 4px;
  background: #8de02c;  
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}

.status.pending
{
  padding: 2px 4px;
  background: #f9ca3f;  
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}

.status.return
{
  padding: 2px 4px;
  background: #f00;  
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}
.status.Inprogress
{
  padding: 2px 4px;
  background: #1795ce;  
  color: var(--white);
  border-radius: 4px;
  font-size: 14px;
  font-weight: 500;
}

.recentCustomers {
  position: relative;
  display: grid;
  min-height: 500px;
  padding: 20px;
  background: var(--white);
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.08);
  border-radius: 20px;
}

.recentCustomers .imgBx{
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
}

.recentCustomers .imgBx img{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.recentCustomers table tr:hover{
  background: var(--blue);
  color: var(--white);
}

.recentCustomers table tr td{
  padding: 12px 10px;
}

.recentCustomers table tr td h4{
  font-size: 16px;
  font-weight: 500;
  line-height: 1.2em;
}

.recentCustomers table tr td h4 span{
  font-size: 14px;
  color: var(--black2);
}

.recentCustomers table tr:hover{
  background: var(--blue);
  color: var(--white);
}

.recentCustomers table tr:hover td h4 span{
  color: var(--white);
}


/* responsive design */
@media (max-width: 991px) {
  .cardBox{
    grid-template-columns: repeat(2, 1fr);
  }
  .graphBox {
    grid-template-columns: 1fr;
    height: auto;
  }

}

@media (max-width: 768px) {
  .details{
    grid-template-columns: repeat(1, 1fr);
  }
  .recentOrders{
    overflow-x: auto;
  }
  .status.Inprogress{
    white-space: nowrap;
  }
}

@media (max-width: 480px){
  .cardBox{
    grid-template-columns: repeat(1, 1fr);
  }
  .cardHeader h2{
    font-size: 20px;
  }
}

</style>