<script>
import { defineComponent } from 'vue'
import { Bar } from 'vue3-chart-v2'

export default defineComponent({
  name: 'Stestchart',
  extends: Bar,
  data () {
    return {
      state: {
        chartData: {
           labels: ['วันจันทร์', 'วันอังคาร', 'วันพุธ', 'วันพฤหัส','วันศุกร์','วันเสาร์','วันอาทิตย์',],
            datasets: [
              {
                label: 'ยอดขายในรอบสัปดาห์',
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'],
                
                data: [3,6,7,9,13,25,17],
                borderWidth: 1
              },
              {
                label: 'ยอดลูกค้าในรอบสัปดาห์',
                backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'],
                
                data: [10,9,20,4,30,7,6],
                borderWidth: 1
              }
            ]
        },
        chartOptions: {
          responsive: true,
        //   aspectRatio: 0,
          // maintainAspectRatio: true,
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