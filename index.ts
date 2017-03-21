export {ScrollTo} from './src/scrollTo';

import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { SampleComponent } from './src/sample.component';
// import { SampleDirective } from './src/sample.directive';
// import { SamplePipe } from './src/sample.pipe';
import { ScrollTo } from './src/scrollTo';

// export * from './src/sample.component';
// export * from './src/sample.directive';
// export * from './src/sample.pipe';
export * from './src/scrollTo';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
   ScrollTo,
  ],
  exports: [
   ScrollTo,
  ]
})
export class ScrollToModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ScrollToModule
    };
  }
}