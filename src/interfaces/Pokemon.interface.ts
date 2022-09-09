export interface Pokemon {
    abilities: AbilityItem[]
    base_experience: number
    forms: Form[]
    game_indices: Index[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: Mfe[]
    name: string
    order: number
    past_types: any[]
    species: Species
    sprites: Sprites
    stats: StatItem[]
    types: TypeItem[]
    weight: number
    image_id: string
  }
  
  export interface AbilityItem {
    ability: Ability
    is_hidden: boolean
    slot: number
  }
  
  export interface Ability {
    name: string
    url: string
  }
  
  export interface Form {
    name: string
    url: string
  }
  
  export interface Index {
    game_index: number
    version: Version
  }
  
  export interface Version {
    name: string
    url: string
  }
  
  export interface Mfe {
    move: Move
    version_group_details: VersionGroupDetail[]
  }
  
  export interface Move {
    name: string
    url: string
  }
  
  export interface VersionGroupDetail {
    level_learned_at: number
    move_learn_method: MoveLearnMethod
    version_group: VersionGroup
  }
  
  export interface MoveLearnMethod {
    name: string
    url: string
  }
  
  export interface VersionGroup {
    name: string
    url: string
  }
  
  export interface Species {
    name: string
    url: string
  }
  
  export interface Sprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: Other
    versions: Versions
  }
  
  export interface Other {
    dream_world: DreamWorld
    home: Home
    "official-artwork": OfficialArtwork
  }
  
  export interface DreamWorld {
    front_default: string
    front_female: any
  }
  
  export interface Home {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface OfficialArtwork {
    front_default: string
  }
  
  export interface Versions {
    "generation-i": GenerationI
    "generation-ii": GenerationII
    "generation-iii": GenerationIII
    "generation-iv": GenerationIV
    "generation-v": GenerationV
    "generation-vi": GenerationVI
    "generation-vii": GenerationVII
    "generation-viii": GenerationVIII
  }
  
  export interface GenerationI {
    "red-blue": RedBlue
    yellow: Yellow
  }
  
  export interface RedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
  }
  
  export interface Yellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
  }
  
  export interface GenerationII {
    crystal: Crystal
    gold: Gold
    silver: Silver
  }
  
  export interface Crystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
  }
  
  export interface Gold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
  }
  
  export interface Silver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
  }
  
  export interface GenerationIII {
    emerald: Emerald
    "firered-leafgreen": FireredLeafgreen
    "ruby-sapphire": RubySapphire
  }
  
  export interface Emerald {
    front_default: string
    front_shiny: string
  }
  
  export interface FireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  export interface RubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
  }
  
  export interface GenerationIV {
    "diamond-pearl": DiamondPearl
    "heartgold-soulsilver": HeartgoldSoulsilver
    platinum: Platinum
  }
  
  export interface DiamondPearl {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface HeartgoldSoulsilver {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Platinum {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationV {
    "black-white": BlackWhite
  }
  
  export interface BlackWhite {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface Animated {
    back_default: string
    back_female: string
    back_shiny: string
    back_shiny_female: string
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  
  export interface GenerationVI {
    "omegaruby-alphasapphire": OmegarubyAlphasapphire
    "x-y": XY
  }
  
  export interface OmegarubyAlphasapphire {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  
  export interface XY {
    front_default: string
    front_female: string
    front_shiny: string
    front_shiny_female: string
  }
  
  export interface GenerationVII {
    icons: Icons
    "ultra-sun-ultra-moon": UltraSunUltraMoon
  }
  
  export interface Icons {
    front_default: string
    front_female: string
  }
  
  export interface UltraSunUltraMoon {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
  }
  
  export interface GenerationVIII {
    icons: Icons2
  }
  
  export interface Icons2 {
    front_default: string
    front_female: any
  }
  
  export interface StatItem {
    base_stat: number
    effort: number
    stat: Stat
  }
  
  export interface Stat {
    name: string
    url: string
  }
  
  export interface TypeItem {
    slot: number
    type: Type
  }
  
  export interface Type {
    name: string
    url: string
  }
  