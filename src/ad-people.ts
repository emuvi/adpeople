import { AdExpect, AdModule, AdRegBase, AdRegister, AdRegistry, AdTools } from "adcommon";
import { QinTool } from "qinpel-cps";

const base = QinTool.qinpel.chief.loadConfig(QinTool.qinpel.our.names.QinBaseSelected);

export const registry: AdRegistry = { base, name: "pessoas" };

export const register: AdRegBase = {
  registry,
};

export class AdPeople extends AdRegister {
  public constructor(module: AdModule, expect: AdExpect) {
    super(module, expect, register);
    this.addTab("Principal");
    this.addField(AdTools.newAdFieldString("codigo", "Código", 8).putKey());
    this.addField(AdTools.newAdFieldAtivo());
    this.addField(AdTools.newAdFieldBoolean("potencial", "Potencial"));
    this.addField(AdTools.newAdFieldBoolean("cliente", "Cliente"));
    this.addField(AdTools.newAdFieldBoolean("fornecedor", "Fornecedor"));
    this.addField(AdTools.newAdFieldBoolean("transportadora", "Transportadora"));
    this.addField(AdTools.newAdFieldBoolean("colaborador", "Colaborador"));
    this.addField(AdTools.newAdFieldBoolean("consultor", "Consultor"));
    this.addField(AdTools.newAdFieldString("nome", "Nome", 80));
    this.addField(AdTools.newAdFieldString("fantasia", "Fantasia", 60));
    this.addField(AdTools.newAdFieldCombo("natureza", "Natureza", naturezaFieldItems));
    this.addField(AdTools.newAdFieldString("cnpjcpf", "CNPJ/CPF", 20));
    this.addField(AdTools.newAdFieldString("insestadual", "Ins. Estadual", 20));
    this.addTab("Contato");
    this.addField(AdTools.newAdFieldString("contato", "Contato", 45));
    this.prepare();
  }
}

const naturezaFieldItems = [
  {
    title: "",
    value: "",
  },
  {
    title: "Física",
    value: "F",
  },
  {
    title: "Jurídica",
    value: "J",
  },
];
