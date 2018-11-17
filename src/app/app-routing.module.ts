import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HospitalityquizComponent } from './hospitalityquiz/hospitalityquiz.component';
import { AirlinesquizComponent } from './airlinesquiz/airlinesquiz.component';

const routes: Routes = [
{path:'hotel',component:HospitalityquizComponent},
{path:'airlines',component:AirlinesquizComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent=[HospitalityquizComponent,AirlinesquizComponent]
