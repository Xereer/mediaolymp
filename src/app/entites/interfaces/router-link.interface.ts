import {LRouterLink} from "../labels/router-link.label";
import {ERoute} from "../enums/route.enum";

export interface IRouterLink {
  [LRouterLink.ROUTER_LINK]: ERoute;
  [LRouterLink.TITLE]: string;
}
