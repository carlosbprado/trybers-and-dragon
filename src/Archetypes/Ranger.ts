import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Ranger extends Archetype {
  private _energyType : EnergyType;
  static _createdRacesInstances = 0;

  constructor(name:string) {
    super(name);
    this._energyType = 'stamina';
    Ranger._createdRacesInstances += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdRacesInstances;
  }
}

export default Ranger;