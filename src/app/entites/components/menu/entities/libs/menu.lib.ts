import {IRouterLink} from "../../../../interfaces/router-link.interface";
import {ERoute} from "../../../../enums/route.enum";
import {LRouterLink} from "../../../../labels/router-link.label";

export abstract class MenuLib {
  public static readonly menuRoutes: IRouterLink[] = [
    {
      [LRouterLink.ROUTER_LINK]: ERoute.HOME,
      [LRouterLink.TITLE]: 'О школе'
    },
    {
      [LRouterLink.ROUTER_LINK]: ERoute.COURSES,
      [LRouterLink.TITLE]: 'Курсы'
    },
    {
      [LRouterLink.ROUTER_LINK]: ERoute.RESULTS,
      [LRouterLink.TITLE]: 'Результаты'
    },
    {
      [LRouterLink.ROUTER_LINK]: ERoute.INTELLIGENCE,
      [LRouterLink.TITLE]: 'Сведения об образовательной организации'
    },
    // {
    //   [LRouterLink.ROUTER_LINK]: ERoute.HOME,
    //   [LRouterLink.TITLE]: 'Отзывы'
    // },
    // {
    //   [LRouterLink.ROUTER_LINK]: ERoute.HOME,
    //   [LRouterLink.TITLE]: 'Родителям'
    // }
  ];
}
