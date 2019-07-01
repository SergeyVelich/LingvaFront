import { NgModule } from '@angular/core';

import { SharedModule } from '../module-shared/shared.module';

import { GroupRoutingModule } from './group-routing.module';

import { GroupComponent } from './components/group/group.component';
import { GroupAddOrUpdateComponent } from './components/group-add-or-update/group-add-or-update.component';
import { GroupGridComponent } from './components/group-grid/group-grid.component';

@NgModule({
  declarations: [
    GroupComponent,
    GroupAddOrUpdateComponent,
    GroupGridComponent
  ],
  imports: [
    SharedModule,
    GroupRoutingModule,
  ],
})
export class GroupModule { }
