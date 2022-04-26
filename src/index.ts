import { AdRegion } from "./ad-region";
import { AdNation } from "./ad-nation";
import { menuStartUp, AdMenuItem, AdModules } from "adcommon";

const items: AdMenuItem[] = [
  { module: AdModules.REGION, Action: AdRegion },
  { module: AdModules.NATION, Action: AdNation },
];

menuStartUp(items).style.putAsBody();