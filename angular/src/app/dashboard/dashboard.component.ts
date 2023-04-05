import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../services/app-service.service';
import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{

  title = 'Angular';
  datas: any;
  region: any;
  intensity: any;
  topic: any;
  pestle: any;
  sector: any;
  impact: any;
  chart: any = [];


  constructor(private service: AppServiceService){
    Chart.register(...registerables);
  }
  ngOnInit() {
    this.service.getData().subscribe({
      next: (res) => {
        this.datas = res;

        this.region = this.datas.map((data: any) => data.region);
        this.intensity = this.datas.map((data: any) => data.intensity);
        this.topic = this.datas.map((data: any) => data.topic);
        this.pestle = this.datas.map((data: any) => data.pestle);
        this.sector = this.datas.map((data: any) => data.sector);
        this.impact = this.datas.map((data: any) => data.impact);
        const distinctRegion = [...new Set(this.region)]
        const distinctSector = [...new Set(this.sector)]
        const distinctPestle = [...new Set(this.pestle)]
        const distinctImpact = [...new Set(this.impact)]
        console.log(distinctPestle);

        //Chart 1
        this.chart = new Chart('region-intensity', {
          type: 'doughnut',
          data: {
            labels: distinctRegion,
            datasets: [
              {
                label:'Region Intensity',
                data: [
                  this.sumingIntensity(this.datas,"Northern America"),
                  this.sumingIntensity(this.datas,"Central America"),
                  this.sumingIntensity(this.datas,"World") + this.sumingIntensity(this.datas,"world"),
                  this.sumingIntensity(this.datas,"Western Africa"),
                  this.sumingIntensity(this.datas,"Western Asia"),
                  this.sumingIntensity(this.datas,""),
                  this.sumingIntensity(this.datas,"Eastern Europe"),
                  this.sumingIntensity(this.datas,"Central Africa"),
                  this.sumingIntensity(this.datas,"Northern Africa"),
                  this.sumingIntensity(this.datas,"Southern Africa"),
                  this.sumingIntensity(this.datas,"Southern Asia"),
                  this.sumingIntensity(this.datas,"Central Asia"),
                  this.sumingIntensity(this.datas,"Eastern Asia"),
                  this.sumingIntensity(this.datas,"South America"),
                  this.sumingIntensity(this.datas,"South-Eastern Asia"),
                  this.sumingIntensity(this.datas,"Eastern Africa"),
                  this.sumingIntensity(this.datas,"Europe"),
                  this.sumingIntensity(this.datas,"Western Europe"),
                  this.sumingIntensity(this.datas,"Northern Europe"),
                  this.sumingIntensity(this.datas,"Southern Europe"),
                  this.sumingIntensity(this.datas,"Oceania"),
                  this.sumingIntensity(this.datas,"Africa"),
                  this.sumingIntensity(this.datas,"Asia"),
                ],
                hoverOffset: 4,
                borderWidth: 1
                
              }
            ]
          },
          options: {
            plugins:{
              legend:{
                display: false
              }
            }
         }
        })

        //Chart 2
        this.chart = new Chart('region-topic', {
          type: 'bar',
          data: {
            labels: distinctRegion,
            datasets: [
              {
                label:'Total Topics',
                data: [
                  this.countingTopic(this.datas,"Northern America"),
                  this.countingTopic(this.datas,"Central America"),
                  this.countingTopic(this.datas,"World") + this.countingTopic(this.datas,"world"),
                  this.countingTopic(this.datas,"Western Africa"),
                  this.countingTopic(this.datas,"Western Asia"),
                  this.countingTopic(this.datas,"Eastern Europe"),
                  this.countingTopic(this.datas,"Central Africa"),
                  this.countingTopic(this.datas,"Northern Africa"),
                  this.countingTopic(this.datas,"Southern Africa"),
                  this.countingTopic(this.datas,"Southern Asia"),
                  this.countingTopic(this.datas,"Central Asia"),
                  this.countingTopic(this.datas,"Eastern Asia"),
                  this.countingTopic(this.datas,"South America"),
                  this.countingTopic(this.datas,"South-Eastern Asia"),
                  this.countingTopic(this.datas,"Eastern Africa"),
                  this.countingTopic(this.datas,"Europe"),
                  this.countingTopic(this.datas,"Western Europe"),
                  this.countingTopic(this.datas,"Northern Europe"),
                  this.countingTopic(this.datas,"Southern Europe"),
                  this.countingTopic(this.datas,"Oceania"),
                  this.countingTopic(this.datas,"Africa"),
                  this.countingTopic(this.datas,"Asia"),
                ],
                
              }
            ]
          },
          options: {
            plugins:{
              legend:{
                display: false
              }
            }
         }
        })

        //Chart 3
        this.chart = new Chart('sector-impact', {
          type: 'doughnut',
          data: {
            labels: distinctSector,
            datasets: [
              {
                label:'Total Impact',
                data: [
                  this.sumingImpact(this.datas,"Energy"),
                  this.sumingImpact(this.datas,"Environment"),
                  this.sumingImpact(this.datas,""),
                  this.sumingImpact(this.datas,"Aerospace & defence"),
                  this.sumingImpact(this.datas,"Manufacturing"),
                  this.sumingImpact(this.datas,"Retail"),
                  this.sumingImpact(this.datas,"Financial services"),
                  this.sumingImpact(this.datas,"Support services"),
                  this.sumingImpact(this.datas,"Government"),
                  this.sumingImpact(this.datas,"Information Technology"),
                  this.sumingImpact(this.datas,"Healthcare"),
                  this.sumingImpact(this.datas,"Food & agriculture"),
                  this.sumingImpact(this.datas,"Automotive"),
                  this.sumingImpact(this.datas,"Tourism & hospitality"),
                  this.sumingImpact(this.datas,"Construction"),
                  this.sumingImpact(this.datas,"Security"),
                  this.sumingImpact(this.datas,"Transport"),
                  this.sumingImpact(this.datas,"Water"),
                  this.sumingImpact(this.datas,"Media & entertainment"),
                ],
                hoverOffset: 4,
                borderWidth: 1
                
              }
            ]
          },
          options: {
            plugins:{
              legend:{
                display: false
              }
            }
         }
        })
        this.chart = new Chart('pestle', {
          type: 'doughnut',
          data: {
            labels: distinctPestle,
            datasets: [
              {
                label:'Total',
                data: [
                  this.countingPestle(this.datas,"Industries"),
                  this.countingPestle(this.datas,"Environmental"),
                  this.countingPestle(this.datas,"Economic"),
                  this.countingPestle(this.datas,"Political"),
                  this.countingPestle(this.datas,"Manufacturing"),
                  this.countingPestle(this.datas,"Technological"),
                  this.countingPestle(this.datas,""),
                  this.countingPestle(this.datas,"Healthcare"),
                  this.countingPestle(this.datas,"Organization"),
                  this.countingPestle(this.datas,"Social"),
                  this.countingPestle(this.datas,"Lifestyles"),
                ],
                hoverOffset: 4,
                borderWidth: 1
                
              }
            ]
          },
          options: {
            plugins:{
              legend:{
                display: false
              }
            }
         }
        })


        //Chart 5
        this.chart = new Chart('sector-impact-region', {
          type: 'bar',
          data: {
            labels: distinctSector,
            datasets: [
              {
                type: 'bar',
                data: [
                  this.countingRegion(this.datas,"Energy"),
                  this.countingRegion(this.datas,"Environment"),
                  this.countingRegion(this.datas,""),
                  this.countingRegion(this.datas,"Aerospace & defence"),
                  this.countingRegion(this.datas,"Manufacturing"),
                  this.countingRegion(this.datas,"Retail"),
                  this.countingRegion(this.datas,"Financial services"),
                  this.countingRegion(this.datas,"Support services"),
                  this.countingRegion(this.datas,"Government"),
                  this.countingRegion(this.datas,"Information Technology"),
                  this.countingRegion(this.datas,"Healthcare"),
                  this.countingRegion(this.datas,"Food & agriculture"),
                  this.countingRegion(this.datas,"Automotive"),
                  this.countingRegion(this.datas,"Tourism & hospitality"),
                  this.countingRegion(this.datas,"Construction"),
                  this.countingRegion(this.datas,"Security"),
                  this.countingRegion(this.datas,"Transport"),
                  this.countingRegion(this.datas,"Water"),
                  this.countingRegion(this.datas,"Media & entertainment"),
                ]
              },
              {
                type: 'line',
                data: [
                  this.sumingImpact(this.datas,"Energy"),
                  this.sumingImpact(this.datas,"Environment"),
                  this.sumingImpact(this.datas,""),
                  this.sumingImpact(this.datas,"Aerospace & defence"),
                  this.sumingImpact(this.datas,"Manufacturing"),
                  this.sumingImpact(this.datas,"Retail"),
                  this.sumingImpact(this.datas,"Financial services"),
                  this.sumingImpact(this.datas,"Support services"),
                  this.sumingImpact(this.datas,"Government"),
                  this.sumingImpact(this.datas,"Information Technology"),
                  this.sumingImpact(this.datas,"Healthcare"),
                  this.sumingImpact(this.datas,"Food & agriculture"),
                  this.sumingImpact(this.datas,"Automotive"),
                  this.sumingImpact(this.datas,"Tourism & hospitality"),
                  this.sumingImpact(this.datas,"Construction"),
                  this.sumingImpact(this.datas,"Security"),
                  this.sumingImpact(this.datas,"Transport"),
                  this.sumingImpact(this.datas,"Water"),
                  this.sumingImpact(this.datas,"Media & entertainment"),
                ]
              }
            ]
          },
          options: {
            plugins:{
              legend:{
                display: false
              }
            }
         }
        })







      },
      error: (err) => console.log(err),
    })

  }

  sumingIntensity(object: any, ele:any){
    var intensity: number = 0;
    object.forEach(function(item: any) {
      if(item.region == ele){
        intensity = intensity+item.intensity;
      }
    });
    return intensity;
  }

  countingTopic(object: any, ele:any){
    var topic: number = 0;
    object.forEach(function(item: any) {
      if(item.region == ele){
        topic = topic + 1;
      }
    });
    return topic;
  }

  sumingImpact(object: any, ele:any){
    var impact: number = 0;
    object.forEach(function(item: any) { 
      if(item.sector == ele){
        impact = impact + Number(item.impact);
      }
    });
    return impact;
  }

  countingPestle(object: any, ele:any){
    var pestle: number = 0;
    object.forEach(function(item: any) {
      if(item.pestle == ele){
        pestle = pestle + 1;
      }
    });
    return pestle;
  }

  countingRegion(object: any, ele:any){
    var result: any = []
    object.forEach(function(item: any) {
      if(item.sector == ele){
        result.push(item.region);
      }
    })

    const r = [...new Set(result) ]

    return r.length;
  }

  
}
