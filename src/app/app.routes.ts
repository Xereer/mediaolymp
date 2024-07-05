import {Routes} from '@angular/router';
import {HomeComponent} from "./entites/modules/home/home.component";
import {ResultsComponent} from "./entites/modules/results/results.component";
import {CoursesComponent} from "./entites/modules/courses/courses.component";
import {ERoute} from "./entites/enums/route.enum";
import {
  AdmissionTestsComponent
} from "./entites/modules/courses/entities/modules/admission-tests/admission-tests.component";
import {IntelligenceComponent} from "./entites/modules/intelligence/intelligence.component";

export const routes: Routes = [
  {
    path: ERoute.HOME,
    component: HomeComponent
  },
  {
    path: ERoute.COURSES,
    children: [
      {
        path: '',
        component: CoursesComponent,
      },
      {
        path: ERoute.ADMISSION_TESTS,
        component: AdmissionTestsComponent
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
  {
    path: ERoute.RESULTS,
    component: ResultsComponent,
  },
  {
    path: ERoute.INTELLIGENCE,
    component: IntelligenceComponent
  },
  // {
  //   path: ERoute.INFO,
  //   component:
  // },
  {
    path: '',
    redirectTo: ERoute.HOME,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ERoute.HOME
  }
];
