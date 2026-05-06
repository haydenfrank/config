/// <reference path="./gio-2.0.d.ts" />
/// <reference path="./gobject-2.0.d.ts" />
/// <reference path="./glib-2.0.d.ts" />
/// <reference path="./gmodule-2.0.d.ts" />

/**
 * Type Definitions for Gjs (https://gjs.guide/)
 *
 * These type definitions are automatically generated, do not edit them by hand.
 * If you found a bug fix it in `ts-for-gir` or create a bug report on https://github.com/gjsify/ts-for-gir
 *
 * The based EJS template file is used for the generated .d.ts file of each GIR module like Gtk-4.0, GObject-2.0, ...
 */

declare module 'gi://Pamac?version=11' {

// Module dependencies
import type Gio from 'gi://Gio?version=2.0';
import type GObject from 'gi://GObject?version=2.0';
import type GLib from 'gi://GLib?version=2.0';
import type GModule from 'gi://GModule?version=2.0';

export namespace Pamac {

    /**
     * Pamac-11
     */


    function get_version(): string;

    namespace Package {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::installed-version": (pspec: GObject.ParamSpec) => void;
            "notify::desc": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::repo": (pspec: GObject.ParamSpec) => void;
            "notify::launchable": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::download-size": (pspec: GObject.ParamSpec) => void;
            "notify::install-date": (pspec: GObject.ParamSpec) => void;
            "notify::screenshots": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            name: string;
            id: string;
            app_name: (string | null);
            appName: string;
            app_id: (string | null);
            appId: string;
            version: string;
            installed_version: (string | null);
            installedVersion: string;
            desc: (string | null);
            long_desc: (string | null);
            longDesc: string;
            repo: (string | null);
            launchable: (string | null);
            license: (string | null);
            url: (string | null);
            icon: (string | null);
            installed_size: (bigint | number);
            installedSize: (bigint | number);
            download_size: (bigint | number);
            downloadSize: (bigint | number);
            install_date: (GLib.DateTime | null);
            installDate: GLib.DateTime;
            screenshots: string[];
        }
    }

    /**
     * @gir-type Class
     */
    abstract class Package extends GObject.Object {
        static $gtype: GObject.GType<Package>;

        // Properties
        get name(): string;
        set name(val: string);

        get id(): string;
        set id(val: string);

        /**
         * @read-only
         */
        get app_name(): (string | null);

        /**
         * @read-only
         */
        get appName(): string;

        /**
         * @read-only
         */
        get app_id(): (string | null);

        /**
         * @read-only
         */
        get appId(): string;

        get version(): string;
        set version(val: string);

        get installed_version(): (string | null);
        set installed_version(val: (string | null));

        get installedVersion(): string;
        set installedVersion(val: string);

        get desc(): (string | null);
        set desc(val: (string | null));

        /**
         * @read-only
         */
        get long_desc(): (string | null);

        /**
         * @read-only
         */
        get longDesc(): string;

        get repo(): (string | null);
        set repo(val: (string | null));

        /**
         * @read-only
         */
        get launchable(): (string | null);

        /**
         * @read-only
         */
        get license(): (string | null);

        /**
         * @read-only
         */
        get url(): (string | null);

        /**
         * @read-only
         */
        get icon(): (string | null);

        /**
         * @read-only
         */
        get installed_size(): number;

        /**
         * @read-only
         */
        get installedSize(): number;

        /**
         * @read-only
         */
        get download_size(): number;

        /**
         * @read-only
         */
        get downloadSize(): number;

        /**
         * @read-only
         */
        get install_date(): (GLib.DateTime | null);

        /**
         * @read-only
         */
        get installDate(): GLib.DateTime;

