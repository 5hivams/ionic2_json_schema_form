import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Framework, WidgetLibraryModule } from 'angular2-json-schema-form';
import { IonicModule } from 'ionic-angular';
import { IonicButtonComponent } from './widgets/button/ionic-button.component';
import { IonicInputComponent } from './widgets/input/ionic-input.component';
import { IonicSelectComponent } from './widgets/select/ionic-select.component';
import { IonicCheckboxComponent } from './widgets/checkbox/ionic-checkbox.component';
import { IonicTextareaComponent } from './widgets/textarea/ionic-textarea.component';
import { IonicToggleComponent } from './widgets/toggle/ionic-toggle.component';
import { IonicFrameworkComponent } from './ionic-framework.component';
import { IonicTabsComponent } from './widgets/tabs/ionic-tabs.component';
import { IonicSectionComponent } from './widgets/section/ionic-section.component';
import { IonicRootComponent } from './widgets/root/ionic-root.component';
import { IonicFramework } from './ionic-framework';

export const IONIC_FRAMEWORK_COMPONENTS = [
  IonicButtonComponent,
  IonicInputComponent,
  IonicCheckboxComponent,
  IonicTextareaComponent,
  IonicSelectComponent,
  IonicToggleComponent,
  IonicFrameworkComponent,
  IonicSectionComponent,
  IonicTabsComponent,
  IonicRootComponent
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WidgetLibraryModule,
  ],
  declarations: [ ...IONIC_FRAMEWORK_COMPONENTS ],
  exports: [ ...IONIC_FRAMEWORK_COMPONENTS ],
  entryComponents: [ ...IONIC_FRAMEWORK_COMPONENTS ]
})
export class IonicFrameworkModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: IonicFrameworkModule,
      providers: [
        { provide: Framework, useClass: IonicFramework, multi: true }
      ]
    };
  }
}
