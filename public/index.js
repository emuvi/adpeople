(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModules = exports.AdScope = exports.AdOptions = void 0;
var AdOptions;
(function (AdOptions) {
    AdOptions["MODULE"] = "module";
    AdOptions["SCOPES"] = "scopes";
    AdOptions["FILTERS"] = "filters";
})(AdOptions = exports.AdOptions || (exports.AdOptions = {}));
var AdScope;
(function (AdScope) {
    AdScope["ALL"] = "all";
    AdScope["INSERT"] = "insert";
    AdScope["SEARCH"] = "search";
    AdScope["MUTATE"] = "mutate";
    AdScope["DELETE"] = "delete";
})(AdScope = exports.AdScope || (exports.AdScope = {}));
var AdModules;
(function (AdModules) {
    AdModules["BUSINESS"] = "business";
    AdModules["REGION"] = "region";
    AdModules["NATION"] = "nation";
    AdModules["STATE"] = "state";
    AdModules["CITY"] = "city";
    AdModules["DISTRICT"] = "district";
    AdModules["PEOPLE"] = "people";
    AdModules["PEOPLE_GROUP"] = "people_group";
    AdModules["PEOPLE_SUBGROUP"] = "people_subgroup";
})(AdModules = exports.AdModules || (exports.AdModules = {}));

},{}],2:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdExpect = void 0;
class AdExpect {
    constructor(options) {
        this._scopes = options.scopes;
        this._filters = options.filters;
        this._waiters = options.waiters;
    }
    get scopes() {
        return this._scopes;
    }
    get filters() {
        return this._filters;
    }
    get waiters() {
        return this._waiters;
    }
}
exports.AdExpect = AdExpect;

},{}],3:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdField = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdField {
    constructor(newer) {
        this._title = newer.title;
        this._name = newer.name;
        this._kind = newer.kind;
        this._options = newer.options;
        this._key = newer.key ? true : false;
    }
    newEdit() {
        return qinpel_cps_1.QinMutantsArm.newEdit(this._kind, this._options);
    }
    get title() {
        return this._title;
    }
    get name() {
        return this._name;
    }
    get kind() {
        return this._kind;
    }
    get options() {
        return this._options;
    }
    get key() {
        return this._key;
    }
}
exports.AdField = AdField;

},{"qinpel-cps":16}],4:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdFilterUnion = exports.AdFilterMode = exports.AdFilterItem = exports.AdFilters = void 0;
class AdFilters {
    constructor(items) {
        this._items = items;
    }
    get items() {
        return this._items;
    }
}
exports.AdFilters = AdFilters;
class AdFilterItem {
    constructor(name, mode, value, union) {
        this._name = name;
        this._mode = mode;
        this._value = value;
        this._union = union;
    }
    get name() {
        return this._name;
    }
    get mode() {
        return this._mode;
    }
    get value() {
        return this._value;
    }
    get union() {
        return this._union;
    }
}
exports.AdFilterItem = AdFilterItem;
var AdFilterMode;
(function (AdFilterMode) {
    AdFilterMode["EQUALS"] = "equals";
    AdFilterMode["DIFFERENT"] = "different";
    AdFilterMode["BIGGER"] = "bigger";
    AdFilterMode["LESSER"] = "lesser";
    AdFilterMode["BIGGER_OR_EQUALS"] = "bigger_or_equals";
    AdFilterMode["LESSER_OR_EQUALS"] = "lesser_or_equals";
})(AdFilterMode = exports.AdFilterMode || (exports.AdFilterMode = {}));
var AdFilterUnion;
(function (AdFilterUnion) {
    AdFilterUnion["OR"] = "or";
    AdFilterUnion["AND"] = "and";
})(AdFilterUnion = exports.AdFilterUnion || (exports.AdFilterUnion = {}));

},{}],5:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdModel = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdModel {
    constructor(table) {
        this._table = table;
        this._fields = [];
    }
    addField(field) {
        this._fields.push(field);
    }
    insert(values) {
        qinpel_cps_1.QinTools.qinpel();
    }
    search(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
    update(values, filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
    delete(filters) {
        qinpel_cps_1.QinTools.qinpel();
    }
}
exports.AdModel = AdModel;

},{"qinpel-cps":16}],6:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegBar = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_register_1 = require("./ad-register");
class AdRegBar extends qinpel_cps_1.QinLine {
    constructor(register) {
        super();
        this._qinMode = new qinpel_cps_1.QinIconPick();
        this._qinInsert = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceAdd);
        this._qinSearch = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FaceSearch);
        this._qinMutate = new qinpel_cps_1.QinIcon(qinpel_cps_1.QinAsset.FacePencil);
        this._reg = register;
        this._qinMode.install(this);
        this._qinMode.addIcon(this._qinInsert);
        this._qinMode.addIcon(this._qinSearch);
        this._qinMode.addIcon(this._qinMutate);
        this._qinInsert.addAction((ev) => {
            if (ev.isPrimary) {
                this._reg.tryChangeMode(ad_register_1.AdRegMode.INSERT);
            }
        });
        this._qinSearch.addAction((ev) => {
            if (ev.isPrimary) {
                this._reg.tryChangeMode(ad_register_1.AdRegMode.SEARCH);
            }
        });
        this._qinMutate.addAction((ev) => {
            if (ev.isPrimary) {
                this._reg.tryChangeMode(ad_register_1.AdRegMode.MUTATE);
            }
        });
    }
    setMode(mode) {
        this._qinMode.setData(null);
        if (mode) {
            switch (mode) {
                case ad_register_1.AdRegMode.INSERT:
                    this._qinMode.setData(this._qinInsert.asset);
                    break;
                case ad_register_1.AdRegMode.SEARCH:
                    this._qinMode.setData(this._qinSearch.asset);
                    break;
                case ad_register_1.AdRegMode.MUTATE:
                    this._qinMode.setData(this._qinMutate.asset);
                    break;
            }
        }
    }
}
exports.AdRegBar = AdRegBar;

},{"./ad-register":10,"qinpel-cps":16}],7:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegEditor = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegEditor extends qinpel_cps_1.QinPanel {
    constructor(register) {
        super();
        this._tabs = null;
        this._column = null;
        this._line = null;
        this._reg = register;
    }
    addTab(title) {
        if (this._tabs == null) {
            this._tabs = new qinpel_cps_1.QinTabs();
            this._tabs.install(this);
        }
        this._column = new qinpel_cps_1.QinColumn();
        this._tabs.addTab({ title, viewer: this._column });
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addLine() {
        if (this._column == null) {
            this._column = new qinpel_cps_1.QinColumn();
            this._column.install(this);
        }
        this._line = new qinpel_cps_1.QinLine();
        this._line.install(this._column);
    }
    addField(field) {
        if (this._line == null) {
            this.addLine();
        }
        const editor = qinpel_cps_1.QinMutantsArm.newEdit(field.kind, field.options);
        if (field.title) {
            const viewer = new qinpel_cps_1.QinField(field.title, editor);
            viewer.install(this._line);
        }
        else {
            editor.install(this._line);
        }
    }
}
exports.AdRegEditor = AdRegEditor;

},{"qinpel-cps":16}],8:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegSearch = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegSearch extends qinpel_cps_1.QinPanel {
    constructor(register) {
        super();
        this._lines = new qinpel_cps_1.QinColumn();
        this._clauses = new Array();
        this._reg = register;
        this._lines.install(this);
        const first = new SearchClause();
        this._clauses.push(first);
        first.install(this._lines);
    }
    addField(field) {
        this._clauses.forEach(clause => {
            clause.fields.addItem({ title: field.title, value: field.name });
        });
    }
}
exports.AdRegSearch = AdRegSearch;
class SearchClause extends qinpel_cps_1.QinLine {
    constructor() {
        super();
        this.negate = new qinpel_cps_1.QinBoolean();
        this.fields = new qinpel_cps_1.QinCombo();
        this.conditions = new SearchCondition();
        this.valued = new qinpel_cps_1.QinString();
        this.negate.install(this);
        this.fields.install(this);
        this.conditions.install(this);
        this.valued.install(this);
    }
}
class SearchCondition extends qinpel_cps_1.QinCombo {
    constructor() {
        super();
        this.addItem({ title: "=", value: "EQUALS" });
        this.addItem({ title: ">", value: "BIGGER" });
        this.addItem({ title: "<", value: "LESSER" });
        this.addItem({ title: ">=", value: "BIGGER_EQUALS" });
        this.addItem({ title: "<=", value: "LESSER_EQUALS" });
        this.addItem({ title: "$%", value: "STARTS_WITH" });
        this.addItem({ title: "%$", value: "ENDS_WITH" });
        this.addItem({ title: "%$%", value: "CONTAINS" });
    }
}

},{"qinpel-cps":16}],9:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegTable = void 0;
const qinpel_cps_1 = require("qinpel-cps");
class AdRegTable extends qinpel_cps_1.QinTable {
    constructor(register) {
        super();
        this._reg = register;
    }
}
exports.AdRegTable = AdRegTable;

},{"qinpel-cps":16}],10:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegMode = exports.AdRegister = void 0;
const qinpel_cps_1 = require("qinpel-cps");
const ad_model_1 = require("./ad-model");
const ad_reg_bar_1 = require("./ad-reg-bar");
const ad_reg_editor_1 = require("./ad-reg-editor");
const ad_reg_search_1 = require("./ad-reg-search");
const ad_reg_table_1 = require("./ad-reg-table");
class AdRegister extends qinpel_cps_1.QinColumn {
    constructor(expect, table) {
        super();
        this._bar = new ad_reg_bar_1.AdRegBar(this);
        this._body = new qinpel_cps_1.QinStack();
        this._editor = new ad_reg_editor_1.AdRegEditor(this);
        this._search = new ad_reg_search_1.AdRegSearch(this);
        this._table = new ad_reg_table_1.AdRegTable(this);
        this._expect = expect;
        this._model = new ad_model_1.AdModel(table);
        this._bar.install(this);
        this._body.install(this);
        this._body.stack(this._editor);
        this._body.stack(this._search);
        this._table.install(this);
    }
    get expect() {
        return this._expect;
    }
    get model() {
        return this._model;
    }
    addTab(title) {
        this._editor.addTab(title);
    }
    addLine() {
        this._editor.addLine();
    }
    addField(field) {
        this._model.addField(field);
        this._editor.addField(field);
        this._search.addField(field);
        let heads = this._table.addHead(field.title);
    }
    tryChangeMode(mode) {
        if (mode === AdRegMode.SEARCH) {
            this._body.show(this._search);
        }
        else {
            this._body.show(this._editor);
        }
        this._bar.setMode(mode);
    }
}
exports.AdRegister = AdRegister;
var AdRegMode;
(function (AdRegMode) {
    AdRegMode["INSERT"] = "insert";
    AdRegMode["SEARCH"] = "search";
    AdRegMode["MUTATE"] = "mutate";
})(AdRegMode = exports.AdRegMode || (exports.AdRegMode = {}));

},{"./ad-model":5,"./ad-reg-bar":6,"./ad-reg-editor":7,"./ad-reg-search":8,"./ad-reg-table":9,"qinpel-cps":16}],11:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = void 0;
const ad_consts_1 = require("./ad-consts");
function newAdOption(module, scopes, filters) {
    var result = {};
    result[ad_consts_1.AdOptions.MODULE] = module;
    result[ad_consts_1.AdOptions.SCOPES] = scopes;
    result[ad_consts_1.AdOptions.FILTERS] = filters;
    return result;
}
exports.AdTools = {
    newAdOption
};

},{"./ad-consts":1}],12:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdTools = exports.AdRegMode = exports.AdRegister = exports.AdRegTable = exports.AdRegSearch = exports.AdRegEditor = exports.AdRegBar = exports.AdModel = exports.AdFilterUnion = exports.AdFilterMode = exports.AdFilterItem = exports.AdFilters = exports.AdField = exports.AdExpect = exports.AdModules = exports.AdScope = exports.AdOptions = void 0;
var ad_consts_1 = require("./ad-consts");
Object.defineProperty(exports, "AdOptions", { enumerable: true, get: function () { return ad_consts_1.AdOptions; } });
var ad_consts_2 = require("./ad-consts");
Object.defineProperty(exports, "AdScope", { enumerable: true, get: function () { return ad_consts_2.AdScope; } });
var ad_consts_3 = require("./ad-consts");
Object.defineProperty(exports, "AdModules", { enumerable: true, get: function () { return ad_consts_3.AdModules; } });
var ad_expect_1 = require("./ad-expect");
Object.defineProperty(exports, "AdExpect", { enumerable: true, get: function () { return ad_expect_1.AdExpect; } });
var ad_field_1 = require("./ad-field");
Object.defineProperty(exports, "AdField", { enumerable: true, get: function () { return ad_field_1.AdField; } });
var ad_filters_1 = require("./ad-filters");
Object.defineProperty(exports, "AdFilters", { enumerable: true, get: function () { return ad_filters_1.AdFilters; } });
var ad_filters_2 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterItem", { enumerable: true, get: function () { return ad_filters_2.AdFilterItem; } });
var ad_filters_3 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterMode", { enumerable: true, get: function () { return ad_filters_3.AdFilterMode; } });
var ad_filters_4 = require("./ad-filters");
Object.defineProperty(exports, "AdFilterUnion", { enumerable: true, get: function () { return ad_filters_4.AdFilterUnion; } });
var ad_model_1 = require("./ad-model");
Object.defineProperty(exports, "AdModel", { enumerable: true, get: function () { return ad_model_1.AdModel; } });
var ad_reg_bar_1 = require("./ad-reg-bar");
Object.defineProperty(exports, "AdRegBar", { enumerable: true, get: function () { return ad_reg_bar_1.AdRegBar; } });
var ad_reg_editor_1 = require("./ad-reg-editor");
Object.defineProperty(exports, "AdRegEditor", { enumerable: true, get: function () { return ad_reg_editor_1.AdRegEditor; } });
var ad_reg_search_1 = require("./ad-reg-search");
Object.defineProperty(exports, "AdRegSearch", { enumerable: true, get: function () { return ad_reg_search_1.AdRegSearch; } });
var ad_reg_table_1 = require("./ad-reg-table");
Object.defineProperty(exports, "AdRegTable", { enumerable: true, get: function () { return ad_reg_table_1.AdRegTable; } });
var ad_register_1 = require("./ad-register");
Object.defineProperty(exports, "AdRegister", { enumerable: true, get: function () { return ad_register_1.AdRegister; } });
var ad_register_2 = require("./ad-register");
Object.defineProperty(exports, "AdRegMode", { enumerable: true, get: function () { return ad_register_2.AdRegMode; } });
var ad_tools_1 = require("./ad-tools");
Object.defineProperty(exports, "AdTools", { enumerable: true, get: function () { return ad_tools_1.AdTools; } });

},{"./ad-consts":1,"./ad-expect":2,"./ad-field":3,"./ad-filters":4,"./ad-model":5,"./ad-reg-bar":6,"./ad-reg-editor":7,"./ad-reg-search":8,"./ad-reg-table":9,"./ad-register":10,"./ad-tools":11}],13:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdNation = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdNation extends adcommon_1.AdRegister {
    constructor(expect) {
        super(expect, "paises");
        this.addField(new adcommon_1.AdField({
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.BOOLEAN,
        }));
        this.addField(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
    }
}
exports.AdNation = AdNation;

},{"adcommon":12,"qinpel-cps":16}],14:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdRegion = void 0;
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
class AdRegion extends adcommon_1.AdRegister {
    constructor(expect) {
        super(expect, "regioes");
        this.addField(new adcommon_1.AdField({
            name: "codigo",
            title: "Código",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 4,
            },
        }));
        this.addField(new adcommon_1.AdField({
            name: "ativo",
            title: "Ativo",
            kind: qinpel_cps_1.QinMutants.BOOLEAN,
        }));
        this.addField(new adcommon_1.AdField({
            name: "nome",
            title: "Nome",
            kind: qinpel_cps_1.QinMutants.STRING,
            options: {
                maxLength: 60,
            },
        }));
    }
}
exports.AdRegion = AdRegion;

},{"adcommon":12,"qinpel-cps":16}],15:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adcommon_1 = require("adcommon");
const qinpel_cps_1 = require("qinpel-cps");
const qinpel_res_1 = require("qinpel-res");
const ad_nation_1 = require("./ad-nation");
const ad_region_1 = require("./ad-region");
class Menu extends qinpel_cps_1.QinColumn {
    constructor() {
        super();
        this.qinRegion = new qinpel_cps_1.QinButton({ label: new qinpel_cps_1.QinLabel("Região") });
        this.qinNation = new qinpel_cps_1.QinButton({ label: new qinpel_cps_1.QinLabel("País") });
        this.qinRegion.install(this);
        this.qinRegion.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.qinpel.manager.newFrame("Região", "adpeople", adcommon_1.AdTools.newAdOption(adcommon_1.AdModules.REGION, [adcommon_1.AdScope.ALL]));
                this.qinpel.frame.close();
            }
        });
        this.qinNation.install(this);
        this.qinNation.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.qinpel.manager.newFrame("País", "adpeople", adcommon_1.AdTools.newAdOption(adcommon_1.AdModules.NATION, [adcommon_1.AdScope.ALL]));
                this.qinpel.frame.close();
            }
        });
    }
}
function startUp() {
    const module = qinpel_cps_1.QinTools.qinpel().frame.getOption(adcommon_1.AdOptions.MODULE);
    const scopes = qinpel_cps_1.QinTools.qinpel().frame.getOption(adcommon_1.AdOptions.SCOPES);
    const filters = qinpel_cps_1.QinTools.qinpel().frame.getOption(adcommon_1.AdOptions.FILTERS);
    switch (module) {
        case adcommon_1.AdModules.REGION:
            return new ad_region_1.AdRegion(new adcommon_1.AdExpect({
                scopes,
                filters,
                waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                    this.qinpel().frame.sendWaiters(result);
                }),
            }));
        case adcommon_1.AdModules.NATION:
            return new ad_nation_1.AdNation(new adcommon_1.AdExpect({
                scopes,
                filters,
                waiters: new qinpel_res_1.QinWaiters().addWaiter((result) => {
                    this.qinpel().frame.sendWaiters(result);
                }),
            }));
        default:
            return new Menu();
    }
}
startUp().style.putAsBody();

},{"./ad-nation":13,"./ad-region":14,"adcommon":12,"qinpel-cps":16,"qinpel-res":44}],16:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = exports.QinTabs = exports.QinTable = exports.QinString = exports.QinStack = exports.QinSplitter = exports.QinPanel = exports.QinMutantsArm = exports.QinMutants = exports.QinMenuItem = exports.QinMenu = exports.QinLine = exports.QinLabel = exports.QinInteger = exports.QinIcon = exports.QinIconPick = exports.QinIconOption = exports.QinFilePath = exports.QinFileExplorer = exports.QinFileChooser = exports.QinField = exports.QinEdit = exports.QinCombo = exports.QinColumn = exports.QinButton = exports.QinBoolean = exports.QinBase = exports.QinBaseStyle = exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var qin_assets_1 = require("./qin-assets");
Object.defineProperty(exports, "QinAsset", { enumerable: true, get: function () { return qin_assets_1.QinAsset; } });
var qin_assets_2 = require("./qin-assets");
Object.defineProperty(exports, "qinAssetUrl", { enumerable: true, get: function () { return qin_assets_2.qinAssetUrl; } });
var qin_assets_3 = require("./qin-assets");
Object.defineProperty(exports, "qinUrlAsset", { enumerable: true, get: function () { return qin_assets_3.qinUrlAsset; } });
var qin_base_style_1 = require("./qin-base-style");
Object.defineProperty(exports, "QinBaseStyle", { enumerable: true, get: function () { return qin_base_style_1.QinBaseStyle; } });
var qin_base_1 = require("./qin-base");
Object.defineProperty(exports, "QinBase", { enumerable: true, get: function () { return qin_base_1.QinBase; } });
var qin_boolean_1 = require("./qin-boolean");
Object.defineProperty(exports, "QinBoolean", { enumerable: true, get: function () { return qin_boolean_1.QinBoolean; } });
var qin_button_1 = require("./qin-button");
Object.defineProperty(exports, "QinButton", { enumerable: true, get: function () { return qin_button_1.QinButton; } });
var qin_column_1 = require("./qin-column");
Object.defineProperty(exports, "QinColumn", { enumerable: true, get: function () { return qin_column_1.QinColumn; } });
var qin_combo_1 = require("./qin-combo");
Object.defineProperty(exports, "QinCombo", { enumerable: true, get: function () { return qin_combo_1.QinCombo; } });
var qin_edit_1 = require("./qin-edit");
Object.defineProperty(exports, "QinEdit", { enumerable: true, get: function () { return qin_edit_1.QinEdit; } });
var qin_field_1 = require("./qin-field");
Object.defineProperty(exports, "QinField", { enumerable: true, get: function () { return qin_field_1.QinField; } });
var qin_file_chooser_1 = require("./qin-file-chooser");
Object.defineProperty(exports, "QinFileChooser", { enumerable: true, get: function () { return qin_file_chooser_1.QinFileChooser; } });
var qin_file_explorer_1 = require("./qin-file-explorer");
Object.defineProperty(exports, "QinFileExplorer", { enumerable: true, get: function () { return qin_file_explorer_1.QinFileExplorer; } });
var qin_file_path_1 = require("./qin-file-path");
Object.defineProperty(exports, "QinFilePath", { enumerable: true, get: function () { return qin_file_path_1.QinFilePath; } });
var qin_icon_option_1 = require("./qin-icon-option");
Object.defineProperty(exports, "QinIconOption", { enumerable: true, get: function () { return qin_icon_option_1.QinIconOption; } });
var qin_icon_pick_1 = require("./qin-icon-pick");
Object.defineProperty(exports, "QinIconPick", { enumerable: true, get: function () { return qin_icon_pick_1.QinIconPick; } });
var qin_icon_1 = require("./qin-icon");
Object.defineProperty(exports, "QinIcon", { enumerable: true, get: function () { return qin_icon_1.QinIcon; } });
var qin_integer_1 = require("./qin-integer");
Object.defineProperty(exports, "QinInteger", { enumerable: true, get: function () { return qin_integer_1.QinInteger; } });
var qin_label_1 = require("./qin-label");
Object.defineProperty(exports, "QinLabel", { enumerable: true, get: function () { return qin_label_1.QinLabel; } });
var qin_line_1 = require("./qin-line");
Object.defineProperty(exports, "QinLine", { enumerable: true, get: function () { return qin_line_1.QinLine; } });
var qin_menu_1 = require("./qin-menu");
Object.defineProperty(exports, "QinMenu", { enumerable: true, get: function () { return qin_menu_1.QinMenu; } });
var qin_menu_2 = require("./qin-menu");
Object.defineProperty(exports, "QinMenuItem", { enumerable: true, get: function () { return qin_menu_2.QinMenuItem; } });
var qin_mutants_1 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutants", { enumerable: true, get: function () { return qin_mutants_1.QinMutants; } });
var qin_mutants_2 = require("./qin-mutants");
Object.defineProperty(exports, "QinMutantsArm", { enumerable: true, get: function () { return qin_mutants_2.QinMutantsArm; } });
var qin_panel_1 = require("./qin-panel");
Object.defineProperty(exports, "QinPanel", { enumerable: true, get: function () { return qin_panel_1.QinPanel; } });
var qin_splitter_1 = require("./qin-splitter");
Object.defineProperty(exports, "QinSplitter", { enumerable: true, get: function () { return qin_splitter_1.QinSplitter; } });
var qin_stack_1 = require("./qin-stack");
Object.defineProperty(exports, "QinStack", { enumerable: true, get: function () { return qin_stack_1.QinStack; } });
var qin_string_1 = require("./qin-string");
Object.defineProperty(exports, "QinString", { enumerable: true, get: function () { return qin_string_1.QinString; } });
var qin_table_1 = require("./qin-table");
Object.defineProperty(exports, "QinTable", { enumerable: true, get: function () { return qin_table_1.QinTable; } });
var qin_tabs_1 = require("./qin-tabs");
Object.defineProperty(exports, "QinTabs", { enumerable: true, get: function () { return qin_tabs_1.QinTabs; } });
var qin_tools_1 = require("./qin-tools");
Object.defineProperty(exports, "QinTools", { enumerable: true, get: function () { return qin_tools_1.QinTools; } });

},{"./qin-assets":17,"./qin-base":19,"./qin-base-style":18,"./qin-boolean":20,"./qin-button":21,"./qin-column":22,"./qin-combo":23,"./qin-edit":24,"./qin-field":25,"./qin-file-chooser":26,"./qin-file-explorer":27,"./qin-file-path":28,"./qin-icon":31,"./qin-icon-option":29,"./qin-icon-pick":30,"./qin-integer":32,"./qin-label":33,"./qin-line":34,"./qin-menu":35,"./qin-mutants":36,"./qin-panel":37,"./qin-splitter":38,"./qin-stack":39,"./qin-string":40,"./qin-table":41,"./qin-tabs":42,"./qin-tools":43}],17:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.qinUrlAsset = exports.qinAssetUrl = exports.QinAsset = void 0;
var QinAsset;
(function (QinAsset) {
    QinAsset["BackTiny01"] = "back-tiny-01.png";
    QinAsset["BackgroundDark0"] = "background-dark-0.png";
    QinAsset["BackgroundDark1"] = "background-dark-1.png";
    QinAsset["BackgroundDark10"] = "background-dark-10.png";
    QinAsset["BackgroundDark11"] = "background-dark-11.png";
    QinAsset["BackgroundDark12"] = "background-dark-12.png";
    QinAsset["BackgroundDark13"] = "background-dark-13.png";
    QinAsset["BackgroundDark14"] = "background-dark-14.png";
    QinAsset["BackgroundDark15"] = "background-dark-15.png";
    QinAsset["BackgroundDark16"] = "background-dark-16.png";
    QinAsset["BackgroundDark17"] = "background-dark-17.png";
    QinAsset["BackgroundDark18"] = "background-dark-18.png";
    QinAsset["BackgroundDark19"] = "background-dark-19.png";
    QinAsset["BackgroundDark2"] = "background-dark-2.png";
    QinAsset["BackgroundDark20"] = "background-dark-20.png";
    QinAsset["BackgroundDark21"] = "background-dark-21.png";
    QinAsset["BackgroundDark22"] = "background-dark-22.png";
    QinAsset["BackgroundDark23"] = "background-dark-23.png";
    QinAsset["BackgroundDark24"] = "background-dark-24.png";
    QinAsset["BackgroundDark25"] = "background-dark-25.png";
    QinAsset["BackgroundDark26"] = "background-dark-26.png";
    QinAsset["BackgroundDark27"] = "background-dark-27.png";
    QinAsset["BackgroundDark28"] = "background-dark-28.png";
    QinAsset["BackgroundDark29"] = "background-dark-29.png";
    QinAsset["BackgroundDark3"] = "background-dark-3.png";
    QinAsset["BackgroundDark4"] = "background-dark-4.png";
    QinAsset["BackgroundDark5"] = "background-dark-5.png";
    QinAsset["BackgroundDark6"] = "background-dark-6.png";
    QinAsset["BackgroundDark7"] = "background-dark-7.png";
    QinAsset["BackgroundDark8"] = "background-dark-8.png";
    QinAsset["BackgroundDark9"] = "background-dark-9.png";
    QinAsset["BackgroundDark"] = "background-dark.png";
    QinAsset["BackgroundLight0"] = "background-light-0.png";
    QinAsset["BackgroundLight1"] = "background-light-1.png";
    QinAsset["BackgroundLight10"] = "background-light-10.png";
    QinAsset["BackgroundLight11"] = "background-light-11.png";
    QinAsset["BackgroundLight12"] = "background-light-12.png";
    QinAsset["BackgroundLight13"] = "background-light-13.png";
    QinAsset["BackgroundLight14"] = "background-light-14.png";
    QinAsset["BackgroundLight15"] = "background-light-15.png";
    QinAsset["BackgroundLight16"] = "background-light-16.png";
    QinAsset["BackgroundLight17"] = "background-light-17.png";
    QinAsset["BackgroundLight18"] = "background-light-18.png";
    QinAsset["BackgroundLight19"] = "background-light-19.png";
    QinAsset["BackgroundLight2"] = "background-light-2.png";
    QinAsset["BackgroundLight20"] = "background-light-20.png";
    QinAsset["BackgroundLight21"] = "background-light-21.png";
    QinAsset["BackgroundLight22"] = "background-light-22.png";
    QinAsset["BackgroundLight23"] = "background-light-23.png";
    QinAsset["BackgroundLight24"] = "background-light-24.png";
    QinAsset["BackgroundLight25"] = "background-light-25.png";
    QinAsset["BackgroundLight26"] = "background-light-26.png";
    QinAsset["BackgroundLight27"] = "background-light-27.png";
    QinAsset["BackgroundLight28"] = "background-light-28.png";
    QinAsset["BackgroundLight29"] = "background-light-29.png";
    QinAsset["BackgroundLight3"] = "background-light-3.png";
    QinAsset["BackgroundLight4"] = "background-light-4.png";
    QinAsset["BackgroundLight5"] = "background-light-5.png";
    QinAsset["BackgroundLight6"] = "background-light-6.png";
    QinAsset["BackgroundLight7"] = "background-light-7.png";
    QinAsset["BackgroundLight8"] = "background-light-8.png";
    QinAsset["BackgroundLight9"] = "background-light-9.png";
    QinAsset["BackgroundLight"] = "background-light.png";
    QinAsset["BackgroundNormal0"] = "background-normal-0.png";
    QinAsset["BackgroundNormal1"] = "background-normal-1.png";
    QinAsset["BackgroundNormal10"] = "background-normal-10.png";
    QinAsset["BackgroundNormal11"] = "background-normal-11.png";
    QinAsset["BackgroundNormal12"] = "background-normal-12.png";
    QinAsset["BackgroundNormal13"] = "background-normal-13.png";
    QinAsset["BackgroundNormal14"] = "background-normal-14.png";
    QinAsset["BackgroundNormal15"] = "background-normal-15.png";
    QinAsset["BackgroundNormal16"] = "background-normal-16.png";
    QinAsset["BackgroundNormal17"] = "background-normal-17.png";
    QinAsset["BackgroundNormal18"] = "background-normal-18.png";
    QinAsset["BackgroundNormal19"] = "background-normal-19.png";
    QinAsset["BackgroundNormal2"] = "background-normal-2.png";
    QinAsset["BackgroundNormal20"] = "background-normal-20.png";
    QinAsset["BackgroundNormal21"] = "background-normal-21.png";
    QinAsset["BackgroundNormal22"] = "background-normal-22.png";
    QinAsset["BackgroundNormal23"] = "background-normal-23.png";
    QinAsset["BackgroundNormal24"] = "background-normal-24.png";
    QinAsset["BackgroundNormal25"] = "background-normal-25.png";
    QinAsset["BackgroundNormal26"] = "background-normal-26.png";
    QinAsset["BackgroundNormal27"] = "background-normal-27.png";
    QinAsset["BackgroundNormal28"] = "background-normal-28.png";
    QinAsset["BackgroundNormal29"] = "background-normal-29.png";
    QinAsset["BackgroundNormal3"] = "background-normal-3.png";
    QinAsset["BackgroundNormal4"] = "background-normal-4.png";
    QinAsset["BackgroundNormal5"] = "background-normal-5.png";
    QinAsset["BackgroundNormal6"] = "background-normal-6.png";
    QinAsset["BackgroundNormal7"] = "background-normal-7.png";
    QinAsset["BackgroundNormal8"] = "background-normal-8.png";
    QinAsset["BackgroundNormal9"] = "background-normal-9.png";
    QinAsset["BackgroundNormal"] = "background-normal.png";
    QinAsset["ExplorerApps"] = "explorer-apps.png";
    QinAsset["ExplorerCmds"] = "explorer-cmds.png";
    QinAsset["ExplorerDir"] = "explorer-dir.png";
    QinAsset["ExplorerExec"] = "explorer-exec.png";
    QinAsset["ExplorerFile"] = "explorer-file.png";
    QinAsset["ExplorerImage"] = "explorer-image.png";
    QinAsset["ExplorerMovie"] = "explorer-movie.png";
    QinAsset["ExplorerMusic"] = "explorer-music.png";
    QinAsset["ExplorerZipped"] = "explorer-zipped.png";
    QinAsset["FaceAdd"] = "face-add.png";
    QinAsset["FaceArrowDown"] = "face-arrow-down.png";
    QinAsset["FaceArrowLeft"] = "face-arrow-left.png";
    QinAsset["FaceArrowRight"] = "face-arrow-right.png";
    QinAsset["FaceArrowUp"] = "face-arrow-up.png";
    QinAsset["FaceAttach"] = "face-attach.png";
    QinAsset["FaceBag"] = "face-bag.png";
    QinAsset["FaceBellDisable"] = "face-bell-disable.png";
    QinAsset["FaceBell"] = "face-bell.png";
    QinAsset["FaceCalendar"] = "face-calendar.png";
    QinAsset["FaceCameraDisable"] = "face-camera-disable.png";
    QinAsset["FaceCamera"] = "face-camera.png";
    QinAsset["FaceCancel"] = "face-cancel.png";
    QinAsset["FaceCart"] = "face-cart.png";
    QinAsset["FaceCheck"] = "face-check.png";
    QinAsset["FaceCircle"] = "face-circle.png";
    QinAsset["FaceClock"] = "face-clock.png";
    QinAsset["FaceClose"] = "face-close.png";
    QinAsset["FaceCog"] = "face-cog.png";
    QinAsset["FaceCompass"] = "face-compass.png";
    QinAsset["FaceConfirm"] = "face-confirm.png";
    QinAsset["FaceContact"] = "face-contact.png";
    QinAsset["FaceControl"] = "face-control.png";
    QinAsset["FaceCopy"] = "face-copy.png";
    QinAsset["FaceDel"] = "face-del.png";
    QinAsset["FaceDownload"] = "face-download.png";
    QinAsset["FaceEnlarge"] = "face-enlarge.png";
    QinAsset["FaceEnter"] = "face-enter.png";
    QinAsset["FaceErase"] = "face-erase.png";
    QinAsset["FaceExit"] = "face-exit.png";
    QinAsset["FaceEyeDisable"] = "face-eye-disable.png";
    QinAsset["FaceEye"] = "face-eye.png";
    QinAsset["FaceFile"] = "face-file.png";
    QinAsset["FaceFilter"] = "face-filter.png";
    QinAsset["FaceFolder"] = "face-folder.png";
    QinAsset["FaceGear"] = "face-gear.png";
    QinAsset["FaceHeart"] = "face-heart.png";
    QinAsset["FaceHome"] = "face-home.png";
    QinAsset["FaceImage"] = "face-image.png";
    QinAsset["FaceLabel"] = "face-label.png";
    QinAsset["FaceLink"] = "face-link.png";
    QinAsset["FaceLock"] = "face-lock.png";
    QinAsset["FaceMail"] = "face-mail.png";
    QinAsset["FaceMapDisable"] = "face-map-disable.png";
    QinAsset["FaceMap"] = "face-map.png";
    QinAsset["FaceMessage"] = "face-message.png";
    QinAsset["FaceMicDisable"] = "face-mic-disable.png";
    QinAsset["FaceMic"] = "face-mic.png";
    QinAsset["FaceMinus"] = "face-minus.png";
    QinAsset["FaceMovie"] = "face-movie.png";
    QinAsset["FaceNews"] = "face-news.png";
    QinAsset["FacePaste"] = "face-paste.png";
    QinAsset["FacePencil"] = "face-pencil.png";
    QinAsset["FacePerson"] = "face-person.png";
    QinAsset["FacePhoneDisable"] = "face-phone-disable.png";
    QinAsset["FacePhone"] = "face-phone.png";
    QinAsset["FacePin"] = "face-pin.png";
    QinAsset["FacePlus"] = "face-plus.png";
    QinAsset["FaceRedo"] = "face-redo.png";
    QinAsset["FaceSave"] = "face-save.png";
    QinAsset["FaceSearch"] = "face-search.png";
    QinAsset["FaceSend"] = "face-send.png";
    QinAsset["FaceSettings"] = "face-settings.png";
    QinAsset["FaceShare"] = "face-share.png";
    QinAsset["FaceShield"] = "face-shield.png";
    QinAsset["FaceShrink"] = "face-shrink.png";
    QinAsset["FaceSpeakerDisable"] = "face-speaker-disable.png";
    QinAsset["FaceSpeaker"] = "face-speaker.png";
    QinAsset["FaceStar"] = "face-star.png";
    QinAsset["FaceTrash"] = "face-trash.png";
    QinAsset["FaceUndo"] = "face-undo.png";
    QinAsset["FaceUnlink"] = "face-unlink.png";
    QinAsset["FaceUnlock"] = "face-unlock.png";
    QinAsset["FaceUpload"] = "face-upload.png";
    QinAsset["FaceWifiDisable"] = "face-wifi-disable.png";
    QinAsset["FaceWifi"] = "face-wifi.png";
    QinAsset["FrameClose"] = "frame-close.png";
    QinAsset["FrameMaximize"] = "frame-maximize.png";
    QinAsset["FrameMenu"] = "frame-menu.png";
    QinAsset["FrameMinimize"] = "frame-minimize.png";
    QinAsset["FrameResize"] = "frame-resize.png";
    QinAsset["FrameStatusError"] = "frame-status-error.png";
    QinAsset["FrameStatusInfo"] = "frame-status-info.png";
    QinAsset["LoginKey"] = "login-key.png";
    QinAsset["MenuDevtools"] = "menu-devtools.ico";
    QinAsset["Qinpel48"] = "qinpel-48.png";
    QinAsset["Qinpel"] = "qinpel.png";
    QinAsset["SourceSansPro"] = "source-sans-pro.ttf";
    QinAsset["SourceSerifPro"] = "source-serif-pro.ttf";
})(QinAsset = exports.QinAsset || (exports.QinAsset = {}));
function qinAssetUrl(asset) {
    return "/app/qinpel-app/assets/" + asset;
}
exports.qinAssetUrl = qinAssetUrl;
function qinUrlAsset(url) {
    const asset = url.substring(url.lastIndexOf("/") + 1);
    return asset;
}
exports.qinUrlAsset = qinUrlAsset;

},{}],18:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBaseStyle = void 0;
const qinpel_res_1 = require("qinpel-res");
class QinBaseStyle {
    constructor(element) {
        this.element = element;
    }
    putAsBody() {
        document.body.appendChild(this.element);
        qinpel_res_1.QinSkin.styleAsBody(this.element);
    }
    delAsBody() {
        document.body.removeChild(this.element);
    }
    putAsWhole() {
        this.putAsPositionAbsolute();
        this.putAsBounds(0, 0, 0, 0);
    }
    putAsEdit() {
        qinpel_res_1.QinSkin.styleAsEdit(this.element);
        this.element.tabIndex = 0;
    }
    putAsScroll() {
        this.element.style.overflow = "auto";
    }
    putAsMargin(margin) {
        this.element.style.margin = this.getPixelsOrInitial(margin);
    }
    putAsMarginTop(margin) {
        this.element.style.marginTop = this.getPixelsOrInitial(margin);
    }
    putAsMarginBottom(margin) {
        this.element.style.marginBottom = this.getPixelsOrInitial(margin);
    }
    putAsMarginLeft(margin) {
        this.element.style.marginLeft = this.getPixelsOrInitial(margin);
    }
    putAsMarginRight(margin) {
        this.element.style.marginRight = this.getPixelsOrInitial(margin);
    }
    putAsPadding(padding) {
        this.element.style.padding = this.getPixelsOrInitial(padding);
    }
    putAsPaddingTop(padding) {
        this.element.style.paddingTop = this.getPixelsOrInitial(padding);
    }
    putAsPaddingBottom(padding) {
        this.element.style.paddingBottom = this.getPixelsOrInitial(padding);
    }
    putAsPaddingLeft(padding) {
        this.element.style.paddingLeft = this.getPixelsOrInitial(padding);
    }
    putAsPaddingRight(padding) {
        this.element.style.paddingRight = this.getPixelsOrInitial(padding);
    }
    putAsBounds(top, right, bottom, left) {
        this.element.style.top = this.getPixelsOrInitial(top);
        this.element.style.right = this.getPixelsOrInitial(right);
        this.element.style.bottom = this.getPixelsOrInitial(bottom);
        this.element.style.left = this.getPixelsOrInitial(left);
    }
    putAsAllCentered() {
        this.element.style.textAlign = "center";
        this.element.style.alignItems = "center";
        this.element.style.alignContent = "center";
        this.element.style.verticalAlign = "middle";
    }
    putAsDisplayFlex() {
        this.element.style.display = "flex";
    }
    putAsDisplayInline() {
        this.element.style.display = "inline";
    }
    putAsDisplayInlineBlock() {
        this.element.style.display = "inline-block";
    }
    putAsPositionStatic() {
        this.element.style.position = "static";
    }
    putAsPositionAbsolute() {
        this.element.style.position = "absolute";
    }
    putAsPositionFixed() {
        this.element.style.position = "fixed";
    }
    putAsPositionRelative() {
        this.element.style.position = "relative";
    }
    putAsPositionSticky() {
        this.element.style.position = "sticky";
    }
    putAsPositionInitial() {
        this.element.style.position = "initial";
    }
    putAsFlexDirectionRow() {
        this.element.style.flexDirection = "row";
    }
    putAsFlexDirectionRowReverse() {
        this.element.style.flexDirection = "row-reverse";
    }
    putAsFlexDirectionColumn() {
        this.element.style.flexDirection = "column";
    }
    putAsFlexDirectionColumnReverse() {
        this.element.style.flexDirection = "column-reverse";
    }
    putAsFlexWrap() {
        this.element.style.flexWrap = "wrap";
    }
    putAsFlexWrapNot() {
        this.element.style.flexWrap = "nowrap";
    }
    putAsFlexWrapReverse() {
        this.element.style.flexWrap = "wrap-reverse";
    }
    putAsFlexMin() {
        this.element.style.flex = "none";
    }
    putAsFlexMax() {
        this.element.style.flex = "auto";
    }
    putAsWidth(width) {
        this.element.style.width = this.getPixelsOrInitial(width);
    }
    putAsHeight(height) {
        this.element.style.height = this.getPixelsOrInitial(height);
    }
    putAsSize(width, height) {
        this.element.style.width = this.getPixelsOrInitial(width);
        this.element.style.height = this.getPixelsOrInitial(height);
    }
    putAsMinWidth(width) {
        this.element.style.minWidth = this.getPixelsOrInitial(width);
    }
    putAsMinHeight(height) {
        this.element.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMinSize(width, height) {
        this.element.style.minWidth = this.getPixelsOrInitial(width);
        this.element.style.minHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxWidth(width) {
        this.element.style.maxWidth = this.getPixelsOrInitial(width);
    }
    putAsMaxHeight(height) {
        this.element.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsMaxSize(width, height) {
        this.element.style.maxWidth = this.getPixelsOrInitial(width);
        this.element.style.maxHeight = this.getPixelsOrInitial(height);
    }
    putAsForeground(foreground) {
        this.element.style.color = foreground;
    }
    putAsBackground(background) {
        this.element.style.background = background;
    }
    putAsBackAsset(asset) {
        this.element.style.backgroundImage = "url('/app/qinpel-app/assets/" + asset + "')";
    }
    putAsBackInitial() {
        this.element.style.backgroundImage = "initial";
    }
    putAsZIndex(index) {
        if (index == null || index == undefined) {
            this.element.style.zIndex = "initial";
        }
        else {
            this.element.style.zIndex = index.toString();
        }
    }
    putAsDisabledSelection() {
        qinpel_res_1.QinSkin.disableSelection(this.element);
    }
    getPixelsOrInitial(value) {
        if (value == null || value == undefined) {
            return "initial";
        }
        return value + "px";
    }
}
exports.QinBaseStyle = QinBaseStyle;

},{"qinpel-res":44}],19:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBase = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_style_1 = require("./qin-base-style");
const qin_tools_1 = require("./qin-tools");
class QinBase {
    constructor() {
        this._baseParent = null;
        this._baseChildren = [];
        this._baseDisplay = "initial";
        this._baseVisibility = "initial";
        this._style = null;
    }
    get qinpel() {
        return qin_tools_1.QinTools.qinpel();
    }
    get style() {
        if (this._style == null) {
            this._style = new qin_base_style_1.QinBaseStyle(this.getMain());
        }
        return this._style;
    }
    install(onBase) {
        this._baseParent = onBase;
        this._baseParent.appendChild(this);
    }
    unInstall() {
        this._baseParent.removeChild(this);
    }
    reInstall() {
        this._baseParent.appendChild(this);
    }
    unDisplay() {
        if (this.getMain().style.display !== "none") {
            this._baseDisplay = this.getMain().style.display;
            this.getMain().style.display = "none";
        }
    }
    reDisplay() {
        this.getMain().style.display = this._baseDisplay;
    }
    unVisible() {
        if (this.getMain().style.display !== "hidden") {
            this._baseVisibility = this.getMain().style.visibility;
            this.getMain().style.visibility = "hidden";
        }
    }
    reVisible() {
        this.getMain().style.visibility = this._baseVisibility;
    }
    appendChild(child) {
        this._baseChildren.push(child);
        this.getMain().appendChild(child.getMain());
    }
    removeChild(child) {
        let index = this._baseChildren.indexOf(child);
        if (index > -1) {
            this._baseChildren.splice(index, 1);
        }
        this.getMain().removeChild(child.getMain());
    }
    children() {
        return this._baseChildren;
    }
    clearChildren() {
        for (const child of this._baseChildren) {
            this.getMain().removeChild(child.getMain());
        }
        this._baseChildren = [];
    }
    addAction(action) {
        qinpel_res_1.QinArm.addAction(this.getMain(), action);
    }
    putTabIndex(index) {
        this.getMain().tabIndex = index;
    }
}
exports.QinBase = QinBase;

},{"./qin-base-style":18,"./qin-tools":43,"qinpel-res":44}],20:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBoolean = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
class QinBoolean extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinSpan = new qin_label_1.QinLabel();
        this._qinIcon = new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceCircle);
        this._value = false;
        this._qinSpan.install(this._qinMain);
        this._qinIcon.install(this._qinSpan);
        this._qinSpan.style.putAsEdit();
        this._qinSpan.style.putAsDisplayFlex();
        this._qinSpan.style.putAsAllCentered();
        this._qinSpan.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.toggle();
            }
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._value;
    }
    setData(data) {
        this._value = data;
        this.updateIcon();
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinSpan() {
        return this._qinSpan;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get value() {
        return this._value;
    }
    set value(value) {
        this._value = value;
        this.updateIcon();
    }
    updateIcon() {
        if (this._value) {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceConfirm;
        }
        else {
            this._qinIcon.asset = qin_assets_1.QinAsset.FaceCircle;
        }
    }
    toggle() {
        this._value = !this._value;
        this.updateIcon();
    }
}
exports.QinBoolean = QinBoolean;

},{"./qin-assets":17,"./qin-edit":24,"./qin-icon":31,"./qin-label":33,"./qin-line":34}],21:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinButton = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_base_1 = require("./qin-base");
class QinButton extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("button");
        this._qinIcon = null;
        this._qinLabel = null;
        styles.applyOnButton(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.icon) {
            this._qinIcon = options.icon;
            this._qinIcon.install(this);
        }
        if (options === null || options === void 0 ? void 0 : options.label) {
            this._qinLabel = options.label;
            this._qinLabel.install(this);
        }
    }
    getMain() {
        return this._elMain;
    }
    get qinIcon() {
        return this._qinIcon;
    }
    get qinLabel() {
        return this._qinLabel;
    }
}
exports.QinButton = QinButton;
const styles = {
    applyOnButton: (el) => {
        qinpel_res_1.QinSkin.styleAsEdit(el);
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.alignItems = "center";
    },
};

},{"./qin-base":19,"qinpel-res":44}],22:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinColumn = void 0;
const qin_base_1 = require("./qin-base");
class QinColumn extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinColumn = QinColumn;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.flexWrap = "nowrap";
    },
};

},{"./qin-base":19}],23:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinCombo = void 0;
const qin_edit_1 = require("./qin-edit");
class QinCombo extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("select");
        this.style.putAsEdit();
        if (options === null || options === void 0 ? void 0 : options.items) {
            for (let item of options.items) {
                this.addItem(item);
            }
        }
        if (options === null || options === void 0 ? void 0 : options.selected) {
            this.setData(options.selected);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    addItem(item) {
        const option = document.createElement("option");
        option.text = item.title;
        option.value = item.value;
        if (item.selected != undefined && item.selected != null) {
            option.selected = item.selected;
        }
        this._elMain.appendChild(option);
        return this;
    }
}
exports.QinCombo = QinCombo;

},{"./qin-edit":24}],24:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinEdit = void 0;
const qin_base_1 = require("./qin-base");
class QinEdit extends qin_base_1.QinBase {
}
exports.QinEdit = QinEdit;

},{"./qin-base":19}],25:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinField = void 0;
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_label_1 = require("./qin-label");
class QinField extends qin_edit_1.QinEdit {
    constructor(title, edit) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinLabel = new qin_label_1.QinLabel();
        this._qinEdit = null;
        this._qinLabel.setTitle(title);
        this._qinLabel.install(this._qinMain);
        this._qinEdit = edit;
        this._qinEdit.install(this._qinMain);
        this._qinMain.getMain().style.marginRight = "5px";
        this._qinMain.getMain().style.marginBottom = "5px";
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinEdit.getData();
    }
    setData(data) {
        this._qinEdit.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinLabel() {
        return this._qinLabel;
    }
    get qinEdit() {
        return this._qinEdit;
    }
}
exports.QinField = QinField;

},{"./qin-column":22,"./qin-edit":24,"./qin-label":33}],26:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileChooser = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_combo_1 = require("./qin-combo");
const qin_edit_1 = require("./qin-edit");
const qin_file_explorer_1 = require("./qin-file-explorer");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
const qin_string_1 = require("./qin-string");
class QinFileChooser extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_column_1.QinColumn();
        this._qinUpper = new qin_line_1.QinLine();
        this._qinConfirm = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceConfirm),
        });
        this._qinFolder = new qin_string_1.QinString();
        this._qinExtensions = new qin_combo_1.QinCombo();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceSearch),
        });
        this._qinUnder = new qin_panel_1.QinPanel();
        this._qinExplorer = new qin_file_explorer_1.QinFileExplorer();
        this._listeners = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._operation = (options === null || options === void 0 ? void 0 : options.operation) ? options.operation : qinpel_res_1.QinFilesOperation.OPEN;
        this._descriptors = (options === null || options === void 0 ? void 0 : options.descriptors) ? options.descriptors : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options === null || options === void 0 ? void 0 : options.singleSelection : false;
        this.initMain();
        this.initUpper();
        this.initUnder();
    }
    initMain() {
        this._qinUpper.install(this._qinMain);
        this._qinUnder.install(this._qinMain);
    }
    initUpper() {
        this._qinUpper.style.putAsFlexMin();
        this._qinConfirm.install(this._qinUpper);
        this._qinConfirm.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                let data = this.getData();
                for (const chosen of this._listeners) {
                    chosen(data);
                }
                qinEvent.consumed();
            }
        });
        this._qinFolder.install(this._qinUpper);
        this._qinFolder.style.putAsMinWidth(100);
        this._qinFolder.style.putAsFlexMax();
        this._qinFolder.addAction((qinEvent) => {
            if (qinEvent.isEnter) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
        this._qinExtensions.install(this._qinUpper);
        this._qinExtensions.style.putAsMinWidth(100);
        this.initExtensions();
        this._qinSearch.install(this._qinUpper);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.loadFolder();
                qinEvent.consumed();
            }
        });
    }
    initUnder() {
        this._qinUnder.style.putAsScroll();
        this._qinUnder.style.putAsFlexMax();
        this._qinExplorer.install(this._qinUnder);
        this._qinExplorer.nature = this._nature;
        this._qinExplorer.singleSelection = this._singleSelection;
    }
    initExtensions() {
        if (this._descriptors.length == 0) {
            this._qinExtensions.addItem({
                title: "All Files (*.*)",
                value: "*",
                selected: true,
            });
            this._qinExplorer.extensions = [];
        }
        else {
            for (let index = 0; index < this._descriptors.length; index++) {
                const descriptor = this._descriptors[index];
                this._qinExtensions.addItem({
                    title: descriptor.description,
                    value: descriptor.extensions.join(";"),
                    selected: index == 0,
                });
            }
            this._qinExplorer.extensions = this._descriptors[0].extensions;
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinExplorer.getData();
    }
    setData(data) {
        this._qinExplorer.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinUpper() {
        return this._qinUpper;
    }
    get qinConfirm() {
        return this._qinConfirm;
    }
    get qinFolder() {
        return this._qinFolder;
    }
    get qinExtensions() {
        return this._qinExtensions;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinUnder() {
        return this._qinUnder;
    }
    get qinExplorer() {
        return this._qinExplorer;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
        this._qinExplorer.nature = value;
    }
    get operation() {
        return this._operation;
    }
    set operation(value) {
        this._operation = value;
    }
    get descriptors() {
        return this._descriptors;
    }
    set descriptors(value) {
        this._descriptors = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this._qinExplorer.singleSelection = value;
    }
    loadFolder() {
        this._qinExplorer.load(this._qinFolder.getData(), (loaded) => {
            this._qinFolder.setData(loaded);
        });
    }
    addChosen(chosen) {
        this._listeners.push(chosen);
        return this;
    }
}
exports.QinFileChooser = QinFileChooser;

},{"./qin-assets":17,"./qin-button":21,"./qin-column":22,"./qin-combo":23,"./qin-edit":24,"./qin-file-explorer":27,"./qin-icon":31,"./qin-line":34,"./qin-panel":37,"./qin-string":40,"qinpel-res":44}],27:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFileExplorer = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinFileExplorer extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._folderActual = "";
        this._folderServer = "";
        this._items = [];
        this._nature = (options === null || options === void 0 ? void 0 : options.nature) ? options.nature : qinpel_res_1.QinFilesNature.BOTH;
        this._extensions = (options === null || options === void 0 ? void 0 : options.extensions) ? options.extensions : [];
        this._singleSelection = (options === null || options === void 0 ? void 0 : options.singleSelection) ? options.singleSelection : false;
        this.initMain();
    }
    initMain() {
        styles.applyOnMain(this._qinMain.getMain());
        this._qinMain.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.cleanSelection();
            }
        });
        this._qinMain.style.putAsDisabledSelection();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        this._items.forEach((item) => {
            if (item.isSelected()) {
                result.push(qinpel_res_1.QinSoul.foot.getPathJoin(this._folderServer, item.getName()));
            }
        });
        return result;
    }
    setData(data) {
        this.clean();
        if (data && data.length > 0) {
            let folderRoot = qinpel_res_1.QinSoul.foot.getParent(data[0]);
            this.load(folderRoot, (_) => {
                for (const itemPath of data) {
                    let itemRoot = qinpel_res_1.QinSoul.foot.getParent(itemPath);
                    let itemName = qinpel_res_1.QinSoul.foot.getStem(itemPath);
                    if (itemRoot !== folderRoot) {
                        this.qinpel.frame.statusError(`The item '${itemPath}' is not on the root '${folderRoot}'.`, "{qinpel-cps}(ErrCode-000001)");
                    }
                    else {
                        if (!this.select(itemName)) {
                            this.qinpel.frame.statusError(`Does not have the item '${itemName}' on the folder '${folderRoot}'`, "{qinpel-cps}(ErrCode-000002)");
                        }
                    }
                }
            });
        }
    }
    get qinMain() {
        return this._qinMain;
    }
    get nature() {
        return this._nature;
    }
    set nature(value) {
        this._nature = value;
    }
    get extensions() {
        return this._extensions;
    }
    set extensions(value) {
        this._extensions = value;
    }
    get singleSelection() {
        return this._singleSelection;
    }
    set singleSelection(value) {
        this._singleSelection = value;
        this.updateSingleSelection();
    }
    get folderActual() {
        return this._folderActual;
    }
    get folderServer() {
        return this._folderServer;
    }
    updateSingleSelection() {
        if (this._singleSelection) {
            let alreadyHas = false;
            for (const item of this._items) {
                if (item.isSelected()) {
                    if (alreadyHas) {
                        item.unselect();
                    }
                    else {
                        alreadyHas = true;
                    }
                }
            }
        }
    }
    load(folder, onLoad) {
        this.clean();
        this.qinpel
            .post("/dir/list", { path: folder })
            .then((res) => {
            this._folderActual = folder;
            for (let line of qinpel_res_1.QinSoul.body.getTextLines(res.data)) {
                let lineValue = line.substring(3);
                if (!lineValue) {
                    continue;
                }
                if (line.startsWith("P: ")) {
                    this._folderServer = lineValue;
                    if (onLoad) {
                        onLoad(lineValue);
                    }
                }
                else if (line.startsWith("D: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.DIRECTORIES) {
                        this.newDir(lineValue);
                    }
                }
                else if (line.startsWith("F: ")) {
                    if (this._nature == qinpel_res_1.QinFilesNature.BOTH ||
                        this._nature == qinpel_res_1.QinFilesNature.FILES) {
                        let extension = qinpel_res_1.QinSoul.foot.getFileExtension(lineValue);
                        let passedExtension = true;
                        if (this._extensions && this._extensions.length > 0) {
                            passedExtension = this._extensions.indexOf(extension) > -1;
                        }
                        if (passedExtension) {
                            this.newFile(lineValue, extension);
                        }
                    }
                }
            }
        })
            .catch((err) => {
            this.qinpel.frame.statusError(err, "{qinpel-cps}(ErrCode-000003)");
        });
    }
    reload(onLoad) {
        this.load(this._folderServer, onLoad);
    }
    goFolderUp(onLoad) {
        let parent = qinpel_res_1.QinFoot.getParent(this._folderServer);
        if (parent) {
            this.load(parent, onLoad);
        }
    }
    clean() {
        this._qinMain.getMain().innerHTML = "";
        this._items = [];
        this._folderActual = "";
        this._folderServer = "";
    }
    cleanSelection() {
        for (const item of this._items) {
            item.unselect();
        }
    }
    select(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.select();
            return true;
        }
        else {
            return false;
        }
    }
    unselect(itemName) {
        let item = this._items.find((inside) => inside.getName() == itemName);
        if (item) {
            item.unselect();
            return true;
        }
        else {
            return false;
        }
    }
    newDir(name) {
        this.newItem(name, "explorer-dir.png");
    }
    newFile(name, extension) {
        this.newItem(name, getIconName(extension));
    }
    newItem(name, icon) {
        const item = new Item(this, name, icon);
        item.install(this._qinMain.getMain());
        this._items.push(item);
    }
}
exports.QinFileExplorer = QinFileExplorer;
class Item {
    constructor(explorer, fileName, iconName) {
        this.divItem = document.createElement("div");
        this.divItemBody = document.createElement("div");
        this.spanIcon = document.createElement("span");
        this.imgIcon = document.createElement("img");
        this.spanText = document.createElement("span");
        this.selected = false;
        this.explorer = explorer;
        this.fileName = fileName;
        this.iconName = iconName;
        this.initItem();
    }
    initItem() {
        styles.applyOnDivItem(this.divItem);
        this.divItem.tabIndex = 0;
        styles.applyOnDivItemBody(this.divItemBody);
        this.divItem.appendChild(this.divItemBody);
        styles.applyOnSpanIcon(this.spanIcon);
        this.divItemBody.appendChild(this.spanIcon);
        this.imgIcon.src = "/app/qinpel-app/assets/" + this.iconName;
        this.spanIcon.appendChild(this.imgIcon);
        this.spanText.innerText = this.fileName;
        styles.applyOnSpanText(this.spanText);
        this.divItemBody.appendChild(this.spanText);
        qinpel_res_1.QinSoul.arm.addAction(this.divItem, (qinEvent) => {
            if (qinEvent.isPrimary) {
                this.divItem.focus();
                this.toggle();
                qinEvent.consumed();
            }
        });
    }
    install(on) {
        on.appendChild(this.divItem);
    }
    select() {
        styles.applyOnDivSelect(this.divItem);
        this.selected = true;
    }
    unselect() {
        styles.applyOnDivUnSelect(this.divItem);
        this.selected = false;
    }
    toggle() {
        if (this.selected) {
            this.unselect();
        }
        else {
            if (this.explorer.singleSelection) {
                this.explorer.cleanSelection();
            }
            this.select();
        }
    }
    getName() {
        return this.fileName;
    }
    isSelected() {
        return this.selected;
    }
}
function getIconName(fromExtension) {
    let result = "explorer-file.png";
    if (qinpel_res_1.QinSoul.foot.isFileApp(fromExtension)) {
        result = "explorer-apps.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileCmd(fromExtension)) {
        result = "explorer-cmds.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileExec(fromExtension)) {
        result = "explorer-exec.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileImage(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileVector(fromExtension)) {
        result = "explorer-image.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMusic(fromExtension)) {
        result = "explorer-music.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileMovie(fromExtension)) {
        result = "explorer-movie.png";
    }
    else if (qinpel_res_1.QinSoul.foot.isFileZipped(fromExtension)) {
        result = "explorer-zipped.png";
    }
    return result;
}
const styles = {
    applyOnMain: (el) => {
        qinpel_res_1.QinSoul.skin.styleAsEdit(el);
        el.style.overflow = "auto";
        el.style.minWidth = "160px";
        el.style.minHeight = "160px";
        el.tabIndex = 0;
    },
    applyOnDivItem: (el) => {
        el.style.margin = "2px";
        el.style.padding = "9px";
        el.style.display = "inline-block";
        el.style.outline = "none";
        el.style.backgroundColor = "#ffffff";
        el.style.border = "1px solid #360045";
        el.style.borderRadius = "3px";
        el.style.color = "#270036";
        el.addEventListener("focus", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #ae0000";
        });
        el.addEventListener("focusout", () => {
            el.style.outline = "none";
            el.style.border = "1px solid #360045";
        });
    },
    applyOnDivItemBody: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "column";
        el.style.width = "96px";
    },
    applyOnSpanIcon: (el) => {
        el.style.textAlign = "center";
    },
    applyOnSpanText: (el) => {
        el.style.textAlign = "center";
        el.style.wordWrap = "break-word";
    },
    applyOnDivSelect: (el) => {
        el.style.backgroundColor = "#faefff";
    },
    applyOnDivUnSelect: (el) => {
        el.style.backgroundColor = "#ffffff";
    },
};

},{"./qin-edit":24,"./qin-panel":37,"qinpel-res":44}],28:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFilePath = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_button_1 = require("./qin-button");
const qin_file_chooser_1 = require("./qin-file-chooser");
const qin_edit_1 = require("./qin-edit");
const qin_icon_1 = require("./qin-icon");
const qin_line_1 = require("./qin-line");
const qin_string_1 = require("./qin-string");
class QinFilePath extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinPath = new qin_string_1.QinString();
        this._qinSearch = new qin_button_1.QinButton({
            icon: new qin_icon_1.QinIcon(qin_assets_1.QinAsset.FaceFolder),
        });
        this._qinChooser = new qin_file_chooser_1.QinFileChooser({
            nature: options === null || options === void 0 ? void 0 : options.nature,
            operation: options === null || options === void 0 ? void 0 : options.operation,
            descriptors: options === null || options === void 0 ? void 0 : options.descriptors,
            singleSelection: true,
        });
        this._qinPopup = this.qinpel.frame.newPopup(this._qinChooser.getMain());
        this._qinPath.install(this._qinMain);
        this._qinSearch.install(this._qinMain);
        this._qinSearch.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this._qinPopup.show();
                const upperHeight = this._qinChooser.qinUpper.getMain().clientHeight;
                const explorerMaxHeight = this._qinPopup.maxHeight - (upperHeight + 12);
                this._qinChooser.qinExplorer.style.putAsMaxHeight(explorerMaxHeight);
            }
        });
        this._qinChooser.addChosen((chosen) => {
            if (chosen && chosen.length > 0) {
                this._qinPath.setData(chosen[0]);
            }
            this._qinPopup.close();
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        return this._qinPath.getData();
    }
    setData(data) {
        this._qinPath.setData(data);
    }
    get qinMain() {
        return this._qinMain;
    }
    get qinPath() {
        return this._qinPath;
    }
    get qinSearch() {
        return this._qinSearch;
    }
    get qinChooser() {
        return this._qinChooser;
    }
    get qinPopup() {
        return this._qinPopup;
    }
}
exports.QinFilePath = QinFilePath;

},{"./qin-assets":17,"./qin-button":21,"./qin-edit":24,"./qin-file-chooser":26,"./qin-icon":31,"./qin-line":34,"./qin-string":40}],29:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconOption = void 0;
const qin_edit_1 = require("./qin-edit");
const qinpel_res_1 = require("qinpel-res");
class QinIconOption extends qin_edit_1.QinEdit {
    constructor(icon) {
        super();
        this._elMain = document.createElement("div");
        this._selected = false;
        let border = Math.round(icon.size.width / 10);
        let padding = border * 2;
        this._elMain.style.borderRadius = border + "px";
        this._elMain.style.padding = padding + "px";
        this._elMain.style.display = "flex";
        this._icon = icon;
        this._icon.install(this);
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._selected;
    }
    setData(data) {
        this._selected = data;
        if (this._selected) {
            this._elMain.style.backgroundColor = qinpel_res_1.QinSkin.styles.ColorSelected;
        }
        else {
            this._elMain.style.backgroundColor = "initial";
        }
    }
    get icon() {
        return this._icon;
    }
    get selected() {
        return this._selected;
    }
    set selected(selected) {
        this.setData(selected);
    }
}
exports.QinIconOption = QinIconOption;

},{"./qin-edit":24,"qinpel-res":44}],30:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIconPick = void 0;
const qin_edit_1 = require("./qin-edit");
const qin_line_1 = require("./qin-line");
const qin_icon_option_1 = require("./qin-icon-option");
class QinIconPick extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._qinMain = new qin_line_1.QinLine();
        this._qinMain.style.putAsEdit();
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        for (let child of this.children()) {
            if (child instanceof qin_icon_option_1.QinIconOption) {
                if (child.selected) {
                    return child.icon.asset;
                }
            }
        }
        ;
        return null;
    }
    setData(asset) {
        for (let child of this._qinMain.children()) {
            if (child instanceof qin_icon_option_1.QinIconOption) {
                if (child.icon.asset == asset) {
                    child.selected = true;
                }
                else {
                    child.selected = false;
                }
            }
        }
        ;
    }
    addIcon(icon) {
        let option = new qin_icon_option_1.QinIconOption(icon);
        option.install(this._qinMain);
    }
    addOption(option) {
        option.install(this._qinMain);
    }
}
exports.QinIconPick = QinIconPick;

},{"./qin-edit":24,"./qin-icon-option":29,"./qin-line":34}],31:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinIcon = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_assets_1 = require("./qin-assets");
const qin_base_1 = require("./qin-base");
class QinIcon extends qin_base_1.QinBase {
    constructor(asset, size = qinpel_res_1.QinGrandeur.SMALL) {
        super();
        this._elMain = document.createElement("img");
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
        qinpel_res_1.QinSkin.styleSize(this._elMain, size);
    }
    getMain() {
        return this._elMain;
    }
    get asset() {
        return (0, qin_assets_1.qinUrlAsset)(this._elMain.src);
    }
    set asset(asset) {
        this._elMain.src = (0, qin_assets_1.qinAssetUrl)(asset);
    }
    get size() {
        return qinpel_res_1.QinSkin.getDimension(this._elMain);
    }
}
exports.QinIcon = QinIcon;

},{"./qin-assets":17,"./qin-base":19,"qinpel-res":44}],32:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinInteger = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinInteger extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "number";
        qinpel_res_1.QinSoul.skin.styleAsEdit(this._elMain);
        this._elMain.style.width = "120px";
        this._elMain.addEventListener("focusout", () => {
            this.setData(this.getData());
        });
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        const value = this._elMain.value;
        if (value == null || value == undefined || value.length == 0) {
            return null;
        }
        else {
            return parseInt(this._elMain.value, 10);
        }
    }
    setData(data) {
        if (data == null || data == undefined) {
            this._elMain.value = "";
        }
        else {
            this._elMain.value = (data | 0).toString();
        }
    }
}
exports.QinInteger = QinInteger;

},{"./qin-edit":24,"qinpel-res":44}],33:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLabel = void 0;
const qin_base_1 = require("./qin-base");
class QinLabel extends qin_base_1.QinBase {
    constructor(title) {
        super();
        this._elMain = document.createElement("span");
        if (title) {
            this._elMain.textContent = title;
        }
    }
    getMain() {
        return this._elMain;
    }
    setTitle(title) {
        this._elMain.textContent = title;
    }
    getTitle() {
        return this._elMain.textContent;
    }
}
exports.QinLabel = QinLabel;

},{"./qin-base":19}],34:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinLine = void 0;
const qin_base_1 = require("./qin-base");
class QinLine extends qin_base_1.QinBase {
    constructor(options) {
        super();
        this._elMain = document.createElement("div");
        this.initPanel();
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (let viewer of options.initial) {
                viewer.install(this);
            }
        }
    }
    initPanel() {
        styles.applyOnPanel(this._elMain);
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinLine = QinLine;
const styles = {
    applyOnPanel: (el) => {
        el.style.display = "flex";
        el.style.flexDirection = "row";
        el.style.flexWrap = "wrap";
    },
};

},{"./qin-base":19}],35:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMenuItem = exports.QinMenu = void 0;
const qin_assets_1 = require("./qin-assets");
const qin_column_1 = require("./qin-column");
const qin_edit_1 = require("./qin-edit");
const qin_panel_1 = require("./qin-panel");
class QinMenu extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._qinMain = new qin_panel_1.QinPanel();
        this._qinMain.style.putAsEdit();
        this._qinMain.style.putAsScroll();
        if (options === null || options === void 0 ? void 0 : options.items) {
            this.setData(options.items);
        }
    }
    getMain() {
        return this._qinMain.getMain();
    }
    getData() {
        let result = [];
        for (let child of this.children()) {
            if (child instanceof QinMenuItem) {
                result.push(child);
            }
        }
        return result;
    }
    setData(data) {
        this.clearChildren();
        for (let item of data) {
            item.install(this);
        }
    }
    putItem(item) {
        item.install(this);
    }
}
exports.QinMenu = QinMenu;
class QinMenuItem extends qin_panel_1.QinPanel {
    constructor(icon, label) {
        super();
        this._face = new qin_panel_1.QinPanel();
        this._body = new qin_column_1.QinColumn();
        this._selected = false;
        this._face.install(this);
        this._body.install(this._face);
        this._icon = icon;
        if (this._icon) {
            this._icon.install(this._body);
        }
        this._label = label;
        if (this._label) {
            this._label.install(this._body);
        }
        this.putTabIndex(0);
        this.style.putAsEdit();
        this.style.putAsMargin(3);
        this.style.putAsPadding(6);
        this.style.putAsDisplayInlineBlock();
        this.style.putAsMaxWidth(96);
        this._body.style.putAsAllCentered();
    }
    select() {
        this._face.style.putAsBackAsset(qin_assets_1.QinAsset.BackTiny01);
        this._selected = true;
    }
    unSelect() {
        this._face.style.putAsBackInitial();
        this._selected = false;
    }
    swapSelect() {
        if (this._selected) {
            this.unSelect();
        }
        else {
            this.select();
        }
    }
}
exports.QinMenuItem = QinMenuItem;

},{"./qin-assets":17,"./qin-column":22,"./qin-edit":24,"./qin-panel":37}],36:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinMutantsArm = exports.QinMutants = void 0;
const qin_boolean_1 = require("./qin-boolean");
const qin_file_chooser_1 = require("./qin-file-chooser");
const qin_combo_1 = require("./qin-combo");
const qin_file_explorer_1 = require("./qin-file-explorer");
const qin_integer_1 = require("./qin-integer");
const qin_file_path_1 = require("./qin-file-path");
const qin_string_1 = require("./qin-string");
var QinMutants;
(function (QinMutants) {
    QinMutants["BOOLEAN"] = "boolean";
    QinMutants["CHOOSER"] = "chooser";
    QinMutants["COMBO"] = "combo";
    QinMutants["EXPLORER"] = "explorer";
    QinMutants["INTEGER"] = "integer";
    QinMutants["PATH"] = "path";
    QinMutants["STRING"] = "string";
})(QinMutants = exports.QinMutants || (exports.QinMutants = {}));
function newEdit(kind, options) {
    switch (kind) {
        case QinMutants.BOOLEAN:
            return new qin_boolean_1.QinBoolean(options);
        case QinMutants.CHOOSER:
            return new qin_file_chooser_1.QinFileChooser(options);
        case QinMutants.COMBO:
            return new qin_combo_1.QinCombo(options);
        case QinMutants.EXPLORER:
            return new qin_file_explorer_1.QinFileExplorer(options);
        case QinMutants.INTEGER:
            return new qin_integer_1.QinInteger(options);
        case QinMutants.PATH:
            return new qin_file_path_1.QinFilePath(options);
        case QinMutants.STRING:
            return new qin_string_1.QinString(options);
        default:
            throw new Error("Unknown kind of mutant to create.");
    }
}
exports.QinMutantsArm = {
    newEdit,
};

},{"./qin-boolean":20,"./qin-combo":23,"./qin-file-chooser":26,"./qin-file-explorer":27,"./qin-file-path":28,"./qin-integer":32,"./qin-string":40}],37:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinPanel = void 0;
const qin_base_1 = require("./qin-base");
class QinPanel extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elMain.style.display = "flex";
    }
    getMain() {
        return this._elMain;
    }
}
exports.QinPanel = QinPanel;

},{"./qin-base":19}],38:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSplitter = void 0;
const qin_base_1 = require("./qin-base");
class QinSplitter extends qin_base_1.QinBase {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elSideA = document.createElement("div");
        this._elMover = document.createElement("div");
        this._elSideB = document.createElement("div");
        this._elMain.appendChild(this._elSideA);
        this._elMain.appendChild(this._elMover);
        this._elMain.appendChild(this._elSideB);
        this._elMain.style.display = "flex";
        this._elSideA.style.display = "flex";
        this._elSideA.style.position = "relative";
        this._elSideA.style.overflow = "auto";
        this._elSideB.style.display = "flex";
        this._elSideB.style.position = "relative";
        this._elSideB.style.overflow = "auto";
    }
    getMain() {
        return this._elMain;
    }
    setVertical() {
        this._elMain.style.flexDirection = "column";
    }
    setHorizontal() {
        this._elMain.style.flexDirection = "row";
    }
}
exports.QinSplitter = QinSplitter;

},{"./qin-base":19}],39:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinStack = void 0;
const qin_panel_1 = require("./qin-panel");
class QinStack extends qin_panel_1.QinPanel {
    stack(qinComp) {
        this.children().forEach((child) => {
            child.unDisplay();
        });
        qinComp.install(this);
    }
    show(qinComp) {
        this.children().forEach((child) => {
            if (child === qinComp) {
                child.reDisplay();
            }
            else {
                child.unDisplay();
            }
        });
    }
}
exports.QinStack = QinStack;

},{"./qin-panel":37}],40:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinString = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_edit_1 = require("./qin-edit");
class QinString extends qin_edit_1.QinEdit {
    constructor(options) {
        super();
        this._elMain = document.createElement("input");
        this._elMain.type = "text";
        if (options === null || options === void 0 ? void 0 : options.maxLength) {
            this._elMain.maxLength = options.maxLength;
            let position = Math.min(Math.max(options.maxLength - 10, 0), 90);
            let width = Math.floor(90 + (position * 7) / 3);
            this._elMain.style.width = width + "px";
        }
        qinpel_res_1.QinSkin.styleAsEdit(this._elMain);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            this.setData(options.initial);
        }
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        return this._elMain.value;
    }
    setData(data) {
        this._elMain.value = data;
    }
    insertAtCursor(data) {
        if (!data)
            return;
        let startPos = this._elMain.selectionStart;
        let endPos = this._elMain.selectionEnd;
        let oldVal = this._elMain.value;
        let newVal = (startPos > 0 ? oldVal.substring(0, startPos) : "") +
            data +
            (endPos < oldVal.length ? oldVal.substring(endPos) : "");
        this._elMain.value = newVal;
        this._elMain.selectionStart = startPos;
        this._elMain.selectionEnd = startPos + data.length;
    }
}
exports.QinString = QinString;

},{"./qin-edit":24,"qinpel-res":44}],41:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTable = void 0;
const qin_edit_1 = require("./qin-edit");
class QinTable extends qin_edit_1.QinEdit {
    constructor() {
        super();
        this._elMain = document.createElement("div");
        this._elTable = document.createElement("table");
        this._elTHead = document.createElement("thead");
        this._elTBody = document.createElement("tbody");
        this._elMain.appendChild(this._elTable);
        this._elTable.appendChild(this._elTHead);
        this._elTable.appendChild(this._elTBody);
    }
    getMain() {
        return this._elMain;
    }
    getData() {
        let result = [];
        this._elTBody.querySelectorAll("tr").forEach((tr) => {
            let line = [];
            tr.querySelectorAll("td").forEach((td) => {
                line.push(td.innerText);
            });
            result.push(line);
        });
        return result;
    }
    setData(data) {
        this.delLines();
        for (const line of data) {
            this.addLine(line);
        }
    }
    setHead(head) {
        this._elTHead.innerHTML = "";
        for (const cell of head) {
            let th = document.createElement("th");
            th.innerText = cell;
            this._elTHead.appendChild(th);
        }
    }
    getHead() {
        let result = [];
        this._elTHead.querySelectorAll("th").forEach((th) => {
            result.push(th.innerText);
        });
        return result;
    }
    addHead(head) {
        let th = document.createElement("th");
        th.innerText = head;
        this._elTHead.appendChild(th);
    }
    addLine(line) {
        let tr = document.createElement("tr");
        for (const cell of line) {
            let td = document.createElement("td");
            td.innerText = cell.toString();
            tr.appendChild(td);
        }
        this._elTBody.appendChild(tr);
    }
    delLines() {
        this._elTBody.innerHTML = "";
    }
}
exports.QinTable = QinTable;

},{"./qin-edit":24}],42:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTabs = void 0;
const qinpel_res_1 = require("qinpel-res");
const qin_button_1 = require("./qin-button");
const qin_column_1 = require("./qin-column");
const qin_label_1 = require("./qin-label");
const qin_line_1 = require("./qin-line");
const qin_panel_1 = require("./qin-panel");
class QinTabs extends qin_column_1.QinColumn {
    constructor(options) {
        super();
        this._qinTabs = new qin_line_1.QinLine();
        this._qinPanel = new qin_panel_1.QinPanel();
        this._tabs = [];
        this._qinTabs.install(this);
        this._qinPanel.install(this);
        if (options === null || options === void 0 ? void 0 : options.initial) {
            for (const tab of options === null || options === void 0 ? void 0 : options.initial) {
                this.addTab(tab);
            }
        }
    }
    get qinTabs() {
        return this._qinTabs;
    }
    get qinPanel() {
        return this._qinPanel;
    }
    addTab(tab) {
        const button = new qin_button_1.QinButton({ label: new qin_label_1.QinLabel(tab.title) });
        button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
        button.addAction((qinEvent) => {
            if (qinEvent.isPrimary) {
                this.showViewer(tab.viewer);
            }
        });
        button.install(this._qinTabs);
        let first = this._tabs.length == 0;
        let tabRef = {
            title: tab.title,
            viewer: tab.viewer,
            button,
        };
        this._tabs.push(tabRef);
        if (first) {
            this.showViewer(tab.viewer);
        }
    }
    showTab(title) {
        for (const tab of this._tabs) {
            if (tab.title == title) {
                this.showViewer(tab.viewer);
                break;
            }
        }
    }
    showViewer(viewer) {
        this._qinPanel.clearChildren();
        viewer.install(this._qinPanel);
        for (const tab of this._tabs) {
            if (tab.viewer == viewer) {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorActive);
            }
            else {
                tab.button.style.putAsBackground(qinpel_res_1.QinSkin.styles.ColorInactive);
            }
        }
    }
}
exports.QinTabs = QinTabs;

},{"./qin-button":21,"./qin-column":22,"./qin-label":33,"./qin-line":34,"./qin-panel":37,"qinpel-res":44}],43:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinTools = void 0;
const refQinpel = window.frameElement.qinpel;
function qinpel() {
    return refQinpel;
}
exports.QinTools = {
    qinpel,
};

},{}],44:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = exports.QinSkin = exports.QinStyles = exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = exports.QinBody = exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
var qin_arm_1 = require("./qin-arm");
Object.defineProperty(exports, "QinEvent", { enumerable: true, get: function () { return qin_arm_1.QinEvent; } });
var qin_arm_2 = require("./qin-arm");
Object.defineProperty(exports, "QinWaiters", { enumerable: true, get: function () { return qin_arm_2.QinWaiters; } });
var qin_arm_3 = require("./qin-arm");
Object.defineProperty(exports, "QinPointerCalls", { enumerable: true, get: function () { return qin_arm_3.QinPointerCalls; } });
var qin_arm_4 = require("./qin-arm");
Object.defineProperty(exports, "QinArm", { enumerable: true, get: function () { return qin_arm_4.QinArm; } });
var qin_body_1 = require("./qin-body");
Object.defineProperty(exports, "QinBody", { enumerable: true, get: function () { return qin_body_1.QinBody; } });
var qin_foot_1 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesNature", { enumerable: true, get: function () { return qin_foot_1.QinFilesNature; } });
var qin_foot_2 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesOperation", { enumerable: true, get: function () { return qin_foot_2.QinFilesOperation; } });
var qin_foot_3 = require("./qin-foot");
Object.defineProperty(exports, "QinFilesDescriptor", { enumerable: true, get: function () { return qin_foot_3.QinFilesDescriptor; } });
var qin_foot_4 = require("./qin-foot");
Object.defineProperty(exports, "QinFoot", { enumerable: true, get: function () { return qin_foot_4.QinFoot; } });
var qin_head_1 = require("./qin-head");
Object.defineProperty(exports, "QinPoint", { enumerable: true, get: function () { return qin_head_1.QinPoint; } });
var qin_head_2 = require("./qin-head");
Object.defineProperty(exports, "QinDimension", { enumerable: true, get: function () { return qin_head_2.QinDimension; } });
var qin_head_3 = require("./qin-head");
Object.defineProperty(exports, "QinBounds", { enumerable: true, get: function () { return qin_head_3.QinBounds; } });
var qin_head_4 = require("./qin-head");
Object.defineProperty(exports, "QinGrandeur", { enumerable: true, get: function () { return qin_head_4.QinGrandeur; } });
var qin_head_5 = require("./qin-head");
Object.defineProperty(exports, "QinHead", { enumerable: true, get: function () { return qin_head_5.QinHead; } });
var qin_skin_1 = require("./qin-skin");
Object.defineProperty(exports, "QinStyles", { enumerable: true, get: function () { return qin_skin_1.QinStyles; } });
var qin_skin_2 = require("./qin-skin");
Object.defineProperty(exports, "QinSkin", { enumerable: true, get: function () { return qin_skin_2.QinSkin; } });
var qin_soul_1 = require("./qin-soul");
Object.defineProperty(exports, "QinSoul", { enumerable: true, get: function () { return qin_soul_1.QinSoul; } });

},{"./qin-arm":45,"./qin-body":46,"./qin-foot":47,"./qin-head":48,"./qin-skin":49,"./qin-soul":50}],45:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinArm = exports.QinPointerCalls = exports.QinWaiters = exports.QinEvent = void 0;
const qin_skin_1 = require("./qin-skin");
class QinEvent {
    constructor(isStart, event) {
        this._event = null;
        this._point = null;
        this._stop = false;
        this._start = isStart;
        this._event = event;
        if (event instanceof MouseEvent || event instanceof TouchEvent) {
            this._point = makeEventPointer(isStart, event);
        }
    }
    get isStart() {
        return this._start;
    }
    get fromOrigin() {
        if (this._event) {
            return this._event.target;
        }
        return null;
    }
    get fromTyping() {
        return this._event instanceof KeyboardEvent;
    }
    get fromPointing() {
        return (this._event instanceof MouseEvent || this._event instanceof TouchEvent);
    }
    get hasAlt() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.altKey;
    }
    get hasCtrl() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.ctrlKey;
    }
    get hasShift() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.shiftKey;
    }
    get hasMeta() {
        var _a;
        return (_a = this._event) === null || _a === void 0 ? void 0 : _a.metaKey;
    }
    get keyTyped() {
        if (this._event instanceof KeyboardEvent) {
            return this._event.key;
        }
        return null;
    }
    get isEnter() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEnter(this._event);
        }
        return false;
    }
    get isEscape() {
        if (this._event instanceof KeyboardEvent) {
            return isKeyEscape(this._event);
        }
        return false;
    }
    get isSpace() {
        if (this._event instanceof KeyboardEvent) {
            return isKeySpace(this._event);
        }
        return false;
    }
    get isDouble() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerDouble(this._start, this._event);
        }
        return false;
    }
    get isLong() {
        if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isEventPointerLong(this._start, this._event);
        }
        return false;
    }
    get point() {
        return this._point;
    }
    get pointX() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientX;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientX;
            }
        }
        return null;
    }
    get pointY() {
        if (this._event instanceof MouseEvent) {
            return this._event.clientY;
        }
        else if (this._event instanceof TouchEvent) {
            if (this._event.touches.length > 0) {
                let index = (this._event.touches.length / 2) | 0;
                return this._event.touches[index].clientY;
            }
        }
        return null;
    }
    get isFirstButton() {
        if (this._event instanceof MouseEvent) {
            return isFirstButton(this._event);
        }
        return false;
    }
    get isMiddleButton() {
        if (this._event instanceof MouseEvent) {
            return isMiddleButton(this._event);
        }
        return false;
    }
    get isSecondButton() {
        if (this._event instanceof MouseEvent) {
            return isSecondButton(this._event);
        }
        return false;
    }
    get isOneFinger() {
        if (this._event instanceof TouchEvent) {
            return isOneFinger(this._event);
        }
        return false;
    }
    get isTwoFingers() {
        if (this._event instanceof TouchEvent) {
            return isTwoFingers(this._event);
        }
        return false;
    }
    get isThreeFingers() {
        if (this._event instanceof TouchEvent) {
            return isThreeFingers(this._event);
        }
        return false;
    }
    get isFourFingers() {
        if (this._event instanceof TouchEvent) {
            return isFourFingers(this._event);
        }
        return false;
    }
    get isPrimary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isPrimaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isPrimaryPoint(this._event);
        }
        return false;
    }
    get isAuxiliary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isAuxiliaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isAuxiliaryPoint(this._event);
        }
        return false;
    }
    get isSecondary() {
        if (this._start) {
            return false;
        }
        if (this._event instanceof KeyboardEvent) {
            return isSecondaryKey(this._event);
        }
        else if (this._event instanceof MouseEvent ||
            this._event instanceof TouchEvent) {
            return isSecondaryPoint(this._event);
        }
        return false;
    }
    get stop() {
        return this._stop;
    }
    consumed() {
        this._stop = true;
    }
}
exports.QinEvent = QinEvent;
class QinWaiters {
    constructor(initial) {
        this.waiters = initial ? initial : [];
    }
    addWaiter(waiter) {
        this.waiters.push(waiter);
        return this;
    }
    hasWaiter() {
        return this.waiters.length > 0;
    }
    sendWaiters(result) {
        for (const waiter of this.waiters) {
            waiter(result);
        }
    }
}
exports.QinWaiters = QinWaiters;
class QinPointerCalls {
}
exports.QinPointerCalls = QinPointerCalls;
function stopEvent(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    event.cancelBubble = true;
    return false;
}
var lastEventPointer = null;
function makeEventPointer(isStart, ev) {
    const result = {
        posX: 0,
        posY: 0,
    };
    if (ev instanceof MouseEvent) {
        if (ev.clientX || ev.clientY) {
            result.posX = ev.clientX;
            result.posY = ev.clientY;
        }
    }
    else if (ev instanceof TouchEvent) {
        if (ev.touches && this._event.touches.length > 1) {
            let index = Math.floor(this._event.touches.length / 2);
            result.posX = ev.touches[index].clientX;
            result.posY = ev.touches[index].clientY;
        }
    }
    if (isStart) {
        lastEventPointer = ev;
    }
    return result;
}
function isEventPointerDouble(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif < 450;
}
function isEventPointerLong(isStart, ev) {
    if (!isStart || lastEventPointer == null || ev == null) {
        return false;
    }
    const timeDif = ev.timeStamp - lastEventPointer.timeStamp;
    return timeDif > 840;
}
function isKeyInList(ev, list) {
    let keyLower = ev.key.toLowerCase();
    return list.indexOf(keyLower) > -1;
}
function isKeyEnter(ev) {
    return isKeyInList(ev, ["enter", "return"]) || ev.keyCode === 13;
}
function isKeyEscape(ev) {
    return isKeyInList(ev, ["esc", "escape"]) || ev.keyCode === 27;
}
function isKeySpace(ev) {
    return isKeyInList(ev, [" ", "space", "spacebar"]) || ev.keyCode === 32;
}
function isFirstButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 0;
}
function isMiddleButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 1;
}
function isSecondButton(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.button) == 2;
}
function isOneFinger(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 1;
}
function isTwoFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 2;
}
function isThreeFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 3;
}
function isFourFingers(ev) {
    return (ev === null || ev === void 0 ? void 0 : ev.touches.length) == 4;
}
function isPrimaryKey(ev) {
    return isKeyEnter(ev);
}
function isAuxiliaryKey(ev) {
    return ev.ctrlKey && ev.altKey && isKeySpace(ev);
}
function isSecondaryKey(ev) {
    return ev.ctrlKey && !ev.altKey && isKeySpace(ev);
}
function isPrimaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isFirstButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isOneFinger(ev);
    }
    return false;
}
function isAuxiliaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isMiddleButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isThreeFingers(ev);
    }
    return false;
}
function isSecondaryPoint(ev) {
    if (ev instanceof MouseEvent) {
        return isSecondButton(ev);
    }
    else if (ev instanceof TouchEvent) {
        return isTwoFingers(ev);
    }
    return false;
}
function addAction(element, action) {
    element.addEventListener("keydown", actKeyDown);
    element.addEventListener("keyup", actKeyUp);
    element.addEventListener("mousedown", actMouseDown);
    element.addEventListener("mouseup", actMouseUp);
    element.addEventListener("touchstart", actTouchStart);
    element.addEventListener("touchend", actTouchEnd);
    function actKeyDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseDown(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchStart(ev) {
        let qinEvent = new QinEvent(true, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        action(qinEvent);
        if (qinEvent.stop) {
            return stopEvent(ev);
        }
        else {
            return true;
        }
    }
}
function addActionMain(element, action) {
    element.onkeyup = actKeyUp;
    element.onmouseup = actMouseUp;
    element.ontouchend = actTouchEnd;
    function actKeyUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actMouseUp(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
    function actTouchEnd(ev) {
        let qinEvent = new QinEvent(false, ev);
        if (qinEvent.isPrimary) {
            action(qinEvent);
            return stopEvent(ev);
        }
    }
}
function addActions(elements, action) {
    for (const element of elements) {
        addAction(element, action);
    }
}
function putActionProxy(destiny, origins) {
    for (const origin of origins) {
        origin.addEventListener("keydown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("keyup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mousedown", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("mouseup", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchstart", (e) => {
            destiny.dispatchEvent(e);
        });
        origin.addEventListener("touchend", (e) => {
            destiny.dispatchEvent(e);
        });
    }
}
function addMover(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitPosX = 0;
    var dragInitPosY = 0;
    for (let source of sources) {
        source.onmousedown = onMoverInit;
        source.ontouchstart = onMoverInit;
        source.ondragstart = stopEvent;
    }
    function onMoverInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitPosX = parseInt(target.style.left, 10);
        dragInitPosY = parseInt(target.style.top, 10);
        document.ontouchmove = onMoverMove;
        document.onmousemove = onMoverMove;
        document.ontouchend = onMoverClose;
        document.onmouseup = onMoverClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onMoverMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitEventX;
        var dragDifY = pointer.posY - dragInitEventY;
        var dragFinalX = dragInitPosX + dragDifX;
        var dragFinalY = dragInitPosY + dragDifY;
        target.style.left = (dragFinalX > 0 ? dragFinalX : 0) + "px";
        target.style.top = (dragFinalY > 0 ? dragFinalY : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onMoverClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addResizer(sources, target, dragCalls) {
    var dragInitEventX = 0;
    var dragInitEventY = 0;
    var dragInitWidth = 0;
    var dragInitHeight = 0;
    for (let source of sources) {
        source.onmousedown = onResizerInit;
        source.ontouchstart = onResizerInit;
        source.ondragstart = stopEvent;
    }
    function onResizerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitEventX = pointer.posX;
        dragInitEventY = pointer.posY;
        dragInitWidth = parseInt(target.style.width, 10);
        dragInitHeight = parseInt(target.style.height, 10);
        document.ontouchmove = onResizerMove;
        document.onmousemove = onResizerMove;
        document.ontouchend = onResizerClose;
        document.onmouseup = onResizerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onResizerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var frameDragDifX = pointer.posX - dragInitEventX;
        var frameDragDifY = pointer.posY - dragInitEventY;
        var frameDragFinalWidth = dragInitWidth + frameDragDifX;
        var frameDragFinalHeight = dragInitHeight + frameDragDifY;
        target.style.width =
            (frameDragFinalWidth > 0 ? frameDragFinalWidth : 0) + "px";
        target.style.height =
            (frameDragFinalHeight > 0 ? frameDragFinalHeight : 0) + "px";
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onResizerClose(ev) {
        document.ontouchmove = null;
        document.onmousemove = null;
        document.ontouchend = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
function addScroller(target, dragCalls) {
    var dragInitX = 0;
    var dragInitY = 0;
    var dragScrollX = 0;
    var dragScrollY = 0;
    target.ondragstart = stopEvent;
    target.ontouchstart = onScrollerInit;
    target.onmousedown = onScrollerInit;
    function onScrollerInit(ev) {
        if (document.onmousemove || document.ontouchmove) {
            return;
        }
        if (dragCalls && dragCalls.onDouble && isEventPointerDouble(true, ev)) {
            dragCalls.onDouble();
            return;
        }
        if (dragCalls && dragCalls.onLong && isEventPointerLong(true, ev)) {
            dragCalls.onLong();
            return;
        }
        const pointer = makeEventPointer(true, ev);
        dragInitX = pointer.posX;
        dragInitY = pointer.posY;
        dragScrollX = target.scrollLeft;
        dragScrollY = target.scrollTop;
        document.ontouchmove = onScrollerMove;
        document.onmousemove = onScrollerMove;
        document.ontouchend = onScrollerClose;
        document.onmouseup = onScrollerClose;
        qin_skin_1.QinSkin.hideAllIFrames();
        if (dragCalls && dragCalls.onStart) {
            dragCalls.onStart();
        }
        return stopEvent(ev);
    }
    function onScrollerMove(ev) {
        const pointer = makeEventPointer(false, ev);
        var dragDifX = pointer.posX - dragInitX;
        var dragDifY = pointer.posY - dragInitY;
        var dragNewX = dragScrollX - dragDifX;
        var dragNewY = dragScrollY - dragDifY;
        target.scrollTo(dragNewX, dragNewY);
        if (dragCalls && dragCalls.onMove) {
            dragCalls.onMove();
        }
        return stopEvent(ev);
    }
    function onScrollerClose(ev) {
        document.ontouchmove = null;
        document.ontouchend = null;
        document.onmousemove = null;
        document.onmouseup = null;
        qin_skin_1.QinSkin.showAllIFrames();
        qin_skin_1.QinSkin.clearSelection();
        if (dragCalls && dragCalls.onEnd) {
            dragCalls.onEnd();
        }
        return stopEvent(ev);
    }
}
exports.QinArm = {
    stopEvent,
    makeEventPointer,
    isEventPointerDouble,
    isEventPointerLong,
    isKeyInList,
    isKeyEnter,
    isKeySpace,
    isFirstButton,
    isMiddleButton,
    isSecondButton,
    isOneFinger,
    isTwoFingers,
    isThreeFingers,
    isFourFingers,
    isPrimaryPoint,
    isAuxiliaryPoint,
    isSecondaryPoint,
    addAction,
    addActionMain,
    addActions,
    putActionProxy,
    addMover,
    addResizer,
    addScroller,
};

},{"./qin-skin":49}],46:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinBody = void 0;
function getCookie(name, orDefault) {
    let cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
        let cookiePair = cookies[i].split("=");
        if (name == decodeURIComponent(cookiePair[0]).trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return orDefault;
}
function setCookie(name, value, options = {}) {
    options = Object.assign({ path: "/" }, options);
    if (!options.expires) {
        let date = new Date();
        date.setTime(date.getTime() + 1 * 24 * 60 * 60 * 1000);
        options.expires = date;
    }
    if (options.expires instanceof Date) {
        options.expires = options.expires.toUTCString();
    }
    let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function delCookie(name, options = {}) {
    let updatedCookie = encodeURIComponent(name) + "=;  expires=Thu, 01 Jan 1970 00:00:00 GMT";
    if (options.expires) {
        delete options.expires;
    }
    for (let optionKey in options) {
        updatedCookie += "; " + optionKey;
        let optionValue = options[optionKey];
        if (optionValue !== true) {
            updatedCookie += "=" + optionValue;
        }
    }
    document.cookie = updatedCookie;
}
function getTextLines(fromText) {
    return fromText.match(/[^\r\n]+/g);
}
function getCSVRows(fromText, names) {
    var lines = getTextLines(fromText);
    var result = [];
    for (let line of lines) {
        let row = !names ? [] : {};
        let inside_quotes = false;
        let column_value = "";
        let column_index = 0;
        for (let char_index = 0; char_index < line.length; char_index++) {
            let actual = line.charAt(char_index);
            if (inside_quotes) {
                if (actual == '"') {
                    let next = char_index < line.length - 1 ? line.charAt(char_index + 1) : "";
                    if (next == '"') {
                        column_value += actual;
                        char_index++;
                    }
                    else {
                        inside_quotes = false;
                    }
                }
                else {
                    column_value += actual;
                }
            }
            else {
                if (actual == '"') {
                    inside_quotes = true;
                }
                else if (actual == ",") {
                    column_value = unmaskSpecialChars(column_value);
                    if (!names) {
                        row.push(column_value);
                    }
                    else {
                        let column_name = "col_" + column_index;
                        if (column_index < names.length) {
                            column_name = names[column_index];
                        }
                        row[column_name] = column_value;
                    }
                    column_value = "";
                    column_index++;
                }
                else {
                    column_value += actual;
                }
            }
        }
        column_value = unmaskSpecialChars(column_value);
        if (!names) {
            row.push(column_value);
            result.push(row);
        }
        else {
            let column_name = "col_" + column_index;
            if (column_index < names.length) {
                column_name = names[column_index];
            }
            row[column_name] = column_value;
            result.push(row);
        }
    }
    return result;
}
function maskSpecialChars(fromText) {
    return fromText
        .replace("\\", "\\\\")
        .replace("\r", "\\r")
        .replace("\n", "\\n")
        .replace("\t", "\\t");
}
function unmaskSpecialChars(fromText) {
    return fromText
        .replace("\\\\", "\\")
        .replace("\\r", "\r")
        .replace("\\n", "\n")
        .replace("\\t", "\t");
}
function parseParameters(source) {
    let result = [];
    let open = false;
    let actual = "";
    for (const letter of Array.from(source)) {
        if (open) {
            if (letter == '"') {
                open = false;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
        else {
            if (letter == '"') {
                open = true;
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else if (letter == " ") {
                if (actual) {
                    result.push(actual);
                    actual = "";
                }
            }
            else {
                actual += letter;
            }
        }
    }
    return result;
}
exports.QinBody = {
    getCookie,
    setCookie,
    delCookie,
    getTextLines,
    getCSVRows,
    maskSpecialChars,
    unmaskSpecialChars,
    parseParameters,
};

},{}],47:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinFoot = exports.QinFilesDescriptor = exports.QinFilesOperation = exports.QinFilesNature = void 0;
var QinFilesNature;
(function (QinFilesNature) {
    QinFilesNature["BOTH"] = "both";
    QinFilesNature["DIRECTORIES"] = "directories";
    QinFilesNature["FILES"] = "files";
})(QinFilesNature = exports.QinFilesNature || (exports.QinFilesNature = {}));
var QinFilesOperation;
(function (QinFilesOperation) {
    QinFilesOperation["OPEN"] = "open";
    QinFilesOperation["SAVE"] = "save";
})(QinFilesOperation = exports.QinFilesOperation || (exports.QinFilesOperation = {}));
class QinFilesDescriptor {
}
exports.QinFilesDescriptor = QinFilesDescriptor;
function getLocation() {
    return window.location.href;
}
function isLocalHost() {
    var location = getLocation();
    var start = location.indexOf("://");
    if (start == -1) {
        start = 0;
    }
    else {
        start += 3;
    }
    location = location.substring(start);
    return location.indexOf("localhost") === 0 || location.indexOf("127.0.0.1") === 0;
}
function getSeparator(ofPath) {
    let result = "/";
    if (ofPath && ofPath.indexOf("\\") > -1) {
        result = "\\";
    }
    return result;
}
function getPathJoin(pathA, pathB) {
    if (pathA == null || pathA == undefined) {
        pathA = "";
    }
    if (pathB == null || pathB == undefined) {
        pathB = "";
    }
    if (pathA.length == 0) {
        return pathB;
    }
    else if (pathB.length == 0) {
        return pathA;
    }
    else {
        let union = "/";
        if (pathA.indexOf("\\") > -1 || pathB.indexOf("\\") > -1) {
            union = "\\";
        }
        let pathAEnd = pathA.substring(pathA.length - 1, pathA.length);
        let pathBStart = pathB.substring(0, 1);
        if (pathAEnd == union || pathBStart == union) {
            union = "";
        }
        return pathA + union + pathB;
    }
}
function getParent(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(0, last);
        }
    }
    return "";
}
function getStem(path) {
    if (path) {
        let separator = getSeparator(path);
        let last = path.lastIndexOf(separator);
        if (last > -1) {
            return path.substring(last + 1);
        }
    }
    return "";
}
function getFileExtension(name) {
    let position = name.lastIndexOf(".");
    if (position > -1) {
        return name.substring(position + 1);
    }
    else {
        return "";
    }
}
const appsExtensions = [
    "htm", "html", "css", "js", "jsx", "ts", "tsx", "phtml"
];
function isFileApp(extension) {
    return appsExtensions.indexOf(extension) > -1;
}
const cmdsExtensions = [
    "h", "c", "hpp", "cpp", "rs", "jl",
    "cs", "csproj", "fs", "ml", "fsi", "mli", "fsx", "fsscript",
    "java", "gy", "gvy", "groovy", "sc", "scala", "clj",
    "py", "ruby", "php", "phtml",
];
function isFileCmd(extension) {
    return cmdsExtensions.indexOf(extension) > -1;
}
const execExtensions = [
    "exe", "jar", "com", "bat", "sh"
];
function isFileExec(extension) {
    return execExtensions.indexOf(extension) > -1;
}
const imageExtensions = [
    "jpg", "jpeg", "png", "gif", "bmp"
];
function isFileImage(extension) {
    return imageExtensions.indexOf(extension) > -1;
}
const vectorExtensions = [
    "svg"
];
function isFileVector(extension) {
    return vectorExtensions.indexOf(extension) > -1;
}
const movieExtensions = [
    "avi", "mp4"
];
function isFileMovie(extension) {
    return movieExtensions.indexOf(extension) > -1;
}
const musicExtensions = [
    "wav", "mp3"
];
function isFileMusic(extension) {
    return musicExtensions.indexOf(extension) > -1;
}
const zippedExtensions = [
    "zip", "rar", "7z", "tar", "gz"
];
function isFileZipped(extension) {
    return zippedExtensions.indexOf(extension) > -1;
}
exports.QinFoot = {
    getLocation,
    isLocalHost,
    getSeparator,
    getPathJoin,
    getParent,
    getStem,
    getFileExtension,
    isFileApp,
    isFileCmd,
    isFileExec,
    isFileImage,
    isFileVector,
    isFileMovie,
    isFileMusic,
    isFileZipped,
};

},{}],48:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinHead = exports.QinGrandeur = exports.QinBounds = exports.QinDimension = exports.QinPoint = void 0;
class QinPoint {
}
exports.QinPoint = QinPoint;
;
class QinDimension {
}
exports.QinDimension = QinDimension;
;
class QinBounds {
}
exports.QinBounds = QinBounds;
;
var QinGrandeur;
(function (QinGrandeur) {
    QinGrandeur["SMALL"] = "small";
    QinGrandeur["MEDIUM"] = "medium";
    QinGrandeur["LARGE"] = "large";
})(QinGrandeur = exports.QinGrandeur || (exports.QinGrandeur = {}));
function getDeskAPI() {
    var win = window;
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.parent;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    else {
        win = window.top;
    }
    if (win.deskAPI) {
        return win.deskAPI;
    }
    return undefined;
}
const logged = [];
function getLogged() {
    return logged;
}
function log(message) {
    logged.push(message);
    try {
        console.log(message);
    }
    catch (_) { }
    try {
        getDeskAPI().send("logOnMain", message);
    }
    catch (_) { }
}
function logError(error, origin) {
    log(getErrorMessage(error, origin));
}
function getErrorMessage(error, origin) {
    return getTreatMessage("Problem with:", error, origin);
}
function logWarning(error, origin) {
    log(getWarningMessage(error, origin));
}
function getWarningMessage(error, origin) {
    return getTreatMessage("Checkout this:", error, origin);
}
function logSupport(error, origin) {
    log(getSupportMessage(error, origin));
}
function getSupportMessage(error, origin) {
    return getTreatMessage("Need Support on:", error, origin);
}
function getTreatMessage(prefix, error, origin) {
    var result = prefix + (error ? " " + error.toString() : "");
    if (error.response && error.response.data) {
        var errorData = error.response.data;
        if (!(typeof errorData == "string" || errorData instanceof String)) {
            errorData = JSON.stringify(errorData);
        }
        result += " - Data: " + errorData;
    }
    else {
        if (!(typeof error == "string" || error instanceof String)) {
            result += " - Data: " + JSON.stringify(error);
        }
    }
    if (origin) {
        result += " - Origin: " + origin;
    }
    const stack = (new Error("")).stack;
    if (stack) {
        result += " - Stack: " + stack;
    }
    return result;
}
function toggleDevTools() {
    try {
        getDeskAPI().send("toggleDevTools");
    }
    catch (e) {
        logError(e, "{qinpel-res}(ErrCode-000001)");
    }
}
exports.QinHead = {
    getDeskAPI,
    getLogged,
    log,
    logError,
    getErrorMessage,
    logWarning,
    getWarningMessage,
    logSupport,
    getSupportMessage,
    getTreatMessage,
    toggleDevTools,
};

},{}],49:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSkin = exports.QinStyles = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_head_1 = require("./qin-head");
exports.QinStyles = {
    ColorForeground: "#180027",
    ColorBackground: "#fffaef",
    ColorInactive: "#faefff",
    ColorActive: "#fadede",
    ColorAccent: "#ae0000",
    ColorSelected: "#5d72de8f",
    FontName: "SourceSansPro",
    FontSize: "16px",
};
function styleAsBody(el) {
    el.style.position = "absolute";
    el.style.top = "0px";
    el.style.right = "0px";
    el.style.bottom = "0px";
    el.style.left = "0px";
    el.style.padding = "9px";
    el.style.overflow = "auto";
}
function styleAsEdit(el) {
    el.style.margin = "1px";
    el.style.padding = "3px";
    el.style.outline = "none";
    el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    el.style.borderRadius = "3px";
    el.style.color = exports.QinStyles.ColorForeground;
    el.style.backgroundColor = exports.QinStyles.ColorInactive;
    el.style.fontFamily = "SourceSansPro";
    el.style.fontSize = "16px";
    el.addEventListener("focus", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorActive;
        el.style.border = "1px solid " + exports.QinStyles.ColorAccent;
    });
    el.addEventListener("focusout", () => {
        el.style.outline = "none";
        el.style.backgroundColor = exports.QinStyles.ColorInactive;
        el.style.border = "1px solid " + exports.QinStyles.ColorForeground;
    });
}
function styleMaxSizeForNotOverFlow(el, parent) {
    console.log("D1");
    if (!parent) {
        parent = el.parentElement;
        console.log("D2: " + parent);
    }
    if (parent) {
        let maxWidth = 0;
        let maxHeight = 0;
        let imediate = el;
        do {
            maxWidth = maxWidth + imediate.clientLeft;
            maxHeight = maxHeight + imediate.clientTop;
            console.log("D3: " + maxWidth);
            console.log("D4: " + maxHeight);
            imediate = imediate.parentElement;
        } while (imediate != null && imediate != parent);
        maxWidth = parent.clientWidth - maxWidth;
        maxHeight = parent.clientHeight - maxHeight;
        console.log("D5: " + maxWidth);
        console.log("D6: " + maxHeight);
        el.style.maxWidth = maxWidth + "px";
        el.style.maxHeight = maxHeight + "px";
    }
}
function styleSize(el, size) {
    if (size) {
        if (size instanceof qin_head_1.QinDimension) {
            el.style.width = size.width + "px";
            el.style.height = size.height + "px";
        }
        else {
            let dim = getDimensionSize(size);
            el.style.width = dim.width + "px";
            el.style.height = dim.height + "px";
        }
    }
}
function styleFlexMax(el) {
    el.style.flex = "1";
}
function styleFlexMin(el) {
    el.style.flex = "0";
}
function getWindowSize() {
    return {
        width: document.body.clientWidth,
        height: document.body.clientHeight,
    };
}
function getWindowSizeStyle() {
    const width = getWindowSize().width;
    if (width < 600) {
        return qin_head_1.QinGrandeur.SMALL;
    }
    else if (width < 1000) {
        return qin_head_1.QinGrandeur.MEDIUM;
    }
    else {
        return qin_head_1.QinGrandeur.LARGE;
    }
}
function hideAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "hidden";
    }
}
function showAllIFrames() {
    var doc_iframes = document.getElementsByTagName("iframe");
    for (let i = 0; i < doc_iframes.length; i++) {
        let doc_iframe = doc_iframes[i];
        doc_iframe.style.visibility = "visible";
    }
}
function disableSelection(element) {
    element.style.userSelect = "none";
    element.style.webkitUserSelect = "none";
    element.onselectstart = qin_arm_1.QinArm.stopEvent;
}
function clearSelection() {
    setTimeout(() => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges();
        }
    }, 360);
}
function isElementVisibleInScroll(element) {
    if (element.parentElement) {
        if (element.offsetTop < element.parentElement.scrollTop) {
            return false;
        }
        if (element.offsetLeft < element.parentElement.scrollLeft) {
            return false;
        }
        if (element.clientWidth >
            element.parentElement.clientWidth -
                (element.offsetLeft - element.parentElement.scrollLeft)) {
            return false;
        }
        if (element.clientHeight >
            element.parentElement.clientHeight -
                (element.offsetTop - element.parentElement.scrollTop)) {
            return false;
        }
    }
    return true;
}
function getDimension(el) {
    return {
        width: parseInt(el.style.width),
        height: parseInt(el.style.height),
    };
}
function getDimensionSize(size) {
    if (size == qin_head_1.QinGrandeur.LARGE) {
        return getDimensionLarge();
    }
    else if (size == qin_head_1.QinGrandeur.MEDIUM) {
        return getDimensionMedium();
    }
    else {
        return getDimensionSmall();
    }
}
const dimensionSmall = {
    width: 16,
    height: 16,
};
function getDimensionSmall() {
    return dimensionSmall;
}
const dimensionMedium = {
    width: 32,
    height: 32,
};
function getDimensionMedium() {
    return dimensionMedium;
}
const dimensionLarge = {
    width: 64,
    height: 64,
};
function getDimensionLarge() {
    return dimensionLarge;
}
exports.QinSkin = {
    styles: exports.QinStyles,
    styleAsBody,
    styleAsEdit,
    styleMaxSizeForNotOverFlow,
    styleSize,
    styleFlexMax,
    styleFlexMin,
    getWindowSize,
    getWindowSizeStyle,
    hideAllIFrames,
    showAllIFrames,
    disableSelection,
    clearSelection,
    isElementVisibleInScroll,
    getDimension,
    getDimensionSize,
    getDimensionSmall,
    getDimensionMedium,
    getDimensionLarge,
};

},{"./qin-arm":45,"./qin-head":48}],50:[function(require,module,exports){
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.QinSoul = void 0;
const qin_arm_1 = require("./qin-arm");
const qin_body_1 = require("./qin-body");
const qin_foot_1 = require("./qin-foot");
const qin_head_1 = require("./qin-head");
const qin_skin_1 = require("./qin-skin");
exports.QinSoul = {
    arm: qin_arm_1.QinArm,
    body: qin_body_1.QinBody,
    foot: qin_foot_1.QinFoot,
    head: qin_head_1.QinHead,
    skin: qin_skin_1.QinSkin,
};

},{"./qin-arm":45,"./qin-body":46,"./qin-foot":47,"./qin-head":48,"./qin-skin":49}]},{},[15])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL0FwcERhdGEvUm9hbWluZy9ucG0vbm9kZV9tb2R1bGVzL2Jyb3dzZXJpZnkvbm9kZV9tb2R1bGVzL2Jyb3dzZXItcGFjay9fcHJlbHVkZS5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWNvbnN0cy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWV4cGVjdC5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLWZpZWxkLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtZmlsdGVycy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLW1vZGVsLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLWJhci5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FkLXJlZy1lZGl0b3IuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC1yZWctc2VhcmNoLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnLXRhYmxlLmpzIiwiLi4vYWRjb21tb24vYnVpbGQvYWQtcmVnaXN0ZXIuanMiLCIuLi9hZGNvbW1vbi9idWlsZC9hZC10b29scy5qcyIsIi4uL2FkY29tbW9uL2J1aWxkL2FsbC5qcyIsImJ1aWxkL2FkLW5hdGlvbi5qcyIsImJ1aWxkL2FkLXJlZ2lvbi5qcyIsImJ1aWxkL2luZGV4LmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9hbGwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1hc3NldHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1iYXNlLXN0eWxlLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tYmFzZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWJvb2xlYW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1idXR0b24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jb2x1bW4uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1jb21iby5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWVkaXQuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWVsZC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtY2hvb3Nlci5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWZpbGUtZXhwbG9yZXIuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1maWxlLXBhdGguanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pY29uLW9wdGlvbi5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24tcGljay5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLWljb24uanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1pbnRlZ2VyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbGFiZWwuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1saW5lLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tbWVudS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLW11dGFudHMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1wYW5lbC5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXNwbGl0dGVyLmpzIiwiLi4vcWlucGVsLWNwcy9idWlsZC9xaW4tc3RhY2suanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi1zdHJpbmcuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10YWJsZS5qcyIsIi4uL3FpbnBlbC1jcHMvYnVpbGQvcWluLXRhYnMuanMiLCIuLi9xaW5wZWwtY3BzL2J1aWxkL3Fpbi10b29scy5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvYWxsLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYXJtLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tYm9keS5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLWZvb3QuanMiLCIuLi9xaW5wZWwtcmVzL2J1aWxkL3Fpbi1oZWFkLmpzIiwiLi4vcWlucGVsLXJlcy9idWlsZC9xaW4tc2tpbi5qcyIsIi4uL3FpbnBlbC1yZXMvYnVpbGQvcWluLXNvdWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9NQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2TEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1S0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbEZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNscUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRNb2R1bGVzID0gZXhwb3J0cy5BZFNjb3BlID0gZXhwb3J0cy5BZE9wdGlvbnMgPSB2b2lkIDA7XHJcbnZhciBBZE9wdGlvbnM7XHJcbihmdW5jdGlvbiAoQWRPcHRpb25zKSB7XHJcbiAgICBBZE9wdGlvbnNbXCJNT0RVTEVcIl0gPSBcIm1vZHVsZVwiO1xyXG4gICAgQWRPcHRpb25zW1wiU0NPUEVTXCJdID0gXCJzY29wZXNcIjtcclxuICAgIEFkT3B0aW9uc1tcIkZJTFRFUlNcIl0gPSBcImZpbHRlcnNcIjtcclxufSkoQWRPcHRpb25zID0gZXhwb3J0cy5BZE9wdGlvbnMgfHwgKGV4cG9ydHMuQWRPcHRpb25zID0ge30pKTtcclxudmFyIEFkU2NvcGU7XHJcbihmdW5jdGlvbiAoQWRTY29wZSkge1xyXG4gICAgQWRTY29wZVtcIkFMTFwiXSA9IFwiYWxsXCI7XHJcbiAgICBBZFNjb3BlW1wiSU5TRVJUXCJdID0gXCJpbnNlcnRcIjtcclxuICAgIEFkU2NvcGVbXCJTRUFSQ0hcIl0gPSBcInNlYXJjaFwiO1xyXG4gICAgQWRTY29wZVtcIk1VVEFURVwiXSA9IFwibXV0YXRlXCI7XHJcbiAgICBBZFNjb3BlW1wiREVMRVRFXCJdID0gXCJkZWxldGVcIjtcclxufSkoQWRTY29wZSA9IGV4cG9ydHMuQWRTY29wZSB8fCAoZXhwb3J0cy5BZFNjb3BlID0ge30pKTtcclxudmFyIEFkTW9kdWxlcztcclxuKGZ1bmN0aW9uIChBZE1vZHVsZXMpIHtcclxuICAgIEFkTW9kdWxlc1tcIkJVU0lORVNTXCJdID0gXCJidXNpbmVzc1wiO1xyXG4gICAgQWRNb2R1bGVzW1wiUkVHSU9OXCJdID0gXCJyZWdpb25cIjtcclxuICAgIEFkTW9kdWxlc1tcIk5BVElPTlwiXSA9IFwibmF0aW9uXCI7XHJcbiAgICBBZE1vZHVsZXNbXCJTVEFURVwiXSA9IFwic3RhdGVcIjtcclxuICAgIEFkTW9kdWxlc1tcIkNJVFlcIl0gPSBcImNpdHlcIjtcclxuICAgIEFkTW9kdWxlc1tcIkRJU1RSSUNUXCJdID0gXCJkaXN0cmljdFwiO1xyXG4gICAgQWRNb2R1bGVzW1wiUEVPUExFXCJdID0gXCJwZW9wbGVcIjtcclxuICAgIEFkTW9kdWxlc1tcIlBFT1BMRV9HUk9VUFwiXSA9IFwicGVvcGxlX2dyb3VwXCI7XHJcbiAgICBBZE1vZHVsZXNbXCJQRU9QTEVfU1VCR1JPVVBcIl0gPSBcInBlb3BsZV9zdWJncm91cFwiO1xyXG59KShBZE1vZHVsZXMgPSBleHBvcnRzLkFkTW9kdWxlcyB8fCAoZXhwb3J0cy5BZE1vZHVsZXMgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1jb25zdHMuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZEV4cGVjdCA9IHZvaWQgMDtcclxuY2xhc3MgQWRFeHBlY3Qge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMuX3Njb3BlcyA9IG9wdGlvbnMuc2NvcGVzO1xyXG4gICAgICAgIHRoaXMuX2ZpbHRlcnMgPSBvcHRpb25zLmZpbHRlcnM7XHJcbiAgICAgICAgdGhpcy5fd2FpdGVycyA9IG9wdGlvbnMud2FpdGVycztcclxuICAgIH1cclxuICAgIGdldCBzY29wZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Njb3BlcztcclxuICAgIH1cclxuICAgIGdldCBmaWx0ZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9maWx0ZXJzO1xyXG4gICAgfVxyXG4gICAgZ2V0IHdhaXRlcnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3dhaXRlcnM7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZEV4cGVjdCA9IEFkRXhwZWN0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1leHBlY3QuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZEZpZWxkID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRGaWVsZCB7XHJcbiAgICBjb25zdHJ1Y3RvcihuZXdlcikge1xyXG4gICAgICAgIHRoaXMuX3RpdGxlID0gbmV3ZXIudGl0bGU7XHJcbiAgICAgICAgdGhpcy5fbmFtZSA9IG5ld2VyLm5hbWU7XHJcbiAgICAgICAgdGhpcy5fa2luZCA9IG5ld2VyLmtpbmQ7XHJcbiAgICAgICAgdGhpcy5fb3B0aW9ucyA9IG5ld2VyLm9wdGlvbnM7XHJcbiAgICAgICAgdGhpcy5fa2V5ID0gbmV3ZXIua2V5ID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG4gICAgbmV3RWRpdCgpIHtcclxuICAgICAgICByZXR1cm4gcWlucGVsX2Nwc18xLlFpbk11dGFudHNBcm0ubmV3RWRpdCh0aGlzLl9raW5kLCB0aGlzLl9vcHRpb25zKTtcclxuICAgIH1cclxuICAgIGdldCB0aXRsZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XHJcbiAgICB9XHJcbiAgICBnZXQgbmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmFtZTtcclxuICAgIH1cclxuICAgIGdldCBraW5kKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9raW5kO1xyXG4gICAgfVxyXG4gICAgZ2V0IG9wdGlvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wdGlvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQga2V5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9rZXk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZEZpZWxkID0gQWRGaWVsZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtZmllbGQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZEZpbHRlclVuaW9uID0gZXhwb3J0cy5BZEZpbHRlck1vZGUgPSBleHBvcnRzLkFkRmlsdGVySXRlbSA9IGV4cG9ydHMuQWRGaWx0ZXJzID0gdm9pZCAwO1xyXG5jbGFzcyBBZEZpbHRlcnMge1xyXG4gICAgY29uc3RydWN0b3IoaXRlbXMpIHtcclxuICAgICAgICB0aGlzLl9pdGVtcyA9IGl0ZW1zO1xyXG4gICAgfVxyXG4gICAgZ2V0IGl0ZW1zKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pdGVtcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkRmlsdGVycyA9IEFkRmlsdGVycztcclxuY2xhc3MgQWRGaWx0ZXJJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUsIG1vZGUsIHZhbHVlLCB1bmlvbikge1xyXG4gICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgIHRoaXMuX21vZGUgPSBtb2RlO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5fdW5pb24gPSB1bmlvbjtcclxuICAgIH1cclxuICAgIGdldCBuYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xyXG4gICAgfVxyXG4gICAgZ2V0IG1vZGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGU7XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHVuaW9uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl91bmlvbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkRmlsdGVySXRlbSA9IEFkRmlsdGVySXRlbTtcclxudmFyIEFkRmlsdGVyTW9kZTtcclxuKGZ1bmN0aW9uIChBZEZpbHRlck1vZGUpIHtcclxuICAgIEFkRmlsdGVyTW9kZVtcIkVRVUFMU1wiXSA9IFwiZXF1YWxzXCI7XHJcbiAgICBBZEZpbHRlck1vZGVbXCJESUZGRVJFTlRcIl0gPSBcImRpZmZlcmVudFwiO1xyXG4gICAgQWRGaWx0ZXJNb2RlW1wiQklHR0VSXCJdID0gXCJiaWdnZXJcIjtcclxuICAgIEFkRmlsdGVyTW9kZVtcIkxFU1NFUlwiXSA9IFwibGVzc2VyXCI7XHJcbiAgICBBZEZpbHRlck1vZGVbXCJCSUdHRVJfT1JfRVFVQUxTXCJdID0gXCJiaWdnZXJfb3JfZXF1YWxzXCI7XHJcbiAgICBBZEZpbHRlck1vZGVbXCJMRVNTRVJfT1JfRVFVQUxTXCJdID0gXCJsZXNzZXJfb3JfZXF1YWxzXCI7XHJcbn0pKEFkRmlsdGVyTW9kZSA9IGV4cG9ydHMuQWRGaWx0ZXJNb2RlIHx8IChleHBvcnRzLkFkRmlsdGVyTW9kZSA9IHt9KSk7XHJcbnZhciBBZEZpbHRlclVuaW9uO1xyXG4oZnVuY3Rpb24gKEFkRmlsdGVyVW5pb24pIHtcclxuICAgIEFkRmlsdGVyVW5pb25bXCJPUlwiXSA9IFwib3JcIjtcclxuICAgIEFkRmlsdGVyVW5pb25bXCJBTkRcIl0gPSBcImFuZFwiO1xyXG59KShBZEZpbHRlclVuaW9uID0gZXhwb3J0cy5BZEZpbHRlclVuaW9uIHx8IChleHBvcnRzLkFkRmlsdGVyVW5pb24gPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1maWx0ZXJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRNb2RlbCA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkTW9kZWwge1xyXG4gICAgY29uc3RydWN0b3IodGFibGUpIHtcclxuICAgICAgICB0aGlzLl90YWJsZSA9IHRhYmxlO1xyXG4gICAgICAgIHRoaXMuX2ZpZWxkcyA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkRmllbGQoZmllbGQpIHtcclxuICAgICAgICB0aGlzLl9maWVsZHMucHVzaChmaWVsZCk7XHJcbiAgICB9XHJcbiAgICBpbnNlcnQodmFsdWVzKSB7XHJcbiAgICAgICAgcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpO1xyXG4gICAgfVxyXG4gICAgc2VhcmNoKGZpbHRlcnMpIHtcclxuICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCk7XHJcbiAgICB9XHJcbiAgICB1cGRhdGUodmFsdWVzLCBmaWx0ZXJzKSB7XHJcbiAgICAgICAgcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpO1xyXG4gICAgfVxyXG4gICAgZGVsZXRlKGZpbHRlcnMpIHtcclxuICAgICAgICBxaW5wZWxfY3BzXzEuUWluVG9vbHMucWlucGVsKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZE1vZGVsID0gQWRNb2RlbDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtbW9kZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ0JhciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNvbnN0IGFkX3JlZ2lzdGVyXzEgPSByZXF1aXJlKFwiLi9hZC1yZWdpc3RlclwiKTtcclxuY2xhc3MgQWRSZWdCYXIgZXh0ZW5kcyBxaW5wZWxfY3BzXzEuUWluTGluZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3Rlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTW9kZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvblBpY2soKTtcclxuICAgICAgICB0aGlzLl9xaW5JbnNlcnQgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkljb24ocWlucGVsX2Nwc18xLlFpbkFzc2V0LkZhY2VBZGQpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluSWNvbihxaW5wZWxfY3BzXzEuUWluQXNzZXQuRmFjZVNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5fcWluTXV0YXRlID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5JY29uKHFpbnBlbF9jcHNfMS5RaW5Bc3NldC5GYWNlUGVuY2lsKTtcclxuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcclxuICAgICAgICB0aGlzLl9xaW5Nb2RlLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fcWluTW9kZS5hZGRJY29uKHRoaXMuX3Fpbkluc2VydCk7XHJcbiAgICAgICAgdGhpcy5fcWluTW9kZS5hZGRJY29uKHRoaXMuX3FpblNlYXJjaCk7XHJcbiAgICAgICAgdGhpcy5fcWluTW9kZS5hZGRJY29uKHRoaXMuX3Fpbk11dGF0ZSk7XHJcbiAgICAgICAgdGhpcy5fcWluSW5zZXJ0LmFkZEFjdGlvbigoZXYpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVnLnRyeUNoYW5nZU1vZGUoYWRfcmVnaXN0ZXJfMS5BZFJlZ01vZGUuSU5TRVJUKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaC5hZGRBY3Rpb24oKGV2KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldi5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3JlZy50cnlDaGFuZ2VNb2RlKGFkX3JlZ2lzdGVyXzEuQWRSZWdNb2RlLlNFQVJDSCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5NdXRhdGUuYWRkQWN0aW9uKChldikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXYuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZWcudHJ5Q2hhbmdlTW9kZShhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5NVVRBVEUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBzZXRNb2RlKG1vZGUpIHtcclxuICAgICAgICB0aGlzLl9xaW5Nb2RlLnNldERhdGEobnVsbCk7XHJcbiAgICAgICAgaWYgKG1vZGUpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChtb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIGFkX3JlZ2lzdGVyXzEuQWRSZWdNb2RlLklOU0VSVDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9xaW5Nb2RlLnNldERhdGEodGhpcy5fcWluSW5zZXJ0LmFzc2V0KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgYWRfcmVnaXN0ZXJfMS5BZFJlZ01vZGUuU0VBUkNIOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3Fpbk1vZGUuc2V0RGF0YSh0aGlzLl9xaW5TZWFyY2guYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBhZF9yZWdpc3Rlcl8xLkFkUmVnTW9kZS5NVVRBVEU6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcWluTW9kZS5zZXREYXRhKHRoaXMuX3Fpbk11dGF0ZS5hc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFJlZ0JhciA9IEFkUmVnQmFyO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctYmFyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdFZGl0b3IgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jbGFzcyBBZFJlZ0VkaXRvciBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3Rlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fdGFicyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fY29sdW1uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9saW5lID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcclxuICAgIH1cclxuICAgIGFkZFRhYih0aXRsZSkge1xyXG4gICAgICAgIGlmICh0aGlzLl90YWJzID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdGFicyA9IG5ldyBxaW5wZWxfY3BzXzEuUWluVGFicygpO1xyXG4gICAgICAgICAgICB0aGlzLl90YWJzLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2NvbHVtbiA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5fdGFicy5hZGRUYWIoeyB0aXRsZSwgdmlld2VyOiB0aGlzLl9jb2x1bW4gfSk7XHJcbiAgICAgICAgdGhpcy5fbGluZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX2xpbmUuaW5zdGFsbCh0aGlzLl9jb2x1bW4pO1xyXG4gICAgfVxyXG4gICAgYWRkTGluZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY29sdW1uID09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5fY29sdW1uID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4oKTtcclxuICAgICAgICAgICAgdGhpcy5fY29sdW1uLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xpbmUgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9saW5lLmluc3RhbGwodGhpcy5fY29sdW1uKTtcclxuICAgIH1cclxuICAgIGFkZEZpZWxkKGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xpbmUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExpbmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgZWRpdG9yID0gcWlucGVsX2Nwc18xLlFpbk11dGFudHNBcm0ubmV3RWRpdChmaWVsZC5raW5kLCBmaWVsZC5vcHRpb25zKTtcclxuICAgICAgICBpZiAoZmllbGQudGl0bGUpIHtcclxuICAgICAgICAgICAgY29uc3Qgdmlld2VyID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5GaWVsZChmaWVsZC50aXRsZSwgZWRpdG9yKTtcclxuICAgICAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcy5fbGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBlZGl0b3IuaW5zdGFsbCh0aGlzLl9saW5lKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFJlZ0VkaXRvciA9IEFkUmVnRWRpdG9yO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWctZWRpdG9yLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdTZWFyY2ggPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9jcHNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtY3BzXCIpO1xyXG5jbGFzcyBBZFJlZ1NlYXJjaCBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3Rlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fbGluZXMgPSBuZXcgcWlucGVsX2Nwc18xLlFpbkNvbHVtbigpO1xyXG4gICAgICAgIHRoaXMuX2NsYXVzZXMgPSBuZXcgQXJyYXkoKTtcclxuICAgICAgICB0aGlzLl9yZWcgPSByZWdpc3RlcjtcclxuICAgICAgICB0aGlzLl9saW5lcy5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGZpcnN0ID0gbmV3IFNlYXJjaENsYXVzZSgpO1xyXG4gICAgICAgIHRoaXMuX2NsYXVzZXMucHVzaChmaXJzdCk7XHJcbiAgICAgICAgZmlyc3QuaW5zdGFsbCh0aGlzLl9saW5lcyk7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIHRoaXMuX2NsYXVzZXMuZm9yRWFjaChjbGF1c2UgPT4ge1xyXG4gICAgICAgICAgICBjbGF1c2UuZmllbGRzLmFkZEl0ZW0oeyB0aXRsZTogZmllbGQudGl0bGUsIHZhbHVlOiBmaWVsZC5uYW1lIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuQWRSZWdTZWFyY2ggPSBBZFJlZ1NlYXJjaDtcclxuY2xhc3MgU2VhcmNoQ2xhdXNlIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkxpbmUge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLm5lZ2F0ZSA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQm9vbGVhbigpO1xyXG4gICAgICAgIHRoaXMuZmllbGRzID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5Db21ibygpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9ucyA9IG5ldyBTZWFyY2hDb25kaXRpb24oKTtcclxuICAgICAgICB0aGlzLnZhbHVlZCA9IG5ldyBxaW5wZWxfY3BzXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5uZWdhdGUuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZpZWxkcy5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9ucy5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMudmFsdWVkLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgU2VhcmNoQ29uZGl0aW9uIGV4dGVuZHMgcWlucGVsX2Nwc18xLlFpbkNvbWJvIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiPVwiLCB2YWx1ZTogXCJFUVVBTFNcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCI+XCIsIHZhbHVlOiBcIkJJR0dFUlwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIjxcIiwgdmFsdWU6IFwiTEVTU0VSXCIgfSk7XHJcbiAgICAgICAgdGhpcy5hZGRJdGVtKHsgdGl0bGU6IFwiPj1cIiwgdmFsdWU6IFwiQklHR0VSX0VRVUFMU1wiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIjw9XCIsIHZhbHVlOiBcIkxFU1NFUl9FUVVBTFNcIiB9KTtcclxuICAgICAgICB0aGlzLmFkZEl0ZW0oeyB0aXRsZTogXCIkJVwiLCB2YWx1ZTogXCJTVEFSVFNfV0lUSFwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIiUkXCIsIHZhbHVlOiBcIkVORFNfV0lUSFwiIH0pO1xyXG4gICAgICAgIHRoaXMuYWRkSXRlbSh7IHRpdGxlOiBcIiUkJVwiLCB2YWx1ZTogXCJDT05UQUlOU1wiIH0pO1xyXG4gICAgfVxyXG59XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZy1zZWFyY2guanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ1RhYmxlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWRSZWdUYWJsZSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5UYWJsZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihyZWdpc3Rlcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcmVnID0gcmVnaXN0ZXI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZFJlZ1RhYmxlID0gQWRSZWdUYWJsZTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YWQtcmVnLXRhYmxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ2lzdGVyID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgYWRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2FkLW1vZGVsXCIpO1xyXG5jb25zdCBhZF9yZWdfYmFyXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctYmFyXCIpO1xyXG5jb25zdCBhZF9yZWdfZWRpdG9yXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctZWRpdG9yXCIpO1xyXG5jb25zdCBhZF9yZWdfc2VhcmNoXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctc2VhcmNoXCIpO1xyXG5jb25zdCBhZF9yZWdfdGFibGVfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy10YWJsZVwiKTtcclxuY2xhc3MgQWRSZWdpc3RlciBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3IoZXhwZWN0LCB0YWJsZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fYmFyID0gbmV3IGFkX3JlZ19iYXJfMS5BZFJlZ0Jhcih0aGlzKTtcclxuICAgICAgICB0aGlzLl9ib2R5ID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5TdGFjaygpO1xyXG4gICAgICAgIHRoaXMuX2VkaXRvciA9IG5ldyBhZF9yZWdfZWRpdG9yXzEuQWRSZWdFZGl0b3IodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fc2VhcmNoID0gbmV3IGFkX3JlZ19zZWFyY2hfMS5BZFJlZ1NlYXJjaCh0aGlzKTtcclxuICAgICAgICB0aGlzLl90YWJsZSA9IG5ldyBhZF9yZWdfdGFibGVfMS5BZFJlZ1RhYmxlKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2V4cGVjdCA9IGV4cGVjdDtcclxuICAgICAgICB0aGlzLl9tb2RlbCA9IG5ldyBhZF9tb2RlbF8xLkFkTW9kZWwodGFibGUpO1xyXG4gICAgICAgIHRoaXMuX2Jhci5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB0aGlzLl9ib2R5LnN0YWNrKHRoaXMuX2VkaXRvcik7XHJcbiAgICAgICAgdGhpcy5fYm9keS5zdGFjayh0aGlzLl9zZWFyY2gpO1xyXG4gICAgICAgIHRoaXMuX3RhYmxlLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXQgZXhwZWN0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9leHBlY3Q7XHJcbiAgICB9XHJcbiAgICBnZXQgbW9kZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX21vZGVsO1xyXG4gICAgfVxyXG4gICAgYWRkVGFiKHRpdGxlKSB7XHJcbiAgICAgICAgdGhpcy5fZWRpdG9yLmFkZFRhYih0aXRsZSk7XHJcbiAgICB9XHJcbiAgICBhZGRMaW5lKCkge1xyXG4gICAgICAgIHRoaXMuX2VkaXRvci5hZGRMaW5lKCk7XHJcbiAgICB9XHJcbiAgICBhZGRGaWVsZChmaWVsZCkge1xyXG4gICAgICAgIHRoaXMuX21vZGVsLmFkZEZpZWxkKGZpZWxkKTtcclxuICAgICAgICB0aGlzLl9lZGl0b3IuYWRkRmllbGQoZmllbGQpO1xyXG4gICAgICAgIHRoaXMuX3NlYXJjaC5hZGRGaWVsZChmaWVsZCk7XHJcbiAgICAgICAgbGV0IGhlYWRzID0gdGhpcy5fdGFibGUuYWRkSGVhZChmaWVsZC50aXRsZSk7XHJcbiAgICB9XHJcbiAgICB0cnlDaGFuZ2VNb2RlKG1vZGUpIHtcclxuICAgICAgICBpZiAobW9kZSA9PT0gQWRSZWdNb2RlLlNFQVJDSCkge1xyXG4gICAgICAgICAgICB0aGlzLl9ib2R5LnNob3codGhpcy5fc2VhcmNoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JvZHkuc2hvdyh0aGlzLl9lZGl0b3IpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9iYXIuc2V0TW9kZShtb2RlKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnaXN0ZXIgPSBBZFJlZ2lzdGVyO1xyXG52YXIgQWRSZWdNb2RlO1xyXG4oZnVuY3Rpb24gKEFkUmVnTW9kZSkge1xyXG4gICAgQWRSZWdNb2RlW1wiSU5TRVJUXCJdID0gXCJpbnNlcnRcIjtcclxuICAgIEFkUmVnTW9kZVtcIlNFQVJDSFwiXSA9IFwic2VhcmNoXCI7XHJcbiAgICBBZFJlZ01vZGVbXCJNVVRBVEVcIl0gPSBcIm11dGF0ZVwiO1xyXG59KShBZFJlZ01vZGUgPSBleHBvcnRzLkFkUmVnTW9kZSB8fCAoZXhwb3J0cy5BZFJlZ01vZGUgPSB7fSkpO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1yZWdpc3Rlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkVG9vbHMgPSB2b2lkIDA7XHJcbmNvbnN0IGFkX2NvbnN0c18xID0gcmVxdWlyZShcIi4vYWQtY29uc3RzXCIpO1xyXG5mdW5jdGlvbiBuZXdBZE9wdGlvbihtb2R1bGUsIHNjb3BlcywgZmlsdGVycykge1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5NT0RVTEVdID0gbW9kdWxlO1xyXG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5TQ09QRVNdID0gc2NvcGVzO1xyXG4gICAgcmVzdWx0W2FkX2NvbnN0c18xLkFkT3B0aW9ucy5GSUxURVJTXSA9IGZpbHRlcnM7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmV4cG9ydHMuQWRUb29scyA9IHtcclxuICAgIG5ld0FkT3B0aW9uXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXRvb2xzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuQWRUb29scyA9IGV4cG9ydHMuQWRSZWdNb2RlID0gZXhwb3J0cy5BZFJlZ2lzdGVyID0gZXhwb3J0cy5BZFJlZ1RhYmxlID0gZXhwb3J0cy5BZFJlZ1NlYXJjaCA9IGV4cG9ydHMuQWRSZWdFZGl0b3IgPSBleHBvcnRzLkFkUmVnQmFyID0gZXhwb3J0cy5BZE1vZGVsID0gZXhwb3J0cy5BZEZpbHRlclVuaW9uID0gZXhwb3J0cy5BZEZpbHRlck1vZGUgPSBleHBvcnRzLkFkRmlsdGVySXRlbSA9IGV4cG9ydHMuQWRGaWx0ZXJzID0gZXhwb3J0cy5BZEZpZWxkID0gZXhwb3J0cy5BZEV4cGVjdCA9IGV4cG9ydHMuQWRNb2R1bGVzID0gZXhwb3J0cy5BZFNjb3BlID0gZXhwb3J0cy5BZE9wdGlvbnMgPSB2b2lkIDA7XHJcbnZhciBhZF9jb25zdHNfMSA9IHJlcXVpcmUoXCIuL2FkLWNvbnN0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRPcHRpb25zXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9jb25zdHNfMS5BZE9wdGlvbnM7IH0gfSk7XHJcbnZhciBhZF9jb25zdHNfMiA9IHJlcXVpcmUoXCIuL2FkLWNvbnN0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRTY29wZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfY29uc3RzXzIuQWRTY29wZTsgfSB9KTtcclxudmFyIGFkX2NvbnN0c18zID0gcmVxdWlyZShcIi4vYWQtY29uc3RzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZHVsZXNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2NvbnN0c18zLkFkTW9kdWxlczsgfSB9KTtcclxudmFyIGFkX2V4cGVjdF8xID0gcmVxdWlyZShcIi4vYWQtZXhwZWN0XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZEV4cGVjdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZXhwZWN0XzEuQWRFeHBlY3Q7IH0gfSk7XHJcbnZhciBhZF9maWVsZF8xID0gcmVxdWlyZShcIi4vYWQtZmllbGRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmllbGRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpZWxkXzEuQWRGaWVsZDsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfMSA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc18xLkFkRmlsdGVyczsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfMiA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVySXRlbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc18yLkFkRmlsdGVySXRlbTsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfMyA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyTW9kZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfZmlsdGVyc18zLkFkRmlsdGVyTW9kZTsgfSB9KTtcclxudmFyIGFkX2ZpbHRlcnNfNCA9IHJlcXVpcmUoXCIuL2FkLWZpbHRlcnNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkRmlsdGVyVW5pb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX2ZpbHRlcnNfNC5BZEZpbHRlclVuaW9uOyB9IH0pO1xyXG52YXIgYWRfbW9kZWxfMSA9IHJlcXVpcmUoXCIuL2FkLW1vZGVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZE1vZGVsXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9tb2RlbF8xLkFkTW9kZWw7IH0gfSk7XHJcbnZhciBhZF9yZWdfYmFyXzEgPSByZXF1aXJlKFwiLi9hZC1yZWctYmFyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ0JhclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX2Jhcl8xLkFkUmVnQmFyOyB9IH0pO1xyXG52YXIgYWRfcmVnX2VkaXRvcl8xID0gcmVxdWlyZShcIi4vYWQtcmVnLWVkaXRvclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdFZGl0b3JcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ19lZGl0b3JfMS5BZFJlZ0VkaXRvcjsgfSB9KTtcclxudmFyIGFkX3JlZ19zZWFyY2hfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy1zZWFyY2hcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkFkUmVnU2VhcmNoXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF9yZWdfc2VhcmNoXzEuQWRSZWdTZWFyY2g7IH0gfSk7XHJcbnZhciBhZF9yZWdfdGFibGVfMSA9IHJlcXVpcmUoXCIuL2FkLXJlZy10YWJsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdUYWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnX3RhYmxlXzEuQWRSZWdUYWJsZTsgfSB9KTtcclxudmFyIGFkX3JlZ2lzdGVyXzEgPSByZXF1aXJlKFwiLi9hZC1yZWdpc3RlclwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiQWRSZWdpc3RlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gYWRfcmVnaXN0ZXJfMS5BZFJlZ2lzdGVyOyB9IH0pO1xyXG52YXIgYWRfcmVnaXN0ZXJfMiA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lzdGVyXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFJlZ01vZGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFkX3JlZ2lzdGVyXzIuQWRSZWdNb2RlOyB9IH0pO1xyXG52YXIgYWRfdG9vbHNfMSA9IHJlcXVpcmUoXCIuL2FkLXRvb2xzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJBZFRvb2xzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBhZF90b29sc18xLkFkVG9vbHM7IH0gfSk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFsbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLkFkTmF0aW9uID0gdm9pZCAwO1xyXG5jb25zdCBhZGNvbW1vbl8xID0gcmVxdWlyZShcImFkY29tbW9uXCIpO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY2xhc3MgQWROYXRpb24gZXh0ZW5kcyBhZGNvbW1vbl8xLkFkUmVnaXN0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoZXhwZWN0KSB7XHJcbiAgICAgICAgc3VwZXIoZXhwZWN0LCBcInBhaXNlc1wiKTtcclxuICAgICAgICB0aGlzLmFkZEZpZWxkKG5ldyBhZGNvbW1vbl8xLkFkRmllbGQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImNvZGlnb1wiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJDw7NkaWdvXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA0LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgICAgICB0aGlzLmFkZEZpZWxkKG5ldyBhZGNvbW1vbl8xLkFkRmllbGQoe1xyXG4gICAgICAgICAgICBuYW1lOiBcImF0aXZvXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkF0aXZvXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLkJPT0xFQU4sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwibm9tZVwiLFxyXG4gICAgICAgICAgICB0aXRsZTogXCJOb21lXCIsXHJcbiAgICAgICAgICAgIGtpbmQ6IHFpbnBlbF9jcHNfMS5RaW5NdXRhbnRzLlNUUklORyxcclxuICAgICAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgICAgICAgbWF4TGVuZ3RoOiA2MCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICB9KSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5BZE5hdGlvbiA9IEFkTmF0aW9uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hZC1uYXRpb24uanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5BZFJlZ2lvbiA9IHZvaWQgMDtcclxuY29uc3QgYWRjb21tb25fMSA9IHJlcXVpcmUoXCJhZGNvbW1vblwiKTtcclxuY29uc3QgcWlucGVsX2Nwc18xID0gcmVxdWlyZShcInFpbnBlbC1jcHNcIik7XHJcbmNsYXNzIEFkUmVnaW9uIGV4dGVuZHMgYWRjb21tb25fMS5BZFJlZ2lzdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKGV4cGVjdCkge1xyXG4gICAgICAgIHN1cGVyKGV4cGVjdCwgXCJyZWdpb2VzXCIpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiY29kaWdvXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkPDs2RpZ29cIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDQsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfSkpO1xyXG4gICAgICAgIHRoaXMuYWRkRmllbGQobmV3IGFkY29tbW9uXzEuQWRGaWVsZCh7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiYXRpdm9cIixcclxuICAgICAgICAgICAgdGl0bGU6IFwiQXRpdm9cIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuQk9PTEVBTixcclxuICAgICAgICB9KSk7XHJcbiAgICAgICAgdGhpcy5hZGRGaWVsZChuZXcgYWRjb21tb25fMS5BZEZpZWxkKHtcclxuICAgICAgICAgICAgbmFtZTogXCJub21lXCIsXHJcbiAgICAgICAgICAgIHRpdGxlOiBcIk5vbWVcIixcclxuICAgICAgICAgICAga2luZDogcWlucGVsX2Nwc18xLlFpbk11dGFudHMuU1RSSU5HLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICAgICAgICBtYXhMZW5ndGg6IDYwLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLkFkUmVnaW9uID0gQWRSZWdpb247XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFkLXJlZ2lvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5jb25zdCBhZGNvbW1vbl8xID0gcmVxdWlyZShcImFkY29tbW9uXCIpO1xyXG5jb25zdCBxaW5wZWxfY3BzXzEgPSByZXF1aXJlKFwicWlucGVsLWNwc1wiKTtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IGFkX25hdGlvbl8xID0gcmVxdWlyZShcIi4vYWQtbmF0aW9uXCIpO1xyXG5jb25zdCBhZF9yZWdpb25fMSA9IHJlcXVpcmUoXCIuL2FkLXJlZ2lvblwiKTtcclxuY2xhc3MgTWVudSBleHRlbmRzIHFpbnBlbF9jcHNfMS5RaW5Db2x1bW4ge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnFpblJlZ2lvbiA9IG5ldyBxaW5wZWxfY3BzXzEuUWluQnV0dG9uKHsgbGFiZWw6IG5ldyBxaW5wZWxfY3BzXzEuUWluTGFiZWwoXCJSZWdpw6NvXCIpIH0pO1xyXG4gICAgICAgIHRoaXMucWluTmF0aW9uID0gbmV3IHFpbnBlbF9jcHNfMS5RaW5CdXR0b24oeyBsYWJlbDogbmV3IHFpbnBlbF9jcHNfMS5RaW5MYWJlbChcIlBhw61zXCIpIH0pO1xyXG4gICAgICAgIHRoaXMucWluUmVnaW9uLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5xaW5SZWdpb24uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5tYW5hZ2VyLm5ld0ZyYW1lKFwiUmVnacOjb1wiLCBcImFkcGVvcGxlXCIsIGFkY29tbW9uXzEuQWRUb29scy5uZXdBZE9wdGlvbihhZGNvbW1vbl8xLkFkTW9kdWxlcy5SRUdJT04sIFthZGNvbW1vbl8xLkFkU2NvcGUuQUxMXSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwuZnJhbWUuY2xvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMucWluTmF0aW9uLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgdGhpcy5xaW5OYXRpb24uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnFpbnBlbC5tYW5hZ2VyLm5ld0ZyYW1lKFwiUGHDrXNcIiwgXCJhZHBlb3BsZVwiLCBhZGNvbW1vbl8xLkFkVG9vbHMubmV3QWRPcHRpb24oYWRjb21tb25fMS5BZE1vZHVsZXMuTkFUSU9OLCBbYWRjb21tb25fMS5BZFNjb3BlLkFMTF0pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdGFydFVwKCkge1xyXG4gICAgY29uc3QgbW9kdWxlID0gcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpLmZyYW1lLmdldE9wdGlvbihhZGNvbW1vbl8xLkFkT3B0aW9ucy5NT0RVTEUpO1xyXG4gICAgY29uc3Qgc2NvcGVzID0gcWlucGVsX2Nwc18xLlFpblRvb2xzLnFpbnBlbCgpLmZyYW1lLmdldE9wdGlvbihhZGNvbW1vbl8xLkFkT3B0aW9ucy5TQ09QRVMpO1xyXG4gICAgY29uc3QgZmlsdGVycyA9IHFpbnBlbF9jcHNfMS5RaW5Ub29scy5xaW5wZWwoKS5mcmFtZS5nZXRPcHRpb24oYWRjb21tb25fMS5BZE9wdGlvbnMuRklMVEVSUyk7XHJcbiAgICBzd2l0Y2ggKG1vZHVsZSkge1xyXG4gICAgICAgIGNhc2UgYWRjb21tb25fMS5BZE1vZHVsZXMuUkVHSU9OOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IGFkX3JlZ2lvbl8xLkFkUmVnaW9uKG5ldyBhZGNvbW1vbl8xLkFkRXhwZWN0KHtcclxuICAgICAgICAgICAgICAgIHNjb3BlcyxcclxuICAgICAgICAgICAgICAgIGZpbHRlcnMsXHJcbiAgICAgICAgICAgICAgICB3YWl0ZXJzOiBuZXcgcWlucGVsX3Jlc18xLlFpbldhaXRlcnMoKS5hZGRXYWl0ZXIoKHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsKCkuZnJhbWUuc2VuZFdhaXRlcnMocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgY2FzZSBhZGNvbW1vbl8xLkFkTW9kdWxlcy5OQVRJT046XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgYWRfbmF0aW9uXzEuQWROYXRpb24obmV3IGFkY29tbW9uXzEuQWRFeHBlY3Qoe1xyXG4gICAgICAgICAgICAgICAgc2NvcGVzLFxyXG4gICAgICAgICAgICAgICAgZmlsdGVycyxcclxuICAgICAgICAgICAgICAgIHdhaXRlcnM6IG5ldyBxaW5wZWxfcmVzXzEuUWluV2FpdGVycygpLmFkZFdhaXRlcigocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xaW5wZWwoKS5mcmFtZS5zZW5kV2FpdGVycyhyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1lbnUoKTtcclxuICAgIH1cclxufVxyXG5zdGFydFVwKCkuc3R5bGUucHV0QXNCb2R5KCk7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVG9vbHMgPSBleHBvcnRzLlFpblRhYnMgPSBleHBvcnRzLlFpblRhYmxlID0gZXhwb3J0cy5RaW5TdHJpbmcgPSBleHBvcnRzLlFpblN0YWNrID0gZXhwb3J0cy5RaW5TcGxpdHRlciA9IGV4cG9ydHMuUWluUGFuZWwgPSBleHBvcnRzLlFpbk11dGFudHNBcm0gPSBleHBvcnRzLlFpbk11dGFudHMgPSBleHBvcnRzLlFpbk1lbnVJdGVtID0gZXhwb3J0cy5RaW5NZW51ID0gZXhwb3J0cy5RaW5MaW5lID0gZXhwb3J0cy5RaW5MYWJlbCA9IGV4cG9ydHMuUWluSW50ZWdlciA9IGV4cG9ydHMuUWluSWNvbiA9IGV4cG9ydHMuUWluSWNvblBpY2sgPSBleHBvcnRzLlFpbkljb25PcHRpb24gPSBleHBvcnRzLlFpbkZpbGVQYXRoID0gZXhwb3J0cy5RaW5GaWxlRXhwbG9yZXIgPSBleHBvcnRzLlFpbkZpbGVDaG9vc2VyID0gZXhwb3J0cy5RaW5GaWVsZCA9IGV4cG9ydHMuUWluRWRpdCA9IGV4cG9ydHMuUWluQ29tYm8gPSBleHBvcnRzLlFpbkNvbHVtbiA9IGV4cG9ydHMuUWluQnV0dG9uID0gZXhwb3J0cy5RaW5Cb29sZWFuID0gZXhwb3J0cy5RaW5CYXNlID0gZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSBleHBvcnRzLnFpblVybEFzc2V0ID0gZXhwb3J0cy5xaW5Bc3NldFVybCA9IGV4cG9ydHMuUWluQXNzZXQgPSB2b2lkIDA7XHJcbnZhciBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5Bc3NldFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Fzc2V0c18xLlFpbkFzc2V0OyB9IH0pO1xyXG52YXIgcWluX2Fzc2V0c18yID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwicWluQXNzZXRVcmxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9hc3NldHNfMi5xaW5Bc3NldFVybDsgfSB9KTtcclxudmFyIHFpbl9hc3NldHNfMyA9IHJlcXVpcmUoXCIuL3Fpbi1hc3NldHNcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcInFpblVybEFzc2V0XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXNzZXRzXzMucWluVXJsQXNzZXQ7IH0gfSk7XHJcbnZhciBxaW5fYmFzZV9zdHlsZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2Utc3R5bGVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJhc2VTdHlsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jhc2Vfc3R5bGVfMS5RaW5CYXNlU3R5bGU7IH0gfSk7XHJcbnZhciBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJhc2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9iYXNlXzEuUWluQmFzZTsgfSB9KTtcclxudmFyIHFpbl9ib29sZWFuXzEgPSByZXF1aXJlKFwiLi9xaW4tYm9vbGVhblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9vbGVhblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Jvb2xlYW5fMS5RaW5Cb29sZWFuOyB9IH0pO1xyXG52YXIgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQnV0dG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYnV0dG9uXzEuUWluQnV0dG9uOyB9IH0pO1xyXG52YXIgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQ29sdW1uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29sdW1uXzEuUWluQ29sdW1uOyB9IH0pO1xyXG52YXIgcWluX2NvbWJvXzEgPSByZXF1aXJlKFwiLi9xaW4tY29tYm9cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkNvbWJvXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fY29tYm9fMS5RaW5Db21ibzsgfSB9KTtcclxudmFyIHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRWRpdFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2VkaXRfMS5RaW5FZGl0OyB9IH0pO1xyXG52YXIgcWluX2ZpZWxkXzEgPSByZXF1aXJlKFwiLi9xaW4tZmllbGRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpZWxkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmllbGRfMS5RaW5GaWVsZDsgfSB9KTtcclxudmFyIHFpbl9maWxlX2Nob29zZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLWNob29zZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVDaG9vc2VyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fZmlsZV9jaG9vc2VyXzEuUWluRmlsZUNob29zZXI7IH0gfSk7XHJcbnZhciBxaW5fZmlsZV9leHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtZXhwbG9yZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVFeHBsb3JlclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ZpbGVfZXhwbG9yZXJfMS5RaW5GaWxlRXhwbG9yZXI7IH0gfSk7XHJcbnZhciBxaW5fZmlsZV9wYXRoXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1wYXRoXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlUGF0aFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ZpbGVfcGF0aF8xLlFpbkZpbGVQYXRoOyB9IH0pO1xyXG52YXIgcWluX2ljb25fb3B0aW9uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1vcHRpb25cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkljb25PcHRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pY29uX29wdGlvbl8xLlFpbkljb25PcHRpb247IH0gfSk7XHJcbnZhciBxaW5faWNvbl9waWNrXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvbi1waWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uUGlja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2ljb25fcGlja18xLlFpbkljb25QaWNrOyB9IH0pO1xyXG52YXIgcWluX2ljb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5JY29uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faWNvbl8xLlFpbkljb247IH0gfSk7XHJcbnZhciBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkludGVnZXJcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9pbnRlZ2VyXzEuUWluSW50ZWdlcjsgfSB9KTtcclxudmFyIHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5MYWJlbFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2xhYmVsXzEuUWluTGFiZWw7IH0gfSk7XHJcbnZhciBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkxpbmVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9saW5lXzEuUWluTGluZTsgfSB9KTtcclxudmFyIHFpbl9tZW51XzEgPSByZXF1aXJlKFwiLi9xaW4tbWVudVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTWVudVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX21lbnVfMS5RaW5NZW51OyB9IH0pO1xyXG52YXIgcWluX21lbnVfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tZW51XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NZW51SXRlbVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX21lbnVfMi5RaW5NZW51SXRlbTsgfSB9KTtcclxudmFyIHFpbl9tdXRhbnRzXzEgPSByZXF1aXJlKFwiLi9xaW4tbXV0YW50c1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluTXV0YW50c1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX211dGFudHNfMS5RaW5NdXRhbnRzOyB9IH0pO1xyXG52YXIgcWluX211dGFudHNfMiA9IHJlcXVpcmUoXCIuL3Fpbi1tdXRhbnRzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5NdXRhbnRzQXJtXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fbXV0YW50c18yLlFpbk11dGFudHNBcm07IH0gfSk7XHJcbnZhciBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUGFuZWxcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9wYW5lbF8xLlFpblBhbmVsOyB9IH0pO1xyXG52YXIgcWluX3NwbGl0dGVyXzEgPSByZXF1aXJlKFwiLi9xaW4tc3BsaXR0ZXJcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNwbGl0dGVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fc3BsaXR0ZXJfMS5RaW5TcGxpdHRlcjsgfSB9KTtcclxudmFyIHFpbl9zdGFja18xID0gcmVxdWlyZShcIi4vcWluLXN0YWNrXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdGFja1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3N0YWNrXzEuUWluU3RhY2s7IH0gfSk7XHJcbnZhciBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5TdHJpbmdcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9zdHJpbmdfMS5RaW5TdHJpbmc7IH0gfSk7XHJcbnZhciBxaW5fdGFibGVfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJsZVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVGFibGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90YWJsZV8xLlFpblRhYmxlOyB9IH0pO1xyXG52YXIgcWluX3RhYnNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10YWJzXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5UYWJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fdGFic18xLlFpblRhYnM7IH0gfSk7XHJcbnZhciBxaW5fdG9vbHNfMSA9IHJlcXVpcmUoXCIuL3Fpbi10b29sc1wiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluVG9vbHNcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl90b29sc18xLlFpblRvb2xzOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5xaW5VcmxBc3NldCA9IGV4cG9ydHMucWluQXNzZXRVcmwgPSBleHBvcnRzLlFpbkFzc2V0ID0gdm9pZCAwO1xyXG52YXIgUWluQXNzZXQ7XHJcbihmdW5jdGlvbiAoUWluQXNzZXQpIHtcclxuICAgIFFpbkFzc2V0W1wiQmFja1RpbnkwMVwiXSA9IFwiYmFjay10aW55LTAxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazBcIl0gPSBcImJhY2tncm91bmQtZGFyay0wLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEwXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTFcIl0gPSBcImJhY2tncm91bmQtZGFyay0xMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTEyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazEzXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTRcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxNVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMTdcIl0gPSBcImJhY2tncm91bmQtZGFyay0xNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsxOFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTE4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazE5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMlwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjBcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyMVwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTIxLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazIyXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjNcIl0gPSBcImJhY2tncm91bmQtZGFyay0yMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyNFwiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjZcIl0gPSBcImJhY2tncm91bmQtZGFyay0yNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmsyN1wiXSA9IFwiYmFja2dyb3VuZC1kYXJrLTI3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kRGFyazI4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMjgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmREYXJrMjlcIl0gPSBcImJhY2tncm91bmQtZGFyay0yOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmszXCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms0XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms1XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms2XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms3XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms4XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcms5XCJdID0gXCJiYWNrZ3JvdW5kLWRhcmstOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZERhcmtcIl0gPSBcImJhY2tncm91bmQtZGFyay5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0wLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDEzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTEzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxNFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MTVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQxN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0xNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MThcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMTgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDE5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTE5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIwXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyMVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjJcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDIzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTIzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyNFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjVcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQyN1wiXSA9IFwiYmFja2dyb3VuZC1saWdodC0yNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0MjhcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtMjgucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDI5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTI5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQzXCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDRcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0NVwiXSA9IFwiYmFja2dyb3VuZC1saWdodC01LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ2XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodDdcIl0gPSBcImJhY2tncm91bmQtbGlnaHQtNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZExpZ2h0OFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC04LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTGlnaHQ5XCJdID0gXCJiYWNrZ3JvdW5kLWxpZ2h0LTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmRMaWdodFwiXSA9IFwiYmFja2dyb3VuZC1saWdodC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTAucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWwxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0xLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTBcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTFcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTExLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTJcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEyLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTEzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTRcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTVcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE1LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE2LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTdcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE3LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMThcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE4LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMTlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTE5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsMlwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIwXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIxXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIyXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDIzXCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yMy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI1XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI2XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yNy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI4XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDI5XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC0yOS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDNcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw0XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC00LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsNVwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtNS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDZcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTYucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWw3XCJdID0gXCJiYWNrZ3JvdW5kLW5vcm1hbC03LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJCYWNrZ3JvdW5kTm9ybWFsOFwiXSA9IFwiYmFja2dyb3VuZC1ub3JtYWwtOC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiQmFja2dyb3VuZE5vcm1hbDlcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLTkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkJhY2tncm91bmROb3JtYWxcIl0gPSBcImJhY2tncm91bmQtbm9ybWFsLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckFwcHNcIl0gPSBcImV4cGxvcmVyLWFwcHMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyQ21kc1wiXSA9IFwiZXhwbG9yZXItY21kcy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJEaXJcIl0gPSBcImV4cGxvcmVyLWRpci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJFeGVjXCJdID0gXCJleHBsb3Jlci1leGVjLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3JlckZpbGVcIl0gPSBcImV4cGxvcmVyLWZpbGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVySW1hZ2VcIl0gPSBcImV4cGxvcmVyLWltYWdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJFeHBsb3Jlck1vdmllXCJdID0gXCJleHBsb3Jlci1tb3ZpZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRXhwbG9yZXJNdXNpY1wiXSA9IFwiZXhwbG9yZXItbXVzaWMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkV4cGxvcmVyWmlwcGVkXCJdID0gXCJleHBsb3Jlci16aXBwZWQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBZGRcIl0gPSBcImZhY2UtYWRkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXJyb3dEb3duXCJdID0gXCJmYWNlLWFycm93LWRvd24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd0xlZnRcIl0gPSBcImZhY2UtYXJyb3ctbGVmdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUFycm93UmlnaHRcIl0gPSBcImZhY2UtYXJyb3ctcmlnaHQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VBcnJvd1VwXCJdID0gXCJmYWNlLWFycm93LXVwLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQXR0YWNoXCJdID0gXCJmYWNlLWF0dGFjaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUJhZ1wiXSA9IFwiZmFjZS1iYWcucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCZWxsRGlzYWJsZVwiXSA9IFwiZmFjZS1iZWxsLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VCZWxsXCJdID0gXCJmYWNlLWJlbGwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYWxlbmRhclwiXSA9IFwiZmFjZS1jYWxlbmRhci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhbWVyYURpc2FibGVcIl0gPSBcImZhY2UtY2FtZXJhLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDYW1lcmFcIl0gPSBcImZhY2UtY2FtZXJhLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2FuY2VsXCJdID0gXCJmYWNlLWNhbmNlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNhcnRcIl0gPSBcImZhY2UtY2FydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNoZWNrXCJdID0gXCJmYWNlLWNoZWNrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2lyY2xlXCJdID0gXCJmYWNlLWNpcmNsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUNsb2NrXCJdID0gXCJmYWNlLWNsb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ2xvc2VcIl0gPSBcImZhY2UtY2xvc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VDb2dcIl0gPSBcImZhY2UtY29nLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29tcGFzc1wiXSA9IFwiZmFjZS1jb21wYXNzLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29uZmlybVwiXSA9IFwiZmFjZS1jb25maXJtLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29udGFjdFwiXSA9IFwiZmFjZS1jb250YWN0LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29udHJvbFwiXSA9IFwiZmFjZS1jb250cm9sLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlQ29weVwiXSA9IFwiZmFjZS1jb3B5LnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRGVsXCJdID0gXCJmYWNlLWRlbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZURvd25sb2FkXCJdID0gXCJmYWNlLWRvd25sb2FkLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW5sYXJnZVwiXSA9IFwiZmFjZS1lbmxhcmdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRW50ZXJcIl0gPSBcImZhY2UtZW50ZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFcmFzZVwiXSA9IFwiZmFjZS1lcmFzZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV4aXRcIl0gPSBcImZhY2UtZXhpdC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUV5ZURpc2FibGVcIl0gPSBcImZhY2UtZXllLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VFeWVcIl0gPSBcImZhY2UtZXllLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlsZVwiXSA9IFwiZmFjZS1maWxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlRmlsdGVyXCJdID0gXCJmYWNlLWZpbHRlci5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUZvbGRlclwiXSA9IFwiZmFjZS1mb2xkZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VHZWFyXCJdID0gXCJmYWNlLWdlYXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VIZWFydFwiXSA9IFwiZmFjZS1oZWFydC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUhvbWVcIl0gPSBcImZhY2UtaG9tZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZUltYWdlXCJdID0gXCJmYWNlLWltYWdlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTGFiZWxcIl0gPSBcImZhY2UtbGFiZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMaW5rXCJdID0gXCJmYWNlLWxpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VMb2NrXCJdID0gXCJmYWNlLWxvY2sucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYWlsXCJdID0gXCJmYWNlLW1haWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNYXBEaXNhYmxlXCJdID0gXCJmYWNlLW1hcC1kaXNhYmxlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWFwXCJdID0gXCJmYWNlLW1hcC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1lc3NhZ2VcIl0gPSBcImZhY2UtbWVzc2FnZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU1pY0Rpc2FibGVcIl0gPSBcImZhY2UtbWljLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNaWNcIl0gPSBcImZhY2UtbWljLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlTWludXNcIl0gPSBcImZhY2UtbWludXMucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VNb3ZpZVwiXSA9IFwiZmFjZS1tb3ZpZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZU5ld3NcIl0gPSBcImZhY2UtbmV3cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBhc3RlXCJdID0gXCJmYWNlLXBhc3RlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGVuY2lsXCJdID0gXCJmYWNlLXBlbmNpbC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBlcnNvblwiXSA9IFwiZmFjZS1wZXJzb24ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VQaG9uZURpc2FibGVcIl0gPSBcImZhY2UtcGhvbmUtZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBob25lXCJdID0gXCJmYWNlLXBob25lLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlUGluXCJdID0gXCJmYWNlLXBpbi5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVBsdXNcIl0gPSBcImZhY2UtcGx1cy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVJlZG9cIl0gPSBcImZhY2UtcmVkby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNhdmVcIl0gPSBcImZhY2Utc2F2ZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNlYXJjaFwiXSA9IFwiZmFjZS1zZWFyY2gucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZW5kXCJdID0gXCJmYWNlLXNlbmQucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTZXR0aW5nc1wiXSA9IFwiZmFjZS1zZXR0aW5ncy5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNoYXJlXCJdID0gXCJmYWNlLXNoYXJlLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlU2hpZWxkXCJdID0gXCJmYWNlLXNoaWVsZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVNocmlua1wiXSA9IFwiZmFjZS1zaHJpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVha2VyRGlzYWJsZVwiXSA9IFwiZmFjZS1zcGVha2VyLWRpc2FibGUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTcGVha2VyXCJdID0gXCJmYWNlLXNwZWFrZXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VTdGFyXCJdID0gXCJmYWNlLXN0YXIucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VUcmFzaFwiXSA9IFwiZmFjZS10cmFzaC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVuZG9cIl0gPSBcImZhY2UtdW5kby5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVVubGlua1wiXSA9IFwiZmFjZS11bmxpbmsucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZhY2VVbmxvY2tcIl0gPSBcImZhY2UtdW5sb2NrLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGYWNlVXBsb2FkXCJdID0gXCJmYWNlLXVwbG9hZC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlEaXNhYmxlXCJdID0gXCJmYWNlLXdpZmktZGlzYWJsZS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRmFjZVdpZmlcIl0gPSBcImZhY2Utd2lmaS5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiRnJhbWVDbG9zZVwiXSA9IFwiZnJhbWUtY2xvc2UucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWF4aW1pemVcIl0gPSBcImZyYW1lLW1heGltaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZU1lbnVcIl0gPSBcImZyYW1lLW1lbnUucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lTWluaW1pemVcIl0gPSBcImZyYW1lLW1pbmltaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZVJlc2l6ZVwiXSA9IFwiZnJhbWUtcmVzaXplLnBuZ1wiO1xyXG4gICAgUWluQXNzZXRbXCJGcmFtZVN0YXR1c0Vycm9yXCJdID0gXCJmcmFtZS1zdGF0dXMtZXJyb3IucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkZyYW1lU3RhdHVzSW5mb1wiXSA9IFwiZnJhbWUtc3RhdHVzLWluZm8ucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIkxvZ2luS2V5XCJdID0gXCJsb2dpbi1rZXkucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIk1lbnVEZXZ0b29sc1wiXSA9IFwibWVudS1kZXZ0b29scy5pY29cIjtcclxuICAgIFFpbkFzc2V0W1wiUWlucGVsNDhcIl0gPSBcInFpbnBlbC00OC5wbmdcIjtcclxuICAgIFFpbkFzc2V0W1wiUWlucGVsXCJdID0gXCJxaW5wZWwucG5nXCI7XHJcbiAgICBRaW5Bc3NldFtcIlNvdXJjZVNhbnNQcm9cIl0gPSBcInNvdXJjZS1zYW5zLXByby50dGZcIjtcclxuICAgIFFpbkFzc2V0W1wiU291cmNlU2VyaWZQcm9cIl0gPSBcInNvdXJjZS1zZXJpZi1wcm8udHRmXCI7XHJcbn0pKFFpbkFzc2V0ID0gZXhwb3J0cy5RaW5Bc3NldCB8fCAoZXhwb3J0cy5RaW5Bc3NldCA9IHt9KSk7XHJcbmZ1bmN0aW9uIHFpbkFzc2V0VXJsKGFzc2V0KSB7XHJcbiAgICByZXR1cm4gXCIvYXBwL3FpbnBlbC1hcHAvYXNzZXRzL1wiICsgYXNzZXQ7XHJcbn1cclxuZXhwb3J0cy5xaW5Bc3NldFVybCA9IHFpbkFzc2V0VXJsO1xyXG5mdW5jdGlvbiBxaW5VcmxBc3NldCh1cmwpIHtcclxuICAgIGNvbnN0IGFzc2V0ID0gdXJsLnN1YnN0cmluZyh1cmwubGFzdEluZGV4T2YoXCIvXCIpICsgMSk7XHJcbiAgICByZXR1cm4gYXNzZXQ7XHJcbn1cclxuZXhwb3J0cy5xaW5VcmxBc3NldCA9IHFpblVybEFzc2V0O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYXNzZXRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQmFzZVN0eWxlID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY2xhc3MgUWluQmFzZVN0eWxlIHtcclxuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgfVxyXG4gICAgcHV0QXNCb2R5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZUFzQm9keSh0aGlzLmVsZW1lbnQpO1xyXG4gICAgfVxyXG4gICAgZGVsQXNCb2R5KCkge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcclxuICAgIH1cclxuICAgIHB1dEFzV2hvbGUoKSB7XHJcbiAgICAgICAgdGhpcy5wdXRBc1Bvc2l0aW9uQWJzb2x1dGUoKTtcclxuICAgICAgICB0aGlzLnB1dEFzQm91bmRzKDAsIDAsIDAsIDApO1xyXG4gICAgfVxyXG4gICAgcHV0QXNFZGl0KCkge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KHRoaXMuZWxlbWVudCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnRhYkluZGV4ID0gMDtcclxuICAgIH1cclxuICAgIHB1dEFzU2Nyb2xsKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9IFwiYXV0b1wiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW4obWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpbiA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKG1hcmdpbik7XHJcbiAgICB9XHJcbiAgICBwdXRBc01hcmdpblRvcChtYXJnaW4pIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWFyZ2luVG9wID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luQm90dG9tKG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5Cb3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChtYXJnaW4pO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXJnaW5MZWZ0KG1hcmdpbikge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXJnaW5MZWZ0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWFyZ2luUmlnaHQobWFyZ2luKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1hcmdpblJpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwobWFyZ2luKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZyhwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmcgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ1RvcChwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdUb3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ0JvdHRvbShwYWRkaW5nKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBhZGRpbmdCb3R0b20gPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzUGFkZGluZ0xlZnQocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nTGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHBhZGRpbmcpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQYWRkaW5nUmlnaHQocGFkZGluZykge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wYWRkaW5nUmlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChwYWRkaW5nKTtcclxuICAgIH1cclxuICAgIHB1dEFzQm91bmRzKHRvcCwgcmlnaHQsIGJvdHRvbSwgbGVmdCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS50b3AgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh0b3ApO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5yaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHJpZ2h0KTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYm90dG9tID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoYm90dG9tKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubGVmdCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGxlZnQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNBbGxDZW50ZXJlZCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmFsaWduQ29udGVudCA9IFwiY2VudGVyXCI7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnZlcnRpY2FsQWxpZ24gPSBcIm1pZGRsZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5RmxleCgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNwbGF5SW5saW5lKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRGlzcGxheUlubGluZUJsb2NrKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtYmxvY2tcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25TdGF0aWMoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJzdGF0aWNcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25BYnNvbHV0ZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSBcImFic29sdXRlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc1Bvc2l0aW9uRml4ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNQb3NpdGlvblJlbGF0aXZlKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25TdGlja3koKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gXCJzdGlja3lcIjtcclxuICAgIH1cclxuICAgIHB1dEFzUG9zaXRpb25Jbml0aWFsKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9IFwiaW5pdGlhbFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uUm93KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleERpcmVjdGlvblJvd1JldmVyc2UoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvdy1yZXZlcnNlXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhEaXJlY3Rpb25Db2x1bW4oKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4RGlyZWN0aW9uQ29sdW1uUmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uLXJldmVyc2VcIjtcclxuICAgIH1cclxuICAgIHB1dEFzRmxleFdyYXAoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXhXcmFwID0gXCJ3cmFwXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwTm90KCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhXcmFwUmV2ZXJzZSgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuZmxleFdyYXAgPSBcIndyYXAtcmV2ZXJzZVwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNGbGV4TWluKCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5mbGV4ID0gXCJub25lXCI7XHJcbiAgICB9XHJcbiAgICBwdXRBc0ZsZXhNYXgoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmZsZXggPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIHB1dEFzV2lkdGgod2lkdGgpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUud2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc0hlaWdodChoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzU2l6ZSh3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLndpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNaW5XaWR0aCh3aWR0aCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5taW5XaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgIH1cclxuICAgIHB1dEFzTWluSGVpZ2h0KGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5taW5IZWlnaHQgPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbChoZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNaW5TaXplKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWluV2lkdGggPSB0aGlzLmdldFBpeGVsc09ySW5pdGlhbCh3aWR0aCk7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1pbkhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heFdpZHRoKHdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heFdpZHRoID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwod2lkdGgpO1xyXG4gICAgfVxyXG4gICAgcHV0QXNNYXhIZWlnaHQoaGVpZ2h0KSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKGhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBwdXRBc01heFNpemUod2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhXaWR0aCA9IHRoaXMuZ2V0UGl4ZWxzT3JJbml0aWFsKHdpZHRoKTtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5nZXRQaXhlbHNPckluaXRpYWwoaGVpZ2h0KTtcclxuICAgIH1cclxuICAgIHB1dEFzRm9yZWdyb3VuZChmb3JlZ3JvdW5kKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmNvbG9yID0gZm9yZWdyb3VuZDtcclxuICAgIH1cclxuICAgIHB1dEFzQmFja2dyb3VuZChiYWNrZ3JvdW5kKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmQgPSBiYWNrZ3JvdW5kO1xyXG4gICAgfVxyXG4gICAgcHV0QXNCYWNrQXNzZXQoYXNzZXQpIHtcclxuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gXCJ1cmwoJy9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyBhc3NldCArIFwiJylcIjtcclxuICAgIH1cclxuICAgIHB1dEFzQmFja0luaXRpYWwoKSB7XHJcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgfVxyXG4gICAgcHV0QXNaSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICBpZiAoaW5kZXggPT0gbnVsbCB8fCBpbmRleCA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLnpJbmRleCA9IGluZGV4LnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHV0QXNEaXNhYmxlZFNlbGVjdGlvbigpIHtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU2tpbi5kaXNhYmxlU2VsZWN0aW9uKHRoaXMuZWxlbWVudCk7XHJcbiAgICB9XHJcbiAgICBnZXRQaXhlbHNPckluaXRpYWwodmFsdWUpIHtcclxuICAgICAgICBpZiAodmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSA9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWUgKyBcInB4XCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CYXNlU3R5bGUgPSBRaW5CYXNlU3R5bGU7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLXN0eWxlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQmFzZSA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9iYXNlX3N0eWxlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZS1zdHlsZVwiKTtcclxuY29uc3QgcWluX3Rvb2xzXzEgPSByZXF1aXJlKFwiLi9xaW4tdG9vbHNcIik7XHJcbmNsYXNzIFFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuID0gW107XHJcbiAgICAgICAgdGhpcy5fYmFzZURpc3BsYXkgPSBcImluaXRpYWxcIjtcclxuICAgICAgICB0aGlzLl9iYXNlVmlzaWJpbGl0eSA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIHRoaXMuX3N0eWxlID0gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBxaW5wZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbl90b29sc18xLlFpblRvb2xzLnFpbnBlbCgpO1xyXG4gICAgfVxyXG4gICAgZ2V0IHN0eWxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdHlsZSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0eWxlID0gbmV3IHFpbl9iYXNlX3N0eWxlXzEuUWluQmFzZVN0eWxlKHRoaXMuZ2V0TWFpbigpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0eWxlO1xyXG4gICAgfVxyXG4gICAgaW5zdGFsbChvbkJhc2UpIHtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50ID0gb25CYXNlO1xyXG4gICAgICAgIHRoaXMuX2Jhc2VQYXJlbnQuYXBwZW5kQ2hpbGQodGhpcyk7XHJcbiAgICB9XHJcbiAgICB1bkluc3RhbGwoKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZVBhcmVudC5yZW1vdmVDaGlsZCh0aGlzKTtcclxuICAgIH1cclxuICAgIHJlSW5zdGFsbCgpIHtcclxuICAgICAgICB0aGlzLl9iYXNlUGFyZW50LmFwcGVuZENoaWxkKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgdW5EaXNwbGF5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ICE9PSBcIm5vbmVcIikge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlRGlzcGxheSA9IHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZURpc3BsYXkoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUuZGlzcGxheSA9IHRoaXMuX2Jhc2VEaXNwbGF5O1xyXG4gICAgfVxyXG4gICAgdW5WaXNpYmxlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmdldE1haW4oKS5zdHlsZS5kaXNwbGF5ICE9PSBcImhpZGRlblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2Jhc2VWaXNpYmlsaXR5ID0gdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eTtcclxuICAgICAgICAgICAgdGhpcy5nZXRNYWluKCkuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmVWaXNpYmxlKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLnN0eWxlLnZpc2liaWxpdHkgPSB0aGlzLl9iYXNlVmlzaWJpbGl0eTtcclxuICAgIH1cclxuICAgIGFwcGVuZENoaWxkKGNoaWxkKSB7XHJcbiAgICAgICAgdGhpcy5fYmFzZUNoaWxkcmVuLnB1c2goY2hpbGQpO1xyXG4gICAgICAgIHRoaXMuZ2V0TWFpbigpLmFwcGVuZENoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICB9XHJcbiAgICByZW1vdmVDaGlsZChjaGlsZCkge1xyXG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuX2Jhc2VDaGlsZHJlbi5pbmRleE9mKGNoaWxkKTtcclxuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xyXG4gICAgICAgICAgICB0aGlzLl9iYXNlQ2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRNYWluKCkucmVtb3ZlQ2hpbGQoY2hpbGQuZ2V0TWFpbigpKTtcclxuICAgIH1cclxuICAgIGNoaWxkcmVuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9iYXNlQ2hpbGRyZW47XHJcbiAgICB9XHJcbiAgICBjbGVhckNoaWxkcmVuKCkge1xyXG4gICAgICAgIGZvciAoY29uc3QgY2hpbGQgb2YgdGhpcy5fYmFzZUNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFpbigpLnJlbW92ZUNoaWxkKGNoaWxkLmdldE1haW4oKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2Jhc2VDaGlsZHJlbiA9IFtdO1xyXG4gICAgfVxyXG4gICAgYWRkQWN0aW9uKGFjdGlvbikge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Bcm0uYWRkQWN0aW9uKHRoaXMuZ2V0TWFpbigpLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgcHV0VGFiSW5kZXgoaW5kZXgpIHtcclxuICAgICAgICB0aGlzLmdldE1haW4oKS50YWJJbmRleCA9IGluZGV4O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQmFzZSA9IFFpbkJhc2U7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1iYXNlLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQm9vbGVhbiA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5faWNvbl8xID0gcmVxdWlyZShcIi4vcWluLWljb25cIik7XHJcbmNvbnN0IHFpbl9sYWJlbF8xID0gcmVxdWlyZShcIi4vcWluLWxhYmVsXCIpO1xyXG5jb25zdCBxaW5fbGluZV8xID0gcmVxdWlyZShcIi4vcWluLWxpbmVcIik7XHJcbmNsYXNzIFFpbkJvb2xlYW4gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fbGluZV8xLlFpbkxpbmUoKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluSWNvbiA9IG5ldyBxaW5faWNvbl8xLlFpbkljb24ocWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGUpO1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fcWluU3Bhbi5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3Fpbkljb24uaW5zdGFsbCh0aGlzLl9xaW5TcGFuKTtcclxuICAgICAgICB0aGlzLl9xaW5TcGFuLnN0eWxlLnB1dEFzRWRpdCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNEaXNwbGF5RmxleCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uc3R5bGUucHV0QXNBbGxDZW50ZXJlZCgpO1xyXG4gICAgICAgIHRoaXMuX3FpblNwYW4uYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl92YWx1ZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5TcGFuKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TcGFuO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkljb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbkljb247XHJcbiAgICB9XHJcbiAgICBnZXQgdmFsdWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0IHZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuICAgIHVwZGF0ZUljb24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX3ZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Fpbkljb24uYXNzZXQgPSBxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9xaW5JY29uLmFzc2V0ID0gcWluX2Fzc2V0c18xLlFpbkFzc2V0LkZhY2VDaXJjbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIHRoaXMuX3ZhbHVlID0gIXRoaXMuX3ZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQm9vbGVhbiA9IFFpbkJvb2xlYW47XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib29sZWFuLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQnV0dG9uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5CdXR0b24gZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICB0aGlzLl9xaW5JY29uID0gbnVsbDtcclxuICAgICAgICB0aGlzLl9xaW5MYWJlbCA9IG51bGw7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25CdXR0b24odGhpcy5fZWxNYWluKTtcclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmljb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbiA9IG9wdGlvbnMuaWNvbjtcclxuICAgICAgICAgICAgdGhpcy5fcWluSWNvbi5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLmxhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkxhYmVsID0gb3B0aW9ucy5sYWJlbDtcclxuICAgICAgICAgICAgdGhpcy5fcWluTGFiZWwuaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgcWluSWNvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluSWNvbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5MYWJlbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTGFiZWw7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5CdXR0b24gPSBRaW5CdXR0b247XHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICAgIGFwcGx5T25CdXR0b246IChlbCkgPT4ge1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KGVsKTtcclxuICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwicm93XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYnV0dG9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYmFzZV8xID0gcmVxdWlyZShcIi4vcWluLWJhc2VcIik7XHJcbmNsYXNzIFFpbkNvbHVtbiBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBhbmVsKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgdmlld2VyIG9mIG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbml0UGFuZWwoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25QYW5lbCh0aGlzLl9lbE1haW4pO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQ29sdW1uID0gUWluQ29sdW1uO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBhcHBseU9uUGFuZWw6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwibm93cmFwXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tY29sdW1uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQ29tYm8gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY2xhc3MgUWluQ29tYm8gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzRWRpdCgpO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaXRlbXMpIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBvcHRpb25zLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5zZWxlY3RlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZWxNYWluLnZhbHVlO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gZGF0YTtcclxuICAgIH1cclxuICAgIGFkZEl0ZW0oaXRlbSkge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XHJcbiAgICAgICAgb3B0aW9uLnRleHQgPSBpdGVtLnRpdGxlO1xyXG4gICAgICAgIG9wdGlvbi52YWx1ZSA9IGl0ZW0udmFsdWU7XHJcbiAgICAgICAgaWYgKGl0ZW0uc2VsZWN0ZWQgIT0gdW5kZWZpbmVkICYmIGl0ZW0uc2VsZWN0ZWQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBvcHRpb24uc2VsZWN0ZWQgPSBpdGVtLnNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLl9lbE1haW4uYXBwZW5kQ2hpbGQob3B0aW9uKTtcclxuICAgICAgICByZXR1cm4gdGhpcztcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkNvbWJvID0gUWluQ29tYm87XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1jb21iby5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkVkaXQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluRWRpdCBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbn1cclxuZXhwb3J0cy5RaW5FZGl0ID0gUWluRWRpdDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWVkaXQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5GaWVsZCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fbGFiZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1sYWJlbFwiKTtcclxuY2xhc3MgUWluRmllbGQgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGVkaXQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4gPSBuZXcgcWluX2NvbHVtbl8xLlFpbkNvbHVtbigpO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsID0gbmV3IHFpbl9sYWJlbF8xLlFpbkxhYmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluRWRpdCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcWluTGFiZWwuc2V0VGl0bGUodGl0bGUpO1xyXG4gICAgICAgIHRoaXMuX3FpbkxhYmVsLmluc3RhbGwodGhpcy5fcWluTWFpbik7XHJcbiAgICAgICAgdGhpcy5fcWluRWRpdCA9IGVkaXQ7XHJcbiAgICAgICAgdGhpcy5fcWluRWRpdC5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCI1cHhcIjtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLmdldE1haW4oKS5zdHlsZS5tYXJnaW5Cb3R0b20gPSBcIjVweFwiO1xyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0LmdldERhdGEoKTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3FpbkVkaXQuc2V0RGF0YShkYXRhKTtcclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkxhYmVsKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5MYWJlbDtcclxuICAgIH1cclxuICAgIGdldCBxaW5FZGl0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FZGl0O1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmllbGQgPSBRaW5GaWVsZDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpZWxkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRmlsZUNob29zZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5jb25zdCBxaW5fY29sdW1uXzEgPSByZXF1aXJlKFwiLi9xaW4tY29sdW1uXCIpO1xyXG5jb25zdCBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fZmlsZV9leHBsb3Jlcl8xID0gcmVxdWlyZShcIi4vcWluLWZpbGUtZXhwbG9yZXJcIik7XHJcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY29uc3QgcWluX3N0cmluZ18xID0gcmVxdWlyZShcIi4vcWluLXN0cmluZ1wiKTtcclxuY2xhc3MgUWluRmlsZUNob29zZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbiA9IG5ldyBxaW5fY29sdW1uXzEuUWluQ29sdW1uKCk7XHJcbiAgICAgICAgdGhpcy5fcWluVXBwZXIgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybSA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUNvbmZpcm0pLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlciA9IG5ldyBxaW5fc3RyaW5nXzEuUWluU3RyaW5nKCk7XHJcbiAgICAgICAgdGhpcy5fcWluRXh0ZW5zaW9ucyA9IG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibygpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZVNlYXJjaCksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIgPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3JlciA9IG5ldyBxaW5fZmlsZV9leHBsb3Jlcl8xLlFpbkZpbGVFeHBsb3JlcigpO1xyXG4gICAgICAgIHRoaXMuX2xpc3RlbmVycyA9IFtdO1xyXG4gICAgICAgIHRoaXMuX25hdHVyZSA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMubmF0dXJlKSA/IG9wdGlvbnMubmF0dXJlIDogcWlucGVsX3Jlc18xLlFpbkZpbGVzTmF0dXJlLkJPVEg7XHJcbiAgICAgICAgdGhpcy5fb3BlcmF0aW9uID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5vcGVyYXRpb24pID8gb3B0aW9ucy5vcGVyYXRpb24gOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNPcGVyYXRpb24uT1BFTjtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdG9ycyA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuZGVzY3JpcHRvcnMpID8gb3B0aW9ucy5kZXNjcmlwdG9ycyA6IFtdO1xyXG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSA/IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5zaW5nbGVTZWxlY3Rpb24gOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmluaXRNYWluKCk7XHJcbiAgICAgICAgdGhpcy5pbml0VXBwZXIoKTtcclxuICAgICAgICB0aGlzLmluaXRVbmRlcigpO1xyXG4gICAgfVxyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVXBwZXIuaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlci5pbnN0YWxsKHRoaXMuX3Fpbk1haW4pO1xyXG4gICAgfVxyXG4gICAgaW5pdFVwcGVyKCkge1xyXG4gICAgICAgIHRoaXMuX3FpblVwcGVyLnN0eWxlLnB1dEFzRmxleE1pbigpO1xyXG4gICAgICAgIHRoaXMuX3FpbkNvbmZpcm0uaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluQ29uZmlybS5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNob3NlbiBvZiB0aGlzLl9saXN0ZW5lcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaG9zZW4oZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5zdHlsZS5wdXRBc01pbldpZHRoKDEwMCk7XHJcbiAgICAgICAgdGhpcy5fcWluRm9sZGVyLnN0eWxlLnB1dEFzRmxleE1heCgpO1xyXG4gICAgICAgIHRoaXMuX3FpbkZvbGRlci5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc0VudGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRGb2xkZXIoKTtcclxuICAgICAgICAgICAgICAgIHFpbkV2ZW50LmNvbnN1bWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5FeHRlbnNpb25zLmluc3RhbGwodGhpcy5fcWluVXBwZXIpO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuc3R5bGUucHV0QXNNaW5XaWR0aCgxMDApO1xyXG4gICAgICAgIHRoaXMuaW5pdEV4dGVuc2lvbnMoKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guaW5zdGFsbCh0aGlzLl9xaW5VcHBlcik7XHJcbiAgICAgICAgdGhpcy5fcWluU2VhcmNoLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkRm9sZGVyKCk7XHJcbiAgICAgICAgICAgICAgICBxaW5FdmVudC5jb25zdW1lZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpbml0VW5kZXIoKSB7XHJcbiAgICAgICAgdGhpcy5fcWluVW5kZXIuc3R5bGUucHV0QXNTY3JvbGwoKTtcclxuICAgICAgICB0aGlzLl9xaW5VbmRlci5zdHlsZS5wdXRBc0ZsZXhNYXgoKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5pbnN0YWxsKHRoaXMuX3FpblVuZGVyKTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5uYXR1cmUgPSB0aGlzLl9uYXR1cmU7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uID0gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgaW5pdEV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuYWRkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogXCJBbGwgRmlsZXMgKCouKilcIixcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBcIipcIixcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuZXh0ZW5zaW9ucyA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX2Rlc2NyaXB0b3JzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVzY3JpcHRvciA9IHRoaXMuX2Rlc2NyaXB0b3JzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpbkV4dGVuc2lvbnMuYWRkSXRlbSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IGRlc2NyaXB0b3IuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGRlc2NyaXB0b3IuZXh0ZW5zaW9ucy5qb2luKFwiO1wiKSxcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogaW5kZXggPT0gMCxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLmV4dGVuc2lvbnMgPSB0aGlzLl9kZXNjcmlwdG9yc1swXS5leHRlbnNpb25zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRXhwbG9yZXIuZ2V0RGF0YSgpO1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5fcWluRXhwbG9yZXIuc2V0RGF0YShkYXRhKTtcclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblVwcGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5VcHBlcjtcclxuICAgIH1cclxuICAgIGdldCBxaW5Db25maXJtKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5Db25maXJtO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkZvbGRlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluRm9sZGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkV4dGVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluU2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5TZWFyY2g7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluVW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblVuZGVyO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkV4cGxvcmVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5FeHBsb3JlcjtcclxuICAgIH1cclxuICAgIGdldCBuYXR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX25hdHVyZTtcclxuICAgIH1cclxuICAgIHNldCBuYXR1cmUodmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9uYXR1cmUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5uYXR1cmUgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBvcGVyYXRpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX29wZXJhdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBvcGVyYXRpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9vcGVyYXRpb24gPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBkZXNjcmlwdG9ycygpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZGVzY3JpcHRvcnM7XHJcbiAgICB9XHJcbiAgICBzZXQgZGVzY3JpcHRvcnModmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9kZXNjcmlwdG9ycyA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNpbmdsZVNlbGVjdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc2luZ2xlU2VsZWN0aW9uO1xyXG4gICAgfVxyXG4gICAgc2V0IHNpbmdsZVNlbGVjdGlvbih2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgICAgIHRoaXMuX3FpbkV4cGxvcmVyLnNpbmdsZVNlbGVjdGlvbiA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgbG9hZEZvbGRlcigpIHtcclxuICAgICAgICB0aGlzLl9xaW5FeHBsb3Jlci5sb2FkKHRoaXMuX3FpbkZvbGRlci5nZXREYXRhKCksIChsb2FkZWQpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fcWluRm9sZGVyLnNldERhdGEobG9hZGVkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGFkZENob3NlbihjaG9zZW4pIHtcclxuICAgICAgICB0aGlzLl9saXN0ZW5lcnMucHVzaChjaG9zZW4pO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmlsZUNob29zZXIgPSBRaW5GaWxlQ2hvb3NlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpbGUtY2hvb3Nlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpbGVFeHBsb3JlciA9IHZvaWQgMDtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpbkZpbGVFeHBsb3JlciBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gXCJcIjtcclxuICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5fbmF0dXJlID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUpID8gb3B0aW9ucy5uYXR1cmUgOiBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuQk9USDtcclxuICAgICAgICB0aGlzLl9leHRlbnNpb25zID0gKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5leHRlbnNpb25zKSA/IG9wdGlvbnMuZXh0ZW5zaW9ucyA6IFtdO1xyXG4gICAgICAgIHRoaXMuX3NpbmdsZVNlbGVjdGlvbiA9IChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uKSA/IG9wdGlvbnMuc2luZ2xlU2VsZWN0aW9uIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbml0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgaW5pdE1haW4oKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25NYWluKHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLmFkZEFjdGlvbigocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhblNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zdHlsZS5wdXRBc0Rpc2FibGVkU2VsZWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKGl0ZW0uaXNTZWxlY3RlZCgpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmdldFBhdGhKb2luKHRoaXMuX2ZvbGRlclNlcnZlciwgaXRlbS5nZXROYW1lKCkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLmNsZWFuKCk7XHJcbiAgICAgICAgaWYgKGRhdGEgJiYgZGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGxldCBmb2xkZXJSb290ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXJlbnQoZGF0YVswXSk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZChmb2xkZXJSb290LCAoXykgPT4ge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtUGF0aCBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1Sb290ID0gcWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5nZXRQYXJlbnQoaXRlbVBhdGgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpdGVtTmFtZSA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0U3RlbShpdGVtUGF0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW1Sb290ICE9PSBmb2xkZXJSb290KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGBUaGUgaXRlbSAnJHtpdGVtUGF0aH0nIGlzIG5vdCBvbiB0aGUgcm9vdCAnJHtmb2xkZXJSb290fScuYCwgXCJ7cWlucGVsLWNwc30oRXJyQ29kZS0wMDAwMDEpXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdChpdGVtTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucWlucGVsLmZyYW1lLnN0YXR1c0Vycm9yKGBEb2VzIG5vdCBoYXZlIHRoZSBpdGVtICcke2l0ZW1OYW1lfScgb24gdGhlIGZvbGRlciAnJHtmb2xkZXJSb290fSdgLCBcIntxaW5wZWwtY3BzfShFcnJDb2RlLTAwMDAwMilcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBxaW5NYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5hdHVyZSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fbmF0dXJlO1xyXG4gICAgfVxyXG4gICAgc2V0IG5hdHVyZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX25hdHVyZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGV4dGVuc2lvbnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2V4dGVuc2lvbnM7XHJcbiAgICB9XHJcbiAgICBzZXQgZXh0ZW5zaW9ucyh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX2V4dGVuc2lvbnMgPSB2YWx1ZTtcclxuICAgIH1cclxuICAgIGdldCBzaW5nbGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3NpbmdsZVNlbGVjdGlvbjtcclxuICAgIH1cclxuICAgIHNldCBzaW5nbGVTZWxlY3Rpb24odmFsdWUpIHtcclxuICAgICAgICB0aGlzLl9zaW5nbGVTZWxlY3Rpb24gPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZVNpbmdsZVNlbGVjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZvbGRlckFjdHVhbCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm9sZGVyQWN0dWFsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGZvbGRlclNlcnZlcigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZm9sZGVyU2VydmVyO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlU2luZ2xlU2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zaW5nbGVTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgbGV0IGFscmVhZHlIYXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVtIG9mIHRoaXMuX2l0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5pc1NlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWxyZWFkeUhhcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHJlYWR5SGFzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsb2FkKGZvbGRlciwgb25Mb2FkKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIHRoaXMucWlucGVsXHJcbiAgICAgICAgICAgIC5wb3N0KFwiL2Rpci9saXN0XCIsIHsgcGF0aDogZm9sZGVyIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5fZm9sZGVyQWN0dWFsID0gZm9sZGVyO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBsaW5lIG9mIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmJvZHkuZ2V0VGV4dExpbmVzKHJlcy5kYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGxpbmVWYWx1ZSA9IGxpbmUuc3Vic3RyaW5nKDMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsaW5lVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJQOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9mb2xkZXJTZXJ2ZXIgPSBsaW5lVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9uTG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvYWQobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJEOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRElSRUNUT1JJRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXdEaXIobGluZVZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChsaW5lLnN0YXJ0c1dpdGgoXCJGOiBcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5fbmF0dXJlID09IHFpbnBlbF9yZXNfMS5RaW5GaWxlc05hdHVyZS5CT1RIIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX25hdHVyZSA9PSBxaW5wZWxfcmVzXzEuUWluRmlsZXNOYXR1cmUuRklMRVMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4dGVuc2lvbiA9IHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuZ2V0RmlsZUV4dGVuc2lvbihsaW5lVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGFzc2VkRXh0ZW5zaW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2V4dGVuc2lvbnMgJiYgdGhpcy5fZXh0ZW5zaW9ucy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXNzZWRFeHRlbnNpb24gPSB0aGlzLl9leHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXNzZWRFeHRlbnNpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubmV3RmlsZShsaW5lVmFsdWUsIGV4dGVuc2lvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnFpbnBlbC5mcmFtZS5zdGF0dXNFcnJvcihlcnIsIFwie3FpbnBlbC1jcHN9KEVyckNvZGUtMDAwMDAzKVwiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHJlbG9hZChvbkxvYWQpIHtcclxuICAgICAgICB0aGlzLmxvYWQodGhpcy5fZm9sZGVyU2VydmVyLCBvbkxvYWQpO1xyXG4gICAgfVxyXG4gICAgZ29Gb2xkZXJVcChvbkxvYWQpIHtcclxuICAgICAgICBsZXQgcGFyZW50ID0gcWlucGVsX3Jlc18xLlFpbkZvb3QuZ2V0UGFyZW50KHRoaXMuX2ZvbGRlclNlcnZlcik7XHJcbiAgICAgICAgaWYgKHBhcmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWQocGFyZW50LCBvbkxvYWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNsZWFuKCkge1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpLmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICAgICAgdGhpcy5faXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLl9mb2xkZXJBY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMuX2ZvbGRlclNlcnZlciA9IFwiXCI7XHJcbiAgICB9XHJcbiAgICBjbGVhblNlbGVjdGlvbigpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGl0ZW0gb2YgdGhpcy5faXRlbXMpIHtcclxuICAgICAgICAgICAgaXRlbS51bnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNlbGVjdChpdGVtTmFtZSkge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXMuZmluZCgoaW5zaWRlKSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLnNlbGVjdCgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB1bnNlbGVjdChpdGVtTmFtZSkge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5faXRlbXMuZmluZCgoaW5zaWRlKSA9PiBpbnNpZGUuZ2V0TmFtZSgpID09IGl0ZW1OYW1lKTtcclxuICAgICAgICBpZiAoaXRlbSkge1xyXG4gICAgICAgICAgICBpdGVtLnVuc2VsZWN0KCk7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG5ld0RpcihuYW1lKSB7XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtKG5hbWUsIFwiZXhwbG9yZXItZGlyLnBuZ1wiKTtcclxuICAgIH1cclxuICAgIG5ld0ZpbGUobmFtZSwgZXh0ZW5zaW9uKSB7XHJcbiAgICAgICAgdGhpcy5uZXdJdGVtKG5hbWUsIGdldEljb25OYW1lKGV4dGVuc2lvbikpO1xyXG4gICAgfVxyXG4gICAgbmV3SXRlbShuYW1lLCBpY29uKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IG5ldyBJdGVtKHRoaXMsIG5hbWUsIGljb24pO1xyXG4gICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzLl9xaW5NYWluLmdldE1haW4oKSk7XHJcbiAgICAgICAgdGhpcy5faXRlbXMucHVzaChpdGVtKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkZpbGVFeHBsb3JlciA9IFFpbkZpbGVFeHBsb3JlcjtcclxuY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihleHBsb3JlciwgZmlsZU5hbWUsIGljb25OYW1lKSB7XHJcbiAgICAgICAgdGhpcy5kaXZJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLnNwYW5JY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGhpcy5pbWdJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICB0aGlzLnNwYW5UZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXhwbG9yZXIgPSBleHBsb3JlcjtcclxuICAgICAgICB0aGlzLmZpbGVOYW1lID0gZmlsZU5hbWU7XHJcbiAgICAgICAgdGhpcy5pY29uTmFtZSA9IGljb25OYW1lO1xyXG4gICAgICAgIHRoaXMuaW5pdEl0ZW0oKTtcclxuICAgIH1cclxuICAgIGluaXRJdGVtKCkge1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uRGl2SXRlbSh0aGlzLmRpdkl0ZW0pO1xyXG4gICAgICAgIHRoaXMuZGl2SXRlbS50YWJJbmRleCA9IDA7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZJdGVtQm9keSh0aGlzLmRpdkl0ZW1Cb2R5KTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW0uYXBwZW5kQ2hpbGQodGhpcy5kaXZJdGVtQm9keSk7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25TcGFuSWNvbih0aGlzLnNwYW5JY29uKTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3Bhbkljb24pO1xyXG4gICAgICAgIHRoaXMuaW1nSWNvbi5zcmMgPSBcIi9hcHAvcWlucGVsLWFwcC9hc3NldHMvXCIgKyB0aGlzLmljb25OYW1lO1xyXG4gICAgICAgIHRoaXMuc3Bhbkljb24uYXBwZW5kQ2hpbGQodGhpcy5pbWdJY29uKTtcclxuICAgICAgICB0aGlzLnNwYW5UZXh0LmlubmVyVGV4dCA9IHRoaXMuZmlsZU5hbWU7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25TcGFuVGV4dCh0aGlzLnNwYW5UZXh0KTtcclxuICAgICAgICB0aGlzLmRpdkl0ZW1Cb2R5LmFwcGVuZENoaWxkKHRoaXMuc3BhblRleHQpO1xyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmFybS5hZGRBY3Rpb24odGhpcy5kaXZJdGVtLCAocWluRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgaWYgKHFpbkV2ZW50LmlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXZJdGVtLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAgICAgcWluRXZlbnQuY29uc3VtZWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgaW5zdGFsbChvbikge1xyXG4gICAgICAgIG9uLmFwcGVuZENoaWxkKHRoaXMuZGl2SXRlbSk7XHJcbiAgICB9XHJcbiAgICBzZWxlY3QoKSB7XHJcbiAgICAgICAgc3R5bGVzLmFwcGx5T25EaXZTZWxlY3QodGhpcy5kaXZJdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVuc2VsZWN0KCkge1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uRGl2VW5TZWxlY3QodGhpcy5kaXZJdGVtKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICB0b2dnbGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51bnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwbG9yZXIuc2luZ2xlU2VsZWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGxvcmVyLmNsZWFuU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpbGVOYW1lO1xyXG4gICAgfVxyXG4gICAgaXNTZWxlY3RlZCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZWxlY3RlZDtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBnZXRJY29uTmFtZShmcm9tRXh0ZW5zaW9uKSB7XHJcbiAgICBsZXQgcmVzdWx0ID0gXCJleHBsb3Jlci1maWxlLnBuZ1wiO1xyXG4gICAgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlQXBwKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1hcHBzLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVDbWQoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWNtZHMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUV4ZWMoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLWV4ZWMucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZUltYWdlKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1pbWFnZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlVmVjdG9yKGZyb21FeHRlbnNpb24pKSB7XHJcbiAgICAgICAgcmVzdWx0ID0gXCJleHBsb3Jlci1pbWFnZS5wbmdcIjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHFpbnBlbF9yZXNfMS5RaW5Tb3VsLmZvb3QuaXNGaWxlTXVzaWMoZnJvbUV4dGVuc2lvbikpIHtcclxuICAgICAgICByZXN1bHQgPSBcImV4cGxvcmVyLW11c2ljLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAocWlucGVsX3Jlc18xLlFpblNvdWwuZm9vdC5pc0ZpbGVNb3ZpZShmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItbW92aWUucG5nXCI7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChxaW5wZWxfcmVzXzEuUWluU291bC5mb290LmlzRmlsZVppcHBlZChmcm9tRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiZXhwbG9yZXItemlwcGVkLnBuZ1wiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBhcHBseU9uTWFpbjogKGVsKSA9PiB7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNvdWwuc2tpbi5zdHlsZUFzRWRpdChlbCk7XHJcbiAgICAgICAgZWwuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICBlbC5zdHlsZS5taW5XaWR0aCA9IFwiMTYwcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5taW5IZWlnaHQgPSBcIjE2MHB4XCI7XHJcbiAgICAgICAgZWwudGFiSW5kZXggPSAwO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZJdGVtOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS5tYXJnaW4gPSBcIjJweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLnBhZGRpbmcgPSBcIjlweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xyXG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNmZmZmZmZcIjtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCAjMzYwMDQ1XCI7XHJcbiAgICAgICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcclxuICAgICAgICBlbC5zdHlsZS5jb2xvciA9IFwiIzI3MDAzNlwiO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgI2FlMDAwMFwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c291dFwiLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICAgICAgZWwuc3R5bGUuYm9yZGVyID0gXCIxcHggc29saWQgIzM2MDA0NVwiO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZJdGVtQm9keTogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcImNvbHVtblwiO1xyXG4gICAgICAgIGVsLnN0eWxlLndpZHRoID0gXCI5NnB4XCI7XHJcbiAgICB9LFxyXG4gICAgYXBwbHlPblNwYW5JY29uOiAoZWwpID0+IHtcclxuICAgICAgICBlbC5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25TcGFuVGV4dDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcclxuICAgICAgICBlbC5zdHlsZS53b3JkV3JhcCA9IFwiYnJlYWstd29yZFwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZTZWxlY3Q6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiI2ZhZWZmZlwiO1xyXG4gICAgfSxcclxuICAgIGFwcGx5T25EaXZVblNlbGVjdDogKGVsKSA9PiB7XHJcbiAgICAgICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjZmZmZmZmXCI7XHJcbiAgICB9LFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tZmlsZS1leHBsb3Jlci5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkZpbGVQYXRoID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYXNzZXRzXzEgPSByZXF1aXJlKFwiLi9xaW4tYXNzZXRzXCIpO1xyXG5jb25zdCBxaW5fYnV0dG9uXzEgPSByZXF1aXJlKFwiLi9xaW4tYnV0dG9uXCIpO1xyXG5jb25zdCBxaW5fZmlsZV9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1jaG9vc2VyXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNvbnN0IHFpbl9pY29uXzEgPSByZXF1aXJlKFwiLi9xaW4taWNvblwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5fc3RyaW5nXzEgPSByZXF1aXJlKFwiLi9xaW4tc3RyaW5nXCIpO1xyXG5jbGFzcyBRaW5GaWxlUGF0aCBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGggPSBuZXcgcWluX3N0cmluZ18xLlFpblN0cmluZygpO1xyXG4gICAgICAgIHRoaXMuX3FpblNlYXJjaCA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHtcclxuICAgICAgICAgICAgaWNvbjogbmV3IHFpbl9pY29uXzEuUWluSWNvbihxaW5fYXNzZXRzXzEuUWluQXNzZXQuRmFjZUZvbGRlciksXHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5fcWluQ2hvb3NlciA9IG5ldyBxaW5fZmlsZV9jaG9vc2VyXzEuUWluRmlsZUNob29zZXIoe1xyXG4gICAgICAgICAgICBuYXR1cmU6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5uYXR1cmUsXHJcbiAgICAgICAgICAgIG9wZXJhdGlvbjogb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLm9wZXJhdGlvbixcclxuICAgICAgICAgICAgZGVzY3JpcHRvcnM6IG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5kZXNjcmlwdG9ycyxcclxuICAgICAgICAgICAgc2luZ2xlU2VsZWN0aW9uOiB0cnVlLFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuX3FpblBvcHVwID0gdGhpcy5xaW5wZWwuZnJhbWUubmV3UG9wdXAodGhpcy5fcWluQ2hvb3Nlci5nZXRNYWluKCkpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhdGguaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgICAgICB0aGlzLl9xaW5TZWFyY2guYWRkQWN0aW9uKChxaW5FdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9xaW5Qb3B1cC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1cHBlckhlaWdodCA9IHRoaXMuX3FpbkNob29zZXIucWluVXBwZXIuZ2V0TWFpbigpLmNsaWVudEhlaWdodDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4cGxvcmVyTWF4SGVpZ2h0ID0gdGhpcy5fcWluUG9wdXAubWF4SGVpZ2h0IC0gKHVwcGVySGVpZ2h0ICsgMTIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcWluQ2hvb3Nlci5xaW5FeHBsb3Jlci5zdHlsZS5wdXRBc01heEhlaWdodChleHBsb3Jlck1heEhlaWdodCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLl9xaW5DaG9vc2VyLmFkZENob3NlbigoY2hvc2VuKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaG9zZW4gJiYgY2hvc2VuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3FpblBhdGguc2V0RGF0YShjaG9zZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX3FpblBvcHVwLmNsb3NlKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Fpbk1haW4uZ2V0TWFpbigpO1xyXG4gICAgfVxyXG4gICAgZ2V0RGF0YSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluUGF0aC5nZXREYXRhKCk7XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICB0aGlzLl9xaW5QYXRoLnNldERhdGEoZGF0YSk7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluTWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbjtcclxuICAgIH1cclxuICAgIGdldCBxaW5QYXRoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5QYXRoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpblNlYXJjaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluU2VhcmNoO1xyXG4gICAgfVxyXG4gICAgZ2V0IHFpbkNob29zZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpbkNob29zZXI7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluUG9wdXAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBvcHVwO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRmlsZVBhdGggPSBRaW5GaWxlUGF0aDtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWZpbGUtcGF0aC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkljb25PcHRpb24gPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWlucGVsX3Jlc18xID0gcmVxdWlyZShcInFpbnBlbC1yZXNcIik7XHJcbmNsYXNzIFFpbkljb25PcHRpb24gZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3IoaWNvbikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICB0aGlzLl9zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBib3JkZXIgPSBNYXRoLnJvdW5kKGljb24uc2l6ZS53aWR0aCAvIDEwKTtcclxuICAgICAgICBsZXQgcGFkZGluZyA9IGJvcmRlciAqIDI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmJvcmRlclJhZGl1cyA9IGJvcmRlciArIFwicHhcIjtcclxuICAgICAgICB0aGlzLl9lbE1haW4uc3R5bGUucGFkZGluZyA9IHBhZGRpbmcgKyBcInB4XCI7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9pY29uID0gaWNvbjtcclxuICAgICAgICB0aGlzLl9pY29uLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZGF0YTtcclxuICAgICAgICBpZiAodGhpcy5fc2VsZWN0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlcy5Db2xvclNlbGVjdGVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IFwiaW5pdGlhbFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpY29uKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gICAgfVxyXG4gICAgZ2V0IHNlbGVjdGVkKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zZWxlY3RlZDtcclxuICAgIH1cclxuICAgIHNldCBzZWxlY3RlZChzZWxlY3RlZCkge1xyXG4gICAgICAgIHRoaXMuc2V0RGF0YShzZWxlY3RlZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5JY29uT3B0aW9uID0gUWluSWNvbk9wdGlvbjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWljb24tb3B0aW9uLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSWNvblBpY2sgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY29uc3QgcWluX2xpbmVfMSA9IHJlcXVpcmUoXCIuL3Fpbi1saW5lXCIpO1xyXG5jb25zdCBxaW5faWNvbl9vcHRpb25fMSA9IHJlcXVpcmUoXCIuL3Fpbi1pY29uLW9wdGlvblwiKTtcclxuY2xhc3MgUWluSWNvblBpY2sgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9saW5lXzEuUWluTGluZSgpO1xyXG4gICAgICAgIHRoaXMuX3Fpbk1haW4uc3R5bGUucHV0QXNFZGl0KCk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9xaW5NYWluLmdldE1haW4oKTtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgZm9yIChsZXQgY2hpbGQgb2YgdGhpcy5jaGlsZHJlbigpKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCBpbnN0YW5jZW9mIHFpbl9pY29uX29wdGlvbl8xLlFpbkljb25PcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChjaGlsZC5zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjaGlsZC5pY29uLmFzc2V0O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIHNldERhdGEoYXNzZXQpIHtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLl9xaW5NYWluLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgcWluX2ljb25fb3B0aW9uXzEuUWluSWNvbk9wdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkLmljb24uYXNzZXQgPT0gYXNzZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZC5zZWxlY3RlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIDtcclxuICAgIH1cclxuICAgIGFkZEljb24oaWNvbikge1xyXG4gICAgICAgIGxldCBvcHRpb24gPSBuZXcgcWluX2ljb25fb3B0aW9uXzEuUWluSWNvbk9wdGlvbihpY29uKTtcclxuICAgICAgICBvcHRpb24uaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgIH1cclxuICAgIGFkZE9wdGlvbihvcHRpb24pIHtcclxuICAgICAgICBvcHRpb24uaW5zdGFsbCh0aGlzLl9xaW5NYWluKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb25QaWNrID0gUWluSWNvblBpY2s7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pY29uLXBpY2suanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5JY29uID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5JY29uIGV4dGVuZHMgcWluX2Jhc2VfMS5RaW5CYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGFzc2V0LCBzaXplID0gcWlucGVsX3Jlc18xLlFpbkdyYW5kZXVyLlNNQUxMKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zcmMgPSAoMCwgcWluX2Fzc2V0c18xLnFpbkFzc2V0VXJsKShhc3NldCk7XHJcbiAgICAgICAgcWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVTaXplKHRoaXMuX2VsTWFpbiwgc2l6ZSk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXQgYXNzZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuICgwLCBxaW5fYXNzZXRzXzEucWluVXJsQXNzZXQpKHRoaXMuX2VsTWFpbi5zcmMpO1xyXG4gICAgfVxyXG4gICAgc2V0IGFzc2V0KGFzc2V0KSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnNyYyA9ICgwLCBxaW5fYXNzZXRzXzEucWluQXNzZXRVcmwpKGFzc2V0KTtcclxuICAgIH1cclxuICAgIGdldCBzaXplKCkge1xyXG4gICAgICAgIHJldHVybiBxaW5wZWxfcmVzXzEuUWluU2tpbi5nZXREaW1lbnNpb24odGhpcy5fZWxNYWluKTtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkljb24gPSBRaW5JY29uO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4taWNvbi5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkludGVnZXIgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbnBlbF9yZXNfMSA9IHJlcXVpcmUoXCJxaW5wZWwtcmVzXCIpO1xyXG5jb25zdCBxaW5fZWRpdF8xID0gcmVxdWlyZShcIi4vcWluLWVkaXRcIik7XHJcbmNsYXNzIFFpbkludGVnZXIgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi50eXBlID0gXCJudW1iZXJcIjtcclxuICAgICAgICBxaW5wZWxfcmVzXzEuUWluU291bC5za2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsTWFpbik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLndpZHRoID0gXCIxMjBweFwiO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEodGhpcy5nZXREYXRhKCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IG9wdGlvbnMuaW5pdGlhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pbml0aWFsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZWxNYWluLnZhbHVlO1xyXG4gICAgICAgIGlmICh2YWx1ZSA9PSBudWxsIHx8IHZhbHVlID09IHVuZGVmaW5lZCB8fCB2YWx1ZS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXJzZUludCh0aGlzLl9lbE1haW4udmFsdWUsIDEwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXREYXRhKGRhdGEpIHtcclxuICAgICAgICBpZiAoZGF0YSA9PSBudWxsIHx8IGRhdGEgPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4udmFsdWUgPSAoZGF0YSB8IDApLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluSW50ZWdlciA9IFFpbkludGVnZXI7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1pbnRlZ2VyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTGFiZWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluTGFiZWwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xyXG4gICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbE1haW4udGV4dENvbnRlbnQgPSB0aXRsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBzZXRUaXRsZSh0aXRsZSkge1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi50ZXh0Q29udGVudCA9IHRpdGxlO1xyXG4gICAgfVxyXG4gICAgZ2V0VGl0bGUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbi50ZXh0Q29udGVudDtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkxhYmVsID0gUWluTGFiZWw7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1sYWJlbC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpbkxpbmUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluTGluZSBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuaW5pdFBhbmVsKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHZpZXdlciBvZiBvcHRpb25zLmluaXRpYWwpIHtcclxuICAgICAgICAgICAgICAgIHZpZXdlci5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaW5pdFBhbmVsKCkge1xyXG4gICAgICAgIHN0eWxlcy5hcHBseU9uUGFuZWwodGhpcy5fZWxNYWluKTtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbkxpbmUgPSBRaW5MaW5lO1xyXG5jb25zdCBzdHlsZXMgPSB7XHJcbiAgICBhcHBseU9uUGFuZWw6IChlbCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJyb3dcIjtcclxuICAgICAgICBlbC5zdHlsZS5mbGV4V3JhcCA9IFwid3JhcFwiO1xyXG4gICAgfSxcclxufTtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLWxpbmUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5NZW51SXRlbSA9IGV4cG9ydHMuUWluTWVudSA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Fzc2V0c18xID0gcmVxdWlyZShcIi4vcWluLWFzc2V0c1wiKTtcclxuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jb25zdCBxaW5fcGFuZWxfMSA9IHJlcXVpcmUoXCIuL3Fpbi1wYW5lbFwiKTtcclxuY2xhc3MgUWluTWVudSBleHRlbmRzIHFpbl9lZGl0XzEuUWluRWRpdCB7XHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluID0gbmV3IHFpbl9wYW5lbF8xLlFpblBhbmVsKCk7XHJcbiAgICAgICAgdGhpcy5fcWluTWFpbi5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgICAgICB0aGlzLl9xaW5NYWluLnN0eWxlLnB1dEFzU2Nyb2xsKCk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pdGVtcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldERhdGEob3B0aW9ucy5pdGVtcyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFpbigpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fcWluTWFpbi5nZXRNYWluKCk7XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiB0aGlzLmNoaWxkcmVuKCkpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkIGluc3RhbmNlb2YgUWluTWVudUl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGNoaWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgc2V0RGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jbGVhckNoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGl0ZW0uaW5zdGFsbCh0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwdXRJdGVtKGl0ZW0pIHtcclxuICAgICAgICBpdGVtLmluc3RhbGwodGhpcyk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5NZW51ID0gUWluTWVudTtcclxuY2xhc3MgUWluTWVudUl0ZW0gZXh0ZW5kcyBxaW5fcGFuZWxfMS5RaW5QYW5lbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihpY29uLCBsYWJlbCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZmFjZSA9IG5ldyBxaW5fcGFuZWxfMS5RaW5QYW5lbCgpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkgPSBuZXcgcWluX2NvbHVtbl8xLlFpbkNvbHVtbigpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5fZmFjZS5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuaW5zdGFsbCh0aGlzLl9mYWNlKTtcclxuICAgICAgICB0aGlzLl9pY29uID0gaWNvbjtcclxuICAgICAgICBpZiAodGhpcy5faWNvbikge1xyXG4gICAgICAgICAgICB0aGlzLl9pY29uLmluc3RhbGwodGhpcy5fYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuX2xhYmVsID0gbGFiZWw7XHJcbiAgICAgICAgaWYgKHRoaXMuX2xhYmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xhYmVsLmluc3RhbGwodGhpcy5fYm9keSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHV0VGFiSW5kZXgoMCk7XHJcbiAgICAgICAgdGhpcy5zdHlsZS5wdXRBc0VkaXQoKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWFyZ2luKDMpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNQYWRkaW5nKDYpO1xyXG4gICAgICAgIHRoaXMuc3R5bGUucHV0QXNEaXNwbGF5SW5saW5lQmxvY2soKTtcclxuICAgICAgICB0aGlzLnN0eWxlLnB1dEFzTWF4V2lkdGgoOTYpO1xyXG4gICAgICAgIHRoaXMuX2JvZHkuc3R5bGUucHV0QXNBbGxDZW50ZXJlZCgpO1xyXG4gICAgfVxyXG4gICAgc2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMuX2ZhY2Uuc3R5bGUucHV0QXNCYWNrQXNzZXQocWluX2Fzc2V0c18xLlFpbkFzc2V0LkJhY2tUaW55MDEpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIHVuU2VsZWN0KCkge1xyXG4gICAgICAgIHRoaXMuX2ZhY2Uuc3R5bGUucHV0QXNCYWNrSW5pdGlhbCgpO1xyXG4gICAgICAgIHRoaXMuX3NlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzd2FwU2VsZWN0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zZWxlY3RlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnRzLlFpbk1lbnVJdGVtID0gUWluTWVudUl0ZW07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tZW51LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IGV4cG9ydHMuUWluTXV0YW50cyA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jvb2xlYW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib29sZWFuXCIpO1xyXG5jb25zdCBxaW5fZmlsZV9jaG9vc2VyXzEgPSByZXF1aXJlKFwiLi9xaW4tZmlsZS1jaG9vc2VyXCIpO1xyXG5jb25zdCBxaW5fY29tYm9fMSA9IHJlcXVpcmUoXCIuL3Fpbi1jb21ib1wiKTtcclxuY29uc3QgcWluX2ZpbGVfZXhwbG9yZXJfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLWV4cGxvcmVyXCIpO1xyXG5jb25zdCBxaW5faW50ZWdlcl8xID0gcmVxdWlyZShcIi4vcWluLWludGVnZXJcIik7XHJcbmNvbnN0IHFpbl9maWxlX3BhdGhfMSA9IHJlcXVpcmUoXCIuL3Fpbi1maWxlLXBhdGhcIik7XHJcbmNvbnN0IHFpbl9zdHJpbmdfMSA9IHJlcXVpcmUoXCIuL3Fpbi1zdHJpbmdcIik7XHJcbnZhciBRaW5NdXRhbnRzO1xyXG4oZnVuY3Rpb24gKFFpbk11dGFudHMpIHtcclxuICAgIFFpbk11dGFudHNbXCJCT09MRUFOXCJdID0gXCJib29sZWFuXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiQ0hPT1NFUlwiXSA9IFwiY2hvb3NlclwiO1xyXG4gICAgUWluTXV0YW50c1tcIkNPTUJPXCJdID0gXCJjb21ib1wiO1xyXG4gICAgUWluTXV0YW50c1tcIkVYUExPUkVSXCJdID0gXCJleHBsb3JlclwiO1xyXG4gICAgUWluTXV0YW50c1tcIklOVEVHRVJcIl0gPSBcImludGVnZXJcIjtcclxuICAgIFFpbk11dGFudHNbXCJQQVRIXCJdID0gXCJwYXRoXCI7XHJcbiAgICBRaW5NdXRhbnRzW1wiU1RSSU5HXCJdID0gXCJzdHJpbmdcIjtcclxufSkoUWluTXV0YW50cyA9IGV4cG9ydHMuUWluTXV0YW50cyB8fCAoZXhwb3J0cy5RaW5NdXRhbnRzID0ge30pKTtcclxuZnVuY3Rpb24gbmV3RWRpdChraW5kLCBvcHRpb25zKSB7XHJcbiAgICBzd2l0Y2ggKGtpbmQpIHtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuQk9PTEVBTjpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fYm9vbGVhbl8xLlFpbkJvb2xlYW4ob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLkNIT09TRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfY2hvb3Nlcl8xLlFpbkZpbGVDaG9vc2VyKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5DT01CTzpcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBxaW5fY29tYm9fMS5RaW5Db21ibyhvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuRVhQTE9SRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ZpbGVfZXhwbG9yZXJfMS5RaW5GaWxlRXhwbG9yZXIob3B0aW9ucyk7XHJcbiAgICAgICAgY2FzZSBRaW5NdXRhbnRzLklOVEVHRVI6XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgcWluX2ludGVnZXJfMS5RaW5JbnRlZ2VyKG9wdGlvbnMpO1xyXG4gICAgICAgIGNhc2UgUWluTXV0YW50cy5QQVRIOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9maWxlX3BhdGhfMS5RaW5GaWxlUGF0aChvcHRpb25zKTtcclxuICAgICAgICBjYXNlIFFpbk11dGFudHMuU1RSSU5HOlxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IHFpbl9zdHJpbmdfMS5RaW5TdHJpbmcob3B0aW9ucyk7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5rbm93biBraW5kIG9mIG11dGFudCB0byBjcmVhdGUuXCIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluTXV0YW50c0FybSA9IHtcclxuICAgIG5ld0VkaXQsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1tdXRhbnRzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluUGFuZWwgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9iYXNlXzEgPSByZXF1aXJlKFwiLi9xaW4tYmFzZVwiKTtcclxuY2xhc3MgUWluUGFuZWwgZXh0ZW5kcyBxaW5fYmFzZV8xLlFpbkJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5kaXNwbGF5ID0gXCJmbGV4XCI7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5QYW5lbCA9IFFpblBhbmVsO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tcGFuZWwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5TcGxpdHRlciA9IHZvaWQgMDtcclxuY29uc3QgcWluX2Jhc2VfMSA9IHJlcXVpcmUoXCIuL3Fpbi1iYXNlXCIpO1xyXG5jbGFzcyBRaW5TcGxpdHRlciBleHRlbmRzIHFpbl9iYXNlXzEuUWluQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNb3ZlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxTaWRlQiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLmFwcGVuZENoaWxkKHRoaXMuX2VsU2lkZUEpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbE1vdmVyKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4uYXBwZW5kQ2hpbGQodGhpcy5fZWxTaWRlQik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVBLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUEuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICB0aGlzLl9lbFNpZGVCLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xyXG4gICAgICAgIHRoaXMuX2VsU2lkZUIuc3R5bGUub3ZlcmZsb3cgPSBcImF1dG9cIjtcclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIHNldFZlcnRpY2FsKCkge1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcclxuICAgIH1cclxuICAgIHNldEhvcml6b250YWwoKSB7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU3BsaXR0ZXIgPSBRaW5TcGxpdHRlcjtcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXNwbGl0dGVyLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3RhY2sgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9wYW5lbF8xID0gcmVxdWlyZShcIi4vcWluLXBhbmVsXCIpO1xyXG5jbGFzcyBRaW5TdGFjayBleHRlbmRzIHFpbl9wYW5lbF8xLlFpblBhbmVsIHtcclxuICAgIHN0YWNrKHFpbkNvbXApIHtcclxuICAgICAgICB0aGlzLmNoaWxkcmVuKCkuZm9yRWFjaCgoY2hpbGQpID0+IHtcclxuICAgICAgICAgICAgY2hpbGQudW5EaXNwbGF5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcWluQ29tcC5pbnN0YWxsKHRoaXMpO1xyXG4gICAgfVxyXG4gICAgc2hvdyhxaW5Db21wKSB7XHJcbiAgICAgICAgdGhpcy5jaGlsZHJlbigpLmZvckVhY2goKGNoaWxkKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGlsZCA9PT0gcWluQ29tcCkge1xyXG4gICAgICAgICAgICAgICAgY2hpbGQucmVEaXNwbGF5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjaGlsZC51bkRpc3BsYXkoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU3RhY2sgPSBRaW5TdGFjaztcclxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cWluLXN0YWNrLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU3RyaW5nID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2VkaXRfMSA9IHJlcXVpcmUoXCIuL3Fpbi1lZGl0XCIpO1xyXG5jbGFzcyBRaW5TdHJpbmcgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi50eXBlID0gXCJ0ZXh0XCI7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5tYXhMZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLm1heExlbmd0aCA9IG9wdGlvbnMubWF4TGVuZ3RoO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSBNYXRoLm1pbihNYXRoLm1heChvcHRpb25zLm1heExlbmd0aCAtIDEwLCAwKSwgOTApO1xyXG4gICAgICAgICAgICBsZXQgd2lkdGggPSBNYXRoLmZsb29yKDkwICsgKHBvc2l0aW9uICogNykgLyAzKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxNYWluLnN0eWxlLndpZHRoID0gd2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHFpbnBlbF9yZXNfMS5RaW5Ta2luLnN0eWxlQXNFZGl0KHRoaXMuX2VsTWFpbik7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0YShvcHRpb25zLmluaXRpYWwpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldE1haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbjtcclxuICAgIH1cclxuICAgIGdldERhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2VsTWFpbi52YWx1ZTtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi52YWx1ZSA9IGRhdGE7XHJcbiAgICB9XHJcbiAgICBpbnNlcnRBdEN1cnNvcihkYXRhKSB7XHJcbiAgICAgICAgaWYgKCFkYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgbGV0IHN0YXJ0UG9zID0gdGhpcy5fZWxNYWluLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgIGxldCBlbmRQb3MgPSB0aGlzLl9lbE1haW4uc2VsZWN0aW9uRW5kO1xyXG4gICAgICAgIGxldCBvbGRWYWwgPSB0aGlzLl9lbE1haW4udmFsdWU7XHJcbiAgICAgICAgbGV0IG5ld1ZhbCA9IChzdGFydFBvcyA+IDAgPyBvbGRWYWwuc3Vic3RyaW5nKDAsIHN0YXJ0UG9zKSA6IFwiXCIpICtcclxuICAgICAgICAgICAgZGF0YSArXHJcbiAgICAgICAgICAgIChlbmRQb3MgPCBvbGRWYWwubGVuZ3RoID8gb2xkVmFsLnN1YnN0cmluZyhlbmRQb3MpIDogXCJcIik7XHJcbiAgICAgICAgdGhpcy5fZWxNYWluLnZhbHVlID0gbmV3VmFsO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zZWxlY3Rpb25TdGFydCA9IHN0YXJ0UG9zO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5zZWxlY3Rpb25FbmQgPSBzdGFydFBvcyArIGRhdGEubGVuZ3RoO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluU3RyaW5nID0gUWluU3RyaW5nO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tc3RyaW5nLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVGFibGUgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9lZGl0XzEgPSByZXF1aXJlKFwiLi9xaW4tZWRpdFwiKTtcclxuY2xhc3MgUWluVGFibGUgZXh0ZW5kcyBxaW5fZWRpdF8xLlFpbkVkaXQge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLl9lbE1haW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsVGFibGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGFibGVcIik7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aGVhZFwiKTtcclxuICAgICAgICB0aGlzLl9lbFRCb2R5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpO1xyXG4gICAgICAgIHRoaXMuX2VsTWFpbi5hcHBlbmRDaGlsZCh0aGlzLl9lbFRhYmxlKTtcclxuICAgICAgICB0aGlzLl9lbFRhYmxlLmFwcGVuZENoaWxkKHRoaXMuX2VsVEhlYWQpO1xyXG4gICAgICAgIHRoaXMuX2VsVGFibGUuYXBwZW5kQ2hpbGQodGhpcy5fZWxUQm9keSk7XHJcbiAgICB9XHJcbiAgICBnZXRNYWluKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9lbE1haW47XHJcbiAgICB9XHJcbiAgICBnZXREYXRhKCkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLl9lbFRCb2R5LnF1ZXJ5U2VsZWN0b3JBbGwoXCJ0clwiKS5mb3JFYWNoKCh0cikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbGluZSA9IFtdO1xyXG4gICAgICAgICAgICB0ci5xdWVyeVNlbGVjdG9yQWxsKFwidGRcIikuZm9yRWFjaCgodGQpID0+IHtcclxuICAgICAgICAgICAgICAgIGxpbmUucHVzaCh0ZC5pbm5lclRleHQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobGluZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuICAgIHNldERhdGEoZGF0YSkge1xyXG4gICAgICAgIHRoaXMuZGVsTGluZXMoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGxpbmUgb2YgZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZExpbmUobGluZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0SGVhZChoZWFkKSB7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZC5pbm5lckhUTUwgPSBcIlwiO1xyXG4gICAgICAgIGZvciAoY29uc3QgY2VsbCBvZiBoZWFkKSB7XHJcbiAgICAgICAgICAgIGxldCB0aCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0aFwiKTtcclxuICAgICAgICAgICAgdGguaW5uZXJUZXh0ID0gY2VsbDtcclxuICAgICAgICAgICAgdGhpcy5fZWxUSGVhZC5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0SGVhZCgpIHtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZC5xdWVyeVNlbGVjdG9yQWxsKFwidGhcIikuZm9yRWFjaCgodGgpID0+IHtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2godGguaW5uZXJUZXh0KTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG4gICAgYWRkSGVhZChoZWFkKSB7XHJcbiAgICAgICAgbGV0IHRoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRoXCIpO1xyXG4gICAgICAgIHRoLmlubmVyVGV4dCA9IGhlYWQ7XHJcbiAgICAgICAgdGhpcy5fZWxUSGVhZC5hcHBlbmRDaGlsZCh0aCk7XHJcbiAgICB9XHJcbiAgICBhZGRMaW5lKGxpbmUpIHtcclxuICAgICAgICBsZXQgdHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidHJcIik7XHJcbiAgICAgICAgZm9yIChjb25zdCBjZWxsIG9mIGxpbmUpIHtcclxuICAgICAgICAgICAgbGV0IHRkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRkXCIpO1xyXG4gICAgICAgICAgICB0ZC5pbm5lclRleHQgPSBjZWxsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRyLmFwcGVuZENoaWxkKHRkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5fZWxUQm9keS5hcHBlbmRDaGlsZCh0cik7XHJcbiAgICB9XHJcbiAgICBkZWxMaW5lcygpIHtcclxuICAgICAgICB0aGlzLl9lbFRCb2R5LmlubmVySFRNTCA9IFwiXCI7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5UYWJsZSA9IFFpblRhYmxlO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tdGFibGUuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5UYWJzID0gdm9pZCAwO1xyXG5jb25zdCBxaW5wZWxfcmVzXzEgPSByZXF1aXJlKFwicWlucGVsLXJlc1wiKTtcclxuY29uc3QgcWluX2J1dHRvbl8xID0gcmVxdWlyZShcIi4vcWluLWJ1dHRvblwiKTtcclxuY29uc3QgcWluX2NvbHVtbl8xID0gcmVxdWlyZShcIi4vcWluLWNvbHVtblwiKTtcclxuY29uc3QgcWluX2xhYmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tbGFiZWxcIik7XHJcbmNvbnN0IHFpbl9saW5lXzEgPSByZXF1aXJlKFwiLi9xaW4tbGluZVwiKTtcclxuY29uc3QgcWluX3BhbmVsXzEgPSByZXF1aXJlKFwiLi9xaW4tcGFuZWxcIik7XHJcbmNsYXNzIFFpblRhYnMgZXh0ZW5kcyBxaW5fY29sdW1uXzEuUWluQ29sdW1uIHtcclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuX3FpblRhYnMgPSBuZXcgcWluX2xpbmVfMS5RaW5MaW5lKCk7XHJcbiAgICAgICAgdGhpcy5fcWluUGFuZWwgPSBuZXcgcWluX3BhbmVsXzEuUWluUGFuZWwoKTtcclxuICAgICAgICB0aGlzLl90YWJzID0gW107XHJcbiAgICAgICAgdGhpcy5fcWluVGFicy5pbnN0YWxsKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX3FpblBhbmVsLmluc3RhbGwodGhpcyk7XHJcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFiIG9mIG9wdGlvbnMgPT09IG51bGwgfHwgb3B0aW9ucyA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3B0aW9ucy5pbml0aWFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZFRhYih0YWIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0IHFpblRhYnMoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblRhYnM7XHJcbiAgICB9XHJcbiAgICBnZXQgcWluUGFuZWwoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3FpblBhbmVsO1xyXG4gICAgfVxyXG4gICAgYWRkVGFiKHRhYikge1xyXG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBxaW5fYnV0dG9uXzEuUWluQnV0dG9uKHsgbGFiZWw6IG5ldyBxaW5fbGFiZWxfMS5RaW5MYWJlbCh0YWIudGl0bGUpIH0pO1xyXG4gICAgICAgIGJ1dHRvbi5zdHlsZS5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xyXG4gICAgICAgIGJ1dHRvbi5hZGRBY3Rpb24oKHFpbkV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGJ1dHRvbi5pbnN0YWxsKHRoaXMuX3FpblRhYnMpO1xyXG4gICAgICAgIGxldCBmaXJzdCA9IHRoaXMuX3RhYnMubGVuZ3RoID09IDA7XHJcbiAgICAgICAgbGV0IHRhYlJlZiA9IHtcclxuICAgICAgICAgICAgdGl0bGU6IHRhYi50aXRsZSxcclxuICAgICAgICAgICAgdmlld2VyOiB0YWIudmlld2VyLFxyXG4gICAgICAgICAgICBidXR0b24sXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLl90YWJzLnB1c2godGFiUmVmKTtcclxuICAgICAgICBpZiAoZmlyc3QpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Vmlld2VyKHRhYi52aWV3ZXIpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNob3dUYWIodGl0bGUpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHRhYiBvZiB0aGlzLl90YWJzKSB7XHJcbiAgICAgICAgICAgIGlmICh0YWIudGl0bGUgPT0gdGl0bGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ZpZXdlcih0YWIudmlld2VyKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2hvd1ZpZXdlcih2aWV3ZXIpIHtcclxuICAgICAgICB0aGlzLl9xaW5QYW5lbC5jbGVhckNoaWxkcmVuKCk7XHJcbiAgICAgICAgdmlld2VyLmluc3RhbGwodGhpcy5fcWluUGFuZWwpO1xyXG4gICAgICAgIGZvciAoY29uc3QgdGFiIG9mIHRoaXMuX3RhYnMpIHtcclxuICAgICAgICAgICAgaWYgKHRhYi52aWV3ZXIgPT0gdmlld2VyKSB7XHJcbiAgICAgICAgICAgICAgICB0YWIuYnV0dG9uLnN0eWxlLnB1dEFzQmFja2dyb3VuZChxaW5wZWxfcmVzXzEuUWluU2tpbi5zdHlsZXMuQ29sb3JBY3RpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGFiLmJ1dHRvbi5zdHlsZS5wdXRBc0JhY2tncm91bmQocWlucGVsX3Jlc18xLlFpblNraW4uc3R5bGVzLkNvbG9ySW5hY3RpdmUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluVGFicyA9IFFpblRhYnM7XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10YWJzLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluVG9vbHMgPSB2b2lkIDA7XHJcbmNvbnN0IHJlZlFpbnBlbCA9IHdpbmRvdy5mcmFtZUVsZW1lbnQucWlucGVsO1xyXG5mdW5jdGlvbiBxaW5wZWwoKSB7XHJcbiAgICByZXR1cm4gcmVmUWlucGVsO1xyXG59XHJcbmV4cG9ydHMuUWluVG9vbHMgPSB7XHJcbiAgICBxaW5wZWwsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi10b29scy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xyXG5leHBvcnRzLlFpblNvdWwgPSBleHBvcnRzLlFpblNraW4gPSBleHBvcnRzLlFpblN0eWxlcyA9IGV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IGV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkJvZHkgPSBleHBvcnRzLlFpbkFybSA9IGV4cG9ydHMuUWluUG9pbnRlckNhbGxzID0gZXhwb3J0cy5RaW5XYWl0ZXJzID0gZXhwb3J0cy5RaW5FdmVudCA9IHZvaWQgMDtcclxudmFyIHFpbl9hcm1fMSA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkV2ZW50XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzEuUWluRXZlbnQ7IH0gfSk7XHJcbnZhciBxaW5fYXJtXzIgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5XYWl0ZXJzXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5fYXJtXzIuUWluV2FpdGVyczsgfSB9KTtcclxudmFyIHFpbl9hcm1fMyA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblBvaW50ZXJDYWxsc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV8zLlFpblBvaW50ZXJDYWxsczsgfSB9KTtcclxudmFyIHFpbl9hcm1fNCA9IHJlcXVpcmUoXCIuL3Fpbi1hcm1cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkFybVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2FybV80LlFpbkFybTsgfSB9KTtcclxudmFyIHFpbl9ib2R5XzEgPSByZXF1aXJlKFwiLi9xaW4tYm9keVwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluQm9keVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2JvZHlfMS5RaW5Cb2R5OyB9IH0pO1xyXG52YXIgcWluX2Zvb3RfMSA9IHJlcXVpcmUoXCIuL3Fpbi1mb290XCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5GaWxlc05hdHVyZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMS5RaW5GaWxlc05hdHVyZTsgfSB9KTtcclxudmFyIHFpbl9mb290XzIgPSByZXF1aXJlKFwiLi9xaW4tZm9vdFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluRmlsZXNPcGVyYXRpb25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzIuUWluRmlsZXNPcGVyYXRpb247IH0gfSk7XHJcbnZhciBxaW5fZm9vdF8zID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZpbGVzRGVzY3JpcHRvclwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2Zvb3RfMy5RaW5GaWxlc0Rlc2NyaXB0b3I7IH0gfSk7XHJcbnZhciBxaW5fZm9vdF80ID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkZvb3RcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9mb290XzQuUWluRm9vdDsgfSB9KTtcclxudmFyIHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluUG9pbnRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9oZWFkXzEuUWluUG9pbnQ7IH0gfSk7XHJcbnZhciBxaW5faGVhZF8yID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkRpbWVuc2lvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMi5RaW5EaW1lbnNpb247IH0gfSk7XHJcbnZhciBxaW5faGVhZF8zID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkJvdW5kc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX2hlYWRfMy5RaW5Cb3VuZHM7IH0gfSk7XHJcbnZhciBxaW5faGVhZF80ID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpbkdyYW5kZXVyXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF80LlFpbkdyYW5kZXVyOyB9IH0pO1xyXG52YXIgcWluX2hlYWRfNSA9IHJlcXVpcmUoXCIuL3Fpbi1oZWFkXCIpO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJRaW5IZWFkXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBxaW5faGVhZF81LlFpbkhlYWQ7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl8xID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblN0eWxlc1wiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NraW5fMS5RaW5TdHlsZXM7IH0gfSk7XHJcbnZhciBxaW5fc2tpbl8yID0gcmVxdWlyZShcIi4vcWluLXNraW5cIik7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlFpblNraW5cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHFpbl9za2luXzIuUWluU2tpbjsgfSB9KTtcclxudmFyIHFpbl9zb3VsXzEgPSByZXF1aXJlKFwiLi9xaW4tc291bFwiKTtcclxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiUWluU291bFwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcWluX3NvdWxfMS5RaW5Tb3VsOyB9IH0pO1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcclxuZXhwb3J0cy5RaW5Bcm0gPSBleHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IGV4cG9ydHMuUWluV2FpdGVycyA9IGV4cG9ydHMuUWluRXZlbnQgPSB2b2lkIDA7XHJcbmNvbnN0IHFpbl9za2luXzEgPSByZXF1aXJlKFwiLi9xaW4tc2tpblwiKTtcclxuY2xhc3MgUWluRXZlbnQge1xyXG4gICAgY29uc3RydWN0b3IoaXNTdGFydCwgZXZlbnQpIHtcclxuICAgICAgICB0aGlzLl9ldmVudCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5fcG9pbnQgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuX3N0b3AgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLl9zdGFydCA9IGlzU3RhcnQ7XHJcbiAgICAgICAgdGhpcy5fZXZlbnQgPSBldmVudDtcclxuICAgICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8IGV2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICB0aGlzLl9wb2ludCA9IG1ha2VFdmVudFBvaW50ZXIoaXNTdGFydCwgZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldCBpc1N0YXJ0KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9zdGFydDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tT3JpZ2luKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBmcm9tVHlwaW5nKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBnZXQgZnJvbVBvaW50aW5nKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8IHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCk7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzQWx0KCkge1xyXG4gICAgICAgIHZhciBfYTtcclxuICAgICAgICByZXR1cm4gKF9hID0gdGhpcy5fZXZlbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hbHRLZXk7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzQ3RybCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX2V2ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY3RybEtleTtcclxuICAgIH1cclxuICAgIGdldCBoYXNTaGlmdCgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX2V2ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc2hpZnRLZXk7XHJcbiAgICB9XHJcbiAgICBnZXQgaGFzTWV0YSgpIHtcclxuICAgICAgICB2YXIgX2E7XHJcbiAgICAgICAgcmV0dXJuIChfYSA9IHRoaXMuX2V2ZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubWV0YUtleTtcclxuICAgIH1cclxuICAgIGdldCBrZXlUeXBlZCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC5rZXk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRW50ZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNLZXlFbnRlcih0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0VzY2FwZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc0tleUVzY2FwZSh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc1NwYWNlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzS2V5U3BhY2UodGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNEb3VibGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRQb2ludGVyRG91YmxlKHRoaXMuX3N0YXJ0LCB0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0xvbmcoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRXZlbnRQb2ludGVyTG9uZyh0aGlzLl9zdGFydCwgdGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3BvaW50O1xyXG4gICAgfVxyXG4gICAgZ2V0IHBvaW50WCgpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ldmVudC5jbGllbnRYO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gKHRoaXMuX2V2ZW50LnRvdWNoZXMubGVuZ3RoIC8gMikgfCAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LnRvdWNoZXNbaW5kZXhdLmNsaWVudFg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcbiAgICBnZXQgcG9pbnRZKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2V2ZW50LmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSAodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggLyAyKSB8IDA7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZXZlbnQudG91Y2hlc1tpbmRleF0uY2xpZW50WTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuICAgIGdldCBpc0ZpcnN0QnV0dG9uKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIE1vdXNlRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRmlyc3RCdXR0b24odGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNNaWRkbGVCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNNaWRkbGVCdXR0b24odGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNTZWNvbmRCdXR0b24oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNTZWNvbmRCdXR0b24odGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNPbmVGaW5nZXIoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNPbmVGaW5nZXIodGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNUd29GaW5nZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzVHdvRmluZ2Vycyh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc1RocmVlRmluZ2VycygpIHtcclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc1RocmVlRmluZ2Vycyh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc0ZvdXJGaW5nZXJzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzRm91ckZpbmdlcnModGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgaXNQcmltYXJ5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzUHJpbWFyeUtleSh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzUHJpbWFyeVBvaW50KHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzQXV4aWxpYXJ5KCkge1xyXG4gICAgICAgIGlmICh0aGlzLl9zdGFydCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9ldmVudCBpbnN0YW5jZW9mIEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzQXV4aWxpYXJ5S2V5KHRoaXMuX2V2ZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBNb3VzZUV2ZW50IHx8XHJcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gaXNBdXhpbGlhcnlQb2ludCh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGdldCBpc1NlY29uZGFyeSgpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3RhcnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5fZXZlbnQgaW5zdGFuY2VvZiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpc1NlY29uZGFyeUtleSh0aGlzLl9ldmVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMuX2V2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCB8fFxyXG4gICAgICAgICAgICB0aGlzLl9ldmVudCBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGlzU2Vjb25kYXJ5UG9pbnQodGhpcy5fZXZlbnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgc3RvcCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fc3RvcDtcclxuICAgIH1cclxuICAgIGNvbnN1bWVkKCkge1xyXG4gICAgICAgIHRoaXMuX3N0b3AgPSB0cnVlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluRXZlbnQgPSBRaW5FdmVudDtcclxuY2xhc3MgUWluV2FpdGVycyB7XHJcbiAgICBjb25zdHJ1Y3Rvcihpbml0aWFsKSB7XHJcbiAgICAgICAgdGhpcy53YWl0ZXJzID0gaW5pdGlhbCA/IGluaXRpYWwgOiBbXTtcclxuICAgIH1cclxuICAgIGFkZFdhaXRlcih3YWl0ZXIpIHtcclxuICAgICAgICB0aGlzLndhaXRlcnMucHVzaCh3YWl0ZXIpO1xyXG4gICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgfVxyXG4gICAgaGFzV2FpdGVyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLndhaXRlcnMubGVuZ3RoID4gMDtcclxuICAgIH1cclxuICAgIHNlbmRXYWl0ZXJzKHJlc3VsdCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qgd2FpdGVyIG9mIHRoaXMud2FpdGVycykge1xyXG4gICAgICAgICAgICB3YWl0ZXIocmVzdWx0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5XYWl0ZXJzID0gUWluV2FpdGVycztcclxuY2xhc3MgUWluUG9pbnRlckNhbGxzIHtcclxufVxyXG5leHBvcnRzLlFpblBvaW50ZXJDYWxscyA9IFFpblBvaW50ZXJDYWxscztcclxuZnVuY3Rpb24gc3RvcEV2ZW50KGV2ZW50KSB7XHJcbiAgICBpZiAoZXZlbnQucHJldmVudERlZmF1bHQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgaWYgKGV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgfVxyXG4gICAgZXZlbnQuY2FuY2VsQnViYmxlID0gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG52YXIgbGFzdEV2ZW50UG9pbnRlciA9IG51bGw7XHJcbmZ1bmN0aW9uIG1ha2VFdmVudFBvaW50ZXIoaXNTdGFydCwgZXYpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHtcclxuICAgICAgICBwb3NYOiAwLFxyXG4gICAgICAgIHBvc1k6IDAsXHJcbiAgICB9O1xyXG4gICAgaWYgKGV2IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmIChldi5jbGllbnRYIHx8IGV2LmNsaWVudFkpIHtcclxuICAgICAgICAgICAgcmVzdWx0LnBvc1ggPSBldi5jbGllbnRYO1xyXG4gICAgICAgICAgICByZXN1bHQucG9zWSA9IGV2LmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXYgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgaWYgKGV2LnRvdWNoZXMgJiYgdGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IodGhpcy5fZXZlbnQudG91Y2hlcy5sZW5ndGggLyAyKTtcclxuICAgICAgICAgICAgcmVzdWx0LnBvc1ggPSBldi50b3VjaGVzW2luZGV4XS5jbGllbnRYO1xyXG4gICAgICAgICAgICByZXN1bHQucG9zWSA9IGV2LnRvdWNoZXNbaW5kZXhdLmNsaWVudFk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKGlzU3RhcnQpIHtcclxuICAgICAgICBsYXN0RXZlbnRQb2ludGVyID0gZXY7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIGlzRXZlbnRQb2ludGVyRG91YmxlKGlzU3RhcnQsIGV2KSB7XHJcbiAgICBpZiAoIWlzU3RhcnQgfHwgbGFzdEV2ZW50UG9pbnRlciA9PSBudWxsIHx8IGV2ID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBjb25zdCB0aW1lRGlmID0gZXYudGltZVN0YW1wIC0gbGFzdEV2ZW50UG9pbnRlci50aW1lU3RhbXA7XHJcbiAgICByZXR1cm4gdGltZURpZiA8IDQ1MDtcclxufVxyXG5mdW5jdGlvbiBpc0V2ZW50UG9pbnRlckxvbmcoaXNTdGFydCwgZXYpIHtcclxuICAgIGlmICghaXNTdGFydCB8fCBsYXN0RXZlbnRQb2ludGVyID09IG51bGwgfHwgZXYgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRpbWVEaWYgPSBldi50aW1lU3RhbXAgLSBsYXN0RXZlbnRQb2ludGVyLnRpbWVTdGFtcDtcclxuICAgIHJldHVybiB0aW1lRGlmID4gODQwO1xyXG59XHJcbmZ1bmN0aW9uIGlzS2V5SW5MaXN0KGV2LCBsaXN0KSB7XHJcbiAgICBsZXQga2V5TG93ZXIgPSBldi5rZXkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBsaXN0LmluZGV4T2Yoa2V5TG93ZXIpID4gLTE7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFbnRlcihldikge1xyXG4gICAgcmV0dXJuIGlzS2V5SW5MaXN0KGV2LCBbXCJlbnRlclwiLCBcInJldHVyblwiXSkgfHwgZXYua2V5Q29kZSA9PT0gMTM7XHJcbn1cclxuZnVuY3Rpb24gaXNLZXlFc2NhcGUoZXYpIHtcclxuICAgIHJldHVybiBpc0tleUluTGlzdChldiwgW1wiZXNjXCIsIFwiZXNjYXBlXCJdKSB8fCBldi5rZXlDb2RlID09PSAyNztcclxufVxyXG5mdW5jdGlvbiBpc0tleVNwYWNlKGV2KSB7XHJcbiAgICByZXR1cm4gaXNLZXlJbkxpc3QoZXYsIFtcIiBcIiwgXCJzcGFjZVwiLCBcInNwYWNlYmFyXCJdKSB8fCBldi5rZXlDb2RlID09PSAzMjtcclxufVxyXG5mdW5jdGlvbiBpc0ZpcnN0QnV0dG9uKGV2KSB7XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi5idXR0b24pID09IDA7XHJcbn1cclxuZnVuY3Rpb24gaXNNaWRkbGVCdXR0b24oZXYpIHtcclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LmJ1dHRvbikgPT0gMTtcclxufVxyXG5mdW5jdGlvbiBpc1NlY29uZEJ1dHRvbihldikge1xyXG4gICAgcmV0dXJuIChldiA9PT0gbnVsbCB8fCBldiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZXYuYnV0dG9uKSA9PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGlzT25lRmluZ2VyKGV2KSB7XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMTtcclxufVxyXG5mdW5jdGlvbiBpc1R3b0ZpbmdlcnMoZXYpIHtcclxuICAgIHJldHVybiAoZXYgPT09IG51bGwgfHwgZXYgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGV2LnRvdWNoZXMubGVuZ3RoKSA9PSAyO1xyXG59XHJcbmZ1bmN0aW9uIGlzVGhyZWVGaW5nZXJzKGV2KSB7XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gMztcclxufVxyXG5mdW5jdGlvbiBpc0ZvdXJGaW5nZXJzKGV2KSB7XHJcbiAgICByZXR1cm4gKGV2ID09PSBudWxsIHx8IGV2ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBldi50b3VjaGVzLmxlbmd0aCkgPT0gNDtcclxufVxyXG5mdW5jdGlvbiBpc1ByaW1hcnlLZXkoZXYpIHtcclxuICAgIHJldHVybiBpc0tleUVudGVyKGV2KTtcclxufVxyXG5mdW5jdGlvbiBpc0F1eGlsaWFyeUtleShldikge1xyXG4gICAgcmV0dXJuIGV2LmN0cmxLZXkgJiYgZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzU2Vjb25kYXJ5S2V5KGV2KSB7XHJcbiAgICByZXR1cm4gZXYuY3RybEtleSAmJiAhZXYuYWx0S2V5ICYmIGlzS2V5U3BhY2UoZXYpO1xyXG59XHJcbmZ1bmN0aW9uIGlzUHJpbWFyeVBvaW50KGV2KSB7XHJcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzRmlyc3RCdXR0b24oZXYpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAoZXYgaW5zdGFuY2VvZiBUb3VjaEV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzT25lRmluZ2VyKGV2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBpc0F1eGlsaWFyeVBvaW50KGV2KSB7XHJcbiAgICBpZiAoZXYgaW5zdGFuY2VvZiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGlzTWlkZGxlQnV0dG9uKGV2KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGV2IGluc3RhbmNlb2YgVG91Y2hFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBpc1RocmVlRmluZ2Vycyhldik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZnVuY3Rpb24gaXNTZWNvbmRhcnlQb2ludChldikge1xyXG4gICAgaWYgKGV2IGluc3RhbmNlb2YgTW91c2VFdmVudCkge1xyXG4gICAgICAgIHJldHVybiBpc1NlY29uZEJ1dHRvbihldik7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChldiBpbnN0YW5jZW9mIFRvdWNoRXZlbnQpIHtcclxuICAgICAgICByZXR1cm4gaXNUd29GaW5nZXJzKGV2KTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb24oZWxlbWVudCwgYWN0aW9uKSB7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGFjdEtleURvd24pO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgYWN0S2V5VXApO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGFjdE1vdXNlRG93bik7XHJcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIGFjdE1vdXNlVXApO1xyXG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCBhY3RUb3VjaFN0YXJ0KTtcclxuICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIGFjdFRvdWNoRW5kKTtcclxuICAgIGZ1bmN0aW9uIGFjdEtleURvd24oZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RLZXlVcChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZURvd24oZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RNb3VzZVVwKGV2KSB7XHJcbiAgICAgICAgbGV0IHFpbkV2ZW50ID0gbmV3IFFpbkV2ZW50KGZhbHNlLCBldik7XHJcbiAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuc3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIGFjdFRvdWNoU3RhcnQoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBhY3RUb3VjaEVuZChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xyXG4gICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgaWYgKHFpbkV2ZW50LnN0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkQWN0aW9uTWFpbihlbGVtZW50LCBhY3Rpb24pIHtcclxuICAgIGVsZW1lbnQub25rZXl1cCA9IGFjdEtleVVwO1xyXG4gICAgZWxlbWVudC5vbm1vdXNldXAgPSBhY3RNb3VzZVVwO1xyXG4gICAgZWxlbWVudC5vbnRvdWNoZW5kID0gYWN0VG91Y2hFbmQ7XHJcbiAgICBmdW5jdGlvbiBhY3RLZXlVcChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0TW91c2VVcChldikge1xyXG4gICAgICAgIGxldCBxaW5FdmVudCA9IG5ldyBRaW5FdmVudChmYWxzZSwgZXYpO1xyXG4gICAgICAgIGlmIChxaW5FdmVudC5pc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgYWN0aW9uKHFpbkV2ZW50KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZnVuY3Rpb24gYWN0VG91Y2hFbmQoZXYpIHtcclxuICAgICAgICBsZXQgcWluRXZlbnQgPSBuZXcgUWluRXZlbnQoZmFsc2UsIGV2KTtcclxuICAgICAgICBpZiAocWluRXZlbnQuaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgIGFjdGlvbihxaW5FdmVudCk7XHJcbiAgICAgICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRBY3Rpb25zKGVsZW1lbnRzLCBhY3Rpb24pIHtcclxuICAgIGZvciAoY29uc3QgZWxlbWVudCBvZiBlbGVtZW50cykge1xyXG4gICAgICAgIGFkZEFjdGlvbihlbGVtZW50LCBhY3Rpb24pO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIHB1dEFjdGlvblByb3h5KGRlc3RpbnksIG9yaWdpbnMpIHtcclxuICAgIGZvciAoY29uc3Qgb3JpZ2luIG9mIG9yaWdpbnMpIHtcclxuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGRlc3RpbnkuZGlzcGF0Y2hFdmVudChlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBvcmlnaW4uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgKGUpID0+IHtcclxuICAgICAgICAgICAgZGVzdGlueS5kaXNwYXRjaEV2ZW50KGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIG9yaWdpbi5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgb3JpZ2luLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCAoZSkgPT4ge1xyXG4gICAgICAgICAgICBkZXN0aW55LmRpc3BhdGNoRXZlbnQoZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gYWRkTW92ZXIoc291cmNlcywgdGFyZ2V0LCBkcmFnQ2FsbHMpIHtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFkgPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0UG9zWCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRQb3NZID0gMDtcclxuICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XHJcbiAgICAgICAgc291cmNlLm9ubW91c2Vkb3duID0gb25Nb3ZlckluaXQ7XHJcbiAgICAgICAgc291cmNlLm9udG91Y2hzdGFydCA9IG9uTW92ZXJJbml0O1xyXG4gICAgICAgIHNvdXJjZS5vbmRyYWdzdGFydCA9IHN0b3BFdmVudDtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uTW92ZXJJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50UG9pbnRlckxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRQb3NYID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmxlZnQsIDEwKTtcclxuICAgICAgICBkcmFnSW5pdFBvc1kgPSBwYXJzZUludCh0YXJnZXQuc3R5bGUudG9wLCAxMCk7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvbk1vdmVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uTW92ZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvbk1vdmVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25Nb3ZlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdmVyTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRFdmVudFg7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGRyYWdGaW5hbFggPSBkcmFnSW5pdFBvc1ggKyBkcmFnRGlmWDtcclxuICAgICAgICB2YXIgZHJhZ0ZpbmFsWSA9IGRyYWdJbml0UG9zWSArIGRyYWdEaWZZO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5sZWZ0ID0gKGRyYWdGaW5hbFggPiAwID8gZHJhZ0ZpbmFsWCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS50b3AgPSAoZHJhZ0ZpbmFsWSA+IDAgPyBkcmFnRmluYWxZIDogMCkgKyBcInB4XCI7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvbk1vdmVyQ2xvc2UoZXYpIHtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGFkZFJlc2l6ZXIoc291cmNlcywgdGFyZ2V0LCBkcmFnQ2FsbHMpIHtcclxuICAgIHZhciBkcmFnSW5pdEV2ZW50WCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRFdmVudFkgPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0V2lkdGggPSAwO1xyXG4gICAgdmFyIGRyYWdJbml0SGVpZ2h0ID0gMDtcclxuICAgIGZvciAobGV0IHNvdXJjZSBvZiBzb3VyY2VzKSB7XHJcbiAgICAgICAgc291cmNlLm9ubW91c2Vkb3duID0gb25SZXNpemVySW5pdDtcclxuICAgICAgICBzb3VyY2Uub250b3VjaHN0YXJ0ID0gb25SZXNpemVySW5pdDtcclxuICAgICAgICBzb3VyY2Uub25kcmFnc3RhcnQgPSBzdG9wRXZlbnQ7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJJbml0KGV2KSB7XHJcbiAgICAgICAgaWYgKGRvY3VtZW50Lm9ubW91c2Vtb3ZlIHx8IGRvY3VtZW50Lm9udG91Y2htb3ZlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Eb3VibGUgJiYgaXNFdmVudFBvaW50ZXJEb3VibGUodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkRvdWJsZSgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uTG9uZyAmJiBpc0V2ZW50UG9pbnRlckxvbmcodHJ1ZSwgZXYpKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkxvbmcoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBwb2ludGVyID0gbWFrZUV2ZW50UG9pbnRlcih0cnVlLCBldik7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFggPSBwb2ludGVyLnBvc1g7XHJcbiAgICAgICAgZHJhZ0luaXRFdmVudFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ0luaXRXaWR0aCA9IHBhcnNlSW50KHRhcmdldC5zdHlsZS53aWR0aCwgMTApO1xyXG4gICAgICAgIGRyYWdJbml0SGVpZ2h0ID0gcGFyc2VJbnQodGFyZ2V0LnN0eWxlLmhlaWdodCwgMTApO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2htb3ZlID0gb25SZXNpemVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uUmVzaXplck1vdmU7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG9uUmVzaXplckNsb3NlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG9uUmVzaXplckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblJlc2l6ZXJNb3ZlKGV2KSB7XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIoZmFsc2UsIGV2KTtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRGlmWCA9IHBvaW50ZXIucG9zWCAtIGRyYWdJbml0RXZlbnRYO1xyXG4gICAgICAgIHZhciBmcmFtZURyYWdEaWZZID0gcG9pbnRlci5wb3NZIC0gZHJhZ0luaXRFdmVudFk7XHJcbiAgICAgICAgdmFyIGZyYW1lRHJhZ0ZpbmFsV2lkdGggPSBkcmFnSW5pdFdpZHRoICsgZnJhbWVEcmFnRGlmWDtcclxuICAgICAgICB2YXIgZnJhbWVEcmFnRmluYWxIZWlnaHQgPSBkcmFnSW5pdEhlaWdodCArIGZyYW1lRHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnN0eWxlLndpZHRoID1cclxuICAgICAgICAgICAgKGZyYW1lRHJhZ0ZpbmFsV2lkdGggPiAwID8gZnJhbWVEcmFnRmluYWxXaWR0aCA6IDApICsgXCJweFwiO1xyXG4gICAgICAgIHRhcmdldC5zdHlsZS5oZWlnaHQgPVxyXG4gICAgICAgICAgICAoZnJhbWVEcmFnRmluYWxIZWlnaHQgPiAwID8gZnJhbWVEcmFnRmluYWxIZWlnaHQgOiAwKSArIFwicHhcIjtcclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbk1vdmUpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uTW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxuICAgIGZ1bmN0aW9uIG9uUmVzaXplckNsb3NlKGV2KSB7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2Vtb3ZlID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNoZW5kID0gbnVsbDtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNldXAgPSBudWxsO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5zaG93QWxsSUZyYW1lcygpO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5jbGVhclNlbGVjdGlvbigpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRW5kKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbkVuZCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RvcEV2ZW50KGV2KTtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBhZGRTY3JvbGxlcih0YXJnZXQsIGRyYWdDYWxscykge1xyXG4gICAgdmFyIGRyYWdJbml0WCA9IDA7XHJcbiAgICB2YXIgZHJhZ0luaXRZID0gMDtcclxuICAgIHZhciBkcmFnU2Nyb2xsWCA9IDA7XHJcbiAgICB2YXIgZHJhZ1Njcm9sbFkgPSAwO1xyXG4gICAgdGFyZ2V0Lm9uZHJhZ3N0YXJ0ID0gc3RvcEV2ZW50O1xyXG4gICAgdGFyZ2V0Lm9udG91Y2hzdGFydCA9IG9uU2Nyb2xsZXJJbml0O1xyXG4gICAgdGFyZ2V0Lm9ubW91c2Vkb3duID0gb25TY3JvbGxlckluaXQ7XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVySW5pdChldikge1xyXG4gICAgICAgIGlmIChkb2N1bWVudC5vbm1vdXNlbW92ZSB8fCBkb2N1bWVudC5vbnRvdWNobW92ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uRG91YmxlICYmIGlzRXZlbnRQb2ludGVyRG91YmxlKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Eb3VibGUoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZHJhZ0NhbGxzICYmIGRyYWdDYWxscy5vbkxvbmcgJiYgaXNFdmVudFBvaW50ZXJMb25nKHRydWUsIGV2KSkge1xyXG4gICAgICAgICAgICBkcmFnQ2FsbHMub25Mb25nKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9pbnRlciA9IG1ha2VFdmVudFBvaW50ZXIodHJ1ZSwgZXYpO1xyXG4gICAgICAgIGRyYWdJbml0WCA9IHBvaW50ZXIucG9zWDtcclxuICAgICAgICBkcmFnSW5pdFkgPSBwb2ludGVyLnBvc1k7XHJcbiAgICAgICAgZHJhZ1Njcm9sbFggPSB0YXJnZXQuc2Nyb2xsTGVmdDtcclxuICAgICAgICBkcmFnU2Nyb2xsWSA9IHRhcmdldC5zY3JvbGxUb3A7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaG1vdmUgPSBvblNjcm9sbGVyTW92ZTtcclxuICAgICAgICBkb2N1bWVudC5vbm1vdXNlbW92ZSA9IG9uU2Nyb2xsZXJNb3ZlO1xyXG4gICAgICAgIGRvY3VtZW50Lm9udG91Y2hlbmQgPSBvblNjcm9sbGVyQ2xvc2U7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZXVwID0gb25TY3JvbGxlckNsb3NlO1xyXG4gICAgICAgIHFpbl9za2luXzEuUWluU2tpbi5oaWRlQWxsSUZyYW1lcygpO1xyXG4gICAgICAgIGlmIChkcmFnQ2FsbHMgJiYgZHJhZ0NhbGxzLm9uU3RhcnQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uU3RhcnQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyTW92ZShldikge1xyXG4gICAgICAgIGNvbnN0IHBvaW50ZXIgPSBtYWtlRXZlbnRQb2ludGVyKGZhbHNlLCBldik7XHJcbiAgICAgICAgdmFyIGRyYWdEaWZYID0gcG9pbnRlci5wb3NYIC0gZHJhZ0luaXRYO1xyXG4gICAgICAgIHZhciBkcmFnRGlmWSA9IHBvaW50ZXIucG9zWSAtIGRyYWdJbml0WTtcclxuICAgICAgICB2YXIgZHJhZ05ld1ggPSBkcmFnU2Nyb2xsWCAtIGRyYWdEaWZYO1xyXG4gICAgICAgIHZhciBkcmFnTmV3WSA9IGRyYWdTY3JvbGxZIC0gZHJhZ0RpZlk7XHJcbiAgICAgICAgdGFyZ2V0LnNjcm9sbFRvKGRyYWdOZXdYLCBkcmFnTmV3WSk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25Nb3ZlKSB7XHJcbiAgICAgICAgICAgIGRyYWdDYWxscy5vbk1vdmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHN0b3BFdmVudChldik7XHJcbiAgICB9XHJcbiAgICBmdW5jdGlvbiBvblNjcm9sbGVyQ2xvc2UoZXYpIHtcclxuICAgICAgICBkb2N1bWVudC5vbnRvdWNobW92ZSA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub250b3VjaGVuZCA9IG51bGw7XHJcbiAgICAgICAgZG9jdW1lbnQub25tb3VzZW1vdmUgPSBudWxsO1xyXG4gICAgICAgIGRvY3VtZW50Lm9ubW91c2V1cCA9IG51bGw7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLnNob3dBbGxJRnJhbWVzKCk7XHJcbiAgICAgICAgcWluX3NraW5fMS5RaW5Ta2luLmNsZWFyU2VsZWN0aW9uKCk7XHJcbiAgICAgICAgaWYgKGRyYWdDYWxscyAmJiBkcmFnQ2FsbHMub25FbmQpIHtcclxuICAgICAgICAgICAgZHJhZ0NhbGxzLm9uRW5kKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdG9wRXZlbnQoZXYpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydHMuUWluQXJtID0ge1xyXG4gICAgc3RvcEV2ZW50LFxyXG4gICAgbWFrZUV2ZW50UG9pbnRlcixcclxuICAgIGlzRXZlbnRQb2ludGVyRG91YmxlLFxyXG4gICAgaXNFdmVudFBvaW50ZXJMb25nLFxyXG4gICAgaXNLZXlJbkxpc3QsXHJcbiAgICBpc0tleUVudGVyLFxyXG4gICAgaXNLZXlTcGFjZSxcclxuICAgIGlzRmlyc3RCdXR0b24sXHJcbiAgICBpc01pZGRsZUJ1dHRvbixcclxuICAgIGlzU2Vjb25kQnV0dG9uLFxyXG4gICAgaXNPbmVGaW5nZXIsXHJcbiAgICBpc1R3b0ZpbmdlcnMsXHJcbiAgICBpc1RocmVlRmluZ2VycyxcclxuICAgIGlzRm91ckZpbmdlcnMsXHJcbiAgICBpc1ByaW1hcnlQb2ludCxcclxuICAgIGlzQXV4aWxpYXJ5UG9pbnQsXHJcbiAgICBpc1NlY29uZGFyeVBvaW50LFxyXG4gICAgYWRkQWN0aW9uLFxyXG4gICAgYWRkQWN0aW9uTWFpbixcclxuICAgIGFkZEFjdGlvbnMsXHJcbiAgICBwdXRBY3Rpb25Qcm94eSxcclxuICAgIGFkZE1vdmVyLFxyXG4gICAgYWRkUmVzaXplcixcclxuICAgIGFkZFNjcm9sbGVyLFxyXG59O1xyXG4vLyMgc291cmNlTWFwcGluZ1VSTD1xaW4tYXJtLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluQm9keSA9IHZvaWQgMDtcclxuZnVuY3Rpb24gZ2V0Q29va2llKG5hbWUsIG9yRGVmYXVsdCkge1xyXG4gICAgbGV0IGNvb2tpZXMgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoXCI7XCIpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb29raWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgbGV0IGNvb2tpZVBhaXIgPSBjb29raWVzW2ldLnNwbGl0KFwiPVwiKTtcclxuICAgICAgICBpZiAobmFtZSA9PSBkZWNvZGVVUklDb21wb25lbnQoY29va2llUGFpclswXSkudHJpbSgpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWNvZGVVUklDb21wb25lbnQoY29va2llUGFpclsxXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9yRGVmYXVsdDtcclxufVxyXG5mdW5jdGlvbiBzZXRDb29raWUobmFtZSwgdmFsdWUsIG9wdGlvbnMgPSB7fSkge1xyXG4gICAgb3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiBcIi9cIiB9LCBvcHRpb25zKTtcclxuICAgIGlmICghb3B0aW9ucy5leHBpcmVzKSB7XHJcbiAgICAgICAgbGV0IGRhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSArIDEgKiAyNCAqIDYwICogNjAgKiAxMDAwKTtcclxuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBkYXRlO1xyXG4gICAgfVxyXG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlcyBpbnN0YW5jZW9mIERhdGUpIHtcclxuICAgICAgICBvcHRpb25zLmV4cGlyZXMgPSBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGxldCB1cGRhdGVkQ29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG4gICAgZm9yIChsZXQgb3B0aW9uS2V5IGluIG9wdGlvbnMpIHtcclxuICAgICAgICB1cGRhdGVkQ29va2llICs9IFwiOyBcIiArIG9wdGlvbktleTtcclxuICAgICAgICBsZXQgb3B0aW9uVmFsdWUgPSBvcHRpb25zW29wdGlvbktleV07XHJcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI9XCIgKyBvcHRpb25WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xyXG59XHJcbmZ1bmN0aW9uIGRlbENvb2tpZShuYW1lLCBvcHRpb25zID0ge30pIHtcclxuICAgIGxldCB1cGRhdGVkQ29va2llID0gZW5jb2RlVVJJQ29tcG9uZW50KG5hbWUpICsgXCI9OyAgZXhwaXJlcz1UaHUsIDAxIEphbiAxOTcwIDAwOjAwOjAwIEdNVFwiO1xyXG4gICAgaWYgKG9wdGlvbnMuZXhwaXJlcykge1xyXG4gICAgICAgIGRlbGV0ZSBvcHRpb25zLmV4cGlyZXM7XHJcbiAgICB9XHJcbiAgICBmb3IgKGxldCBvcHRpb25LZXkgaW4gb3B0aW9ucykge1xyXG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gXCI7IFwiICsgb3B0aW9uS2V5O1xyXG4gICAgICAgIGxldCBvcHRpb25WYWx1ZSA9IG9wdGlvbnNbb3B0aW9uS2V5XTtcclxuICAgICAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcclxuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBcIj1cIiArIG9wdGlvblZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XHJcbn1cclxuZnVuY3Rpb24gZ2V0VGV4dExpbmVzKGZyb21UZXh0KSB7XHJcbiAgICByZXR1cm4gZnJvbVRleHQubWF0Y2goL1teXFxyXFxuXSsvZyk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0Q1NWUm93cyhmcm9tVGV4dCwgbmFtZXMpIHtcclxuICAgIHZhciBsaW5lcyA9IGdldFRleHRMaW5lcyhmcm9tVGV4dCk7XHJcbiAgICB2YXIgcmVzdWx0ID0gW107XHJcbiAgICBmb3IgKGxldCBsaW5lIG9mIGxpbmVzKSB7XHJcbiAgICAgICAgbGV0IHJvdyA9ICFuYW1lcyA/IFtdIDoge307XHJcbiAgICAgICAgbGV0IGluc2lkZV9xdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICBsZXQgY29sdW1uX3ZhbHVlID0gXCJcIjtcclxuICAgICAgICBsZXQgY29sdW1uX2luZGV4ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBjaGFyX2luZGV4ID0gMDsgY2hhcl9pbmRleCA8IGxpbmUubGVuZ3RoOyBjaGFyX2luZGV4KyspIHtcclxuICAgICAgICAgICAgbGV0IGFjdHVhbCA9IGxpbmUuY2hhckF0KGNoYXJfaW5kZXgpO1xyXG4gICAgICAgICAgICBpZiAoaW5zaWRlX3F1b3Rlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5leHQgPSBjaGFyX2luZGV4IDwgbGluZS5sZW5ndGggLSAxID8gbGluZS5jaGFyQXQoY2hhcl9pbmRleCArIDEpIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobmV4dCA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSArPSBhY3R1YWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJfaW5kZXgrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZV9xdW90ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFjdHVhbCA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zaWRlX3F1b3RlcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChhY3R1YWwgPT0gXCIsXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgPSB1bm1hc2tTcGVjaWFsQ2hhcnMoY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW5hbWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdy5wdXNoKGNvbHVtbl92YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY29sdW1uX25hbWUgPSBcImNvbF9cIiArIGNvbHVtbl9pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbHVtbl9pbmRleCA8IG5hbWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uX25hbWUgPSBuYW1lc1tjb2x1bW5faW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd1tjb2x1bW5fbmFtZV0gPSBjb2x1bW5fdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbHVtbl92YWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uX2luZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb2x1bW5fdmFsdWUgKz0gYWN0dWFsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbHVtbl92YWx1ZSA9IHVubWFza1NwZWNpYWxDaGFycyhjb2x1bW5fdmFsdWUpO1xyXG4gICAgICAgIGlmICghbmFtZXMpIHtcclxuICAgICAgICAgICAgcm93LnB1c2goY29sdW1uX3ZhbHVlKTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxldCBjb2x1bW5fbmFtZSA9IFwiY29sX1wiICsgY29sdW1uX2luZGV4O1xyXG4gICAgICAgICAgICBpZiAoY29sdW1uX2luZGV4IDwgbmFtZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb2x1bW5fbmFtZSA9IG5hbWVzW2NvbHVtbl9pbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcm93W2NvbHVtbl9uYW1lXSA9IGNvbHVtbl92YWx1ZTtcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gocm93KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIG1hc2tTcGVjaWFsQ2hhcnMoZnJvbVRleHQpIHtcclxuICAgIHJldHVybiBmcm9tVGV4dFxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXFwiLCBcIlxcXFxcXFxcXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXHJcIiwgXCJcXFxcclwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxuXCIsIFwiXFxcXG5cIilcclxuICAgICAgICAucmVwbGFjZShcIlxcdFwiLCBcIlxcXFx0XCIpO1xyXG59XHJcbmZ1bmN0aW9uIHVubWFza1NwZWNpYWxDaGFycyhmcm9tVGV4dCkge1xyXG4gICAgcmV0dXJuIGZyb21UZXh0XHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcXFxcXFwiLCBcIlxcXFxcIilcclxuICAgICAgICAucmVwbGFjZShcIlxcXFxyXCIsIFwiXFxyXCIpXHJcbiAgICAgICAgLnJlcGxhY2UoXCJcXFxcblwiLCBcIlxcblwiKVxyXG4gICAgICAgIC5yZXBsYWNlKFwiXFxcXHRcIiwgXCJcXHRcIik7XHJcbn1cclxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXJzKHNvdXJjZSkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgbGV0IG9wZW4gPSBmYWxzZTtcclxuICAgIGxldCBhY3R1YWwgPSBcIlwiO1xyXG4gICAgZm9yIChjb25zdCBsZXR0ZXIgb2YgQXJyYXkuZnJvbShzb3VyY2UpKSB7XHJcbiAgICAgICAgaWYgKG9wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsICs9IGxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGxldHRlciA9PSAnXCInKSB7XHJcbiAgICAgICAgICAgICAgICBvcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmIChhY3R1YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhY3R1YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdHVhbCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAobGV0dGVyID09IFwiIFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWN0dWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWN0dWFsKTtcclxuICAgICAgICAgICAgICAgICAgICBhY3R1YWwgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYWN0dWFsICs9IGxldHRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0cy5RaW5Cb2R5ID0ge1xyXG4gICAgZ2V0Q29va2llLFxyXG4gICAgc2V0Q29va2llLFxyXG4gICAgZGVsQ29va2llLFxyXG4gICAgZ2V0VGV4dExpbmVzLFxyXG4gICAgZ2V0Q1NWUm93cyxcclxuICAgIG1hc2tTcGVjaWFsQ2hhcnMsXHJcbiAgICB1bm1hc2tTcGVjaWFsQ2hhcnMsXHJcbiAgICBwYXJzZVBhcmFtZXRlcnMsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1ib2R5LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluRm9vdCA9IGV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gZXhwb3J0cy5RaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNOYXR1cmUgPSB2b2lkIDA7XHJcbnZhciBRaW5GaWxlc05hdHVyZTtcclxuKGZ1bmN0aW9uIChRaW5GaWxlc05hdHVyZSkge1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJCT1RIXCJdID0gXCJib3RoXCI7XHJcbiAgICBRaW5GaWxlc05hdHVyZVtcIkRJUkVDVE9SSUVTXCJdID0gXCJkaXJlY3Rvcmllc1wiO1xyXG4gICAgUWluRmlsZXNOYXR1cmVbXCJGSUxFU1wiXSA9IFwiZmlsZXNcIjtcclxufSkoUWluRmlsZXNOYXR1cmUgPSBleHBvcnRzLlFpbkZpbGVzTmF0dXJlIHx8IChleHBvcnRzLlFpbkZpbGVzTmF0dXJlID0ge30pKTtcclxudmFyIFFpbkZpbGVzT3BlcmF0aW9uO1xyXG4oZnVuY3Rpb24gKFFpbkZpbGVzT3BlcmF0aW9uKSB7XHJcbiAgICBRaW5GaWxlc09wZXJhdGlvbltcIk9QRU5cIl0gPSBcIm9wZW5cIjtcclxuICAgIFFpbkZpbGVzT3BlcmF0aW9uW1wiU0FWRVwiXSA9IFwic2F2ZVwiO1xyXG59KShRaW5GaWxlc09wZXJhdGlvbiA9IGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gfHwgKGV4cG9ydHMuUWluRmlsZXNPcGVyYXRpb24gPSB7fSkpO1xyXG5jbGFzcyBRaW5GaWxlc0Rlc2NyaXB0b3Ige1xyXG59XHJcbmV4cG9ydHMuUWluRmlsZXNEZXNjcmlwdG9yID0gUWluRmlsZXNEZXNjcmlwdG9yO1xyXG5mdW5jdGlvbiBnZXRMb2NhdGlvbigpIHtcclxuICAgIHJldHVybiB3aW5kb3cubG9jYXRpb24uaHJlZjtcclxufVxyXG5mdW5jdGlvbiBpc0xvY2FsSG9zdCgpIHtcclxuICAgIHZhciBsb2NhdGlvbiA9IGdldExvY2F0aW9uKCk7XHJcbiAgICB2YXIgc3RhcnQgPSBsb2NhdGlvbi5pbmRleE9mKFwiOi8vXCIpO1xyXG4gICAgaWYgKHN0YXJ0ID09IC0xKSB7XHJcbiAgICAgICAgc3RhcnQgPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgc3RhcnQgKz0gMztcclxuICAgIH1cclxuICAgIGxvY2F0aW9uID0gbG9jYXRpb24uc3Vic3RyaW5nKHN0YXJ0KTtcclxuICAgIHJldHVybiBsb2NhdGlvbi5pbmRleE9mKFwibG9jYWxob3N0XCIpID09PSAwIHx8IGxvY2F0aW9uLmluZGV4T2YoXCIxMjcuMC4wLjFcIikgPT09IDA7XHJcbn1cclxuZnVuY3Rpb24gZ2V0U2VwYXJhdG9yKG9mUGF0aCkge1xyXG4gICAgbGV0IHJlc3VsdCA9IFwiL1wiO1xyXG4gICAgaWYgKG9mUGF0aCAmJiBvZlBhdGguaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xyXG4gICAgICAgIHJlc3VsdCA9IFwiXFxcXFwiO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5mdW5jdGlvbiBnZXRQYXRoSm9pbihwYXRoQSwgcGF0aEIpIHtcclxuICAgIGlmIChwYXRoQSA9PSBudWxsIHx8IHBhdGhBID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBhdGhBID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmIChwYXRoQiA9PSBudWxsIHx8IHBhdGhCID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHBhdGhCID0gXCJcIjtcclxuICAgIH1cclxuICAgIGlmIChwYXRoQS5sZW5ndGggPT0gMCkge1xyXG4gICAgICAgIHJldHVybiBwYXRoQjtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKHBhdGhCLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHBhdGhBO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgbGV0IHVuaW9uID0gXCIvXCI7XHJcbiAgICAgICAgaWYgKHBhdGhBLmluZGV4T2YoXCJcXFxcXCIpID4gLTEgfHwgcGF0aEIuaW5kZXhPZihcIlxcXFxcIikgPiAtMSkge1xyXG4gICAgICAgICAgICB1bmlvbiA9IFwiXFxcXFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcGF0aEFFbmQgPSBwYXRoQS5zdWJzdHJpbmcocGF0aEEubGVuZ3RoIC0gMSwgcGF0aEEubGVuZ3RoKTtcclxuICAgICAgICBsZXQgcGF0aEJTdGFydCA9IHBhdGhCLnN1YnN0cmluZygwLCAxKTtcclxuICAgICAgICBpZiAocGF0aEFFbmQgPT0gdW5pb24gfHwgcGF0aEJTdGFydCA9PSB1bmlvbikge1xyXG4gICAgICAgICAgICB1bmlvbiA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXRoQSArIHVuaW9uICsgcGF0aEI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gZ2V0UGFyZW50KHBhdGgpIHtcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcclxuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcclxuICAgICAgICBpZiAobGFzdCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZygwLCBsYXN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gXCJcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRTdGVtKHBhdGgpIHtcclxuICAgIGlmIChwYXRoKSB7XHJcbiAgICAgICAgbGV0IHNlcGFyYXRvciA9IGdldFNlcGFyYXRvcihwYXRoKTtcclxuICAgICAgICBsZXQgbGFzdCA9IHBhdGgubGFzdEluZGV4T2Yoc2VwYXJhdG9yKTtcclxuICAgICAgICBpZiAobGFzdCA+IC0xKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBwYXRoLnN1YnN0cmluZyhsYXN0ICsgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIFwiXCI7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RmlsZUV4dGVuc2lvbihuYW1lKSB7XHJcbiAgICBsZXQgcG9zaXRpb24gPSBuYW1lLmxhc3RJbmRleE9mKFwiLlwiKTtcclxuICAgIGlmIChwb3NpdGlvbiA+IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIG5hbWUuc3Vic3RyaW5nKHBvc2l0aW9uICsgMSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgIH1cclxufVxyXG5jb25zdCBhcHBzRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiaHRtXCIsIFwiaHRtbFwiLCBcImNzc1wiLCBcImpzXCIsIFwianN4XCIsIFwidHNcIiwgXCJ0c3hcIiwgXCJwaHRtbFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZUFwcChleHRlbnNpb24pIHtcclxuICAgIHJldHVybiBhcHBzRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5jb25zdCBjbWRzRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiaFwiLCBcImNcIiwgXCJocHBcIiwgXCJjcHBcIiwgXCJyc1wiLCBcImpsXCIsXHJcbiAgICBcImNzXCIsIFwiY3Nwcm9qXCIsIFwiZnNcIiwgXCJtbFwiLCBcImZzaVwiLCBcIm1saVwiLCBcImZzeFwiLCBcImZzc2NyaXB0XCIsXHJcbiAgICBcImphdmFcIiwgXCJneVwiLCBcImd2eVwiLCBcImdyb292eVwiLCBcInNjXCIsIFwic2NhbGFcIiwgXCJjbGpcIixcclxuICAgIFwicHlcIiwgXCJydWJ5XCIsIFwicGhwXCIsIFwicGh0bWxcIixcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlQ21kKGV4dGVuc2lvbikge1xyXG4gICAgcmV0dXJuIGNtZHNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IGV4ZWNFeHRlbnNpb25zID0gW1xyXG4gICAgXCJleGVcIiwgXCJqYXJcIiwgXCJjb21cIiwgXCJiYXRcIiwgXCJzaFwiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZUV4ZWMoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gZXhlY0V4dGVuc2lvbnMuaW5kZXhPZihleHRlbnNpb24pID4gLTE7XHJcbn1cclxuY29uc3QgaW1hZ2VFeHRlbnNpb25zID0gW1xyXG4gICAgXCJqcGdcIiwgXCJqcGVnXCIsIFwicG5nXCIsIFwiZ2lmXCIsIFwiYm1wXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlSW1hZ2UoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gaW1hZ2VFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IHZlY3RvckV4dGVuc2lvbnMgPSBbXHJcbiAgICBcInN2Z1wiXHJcbl07XHJcbmZ1bmN0aW9uIGlzRmlsZVZlY3RvcihleHRlbnNpb24pIHtcclxuICAgIHJldHVybiB2ZWN0b3JFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IG1vdmllRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwiYXZpXCIsIFwibXA0XCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlTW92aWUoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gbW92aWVFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IG11c2ljRXh0ZW5zaW9ucyA9IFtcclxuICAgIFwid2F2XCIsIFwibXAzXCJcclxuXTtcclxuZnVuY3Rpb24gaXNGaWxlTXVzaWMoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gbXVzaWNFeHRlbnNpb25zLmluZGV4T2YoZXh0ZW5zaW9uKSA+IC0xO1xyXG59XHJcbmNvbnN0IHppcHBlZEV4dGVuc2lvbnMgPSBbXHJcbiAgICBcInppcFwiLCBcInJhclwiLCBcIjd6XCIsIFwidGFyXCIsIFwiZ3pcIlxyXG5dO1xyXG5mdW5jdGlvbiBpc0ZpbGVaaXBwZWQoZXh0ZW5zaW9uKSB7XHJcbiAgICByZXR1cm4gemlwcGVkRXh0ZW5zaW9ucy5pbmRleE9mKGV4dGVuc2lvbikgPiAtMTtcclxufVxyXG5leHBvcnRzLlFpbkZvb3QgPSB7XHJcbiAgICBnZXRMb2NhdGlvbixcclxuICAgIGlzTG9jYWxIb3N0LFxyXG4gICAgZ2V0U2VwYXJhdG9yLFxyXG4gICAgZ2V0UGF0aEpvaW4sXHJcbiAgICBnZXRQYXJlbnQsXHJcbiAgICBnZXRTdGVtLFxyXG4gICAgZ2V0RmlsZUV4dGVuc2lvbixcclxuICAgIGlzRmlsZUFwcCxcclxuICAgIGlzRmlsZUNtZCxcclxuICAgIGlzRmlsZUV4ZWMsXHJcbiAgICBpc0ZpbGVJbWFnZSxcclxuICAgIGlzRmlsZVZlY3RvcixcclxuICAgIGlzRmlsZU1vdmllLFxyXG4gICAgaXNGaWxlTXVzaWMsXHJcbiAgICBpc0ZpbGVaaXBwZWQsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1mb290LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluSGVhZCA9IGV4cG9ydHMuUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkJvdW5kcyA9IGV4cG9ydHMuUWluRGltZW5zaW9uID0gZXhwb3J0cy5RaW5Qb2ludCA9IHZvaWQgMDtcclxuY2xhc3MgUWluUG9pbnQge1xyXG59XHJcbmV4cG9ydHMuUWluUG9pbnQgPSBRaW5Qb2ludDtcclxuO1xyXG5jbGFzcyBRaW5EaW1lbnNpb24ge1xyXG59XHJcbmV4cG9ydHMuUWluRGltZW5zaW9uID0gUWluRGltZW5zaW9uO1xyXG47XHJcbmNsYXNzIFFpbkJvdW5kcyB7XHJcbn1cclxuZXhwb3J0cy5RaW5Cb3VuZHMgPSBRaW5Cb3VuZHM7XHJcbjtcclxudmFyIFFpbkdyYW5kZXVyO1xyXG4oZnVuY3Rpb24gKFFpbkdyYW5kZXVyKSB7XHJcbiAgICBRaW5HcmFuZGV1cltcIlNNQUxMXCJdID0gXCJzbWFsbFwiO1xyXG4gICAgUWluR3JhbmRldXJbXCJNRURJVU1cIl0gPSBcIm1lZGl1bVwiO1xyXG4gICAgUWluR3JhbmRldXJbXCJMQVJHRVwiXSA9IFwibGFyZ2VcIjtcclxufSkoUWluR3JhbmRldXIgPSBleHBvcnRzLlFpbkdyYW5kZXVyIHx8IChleHBvcnRzLlFpbkdyYW5kZXVyID0ge30pKTtcclxuZnVuY3Rpb24gZ2V0RGVza0FQSSgpIHtcclxuICAgIHZhciB3aW4gPSB3aW5kb3c7XHJcbiAgICBpZiAod2luLmRlc2tBUEkpIHtcclxuICAgICAgICByZXR1cm4gd2luLmRlc2tBUEk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICB3aW4gPSB3aW5kb3cucGFyZW50O1xyXG4gICAgfVxyXG4gICAgaWYgKHdpbi5kZXNrQVBJKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbi5kZXNrQVBJO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgd2luID0gd2luZG93LnRvcDtcclxuICAgIH1cclxuICAgIGlmICh3aW4uZGVza0FQSSkge1xyXG4gICAgICAgIHJldHVybiB3aW4uZGVza0FQSTtcclxuICAgIH1cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuY29uc3QgbG9nZ2VkID0gW107XHJcbmZ1bmN0aW9uIGdldExvZ2dlZCgpIHtcclxuICAgIHJldHVybiBsb2dnZWQ7XHJcbn1cclxuZnVuY3Rpb24gbG9nKG1lc3NhZ2UpIHtcclxuICAgIGxvZ2dlZC5wdXNoKG1lc3NhZ2UpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChfKSB7IH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZ2V0RGVza0FQSSgpLnNlbmQoXCJsb2dPbk1haW5cIiwgbWVzc2FnZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoXykgeyB9XHJcbn1cclxuZnVuY3Rpb24gbG9nRXJyb3IoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgbG9nKGdldEVycm9yTWVzc2FnZShlcnJvciwgb3JpZ2luKSk7XHJcbn1cclxuZnVuY3Rpb24gZ2V0RXJyb3JNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJQcm9ibGVtIHdpdGg6XCIsIGVycm9yLCBvcmlnaW4pO1xyXG59XHJcbmZ1bmN0aW9uIGxvZ1dhcm5pbmcoZXJyb3IsIG9yaWdpbikge1xyXG4gICAgbG9nKGdldFdhcm5pbmdNZXNzYWdlKGVycm9yLCBvcmlnaW4pKTtcclxufVxyXG5mdW5jdGlvbiBnZXRXYXJuaW5nTWVzc2FnZShlcnJvciwgb3JpZ2luKSB7XHJcbiAgICByZXR1cm4gZ2V0VHJlYXRNZXNzYWdlKFwiQ2hlY2tvdXQgdGhpczpcIiwgZXJyb3IsIG9yaWdpbik7XHJcbn1cclxuZnVuY3Rpb24gbG9nU3VwcG9ydChlcnJvciwgb3JpZ2luKSB7XHJcbiAgICBsb2coZ2V0U3VwcG9ydE1lc3NhZ2UoZXJyb3IsIG9yaWdpbikpO1xyXG59XHJcbmZ1bmN0aW9uIGdldFN1cHBvcnRNZXNzYWdlKGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHJldHVybiBnZXRUcmVhdE1lc3NhZ2UoXCJOZWVkIFN1cHBvcnQgb246XCIsIGVycm9yLCBvcmlnaW4pO1xyXG59XHJcbmZ1bmN0aW9uIGdldFRyZWF0TWVzc2FnZShwcmVmaXgsIGVycm9yLCBvcmlnaW4pIHtcclxuICAgIHZhciByZXN1bHQgPSBwcmVmaXggKyAoZXJyb3IgPyBcIiBcIiArIGVycm9yLnRvU3RyaW5nKCkgOiBcIlwiKTtcclxuICAgIGlmIChlcnJvci5yZXNwb25zZSAmJiBlcnJvci5yZXNwb25zZS5kYXRhKSB7XHJcbiAgICAgICAgdmFyIGVycm9yRGF0YSA9IGVycm9yLnJlc3BvbnNlLmRhdGE7XHJcbiAgICAgICAgaWYgKCEodHlwZW9mIGVycm9yRGF0YSA9PSBcInN0cmluZ1wiIHx8IGVycm9yRGF0YSBpbnN0YW5jZW9mIFN0cmluZykpIHtcclxuICAgICAgICAgICAgZXJyb3JEYXRhID0gSlNPTi5zdHJpbmdpZnkoZXJyb3JEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gRGF0YTogXCIgKyBlcnJvckRhdGE7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBpZiAoISh0eXBlb2YgZXJyb3IgPT0gXCJzdHJpbmdcIiB8fCBlcnJvciBpbnN0YW5jZW9mIFN0cmluZykpIHtcclxuICAgICAgICAgICAgcmVzdWx0ICs9IFwiIC0gRGF0YTogXCIgKyBKU09OLnN0cmluZ2lmeShlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgaWYgKG9yaWdpbikge1xyXG4gICAgICAgIHJlc3VsdCArPSBcIiAtIE9yaWdpbjogXCIgKyBvcmlnaW47XHJcbiAgICB9XHJcbiAgICBjb25zdCBzdGFjayA9IChuZXcgRXJyb3IoXCJcIikpLnN0YWNrO1xyXG4gICAgaWYgKHN0YWNrKSB7XHJcbiAgICAgICAgcmVzdWx0ICs9IFwiIC0gU3RhY2s6IFwiICsgc3RhY2s7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcbmZ1bmN0aW9uIHRvZ2dsZURldlRvb2xzKCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBnZXREZXNrQVBJKCkuc2VuZChcInRvZ2dsZURldlRvb2xzXCIpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGUpIHtcclxuICAgICAgICBsb2dFcnJvcihlLCBcIntxaW5wZWwtcmVzfShFcnJDb2RlLTAwMDAwMSlcIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0cy5RaW5IZWFkID0ge1xyXG4gICAgZ2V0RGVza0FQSSxcclxuICAgIGdldExvZ2dlZCxcclxuICAgIGxvZyxcclxuICAgIGxvZ0Vycm9yLFxyXG4gICAgZ2V0RXJyb3JNZXNzYWdlLFxyXG4gICAgbG9nV2FybmluZyxcclxuICAgIGdldFdhcm5pbmdNZXNzYWdlLFxyXG4gICAgbG9nU3VwcG9ydCxcclxuICAgIGdldFN1cHBvcnRNZXNzYWdlLFxyXG4gICAgZ2V0VHJlYXRNZXNzYWdlLFxyXG4gICAgdG9nZ2xlRGV2VG9vbHMsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1oZWFkLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU2tpbiA9IGV4cG9ydHMuUWluU3R5bGVzID0gdm9pZCAwO1xyXG5jb25zdCBxaW5fYXJtXzEgPSByZXF1aXJlKFwiLi9xaW4tYXJtXCIpO1xyXG5jb25zdCBxaW5faGVhZF8xID0gcmVxdWlyZShcIi4vcWluLWhlYWRcIik7XHJcbmV4cG9ydHMuUWluU3R5bGVzID0ge1xyXG4gICAgQ29sb3JGb3JlZ3JvdW5kOiBcIiMxODAwMjdcIixcclxuICAgIENvbG9yQmFja2dyb3VuZDogXCIjZmZmYWVmXCIsXHJcbiAgICBDb2xvckluYWN0aXZlOiBcIiNmYWVmZmZcIixcclxuICAgIENvbG9yQWN0aXZlOiBcIiNmYWRlZGVcIixcclxuICAgIENvbG9yQWNjZW50OiBcIiNhZTAwMDBcIixcclxuICAgIENvbG9yU2VsZWN0ZWQ6IFwiIzVkNzJkZThmXCIsXHJcbiAgICBGb250TmFtZTogXCJTb3VyY2VTYW5zUHJvXCIsXHJcbiAgICBGb250U2l6ZTogXCIxNnB4XCIsXHJcbn07XHJcbmZ1bmN0aW9uIHN0eWxlQXNCb2R5KGVsKSB7XHJcbiAgICBlbC5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcclxuICAgIGVsLnN0eWxlLnRvcCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5yaWdodCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5ib3R0b20gPSBcIjBweFwiO1xyXG4gICAgZWwuc3R5bGUubGVmdCA9IFwiMHB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCI5cHhcIjtcclxuICAgIGVsLnN0eWxlLm92ZXJmbG93ID0gXCJhdXRvXCI7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVBc0VkaXQoZWwpIHtcclxuICAgIGVsLnN0eWxlLm1hcmdpbiA9IFwiMXB4XCI7XHJcbiAgICBlbC5zdHlsZS5wYWRkaW5nID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgZWwuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIzcHhcIjtcclxuICAgIGVsLnN0eWxlLmNvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgZWwuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JJbmFjdGl2ZTtcclxuICAgIGVsLnN0eWxlLmZvbnRGYW1pbHkgPSBcIlNvdXJjZVNhbnNQcm9cIjtcclxuICAgIGVsLnN0eWxlLmZvbnRTaXplID0gXCIxNnB4XCI7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckFjdGl2ZTtcclxuICAgICAgICBlbC5zdHlsZS5ib3JkZXIgPSBcIjFweCBzb2xpZCBcIiArIGV4cG9ydHMuUWluU3R5bGVzLkNvbG9yQWNjZW50O1xyXG4gICAgfSk7XHJcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNvdXRcIiwgKCkgPT4ge1xyXG4gICAgICAgIGVsLnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBleHBvcnRzLlFpblN0eWxlcy5Db2xvckluYWN0aXZlO1xyXG4gICAgICAgIGVsLnN0eWxlLmJvcmRlciA9IFwiMXB4IHNvbGlkIFwiICsgZXhwb3J0cy5RaW5TdHlsZXMuQ29sb3JGb3JlZ3JvdW5kO1xyXG4gICAgfSk7XHJcbn1cclxuZnVuY3Rpb24gc3R5bGVNYXhTaXplRm9yTm90T3ZlckZsb3coZWwsIHBhcmVudCkge1xyXG4gICAgY29uc29sZS5sb2coXCJEMVwiKTtcclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50ID0gZWwucGFyZW50RWxlbWVudDtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkQyOiBcIiArIHBhcmVudCk7XHJcbiAgICB9XHJcbiAgICBpZiAocGFyZW50KSB7XHJcbiAgICAgICAgbGV0IG1heFdpZHRoID0gMDtcclxuICAgICAgICBsZXQgbWF4SGVpZ2h0ID0gMDtcclxuICAgICAgICBsZXQgaW1lZGlhdGUgPSBlbDtcclxuICAgICAgICBkbyB7XHJcbiAgICAgICAgICAgIG1heFdpZHRoID0gbWF4V2lkdGggKyBpbWVkaWF0ZS5jbGllbnRMZWZ0O1xyXG4gICAgICAgICAgICBtYXhIZWlnaHQgPSBtYXhIZWlnaHQgKyBpbWVkaWF0ZS5jbGllbnRUb3A7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiRDM6IFwiICsgbWF4V2lkdGgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIkQ0OiBcIiArIG1heEhlaWdodCk7XHJcbiAgICAgICAgICAgIGltZWRpYXRlID0gaW1lZGlhdGUucGFyZW50RWxlbWVudDtcclxuICAgICAgICB9IHdoaWxlIChpbWVkaWF0ZSAhPSBudWxsICYmIGltZWRpYXRlICE9IHBhcmVudCk7XHJcbiAgICAgICAgbWF4V2lkdGggPSBwYXJlbnQuY2xpZW50V2lkdGggLSBtYXhXaWR0aDtcclxuICAgICAgICBtYXhIZWlnaHQgPSBwYXJlbnQuY2xpZW50SGVpZ2h0IC0gbWF4SGVpZ2h0O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDU6IFwiICsgbWF4V2lkdGgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiRDY6IFwiICsgbWF4SGVpZ2h0KTtcclxuICAgICAgICBlbC5zdHlsZS5tYXhXaWR0aCA9IG1heFdpZHRoICsgXCJweFwiO1xyXG4gICAgICAgIGVsLnN0eWxlLm1heEhlaWdodCA9IG1heEhlaWdodCArIFwicHhcIjtcclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHlsZVNpemUoZWwsIHNpemUpIHtcclxuICAgIGlmIChzaXplKSB7XHJcbiAgICAgICAgaWYgKHNpemUgaW5zdGFuY2VvZiBxaW5faGVhZF8xLlFpbkRpbWVuc2lvbikge1xyXG4gICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IHNpemUud2lkdGggKyBcInB4XCI7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IHNpemUuaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGRpbSA9IGdldERpbWVuc2lvblNpemUoc2l6ZSk7XHJcbiAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gZGltLndpZHRoICsgXCJweFwiO1xyXG4gICAgICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSBkaW0uaGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5mdW5jdGlvbiBzdHlsZUZsZXhNYXgoZWwpIHtcclxuICAgIGVsLnN0eWxlLmZsZXggPSBcIjFcIjtcclxufVxyXG5mdW5jdGlvbiBzdHlsZUZsZXhNaW4oZWwpIHtcclxuICAgIGVsLnN0eWxlLmZsZXggPSBcIjBcIjtcclxufVxyXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogZG9jdW1lbnQuYm9keS5jbGllbnRXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IGRvY3VtZW50LmJvZHkuY2xpZW50SGVpZ2h0LFxyXG4gICAgfTtcclxufVxyXG5mdW5jdGlvbiBnZXRXaW5kb3dTaXplU3R5bGUoKSB7XHJcbiAgICBjb25zdCB3aWR0aCA9IGdldFdpbmRvd1NpemUoKS53aWR0aDtcclxuICAgIGlmICh3aWR0aCA8IDYwMCkge1xyXG4gICAgICAgIHJldHVybiBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLlNNQUxMO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAod2lkdGggPCAxMDAwKSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTUVESVVNO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTEFSR0U7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gaGlkZUFsbElGcmFtZXMoKSB7XHJcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZG9jX2lmcmFtZSA9IGRvY19pZnJhbWVzW2ldO1xyXG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XHJcbiAgICB9XHJcbn1cclxuZnVuY3Rpb24gc2hvd0FsbElGcmFtZXMoKSB7XHJcbiAgICB2YXIgZG9jX2lmcmFtZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImlmcmFtZVwiKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZG9jX2lmcmFtZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBsZXQgZG9jX2lmcmFtZSA9IGRvY19pZnJhbWVzW2ldO1xyXG4gICAgICAgIGRvY19pZnJhbWUuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGRpc2FibGVTZWxlY3Rpb24oZWxlbWVudCkge1xyXG4gICAgZWxlbWVudC5zdHlsZS51c2VyU2VsZWN0ID0gXCJub25lXCI7XHJcbiAgICBlbGVtZW50LnN0eWxlLndlYmtpdFVzZXJTZWxlY3QgPSBcIm5vbmVcIjtcclxuICAgIGVsZW1lbnQub25zZWxlY3RzdGFydCA9IHFpbl9hcm1fMS5RaW5Bcm0uc3RvcEV2ZW50O1xyXG59XHJcbmZ1bmN0aW9uIGNsZWFyU2VsZWN0aW9uKCkge1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKHdpbmRvdy5nZXRTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgd2luZG93LmdldFNlbGVjdGlvbigpLnJlbW92ZUFsbFJhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0sIDM2MCk7XHJcbn1cclxuZnVuY3Rpb24gaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsKGVsZW1lbnQpIHtcclxuICAgIGlmIChlbGVtZW50LnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudC5vZmZzZXRUb3AgPCBlbGVtZW50LnBhcmVudEVsZW1lbnQuc2Nyb2xsVG9wKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQub2Zmc2V0TGVmdCA8IGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsZW1lbnQuY2xpZW50V2lkdGggPlxyXG4gICAgICAgICAgICBlbGVtZW50LnBhcmVudEVsZW1lbnQuY2xpZW50V2lkdGggLVxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0TGVmdCAtIGVsZW1lbnQucGFyZW50RWxlbWVudC5zY3JvbGxMZWZ0KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbGVtZW50LmNsaWVudEhlaWdodCA+XHJcbiAgICAgICAgICAgIGVsZW1lbnQucGFyZW50RWxlbWVudC5jbGllbnRIZWlnaHQgLVxyXG4gICAgICAgICAgICAgICAgKGVsZW1lbnQub2Zmc2V0VG9wIC0gZWxlbWVudC5wYXJlbnRFbGVtZW50LnNjcm9sbFRvcCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmZ1bmN0aW9uIGdldERpbWVuc2lvbihlbCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB3aWR0aDogcGFyc2VJbnQoZWwuc3R5bGUud2lkdGgpLFxyXG4gICAgICAgIGhlaWdodDogcGFyc2VJbnQoZWwuc3R5bGUuaGVpZ2h0KSxcclxuICAgIH07XHJcbn1cclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uU2l6ZShzaXplKSB7XHJcbiAgICBpZiAoc2l6ZSA9PSBxaW5faGVhZF8xLlFpbkdyYW5kZXVyLkxBUkdFKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbkxhcmdlKCk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChzaXplID09IHFpbl9oZWFkXzEuUWluR3JhbmRldXIuTUVESVVNKSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvbk1lZGl1bSgpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGdldERpbWVuc2lvblNtYWxsKCk7XHJcbiAgICB9XHJcbn1cclxuY29uc3QgZGltZW5zaW9uU21hbGwgPSB7XHJcbiAgICB3aWR0aDogMTYsXHJcbiAgICBoZWlnaHQ6IDE2LFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25TbWFsbCgpIHtcclxuICAgIHJldHVybiBkaW1lbnNpb25TbWFsbDtcclxufVxyXG5jb25zdCBkaW1lbnNpb25NZWRpdW0gPSB7XHJcbiAgICB3aWR0aDogMzIsXHJcbiAgICBoZWlnaHQ6IDMyLFxyXG59O1xyXG5mdW5jdGlvbiBnZXREaW1lbnNpb25NZWRpdW0oKSB7XHJcbiAgICByZXR1cm4gZGltZW5zaW9uTWVkaXVtO1xyXG59XHJcbmNvbnN0IGRpbWVuc2lvbkxhcmdlID0ge1xyXG4gICAgd2lkdGg6IDY0LFxyXG4gICAgaGVpZ2h0OiA2NCxcclxufTtcclxuZnVuY3Rpb24gZ2V0RGltZW5zaW9uTGFyZ2UoKSB7XHJcbiAgICByZXR1cm4gZGltZW5zaW9uTGFyZ2U7XHJcbn1cclxuZXhwb3J0cy5RaW5Ta2luID0ge1xyXG4gICAgc3R5bGVzOiBleHBvcnRzLlFpblN0eWxlcyxcclxuICAgIHN0eWxlQXNCb2R5LFxyXG4gICAgc3R5bGVBc0VkaXQsXHJcbiAgICBzdHlsZU1heFNpemVGb3JOb3RPdmVyRmxvdyxcclxuICAgIHN0eWxlU2l6ZSxcclxuICAgIHN0eWxlRmxleE1heCxcclxuICAgIHN0eWxlRmxleE1pbixcclxuICAgIGdldFdpbmRvd1NpemUsXHJcbiAgICBnZXRXaW5kb3dTaXplU3R5bGUsXHJcbiAgICBoaWRlQWxsSUZyYW1lcyxcclxuICAgIHNob3dBbGxJRnJhbWVzLFxyXG4gICAgZGlzYWJsZVNlbGVjdGlvbixcclxuICAgIGNsZWFyU2VsZWN0aW9uLFxyXG4gICAgaXNFbGVtZW50VmlzaWJsZUluU2Nyb2xsLFxyXG4gICAgZ2V0RGltZW5zaW9uLFxyXG4gICAgZ2V0RGltZW5zaW9uU2l6ZSxcclxuICAgIGdldERpbWVuc2lvblNtYWxsLFxyXG4gICAgZ2V0RGltZW5zaW9uTWVkaXVtLFxyXG4gICAgZ2V0RGltZW5zaW9uTGFyZ2UsXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1za2luLmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xyXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XHJcbmV4cG9ydHMuUWluU291bCA9IHZvaWQgMDtcclxuY29uc3QgcWluX2FybV8xID0gcmVxdWlyZShcIi4vcWluLWFybVwiKTtcclxuY29uc3QgcWluX2JvZHlfMSA9IHJlcXVpcmUoXCIuL3Fpbi1ib2R5XCIpO1xyXG5jb25zdCBxaW5fZm9vdF8xID0gcmVxdWlyZShcIi4vcWluLWZvb3RcIik7XHJcbmNvbnN0IHFpbl9oZWFkXzEgPSByZXF1aXJlKFwiLi9xaW4taGVhZFwiKTtcclxuY29uc3QgcWluX3NraW5fMSA9IHJlcXVpcmUoXCIuL3Fpbi1za2luXCIpO1xyXG5leHBvcnRzLlFpblNvdWwgPSB7XHJcbiAgICBhcm06IHFpbl9hcm1fMS5RaW5Bcm0sXHJcbiAgICBib2R5OiBxaW5fYm9keV8xLlFpbkJvZHksXHJcbiAgICBmb290OiBxaW5fZm9vdF8xLlFpbkZvb3QsXHJcbiAgICBoZWFkOiBxaW5faGVhZF8xLlFpbkhlYWQsXHJcbiAgICBza2luOiBxaW5fc2tpbl8xLlFpblNraW4sXHJcbn07XHJcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXFpbi1zb3VsLmpzLm1hcCJdfQ==
