import { Injectable } from '@angular/core';

export abstract class CUiKitConfigArgs {}

@Injectable()
export class CUiKitConfig implements CUiKitConfigArgs {
  constructor(config: CUiKitConfigArgs = {}) {
    Object.assign(this, config);
  }
}
