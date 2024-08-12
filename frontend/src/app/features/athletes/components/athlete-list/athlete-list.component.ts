import { Component } from '@angular/core';
import { AthletesService } from '../../services/athletes.service';

@Component({
  selector: 'app-athlete-list',
  templateUrl: './athlete-list.component.html',
  styleUrl: './athlete-list.component.scss',
})
export class AthleteListComponent {
  athletes: any = [];
  // [
  //   {
  //     fullName: 'Conor McGregor',
  //     country: 'IRL 🇮🇪',
  //     sport: 'Mixed Martial Arts',
  //     imgSrc:
  //       'https://cdn.britannica.com/93/258393-050-AF5EF297/conor-mcgregor-celebrates-first-round-knock-out-victory-over-jose-aldo-in-featherweight-title-ufc-194-2015.jpg',
  //   },
  //   {
  //     fullName: 'Khabib Nurmagomedov',
  //     country: 'RUS 🇷🇺',
  //     sport: 'Mixed Martial Arts',
  //     imgSrc:
  //       'https://images.squarespace-cdn.com/content/v1/5d3d604f1c3c2e00014fe64d/1603704703533-RVH28W8QE2EJAAG16Z34/khabib1.jpg',
  //   },
  //   {
  //     fullName: 'Alex Pereira',
  //     country: 'BRA 🇧🇷',
  //     sport: 'Mixed Martial Arts',
  //     imgSrc:
  //       'https://www.dexerto.com/cdn-image/wp-content/uploads/2024/04/10/Alex-Pereira-Poatan.jpg?width=3840&quality=60&format=auto',
  //   },
  //   {
  //     fullName: 'Canelo Álvarez',
  //     country: 'MEX 🇲🇽',
  //     sport: 'Boxing',
  //     imgSrc: 'https://static.independent.co.uk/2021/05/09/05/newFile-3.jpg',
  //   },
  //   {
  //     fullName: 'Vasyl Lomachenko',
  //     country: 'UKR 🇺🇦',
  //     sport: 'Boxing',
  //     imgSrc:
  //       'https://static.independent.co.uk/s3fs-public/thumbnails/image/2018/09/27/14/lomachenko.jpg',
  //   },
  //   {
  //     fullName: 'Naoya Inoue',
  //     country: 'JPN 🇯🇵',
  //     sport: 'Boxing',
  //     imgSrc:
  //       'https://sports.inquirer.net/files/2024/03/000_34924QB-scaled.jpg',
  //   },
  //   {
  //     fullName: 'Israel Adesanya',
  //     country: 'NGA 🇳🇬',
  //     sport: 'Mixed Martial Arts',
  //     imgSrc:
  //       'https://www.si.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MjA0MDI5NDgyODMzNTUyOTU2/israel-adesanya.jpg',
  //   },
  //   {
  //     fullName: 'Tyson Fury',
  //     country: 'GBR 🇬🇧',
  //     sport: 'Boxing',
  //     imgSrc:
  //       'https://m.economictimes.com/thumb/msid-104787384,width-1200,height-1200,resizemode-4,imgsize-168882/tyson-fury-what-is-his-net-worth-here-are-the-details.jpg',
  //   },
  // ];

  constructor(private readonly athletesService: AthletesService) {}

  ngOnInit() {
    this.athletesService.getAthletes().subscribe(athletes => {
      this.athletes = athletes;
    });
  }
}
