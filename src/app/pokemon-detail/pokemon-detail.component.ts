import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AppService } from '../app.service';
import { Pokemon } from '../pokemon.model';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnInit {
  @Input() pokemon!: Pokemon | undefined;
  @Input() pokemons!: Pokemon[] | undefined;
  @Input() indexPokemon!: number;
  @Output() removePokemonDetail = new EventEmitter<undefined>();
  @Output() prevSlider = new EventEmitter<void>();
  @Output() nextSlider = new EventEmitter<void>();


  tb: any = {
    hp: (255 / 15).toFixed(2),
    speed: (100 / 15).toFixed(2),
    attack: (180 / 15).toFixed(2),
    defense: (230 / 15).toFixed(2),
    sp_attack: (180 / 15).toFixed(2),
    sp_defense: (150 / 15).toFixed(2),
  }

  constructor() { }
  closeDialog() {
    this.removePokemonDetail.emit(undefined);

  }
  hanldePrevSlider() {
    this.prevSlider.emit()
  }
  handleNextSlider() {
    this.nextSlider.emit()

  }
  ngOnInit(): void {
   

  }

}
