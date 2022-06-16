import { AdExpect, AdModule, AdRegBase, AdRegister, AdRegistry, AdTools } from "adcommon";
import { QinTool } from "qinpel-cps";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = { base, name: "negocios" };

export const register: AdRegBase = {
  registry,
};

export class AdBusiness extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addField(AdTools.newAdFieldString("codigo", "Código", 4).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldString("nome", "Nome", 60));
    this.prepare();
  }
}
