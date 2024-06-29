import {IImage} from "../../../../interfaces/image.interface";
import {LImage} from "../../../../labels/image.label";

export abstract class HomeLib {
  public static readonly reasonsCards: IImage[] = [
    {
      [LImage.SRC]: 'assets/images/home/platform.jpg',
      [LImage.ALT]: 'занимаемся на удобной образовательной плаформе'
    },
    {
      [LImage.SRC]: 'assets/images/home/mentors-2.png',
      [LImage.ALT]: 'смешанный формат обучения: теоретические лекции в записи и практические онлайн-вебинары'
    },
    {
      [LImage.SRC]: 'assets/images/home/video-call.jpg',
      [LImage.ALT]: 'программа составлена совместно с преподавателями, которые входят в комиссии олимпиад или ДВИ'
    }
  ];

  public static readonly points: IImage[] = [
    {
      [LImage.SRC]: 'assets/svg/home/success.svg',
      [LImage.ALT]: 'достижение результата'
    },
    {
      [LImage.SRC]: 'assets/svg/home/education.svg',
      [LImage.ALT]: 'грамотную программу подготовки'
    },
    {
      [LImage.SRC]: 'assets/svg/home/love.svg',
      [LImage.ALT]: 'особый подход'
    }
  ];
}
