import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateFormsComponent } from './components/template-forms/template-forms.component';

const routes: Routes = [
  {path:'template-forms', component:TemplateFormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
