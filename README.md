# ng2-scroll-to
angular 2 library to animate scrolling to anchor links.

## Features
- jump to the top edge of an element referenced in the href attribute (`href="#mytarget"`) or scrollTargetSelector attribute(`scrollTargetSelector="#mytarget"`)
- jump to the the to given coordinates (`scrollYTarget="0"`)

## Install
```sh
npm install ng2-scroll-to --save
```
## Usage
Import ScrollToModule and add it to the imports array of your component. 



```typescript
// app.module.ts
import {ScrollToModule} from 'ng2-scroll-to';

@NgModule({
    imports: [
         ....,
        ScrollToModule.forRoot(),
        ]
})
export class AppModule {
}
```


In your template you may now add the `scrollTo` attribute to anchors elements.

```typescript
// app.awesome.component.ts
@Component({
   ...
   template: `...
        <a scrollTo href="#main-section">Scroll to main section</a>
        <button scrollTo scrollTargetSelector="#test-section">Scroll to test section</a>
        <button scrollTo scrollableElementSelector="#container" scrollYTarget="0">Go top</a>
        <!-- Further content here -->
        <div id="container">
            <section id="main-section">Bla bla bla</section>
            <section id="test-section">Bla bla bla</section>
        <div>
   ...`,
})
export class AwesomeComponent {
}
```


## Attributes

**scrollTo** *required*

**scrollTargetSelector**  *string* Element target for scroll.

**href**  *string* Element target for scroll.

**scrollYTarget** *number* Y axis target for scroll.

**scrollableElementSelector** *string* Scrollable element selector. Sometimes there are multiple scrollable elements in your page; through this attribute you may specify the element you want to scroll.
