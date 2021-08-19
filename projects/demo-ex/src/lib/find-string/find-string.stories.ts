// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { Story } from '@storybook/angular/types-6-0';
import { FindStringComponent } from './find-string.component';
import { moduleMetadata } from '@storybook/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoExModule } from '../demo-ex.module';

export default {
    title: 'Example',
    component: FindStringComponent,
    decorators: [
        moduleMetadata({
            imports: [
                BrowserAnimationsModule,
                DemoExModule
            ]
        })
    ],
    // argTypes: {
    //     color: { control: 'color' },
    // },
    parameters: {
        backgrounds: {
          default: 'aliceblue',
          values: [
            { name: 'aliceblue', value: 'aliceblue' },
          ],
        }
    }
};
export const FindString = (args: any) => {
    return {
      props: args,
      component: FindStringComponent,
    };
  };
FindString.args = {
  color: 'red'
};
  
