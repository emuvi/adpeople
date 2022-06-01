import { AdMenuItem, AdModules, menuStartUp } from "adcommon";
import { AdNation } from "./ad-nation";
import { AdPeopleGroup } from "./ad-people-group";
import { AdRegion } from "./ad-region";

const items: AdMenuItem[] = [
  { module: AdModules.REGION, register: AdRegion },
  { module: AdModules.NATION, register: AdNation },
  { module: AdModules.PEOPLE_GROUP, register: AdPeopleGroup },
];

menuStartUp(items).style.putAsBody();
