import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private _energyType : EnergyType;
  static _createdRacesInstances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._createdRacesInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdRacesInstances;
  }
}

export default Warrior;