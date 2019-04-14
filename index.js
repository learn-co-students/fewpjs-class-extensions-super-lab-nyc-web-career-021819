// Write your classes here
class Tree {

    constructor(species) {
        this._species = species
    }

     static definition() {
        return "A tree is a perennial plant with an elongated stem, or trunk, supporting branches and leaves."
    }

}// ends the Tree Class

class Deciduous extends Tree {

    constructor(species, name) {
      super(species)
      this._name = name
    }

    static definition() {
      return (super.definition() + " Deciduous trees shed their leaves annually.")
    }

}//ends the Deciduous class

class Evergreen extends Tree {
    constructor(species, name) {
      super(species)
      this._name = name
    }

    static definition() {
      return (super.definition() + " Evergreens keep their leaves all year round.")
    }

 }//end of Evergreen
