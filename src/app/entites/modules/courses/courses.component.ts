import {Component, inject} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {CoursesLib} from "./entities/libs/courses.lib";
import {ICourse} from "./entities/interfaces/course.interface";
import {LCourse} from "./entities/labels/course.label";
import {ERoute} from "../../enums/route.enum";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss',
  standalone: true,
  imports: [RouterLink]
})
export class CoursesComponent {
  private _router: Router = inject(Router);

  public courses: ICourse[] = CoursesLib.coursesRoutes;

  protected readonly LCourse: typeof LCourse = LCourse;

  public navigateTo(course: ICourse): void {
    if (course[LCourse.HAS_ROUTE]) {
      this._router.navigate( [`${ERoute.COURSES}/${course[LCourse.PATH]}`]);
      return;
    }
    const a: HTMLAnchorElement = document.createElement('a');
    a.href = course[LCourse.PATH];
    a.target = '_blank'
    a.click();
    URL.revokeObjectURL(course[LCourse.PATH]);
  }
}
