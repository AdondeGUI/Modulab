import{ BrowserModule } from '@angular/platform-browser';
import{ TextData } from './models/text-data';


@NgModule({
    imports: [BrowserModule],
    declarations:[TextData],
    exports:[TextData]
})
export class DomainModule{

}