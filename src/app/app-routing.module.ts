import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BridgeInfoComponent } from './bridge-info/bridge-info.component';
import { BridgeFormTemplateComponent } from './bridge-form-template/bridge-form-template.component';
import { BridgeFormReactiveComponent } from './bridge-form-reactive/bridge-form-reactive.component';

const routes: Routes = [
  { path: 'bridges/:id', component: BridgeInfoComponent },
  { path: 'bridges', component: BridgeInfoComponent },
  { path: 'new-template', component: BridgeFormTemplateComponent },
  { path: 'new-reactive', component: BridgeFormReactiveComponent },
  { path: '', redirectTo: 'bridges', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
