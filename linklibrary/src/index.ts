import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { Sample2Component } from './folder/sample2.component';
import { SampleDirective } from './sample.directive';
import { SamplePipe } from './sample.pipe';
import { SampleService } from './sample.service';

export * from './sample.component';
export * from './folder/sample2.component';
export * from './sample.directive';
export * from './sample.pipe';
export * from './sample.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SampleComponent,
    Sample2Component,
    SampleDirective,
    SamplePipe
  ],
  exports: [
    SampleComponent,
    Sample2Component,
    SampleDirective,
    SamplePipe
  ]
})
export class SampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [SampleService]
    };
  }
}
