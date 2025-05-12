import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

// Importar los componentes Standalone
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SearchResultComponent } from './components/search-result/search-result.component';
import { ProposalComponent } from './components/proposal/proposal.component';

@Component({
    selector: 'app-root',
    standalone: true,  // Cambiar a standalone para que funcione sin módulos
    imports: [
      SearchBarComponent,
      SearchResultComponent,
      ProposalComponent
    ],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {}

bootstrapApplication(AppComponent, {
    providers: [
        provideRouter([])
    ]
});
