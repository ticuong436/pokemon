import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner-list',
  templateUrl: './banner-list.component.html',
  styleUrls: ['./banner-list.component.scss']
})
export class BannerListComponent implements OnInit {
  pokemons = [
    '6b55babb3825ef9fa9e5d9ff44a14bdb8406ce97.png',
    '9ad4f081bac9acb6cf6b865b33a3ff960efdbb34.png',
    '9cccd26efcce455050a6be01618f5bd2ea7f2012.png',
    '72ef81c09d7c20d3b0004d8a2a3407553ed2440b.png',
    '79f506a3da448fb439a46a84b6b9d480614060ca.png',
    '1086bb30451998c2911e948c5be7148b57c38d15.png',
    '6849382bee6f0be5495fe96c03d86ddf7decc963.png',
    'a656b7eb5b6ea83b2b73ec735e934362414adcb9.png',
    'c5e61e356be7f909b01f9876101300567f11f76c.png',
    '75ba01425af3c244c3960ab85c30ce9b9201fdad.png',
    '1865f85f9e417522f8de1a239fbff27f2106783b.png',
    'e09cc249c929843514abac5c9fbd644ede62e5b2.png'

  ]
  constructor() { }
  ngOnInit(): void {

  }

}
