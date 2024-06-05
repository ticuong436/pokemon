import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Pokemon, Type } from './pokemon.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  pokemonsData: Pokemon[] = []
  types: Type[] = []
  meta: any = {}
  scrollPokemonList: any
  constructor(private _appService: AppService) { }
  loadMore(): void {
    this._appService.getMorePokemon(this.types).subscribe()
  }
  filterNamePokemon(ev: any) {
    this.scrollToPokemon()
    const name = ev.target.value
    setTimeout(() => {
      if (name !== '') {
        this._appService.filterNamePokemon(name, this.types).subscribe()
      }
    }, 500);

  }
  filterTypePokemon(type: number | string) {
    this.scrollToPokemon()
    this._appService.filterTypePokemon(type, this.types).subscribe()
  }
  randomPokemon() {
    this.scrollToPokemon()
    const sizeRandom = Math.floor(Math.random() * (47 - 1 + 1)) + 1;
    this._appService.randomPokemon(sizeRandom, this.types).subscribe()
  }
  scrollToPokemon() {
    this.scrollPokemonList.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    })
  }

  
  ngOnInit(): void {
    this.scrollPokemonList = document.getElementById('pokemon-list');
    this._appService.getAllData().subscribe()
    this._appService.pokemons$.subscribe((res: any) => {
      if (res) {
        this.pokemonsData = res

      }
    })
    this._appService.types$.subscribe(res => {
      if (res) {
        this.types = res
      }
    })
    this._appService.meta$.subscribe(res => {
      if (res) {
        this.meta = res

      }
    })
  }
}
