declare namespace $ { }
export = $;

declare namespace $ {
    function $mol_fail(error: any): never;
}

declare namespace $ {
    function $mol_fail_hidden(error: any): never;
}

declare namespace $ {
    function $mol_offline(uri?: string): void;
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ {
        let $$: typeof $;
    }
    const $mol_ambient_ref: unique symbol;
    type $mol_ambient_context = (typeof globalThis) & (typeof $.$$) & (typeof $);
    function $mol_ambient(this: $mol_ambient_context | void, overrides: Partial<$mol_ambient_context>): $mol_ambient_context;
}

declare namespace $ {
    function $mol_delegate<Value extends object>(proto: Value, target: () => Value): Value;
}

declare namespace $ {
    const $mol_owning_map: WeakMap<any, any>;
    function $mol_owning_allow<Having>(having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_get<Having, Owner extends object>(having: Having, Owner?: {
        new (): Owner;
    }): Owner | null;
    function $mol_owning_check<Owner, Having>(owner: Owner, having: Having): having is Having & {
        destructor(): void;
    };
    function $mol_owning_catch<Owner, Having>(owner: Owner, having: Having): boolean;
}

declare namespace $ {
    type $mol_type_writable<T> = {
        -readonly [P in keyof T]: T[P];
    };
}

declare namespace $ {
    class $mol_object2 {
        static $: $mol_ambient_context;
        [$mol_ambient_ref]: $mol_ambient_context;
        get $(): $mol_ambient_context;
        set $(next: $mol_ambient_context);
        constructor(init?: (obj: any) => void);
        static create<Instance>(this: new (init?: (instance: any) => void) => Instance, init?: (instance: $mol_type_writable<Instance>) => void): Instance;
        static toString(): any;
        destructor(): void;
        toString(): any;
        toJSON(): any;
    }
}

declare namespace $ {
    class $mol_after_tick extends $mol_object2 {
        task: () => void;
        promise: any;
        cancelled: boolean;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    var $mol_dom_context: typeof globalThis;
}

declare namespace $ {
}

declare namespace $ {
    function $mol_style_attach(id: string, text: string): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_decor<Value> {
        readonly value: Value;
        constructor(value: Value);
        prefix(): string;
        valueOf(): Value;
        postfix(): string;
        toString(): string;
    }
}

declare namespace $ {
    type $mol_style_unit_length = '%' | 'px' | 'cm' | 'mm' | 'Q' | 'in' | 'pc' | 'pt' | 'cap' | 'ch' | 'em' | 'rem' | 'ex' | 'ic' | 'lh' | 'rlh' | 'vh' | 'vw' | 'vi' | 'vb' | 'vmin' | 'vmax';
    type $mol_style_unit_angle = 'deg' | 'rad' | 'grad' | 'turn';
    type $mol_style_unit_time = 's' | 'ms';
    type $mol_style_unit_any = $mol_style_unit_length | $mol_style_unit_angle | $mol_style_unit_time;
    class $mol_style_unit<Literal extends $mol_style_unit_any> extends $mol_decor<number> {
        readonly literal: Literal;
        constructor(value: number, literal: Literal);
        postfix(): Literal;
        static per(value: number): $mol_style_unit<"%">;
        static px(value: number): $mol_style_unit<"px">;
        static mm(value: number): $mol_style_unit<"mm">;
        static cm(value: number): $mol_style_unit<"cm">;
        static Q(value: number): $mol_style_unit<"Q">;
        static in(value: number): $mol_style_unit<"in">;
        static pc(value: number): $mol_style_unit<"pc">;
        static pt(value: number): $mol_style_unit<"pt">;
        static cap(value: number): $mol_style_unit<"cap">;
        static ch(value: number): $mol_style_unit<"ch">;
        static em(value: number): $mol_style_unit<"em">;
        static rem(value: number): $mol_style_unit<"rem">;
        static ex(value: number): $mol_style_unit<"ex">;
        static ic(value: number): $mol_style_unit<"ic">;
        static lh(value: number): $mol_style_unit<"lh">;
        static rlh(value: number): $mol_style_unit<"rlh">;
        static vh(value: number): $mol_style_unit<"vh">;
        static vw(value: number): $mol_style_unit<"vw">;
        static vi(value: number): $mol_style_unit<"vi">;
        static vb(value: number): $mol_style_unit<"vb">;
        static vmin(value: number): $mol_style_unit<"vmin">;
        static vmax(value: number): $mol_style_unit<"vmax">;
        static deg(value: number): $mol_style_unit<"deg">;
        static rad(value: number): $mol_style_unit<"rad">;
        static grad(value: number): $mol_style_unit<"grad">;
        static turn(value: number): $mol_style_unit<"turn">;
        static s(value: number): $mol_style_unit<"s">;
        static ms(value: number): $mol_style_unit<"ms">;
    }
}

declare namespace $ {
    type $mol_style_func_name = 'calc' | 'hsla' | 'rgba' | 'var' | 'url';
    class $mol_style_func<Name extends $mol_style_func_name, Value = unknown> extends $mol_decor<Value> {
        readonly name: Name;
        constructor(name: Name, value: Value);
        prefix(): string;
        postfix(): string;
        static calc<Value>(value: Value): $mol_style_func<"calc", Value>;
        static vary<Name extends string>(name: Name): $mol_style_func<"var", Name>;
        static url<Href extends string>(href: Href): $mol_style_func<"url", string>;
        static hsla(hue: number, saturation: number, lightness: number, alpha: number): $mol_style_func<"hsla", (number | $mol_style_unit<"%">)[]>;
        static rgba(red: number, green: number, blue: number, alpha: number): $mol_style_func<"rgba", number[]>;
    }
}

declare namespace $ {
}

declare namespace $ {
    const $mol_theme: {
        back: $mol_style_func<"var", "--mol_theme_back">;
        hover: $mol_style_func<"var", "--mol_theme_hover">;
        current: $mol_style_func<"var", "--mol_theme_current">;
        text: $mol_style_func<"var", "--mol_theme_text">;
        control: $mol_style_func<"var", "--mol_theme_control">;
        shade: $mol_style_func<"var", "--mol_theme_shade">;
        line: $mol_style_func<"var", "--mol_theme_line">;
        focus: $mol_style_func<"var", "--mol_theme_focus">;
        field: $mol_style_func<"var", "--mol_theme_field">;
        image: $mol_style_func<"var", "--mol_theme_image">;
    };
}

declare namespace $ {
}

declare namespace $ {
    namespace $$ { }
    const $mol_object_field: unique symbol;
    class $mol_object extends $mol_object2 {
        static make<Instance>(this: {
            new (): Instance;
        }, config: Partial<Instance>): Instance;
    }
}

declare namespace $ {
    type $mol_log3_event<Fields> = {
        [key in string]: unknown;
    } & {
        time?: string;
        place: unknown;
        message: string;
    } & Fields;
    type $mol_log3_logger<Fields, Res = void> = (this: $mol_ambient_context, event: $mol_log3_event<Fields>) => Res;
    let $mol_log3_come: $mol_log3_logger<{}>;
    let $mol_log3_done: $mol_log3_logger<{}>;
    let $mol_log3_fail: $mol_log3_logger<{}>;
    let $mol_log3_warn: $mol_log3_logger<{
        hint: string;
    }>;
    let $mol_log3_rise: $mol_log3_logger<{}>;
    let $mol_log3_area: $mol_log3_logger<{}, () => void>;
    function $mol_log3_area_lazy(this: $mol_ambient_context, event: $mol_log3_event<{}>): () => void;
    let $mol_log3_stack: (() => void)[];
}

declare namespace $ {
    function $mol_log3_web_make<Close>(level: keyof Console, color: string): (this: $mol_ambient_context, event: $mol_log3_event<{}>) => () => void;
}

declare namespace $ {
    class $mol_wrapper extends $mol_object2 {
        static wrap: (task: (...ags: any[]) => any) => (...ags: any[]) => any;
        static run<Result>(task: () => Result): Result;
        static func<Args extends any[], Result, Host = void>(func: (this: Host, ...args: Args) => Result): (this: Host, ...args: Args) => Result;
        static get class(): <Class extends new (...args: any[]) => any>(Class: Class) => Class;
        static get method(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>) => TypedPropertyDescriptor<(this: Host, ...args: Args) => Result>;
        static get field(): <Host, Field extends keyof Host, Args extends any[], Result>(obj: Host, name: Field, descr: TypedPropertyDescriptor<Result>) => TypedPropertyDescriptor<Result>;
    }
}

declare namespace $ {
    class $mol_after_frame extends $mol_object2 {
        task: () => void;
        static _promise: Promise<void> | null;
        static get promise(): Promise<void>;
        cancelled: boolean;
        promise: Promise<void>;
        constructor(task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_compare_any(a: any, b: any): boolean;
}

declare namespace $ {
    const $mol_conform_stack: any[];
    function $mol_conform<Target, Source>(target: Target, source: Source): Target;
    const $mol_conform_handlers: WeakMap<Object, (target: any, source: any) => any>;
    function $mol_conform_handler<Class>(cl: {
        new (...args: any[]): Class;
    }, handler: (target: Class, source: Class) => Class): void;
    function $mol_conform_array<Value, List extends {
        [index: number]: Value;
        length: number;
    }>(target: List, source: List): List;
}

declare namespace $ {
    function $mol_array_trim<Item>(array: Item[]): Item[];
}

declare namespace $ {
    function $mol_dev_format_register(config: {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => false;
    } | {
        header: (val: any, config: any) => any;
        hasBody: (val: any, config: any) => boolean;
        body: (val: any, config: any) => any;
    }): void;
    let $mol_dev_format_head: symbol;
    let $mol_dev_format_body: symbol;
    function $mol_dev_format_native(obj: any): any;
    function $mol_dev_format_auto(obj: any): any;
    function $mol_dev_format_element(element: string, style: object, ...content: any[]): any[];
    function $mol_dev_format_span(style: object, ...content: any[]): any[];
    let $mol_dev_format_div: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_ol: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_li: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_table: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_tr: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_td: (style: object, ...content: any[]) => any[];
    let $mol_dev_format_accent: (...args: any[]) => any[];
    let $mol_dev_format_strong: (...args: any[]) => any[];
    let $mol_dev_format_string: (...args: any[]) => any[];
    let $mol_dev_format_shade: (...args: any[]) => any[];
    let $mol_dev_format_indent: (...args: any[]) => any[];
}

declare namespace $ {
    const enum $mol_fiber_status {
        persist = -3,
        actual = -2,
        doubt = -1,
        obsolete = 0
    }
    function $mol_fiber_defer<Value = void>(calculate: () => Value): $mol_fiber<any>;
    function $mol_fiber_func<This, Args extends any[], Result>(calculate: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    function $mol_fiber_root<Calculate extends (this: This, ...args: any[]) => Result, Result = void, This = void>(calculate: Calculate): Calculate;
    function $mol_fiber_method<Host, Value>(obj: Host, name: keyof Host, descr: TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>): TypedPropertyDescriptor<(this: Host, ...args: any[]) => Value>;
    function $mol_fiber_async<Args extends any[], Value>(task: (...args: Args) => Value): (...args: Args) => Promise<Value>;
    function $mol_fiber_sync<Args extends any[], Value = void, This = void>(request: (this: This, ...args: Args) => PromiseLike<Value>): (...args: Args) => Value;
    function $mol_fiber_warp(): Promise<void>;
    function $mol_fiber_fence(func: () => any): any;
    function $mol_fiber_unlimit<Result>(task: () => Result): Result;
    class $mol_fiber_solid extends $mol_wrapper {
        static func<This, Args extends any[], Result>(task: (this: This, ...args: Args) => Result): (this: This, ...args: Args) => Result;
    }
    class $mol_fiber<Value = any> extends $mol_wrapper {
        static logs: boolean;
        static wrap<Func extends (...args: any[]) => any>(task: Func): (this: ThisParameterType<Func>, ...args: Parameters<Func>) => any;
        static quant: number;
        static deadline: number;
        static liveline: number;
        static current: $mol_fiber<any> | null;
        static scheduled: $mol_after_frame | null;
        static queue: (() => PromiseLike<any>)[];
        static tick(): Promise<void>;
        static schedule(): Promise<any>;
        cursor: $mol_fiber_status;
        masters: (number | $mol_fiber<any> | undefined)[];
        calculate: () => Value;
        _value: Value;
        get value(): Value;
        set value(next: Value);
        _error: Error | PromiseLike<Value> | null;
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        schedule(): void;
        wake(): Value | undefined;
        push(value: Value): Value;
        fail(error: Error): Error;
        wait(promise: PromiseLike<Value>): PromiseLike<Value>;
        complete(): void;
        complete_master(master_index: number): void;
        pull(): void;
        update(): void;
        get(): Value;
        limit(): void;
        get master(): $mol_fiber;
        set master(next: $mol_fiber);
        rescue(master: $mol_fiber, master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        disobey(master_index: number): void;
        obsolete_slaves(): void;
        obsolete(master_index: number): void;
        forget(): void;
        abort(): boolean;
        destructor(): void;
    }
}

declare namespace $ {
    function $mol_atom2_value<Value>(task: () => Value): Value | undefined;
    class $mol_atom2<Value = any> extends $mol_fiber<Value> {
        static logs: boolean;
        static get current(): $mol_atom2<any> | null;
        static cached: boolean;
        static reap_task: $mol_fiber<any> | null;
        static reap_queue: $mol_atom2<any>[];
        static reap(atom: $mol_atom2): void;
        slaves: (number | $mol_fiber<any> | undefined)[];
        rescue(master: $mol_atom2, cursor: number): void;
        subscribe(promise: Promise<unknown>): Promise<void>;
        get(): Value;
        pull(): void;
        get value(): Value;
        set value(next: Value);
        get error(): null | Error | PromiseLike<Value>;
        set error(next: null | Error | PromiseLike<Value>);
        put(next: Value): Value;
        complete_master(master_index: number): void;
        obey(master: $mol_fiber, master_index: number): number;
        lead(slave: $mol_fiber, master_index: number): number;
        dislead(slave_index: number): void;
        obsolete(master_index?: number): void;
        doubt(master_index?: number): void;
        obsolete_slaves(): void;
        doubt_slaves(): void;
        get fresh(): () => void;
        get alone(): boolean;
        get derived(): boolean;
        destructor(): void;
    }
}

declare namespace $ {
    type $mol_type_param<Func, Index extends number> = Func extends (...params: infer Params) => any ? Params[Index] : Func extends new (...params: infer Params2) => any ? Params2[Index] : never;
}

declare namespace $ {
    type $mol_type_result<Func> = Func extends (...params: any) => infer Result ? Result : Func extends new (...params: any) => infer Result ? Result : never;
}

declare namespace $ {
    class $mol_mem_force extends Object {
        constructor();
        $mol_mem_force: boolean;
        static $mol_mem_force: boolean;
        static toString(): string;
    }
    class $mol_mem_force_cache extends $mol_mem_force {
    }
    class $mol_mem_force_update extends $mol_mem_force {
    }
    class $mol_mem_force_fail extends $mol_mem_force_cache {
    }
}

declare namespace $ {
    let $mol_mem_cached: typeof $mol_atom2_value;
    function $mol_mem_persist(): void;
    function $mol_mem<Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (next?: any) => any>>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Prop>): {
        value: ((this: Host, next?: $mol_type_param<Prop, 0> | undefined, force?: $mol_mem_force | undefined) => any) & {
            orig: NonNullable<Prop>;
        };
        enumerable?: boolean | undefined;
        configurable?: boolean | undefined;
        writable?: boolean | undefined;
        get?: (() => Prop) | undefined;
        set?: ((value: Prop) => void) | undefined;
    };
}

declare namespace $ {
    class $mol_window extends $mol_object {
        static size(next?: {
            width: number;
            height: number;
        }, force?: $mol_mem_force): {
            width: number;
            height: number;
        };
    }
}

declare namespace $ {
    function $mol_dict_key(value: any): any;
    class $mol_dict<Key, Value> extends Map<Key, Value> {
        get(key: Key): Value | undefined;
        has(key: Key): boolean;
        set(key: Key, value: Value): this;
        delete(key: Key): boolean;
        forEach(back: (value: Value, key: Key, dict: Map<Key, Value>) => void, context?: any): void;
        [Symbol.iterator](): {
            [Symbol.iterator](): any;
            next(): IteratorResult<[Key, Value], any>;
        };
    }
}

declare namespace $ {
    function $mol_mem_key<Host extends object, Field extends keyof Host, Prop extends Extract<Host[Field], (id: any, next?: any) => any>>(proto: Host, name: Field, descr?: TypedPropertyDescriptor<Prop>): any;
}

declare namespace $ {
    function $mol_atom2_autorun(calculate: () => any): $mol_atom2<unknown>;
}

declare namespace $ {
    class $mol_defer extends $mol_object {
        run: () => void;
        constructor(run: () => void);
        destructor(): void;
        static all: $mol_defer[];
        static timer: any;
        static scheduleNative: (handler: () => void) => any;
        static schedule(): void;
        static unschedule(): void;
        static add(defer: $mol_defer): void;
        static drop(defer: $mol_defer): void;
        static run(): void;
    }
}

declare namespace $ {
    class $mol_view_selection extends $mol_object {
        static focused(next?: Element[]): Element[];
        static focus(event: FocusEvent): void;
        static blur(event: FocusEvent): void;
    }
}

declare namespace $ {
    class $mol_after_timeout extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_qname(name: string): string;
}

declare namespace $ {
    function $mol_const<Value>(value: Value): {
        (): Value;
        '()': Value;
    };
}

declare namespace $ {
    function $mol_dom_render_attributes(el: Element, attrs: {
        [key: string]: string | number | boolean | null;
    }): void;
}

declare namespace $ {
    function $mol_fail_catch(error: object): boolean;
}

declare namespace $ {
    function $mol_dom_render_styles(el: Element, styles: {
        [key: string]: string | number;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_fields(el: Element, fields: {
        [key: string]: any;
    }): void;
}

declare namespace $ {
    function $mol_dom_render_children(el: Element, childNodes: NodeList | Array<Node | string | null>): void;
}

declare namespace $ {
    class $mol_memo extends $mol_wrapper {
        static wrap<This extends object, Value>(task: (this: This, next?: Value) => Value): (this: This, next?: Value | undefined) => Value | undefined;
    }
}

declare namespace $ {
    function $mol_func_name(this: $mol_ambient_context, func: Function): string;
    function $mol_func_name_from<Target extends Function>(target: Target, source: Function): Target;
}

declare namespace $ {
    function $mol_deprecated(message: string): <Method extends (this: Host, ...args: readonly any[]) => any, Host extends { [key in Field]: Method; } & {
        $: $mol_ambient_context;
    }, Field extends keyof Host>(host: Host, field: Field, descr: TypedPropertyDescriptor<Method>) => void;
}

declare namespace $ {
    type $mol_type_keys_extract<Input, Upper> = {
        [Field in keyof Input]: unknown extends Input[Field] ? never : Input[Field] extends never ? never : Input[Field] extends Upper ? Field : never;
    }[keyof Input];
}

declare namespace $ {
    type $mol_type_pick<Input, Upper> = Pick<Input, $mol_type_keys_extract<Input, Upper>>;
}

declare namespace $ {
    type $mol_view_content = $mol_view | Node | string | number | boolean;
    function $mol_view_visible_width(): number;
    function $mol_view_visible_height(): number;
    function $mol_view_state_key(suffix: string): string;
    class $mol_view extends $mol_object {
        static Root<This extends typeof $mol_view>(this: This, id: number): InstanceType<This>;
        autorun(): $mol_atom2<unknown>;
        static autobind(): void;
        title(): string;
        focused(next?: boolean): boolean;
        state_key(suffix?: string): string;
        dom_name(): string;
        dom_name_space(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        sub_visible(): readonly (string | number | boolean | Node | $mol_view)[];
        minimal_width(): number;
        maximal_width(): number;
        minimal_height(): number;
        static watchers: Set<$mol_view>;
        view_rect(): ClientRect | null;
        view_rect_cache(next?: ClientRect | null): ClientRect | null;
        view_rect_watcher(): {
            destructor: () => boolean;
        };
        dom_id(): any;
        dom_node(next?: Element): Element;
        dom_tree(next?: Element): Element;
        dom_node_actual(): Element;
        render(): void;
        static view_classes(): (typeof $mol_view)[];
        view_names_owned(): string[];
        view_names(): string[];
        attr_static(): {
            [key: string]: string | number | boolean | null;
        };
        attr(): {};
        style(): {
            [key: string]: string | number;
        };
        field(): {
            [key: string]: any;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        event_async(): {
            [key: string]: (event: Event) => void;
        };
        plugins(): readonly $mol_view[];
    }
    type $mol_view_all = $mol_type_pick<$mol_ambient_context, typeof $mol_view>;
}

declare namespace $ {
}

interface Window {
    cordova: any;
}
declare namespace $ {
}

declare namespace $ {
    type $mol_type_error<Message, Info = {}> = Message & {
        $mol_type_error: Info;
    };
}

declare namespace $ {
    type $mol_type_override<Base, Over> = Omit<Base, keyof Over> & Over;
}

declare namespace $ {
    const $mol_colors: {
        readonly aliceblue: "#f0f8ff";
        readonly antiquewhite: "#faebd7";
        readonly aqua: "#00ffff";
        readonly aquamarine: "#7fffd4";
        readonly azure: "#f0ffff";
        readonly beige: "#f5f5dc";
        readonly bisque: "#ffe4c4";
        readonly black: "#000000";
        readonly blanchedalmond: "#ffebcd";
        readonly blue: "#0000ff";
        readonly blueviolet: "#8a2be2";
        readonly brown: "#a52a2a";
        readonly burlywood: "#deb887";
        readonly cadetblue: "#5f9ea0";
        readonly chartreuse: "#7fff00";
        readonly chocolate: "#d2691e";
        readonly coral: "#ff7f50";
        readonly cornflowerblue: "#6495ed";
        readonly cornsilk: "#fff8dc";
        readonly crimson: "#dc143c";
        readonly cyan: "#00ffff";
        readonly darkblue: "#00008b";
        readonly darkcyan: "#008b8b";
        readonly darkgoldenrod: "#b8860b";
        readonly darkgray: "#a9a9a9";
        readonly darkgreen: "#006400";
        readonly darkgrey: "#a9a9a9";
        readonly darkkhaki: "#bdb76b";
        readonly darkmagenta: "#8b008b";
        readonly darkolivegreen: "#556b2f";
        readonly darkorange: "#ff8c00";
        readonly darkorchid: "#9932cc";
        readonly darkred: "#8b0000";
        readonly darksalmon: "#e9967a";
        readonly darkseagreen: "#8fbc8f";
        readonly darkslateblue: "#483d8b";
        readonly darkslategrey: "#2f4f4f";
        readonly darkturquoise: "#00ced1";
        readonly darkviolet: "#9400d3";
        readonly deeppink: "#ff1493";
        readonly deepskyblue: "#00bfff";
        readonly dimgray: "#696969";
        readonly dimgrey: "#696969";
        readonly dodgerblue: "#1e90ff";
        readonly firebrick: "#b22222";
        readonly floralwhite: "#fffaf0";
        readonly forestgreen: "#228b22";
        readonly fuchsia: "#ff00ff";
        readonly gainsboro: "#dcdcdc";
        readonly ghostwhite: "#f8f8ff";
        readonly gold: "#ffd700";
        readonly goldenrod: "#daa520";
        readonly gray: "#808080";
        readonly green: "#008000";
        readonly greenyellow: "#adff2f";
        readonly grey: "#808080";
        readonly honeydew: "#f0fff0";
        readonly hotpink: "#ff69b4";
        readonly indianred: "#cd5c5c";
        readonly indigo: "#4b0082";
        readonly ivory: "#fffff0";
        readonly khaki: "#f0e68c";
        readonly lavender: "#e6e6fa";
        readonly lavenderblush: "#fff0f5";
        readonly lawngreen: "#7cfc00";
        readonly lemonchiffon: "#fffacd";
        readonly lightblue: "#add8e6";
        readonly lightcoral: "#f08080";
        readonly lightcyan: "#e0ffff";
        readonly lightgoldenrodyellow: "#fafad2";
        readonly lightgray: "#d3d3d3";
        readonly lightgreen: "#90ee90";
        readonly lightgrey: "#d3d3d3";
        readonly lightpink: "#ffb6c1";
        readonly lightsalmon: "#ffa07a";
        readonly lightseagreen: "#20b2aa";
        readonly lightskyblue: "#87cefa";
        readonly lightslategray: "#778899";
        readonly lightslategrey: "#778899";
        readonly lightsteelblue: "#b0c4de";
        readonly lightyellow: "#ffffe0";
        readonly lime: "#00ff00";
        readonly limegreen: "#32cd32";
        readonly linen: "#faf0e6";
        readonly magenta: "#ff00ff";
        readonly maroon: "#800000";
        readonly mediumaquamarine: "#66cdaa";
        readonly mediumblue: "#0000cd";
        readonly mediumorchid: "#ba55d3";
        readonly mediumpurple: "#9370db";
        readonly mediumseagreen: "#3cb371";
        readonly mediumslateblue: "#7b68ee";
        readonly mediumspringgreen: "#00fa9a";
        readonly mediumturquoise: "#48d1cc";
        readonly mediumvioletred: "#c71585";
        readonly midnightblue: "#191970";
        readonly mintcream: "#f5fffa";
        readonly mistyrose: "#ffe4e1";
        readonly moccasin: "#ffe4b5";
        readonly navajowhite: "#ffdead";
        readonly navy: "#000080";
        readonly oldlace: "#fdf5e6";
        readonly olive: "#808000";
        readonly olivedrab: "#6b8e23";
        readonly orange: "#ffa500";
        readonly orangered: "#ff4500";
        readonly orchid: "#da70d6";
        readonly palegoldenrod: "#eee8aa";
        readonly palegreen: "#98fb98";
        readonly paleturquoise: "#afeeee";
        readonly palevioletred: "#db7093";
        readonly papayawhip: "#ffefd5";
        readonly peachpuff: "#ffdab9";
        readonly peru: "#cd853f";
        readonly pink: "#ffc0cb";
        readonly plum: "#dda0dd";
        readonly powderblue: "#b0e0e6";
        readonly purple: "#800080";
        readonly rebeccapurple: "#663399";
        readonly red: "#ff0000";
        readonly rosybrown: "#bc8f8f";
        readonly royalblue: "#4169e1";
        readonly saddlebrown: "#8b4513";
        readonly salmon: "#fa8072";
        readonly sandybrown: "#f4a460";
        readonly seagreen: "#2e8b57";
        readonly seashell: "#fff5ee";
        readonly sienna: "#a0522d";
        readonly silver: "#c0c0c0";
        readonly skyblue: "#87ceeb";
        readonly slateblue: "#6a5acd";
        readonly slategray: "#708090";
        readonly slategrey: "#708090";
        readonly snow: "#fffafa";
        readonly springgreen: "#00ff7f";
        readonly steelblue: "#4682b4";
        readonly tan: "#d2b48c";
        readonly teal: "#008080";
        readonly thistle: "#d8bfd8";
        readonly tomato: "#ff6347";
        readonly turquoise: "#40e0d0";
        readonly violet: "#ee82ee";
        readonly wheat: "#f5deb3";
        readonly white: "#ffffff";
        readonly whitesmoke: "#f5f5f5";
        readonly yellow: "#ffff00";
        readonly yellowgreen: "#9acd32";
    };
}

declare namespace $ {
    export type $mol_style_properties = Partial<$mol_type_override<CSSStyleDeclaration, Overrides>>;
    type Common = 'inherit' | 'initial' | 'unset';
    type Color = keyof typeof $mol_colors | 'transparent' | 'currentcolor' | $mol_style_func<'hsla' | 'rgba' | 'var'>;
    type Length = 0 | $mol_style_unit<$mol_style_unit_length> | $mol_style_func<'calc'>;
    type Size = 'auto' | 'max-content' | 'min-content' | 'fit-content' | Length | Common;
    type Directions<Value> = Value | [Value, Value] | {
        top?: Value;
        right?: Value;
        bottom?: Value;
        left?: Value;
    };
    type Span_align = 'none' | 'start' | 'end' | 'center';
    type Snap_axis = 'x' | 'y' | 'block' | 'inline' | 'both';
    type Overflow = 'visible' | 'hidden' | 'clip' | 'scroll' | 'auto' | 'overlay' | Common;
    type ContainRule = 'size' | 'layout' | 'style' | 'paint';
    interface Overrides {
        alignContent?: 'baseline' | 'start' | 'end' | 'flex-start' | 'flex-end' | 'center' | 'normal' | 'space-between' | 'space-around' | 'space-evenly' | 'stretch' | ['first' | 'last', 'baseline'] | ['safe' | 'unsafe', 'start' | 'end' | 'flex-start' | 'flex-end'] | Common;
        background?: 'none' | {
            color?: Color | Common;
            image?: [$mol_style_func<'url'>][];
        };
        box?: {
            shadow?: readonly {
                inset?: boolean;
                x: Length;
                y: Length;
                blur: Length;
                spread: Length;
                color: Color;
            }[] | 'none' | Common;
        };
        font?: {
            style?: 'normal' | 'italic' | Common;
            weight?: 'normal' | 'bold' | 'lighter' | 'bolder' | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | Common;
            size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large' | 'xx-large' | 'xxx-large' | 'smaller' | 'larger' | Length | Common;
            family?: 'serif' | 'sans-serif' | 'monospace' | 'cursive' | 'fantasy' | 'system-ui' | 'ui-serif' | 'ui-sans-serif' | 'ui-monospace' | 'ui-rounded' | 'emoji' | 'math' | 'fangsong' | Common;
        };
        color?: Color | Common;
        display?: 'block' | 'inline' | 'run-in' | 'list-item' | 'none' | 'flow' | 'flow-root' | 'table' | 'flex' | 'grid' | 'contents' | 'table-row-group' | 'table-header-group' | 'table-footer-group' | 'table-column-group' | 'table-row' | 'table-cell' | 'table-column' | 'table-caption' | 'inline-block' | 'inline-table' | 'inline-flex' | 'inline-grid' | 'ruby' | 'ruby-base' | 'ruby-text' | 'ruby-base-container' | 'ruby-text-container' | Common;
        overflow?: Overflow | {
            x?: Overflow | Common;
            y?: Overflow | Common;
            anchor?: 'auto' | 'none' | Common;
        };
        contain?: 'none' | 'strict' | 'content' | ContainRule | ContainRule[] | Common;
        whiteSpace?: 'normal' | 'nowrap' | 'break-spaces' | 'pre' | 'pre-wrap' | 'pre-line' | Common;
        webkitOverflowScrolling?: 'auto' | 'touch';
        scrollbar?: {
            color?: [Color, Color] | 'dark' | 'light' | 'auto' | Common;
        };
        scroll?: {
            snap?: {
                type: 'none' | Snap_axis | [Snap_axis, 'mandatory' | 'proximity'] | Common;
                stop: 'normal' | 'always' | Common;
                align: Span_align | [Span_align, Span_align] | Common;
            };
        };
        width?: Size;
        minWidth?: Size;
        maxWidth?: Size;
        height?: Size;
        minHeight?: Size;
        maxHeight?: Size;
        margin?: Directions<Length | 'auto'>;
        padding?: Directions<Length | 'auto'>;
        flex?: 'none' | 'auto' | {
            grow?: number | Common;
            shrink?: number | Common;
            basis?: Size;
            direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
            wrap?: 'wrap' | 'nowrap' | 'wrap-reverse' | Common;
        };
        zIndex: number;
    }
    export {};
}

declare namespace $ {
    type $mol_style_pseudo_class = ':active' | ':any' | ':any-link' | ':checked' | ':default' | ':defined' | ':dir(rtl)' | ':dir(ltr)' | ':disabled' | ':empty' | ':enabled' | ':first' | ':first-child' | ':first-of-type' | ':fullscreen' | ':focus' | ':focus-visible' | ':focus-within' | ':hover' | ':indeterminate' | ':in-range' | ':invalid' | ':last-child' | ':last-of-type' | ':left' | ':link' | ':not()' | ':nth-child(even)' | ':nth-child(odd)' | ':nth-last-child(even)' | ':nth-last-child(odd)' | ':nth-of-type(even)' | ':nth-of-type(odd)' | ':nth-last-of-type(even)' | ':nth-last-of-type(odd)' | ':only-child' | ':only-of-type' | ':optional' | ':out-of-range' | ':read-only' | ':read-write' | ':required' | ':right' | ':root' | ':scope' | ':target' | ':valid' | ':visited';
}

declare namespace $ {
    type $mol_style_pseudo_element = '::after' | '::before' | '::cue' | '::first-letter' | '::first-line' | '::selection' | '::slotted' | '::backdrop' | '::placeholder' | '::marker' | '::spelling-error' | '::grammar-error' | '::-webkit-calendar-picker-indicator' | '::-webkit-color-swatch' | '::-webkit-color-swatch-wrapper' | '::-webkit-details-marker' | '::-webkit-file-upload-button' | '::-webkit-image-inner-element' | '::-webkit-inner-spin-button' | '::-webkit-input-placeholder' | '::-webkit-input-speech-button' | '::-webkit-keygen-select' | '::-webkit-media-controls-panel' | '::-webkit-media-controls-timeline-container' | '::-webkit-media-slider-container' | '::-webkit-meter-bar' | '::-webkit-meter-even-less-good-value' | '::-webkit-meter-optimum-value' | '::-webkit-meter-suboptimal-value' | '::-webkit-progress-bar' | '::-webkit-progress-value' | '::-webkit-resizer' | '::-webkit-resizer:window-inactive' | '::-webkit-scrollbar' | '::-webkit-scrollbar-button' | '::-webkit-scrollbar-button:disabled' | '::-webkit-scrollbar-button:double-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment' | '::-webkit-scrollbar-button:double-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:double-button:horizontal:start:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:decrement' | '::-webkit-scrollbar-button:double-button:vertical:end:increment' | '::-webkit-scrollbar-button:double-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:double-button:vertical:start:decrement' | '::-webkit-scrollbar-button:double-button:vertical:start:increment' | '::-webkit-scrollbar-button:end' | '::-webkit-scrollbar-button:end:decrement' | '::-webkit-scrollbar-button:end:increment' | '::-webkit-scrollbar-button:horizontal' | '::-webkit-scrollbar-button:horizontal:decrement' | '::-webkit-scrollbar-button:horizontal:decrement:active' | '::-webkit-scrollbar-button:horizontal:decrement:hover' | '::-webkit-scrollbar-button:horizontal:decrement:window-inactive' | '::-webkit-scrollbar-button:horizontal:end' | '::-webkit-scrollbar-button:horizontal:end:decrement' | '::-webkit-scrollbar-button:horizontal:end:increment' | '::-webkit-scrollbar-button:horizontal:end:increment:corner-present' | '::-webkit-scrollbar-button:horizontal:increment' | '::-webkit-scrollbar-button:horizontal:increment:active' | '::-webkit-scrollbar-button:horizontal:increment:hover' | '::-webkit-scrollbar-button:horizontal:increment:window-inactive' | '::-webkit-scrollbar-button:horizontal:start' | '::-webkit-scrollbar-button:horizontal:start:decrement' | '::-webkit-scrollbar-button:horizontal:start:increment' | '::-webkit-scrollbar-button:start' | '::-webkit-scrollbar-button:start:decrement' | '::-webkit-scrollbar-button:start:increment' | '::-webkit-scrollbar-button:vertical' | '::-webkit-scrollbar-button:vertical:decrement' | '::-webkit-scrollbar-button:vertical:decrement:active' | '::-webkit-scrollbar-button:vertical:decrement:hover' | '::-webkit-scrollbar-button:vertical:decrement:window-inactive' | '::-webkit-scrollbar-button:vertical:end' | '::-webkit-scrollbar-button:vertical:end:decrement' | '::-webkit-scrollbar-button:vertical:end:increment' | '::-webkit-scrollbar-button:vertical:end:increment:corner-present' | '::-webkit-scrollbar-button:vertical:increment' | '::-webkit-scrollbar-button:vertical:increment:active' | '::-webkit-scrollbar-button:vertical:increment:hover' | '::-webkit-scrollbar-button:vertical:increment:window-inactive' | '::-webkit-scrollbar-button:vertical:start' | '::-webkit-scrollbar-button:vertical:start:decrement' | '::-webkit-scrollbar-button:vertical:start:increment' | '::-webkit-scrollbar-corner' | '::-webkit-scrollbar-corner:window-inactive' | '::-webkit-scrollbar-thumb' | '::-webkit-scrollbar-thumb:horizontal' | '::-webkit-scrollbar-thumb:horizontal:active' | '::-webkit-scrollbar-thumb:horizontal:hover' | '::-webkit-scrollbar-thumb:horizontal:window-inactive' | '::-webkit-scrollbar-thumb:vertical' | '::-webkit-scrollbar-thumb:vertical:active' | '::-webkit-scrollbar-thumb:vertical:hover' | '::-webkit-scrollbar-thumb:vertical:window-inactive' | '::-webkit-scrollbar-track' | '::-webkit-scrollbar-track-piece' | '::-webkit-scrollbar-track-piece:disabled' | '::-webkit-scrollbar-track-piece:end' | '::-webkit-scrollbar-track-piece:horizontal:decrement' | '::-webkit-scrollbar-track-piece:horizontal:decrement:active' | '::-webkit-scrollbar-track-piece:horizontal:decrement:hover' | '::-webkit-scrollbar-track-piece:horizontal:end' | '::-webkit-scrollbar-track-piece:horizontal:end:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:double-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button' | '::-webkit-scrollbar-track-piece:horizontal:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:horizontal:end:single-button' | '::-webkit-scrollbar-track-piece:horizontal:increment' | '::-webkit-scrollbar-track-piece:horizontal:increment:active' | '::-webkit-scrollbar-track-piece:horizontal:increment:hover' | '::-webkit-scrollbar-track-piece:horizontal:start' | '::-webkit-scrollbar-track-piece:horizontal:start:double-button' | '::-webkit-scrollbar-track-piece:horizontal:start:no-button' | '::-webkit-scrollbar-track-piece:horizontal:start:single-button' | '::-webkit-scrollbar-track-piece:start' | '::-webkit-scrollbar-track-piece:vertical:decrement' | '::-webkit-scrollbar-track-piece:vertical:decrement:active' | '::-webkit-scrollbar-track-piece:vertical:decrement:hover' | '::-webkit-scrollbar-track-piece:vertical:end' | '::-webkit-scrollbar-track-piece:vertical:end:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:double-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button' | '::-webkit-scrollbar-track-piece:vertical:end:no-button:corner-present' | '::-webkit-scrollbar-track-piece:vertical:end:single-button' | '::-webkit-scrollbar-track-piece:vertical:increment' | '::-webkit-scrollbar-track-piece:vertical:increment:active' | '::-webkit-scrollbar-track-piece:vertical:increment:hover' | '::-webkit-scrollbar-track-piece:vertical:start' | '::-webkit-scrollbar-track-piece:vertical:start:double-button' | '::-webkit-scrollbar-track-piece:vertical:start:no-button' | '::-webkit-scrollbar-track-piece:vertical:start:single-button' | '::-webkit-scrollbar-track:disabled' | '::-webkit-scrollbar-track:horizontal' | '::-webkit-scrollbar-track:horizontal:disabled' | '::-webkit-scrollbar-track:horizontal:disabled:corner-present' | '::-webkit-scrollbar-track:vertical:disabled' | '::-webkit-scrollbar-track:vertical:disabled:corner-present' | '::-webkit-scrollbar:horizontal' | '::-webkit-scrollbar:horizontal:corner-present' | '::-webkit-scrollbar:horizontal:window-inactive' | '::-webkit-scrollbar:vertical' | '::-webkit-scrollbar:vertical:corner-present' | '::-webkit-scrollbar:vertical:window-inactive' | '::-webkit-search-cancel-button' | '::-webkit-search-decoration' | '::-webkit-search-results-button' | '::-webkit-search-results-decoration' | '::-webkit-slider-container' | '::-webkit-slider-runnable-track' | '::-webkit-slider-thumb' | '::-webkit-slider-thumb:disabled' | '::-webkit-slider-thumb:hover' | '::-webkit-textfield-decoration-container' | '::-webkit-validation-bubble' | '::-webkit-validation-bubble-arrow' | '::-webkit-validation-bubble-arrow-clipper' | '::-webkit-validation-bubble-heading' | '::-webkit-validation-bubble-message' | '::-webkit-validation-bubble-text-block';
}

declare namespace $ {
    type Descendant<Name extends keyof $mol_view_all, Config> = $mol_style_guard<Extract<$mol_type_result<$mol_view_all[Name]>, $mol_view>, Config>;
    type Kids<Config> = {
        [view in keyof Config]: view extends keyof $mol_view_all ? Descendant<view, Config[view]> : $mol_type_error<'Unknown View'>;
    };
    type Attrs<View extends $mol_view, Config> = {
        [name in keyof Config]: name extends keyof ReturnType<View['attr']> ? {
            [val in keyof Config[name]]: $mol_style_guard<View, Config[name][val]>;
        } : $mol_type_error<'Unknown attribute'>;
    };
    type Medias<View extends $mol_view, Config> = {
        [query in keyof Config]: $mol_style_guard<View, Config[query]>;
    };
    export type $mol_style_guard<View extends $mol_view, Config> = $mol_style_properties & {
        [key in keyof Config]: key extends keyof $mol_style_properties ? unknown : key extends $mol_style_pseudo_class | $mol_style_pseudo_element ? $mol_style_guard<View, Config[key]> : key extends '>' ? Kids<Config[key]> : key extends '@' ? Attrs<View, Config[key]> : key extends '@media' ? Medias<View, Config[key]> : key extends keyof $mol_view_all ? Descendant<key, Config[key]> : key extends keyof View ? View[key] extends (id?: any) => infer Sub ? Sub extends $mol_view ? $mol_style_guard<Sub, Config[key]> : $mol_type_error<'Property returns non $mol_view', {
            Returns: Sub;
        }> : $mol_type_error<'Field is not a Property'> : $mol_type_error<'Unknown Property or View'>;
    };
    export {};
}

declare namespace $ {
    function $mol_style_sheet<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config0: Config): string;
}

declare namespace $ {
    function $mol_style_define<Component extends $mol_view, Config extends $mol_style_guard<Component, Config>>(Component: new () => Component, config: Config): HTMLStyleElement | null;
}

declare namespace $ {
    class $mol_scroll extends $mol_view {
        minimal_height(): number;
        _event_scroll_timer(val?: any): any;
        field(): {
            scrollTop: any;
            scrollLeft: any;
            tabIndex: number;
        };
        event(): {
            scroll: (event?: any) => any;
        };
        scroll_top(val?: any): any;
        scroll_left(val?: any): any;
        tabindex(): number;
        event_scroll(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_session<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value): Value;
        prefix(): string;
        value(key: string, next?: Value): Value;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_scroll extends $.$mol_scroll {
        scroll_top(next?: number): number;
        scroll_left(next?: number): number;
        _event_scroll_timer(next?: $mol_after_timeout | null): $mol_after_timeout | null | undefined;
        event_scroll(next?: Event): void;
    }
}

declare namespace $ {
    class $mol_book2 extends $mol_scroll {
        sub(): readonly $mol_view[];
        minimal_width(): number;
        Placeholder(): $mol_view;
        pages(): readonly $mol_view[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_book2 extends $.$mol_book2 {
        title(): string;
        sub(): $mol_view[];
    }
}

declare namespace $ {
    type $mol_data_value<Input = any, Output = any> = (val: Input) => Output;
}

declare namespace $ {
    function $mol_data_setup<Value extends $mol_data_value, Config = never>(value: Value, config: Config): Value & {
        config: Config;
        Value: ReturnType<Value>;
    };
}

declare namespace $ {
    function $mol_diff_path<Item>(...paths: Item[][]): {
        prefix: Item[];
        suffix: Item[][];
    };
}

declare namespace $ {
    class $mol_error_mix extends Error {
        errors: Error[];
        constructor(message: string, ...errors: Error[]);
        toJSON(): string;
    }
}

declare namespace $ {
    class $mol_data_error extends $mol_error_mix {
    }
}

declare namespace $ {
    function $mol_data_array<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][] | unknown) => readonly ReturnType<Sub>[]) & {
        config: Sub;
        Value: readonly ReturnType<Sub>[];
    };
}

declare namespace $ {
    type $mol_type_merge<Intersection> = Intersection extends (...a: any[]) => any ? Intersection : Intersection extends new (...a: any[]) => any ? Intersection : Intersection extends object ? {
        [Key in keyof Intersection]: $mol_type_merge<Intersection[Key]>;
    } : Intersection;
}

declare namespace $ {
    type $mol_type_partial_undefined<Val> = $mol_type_merge<Partial<Val> & Pick<Val, {
        [Field in keyof Val]: undefined extends Val[Field] ? never : Field;
    }[keyof Val]>>;
}

declare namespace $ {
    function $mol_data_record<Sub extends Record<string, $mol_data_value<any>>>(sub: Sub): ((val: unknown) => Readonly<$mol_type_merge<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }> & Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>) & {
        config: Sub;
        Value: Readonly<$mol_type_merge<Partial<{ [key in keyof Sub]: ReturnType<Sub[key]>; }> & Pick<{ [key in keyof Sub]: ReturnType<Sub[key]>; }, { [Field in keyof { [key in keyof Sub]: ReturnType<Sub[key]>; }]: undefined extends { [key in keyof Sub]: ReturnType<Sub[key]>; }[Field] ? never : Field; }[keyof Sub]>>>;
    };
}

declare namespace $ {
    let $mol_data_string: (val: string) => string;
}

declare namespace $ {
    function $mol_data_nullable<Sub extends $mol_data_value>(sub: Sub): ((val: Parameters<Sub>[0] | null) => ReturnType<Sub> | null) & {
        config: Sub;
        Value: ReturnType<Sub> | null;
    };
}

declare namespace $ {
    let $mol_data_number: (val: number) => number;
}

declare namespace $ {
    function $mol_data_integer(val: number): number;
}

declare namespace $ {
    let $mol_data_boolean: (val: boolean) => boolean;
}

declare namespace $ {
    function $mol_data_variant<Sub extends $mol_data_value[]>(...sub: Sub): ((val: Parameters<Sub[number]>[0]) => ReturnType<Sub[number]>) & {
        config: Sub;
        Value: ReturnType<Sub[number]>;
    };
}

declare namespace $ {
    function $mol_data_const<Val extends {} | string | number>(ref: Val): ((val: Val) => Val) & {
        config: Val;
        Value: Val;
    };
}

declare namespace $ {
    class $mol_store<Data> extends $mol_object2 {
        data_default?: Data | undefined;
        constructor(data_default?: Data | undefined);
        data(next?: Data): Data;
        snapshot(next?: string): string;
        value<Key extends keyof Data>(key: Key, next?: Data[Key]): NonNullable<Data[Key]>;
        sub<Key extends keyof Data, Lens extends $mol_store<Data[Key]> = $mol_store<Data[Key]>>(key: Key, lens?: Lens): NonNullable<Lens>;
    }
}

declare namespace $ {
    class $mol_time_base {
        static patterns: Record<string, (arg: any) => string>;
        static formatter(pattern: string): (arg: any) => string;
        toString(pattern: string): string;
    }
}

declare namespace $ {
    type $mol_time_duration_config = number | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
    };
    class $mol_time_duration extends $mol_time_base {
        constructor(config?: $mol_time_duration_config);
        readonly year: number;
        readonly month: number;
        readonly day: number;
        readonly hour: number;
        readonly minute: number;
        readonly second: number;
        summ(config: $mol_time_duration_config): $mol_time_duration;
        mult(numb: number): $mol_time_duration;
        count(config: $mol_time_duration_config): number;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            '#Y': (duration: $mol_time_duration) => string;
            '#M': (duration: $mol_time_duration) => string;
            '#D': (duration: $mol_time_duration) => string;
            '#h': (duration: $mol_time_duration) => string;
            '#m': (duration: $mol_time_duration) => string;
            '#s': (duration: $mol_time_duration) => string;
            '+hh': (duration: $mol_time_duration) => string;
            mm: (duration: $mol_time_duration) => string;
        };
    }
}

declare namespace $ {
    type $mol_time_moment_config = number | Date | string | {
        year?: number;
        month?: number;
        day?: number;
        hour?: number;
        minute?: number;
        second?: number;
        offset?: $mol_time_duration_config;
    };
    class $mol_time_moment extends $mol_time_base {
        constructor(config?: $mol_time_moment_config);
        readonly year: number | undefined;
        readonly month: number | undefined;
        readonly day: number | undefined;
        readonly hour: number | undefined;
        readonly minute: number | undefined;
        readonly second: number | undefined;
        readonly offset: $mol_time_duration | undefined;
        get weekday(): number;
        _native: Date | undefined;
        get native(): Date;
        _normal: $mol_time_moment | undefined;
        get normal(): $mol_time_moment;
        merge(config: $mol_time_moment_config): $mol_time_moment;
        shift(config: $mol_time_duration_config): $mol_time_moment;
        mask(config: $mol_time_moment_config): $mol_time_moment;
        toOffset(config: $mol_time_duration_config): $mol_time_moment;
        valueOf(): number;
        toJSON(): string;
        toString(pattern?: string): string;
        static patterns: {
            YYYY: (moment: $mol_time_moment) => string;
            AD: (moment: $mol_time_moment) => string;
            YY: (moment: $mol_time_moment) => string;
            Month: (moment: $mol_time_moment) => string;
            'DD Month': (moment: $mol_time_moment) => string;
            'D Month': (moment: $mol_time_moment) => string;
            Mon: (moment: $mol_time_moment) => string;
            'DD Mon': (moment: $mol_time_moment) => string;
            'D Mon': (moment: $mol_time_moment) => string;
            '-MM': (moment: $mol_time_moment) => string;
            MM: (moment: $mol_time_moment) => string;
            M: (moment: $mol_time_moment) => string;
            WeekDay: (moment: $mol_time_moment) => string;
            WD: (moment: $mol_time_moment) => string;
            '-DD': (moment: $mol_time_moment) => string;
            DD: (moment: $mol_time_moment) => string;
            D: (moment: $mol_time_moment) => string;
            Thh: (moment: $mol_time_moment) => string;
            hh: (moment: $mol_time_moment) => string;
            h: (moment: $mol_time_moment) => string;
            ':mm': (moment: $mol_time_moment) => string;
            mm: (moment: $mol_time_moment) => string;
            m: (moment: $mol_time_moment) => string;
            ':ss': (moment: $mol_time_moment) => string;
            ss: (moment: $mol_time_moment) => string;
            s: (moment: $mol_time_moment) => string;
            '.sss': (moment: $mol_time_moment) => string;
            sss: (moment: $mol_time_moment) => string;
            Z: (moment: $mol_time_moment) => string;
        };
    }
}

declare namespace $ {
    type $gravity_animal_kind = 'Cat' | 'Dog';
    type $gravity_animal_gender = 'Male' | 'Female';
    class $gravity_animal extends $mol_store<{
        id?: number;
        name?: string;
        card?: string;
        chip?: string;
        cage?: string;
        arrivedAt?: string;
        departedAt?: string | null;
        birthDate?: string;
        kind?: $gravity_animal_kind;
        gender?: $gravity_animal_gender;
        weight?: number;
        ears?: string;
        tail?: string;
        size?: string;
        color?: string;
        description?: string;
        photos?: readonly string[];
        fur?: string;
    }> {
        id(): string;
        name(next?: string): string;
        card(next?: string): string;
        chip(next?: string): string;
        cage(next?: string): string;
        size(next?: string): string;
        ear(next?: string): string;
        tail(next?: string): string;
        color(next?: string): string;
        weight(next?: number): number;
        kind(next?: $gravity_animal_kind): $gravity_animal_kind;
        gender(next?: $gravity_animal_gender): $gravity_animal_gender;
        arrived_date(next?: $mol_time_moment | null): $mol_time_moment | null;
        departed_date(next?: $mol_time_moment | null): $mol_time_moment | null;
        born_date(next?: $mol_time_moment | null): $mol_time_moment | null;
    }
}

declare namespace $ {
    class $mol_state_local<Value> extends $mol_object {
        static 'native()': Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
        static native(): Storage | {
            getItem(key: string): any;
            setItem(key: string, value: string): void;
            removeItem(key: string): void;
        };
        static value<Value>(key: string, next?: Value, force?: $mol_mem_force): Value | null;
        prefix(): string;
        value(key: string, next?: Value): Value | null;
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_dom_parse(text: string, type?: DOMParserSupportedType): Document;
}

declare var $node: any;

declare namespace $ {
    class $mol_fetch_response extends $mol_object2 {
        readonly native: Response;
        constructor(native: Response);
        headers(): Headers;
        mime(): string | null;
        stream(): ReadableStream<Uint8Array> | null;
        text(): string;
        json(): unknown;
        buffer(): ArrayBuffer;
        xml(): Document;
        xhtml(): Document;
        html(): Document;
    }
    class $mol_fetch extends $mol_object2 {
        static request: (input: RequestInfo, init?: RequestInit | undefined) => Response;
        static response(input: RequestInfo, init?: RequestInit): $mol_fetch_response;
        static stream(input: RequestInfo, init?: RequestInit): ReadableStream<Uint8Array> | null;
        static text(input: RequestInfo, init?: RequestInit): string;
        static json(input: RequestInfo, init?: RequestInit): unknown;
        static buffer(input: RequestInfo, init?: RequestInit): void;
        static xml(input: RequestInfo, init?: RequestInit): Document;
        static xhtml(input: RequestInfo, init?: RequestInit): Document;
        static html(input: RequestInfo, init?: RequestInit): Document;
    }
}

declare namespace $ {
    class $gravity_transport extends $mol_object2 {
        static api_base(): string;
        static token(next?: string | null): string | null;
        static headers(): {
            'Content-Type': string;
        } | {
            Authorization: string;
            'Content-Type': string;
        };
        static load(path: string): any;
        static link(path: string): any;
        static save(path: string, method: 'post' | 'put', body: object): any;
    }
}

declare namespace $ {
    class $gravity_shelter_animals extends $mol_store<Record<string, ReturnType<$gravity_animal['data']>>> {
        data(next?: Record<string, ReturnType<$gravity_animal['data']>>): Record<string, {
            id?: number | undefined;
            name?: string | undefined;
            card?: string | undefined;
            chip?: string | undefined;
            cage?: string | undefined;
            arrivedAt?: string | undefined;
            departedAt?: string | null | undefined;
            birthDate?: string | undefined;
            kind?: "Cat" | "Dog" | undefined;
            gender?: "Male" | "Female" | undefined;
            weight?: number | undefined;
            ears?: string | undefined;
            tail?: string | undefined;
            size?: string | undefined;
            color?: string | undefined;
            description?: string | undefined;
            photos?: readonly string[] | undefined;
            fur?: string | undefined;
        }>;
        value(key: string, next?: ReturnType<$gravity_animal['data']>): {
            id?: number | undefined;
            name?: string | undefined;
            card?: string | undefined;
            chip?: string | undefined;
            cage?: string | undefined;
            arrivedAt?: string | undefined;
            departedAt?: string | null | undefined;
            birthDate?: string | undefined;
            kind?: "Cat" | "Dog" | undefined;
            gender?: "Male" | "Female" | undefined;
            weight?: number | undefined;
            ears?: string | undefined;
            tail?: string | undefined;
            size?: string | undefined;
            color?: string | undefined;
            description?: string | undefined;
            photos?: readonly string[] | undefined;
            fur?: string | undefined;
        };
        list(): $gravity_animal[];
        Animal(index: string): $gravity_animal;
    }
    class $gravity_shelter extends $mol_store<{
        id?: string;
        name?: string;
        name_legal?: string;
    }> {
        id(next?: string): string;
        name(next?: string): string;
        name_legal(next?: string): string;
    }
}

declare namespace $ {
    class $mol_list extends $mol_view {
        render_visible_only(): boolean;
        render_over(): number;
        sub(): readonly $mol_view[];
        Empty(): $mol_view;
        Gap_before(): $mol_view;
        Gap_after(): $mol_view;
        view_window(): readonly any[];
        rows(): readonly $mol_view[];
        gap_before(): number;
        gap_after(): number;
    }
}

declare namespace $ {
    class $mol_dom_listener extends $mol_object {
        _node: any;
        _event: string;
        _handler: (event: any) => any;
        _config: boolean | {
            passive: boolean;
        };
        constructor(_node: any, _event: string, _handler: (event: any) => any, _config?: boolean | {
            passive: boolean;
        });
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_print extends $mol_object {
        static before(): $mol_dom_listener;
        static after(): $mol_dom_listener;
        static active(next?: boolean): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_list extends $.$mol_list {
        sub(): readonly $mol_view[];
        render_visible_only(): boolean;
        view_window(): [number, number];
        gap_before(): number;
        gap_after(): number;
        sub_visible(): $mol_view[];
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_labeler extends $mol_list {
        rows(): readonly any[];
        label(): readonly (string | number | boolean | Node | $mol_view)[];
        Title(): $mol_view;
        content(): readonly any[];
        Content(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form_field extends $mol_labeler {
        label(): readonly any[];
        Content(): any;
        name(): string;
        bid(): string;
        Bid(): $mol_view;
        control(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_speck extends $mol_view {
        attr(): {
            mol_theme: string;
        };
        style(): {
            minHeight: string;
        };
        sub(): readonly any[];
        value(): any;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button extends $mol_view {
        enabled(): boolean;
        minimal_height(): number;
        click(event?: any): any;
        event_click(event?: any): any;
        event(): {
            click: (event?: any) => any;
            keypress: (event?: any) => any;
        };
        attr(): {
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        Speck(): $mol_speck;
        event_activate(event?: any): any;
        event_key_press(event?: any): any;
        disabled(): boolean;
        tab_index(): number;
        hint(): string;
        hint_or_error(): string;
    }
}

declare namespace $ {
    enum $mol_keyboard_code {
        backspace = 8,
        tab = 9,
        enter = 13,
        shift = 16,
        ctrl = 17,
        alt = 18,
        pause = 19,
        capsLock = 20,
        escape = 27,
        space = 32,
        pageUp = 33,
        pageDown = 34,
        end = 35,
        home = 36,
        left = 37,
        up = 38,
        right = 39,
        down = 40,
        insert = 45,
        delete = 46,
        key0 = 48,
        key1 = 49,
        key2 = 50,
        key3 = 51,
        key4 = 52,
        key5 = 53,
        key6 = 54,
        key7 = 55,
        key8 = 56,
        key9 = 57,
        A = 65,
        B = 66,
        C = 67,
        D = 68,
        E = 69,
        F = 70,
        G = 71,
        H = 72,
        I = 73,
        J = 74,
        K = 75,
        L = 76,
        M = 77,
        N = 78,
        O = 79,
        P = 80,
        Q = 81,
        R = 82,
        S = 83,
        T = 84,
        U = 85,
        V = 86,
        W = 87,
        X = 88,
        Y = 89,
        Z = 90,
        metaLeft = 91,
        metaRight = 92,
        select = 93,
        numpad0 = 96,
        numpad1 = 97,
        numpad2 = 98,
        numpad3 = 99,
        numpad4 = 100,
        numpad5 = 101,
        numpad6 = 102,
        numpad7 = 103,
        numpad8 = 104,
        numpad9 = 105,
        multiply = 106,
        add = 107,
        subtract = 109,
        decimal = 110,
        divide = 111,
        F1 = 112,
        F2 = 113,
        F3 = 114,
        F4 = 115,
        F5 = 116,
        F6 = 117,
        F7 = 118,
        F8 = 119,
        F9 = 120,
        F10 = 121,
        F11 = 122,
        F12 = 123,
        numLock = 144,
        scrollLock = 145,
        semicolon = 186,
        equals = 187,
        comma = 188,
        dash = 189,
        period = 190,
        forwardSlash = 191,
        graveAccent = 192,
        bracketOpen = 219,
        slashBack = 220,
        slashBackLeft = 226,
        bracketClose = 221,
        quoteSingle = 222
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_button extends $.$mol_button {
        fiber(next?: $mol_fiber<any> | null): $mol_fiber<any> | null;
        disabled(): boolean;
        event_activate(next: Event): void;
        event_key_press(event: KeyboardEvent): void;
        tab_index(): number;
        error(): string;
        hint_or_error(): string;
        sub_visible(): (string | number | boolean | Node | $mol_view | $mol_speck)[];
    }
}

declare namespace $ {
    class $mol_page extends $mol_view {
        sub(): readonly any[];
        event_top(val?: any): any;
        Title(): $$.$mol_button;
        tools(): readonly (string | number | boolean | Node | $mol_view)[];
        Tools(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        body_scroll_top(val?: any): any;
        body(): readonly (string | number | boolean | Node | $mol_view)[];
        Body(): $$.$mol_scroll;
        foot(): readonly $mol_view[];
        Foot(): $mol_view;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $mol_page extends $.$mol_page {
        body_scroll_top(next?: number): number;
    }
}

declare namespace $ {
    class $mol_svg extends $mol_view {
        dom_name(): string;
        dom_name_space(): string;
        font_size(): number;
        font_family(): string;
    }
}

declare namespace $ {
    class $mol_after_work extends $mol_object2 {
        delay: number;
        task: () => void;
        id: any;
        constructor(delay: number, task: () => void);
        destructor(): void;
    }
}

declare namespace $ {
    class $mol_state_time extends $mol_object {
        static now(precision?: number, next?: number): number;
    }
}

declare namespace $.$$ {
    class $mol_svg extends $.$mol_svg {
        computed_style(): CSSStyleDeclaration;
        font_size(): number;
        font_family(): any;
    }
}

declare namespace $ {
    class $mol_svg_root extends $mol_svg {
        dom_name(): string;
        attr(): {
            viewBox: string;
            preserveAspectRatio: string;
        };
        view_box(): string;
        aspect(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_svg_path extends $mol_svg {
        dom_name(): string;
        attr(): {
            d: string;
        };
        geometry(): string;
    }
}

declare namespace $ {
    class $mol_icon extends $mol_svg_root {
        view_box(): string;
        minimal_width(): number;
        minimal_height(): number;
        sub(): readonly any[];
        path(): string;
        Path(): $mol_svg_path;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_download extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_link extends $mol_view {
        dom_name(): string;
        attr(): {
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
            mol_theme: any;
        };
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        arg(): {};
        event(): {
            click: (event?: any) => any;
        };
        uri(): string;
        hint(): string;
        target(): string;
        file_name(): string;
        current(): boolean;
        theme(): any;
        event_click(event?: any): any;
        click(event?: any): any;
    }
}

declare namespace $ {
    class $mol_state_arg extends $mol_object {
        prefix: string;
        static href(next?: string, force?: $mol_mem_force): string;
        static dict(next?: {
            [key: string]: string | null;
        }): {
            [key: string]: string;
        };
        static dict_cut(except: string[]): {
            [key: string]: string;
        };
        static value(key: string, next?: string | null): string | null;
        static link(next: {
            [key: string]: string;
        }): string;
        static make_link(next: {
            [key: string]: string | null;
        }): string;
        static encode(str: string): string;
        constructor(prefix?: string);
        value(key: string, next?: string): string | null;
        sub(postfix: string): $mol_state_arg;
        link(next: {
            [key: string]: string;
        }): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link extends $.$mol_link {
        uri(): string;
        current(): boolean;
        event_click(event?: Event): void;
        file_name(): string;
        minimal_height(): number;
        theme(): "$mol_theme_base" | null;
    }
}

declare namespace $ {
    class $mol_card extends $mol_list {
        attr(): {
            mol_card_status_type: string;
        };
        rows(): readonly $mol_view[];
        status(): string;
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        Content(): $mol_view;
        status_text(): string;
        Status(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_card extends $.$mol_card {
        rows(): $mol_view[];
    }
}

declare namespace $ {
    class $mol_button_typed extends $mol_button {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_button_minor extends $mol_button_typed {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_attach extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_attach extends $mol_card {
        Content(): $mol_view;
        items(val?: any): any;
        Add(): $$.$mol_attach_add;
        Item(id: any): $$.$mol_attach_item;
        content(): readonly $mol_view[];
        attach_new(val?: any): any;
        attach_title(): string;
    }
    class $mol_attach_item extends $mol_link {
        url_thumb(val?: any): any;
        uri(val?: any): any;
        style(): {
            backgroundImage: string;
        };
        attr(): {
            download: string;
            href: string;
            title: string;
            target: string;
            mol_link_current: boolean;
            mol_theme: any;
        };
        url_load(val?: any): any;
        style_bg(): string;
        title(): string;
    }
    class $mol_attach_add extends $mol_button_minor {
        minimal_height(): number;
        file_new(val?: any): any;
        sub(): readonly any[];
        Icon(): $mol_icon_attach;
        event_capture(val?: any): any;
        event_picked(val?: any): any;
        Input(): $mol_attach_add_input;
    }
    class $mol_attach_add_input extends $mol_view {
        dom_name(): string;
        attr(): {
            type: string;
            accept: string;
            multiple: boolean;
        };
        event_click(val?: any): any;
        event(): {
            change: (val?: any) => any;
        };
        type(): string;
        accept(): string;
        multiple(): boolean;
        event_capture(val?: any): any;
        event_picked(val?: any): any;
    }
}

declare var cordova: any;
declare namespace $ {
    var $mol_cordova: any;
    function $mol_cordova_camera(): any;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_attach extends $.$mol_attach {
        attach_new(next?: string): void;
        content(): any[];
    }
    class $mol_attach_item extends $.$mol_attach_item {
        style_bg(): string;
    }
    class $mol_attach_add extends $.$mol_attach_add {
        file_new(next?: string, force?: $mol_mem_force_fail): string | undefined;
        event_capture(next: Event): void;
        event_picked(next: Event): void;
    }
}

declare namespace $ {
    class $mol_plugin extends $mol_view {
        dom_node(next?: Element): Element;
        attr_static(): {
            [key: string]: string | number | boolean;
        };
        event(): {
            [key: string]: (event: Event) => void;
        };
        render(): void;
    }
}

declare namespace $ {
    class $mol_hotkey extends $mol_plugin {
        event(): {
            keydown: (event?: any) => any;
        };
        key(): {};
        mod_ctrl(): boolean;
        mod_alt(): boolean;
        mod_shift(): boolean;
        keydown(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_hotkey extends $.$mol_hotkey {
        key(): {
            [x: number]: ((event: KeyboardEvent) => void) | undefined;
            readonly backspace?: ((event: KeyboardEvent) => void) | undefined;
            readonly tab?: ((event: KeyboardEvent) => void) | undefined;
            readonly enter?: ((event: KeyboardEvent) => void) | undefined;
            readonly shift?: ((event: KeyboardEvent) => void) | undefined;
            readonly ctrl?: ((event: KeyboardEvent) => void) | undefined;
            readonly alt?: ((event: KeyboardEvent) => void) | undefined;
            readonly pause?: ((event: KeyboardEvent) => void) | undefined;
            readonly capsLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly escape?: ((event: KeyboardEvent) => void) | undefined;
            readonly space?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageUp?: ((event: KeyboardEvent) => void) | undefined;
            readonly pageDown?: ((event: KeyboardEvent) => void) | undefined;
            readonly end?: ((event: KeyboardEvent) => void) | undefined;
            readonly home?: ((event: KeyboardEvent) => void) | undefined;
            readonly left?: ((event: KeyboardEvent) => void) | undefined;
            readonly up?: ((event: KeyboardEvent) => void) | undefined;
            readonly right?: ((event: KeyboardEvent) => void) | undefined;
            readonly down?: ((event: KeyboardEvent) => void) | undefined;
            readonly insert?: ((event: KeyboardEvent) => void) | undefined;
            readonly delete?: ((event: KeyboardEvent) => void) | undefined;
            readonly key0?: ((event: KeyboardEvent) => void) | undefined;
            readonly key1?: ((event: KeyboardEvent) => void) | undefined;
            readonly key2?: ((event: KeyboardEvent) => void) | undefined;
            readonly key3?: ((event: KeyboardEvent) => void) | undefined;
            readonly key4?: ((event: KeyboardEvent) => void) | undefined;
            readonly key5?: ((event: KeyboardEvent) => void) | undefined;
            readonly key6?: ((event: KeyboardEvent) => void) | undefined;
            readonly key7?: ((event: KeyboardEvent) => void) | undefined;
            readonly key8?: ((event: KeyboardEvent) => void) | undefined;
            readonly key9?: ((event: KeyboardEvent) => void) | undefined;
            readonly A?: ((event: KeyboardEvent) => void) | undefined;
            readonly B?: ((event: KeyboardEvent) => void) | undefined;
            readonly C?: ((event: KeyboardEvent) => void) | undefined;
            readonly D?: ((event: KeyboardEvent) => void) | undefined;
            readonly E?: ((event: KeyboardEvent) => void) | undefined;
            readonly F?: ((event: KeyboardEvent) => void) | undefined;
            readonly G?: ((event: KeyboardEvent) => void) | undefined;
            readonly H?: ((event: KeyboardEvent) => void) | undefined;
            readonly I?: ((event: KeyboardEvent) => void) | undefined;
            readonly J?: ((event: KeyboardEvent) => void) | undefined;
            readonly K?: ((event: KeyboardEvent) => void) | undefined;
            readonly L?: ((event: KeyboardEvent) => void) | undefined;
            readonly M?: ((event: KeyboardEvent) => void) | undefined;
            readonly N?: ((event: KeyboardEvent) => void) | undefined;
            readonly O?: ((event: KeyboardEvent) => void) | undefined;
            readonly P?: ((event: KeyboardEvent) => void) | undefined;
            readonly Q?: ((event: KeyboardEvent) => void) | undefined;
            readonly R?: ((event: KeyboardEvent) => void) | undefined;
            readonly S?: ((event: KeyboardEvent) => void) | undefined;
            readonly T?: ((event: KeyboardEvent) => void) | undefined;
            readonly U?: ((event: KeyboardEvent) => void) | undefined;
            readonly V?: ((event: KeyboardEvent) => void) | undefined;
            readonly W?: ((event: KeyboardEvent) => void) | undefined;
            readonly X?: ((event: KeyboardEvent) => void) | undefined;
            readonly Y?: ((event: KeyboardEvent) => void) | undefined;
            readonly Z?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly metaRight?: ((event: KeyboardEvent) => void) | undefined;
            readonly select?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad0?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad1?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad2?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad3?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad4?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad5?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad6?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad7?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad8?: ((event: KeyboardEvent) => void) | undefined;
            readonly numpad9?: ((event: KeyboardEvent) => void) | undefined;
            readonly multiply?: ((event: KeyboardEvent) => void) | undefined;
            readonly add?: ((event: KeyboardEvent) => void) | undefined;
            readonly subtract?: ((event: KeyboardEvent) => void) | undefined;
            readonly decimal?: ((event: KeyboardEvent) => void) | undefined;
            readonly divide?: ((event: KeyboardEvent) => void) | undefined;
            readonly F1?: ((event: KeyboardEvent) => void) | undefined;
            readonly F2?: ((event: KeyboardEvent) => void) | undefined;
            readonly F3?: ((event: KeyboardEvent) => void) | undefined;
            readonly F4?: ((event: KeyboardEvent) => void) | undefined;
            readonly F5?: ((event: KeyboardEvent) => void) | undefined;
            readonly F6?: ((event: KeyboardEvent) => void) | undefined;
            readonly F7?: ((event: KeyboardEvent) => void) | undefined;
            readonly F8?: ((event: KeyboardEvent) => void) | undefined;
            readonly F9?: ((event: KeyboardEvent) => void) | undefined;
            readonly F10?: ((event: KeyboardEvent) => void) | undefined;
            readonly F11?: ((event: KeyboardEvent) => void) | undefined;
            readonly F12?: ((event: KeyboardEvent) => void) | undefined;
            readonly numLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly scrollLock?: ((event: KeyboardEvent) => void) | undefined;
            readonly semicolon?: ((event: KeyboardEvent) => void) | undefined;
            readonly equals?: ((event: KeyboardEvent) => void) | undefined;
            readonly comma?: ((event: KeyboardEvent) => void) | undefined;
            readonly dash?: ((event: KeyboardEvent) => void) | undefined;
            readonly period?: ((event: KeyboardEvent) => void) | undefined;
            readonly forwardSlash?: ((event: KeyboardEvent) => void) | undefined;
            readonly graveAccent?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketOpen?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBack?: ((event: KeyboardEvent) => void) | undefined;
            readonly slashBackLeft?: ((event: KeyboardEvent) => void) | undefined;
            readonly bracketClose?: ((event: KeyboardEvent) => void) | undefined;
            readonly quoteSingle?: ((event: KeyboardEvent) => void) | undefined;
        };
        keydown(event?: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_string extends $mol_view {
        dom_name(): string;
        enabled(): boolean;
        minimal_height(): number;
        autocomplete(): boolean;
        field(): {
            disabled: boolean;
            value: any;
            placeholder: string;
            type: any;
            spellcheck: boolean;
            autocomplete: string;
        };
        attr(): {
            maxlength: number;
        };
        event(): {
            input: (event?: any) => any;
            keydown: (event?: any) => any;
        };
        plugins(): readonly any[];
        disabled(): boolean;
        value(val?: any): any;
        value_changed(val?: any): any;
        hint(): string;
        type(val?: any): any;
        spellcheck(): boolean;
        autocomplete_native(): string;
        length_max(): number;
        event_change(event?: any): any;
        event_key_press(event?: any): any;
        submit(event?: any): any;
        Submit(): $$.$mol_hotkey;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_string extends $.$mol_string {
        event_change(next?: Event): void;
        disabled(): boolean;
        autocomplete_native(): "on" | "off";
    }
}

declare namespace $ {
    class $mol_check extends $mol_button_minor {
        attr(): {
            mol_check_checked: any;
            "aria-checked": any;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        sub(): readonly any[];
        checked(val?: any): any;
        Icon(): any;
        title(): string;
        Title(): $mol_view;
        label(): readonly any[];
    }
}

declare namespace $ {
    function $mol_maybe<Value>(value: Value | null | undefined): Value[];
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check extends $.$mol_check {
        click(next?: Event): void;
        sub(): any[];
        label(): readonly any[];
    }
}

declare namespace $ {
    class $mol_switch extends $mol_view {
        minimal_height(): number;
        Option(id: any): $$.$mol_switch_option;
        value(val?: any): any;
        options(): {};
        keys(): readonly string[];
        sub(): readonly $mol_check[];
        option_checked(id: any, val?: any): any;
        option_title(id: any): string;
        option_label(id: any): readonly any[];
        enabled(): boolean;
        option_enabled(id: any): boolean;
        items(): readonly $mol_check[];
    }
    class $mol_switch_option extends $mol_check {
        minimal_height(): number;
        attr(): {
            mol_theme: string;
            mol_check_checked: any;
            "aria-checked": any;
            role: string;
            disabled: boolean;
            tabindex: number;
            title: string;
        };
        theme(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_switch extends $.$mol_switch {
        value(next?: any): any;
        options(): {
            [key: string]: string;
        };
        keys(): string[];
        items(): $mol_switch_option[];
        option_title(key: string): string;
        option_checked(key: string, next?: boolean): boolean | undefined;
    }
    class $mol_switch_option extends $.$mol_switch_option {
        theme(): "" | "$mol_theme_base";
    }
}

declare namespace $ {
    class $mol_icon_minus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_plus extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_number extends $mol_view {
        precision_view(): number;
        precision_change(): number;
        value(val?: any): any;
        sub(): readonly any[];
        precision(): number;
        value_string(val?: any): any;
        hint(): string;
        enabled(): boolean;
        string_enabled(): boolean;
        String(): $$.$mol_string;
        event_dec(val?: any): any;
        dec_enabled(): boolean;
        dec_icon(): $mol_icon_minus;
        Dec(): $mol_button_minor;
        event_inc(val?: any): any;
        inc_enabled(): boolean;
        inc_icon(): $mol_icon_plus;
        Inc(): $mol_button_minor;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_number extends $.$mol_number {
        event_dec(next?: Event): void;
        event_inc(next?: Event): void;
        value_string(next?: string): any;
    }
}

declare namespace $ {
    class $mol_bar extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_charset_encode(value: string): Uint8Array;
}

declare namespace $ {
    type $mol_charset_encoding = 'utf8' | 'ibm866' | 'iso-8859-2' | 'iso-8859-3' | 'iso-8859-4' | 'iso-8859-5' | 'iso-8859-6' | 'iso-8859-7' | 'iso-8859-8' | 'iso-8859-8i' | 'iso-8859-10' | 'iso-8859-13' | 'iso-8859-14' | 'iso-8859-15' | 'iso-8859-16' | 'koi8-r' | 'koi8-u' | 'koi8-r' | 'macintosh' | 'windows-874' | 'windows-1250' | 'windows-1251' | 'windows-1252' | 'windows-1253' | 'windows-1254' | 'windows-1255' | 'windows-1256' | 'windows-1257' | 'windows-1258' | 'x-mac-cyrillic' | 'gbk' | 'gb18030' | 'hz-gb-2312' | 'big5' | 'euc-jp' | 'iso-2022-jp' | 'shift-jis' | 'euc-kr' | 'iso-2022-kr';
    function $mol_charset_decode(value: Uint8Array, code?: $mol_charset_encoding): string;
}

declare namespace $ {
    type $mol_file_type = 'file' | 'dir' | 'link';
    interface $mol_file_stat {
        type: $mol_file_type;
        size: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
    }
    class $mol_file_not_found extends Error {
    }
    abstract class $mol_file extends $mol_object {
        static absolute(path: string): $mol_file;
        static relative(path: string): $mol_file;
        path(): string;
        parent(): $mol_file;
        abstract stat(next?: $mol_file_stat, force?: $mol_mem_force): $mol_file_stat;
        reset(): void;
        version(): string;
        abstract ensure(next?: boolean): boolean;
        watcher(): {
            destructor(): void;
        };
        exists(next?: boolean, force?: $mol_mem_force): boolean;
        type(): $mol_file_type;
        name(): string;
        ext(): string;
        abstract buffer(next?: Uint8Array, force?: $mol_mem_force): Uint8Array;
        text(next?: string, force?: $mol_mem_force): string;
        fail(error: Error): void;
        buffer_cached(buffer: Uint8Array): void;
        text_cached(content: string): void;
        abstract sub(): $mol_file[];
        abstract resolve(path: string): $mol_file;
        abstract relate(base?: $mol_file): string;
        abstract append(next: Uint8Array | string): void;
        find(include?: RegExp, exclude?: RegExp): $mol_file[];
        size(): number;
    }
}

declare namespace $ {
    class $mol_file_web extends $mol_file {
        static absolute(path: string): $mol_file_web;
        static relative(path: string): $mol_file_web;
        static base: string;
        buffer(next?: Uint8Array, force?: $mol_mem_force): Uint8Array;
        stat(next?: $mol_file_stat, force?: $mol_mem_force): $mol_file_stat;
        resolve(path: string): $mol_file_web;
        ensure(next?: boolean): boolean;
        sub(): $mol_file[];
        relate(base?: $mol_file): string;
        append(next: Uint8Array | string): void;
    }
}

declare namespace $ {
    interface $mol_locale_dict {
        [key: string]: string;
    }
    class $mol_locale extends $mol_object {
        static lang_default(): string;
        static lang(next?: string): string;
        static source(lang: string): any;
        static texts(lang: string, next?: $mol_locale_dict): $mol_locale_dict;
        static text(key: string): string;
    }
}

declare namespace $ {
    class $mol_meter extends $mol_plugin {
        zoom(): number;
        width(val?: any): any;
        height(val?: any): any;
        left(val?: any): any;
        right(val?: any): any;
        bottom(val?: any): any;
        top(val?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_meter extends $.$mol_meter {
        rect(): {
            left: number;
            top: number;
            right: number;
            bottom: number;
            width: number;
            height: number;
            zoom: number;
        };
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        width(): number;
        height(): number;
        zoom(): number;
    }
}

declare namespace $ {
    class $mol_pop extends $mol_view {
        event(): {
            keydown: (event?: any) => any;
        };
        showed(val?: any): any;
        plugins(): readonly $mol_plugin[];
        sub(): readonly any[];
        keydown(event?: any): any;
        Meter(): $$.$mol_meter;
        top(): number;
        bottom(): number;
        left(): number;
        right(): number;
        Anchor(): any;
        align(): string;
        bubble_content(): readonly (string | number | boolean | Node | $mol_view)[];
        height_max(): number;
        Bubble(): $mol_pop_bubble;
    }
    class $mol_pop_bubble extends $mol_scroll {
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        style(): {
            maxHeight: number;
        };
        attr(): {
            mol_pop_align: string;
            tabindex: number;
        };
        content(): readonly (string | number | boolean | Node | $mol_view)[];
        height_max(): number;
        align(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_pop extends $.$mol_pop {
        sub(): any[];
        height_max(): number;
        align(): string;
        keydown(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_icon_chevron extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_paragraph extends $mol_view {
        line_height(): number;
        letter_width(): number;
    }
}

declare namespace $.$$ {
    class $mol_paragraph extends $.$mol_paragraph {
        maximal_width(): number;
        minimal_width(): number;
        minimal_height(): number;
    }
}

declare namespace $ {
    class $mol_dimmer extends $mol_paragraph {
        haystack(): string;
        needle(): string;
        sub(): readonly (string | number | boolean | Node | $mol_view)[];
        Low(id: any): $$.$mol_paragraph;
        High(id: any): $$.$mol_paragraph;
        parts(): readonly (string | number | boolean | Node | $mol_view)[];
        string(id: any): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_dimmer extends $.$mol_dimmer {
        parts(): any[];
        strings(): string[];
        string(index: number): string;
    }
}

declare namespace $ {
    class $mol_nav extends $mol_plugin {
        cycle(val?: any): any;
        mod_ctrl(): boolean;
        mod_shift(): boolean;
        mod_alt(): boolean;
        keys_x(val?: any): any;
        keys_y(val?: any): any;
        current_x(val?: any): any;
        current_y(val?: any): any;
        event_up(event?: any): any;
        event_down(event?: any): any;
        event_left(event?: any): any;
        event_right(event?: any): any;
        event(): {
            keydown: (event?: any) => any;
        };
        event_key(event?: any): any;
    }
}

declare namespace $.$$ {
    class $mol_nav extends $.$mol_nav {
        event_key(event?: KeyboardEvent): undefined;
        event_up(event?: KeyboardEvent): undefined;
        event_down(event?: KeyboardEvent): undefined;
        event_left(event?: KeyboardEvent): undefined;
        event_right(event?: KeyboardEvent): undefined;
        index_y(): any;
        index_x(): any;
    }
}

declare namespace $ {
    class $mol_select extends $mol_pop {
        dictionary(): {};
        options(): readonly string[];
        value(val?: any): any;
        minimal_height(): number;
        Option_row(id: any): $mol_button_minor;
        No_options(): $mol_view;
        plugins(): readonly any[];
        showed(val?: any): any;
        Anchor(): $mol_button_minor;
        bubble_content(): readonly any[];
        option_content_current(): readonly (string | number | boolean | Node | $mol_view)[];
        Filter(): $$.$mol_string;
        Trigger_icon(): $mol_icon_chevron;
        event_select(id: any, event?: any): any;
        option_label(id: any): string;
        filter_pattern(val?: any): any;
        Option_label(id: any): $$.$mol_dimmer;
        option_content(id: any): readonly any[];
        no_options_message(): string;
        nav_components(): readonly $mol_view[];
        option_focused(component?: any): any;
        nav_cycle(val?: any): any;
        Nav(): $$.$mol_nav;
        options_showed(val?: any): any;
        open(event?: any): any;
        trigger_content(): readonly (string | number | boolean | Node | $mol_view)[];
        Trigger(): $mol_button_minor;
        menu_content(): readonly $mol_view[];
        Menu(): $$.$mol_list;
        hint(): string;
        filter_hint(): string;
        submit(event?: any): any;
    }
}

declare namespace $ {
    function $mol_match_text<Variant>(query: string, values: (variant: Variant) => string[]): (variant: Variant) => boolean;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_select extends $.$mol_select {
        filter_pattern(next?: string): string;
        open(): void;
        options_showed(next?: boolean): boolean;
        options(): readonly string[];
        options_filtered(): readonly string[];
        option_label(id: string): any;
        option_rows(): $mol_view[];
        option_focused(component?: $mol_view): $mol_view | $mol_string;
        event_select(id: string, event?: MouseEvent): void;
        nav_components(): ($mol_view | $mol_string)[];
        option_content_current(): readonly any[];
        trigger_content(): any[];
        menu_content(): ($mol_view | $mol_string)[];
    }
}

declare namespace $ {
    class $mol_icon_cross extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_search extends $mol_bar {
        query(val?: any): any;
        plugins(): readonly any[];
        sub(): readonly any[];
        event_clear(val?: any): any;
        Hotkey(): $$.$mol_hotkey;
        suggest_selected(val?: any): any;
        hint(): string;
        suggests_showed(): boolean;
        suggests(): readonly string[];
        submit(event?: any): any;
        Suggest(): $$.$mol_select;
        Clear_icon(): $mol_icon_cross;
        clear_hint(): string;
        Clear(): $mol_button_minor;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_search extends $.$mol_search {
        suggests_showed(): boolean;
        suggest_selected(next?: string): void;
        sub(): ($mol_button_minor | $mol_select)[];
        event_clear(event?: Event): void;
    }
}

declare namespace $ {
    class $mol_float extends $mol_view {
        style(): {
            minHeight: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_check_expand extends $mol_check {
        minimal_height(): number;
        Icon(): $mol_icon_chevron;
        level(): number;
        style(): {
            paddingLeft: string;
        };
        checked(val?: any): any;
        enabled(): boolean;
        level_style(): string;
        expanded(val?: any): any;
        expandable(): boolean;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_check_expand extends $.$mol_check_expand {
        level_style(): string;
        expandable(): boolean;
    }
}

declare namespace $ {
    class $mol_grid extends $mol_scroll {
        row_height(): number;
        row_ids(): readonly string[][];
        row_id(index: any): any;
        col_ids(): readonly any[];
        records(): {};
        record(id: any): any;
        hierarchy(): any;
        hierarchy_col(): string;
        sub(): readonly any[];
        Head(): $mol_grid_row;
        Row(id: any): $mol_grid_row;
        Cell(id: any): $mol_view;
        cell(id: any): any;
        Cell_text(id: any): $mol_grid_cell;
        Cell_number(id: any): $mol_grid_number;
        Col_head(id: any): $mol_float;
        Cell_branch(id: any): $$.$mol_check_expand;
        Cell_content(id: any): readonly any[];
        rows(): readonly $mol_view[];
        Table(): $mol_grid_table;
        head_cells(): readonly $mol_view[];
        cells(id: any): readonly $mol_view[];
        cell_content(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        cell_content_text(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        cell_content_number(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        col_head_content(id: any): readonly (string | number | boolean | Node | $mol_view)[];
        cell_level(id: any): number;
        cell_expanded(id: any, val?: any): any;
        needle(): string;
        cell_value(id: any): string;
        Cell_dimmer(id: any): $$.$mol_dimmer;
    }
    class $mol_grid_table extends $mol_list {
        dom_name(): string;
    }
    class $mol_grid_row extends $mol_view {
        dom_name(): string;
        sub(): readonly $mol_view[];
        cells(): readonly $mol_view[];
    }
    class $mol_grid_cell extends $mol_view {
        dom_name(): string;
        minimal_height(): number;
    }
    class $mol_grid_number extends $mol_grid_cell {
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    interface $mol_grid_node {
        id: string;
        parent: $mol_grid_node;
        sub: $mol_grid_node[];
    }
    class $mol_grid extends $.$mol_grid {
        head_cells(): readonly $mol_view[];
        col_head_content(colId: string): readonly string[];
        rows(): readonly $mol_view[];
        cells(row_id: string[]): readonly $mol_view[];
        col_type(col_id: string): "text" | "number" | "branch";
        Cell(id: {
            row: string[];
            col: string;
        }): $mol_view;
        cell_content(id: {
            row: string[];
            col: string;
        }): any[];
        records(): any;
        record(id: string): any;
        record_ids(): string[];
        row_id(index: number): string;
        col_ids(): readonly string[];
        hierarchy(): {
            [id: string]: $mol_grid_node;
        };
        row_sub_ids(row: string[]): string[][];
        row_root_id(): string[];
        cell_level(id: {
            row: string[];
        }): number;
        row_ids(): readonly string[][];
        row_expanded(row_id: string[], next?: boolean): boolean | null;
        row_expanded_default(row_id: string[]): boolean;
        cell_expanded(id: {
            row: string[];
        }, next?: boolean): boolean | null;
    }
}

declare namespace $ {
    class $mol_image extends $mol_view {
        dom_name(): string;
        field(): {
            src: string;
            alt: string;
        };
        uri(): string;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_link_iconed extends $mol_link {
        sub(): readonly any[];
        content(): readonly any[];
        host(): string;
        icon(): string;
        Icon(): $mol_image;
        title(): string;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_link_iconed extends $.$mol_link_iconed {
        icon(): string;
        host(): string;
        title(): string;
        sub(): any[];
    }
}

declare namespace $ {
    class $mol_text extends $mol_list {
        uri_base(): string;
        text(): string;
        tokens(): readonly any[];
        Quote(id: any): $$.$mol_text;
        Row(id: any): $mol_text_row;
        Span(id: any): $mol_text_span;
        Link(id: any): $mol_text_link;
        Image(id: any): $mol_text_image;
        Header(id: any): $mol_text_header;
        Table(id: any): $$.$mol_grid;
        Table_row(id: any): $mol_grid_row;
        Table_cell(id: any): $mol_grid_cell;
        Table_cell_head(id: any): $mol_float;
        quote_text(id: any): string;
        block_content(id: any): readonly any[];
        block_type(id: any): string;
        header_level(id: any): number;
        header_content(id: any): readonly any[];
        table_head_cells(id: any): readonly any[];
        table_rows(id: any): readonly any[];
        table_cells(id: any): readonly any[];
        table_cell_content(id: any): readonly any[];
    }
    class $mol_text_row extends $mol_paragraph {
        attr(): {
            mol_text_type: string;
        };
        type(): string;
    }
    class $mol_text_header extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_header_level: any;
        };
        sub(): readonly any[];
        level(val?: any): any;
        content(): readonly any[];
    }
    class $mol_text_span extends $mol_paragraph {
        dom_name(): string;
        attr(): {
            mol_text_type: any;
        };
        sub(): any;
        type(val?: any): any;
        content(val?: any): any;
    }
    class $mol_text_link extends $mol_link_iconed {
        attr(): {
            mol_text_type: any;
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
            mol_theme: any;
        };
        uri(): any;
        content(val?: any): any;
        type(val?: any): any;
        link(val?: any): any;
    }
    class $mol_text_image extends $mol_view {
        dom_name(): string;
        attr(): {
            allowfullscreen: boolean;
            mol_text_type: any;
            data: any;
        };
        sub(): readonly any[];
        type(val?: any): any;
        link(val?: any): any;
        title(val?: any): any;
    }
}

declare namespace $ {
    class $mol_syntax2<Lexems extends {
        [name: string]: RegExp;
    }> {
        lexems: Lexems;
        constructor(lexems: Lexems);
        rules: {
            regExp: RegExp;
            name: string;
            size: number;
        }[];
        regexp: RegExp;
        tokenize(text: string, handle: (name: string, found: string, chunks: string[], offset: number) => void): void;
        parse(text: string, handlers: {
            [key in keyof Lexems | '']: (found: string, chunks: string[], offset: number) => void;
        }): void;
    }
}

declare namespace $ {
    var $mol_syntax2_md_flow: $mol_syntax2<{
        quote: RegExp;
        header: RegExp;
        list: RegExp;
        code: RegExp;
        'code-indent': RegExp;
        table: RegExp;
        block: RegExp;
    }>;
    var $mol_syntax2_md_line: $mol_syntax2<{
        strong: RegExp;
        emphasis: RegExp;
        code3: RegExp;
        code: RegExp;
        strike: RegExp;
        'text-link': RegExp;
        'image-link': RegExp;
    }>;
    const $mol_syntax2_md_code: $mol_syntax2<{
        'code-docs': RegExp;
        'code-comment-block': RegExp;
        'code-link': RegExp;
        'code-comment-inline': RegExp;
        'code-string': RegExp;
        'code-number': RegExp;
        'code-call': RegExp;
        'code-field': RegExp;
        'code-keyword': RegExp;
        'code-global': RegExp;
        'code-decorator': RegExp;
        'code-tag': RegExp;
        'code-punctuation': RegExp;
    }>;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_text extends $.$mol_text {
        tokens(): readonly {
            name: string;
            found: string;
            chunks: string[];
        }[];
        rows(): ($mol_grid | $mol_text | $mol_text_row | $mol_text_header)[];
        header_level(index: number): number;
        header_content(index: number): $mol_view[];
        quote_text(index: number): string;
        block_type(index: number): string;
        cell_contents(indexBlock: number): string[][];
        table_rows(blockId: number): $mol_grid_row[];
        table_head_cells(blockId: number): $mol_float[];
        table_cells(id: {
            block: number;
            row: number;
        }): $mol_grid_cell[];
        table_cell_content(id: {
            block: number;
            row: number;
            cell: number;
        }): $mol_view[];
        uri_base(): string;
        uri_resolve(uri: string): string;
        text2spans(prefix: string, text: string): $mol_view[];
        code2spans(prefix: string, text: string): $mol_view[];
        block_content(indexBlock: number): ($mol_view | string)[];
    }
}

declare namespace $ {
    class $mol_textarea extends $mol_view {
        event(): {
            keydown: (event?: any) => any;
        };
        sub(): readonly any[];
        press(event?: any): any;
        value(val?: any): any;
        hint(): string;
        enabled(): boolean;
        Edit(): $$.$mol_string;
        text(): string;
        View(): $$.$mol_text;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_textarea extends $.$mol_textarea {
        text(): any;
        indent_inc(): void;
        indent_dec(): void;
        press(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_icon_chevron_left extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_icon_chevron_right extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_row extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_hor extends $mol_view {
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_hor extends $.$mol_hor {
        minimal_width(): number;
    }
}

declare namespace $ {
    class $mol_calendar extends $mol_list {
        sub(): readonly any[];
        weeks(): readonly $mol_view[];
        Weekday(index: any): $mol_calendar_day;
        Week(row: any): $$.$mol_hor;
        Day(day: any): $mol_calendar_day;
        month_string(): string;
        month_moment(): $mol_time_moment;
        title(): string;
        Title(): $mol_view;
        head(): readonly any[];
        Head(): $mol_view;
        weekdays(): readonly $mol_view[];
        Weekdays(): $$.$mol_hor;
        weekend(index: any): boolean;
        weekday(index: any): string;
        week_days(row: any): readonly $mol_view[];
        day_ghost(day: any): boolean;
        day_holiday(day: any): boolean;
        day_selected(day: any): boolean;
        day_theme(day: any): string;
        day_text(day: any): string;
        day_content(day: any): readonly any[];
    }
    class $mol_calendar_day extends $mol_view {
        minimal_height(): number;
        minimal_width(): number;
        attr(): {
            mol_calendar_holiday: boolean;
            mol_calendar_ghost: boolean;
            mol_calendar_selected: boolean;
            mol_theme: string;
        };
        holiday(): boolean;
        ghost(): boolean;
        selected(): boolean;
        theme(): string;
    }
}

declare namespace $ {
    type $mol_time_interval_config = string | {
        start?: $mol_time_moment_config;
        end?: $mol_time_moment_config;
        duration?: $mol_time_duration_config;
    };
    class $mol_time_interval extends $mol_time_base {
        constructor(config: $mol_time_interval_config);
        private _start;
        get start(): $mol_time_moment;
        private _end;
        get end(): $mol_time_moment;
        private _duration;
        get duration(): $mol_time_duration;
        toJSON(): string;
        toString(): string;
    }
}

declare namespace $ {
}

declare namespace $.$mol {
    class $mol_calendar extends $.$mol_calendar {
        month_moment(): $mol_time_moment;
        title(): string;
        day_first(): $mol_time_moment;
        day_last(): $mol_time_moment;
        day_draw_from(): $mol_time_moment;
        weekdays(): $mol_view[];
        weekday(index: number): string;
        weekend(index: number): boolean;
        weeks_count(): number;
        sub(): any[];
        weeks(): $mol_view[];
        week_days(index: number): $mol_view[];
        day_text(day: string): string;
        day_holiday(day: string): boolean;
        day_ghost(day: string): boolean;
        day_selected(day: string): boolean;
        day_theme(day: string): string;
    }
}

declare namespace $ {
    class $mol_date extends $mol_pop {
        Anchor(): $$.$mol_string;
        bubble_content(): readonly any[];
        value_number(val?: any): any;
        value_moment(val?: any): any;
        value(val?: any): any;
        hint(): string;
        enabled(): boolean;
        Input(): $$.$mol_string;
        month_moment(): any;
        day_selected(day: any): boolean;
        day_click(day: any, event?: any): any;
        prev_hint(): string;
        prev(event?: any): any;
        Prev_icon(): $mol_icon_chevron_left;
        Prev(): $mol_button_minor;
        next_hint(): string;
        next(event?: any): any;
        Next_icon(): $mol_icon_chevron_right;
        Next(): $mol_button_minor;
        Calendar_tools(): $mol_view;
        Calendar(): $mol_date_calendar;
        Calendar_title(): $mol_view;
    }
    class $mol_date_calendar extends $mol_calendar {
        day_content(day: any): readonly any[];
        day_click(day: any, event?: any): any;
        Day_button(day: any): $mol_button_minor;
    }
}

declare namespace $ {
    function $mol_try<Result>(handler2: () => Result): Result | Error;
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_date extends $.$mol_date {
        value(val?: string): string;
        value_moment(val?: $mol_time_moment | null): $mol_time_moment | null;
        month_moment(next?: $mol_time_moment): $mol_time_moment;
        showed(next?: boolean): boolean;
        day_selected(day: string): boolean;
        day_click(day: string): void;
        prev(): void;
        next(): void;
    }
}

declare namespace $ {
    class $mol_icon_tick extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_check_box extends $mol_check {
        Icon(): $mol_icon_tick;
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_form extends $mol_view {
        submit_blocked(): boolean;
        event(): {
            keydown: (event?: any) => any;
        };
        submit(event?: any): any;
        sub(): readonly any[];
        keydown(event?: any): any;
        form_fields(): readonly $mol_form_field[];
        Bar_fields(): $mol_view;
        buttons(): readonly $mol_view[];
        Bar_buttons(): $mol_row;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_form extends $.$mol_form {
        submit_blocked(): boolean;
        keydown(next: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $gravity_animal_edit extends $mol_page {
        animal(): $gravity_animal;
        title(): string;
        tools(): readonly any[];
        body(): readonly any[];
        download_name(): string;
        download_link(): string;
        Download_icon(): $mol_icon_download;
        Download(): $$.$mol_link;
        Photos(): $$.$mol_attach;
        Photos_field(): $mol_form_field;
        name(val?: any): any;
        Name(): $$.$mol_string;
        Name_field(): $mol_form_field;
        card(val?: any): any;
        Сard(): $$.$mol_string;
        Card_field(): $mol_form_field;
        chip(val?: any): any;
        Сhip(): $$.$mol_string;
        Chip_field(): $mol_form_field;
        cage(val?: any): any;
        Cage(): $$.$mol_string;
        Cage_field(): $mol_form_field;
        kind(val?: any): any;
        Kind(): $$.$mol_switch;
        Kind_field(): $mol_form_field;
        gender(val?: any): any;
        Gender(): $$.$mol_switch;
        Gender_field(): $mol_form_field;
        departed_reason(val?: any): any;
        Departed_reason(): $$.$mol_switch;
        Departed_reason_field(): $mol_form_field;
        dead_reason(val?: any): any;
        Dead_reason(): $$.$mol_switch;
        Dead_reason_field(): $mol_form_field;
        weight(val?: any): any;
        Weight(): $$.$mol_number;
        Weight_field(): $mol_form_field;
        size(val?: any): any;
        Size(): $$.$mol_switch;
        Size_field(): $mol_form_field;
        tail_suggest(): readonly string[];
        Tail(): $$.$mol_search;
        Tail_field(): $mol_form_field;
        ear(val?: any): any;
        ear_suggest(): readonly string[];
        Ear(): $$.$mol_search;
        Ear_field(): $mol_form_field;
        color(val?: any): any;
        color_suggest(): readonly string[];
        Color(): $$.$mol_search;
        Color_field(): $mol_form_field;
        Trait(): $$.$mol_textarea;
        Trait_field(): $mol_form_field;
        arrived_date(val?: any): any;
        Arrived_date(): $$.$mol_date;
        Arrived_date_field(): $mol_form_field;
        born_date(val?: any): any;
        Born_date(): $$.$mol_date;
        Born_date_field(): $mol_form_field;
        departed_date(val?: any): any;
        Departed_date(): $$.$mol_date;
        Departed_date_field(): $mol_form_field;
        Depart_ready(): $mol_check_box;
        Depart_ready_field(): $mol_form_field;
        Description(): $$.$mol_textarea;
        Description_field(): $mol_form_field;
        Main(): $gravity_animal_edit_group;
        Codes(): $gravity_animal_edit_group;
        General(): $gravity_animal_edit_section;
        Transitions(): $gravity_animal_edit_group;
        Lifetime(): $gravity_animal_edit_group;
        Dates(): $gravity_animal_edit_section;
        Types(): $gravity_animal_edit_group;
        Gabarites(): $gravity_animal_edit_group;
        Classification(): $gravity_animal_edit_section;
        Attaches(): $gravity_animal_edit_group;
        Ends(): $gravity_animal_edit_group;
        Visual(): $gravity_animal_edit_group;
        Appearance(): $gravity_animal_edit_section;
        Exports(): $gravity_animal_edit_group;
        Catch(): $gravity_animal_edit_links;
        Catch_field(): $mol_form_field;
        Procedure(): $gravity_animal_edit_links;
        Procedure_field(): $mol_form_field;
        Contract(): $gravity_animal_edit_links;
        Contract_field(): $mol_form_field;
        Documents(): $gravity_animal_edit_group;
        groups(): readonly any[];
        Sections(): $$.$mol_list;
        Form(): $$.$mol_form;
    }
    class $gravity_animal_edit_section extends $mol_row {
    }
    class $gravity_animal_edit_group extends $mol_row {
    }
    class $gravity_animal_edit_links extends $mol_bar {
        sub(): readonly any[];
        List(): $$.$mol_textarea;
        Add_icon(): $mol_icon_plus;
        Add(): $mol_button_minor;
    }
}

declare namespace $ {
    function $mol_data_dict<Sub extends $mol_data_value>(sub: Sub): ((val: readonly Parameters<Sub>[0][] | unknown) => Readonly<Record<string, ReturnType<Sub>>>) & {
        config: Sub;
        Value: Readonly<Record<string, ReturnType<Sub>>>;
    };
}

declare namespace $ {
    class $gravity_dict extends $mol_object2 {
        static data(): Readonly<{
            tail_types: readonly string[];
            ears_types: readonly string[];
            death_reasons: readonly string[];
            departure_reasons: readonly string[];
            fur_types: {
                [x: string]: readonly string[];
            };
            colors: {
                [x: string]: readonly string[];
            };
            breeds: {
                [x: string]: readonly string[];
            };
        }>;
        static tail_suggest(): readonly string[];
        static ear_suggest(): readonly string[];
        static dead_reason_suggest(): readonly string[];
        static departed_reason_suggest(): readonly string[];
        static fur_suggest(kind: $gravity_animal_kind): readonly string[];
        static color_suggest(kind: $gravity_animal_kind): readonly string[];
        static breed_suggest(kind: $gravity_animal_kind): readonly string[];
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $gravity_animal_edit extends $.$gravity_animal_edit {
        name(next?: string): string;
        card(next?: string): string;
        chip(next?: string): string;
        cage(next?: string): string;
        weight(next?: number): number;
        size(next?: string): string;
        ear(next?: string): string;
        tail(next?: string): string;
        color(next?: string): string;
        kind(next?: $gravity_animal_kind): $gravity_animal_kind;
        gender(next?: $gravity_animal_gender): $gravity_animal_gender;
        arrived_date(next?: $mol_time_moment): $mol_time_moment | null;
        departed_date(next?: $mol_time_moment): $mol_time_moment | null;
        born_date(next?: $mol_time_moment): $mol_time_moment | null;
        ear_suggest(): readonly string[];
        tail_suggest(): readonly string[];
        color_suggest(): readonly string[];
        download_name(): string;
        download_link(): any;
    }
}

declare namespace $ {
    class $gravity_animal_card extends $mol_link {
        animal(): $gravity_animal;
        arg(): {
            animal: string;
        };
        attr(): {
            gravity_animal_card_gender: string;
            href: string;
            title: string;
            target: string;
            download: string;
            mol_link_current: boolean;
            mol_theme: any;
        };
        sub(): readonly any[];
        id(): string;
        gender(): string;
        card(): string;
        highlight(): string;
        Card(): $$.$mol_dimmer;
        chip(): string;
        Chip(): $$.$mol_dimmer;
        kind(): string;
        Kind(): $mol_view;
        name(): string;
        Name(): $$.$mol_dimmer;
        age(): string;
        Age(): $mol_view;
        size(): string;
        Size(): $mol_view;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $gravity_animal_card extends $.$gravity_animal_card {
        id(): string;
        name(): string;
        card(): string;
        chip(): string;
        gender(): $gravity_animal_gender;
        size(): string;
        age(): string;
        kind(): string;
    }
}

declare namespace $ {
    class $mol_button_major extends $mol_button_typed {
        attr(): {
            mol_theme: string;
            disabled: boolean;
            role: string;
            tabindex: number;
            title: string;
        };
    }
}

declare namespace $ {
}

declare namespace $ {
    function $mol_lights(this: $mol_ambient_context, next?: boolean): boolean;
}

declare namespace $ {
    class $mol_check_icon extends $mol_check {
    }
}

declare namespace $ {
}

declare namespace $ {
    class $mol_icon_brightness_6 extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $mol_lights_toggle extends $mol_check_icon {
        Icon(): $mol_icon_brightness_6;
        hint(): string;
        checked(val?: any): any;
        Lights_icon(): $mol_icon_brightness_6;
        lights(val?: any): any;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $mol_lights_toggle extends $.$mol_lights_toggle {
        lights(next?: boolean): boolean;
    }
}

declare namespace $ {
    class $mol_icon_logout extends $mol_icon {
        path(): string;
    }
}

declare namespace $ {
    class $gravity_shelter_manage extends $mol_book2 {
        shelter(): $gravity_shelter;
        animals(): $gravity_shelter_animals;
        pages(): readonly any[];
        Animal_edit(id: any): $$.$gravity_animal_edit;
        Animal_download(id: any): $$.$mol_link;
        Animal_card(id: any): $$.$gravity_animal_card;
        search(val?: any): any;
        Search(): $$.$mol_search;
        add(event?: any): any;
        Add_icon(): $mol_icon_plus;
        Add(): $mol_button_major;
        Lights(): $$.$mol_lights_toggle;
        logout(event?: any): any;
        Logout_icon(): $mol_icon_logout;
        Logout(): $mol_button_minor;
        shelter_name(): string;
        animal_list(): readonly any[];
        Animal_list(): $$.$mol_list;
        Animals_page(): $$.$mol_page;
        Close_icon(id: any): $mol_icon_cross;
        Close(id: any): $$.$mol_link;
        animal(id: any): $gravity_animal;
    }
}

declare namespace $ {
}

declare namespace $.$$ {
    class $gravity_shelter_manage extends $.$gravity_shelter_manage {
        shelter_name(): string;
        animal(key: string): $gravity_animal;
        animal_list_filtered(): $gravity_animal[];
        animal_list(): $gravity_animal_card[];
        animal_current(next?: string): string | null;
        pages(): ($mol_page | $gravity_animal_edit)[];
        add(): void;
    }
}

declare namespace $ {
    class $gravity_auth extends $mol_object2 {
        static auth(creds: {
            username: string;
            password: string;
        }): boolean;
        static signed(): boolean;
        static drop(): void;
    }
}

declare namespace $ {
    class $gravity_auth_form extends $mol_page {
        title(): string;
        plugins(): readonly any[];
        body(): readonly any[];
        submit(event?: any): any;
        Enter(): $$.$mol_hotkey;
        Login_name(): string;
        login(val?: any): any;
        Login(): $$.$mol_string;
        Login_field(): $mol_form_field;
        Pass_name(): string;
        pass(val?: any): any;
        Pass(): $$.$mol_string;
        Pass_field(): $mol_form_field;
        Auth_label(): string;
        auth(val?: any): any;
        Submit(): $mol_button_major;
        Form(): $$.$mol_form;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $gravity_auth_form extends $.$gravity_auth_form {
        auth(): void;
        submit(event: KeyboardEvent): void;
    }
}

declare namespace $ {
    class $mol_theme_auto extends $mol_plugin {
        attr(): {
            mol_theme: string;
        };
        theme(): string;
    }
}

declare namespace $.$$ {
    class $mol_theme_auto extends $.$mol_theme_auto {
        theme(): "$mol_theme_light" | "$mol_theme_dark";
    }
}

declare namespace $ {
    class $gravity extends $mol_book2 {
        plugins(): readonly any[];
        Manage(): $$.$gravity_shelter_manage;
        Auth(): $$.$gravity_auth_form;
        Theme(): $$.$mol_theme_auto;
        logout(event?: any): any;
    }
}

declare namespace $.$$ {
}

declare namespace $.$$ {
    class $gravity extends $.$gravity {
        pages(): ($mol_page | $gravity_animal_edit)[] | $gravity_auth_form[];
        logout(): void;
    }
}

declare namespace $ {
    class $mol_view_tree_test_attributes_super extends $mol_view {
        some(): {
            a: number;
            b: number;
        };
    }
    class $mol_view_tree_test_attributes extends $mol_view_tree_test_attributes_super {
        some(): {
            a: number;
            b: number;
        };
    }
}

declare namespace $ {
    class $mol_view_tree_test_binding extends $mol_view {
        value(val?: any): any;
        enabled(): boolean;
        task_title_new(val?: any): any;
        head_complete_enabled(): boolean;
    }
}

declare namespace $ {
    class $mol_view_tree_test_binding_right extends $mol_view {
        Test(): $mol_view_tree_test_binding_right_test;
        outer_width(v?: any): any;
    }
    class $mol_view_tree_test_binding_right_test extends $mol_view {
        width(val?: any): any;
    }
}

declare namespace $ {
    class $mol_view_tree_test_simple extends $mol_view {
        some(): number;
        bool(): boolean;
        str(): string;
        arr(): readonly any[];
        arr_string(): readonly string[];
    }
}

declare namespace $ {
    class $mol_view_tree_test_attributes_subcomponent extends $mol_view {
        Page(index: any): $mol_view_tree_test_attributes_subcomponent_page;
        page(index: any): any;
    }
    class $mol_view_tree_test_attributes_subcomponent_page extends $mol_view {
        Sub(): any;
    }
}

declare namespace $ {
    const $mol_tree_convert: unique symbol;
    type $mol_tree_path = Array<string | number | null>;
    type $mol_tree_hack = (input: $mol_tree, context: $mol_tree_context) => readonly $mol_tree[];
    type $mol_tree_context = Record<string, $mol_tree_hack>;
    type $mol_tree_library = Record<string, $mol_tree_context>;
    class $mol_tree extends $mol_object2 {
        readonly type: string;
        readonly data: string;
        readonly sub: readonly $mol_tree[];
        readonly baseUri: string;
        readonly row: number;
        readonly col: number;
        readonly length: number;
        constructor(config?: Partial<$mol_tree>);
        static values(str: string, baseUri?: string): $mol_tree[];
        clone(config?: Partial<$mol_tree>): $mol_tree;
        make(config: Partial<$mol_tree>): $mol_tree;
        make_data(value: string, sub?: readonly $mol_tree[]): $mol_tree;
        make_struct(type: string, sub?: readonly $mol_tree[]): $mol_tree;
        static fromString(str: string, baseUri?: string): $mol_tree;
        static fromJSON(json: any, baseUri?: string): $mol_tree;
        get uri(): string;
        toString(prefix?: string): string;
        toJSON(): any;
        get value(): string;
        insert(value: $mol_tree, ...path: $mol_tree_path): $mol_tree;
        select(...path: $mol_tree_path): $mol_tree;
        filter(path: string[], value?: string): $mol_tree;
        transform(visit: (stack: $mol_tree[], sub: () => $mol_tree[]) => $mol_tree | null, stack?: $mol_tree[]): $mol_tree | null;
        hack(context: $mol_tree_context): $mol_tree;
        error(message: string): Error;
    }
}

declare namespace $ {
    function $mol_view_tree_trim_remarks(def: $mol_tree): $mol_tree;
    function $mol_view_tree_classes(defs: $mol_tree): $mol_tree;
    function $mol_view_tree_class_name(val: $mol_tree): string;
    function $mol_view_tree_super_name(val: $mol_tree): string;
    function $mol_view_tree_class_props(def: $mol_tree): $mol_tree;
    function $mol_view_tree_prop_name(prop: $mol_tree): string;
    function $mol_view_tree_prop_key(prop: $mol_tree): string;
    function $mol_view_tree_prop_next(prop: $mol_tree): string;
    function $mol_view_tree_prop_value(prop: $mol_tree): $mol_tree;
    function $mol_view_tree_value_type(val: $mol_tree): "locale" | "string" | "object" | "number" | "null" | "put" | "list" | "bool" | "dict" | "get" | "bind";
    function $mol_view_tree_compile(tree: $mol_tree): {
        script: string;
        locales: {
            [key: string]: string;
        };
    };
}