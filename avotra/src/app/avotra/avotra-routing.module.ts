import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { BodyComponent } from "./components/body/body.component";
import { CalculatriceComponent } from "./components/calculatrice/calculatrice.component";
import { PrieresComponent } from "./components/prieres/prieres.component";

const routes: Routes = [
    { path: '', component: BodyComponent, 
        children: [
            { path: 'prieres', component: PrieresComponent },
            { path: 'calculatrices', component: CalculatriceComponent },
            { path: '', redirectTo: '/avotra/prieres', pathMatch: 'full' }
        ] 
    }
]
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AvotraRoutingModule { }
