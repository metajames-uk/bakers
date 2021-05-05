import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesComponent } from './recipes.component';

@NgModule({
  imports: [SharedModule, RecipesRoutingModule],
  declarations: [RecipesComponent],
})
export class RecipesModule {}
