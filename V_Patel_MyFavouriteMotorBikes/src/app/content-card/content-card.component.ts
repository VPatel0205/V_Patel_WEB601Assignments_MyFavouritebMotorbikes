import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';


@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();

  constructor(){
    this.contentList.addContent({
      id: 0,
      title: "Harley Davidson",
      description:"The classic Harley-Davidson engines are V-twin engines, with a 45° angle between the cylinders. The crankshaft has a single pin, and both pistons are connected to this pin through their connecting rods.",
      creator:"William Harley",
      imgURL:"https://image.cnbcfm.com/api/v1/image/104741526-20170929-9337-2469-3.jpg?v=1506708744&w=929&h=523&vtcrop=y",
      type:"Classic bike"
    });
    this.contentList.addContent({
      id: 1,
      title: "Splendor",
      description:"Splendor Plus is powered by a 97.2 ccbs6-2.0 engine which develops a power of 8.02 PS and a torque of 8.05 Nm.",
      creator:"Hero Honda",
      imgURL:"https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/06/Hero-Splendor-Pro-Classic-Black-e1591772678165-1000x579.jpg?resize=1000%2C579&ssl=1",
      type:"Street bike"
    });
    this.contentList.addContent({
      id: 2,
      title: "Benda",
      description:" This one is called the Benda Asura 400. What catches the attention at first is the Indian name used for naming the motorcycle",
      creator:"Chinese manufacture",
      imgURL:"https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/keeway-select-model-glossy-black-1661846908522.gif?q=80",
      type:"Vintage"
    });
  }
}