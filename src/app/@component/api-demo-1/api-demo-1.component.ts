import { Component } from '@angular/core';
import { HttpClientService } from '../../@service/http-client.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-api-demo-1',
  imports: [CommonModule, FormsModule],
  templateUrl: './api-demo-1.component.html',
  styleUrl: './api-demo-1.component.scss'
})



export class ApiDemo1Component {

  locationsName !: string;
  DatasetDescription !: string;

  location: any[] = [];
  chooseLocation : any;
  weather: any[] = [];
  datelist: any[] = [];
  selectedTime: string = '';


  constructor(private http:HttpClientService){}

  ngOnInit(): void {

    this.http.getApi('https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-065?Authorization=CWA-10ED71BC-8844-431A-B117-2B92303408DC&ElementName=%E5%A4%A9%E6%B0%A3%E9%A0%90%E5%A0%B1%E7%B6%9C%E5%90%88%E6%8F%8F%E8%BF%B0,%E8%88%92%E9%81%A9%E5%BA%A6%E6%8C%87%E6%95%B8,3%E5%B0%8F%E6%99%82%E9%99%8D%E9%9B%A8%E6%A9%9F%E7%8E%87,%E6%BA%AB%E5%BA%A6,%E5%A4%A9%E6%B0%A3%E7%8F%BE%E8%B1%A1,%E7%9B%B8%E5%B0%8D%E6%BF%95%E5%BA%A6,%E9%AB%94%E6%84%9F%E6%BA%AB%E5%BA%A6'
    ).subscribe((res: any) => {

      console.log(res);

      const loc = res.records.Locations[0];
      this.DatasetDescription = loc.DatasetDescription;
      this.weather = loc.Location[0].WeatherElement;
      this.locationsName = loc.LocationsName;
      this.chooseLocation = loc.Location[0];
      this.location = loc.Location;
      this.datelist = loc.Location[0].WeatherElement[0].Time;


    });
  };

  weatherIcons: any = {
  '晴': 'sun.png',
  '多雲': 'cloudy.png',
  '陰': 'cloudy.png',
  '有雨': 'rainy.png',
  '短暫陣雨': 'rainy.png',
  '雷陣雨': 'thunderstorm.png',
  '多雲時晴': 'partly-cloudy.png'
  };

  getCurrentWeatherStatus(): string {
  const weatherElement = this.weather.find(e => e.ElementName === '天氣現象');
  const timeData = weatherElement?.Time?.find((t: any) => t.DataTime === this.selectedTime);
  return timeData?.ElementValue?.[0]?.Weather || '';
  }

  selectLocation(event: any){
      const targetName = event.target.value;
      const found = this.location.find(loc => loc.LocationName === targetName);
      if (found) {
        this.chooseLocation = found;
        this.weather = found.WeatherElement;
        this.datelist = found.WeatherElement[0].Time;
        console.log('成功切換至：', targetName);
      }
  }

  selectDate(event: any) {
    this.selectedTime  = event.target.value;
    console.log('成功切換至時間：', this.selectedTime );
  }

 getTimeData(elementName: string = '溫度'): any[] {
    const element = this.weather.find(e => e.ElementName === elementName);
    return element?.Time || [];
 }



}