        /**
         * @read-only
         */
        get screenshots(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Package.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Package.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Package.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Package.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Package.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Package.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Package.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Package.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_get_name(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_name(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_id(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_id(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_app_name(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_app_id(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_version(): string;

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_version(value: string): void;

        /**
         * @virtual
         */
        vfunc_get_installed_version(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_installed_version(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_desc(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_desc(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_long_desc(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_repo(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_repo(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_launchable(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_license(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_url(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_icon(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_installed_size(): (bigint | number);

        /**
         * @virtual
         */
        vfunc_get_download_size(): (bigint | number);

        /**
         * @virtual
         */
        vfunc_get_install_date(): (GLib.DateTime | null);

        /**
         * @virtual
         */
        vfunc_get_screenshots(): string[];

        // Methods
        get_name(): string;

        /**
         * @param value 
         */
        set_name(value: string): void;

        get_id(): string;

        /**
         * @param value 
         */
        set_id(value: string): void;

        get_app_name(): (string | null);

        get_app_id(): (string | null);

        get_version(): string;

        /**
         * @param value 
         */
        set_version(value: string): void;

        get_installed_version(): (string | null);

        /**
         * @param value 
         */
        set_installed_version(value: (string | null)): void;

        get_desc(): (string | null);

        /**
         * @param value 
         */
        set_desc(value: (string | null)): void;

        get_long_desc(): (string | null);

        get_repo(): (string | null);

        /**
         * @param value 
         */
        set_repo(value: (string | null)): void;

        get_launchable(): (string | null);

        get_license(): (string | null);

        get_url(): (string | null);

        get_icon(): (string | null);

        get_installed_size(): number;

        get_download_size(): number;

        get_install_date(): (GLib.DateTime | null);

        get_screenshots(): string[];
    }


    namespace AlpmPackage {
        // Signal signatures
        interface SignalSignatures extends Package.SignalSignatures {
            "notify::build-date": (pspec: GObject.ParamSpec) => void;
            "notify::packager": (pspec: GObject.ParamSpec) => void;
            "notify::reason": (pspec: GObject.ParamSpec) => void;
            "notify::validations": (pspec: GObject.ParamSpec) => void;
            "notify::groups": (pspec: GObject.ParamSpec) => void;
            "notify::depends": (pspec: GObject.ParamSpec) => void;
            "notify::optdepends": (pspec: GObject.ParamSpec) => void;
            "notify::makedepends": (pspec: GObject.ParamSpec) => void;
            "notify::checkdepends": (pspec: GObject.ParamSpec) => void;
            "notify::requiredby": (pspec: GObject.ParamSpec) => void;
            "notify::optionalfor": (pspec: GObject.ParamSpec) => void;
            "notify::provides": (pspec: GObject.ParamSpec) => void;
            "notify::replaces": (pspec: GObject.ParamSpec) => void;
            "notify::conflicts": (pspec: GObject.ParamSpec) => void;
            "notify::backups": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::installed-version": (pspec: GObject.ParamSpec) => void;
            "notify::desc": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::repo": (pspec: GObject.ParamSpec) => void;
            "notify::launchable": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::download-size": (pspec: GObject.ParamSpec) => void;
            "notify::install-date": (pspec: GObject.ParamSpec) => void;
            "notify::screenshots": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Package.ConstructorProps {
            build_date: (GLib.DateTime | null);
            buildDate: GLib.DateTime;
            packager: (string | null);
            reason: (string | null);
            validations: string[];
            groups: string[];
            depends: string[];
            optdepends: string[];
            makedepends: string[];
            checkdepends: string[];
            requiredby: string[];
            optionalfor: string[];
            provides: string[];
            replaces: string[];
            conflicts: string[];
            backups: string[];
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AlpmPackage extends Package {
        static $gtype: GObject.GType<AlpmPackage>;

        // Properties
        /**
         * @read-only
         */
        get build_date(): (GLib.DateTime | null);

        /**
         * @read-only
         */
        get buildDate(): GLib.DateTime;

        /**
         * @read-only
         */
        get packager(): (string | null);

        /**
         * @read-only
         */
        get reason(): (string | null);

        /**
         * @read-only
         */
        get validations(): string[];

        /**
         * @read-only
         */
        get groups(): string[];

        get depends(): string[];
        set depends(val: string[]);

        /**
         * @read-only
         */
        get optdepends(): string[];

        /**
         * @read-only
         */
        get makedepends(): string[];

        /**
         * @read-only
         */
        get checkdepends(): string[];

        /**
         * @read-only
         */
        get requiredby(): string[];

        /**
         * @read-only
         */
        get optionalfor(): string[];

        get provides(): string[];
        set provides(val: string[]);

        get replaces(): string[];
        set replaces(val: string[]);

        get conflicts(): string[];
        set conflicts(val: string[]);

        /**
         * @read-only
         */
        get backups(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AlpmPackage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AlpmPackage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AlpmPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AlpmPackage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AlpmPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AlpmPackage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AlpmPackage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AlpmPackage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_get_files(): string[];

        /**
         * @param _callback_ 
         * @virtual
         */
        vfunc_get_files_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_get_files_finish(_res_: Gio.AsyncResult): string[];

        /**
         * @virtual
         */
        vfunc_get_build_date(): (GLib.DateTime | null);

        /**
         * @virtual
         */
        vfunc_get_packager(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_reason(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_validations(): string[];

        /**
         * @virtual
         */
        vfunc_get_groups(): string[];

        /**
         * @virtual
         */
        vfunc_get_depends(): string[];

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_depends(value: string[]): void;

        /**
         * @virtual
         */
        vfunc_get_optdepends(): string[];

        /**
         * @virtual
         */
        vfunc_get_makedepends(): string[];

        /**
         * @virtual
         */
        vfunc_get_checkdepends(): string[];

        /**
         * @virtual
         */
        vfunc_get_requiredby(): string[];

        /**
         * @virtual
         */
        vfunc_get_optionalfor(): string[];

        /**
         * @virtual
         */
        vfunc_get_provides(): string[];

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_provides(value: string[]): void;

        /**
         * @virtual
         */
        vfunc_get_replaces(): string[];

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_replaces(value: string[]): void;

        /**
         * @virtual
         */
        vfunc_get_conflicts(): string[];

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_conflicts(value: string[]): void;

        /**
         * @virtual
         */
        vfunc_get_backups(): string[];

        // Methods
        get_files(): string[];

        get_files_async(): globalThis.Promise<string[]>;

        /**
         * @param _callback_ 
         */
        get_files_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_files_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<string[]> | void);

        /**
         * @param _res_ 
         */
        get_files_finish(_res_: Gio.AsyncResult): string[];

        get_build_date(): (GLib.DateTime | null);

        get_packager(): (string | null);

        get_reason(): (string | null);

        get_validations(): string[];

        get_groups(): string[];

        get_depends(): string[];

        /**
         * @param value 
         */
        set_depends(value: string[]): void;

        get_optdepends(): string[];

        get_makedepends(): string[];

        get_checkdepends(): string[];

        get_requiredby(): string[];

        get_optionalfor(): string[];

        get_provides(): string[];

        /**
         * @param value 
         */
        set_provides(value: string[]): void;

        get_replaces(): string[];

        /**
         * @param value 
         */
        set_replaces(value: string[]): void;

        get_conflicts(): string[];

        /**
         * @param value 
         */
        set_conflicts(value: string[]): void;

        get_backups(): string[];
    }


    namespace AURPackage {
        // Signal signatures
        interface SignalSignatures extends AlpmPackage.SignalSignatures {
            "notify::packagebase": (pspec: GObject.ParamSpec) => void;
            "notify::maintainer": (pspec: GObject.ParamSpec) => void;
            "notify::popularity": (pspec: GObject.ParamSpec) => void;
            "notify::lastmodified": (pspec: GObject.ParamSpec) => void;
            "notify::outofdate": (pspec: GObject.ParamSpec) => void;
            "notify::firstsubmitted": (pspec: GObject.ParamSpec) => void;
            "notify::numvotes": (pspec: GObject.ParamSpec) => void;
            "notify::build-date": (pspec: GObject.ParamSpec) => void;
            "notify::packager": (pspec: GObject.ParamSpec) => void;
            "notify::reason": (pspec: GObject.ParamSpec) => void;
            "notify::validations": (pspec: GObject.ParamSpec) => void;
            "notify::groups": (pspec: GObject.ParamSpec) => void;
            "notify::depends": (pspec: GObject.ParamSpec) => void;
            "notify::optdepends": (pspec: GObject.ParamSpec) => void;
            "notify::makedepends": (pspec: GObject.ParamSpec) => void;
            "notify::checkdepends": (pspec: GObject.ParamSpec) => void;
            "notify::requiredby": (pspec: GObject.ParamSpec) => void;
            "notify::optionalfor": (pspec: GObject.ParamSpec) => void;
            "notify::provides": (pspec: GObject.ParamSpec) => void;
            "notify::replaces": (pspec: GObject.ParamSpec) => void;
            "notify::conflicts": (pspec: GObject.ParamSpec) => void;
            "notify::backups": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::installed-version": (pspec: GObject.ParamSpec) => void;
            "notify::desc": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::repo": (pspec: GObject.ParamSpec) => void;
            "notify::launchable": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::download-size": (pspec: GObject.ParamSpec) => void;
            "notify::install-date": (pspec: GObject.ParamSpec) => void;
            "notify::screenshots": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends AlpmPackage.ConstructorProps {
            packagebase: (string | null);
            maintainer: (string | null);
            popularity: number;
            lastmodified: (GLib.DateTime | null);
            outofdate: (GLib.DateTime | null);
            firstsubmitted: (GLib.DateTime | null);
            numvotes: (bigint | number);
        }
    }

    /**
     * @gir-type Class
     */
    abstract class AURPackage extends AlpmPackage {
        static $gtype: GObject.GType<AURPackage>;

        // Properties
        get packagebase(): (string | null);
        set packagebase(val: (string | null));

        /**
         * @read-only
         */
        get maintainer(): (string | null);

        /**
         * @read-only
         */
        get popularity(): number;

        /**
         * @read-only
         */
        get lastmodified(): (GLib.DateTime | null);

        /**
         * @read-only
         */
        get outofdate(): (GLib.DateTime | null);

        /**
         * @read-only
         */
        get firstsubmitted(): (GLib.DateTime | null);

        /**
         * @read-only
         */
        get numvotes(): number;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: AURPackage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<AURPackage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof AURPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AURPackage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof AURPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, AURPackage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof AURPackage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<AURPackage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_get_packagebase(): (string | null);

        /**
         * @param value 
         * @virtual
         */
        vfunc_set_packagebase(value: (string | null)): void;

        /**
         * @virtual
         */
        vfunc_get_maintainer(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_popularity(): number;

        /**
         * @virtual
         */
        vfunc_get_lastmodified(): (GLib.DateTime | null);

        /**
         * @virtual
         */
        vfunc_get_outofdate(): (GLib.DateTime | null);

        /**
         * @virtual
         */
        vfunc_get_firstsubmitted(): (GLib.DateTime | null);

        /**
         * @virtual
         */
        vfunc_get_numvotes(): (bigint | number);

        // Methods
        get_packagebase(): (string | null);

        /**
         * @param value 
         */
        set_packagebase(value: (string | null)): void;

        get_maintainer(): (string | null);

        get_popularity(): number;

        get_lastmodified(): (GLib.DateTime | null);

        get_outofdate(): (GLib.DateTime | null);

        get_firstsubmitted(): (GLib.DateTime | null);

        get_numvotes(): number;
    }


    namespace TransactionSummary {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::to-install": (pspec: GObject.ParamSpec) => void;
            "notify::to-upgrade": (pspec: GObject.ParamSpec) => void;
            "notify::to-downgrade": (pspec: GObject.ParamSpec) => void;
            "notify::to-reinstall": (pspec: GObject.ParamSpec) => void;
            "notify::to-remove": (pspec: GObject.ParamSpec) => void;
            "notify::conflicts-to-remove": (pspec: GObject.ParamSpec) => void;
            "notify::to-build": (pspec: GObject.ParamSpec) => void;
            "notify::aur-pkgbases-to-build": (pspec: GObject.ParamSpec) => void;
            "notify::to-load": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            to_install: Package[];
            toInstall: Package[];
            to_upgrade: Package[];
            toUpgrade: Package[];
            to_downgrade: Package[];
            toDowngrade: Package[];
            to_reinstall: Package[];
            toReinstall: Package[];
            to_remove: Package[];
            toRemove: Package[];
            conflicts_to_remove: Package[];
            conflictsToRemove: Package[];
            to_build: Package[];
            toBuild: Package[];
            aur_pkgbases_to_build: string[];
            aurPkgbasesToBuild: string[];
            to_load: string[];
            toLoad: string[];
        }
    }

    /**
     * @gir-type Class
     */
    class TransactionSummary extends GObject.Object {
        static $gtype: GObject.GType<TransactionSummary>;

        // Properties
        get to_install(): Package[];
        set to_install(val: Package[]);

        get toInstall(): Package[];
        set toInstall(val: Package[]);

        get to_upgrade(): Package[];
        set to_upgrade(val: Package[]);

        get toUpgrade(): Package[];
        set toUpgrade(val: Package[]);

        get to_downgrade(): Package[];
        set to_downgrade(val: Package[]);

        get toDowngrade(): Package[];
        set toDowngrade(val: Package[]);

        get to_reinstall(): Package[];
        set to_reinstall(val: Package[]);

        get toReinstall(): Package[];
        set toReinstall(val: Package[]);

        get to_remove(): Package[];
        set to_remove(val: Package[]);

        get toRemove(): Package[];
        set toRemove(val: Package[]);

        get conflicts_to_remove(): Package[];
        set conflicts_to_remove(val: Package[]);

        get conflictsToRemove(): Package[];
        set conflictsToRemove(val: Package[]);

        get to_build(): Package[];
        set to_build(val: Package[]);

        get toBuild(): Package[];
        set toBuild(val: Package[]);

        get aur_pkgbases_to_build(): string[];
        set aur_pkgbases_to_build(val: string[]);

        get aurPkgbasesToBuild(): string[];
        set aurPkgbasesToBuild(val: string[]);

        get to_load(): string[];
        set to_load(val: string[]);

        get toLoad(): string[];
        set toLoad(val: string[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: TransactionSummary.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<TransactionSummary.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof TransactionSummary.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransactionSummary.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof TransactionSummary.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, TransactionSummary.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof TransactionSummary.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<TransactionSummary.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_to_install(): Package[];

        get_to_upgrade(): Package[];

        get_to_downgrade(): Package[];

        get_to_reinstall(): Package[];

        get_to_remove(): Package[];

        get_conflicts_to_remove(): Package[];

        get_to_build(): Package[];
    }


    namespace Updates {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::repos-updates": (pspec: GObject.ParamSpec) => void;
            "notify::ignored-repos-updates": (pspec: GObject.ParamSpec) => void;
            "notify::aur-updates": (pspec: GObject.ParamSpec) => void;
            "notify::ignored-aur-updates": (pspec: GObject.ParamSpec) => void;
            "notify::outofdate": (pspec: GObject.ParamSpec) => void;
            "notify::flatpak-updates": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            repos_updates: AlpmPackage[];
            reposUpdates: AlpmPackage[];
            ignored_repos_updates: AlpmPackage[];
            ignoredReposUpdates: AlpmPackage[];
            aur_updates: AURPackage[];
            aurUpdates: AURPackage[];
            ignored_aur_updates: AURPackage[];
            ignoredAurUpdates: AURPackage[];
            outofdate: AURPackage[];
            flatpak_updates: FlatpakPackage[];
            flatpakUpdates: FlatpakPackage[];
        }
    }

    /**
     * @gir-type Class
     */
    class Updates extends GObject.Object {
        static $gtype: GObject.GType<Updates>;

        // Properties
        get repos_updates(): AlpmPackage[];
        set repos_updates(val: AlpmPackage[]);

        get reposUpdates(): AlpmPackage[];
        set reposUpdates(val: AlpmPackage[]);

        get ignored_repos_updates(): AlpmPackage[];
        set ignored_repos_updates(val: AlpmPackage[]);

        get ignoredReposUpdates(): AlpmPackage[];
        set ignoredReposUpdates(val: AlpmPackage[]);

        get aur_updates(): AURPackage[];
        set aur_updates(val: AURPackage[]);

        get aurUpdates(): AURPackage[];
        set aurUpdates(val: AURPackage[]);

        get ignored_aur_updates(): AURPackage[];
        set ignored_aur_updates(val: AURPackage[]);

        get ignoredAurUpdates(): AURPackage[];
        set ignoredAurUpdates(val: AURPackage[]);

        get outofdate(): AURPackage[];
        set outofdate(val: AURPackage[]);

        get flatpak_updates(): FlatpakPackage[];
        set flatpak_updates(val: FlatpakPackage[]);

        get flatpakUpdates(): FlatpakPackage[];
        set flatpakUpdates(val: FlatpakPackage[]);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Updates.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Updates.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof Updates.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Updates.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Updates.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Updates.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Updates.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Updates.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_repos_updates(): AlpmPackage[];

        get_ignored_repos_updates(): AlpmPackage[];

        get_aur_updates(): AURPackage[];

        get_ignored_aur_updates(): AURPackage[];

        get_outofdate(): AURPackage[];

        get_flatpak_updates(): FlatpakPackage[];
    }


    namespace Config {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            "notify::conf-path": (pspec: GObject.ParamSpec) => void;
            "notify::recurse": (pspec: GObject.ParamSpec) => void;
            "notify::keep-built-pkgs": (pspec: GObject.ParamSpec) => void;
            "notify::enable-downgrade": (pspec: GObject.ParamSpec) => void;
            "notify::simple-install": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-period": (pspec: GObject.ParamSpec) => void;
            "notify::no-update-hide-icon": (pspec: GObject.ParamSpec) => void;
            "notify::support-aur": (pspec: GObject.ParamSpec) => void;
            "notify::enable-aur": (pspec: GObject.ParamSpec) => void;
            "notify::support-appstream": (pspec: GObject.ParamSpec) => void;
            "notify::enable-appstream": (pspec: GObject.ParamSpec) => void;
            "notify::support-snap": (pspec: GObject.ParamSpec) => void;
            "notify::enable-snap": (pspec: GObject.ParamSpec) => void;
            "notify::support-flatpak": (pspec: GObject.ParamSpec) => void;
            "notify::enable-flatpak": (pspec: GObject.ParamSpec) => void;
            "notify::check-flatpak-updates": (pspec: GObject.ParamSpec) => void;
            "notify::aur-build-dir": (pspec: GObject.ParamSpec) => void;
            "notify::check-aur-updates": (pspec: GObject.ParamSpec) => void;
            "notify::check-aur-vcs-updates": (pspec: GObject.ParamSpec) => void;
            "notify::download-updates": (pspec: GObject.ParamSpec) => void;
            "notify::offline-upgrade": (pspec: GObject.ParamSpec) => void;
            "notify::max-parallel-downloads": (pspec: GObject.ParamSpec) => void;
            "notify::clean-keep-num-pkgs": (pspec: GObject.ParamSpec) => void;
            "notify::clean-rm-only-uninstalled": (pspec: GObject.ParamSpec) => void;
            "notify::environment-variables": (pspec: GObject.ParamSpec) => void;
            "notify::db-path": (pspec: GObject.ParamSpec) => void;
            "notify::checkspace": (pspec: GObject.ParamSpec) => void;
            "notify::ignorepkgs": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            conf_path: string;
            confPath: string;
            recurse: boolean;
            keep_built_pkgs: boolean;
            keepBuiltPkgs: boolean;
            enable_downgrade: boolean;
            enableDowngrade: boolean;
            simple_install: boolean;
            simpleInstall: boolean;
            refresh_period: (bigint | number);
            refreshPeriod: (bigint | number);
            no_update_hide_icon: boolean;
            noUpdateHideIcon: boolean;
            support_aur: boolean;
            supportAur: boolean;
            enable_aur: boolean;
            enableAur: boolean;
            support_appstream: boolean;
            supportAppstream: boolean;
            enable_appstream: boolean;
            enableAppstream: boolean;
            support_snap: boolean;
            supportSnap: boolean;
            enable_snap: boolean;
            enableSnap: boolean;
            support_flatpak: boolean;
            supportFlatpak: boolean;
            enable_flatpak: boolean;
            enableFlatpak: boolean;
            check_flatpak_updates: boolean;
            checkFlatpakUpdates: boolean;
            aur_build_dir: string;
            aurBuildDir: string;
            check_aur_updates: boolean;
            checkAurUpdates: boolean;
            check_aur_vcs_updates: boolean;
            checkAurVcsUpdates: boolean;
            download_updates: boolean;
            downloadUpdates: boolean;
            offline_upgrade: boolean;
            offlineUpgrade: boolean;
            max_parallel_downloads: (bigint | number);
            maxParallelDownloads: (bigint | number);
            clean_keep_num_pkgs: (bigint | number);
            cleanKeepNumPkgs: (bigint | number);
            clean_rm_only_uninstalled: boolean;
            cleanRmOnlyUninstalled: boolean;
            environment_variables: ({ [key: string]: any } | GLib.HashTable<string, string>);
            environmentVariables: ({ [key: string]: any } | GLib.HashTable<string, string>);
            db_path: string;
            dbPath: string;
            checkspace: boolean;
            ignorepkgs: never;
        }
    }

    /**
     * @gir-type Class
     */
    class Config extends GObject.Object {
        static $gtype: GObject.GType<Config>;

        // Properties
        /**
         * @construct-only
         */
        get conf_path(): string;

        /**
         * @construct-only
         */
        get confPath(): string;

        get recurse(): boolean;
        set recurse(val: boolean);

        get keep_built_pkgs(): boolean;
        set keep_built_pkgs(val: boolean);

        get keepBuiltPkgs(): boolean;
        set keepBuiltPkgs(val: boolean);

        get enable_downgrade(): boolean;
        set enable_downgrade(val: boolean);

        get enableDowngrade(): boolean;
        set enableDowngrade(val: boolean);

        get simple_install(): boolean;
        set simple_install(val: boolean);

        get simpleInstall(): boolean;
        set simpleInstall(val: boolean);

        get refresh_period(): number;
        set refresh_period(val: (bigint | number));

        get refreshPeriod(): number;
        set refreshPeriod(val: (bigint | number));

        get no_update_hide_icon(): boolean;
        set no_update_hide_icon(val: boolean);

        get noUpdateHideIcon(): boolean;
        set noUpdateHideIcon(val: boolean);

        get support_aur(): boolean;
        set support_aur(val: boolean);

        get supportAur(): boolean;
        set supportAur(val: boolean);

        get enable_aur(): boolean;
        set enable_aur(val: boolean);

        get enableAur(): boolean;
        set enableAur(val: boolean);

        get support_appstream(): boolean;
        set support_appstream(val: boolean);

        get supportAppstream(): boolean;
        set supportAppstream(val: boolean);

        get enable_appstream(): boolean;
        set enable_appstream(val: boolean);

        get enableAppstream(): boolean;
        set enableAppstream(val: boolean);

        get support_snap(): boolean;
        set support_snap(val: boolean);

        get supportSnap(): boolean;
        set supportSnap(val: boolean);

        get enable_snap(): boolean;
        set enable_snap(val: boolean);

        get enableSnap(): boolean;
        set enableSnap(val: boolean);

        get support_flatpak(): boolean;
        set support_flatpak(val: boolean);

        get supportFlatpak(): boolean;
        set supportFlatpak(val: boolean);

        get enable_flatpak(): boolean;
        set enable_flatpak(val: boolean);

        get enableFlatpak(): boolean;
        set enableFlatpak(val: boolean);

        get check_flatpak_updates(): boolean;
        set check_flatpak_updates(val: boolean);

        get checkFlatpakUpdates(): boolean;
        set checkFlatpakUpdates(val: boolean);

        get aur_build_dir(): string;
        set aur_build_dir(val: string);

        get aurBuildDir(): string;
        set aurBuildDir(val: string);

        get check_aur_updates(): boolean;
        set check_aur_updates(val: boolean);

        get checkAurUpdates(): boolean;
        set checkAurUpdates(val: boolean);

        get check_aur_vcs_updates(): boolean;
        set check_aur_vcs_updates(val: boolean);

        get checkAurVcsUpdates(): boolean;
        set checkAurVcsUpdates(val: boolean);

        get download_updates(): boolean;
        set download_updates(val: boolean);

        get downloadUpdates(): boolean;
        set downloadUpdates(val: boolean);

        get offline_upgrade(): boolean;
        set offline_upgrade(val: boolean);

        get offlineUpgrade(): boolean;
        set offlineUpgrade(val: boolean);

        get max_parallel_downloads(): number;
        set max_parallel_downloads(val: (bigint | number));

        get maxParallelDownloads(): number;
        set maxParallelDownloads(val: (bigint | number));

        get clean_keep_num_pkgs(): number;
        set clean_keep_num_pkgs(val: (bigint | number));

        get cleanKeepNumPkgs(): number;
        set cleanKeepNumPkgs(val: (bigint | number));

        get clean_rm_only_uninstalled(): boolean;
        set clean_rm_only_uninstalled(val: boolean);

        get cleanRmOnlyUninstalled(): boolean;
        set cleanRmOnlyUninstalled(val: boolean);

        /**
         * @read-only
         */
        get environment_variables(): GLib.HashTable<string, string>;

        /**
         * @read-only
         */
        get environmentVariables(): GLib.HashTable<string, string>;

        /**
         * @read-only
         */
        get db_path(): string;

        /**
         * @read-only
         */
        get dbPath(): string;

        get checkspace(): boolean;
        set checkspace(val: boolean);

        /**
         * @read-only
         */
        get ignorepkgs(): never;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Config.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Config.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](conf_path: string): Config;

        // Signals
        /** @signal */
        connect<K extends keyof Config.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Config.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Config.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Config.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Config.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        /**
         * @param name 
         */
        add_ignorepkg(name: string): void;

        /**
         * @param name 
         */
        remove_ignorepkg(name: string): void;

        reload(): void;

        save(): void;

        get_conf_path(): string;

        get_recurse(): boolean;

        /**
         * @param value 
         */
        set_recurse(value: boolean): void;

        get_keep_built_pkgs(): boolean;

        /**
         * @param value 
         */
        set_keep_built_pkgs(value: boolean): void;

        get_enable_downgrade(): boolean;

        /**
         * @param value 
         */
        set_enable_downgrade(value: boolean): void;

        get_simple_install(): boolean;

        /**
         * @param value 
         */
        set_simple_install(value: boolean): void;

        get_refresh_period(): number;

        /**
         * @param value 
         */
        set_refresh_period(value: (bigint | number)): void;

        get_no_update_hide_icon(): boolean;

        /**
         * @param value 
         */
        set_no_update_hide_icon(value: boolean): void;

        get_support_aur(): boolean;

        get_enable_aur(): boolean;

        /**
         * @param value 
         */
        set_enable_aur(value: boolean): void;

        get_support_appstream(): boolean;

        get_enable_appstream(): boolean;

        /**
         * @param value 
         */
        set_enable_appstream(value: boolean): void;

        get_support_snap(): boolean;

        get_enable_snap(): boolean;

        /**
         * @param value 
         */
        set_enable_snap(value: boolean): void;

        get_support_flatpak(): boolean;

        /**
         * @param value 
         */
        set_support_flatpak(value: boolean): void;

        get_enable_flatpak(): boolean;

        /**
         * @param value 
         */
        set_enable_flatpak(value: boolean): void;

        get_check_flatpak_updates(): boolean;

        /**
         * @param value 
         */
        set_check_flatpak_updates(value: boolean): void;

        get_aur_build_dir(): string;

        /**
         * @param value 
         */
        set_aur_build_dir(value: string): void;

        get_check_aur_updates(): boolean;

        /**
         * @param value 
         */
        set_check_aur_updates(value: boolean): void;

        get_check_aur_vcs_updates(): boolean;

        /**
         * @param value 
         */
        set_check_aur_vcs_updates(value: boolean): void;

        get_download_updates(): boolean;

        /**
         * @param value 
         */
        set_download_updates(value: boolean): void;

        get_offline_upgrade(): boolean;

        /**
         * @param value 
         */
        set_offline_upgrade(value: boolean): void;

        get_max_parallel_downloads(): number;

        /**
         * @param value 
         */
        set_max_parallel_downloads(value: (bigint | number)): void;

        get_clean_keep_num_pkgs(): number;

        /**
         * @param value 
         */
        set_clean_keep_num_pkgs(value: (bigint | number)): void;

        get_clean_rm_only_uninstalled(): boolean;

        /**
         * @param value 
         */
        set_clean_rm_only_uninstalled(value: boolean): void;

        get_environment_variables(): GLib.HashTable<string, string>;

        get_db_path(): string;

        get_checkspace(): boolean;

        /**
         * @param value 
         */
        set_checkspace(value: boolean): void;

        get_ignorepkgs(): never;
    }


    namespace Database {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "get-updates-progress": (arg0: number) => void;
            /**
             * @signal
             */
            "emit-warning": (arg0: string) => void;
            "notify::config": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            config: Config;
        }
    }

    /**
     * @gir-type Class
     */
    class Database extends GObject.Object {
        static $gtype: GObject.GType<Database>;

        // Properties
        get config(): Config;
        set config(val: Config);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Database.SignalSignatures;

        // Fields
        vercmp: GLib.CompareFunc;

        // Constructors
        constructor(properties?: Partial<Database.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](config: Config): Database;

        // Signals
        /** @signal */
        connect<K extends keyof Database.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Database.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Database.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Database.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Database.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Database.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        get_mirrors_countries_async(): globalThis.Promise<string[]>;

        /**
         * @param _callback_ 
         */
        get_mirrors_countries_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_mirrors_countries_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<string[]> | void);

        /**
         * @param _res_ 
         */
        get_mirrors_countries_finish(_res_: Gio.AsyncResult): string[];

        get_mirrors_choosen_country_async(): globalThis.Promise<string>;

        /**
         * @param _callback_ 
         */
        get_mirrors_choosen_country_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_mirrors_choosen_country_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<string> | void);

        /**
         * @param _res_ 
         */
        get_mirrors_choosen_country_finish(_res_: Gio.AsyncResult): string;

        /**
         * @param dep_string 
         */
        get_alpm_dep_name(dep_string: string): string;

        get_clean_cache_details(): GLib.HashTable<string, (bigint | number)>;

        get_clean_cache_details_async(): globalThis.Promise<GLib.HashTable<string, (bigint | number)>>;

        /**
         * @param _callback_ 
         */
        get_clean_cache_details_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_clean_cache_details_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<GLib.HashTable<string, (bigint | number)>> | void);

        /**
         * @param _res_ 
         */
        get_clean_cache_details_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, (bigint | number)>;

        get_real_aur_build_dir(): string;

        get_build_files_details(): GLib.HashTable<string, (bigint | number)>;

        get_build_files_details_async(): globalThis.Promise<GLib.HashTable<string, (bigint | number)>>;

        /**
         * @param _callback_ 
         */
        get_build_files_details_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_build_files_details_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<GLib.HashTable<string, (bigint | number)>> | void);

        /**
         * @param _res_ 
         */
        get_build_files_details_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, (bigint | number)>;

        /**
         * @param pkgname 
         */
        is_installed_pkg(pkgname: string): boolean;

        /**
         * @param pkgname 
         */
        get_installed_pkg(pkgname: string): (AlpmPackage | null);

        /**
         * @param depstring 
         */
        has_installed_satisfier(depstring: string): boolean;

        /**
         * @param depstring 
         */
        get_installed_satisfier(depstring: string): (AlpmPackage | null);

        /**
         * @param glob 
         */
        get_installed_pkgs_by_glob(glob: string): AlpmPackage[];

        /**
         * @param pkgname 
         */
        should_hold(pkgname: string): boolean;

        get_installed_pkgs(): AlpmPackage[];

        get_installed_pkgs_async(): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param _callback_ 
         */
        get_installed_pkgs_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_installed_pkgs_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_installed_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        get_installed_apps_async(): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param _callback_ 
         */
        get_installed_apps_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_installed_apps_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_installed_apps_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        get_explicitly_installed_pkgs(): AlpmPackage[];

        get_explicitly_installed_pkgs_async(): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param _callback_ 
         */
        get_explicitly_installed_pkgs_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_explicitly_installed_pkgs_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_explicitly_installed_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        get_foreign_pkgs(): AlpmPackage[];

        get_foreign_pkgs_async(): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param _callback_ 
         */
        get_foreign_pkgs_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_foreign_pkgs_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_foreign_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        get_orphans(): AlpmPackage[];

        get_orphans_async(): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param _callback_ 
         */
        get_orphans_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_orphans_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_orphans_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        /**
         * @param pkgname 
         */
        is_sync_pkg(pkgname: string): boolean;

        /**
         * @param pkgname 
         */
        get_sync_pkg(pkgname: string): (AlpmPackage | null);

        /**
         * @param depstring 
         */
        has_sync_satisfier(depstring: string): boolean;

        /**
         * @param depstring 
         */
        get_sync_satisfier(depstring: string): (AlpmPackage | null);

        /**
         * @param glob 
         */
        get_sync_pkgs_by_glob(glob: string): AlpmPackage[];

        /**
         * @param app_id 
         */
        get_app_by_id(app_id: string): (Package | null);

        /**
         * @param url 
         */
        get_url_stream(url: string): globalThis.Promise<Gio.InputStream>;

        /**
         * @param url 
         * @param _callback_ 
         */
        get_url_stream(url: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param url 
         * @param _callback_ 
         */
        get_url_stream(url: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Gio.InputStream> | void);

        /**
         * @param _res_ 
         */
        get_url_stream_finish(_res_: Gio.AsyncResult): Gio.InputStream;

        /**
         * @param search_string 
         */
        search_installed_pkgs(search_string: string): AlpmPackage[];

        /**
         * @param search_string 
         */
        search_installed_pkgs_async(search_string: string): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_installed_pkgs_async(search_string: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_installed_pkgs_async(search_string: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        search_installed_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        /**
         * @param search_string 
         */
        search_repos_pkgs(search_string: string): AlpmPackage[];

        /**
         * @param search_string 
         */
        search_repos_pkgs_async(search_string: string): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_repos_pkgs_async(search_string: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_repos_pkgs_async(search_string: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        search_repos_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        /**
         * @param search_terms 
         */
        search_uninstalled_apps(search_terms: string[]): AlpmPackage[];

        /**
         * @param search_string 
         */
        search_pkgs(search_string: string): AlpmPackage[];

        /**
         * @param search_string 
         */
        search_pkgs_async(search_string: string): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_pkgs_async(search_string: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_pkgs_async(search_string: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        search_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        /**
         * @param search_string 
         */
        search_aur_pkgs(search_string: string): AURPackage[];

        /**
         * @param search_string 
         */
        search_aur_pkgs_async(search_string: string): globalThis.Promise<AURPackage[]>;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_aur_pkgs_async(search_string: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_aur_pkgs_async(search_string: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AURPackage[]> | void);

        /**
         * @param _res_ 
         */
        search_aur_pkgs_finish(_res_: Gio.AsyncResult): AURPackage[];

        /**
         * @param files 
         */
        search_files(files: string[]): GLib.HashTable;

        get_categories_names(): string[];

        /**
         * @param category 
         */
        get_category_pkgs_async(category: string): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param category 
         * @param _callback_ 
         */
        get_category_pkgs_async(category: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param category 
         * @param _callback_ 
         */
        get_category_pkgs_async(category: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_category_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        get_repos_names(): string[];

        /**
         * @param repo 
         */
        get_repo_pkgs(repo: string): AlpmPackage[];

        /**
         * @param repo 
         */
        get_repo_pkgs_async(repo: string): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param repo 
         * @param _callback_ 
         */
        get_repo_pkgs_async(repo: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param repo 
         * @param _callback_ 
         */
        get_repo_pkgs_async(repo: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_repo_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        get_groups_names(): string[];

        /**
         * @param group_name 
         */
        get_group_pkgs(group_name: string): AlpmPackage[];

        /**
         * @param group_name 
         */
        get_group_pkgs_async(group_name: string): globalThis.Promise<AlpmPackage[]>;

        /**
         * @param group_name 
         * @param _callback_ 
         */
        get_group_pkgs_async(group_name: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param group_name 
         * @param _callback_ 
         */
        get_group_pkgs_async(group_name: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<AlpmPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_group_pkgs_finish(_res_: Gio.AsyncResult): AlpmPackage[];

        /**
         * @param pkgname 
         */
        get_pkg(pkgname: string): (AlpmPackage | null);

        /**
         * @param pkgname 
         * @param overwrite_files 
         * @param cancellable 
         */
        clone_build_files(pkgname: string, overwrite_files: boolean, cancellable: (Gio.Cancellable | null)): (Gio.File | null);

        /**
         * @param pkgname 
         * @param overwrite_files 
         * @param cancellable 
         */
        clone_build_files_async(pkgname: string, overwrite_files: boolean, cancellable: (Gio.Cancellable | null)): globalThis.Promise<(Gio.File | null)>;

        /**
         * @param pkgname 
         * @param overwrite_files 
         * @param cancellable 
         * @param _callback_ 
         */
        clone_build_files_async(pkgname: string, overwrite_files: boolean, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param overwrite_files 
         * @param cancellable 
         * @param _callback_ 
         */
        clone_build_files_async(pkgname: string, overwrite_files: boolean, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(Gio.File | null)> | void);

        /**
         * @param _res_ 
         */
        clone_build_files_finish(_res_: Gio.AsyncResult): (Gio.File | null);

        /**
         * @param pkgname 
         * @param cancellable 
         */
        regenerate_srcinfo(pkgname: string, cancellable: (Gio.Cancellable | null)): boolean;

        /**
         * @param pkgname 
         * @param cancellable 
         */
        regenerate_srcinfo_async(pkgname: string, cancellable: (Gio.Cancellable | null)): globalThis.Promise<boolean>;

        /**
         * @param pkgname 
         * @param cancellable 
         * @param _callback_ 
         */
        regenerate_srcinfo_async(pkgname: string, cancellable: (Gio.Cancellable | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param cancellable 
         * @param _callback_ 
         */
        regenerate_srcinfo_async(pkgname: string, cancellable: (Gio.Cancellable | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        regenerate_srcinfo_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param pkgname 
         */
        get_aur_pkg(pkgname: string): (AURPackage | null);

        /**
         * @param pkgname 
         */
        get_aur_pkg_async(pkgname: string): globalThis.Promise<(AURPackage | null)>;

        /**
         * @param pkgname 
         * @param _callback_ 
         */
        get_aur_pkg_async(pkgname: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param _callback_ 
         */
        get_aur_pkg_async(pkgname: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(AURPackage | null)> | void);

        /**
         * @param _res_ 
         */
        get_aur_pkg_finish(_res_: Gio.AsyncResult): (AURPackage | null);

        /**
         * @param pkgnames 
         */
        get_aur_pkgs(pkgnames: string[]): GLib.HashTable<string, AURPackage>;

        /**
         * @param pkgnames 
         */
        get_aur_pkgs_async(pkgnames: string[]): globalThis.Promise<GLib.HashTable<string, AURPackage>>;

        /**
         * @param pkgnames 
         * @param _callback_ 
         */
        get_aur_pkgs_async(pkgnames: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgnames 
         * @param _callback_ 
         */
        get_aur_pkgs_async(pkgnames: string[], _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<GLib.HashTable<string, AURPackage>> | void);

        /**
         * @param _res_ 
         */
        get_aur_pkgs_finish(_res_: Gio.AsyncResult): GLib.HashTable<string, AURPackage>;

        refresh_tmp_files_dbs_async(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        refresh_tmp_files_dbs_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        refresh_tmp_files_dbs_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        refresh_tmp_files_dbs_finish(_res_: Gio.AsyncResult): void;

        refresh_tmp_files_dbs(): void;

        get_last_refresh_time(): (GLib.DateTime | null);

        need_refresh(): boolean;

        get_updates(): Updates;

        get_updates_async(): globalThis.Promise<Updates>;

        /**
         * @param _callback_ 
         */
        get_updates_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_updates_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<Updates> | void);

        /**
         * @param _res_ 
         */
        get_updates_finish(_res_: Gio.AsyncResult): Updates;

        /**
         * @param search_string 
         */
        search_snaps_async(search_string: string): globalThis.Promise<SnapPackage[]>;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_snaps_async(search_string: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_snaps_async(search_string: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SnapPackage[]> | void);

        /**
         * @param _res_ 
         */
        search_snaps_finish(_res_: Gio.AsyncResult): SnapPackage[];

        /**
         * @param name 
         */
        is_installed_snap(name: string): boolean;

        /**
         * @param name 
         */
        get_snap_async(name: string): globalThis.Promise<(SnapPackage | null)>;

        /**
         * @param name 
         * @param _callback_ 
         */
        get_snap_async(name: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param name 
         * @param _callback_ 
         */
        get_snap_async(name: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(SnapPackage | null)> | void);

        /**
         * @param _res_ 
         */
        get_snap_finish(_res_: Gio.AsyncResult): (SnapPackage | null);

        get_installed_snaps_async(): globalThis.Promise<SnapPackage[]>;

        /**
         * @param _callback_ 
         */
        get_installed_snaps_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_installed_snaps_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SnapPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_installed_snaps_finish(_res_: Gio.AsyncResult): SnapPackage[];

        /**
         * @param name 
         */
        get_installed_snap_icon_async(name: string): globalThis.Promise<string>;

        /**
         * @param name 
         * @param _callback_ 
         */
        get_installed_snap_icon_async(name: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param name 
         * @param _callback_ 
         */
        get_installed_snap_icon_async(name: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<string> | void);

        /**
         * @param _res_ 
         */
        get_installed_snap_icon_finish(_res_: Gio.AsyncResult): string;

        /**
         * @param category 
         */
        get_category_snaps_async(category: string): globalThis.Promise<SnapPackage[]>;

        /**
         * @param category 
         * @param _callback_ 
         */
        get_category_snaps_async(category: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param category 
         * @param _callback_ 
         */
        get_category_snaps_async(category: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<SnapPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_category_snaps_finish(_res_: Gio.AsyncResult): SnapPackage[];

        refresh_flatpak_appstream_data(): void;

        refresh_flatpak_appstream_data_async(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        refresh_flatpak_appstream_data_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        refresh_flatpak_appstream_data_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        refresh_flatpak_appstream_data_finish(_res_: Gio.AsyncResult): void;

        get_flatpak_remotes_names(): string[];

        get_installed_flatpaks_async(): globalThis.Promise<FlatpakPackage[]>;

        /**
         * @param _callback_ 
         */
        get_installed_flatpaks_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_installed_flatpaks_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<FlatpakPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_installed_flatpaks_finish(_res_: Gio.AsyncResult): FlatpakPackage[];

        /**
         * @param search_string 
         */
        search_flatpaks_async(search_string: string): globalThis.Promise<FlatpakPackage[]>;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_flatpaks_async(search_string: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param search_string 
         * @param _callback_ 
         */
        search_flatpaks_async(search_string: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<FlatpakPackage[]> | void);

        /**
         * @param _res_ 
         */
        search_flatpaks_finish(_res_: Gio.AsyncResult): FlatpakPackage[];

        /**
         * @param name 
         */
        is_installed_flatpak(name: string): boolean;

        /**
         * @param id 
         */
        get_flatpak_async(id: string): globalThis.Promise<(FlatpakPackage | null)>;

        /**
         * @param id 
         * @param _callback_ 
         */
        get_flatpak_async(id: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param id 
         * @param _callback_ 
         */
        get_flatpak_async(id: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<(FlatpakPackage | null)> | void);

        /**
         * @param _res_ 
         */
        get_flatpak_finish(_res_: Gio.AsyncResult): (FlatpakPackage | null);

        /**
         * @param category 
         */
        get_category_flatpaks_async(category: string): globalThis.Promise<FlatpakPackage[]>;

        /**
         * @param category 
         * @param _callback_ 
         */
        get_category_flatpaks_async(category: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param category 
         * @param _callback_ 
         */
        get_category_flatpaks_async(category: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<FlatpakPackage[]> | void);

        /**
         * @param _res_ 
         */
        get_category_flatpaks_finish(_res_: Gio.AsyncResult): FlatpakPackage[];

        get_config(): Config;

        /**
         * @param value 
         */
        set_config(value: Config): void;
    }


    namespace Transaction {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "emit-action": (arg0: string) => void;
            /**
             * @signal
             */
            "emit-action-progress": (arg0: string, arg1: string, arg2: number) => void;
            /**
             * @signal
             */
            "emit-download-progress": (arg0: string, arg1: string, arg2: number) => void;
            /**
             * @signal
             */
            "emit-hook-progress": (arg0: string, arg1: string, arg2: string, arg3: number) => void;
            /**
             * @signal
             */
            "emit-script-output": (arg0: string) => void;
            /**
             * @signal
             */
            "emit-warning": (arg0: string) => void;
            /**
             * @signal
             */
            "emit-error": (arg0: string, arg1: string[]) => void;
            /**
             * @signal
             */
            "start-waiting": () => void;
            /**
             * @signal
             */
            "stop-waiting": () => void;
            /**
             * @signal
             */
            "start-preparing": () => void;
            /**
             * @signal
             */
            "stop-preparing": () => void;
            /**
             * @signal
             */
            "start-downloading": () => void;
            /**
             * @signal
             */
            "stop-downloading": () => void;
            /**
             * @signal
             */
            "start-building": () => void;
            /**
             * @signal
             */
            "stop-building": () => void;
            /**
             * @signal
             */
            "important-details-outpout": (arg0: boolean) => void;
            "notify::database": (pspec: GObject.ParamSpec) => void;
            "notify::download-only": (pspec: GObject.ParamSpec) => void;
            "notify::dry-run": (pspec: GObject.ParamSpec) => void;
            "notify::install-if-needed": (pspec: GObject.ParamSpec) => void;
            "notify::remove-if-unneeded": (pspec: GObject.ParamSpec) => void;
            "notify::cascade": (pspec: GObject.ParamSpec) => void;
            "notify::keep-config-files": (pspec: GObject.ParamSpec) => void;
            "notify::install-as-dep": (pspec: GObject.ParamSpec) => void;
            "notify::install-as-explicit": (pspec: GObject.ParamSpec) => void;
            "notify::no-refresh": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            database: Database;
            download_only: boolean;
            downloadOnly: boolean;
            dry_run: boolean;
            dryRun: boolean;
            install_if_needed: boolean;
            installIfNeeded: boolean;
            remove_if_unneeded: boolean;
            removeIfUnneeded: boolean;
            cascade: boolean;
            keep_config_files: boolean;
            keepConfigFiles: boolean;
            install_as_dep: boolean;
            installAsDep: boolean;
            install_as_explicit: boolean;
            installAsExplicit: boolean;
            no_refresh: boolean;
            noRefresh: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class Transaction extends GObject.Object {
        static $gtype: GObject.GType<Transaction>;

        // Properties
        get database(): Database;
        set database(val: Database);

        get download_only(): boolean;
        set download_only(val: boolean);

        get downloadOnly(): boolean;
        set downloadOnly(val: boolean);

        get dry_run(): boolean;
        set dry_run(val: boolean);

        get dryRun(): boolean;
        set dryRun(val: boolean);

        get install_if_needed(): boolean;
        set install_if_needed(val: boolean);

        get installIfNeeded(): boolean;
        set installIfNeeded(val: boolean);

        get remove_if_unneeded(): boolean;
        set remove_if_unneeded(val: boolean);

        get removeIfUnneeded(): boolean;
        set removeIfUnneeded(val: boolean);

        get cascade(): boolean;
        set cascade(val: boolean);

        get keep_config_files(): boolean;
        set keep_config_files(val: boolean);

        get keepConfigFiles(): boolean;
        set keepConfigFiles(val: boolean);

        get install_as_dep(): boolean;
        set install_as_dep(val: boolean);

        get installAsDep(): boolean;
        set installAsDep(val: boolean);

        get install_as_explicit(): boolean;
        set install_as_explicit(val: boolean);

        get installAsExplicit(): boolean;
        set installAsExplicit(val: boolean);

        get no_refresh(): boolean;
        set no_refresh(val: boolean);

        get noRefresh(): boolean;
        set noRefresh(val: boolean);

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: Transaction.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<Transaction.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](database: Database): Transaction;

        // Signals
        /** @signal */
        connect<K extends keyof Transaction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof Transaction.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, Transaction.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof Transaction.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<Transaction.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @param summary 
         * @param _callback_ 
         * @virtual
         */
        vfunc_ask_commit(summary: TransactionSummary, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_ask_commit_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param summary 
         * @param _callback_ 
         * @virtual
         */
        vfunc_ask_edit_build_files(summary: TransactionSummary, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_ask_edit_build_files_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param pkgnames 
         * @param _callback_ 
         * @virtual
         */
        vfunc_edit_build_files(pkgnames: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_edit_build_files_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param pkgname 
         * @param key 
         * @param owner 
         * @param _callback_ 
         * @virtual
         */
        vfunc_ask_import_key(pkgname: string, key: string, owner: (string | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_ask_import_key_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param pkgname 
         * @param optdeps 
         * @param _callback_ 
         * @virtual
         */
        vfunc_choose_optdeps(pkgname: string, optdeps: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_choose_optdeps_finish(_res_: Gio.AsyncResult): string[];

        /**
         * @param depend 
         * @param providers 
         * @param _callback_ 
         * @virtual
         */
        vfunc_choose_provider(depend: string, providers: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_choose_provider_finish(_res_: Gio.AsyncResult): number;

        /**
         * @param name 
         * @param _callback_ 
         * @virtual
         */
        vfunc_ask_snap_install_classic(name: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_ask_snap_install_classic_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param args 
         * @param working_directory 
         * @param cancellable 
         * @param _callback_ 
         * @virtual
         */
        vfunc_run_cmd_line_async(args: string[], working_directory: (string | null), cancellable: Gio.Cancellable, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _res_ 
         * @virtual
         */
        vfunc_run_cmd_line_finish(_res_: Gio.AsyncResult): number;

        // Methods
        quit_daemon(): void;

        /**
         * @param summary 
         */
        ask_commit(summary: TransactionSummary): globalThis.Promise<boolean>;

        /**
         * @param summary 
         * @param _callback_ 
         */
        ask_commit(summary: TransactionSummary, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param summary 
         * @param _callback_ 
         */
        ask_commit(summary: TransactionSummary, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        ask_commit_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param summary 
         */
        ask_edit_build_files(summary: TransactionSummary): globalThis.Promise<boolean>;

        /**
         * @param summary 
         * @param _callback_ 
         */
        ask_edit_build_files(summary: TransactionSummary, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param summary 
         * @param _callback_ 
         */
        ask_edit_build_files(summary: TransactionSummary, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        ask_edit_build_files_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param pkgnames 
         */
        edit_build_files(pkgnames: string[]): globalThis.Promise<void>;

        /**
         * @param pkgnames 
         * @param _callback_ 
         */
        edit_build_files(pkgnames: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgnames 
         * @param _callback_ 
         */
        edit_build_files(pkgnames: string[], _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        edit_build_files_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param pkgname 
         * @param key 
         * @param owner 
         */
        ask_import_key(pkgname: string, key: string, owner: (string | null)): globalThis.Promise<boolean>;

        /**
         * @param pkgname 
         * @param key 
         * @param owner 
         * @param _callback_ 
         */
        ask_import_key(pkgname: string, key: string, owner: (string | null), _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param key 
         * @param owner 
         * @param _callback_ 
         */
        ask_import_key(pkgname: string, key: string, owner: (string | null), _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        ask_import_key_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param pkgname 
         */
        get_build_files_async(pkgname: string): globalThis.Promise<string[]>;

        /**
         * @param pkgname 
         * @param _callback_ 
         */
        get_build_files_async(pkgname: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param _callback_ 
         */
        get_build_files_async(pkgname: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<string[]> | void);

        /**
         * @param _res_ 
         */
        get_build_files_finish(_res_: Gio.AsyncResult): string[];

        /**
         * @param pkgname 
         * @param optdeps 
         */
        choose_optdeps(pkgname: string, optdeps: string[]): globalThis.Promise<string[]>;

        /**
         * @param pkgname 
         * @param optdeps 
         * @param _callback_ 
         */
        choose_optdeps(pkgname: string, optdeps: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param optdeps 
         * @param _callback_ 
         */
        choose_optdeps(pkgname: string, optdeps: string[], _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<string[]> | void);

        /**
         * @param _res_ 
         */
        choose_optdeps_finish(_res_: Gio.AsyncResult): string[];

        /**
         * @param depend 
         * @param providers 
         */
        choose_provider(depend: string, providers: string[]): globalThis.Promise<number>;

        /**
         * @param depend 
         * @param providers 
         * @param _callback_ 
         */
        choose_provider(depend: string, providers: string[], _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param depend 
         * @param providers 
         * @param _callback_ 
         */
        choose_provider(depend: string, providers: string[], _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<number> | void);

        /**
         * @param _res_ 
         */
        choose_provider_finish(_res_: Gio.AsyncResult): number;

        /**
         * @param name 
         */
        ask_snap_install_classic(name: string): globalThis.Promise<boolean>;

        /**
         * @param name 
         * @param _callback_ 
         */
        ask_snap_install_classic(name: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param name 
         * @param _callback_ 
         */
        ask_snap_install_classic(name: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        ask_snap_install_classic_finish(_res_: Gio.AsyncResult): boolean;

        get_authorization_async(): globalThis.Promise<boolean>;

        /**
         * @param _callback_ 
         */
        get_authorization_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        get_authorization_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        get_authorization_finish(_res_: Gio.AsyncResult): boolean;

        remove_authorization(): void;

        /**
         * @param country 
         */
        generate_mirrors_list_async(country: string): globalThis.Promise<void>;

        /**
         * @param country 
         * @param _callback_ 
         */
        generate_mirrors_list_async(country: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param country 
         * @param _callback_ 
         */
        generate_mirrors_list_async(country: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        generate_mirrors_list_finish(_res_: Gio.AsyncResult): void;

        clean_cache_async(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        clean_cache_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        clean_cache_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        clean_cache_finish(_res_: Gio.AsyncResult): void;

        clean_build_files_async(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        clean_build_files_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        clean_build_files_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        clean_build_files_finish(_res_: Gio.AsyncResult): void;

        /**
         * @param pkgname 
         * @param reason 
         */
        set_pkgreason_async(pkgname: string, reason: number): globalThis.Promise<boolean>;

        /**
         * @param pkgname 
         * @param reason 
         * @param _callback_ 
         */
        set_pkgreason_async(pkgname: string, reason: number, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param pkgname 
         * @param reason 
         * @param _callback_ 
         */
        set_pkgreason_async(pkgname: string, reason: number, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        set_pkgreason_finish(_res_: Gio.AsyncResult): boolean;

        download_updates_async(): globalThis.Promise<boolean>;

        /**
         * @param _callback_ 
         */
        download_updates_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        download_updates_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        download_updates_finish(_res_: Gio.AsyncResult): boolean;

        run_async(): globalThis.Promise<boolean>;

        /**
         * @param _callback_ 
         */
        run_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        run_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        run_finish(_res_: Gio.AsyncResult): boolean;

        check_dbs(): globalThis.Promise<void>;

        /**
         * @param _callback_ 
         */
        check_dbs(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        check_dbs(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<void> | void);

        /**
         * @param _res_ 
         */
        check_dbs_finish(_res_: Gio.AsyncResult): void;

        refresh_dbs_async(): globalThis.Promise<boolean>;

        /**
         * @param _callback_ 
         */
        refresh_dbs_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        refresh_dbs_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        refresh_dbs_finish(_res_: Gio.AsyncResult): boolean;

        refresh_files_dbs_async(): globalThis.Promise<boolean>;

        /**
         * @param _callback_ 
         */
        refresh_files_dbs_async(_callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param _callback_ 
         */
        refresh_files_dbs_async(_callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        refresh_files_dbs_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param name 
         */
        add_pkg_to_install(name: string): void;

        /**
         * @param name 
         */
        add_pkg_to_remove(name: string): void;

        /**
         * @param path 
         */
        add_path_to_load(path: string): void;

        /**
         * @param name 
         * @param clone_build_files 
         * @param clone_deps_build_files 
         */
        add_pkg_to_build(name: string, clone_build_files: boolean, clone_deps_build_files: boolean): void;

        /**
         * @param name 
         */
        add_temporary_ignore_pkg(name: string): void;

        /**
         * @param glob 
         */
        add_overwrite_file(glob: string): void;

        /**
         * @param name 
         */
        add_pkg_to_mark_as_dep(name: string): void;

        /**
         * @param force_refresh 
         */
        add_pkgs_to_upgrade(force_refresh: boolean): void;

        /**
         * @param pkg 
         */
        add_snap_to_install(pkg: SnapPackage): void;

        /**
         * @param pkg 
         */
        add_snap_to_remove(pkg: SnapPackage): void;

        /**
         * @param snap_name 
         * @param channel 
         */
        snap_switch_channel_async(snap_name: string, channel: string): globalThis.Promise<boolean>;

        /**
         * @param snap_name 
         * @param channel 
         * @param _callback_ 
         */
        snap_switch_channel_async(snap_name: string, channel: string, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param snap_name 
         * @param channel 
         * @param _callback_ 
         */
        snap_switch_channel_async(snap_name: string, channel: string, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<boolean> | void);

        /**
         * @param _res_ 
         */
        snap_switch_channel_finish(_res_: Gio.AsyncResult): boolean;

        /**
         * @param pkg 
         */
        add_flatpak_to_install(pkg: FlatpakPackage): void;

        /**
         * @param pkg 
         */
        add_flatpak_to_remove(pkg: FlatpakPackage): void;

        /**
         * @param pkg 
         */
        add_flatpak_to_upgrade(pkg: FlatpakPackage): void;

        /**
         * @param args 
         * @param working_directory 
         * @param cancellable 
         */
        run_cmd_line_async(args: string[], working_directory: (string | null), cancellable: Gio.Cancellable): globalThis.Promise<number>;

        /**
         * @param args 
         * @param working_directory 
         * @param cancellable 
         * @param _callback_ 
         */
        run_cmd_line_async(args: string[], working_directory: (string | null), cancellable: Gio.Cancellable, _callback_: (Gio.AsyncReadyCallback<this> | null)): void;

        /**
         * @param args 
         * @param working_directory 
         * @param cancellable 
         * @param _callback_ 
         */
        run_cmd_line_async(args: string[], working_directory: (string | null), cancellable: Gio.Cancellable, _callback_?: (Gio.AsyncReadyCallback<this> | null)): (globalThis.Promise<number> | void);

        /**
         * @param _res_ 
         */
        run_cmd_line_finish(_res_: Gio.AsyncResult): number;

        cancel(): void;

        get_database(): Database;

        /**
         * @param value 
         */
        set_database(value: Database): void;

        get_download_only(): boolean;

        /**
         * @param value 
         */
        set_download_only(value: boolean): void;

        get_dry_run(): boolean;

        /**
         * @param value 
         */
        set_dry_run(value: boolean): void;

        get_install_if_needed(): boolean;

        /**
         * @param value 
         */
        set_install_if_needed(value: boolean): void;

        get_remove_if_unneeded(): boolean;

        /**
         * @param value 
         */
        set_remove_if_unneeded(value: boolean): void;

        get_cascade(): boolean;

        /**
         * @param value 
         */
        set_cascade(value: boolean): void;

        get_keep_config_files(): boolean;

        /**
         * @param value 
         */
        set_keep_config_files(value: boolean): void;

        get_install_as_dep(): boolean;

        /**
         * @param value 
         */
        set_install_as_dep(value: boolean): void;

        get_install_as_explicit(): boolean;

        /**
         * @param value 
         */
        set_install_as_explicit(value: boolean): void;

        get_no_refresh(): boolean;

        /**
         * @param value 
         */
        set_no_refresh(value: boolean): void;
    }


    namespace SnapPackage {
        // Signal signatures
        interface SignalSignatures extends Package.SignalSignatures {
            "notify::channel": (pspec: GObject.ParamSpec) => void;
            "notify::publisher": (pspec: GObject.ParamSpec) => void;
            "notify::confined": (pspec: GObject.ParamSpec) => void;
            "notify::channels": (pspec: GObject.ParamSpec) => void;
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::installed-version": (pspec: GObject.ParamSpec) => void;
            "notify::desc": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::repo": (pspec: GObject.ParamSpec) => void;
            "notify::launchable": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::download-size": (pspec: GObject.ParamSpec) => void;
            "notify::install-date": (pspec: GObject.ParamSpec) => void;
            "notify::screenshots": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Package.ConstructorProps {
            channel: (string | null);
            publisher: (string | null);
            confined: (string | null);
            channels: string[];
        }
    }

    /**
     * @gir-type Class
     */
    abstract class SnapPackage extends Package {
        static $gtype: GObject.GType<SnapPackage>;

        // Properties
        /**
         * @read-only
         */
        get channel(): (string | null);

        /**
         * @read-only
         */
        get publisher(): (string | null);

        /**
         * @read-only
         */
        get confined(): (string | null);

        /**
         * @read-only
         */
        get channels(): string[];

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: SnapPackage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<SnapPackage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof SnapPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnapPackage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof SnapPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, SnapPackage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof SnapPackage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<SnapPackage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Virtual methods
        /**
         * @virtual
         */
        vfunc_get_channel(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_publisher(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_confined(): (string | null);

        /**
         * @virtual
         */
        vfunc_get_channels(): string[];

        // Methods
        get_channel(): (string | null);

        get_publisher(): (string | null);

        get_confined(): (string | null);

        get_channels(): string[];
    }


    namespace FlatpakPackage {
        // Signal signatures
        interface SignalSignatures extends Package.SignalSignatures {
            "notify::name": (pspec: GObject.ParamSpec) => void;
            "notify::id": (pspec: GObject.ParamSpec) => void;
            "notify::app-name": (pspec: GObject.ParamSpec) => void;
            "notify::app-id": (pspec: GObject.ParamSpec) => void;
            "notify::version": (pspec: GObject.ParamSpec) => void;
            "notify::installed-version": (pspec: GObject.ParamSpec) => void;
            "notify::desc": (pspec: GObject.ParamSpec) => void;
            "notify::long-desc": (pspec: GObject.ParamSpec) => void;
            "notify::repo": (pspec: GObject.ParamSpec) => void;
            "notify::launchable": (pspec: GObject.ParamSpec) => void;
            "notify::license": (pspec: GObject.ParamSpec) => void;
            "notify::url": (pspec: GObject.ParamSpec) => void;
            "notify::icon": (pspec: GObject.ParamSpec) => void;
            "notify::installed-size": (pspec: GObject.ParamSpec) => void;
            "notify::download-size": (pspec: GObject.ParamSpec) => void;
            "notify::install-date": (pspec: GObject.ParamSpec) => void;
            "notify::screenshots": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends Package.ConstructorProps {

        }
    }

    /**
     * @gir-type Class
     */
    abstract class FlatpakPackage extends Package {
        static $gtype: GObject.GType<FlatpakPackage>;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: FlatpakPackage.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<FlatpakPackage.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        // Signals
        /** @signal */
        connect<K extends keyof FlatpakPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FlatpakPackage.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof FlatpakPackage.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, FlatpakPackage.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof FlatpakPackage.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<FlatpakPackage.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;
    }


    namespace UpdatesChecker {
        // Signal signatures
        interface SignalSignatures extends GObject.Object.SignalSignatures {
            /**
             * @signal
             */
            "updates-available": (arg0: number) => void;
            "notify::updates-nb": (pspec: GObject.ParamSpec) => void;
            "notify::updates-list": (pspec: GObject.ParamSpec) => void;
            "notify::refresh-period": (pspec: GObject.ParamSpec) => void;
            "notify::no-update-hide-icon": (pspec: GObject.ParamSpec) => void;
        }

        // Constructor properties interface
        interface ConstructorProps extends GObject.Object.ConstructorProps {
            updates_nb: number;
            updatesNb: number;
            updates_list: string[];
            updatesList: string[];
            refresh_period: (bigint | number);
            refreshPeriod: (bigint | number);
            no_update_hide_icon: boolean;
            noUpdateHideIcon: boolean;
        }
    }

    /**
     * @gir-type Class
     */
    class UpdatesChecker extends GObject.Object {
        static $gtype: GObject.GType<UpdatesChecker>;

        // Properties
        /**
         * @read-only
         */
        get updates_nb(): number;

        /**
         * @read-only
         */
        get updatesNb(): number;

        /**
         * @read-only
         */
        get updates_list(): string[];

        /**
         * @read-only
         */
        get updatesList(): string[];

        /**
         * @read-only
         */
        get refresh_period(): number;

        /**
         * @read-only
         */
        get refreshPeriod(): number;

        /**
         * @read-only
         */
        get no_update_hide_icon(): boolean;

        /**
         * @read-only
         */
        get noUpdateHideIcon(): boolean;

        /**
         * Compile-time signal type information.
         *
         * This instance property is generated only for TypeScript type checking.
         * It is not defined at runtime and should not be accessed in JS code.
         * @internal
         */
        $signals: UpdatesChecker.SignalSignatures;

        // Constructors
        constructor(properties?: Partial<UpdatesChecker.ConstructorProps>, ...args: any[]);

        _init(...args: any[]): void;

        static ["new"](): UpdatesChecker;

        // Signals
        /** @signal */
        connect<K extends keyof UpdatesChecker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdatesChecker.SignalSignatures[K]>): number;
        connect(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        connect_after<K extends keyof UpdatesChecker.SignalSignatures>(signal: K, callback: GObject.SignalCallback<this, UpdatesChecker.SignalSignatures[K]>): number;
        connect_after(signal: string, callback: (...args: any[]) => any): number;

        /** @signal */
        emit<K extends keyof UpdatesChecker.SignalSignatures>(signal: K, ...args: GObject.GjsParameters<UpdatesChecker.SignalSignatures[K]> extends [any, ...infer Q] ? Q : never): void;
        emit(signal: string, ...args: any[]): void;

        // Methods
        check_updates(): void;

        get_updates_nb(): number;

        get_updates_list(): string[];

        get_refresh_period(): number;

        get_no_update_hide_icon(): boolean;
    }


    /**
     * @gir-type Alias
     */
    type PackageClass = typeof Package;

    /**
     * @gir-type Struct
     */
    abstract class PackagePrivate {
        static $gtype: GObject.GType<PackagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AlpmPackageClass = typeof AlpmPackage;

    /**
     * @gir-type Struct
     */
    abstract class AlpmPackagePrivate {
        static $gtype: GObject.GType<AlpmPackagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type AURPackageClass = typeof AURPackage;

    /**
     * @gir-type Struct
     */
    abstract class AURPackagePrivate {
        static $gtype: GObject.GType<AURPackagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TransactionSummaryClass = typeof TransactionSummary;

    /**
     * @gir-type Struct
     */
    abstract class TransactionSummaryPrivate {
        static $gtype: GObject.GType<TransactionSummaryPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UpdatesClass = typeof Updates;

    /**
     * @gir-type Struct
     */
    abstract class UpdatesPrivate {
        static $gtype: GObject.GType<UpdatesPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type ConfigClass = typeof Config;

    /**
     * @gir-type Struct
     */
    abstract class ConfigPrivate {
        static $gtype: GObject.GType<ConfigPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type DatabaseClass = typeof Database;

    /**
     * @gir-type Struct
     */
    abstract class DatabasePrivate {
        static $gtype: GObject.GType<DatabasePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type TransactionClass = typeof Transaction;

    /**
     * @gir-type Struct
     */
    abstract class TransactionPrivate {
        static $gtype: GObject.GType<TransactionPrivate>;
    }


    /**
     * @gir-type Alias
     */
    type SnapPackageClass = typeof SnapPackage;

    /**
     * @gir-type Struct
     */
    abstract class SnapPackagePrivate {
        static $gtype: GObject.GType<SnapPackagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type FlatpakPackageClass = typeof FlatpakPackage;

    /**
     * @gir-type Struct
     */
    abstract class FlatpakPackagePrivate {
        static $gtype: GObject.GType<FlatpakPackagePrivate>;
    }


    /**
     * @gir-type Alias
     */
    type UpdatesCheckerClass = typeof UpdatesChecker;

    /**
     * @gir-type Struct
     */
    abstract class UpdatesCheckerPrivate {
        static $gtype: GObject.GType<UpdatesCheckerPrivate>;
    }


    /**
     * Name of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L188
     */
    const __name__: string;

    /**
     * Version of the imported GIR library
     * `see` https://gitlab.gnome.org/GNOME/gjs/-/blob/master/gi/ns.cpp#L189
     */
    const __version__: string;
}

export default Pamac;

}

declare module 'gi://Pamac' {
    import Pamac11 from 'gi://Pamac?version=11';
    export default Pamac11;
}
// END
