import { AdExpect, AdTools } from "adcommon";
import { QinBoolean, QinButton, QinColumn, QinField, QinLabel, QinLine, QinString } from "qinpel-cps";

// TODO - Change to the AdRegister class
export class AdRegion extends QinColumn {

    private expect: AdExpect;
    private qinBody = new QinLine();
    private qinCodigo = new QinField("Código", new QinString(null, 4));
    private qinAtivo = new QinField("Ativo", new QinBoolean(null));
    private qinNome = new QinField("Nome", new QinString(null, 40));
    private qinButton = new QinButton(null, new QinLabel("Insert"));

    public constructor(expect: AdExpect) {
        super();
        this.expect = expect;
        this.qinBody.install(this);
        this.qinCodigo.install(this.qinBody);
        this.qinAtivo.install(this.qinBody);
        this.qinNome.install(this.qinBody);
        this.qinButton.install(this.qinBody);
        this.qinButton.addAction(qinEvent => {
            if (qinEvent.isPrimary()) {
                
            }
        });
    }

}