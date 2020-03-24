import { Line } from "vue-chartjs";
import axios from "axios";

export default {
  extends: Line,
  data: () => ({
    results: [],
    chartdata: {
      //labels:['2020-3-05',4,5,6],
      labels: [],
      datasets: [
        {
          label: "Corona Virus Cases",
          data: [],
          //backgroundColor:['aqua','lightgreen','red','orange'],
          borderWidth: 0.5,
          borderColor: "red",
          backgroundColor: "black",
          fill: false
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              min: 0
            }
          }
        ]
      }
    }
  }),
  methods: {
    /*fetchData : function(){
        axios.get('http://covid19.soficoop.com/country/us').then(response=>{
        this.results=response.data.items[0].readings.psi_twenty_four_hourly
        //console.log(response.data)
        //console.log(this.results)
        for(let key in this.results){
            this.chartdata.datasets[0].data.push(this.results[key])
            this.chartdata.labels.push(key+'')
            
        }
        this.renderChart(this.chartdata,this.options)
            
    })*/

    fetchData: function() {
      axios.get("http://covid19.soficoop.com/country/us").then(response => {
        this.results = response.data.snapshots;

        for (let key in this.results) {
          this.chartdata.datasets[0].data.push(this.results[key].cases);
          this.chartdata.labels.push(
            this.results[key].timestamp.slice(0, 10) + ""
          );
        }
        this.renderChart(this.chartdata, this.options);
      });
    }
  },
  mounted() {
    //console.log('Do I come here')
    this.fetchData();
  }
};
