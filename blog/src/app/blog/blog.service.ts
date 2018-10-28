import { Injectable } from '@angular/core'


@Injectable()
export class BlogService {

    posts = ['Nature Beauty', 'Raining Cats and Dogs', 'Global Warming']

    getName(id){
        return this.posts[id]
    }

    setName(id, name){
        this.posts[id] = name
    }

}