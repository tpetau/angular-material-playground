import { Routes } from '@angular/router';
import { PipelineComponent } from './features/pipeline/pipeline.component';
import { SignalsComponent } from './features/signals/signals.component';
import { ComponentsComponent } from './features/components/components.component';
import { DialogsComponent } from './features/dialogs/dialogs.component';

export const routes: Routes = [
    { path: 'pipelines', component: PipelineComponent },
    { path: 'signals', component: SignalsComponent },
    { path: 'components', component: ComponentsComponent },
    { path: 'modal', component: DialogsComponent }
];
