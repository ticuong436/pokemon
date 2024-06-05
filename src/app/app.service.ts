import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, forkJoin, map, Observable, switchMap, take } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Pokemon, Type } from './pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  selectType: number | string = ''
  private urlApi = 'https://api.vandvietnam.com/api/pokemon-api';
  private _pokemons: BehaviorSubject<Pokemon[] | null> = new BehaviorSubject<
  Pokemon[] | null
  >(null);

  get pokemons$(): Observable<Pokemon[] | null> {
    return this._pokemons.asObservable();
  }

  private _types: BehaviorSubject<Pokemon[] | null> = new BehaviorSubject<
  Pokemon[] | null
  >(null);

  get types$(): Observable<any[] | null> {
    return this._types.asObservable();
  }

  private _meta: BehaviorSubject<any | null> = new BehaviorSubject<
    any | null
  >(null);
  get meta$(): Observable<any | null> {
    return this._meta.asObservable();
  }
  constructor(private http: HttpClient) { }

  getAllData(): Observable<any[]> {
    return forkJoin([
      this.getPokemons(),
      this.getTypePokemon()
    ]).pipe(
      map((results: any[]) => {
        const data = this.mergeData(results[0].data, results[1].data);
        this._types.next(results[1].data)
        this._pokemons.next(data)
        this._meta.next(results[0].meta)
        return data
      })
    );
  }

  getPokemons(number: number = 1, size: number = 12, name: string = '', type: number | string = ''): Observable<any> {
    return this.http.get(this.urlApi + `/pokemons?page[number]=${number}&page[size]=${size}&sort=number&filter[name]=${name}&filter[type]=${type}`);
  }

  getTypePokemon(): Observable<any> {
    return this.http.get(this.urlApi + '/types');
  }
  filterNamePokemon(name: string, types: Type[]) {
    return this.getPokemons(1, 12, name).pipe(map((res) => {
      this._meta.next(res.meta)
      const dataMerge = this.mergeData(res.data, types)
      this._pokemons.next(dataMerge);
    }))
  }
  filterTypePokemon(type: number | string = '', types: Type[]) {
    this.selectType = type
    return this.getPokemons(1, 12, '', type).pipe(map((res) => {
      this._meta.next(res.meta)
      const dataMerge = this.mergeData(res.data, types)
      this._pokemons.next(dataMerge);
    }))
  }
  randomPokemon(size: number, types: Type[]) {
    return this.getPokemons(size, 12).pipe(map((res) => {
      this._meta.next(res.meta)
      const dataMerge = this.mergeData(res.data, types)
      this._pokemons.next(dataMerge);
    }))
  }

  getMorePokemon(types: Type[]) {
    return combineLatest([this.pokemons$, this.meta$]).pipe(
      take(1),
      switchMap(([pokemons, meta]: any) =>
        this.getPokemons(meta.current_page + 1, 12, '', this.selectType).pipe(
          map((data) => {
            this._meta.next(data.meta);
            const dataMerge = this.mergeData(data.data, types);
            const updatedPokemons = pokemons?.length > 0 ? [...pokemons, ...dataMerge] : dataMerge;
            this._pokemons.next(updatedPokemons);
            return data;
          })
        )
      )
    );
  }

  mergeData(pokemons: any[], types: any[]): any[] {
    if (pokemons.length > 0) {
      const mergedData = pokemons?.map(pokemon => {
        const type1 = types.find(type => type.id === pokemon.type_1);
        const type2 = types.find(type => type.id === pokemon.type_2);
        return { ...pokemon, type_1: type1, type_2: type2 };
      });
      return mergedData;
    } else {
      return []
    }
  }












}
