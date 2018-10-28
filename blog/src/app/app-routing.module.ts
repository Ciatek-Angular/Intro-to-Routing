import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent } from './contact/contact.component'
import { PostComponent } from './post/post.component'

import { BlogService } from './blog/blog.service'

import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'

const routes: Routes = [
    { path:'', component: HomeComponent },
    { path:'blog', component: BlogComponent },
    { path:'post/:id', component: PostComponent },
    { path:'contact', component: ContactComponent }
]


@NgModule({
    declarations:[
        HomeComponent,
        BlogComponent,
        ContactComponent,
        PostComponent
    ],
    providers:[BlogService],
    imports:[
        RouterModule.forRoot(routes),
        CommonModule,
        FormsModule
    ],
    exports:[RouterModule]
})
export class AppRoutingModule {}