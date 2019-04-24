import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonDirective } from '../directives/button.directive';
import { CUiKitConfigArgs, CUiKitConfig } from '../config/c-ui-kit-config';
import { AlertDirective } from '../directives/alert.directive';

@NgModule({
  declarations: [ ButtonDirective, AlertDirective ],
  exports: [ ButtonDirective, AlertDirective ],
  imports: [ CommonModule ]
})
export class CUiKitModule {
  public static forRoot(config: CUiKitConfigArgs): ModuleWithProviders {
    return {
      ngModule: CUiKitModule,
      providers: [
        {
          provide: CUiKitConfig,
          useValue: config
        }
      ]
    };
  }
}
