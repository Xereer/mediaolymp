import {ERoute} from "../../../../enums/route.enum";
import {ICourse} from "../interfaces/course.interface";
import {LCourse} from "../labels/course.label";

export abstract class CoursesLib {
  public static readonly coursesRoutes: ICourse[] = [
    {
      [LCourse.TITLE]: 'Курс по ДВИ',
      [LCourse.DESCRIPTION]: 'подготовка к вступительным испытаниям',
      [LCourse.SRC]: 'assets/images/courses/rggu.png',
      [LCourse.PATH]: ERoute.ADMISSION_TESTS,
      [LCourse.HAS_ROUTE]: true
    },
    {
      [LCourse.TITLE]: 'Курс по ДВИ в МГУ',
      [LCourse.DESCRIPTION]: 'подготовка к вступительным испытаниям в МГУ',
      [LCourse.SRC]: 'assets/images/courses/msu-s.png',
      [LCourse.PATH]: 'https://vk.com/wall-214661467_3780',
      [LCourse.HAS_ROUTE]: false
    },
    {
      [LCourse.TITLE]: 'Курс по ДВИ на филфак',
      [LCourse.DESCRIPTION]: 'подготовка к ДВИ на филологические факультеты МГУ, УРФУ и других вузов',
      [LCourse.SRC]: 'assets/images/courses/urfu.png',
      [LCourse.PATH]: 'https://vk.com/wall-221800351_773',
      [LCourse.HAS_ROUTE]: false
    },
    {
      [LCourse.TITLE]: 'Курс по основам журналистики',
      [LCourse.DESCRIPTION]: 'фундамент для олимпиад и ДВИ',
      [LCourse.SRC]: 'assets/images/courses/reu.png',
      [LCourse.PATH]: 'https://vk.com/wall-214661467_3577',
      [LCourse.HAS_ROUTE]: false
    },
    {
      [LCourse.TITLE]: 'Школа будущего олимпиадника',
      [LCourse.DESCRIPTION]: 'подготовка к сезону олимпиад 24/25',
      [LCourse.SRC]: 'assets/images/courses/hse.png',
      [LCourse.PATH]: 'https://vk.com/wall-214661467_3632',
      [LCourse.HAS_ROUTE]: false
    },
    {
      [LCourse.TITLE]: 'Курс по истории литературы',
      [LCourse.DESCRIPTION]: 'фундамент для олимпиад и ДВИ',
      [LCourse.SRC]: 'assets/images/courses/spbsu.png',
      [LCourse.PATH]: 'https://vk.com/wall-221800351_777',
      [LCourse.HAS_ROUTE]: false
    },
  ];
}
