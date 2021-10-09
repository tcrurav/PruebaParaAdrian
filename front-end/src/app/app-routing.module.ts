import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./create/create.module').then( m => m.CreatePageModule)
  },
  {
    path: 'modify/:idTask',
    loadChildren: () => import('./modify/modify.module').then( m => m.ModifyPageModule)
  },
  {
    path: 'task-details/:idTask',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  }
];
  /* {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
 
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'forum',
    loadChildren: () => import('./forum/forum.module').then( m => m.ForumPageModule)
  },
]; */

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
