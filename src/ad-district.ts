import {
  AdExpect,
  AdFilter,
  AdModule,
  AdModules,
  AdRegBase,
  AdRegister,
  AdRegistry,
  AdTools,
} from "adcommon";
import { QinTool } from "qinpel-cps";
import { registry as city_regy } from "./ad-city";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

const registry: AdRegistry = {
  base,
  name: "bairros",
};

const register: AdRegBase = {
  registry,
  joins: [
    {
      module: AdModules.CITY,
      registry: city_regy,
      alias: "city",
      filters: [
        new AdFilter({
          linked: { name: "cidade", with: "codigo" },
        }),
      ],
    },
  ],
};

export class AdDistrict extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(AdTools.newAdFieldString("cidade", "Cidade - Cód.", 6).putKey());
    this.addField(AdTools.newAdFieldString("city.nome", "Cidade - Nome", 60));
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
