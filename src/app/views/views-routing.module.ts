import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminOrTeacherComponent } from './admin-or-teacher/admin-or-teacher.component'
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PostCreateComponent } from './post-create/post-create.component'
import { ProfileComponent } from './profile/profile.component'
import { ShowPostComponent } from './show-post/show-post.component'

const routes: Routes = [
  {
    path : 'admin-or-teacher',
    component : AdminOrTeacherComponent
  },
  {
    path : 'post-create',
    component : PostCreateComponent
  },
  {
    path : 'profile',
    component : ProfileComponent
  },
  {
    path : 'edit-profile',
    component : EditProfileComponent
  },
  {
    path : 'show-post/:id',
    component : ShowPostComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
