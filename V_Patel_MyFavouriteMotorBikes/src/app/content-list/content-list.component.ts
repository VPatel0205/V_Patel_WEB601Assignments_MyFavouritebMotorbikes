import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss'
})
export class ContentListComponent implements OnInit {
  displayContentInfo(contentItem: Content) {
    console.log(`ID: ${contentItem.id} and Title: ${contentItem.title}`);
    }
  @Input () contentItems: Content[] = [];

  ngOnInit(): void {
    this.contentItems =[ 
      {
        id: 0,
      title: "Harley Davidson",
      description:"The classic Harley-Davidson engines are V-twin engines, with a 45° angle between the cylinders. The crankshaft has a single pin, and both pistons are connected to this pin through their connecting rods.",
      creator:"William Harley",
      imgURL:"https://image.cnbcfm.com/api/v1/image/104741526-20170929-9337-2469-3.jpg?v=1506708744&w=929&h=523&vtcrop=y",
      type:"Classic bike"
      },
      {
        id: 1,
        title: "Splendor",
        description:"Splendor Plus is powered by a 97.2 ccbs6-2.0 engine which develops a power of 8.02 PS and a torque of 8.05 Nm.",
        creator:"Hero Honda",
        imgURL:"https://i0.wp.com/gomechanic.in/blog/wp-content/uploads/2020/06/Hero-Splendor-Pro-Classic-Black-e1591772678165-1000x579.jpg?resize=1000%2C579&ssl=1",
        type:"Street bike"
      },
      {
        id: 2,
        title: "Benda",
        description:" This one is called the Benda Asura 400. What catches the attention at first is the Indian name used for naming the motorcycle",
        creator:"Chinese manufacture",
        imgURL:"https://imgd.aeplcdn.com/1056x594/n/bw/models/colors/keeway-select-model-glossy-black-1661846908522.gif?q=80",
        type:"Vintage"
      },
      {
        id: 3,
        title: "Jawa Perak",
        description: "The Jawa Perak is a classic cruiser motorcycle with a retro design, reminiscent of vintage bikes. It features a powerful engine and a distinctive bobber-style appearance.",
        creator: "Jawa Motorcycles (Czech brand with Indian ownership)",
        imgURL: "https://imgd.aeplcdn.com/664x374/n/cw/ec/53643/perak-right-front-three-quarter.jpeg?q=80",
        type: "Vintage"
      },
      {
        id: 4,
        title: "Royal Enfield Meteor 350",
        description: "The Royal Enfield Meteor 350 is a modern classic cruiser with a timeless design. It offers a comfortable ride and is known for its relaxed cruising capabilities.",
        creator: "Royal Enfield (Indian manufacturer)",
        imgURL: "https://www.royalenfield.com/content/dam/royal-enfield/meteor-new/section8/new/matt_green/j1d_d1_matt_green_0000.jpg",
        type: "Vintage"
      },
      {
        id: 5,
        title: "Suzuki SV650X",
        description: "The Suzuki SV650X is a sporty yet retro-styled motorcycle with a nod to the cafe racer genre. It combines modern performance with a classic aesthetic.",
        creator: "Suzuki Motor Corporation (Japanese manufacturer)",
        imgURL: "https://www.cycleworld.com/resizer/ZoyguKWz4sNSlUEGYb5EFuezBgM=/1440x0/smart/cloudfront-us-east-1.images.arcpublishing.com/octane/MKMXRZXHIM62AYSG66P4IMCFEI.jpg",
        type: "Vintage"
      }
    ];
  }
 
}