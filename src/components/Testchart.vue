<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'Testchart',
  extends: Bar,
  data () {
    return {
      state: {
        chartData: {
           labels: ['ช่วงเช้า', 'ช่วงกลางวัน', 'ช่วงเย็น'],
            datasets: [
              {
                label: 'จำนวนแก้วที่ขายได้ ณ วันนี้',
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'],
                data: [3,6,7],
                borderWidth: 1
              }
            ]
        },
        chartOptions: {
          responsive: true,
        //   aspectRatio: 0,
        //   maintainAspectRatio: true,
        //   layout: {
        //       padding: 20
        //   },
        scales: {
            yAxes: [{
                ticks: {
                beginAtZero: true
                }
            }]
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.state.chartData, this.state.chartOptions)
  }
})
</script>