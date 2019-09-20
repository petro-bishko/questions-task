import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: () => import('./pages/main/main.module').then((m) => m.MainModule)
  },
  {
    path: 'questions',
    loadChildren: () => import('./pages/questions/questions.module').then((m) => m.QuestionsModule)
  },
  {
    path: '**',
    redirectTo: ''
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
