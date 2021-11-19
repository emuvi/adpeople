import { QinColumn, QinLabel } from "qinpel-cps"

class AdPeople extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, AdPeople!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new AdPeople().putAsBody();