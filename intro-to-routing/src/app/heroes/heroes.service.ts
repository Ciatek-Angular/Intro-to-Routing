import { Injectable } from '@angular/core'

@Injectable()
export class HeroDetailService {

    heroes = ['naruto', 'lofi', 'zoro' ]

    getName(id) {
        let name = this.heroes[id]
       return name
    }

    setName(id, name){
        this.heroes[id] = name
    }
}