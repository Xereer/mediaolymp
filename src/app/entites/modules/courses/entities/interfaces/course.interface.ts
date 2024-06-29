import {LCourse} from "../labels/course.label";
import {ERoute} from "../../../../enums/route.enum";

export interface ICourse {
  [LCourse.TITLE]: string;
  [LCourse.DESCRIPTION]: string;
  [LCourse.SRC]: string,
  [LCourse.PATH]: string | ERoute;
  [LCourse.HAS_ROUTE]: boolean;
}
