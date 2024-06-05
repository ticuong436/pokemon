
export interface Type {
    id: number;
    name: string;
}
export interface Pokemon {
    id: string;
    number: number;
    name: string;
    type_1: Type;
    type_2: Type;
    total: number;
    hp: number;
    attack: number;
    defense: number;
    sp_atk: number;
    sp_def: number;
    speed: number;
    generation: number;
    legendary: boolean;
    created_at: string;
    updated_at: string;
}