# ng2-scroll-to
angular 2 library to animate scrolling to anchor links.

## Features
- jump to the top edge of an element referenced in the href-attribute (`href="#mytarget"` or `scrollTargetSelector="#mytarget"`)
- jump to the the to given coordinates (`scrollYTarget="0"`)

## Install
```sh
npm install ng2-scroll-to --save
```
## Usage
Import the directive and add it to the directives array of your component. 
// app.module.ts


```typescript
import {ScrollToDirective} from 'ng2-scroll-to';

@NgModule({
    imports: [
         ....,
        ScrollToDirective
        ]
})
export class AppModule {
}
```
In your template you may now add the `scrollTo` attribute to anchors elements with an href attribute pointing towards an anchor on the same page (e.g. #anchor) or to others html elements adding `scrollTargetSelector` or `scrollYTarget` attributes.

## Attributes

**scrollTo** required

**scrollableElementSelector** 

**scrollTargetSelector**

**scrollYTarget**
