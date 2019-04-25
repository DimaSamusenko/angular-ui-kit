import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CUiKitConfigArgs, CUiKitConfig } from '../config/c-ui-kit-config';
import { ButtonComponent } from '../components/button/button.component';
import { SpinnerComponent } from '../components/spinner/spinner.component';

@NgModule({
  declarations: [ ButtonComponent, SpinnerComponent ],
  exports: [ ButtonComponent, SpinnerComponent ],
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
