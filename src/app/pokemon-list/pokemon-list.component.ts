import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  @Input() pokemons!: Pokemon[];
  @Output() loadMore = new EventEmitter<void>();

  constructor(private _appService: AppService) { }
  slectPokemon: Pokemon | undefined
  indexPokemon: number = 0
  removePokemonDetail(ev: undefined) {
    this.slectPokemon = undefined
  }
  prevSlider() {
    const index = this.pokemons.findIndex(x => x.id == this.slectPokemon?.id)
    if (index > 0) {
      this.indexPokemon = index - 1
    }
    this.slectPokemon = this.pokemons[index - 1]
  }

  nextSlider() {
    const index = this.pokemons.findIndex(x => x.id == this.slectPokemon?.id)
    if (index >= 0) {
      this.indexPokemon = index + 1
    }
    this.slectPokemon = this.pokemons[index + 1]

  }
  handleSelectPokemonDetail(item: Pokemon, index: number) {
    this.indexPokemon = index
    this.slectPokemon = item
  }
  ngOnInit(): void {
  }

}
