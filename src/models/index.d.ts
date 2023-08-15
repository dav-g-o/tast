import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncItem } from "@aws-amplify/datastore";





type EagerPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mail?: string | null;
  readonly has?: Character | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerHasId?: string | null;
}

type LazyPlayer = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Player, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly mail?: string | null;
  readonly has: AsyncItem<Character | undefined>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly playerHasId?: string | null;
}

export declare type Player = LazyLoading extends LazyLoadingDisabled ? EagerPlayer : LazyPlayer

export declare const Player: (new (init: ModelInit<Player>) => Player) & {
  copyOf(source: Player, mutator: (draft: MutableModel<Player>) => MutableModel<Player> | void): Player;
}

type EagerCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Character, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly body?: number | null;
  readonly heart?: number | null;
  readonly mind?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyCharacter = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Character, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly name?: string | null;
  readonly body?: number | null;
  readonly heart?: number | null;
  readonly mind?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Character = LazyLoading extends LazyLoadingDisabled ? EagerCharacter : LazyCharacter

export declare const Character: (new (init: ModelInit<Character>) => Character) & {
  copyOf(source: Character, mutator: (draft: MutableModel<Character>) => MutableModel<Character> | void): Character;
}