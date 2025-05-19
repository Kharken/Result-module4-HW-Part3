type CharacterGender = 'Male' | 'Female' | 'unknown';
type CharacterStatus = 'Alive' | 'unknown' | 'Dead';
type CharacterSpecies = 'Human' | 'Alien';

export interface Character {
    id: number;
    name: string;
    status: CharacterStatus;
    species: CharacterSpecies;
    type: string;
    gender: CharacterGender;
    image: string;
    created: string;
}

export interface CharacterCardProps {
    isLoading: boolean;
    error: unknown;
    data: Character;
}
