"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cookie {
    constructor(name, value, expires, path, domain, secure) {
        this.name = '';
        this.value = '';
        this.expires = null;
        this.path = null;
        this.domain = null;
        this.secure = null;
        if (typeof (name) === 'string') {
            this.name = name;
            this.value = value;
            this.expires = expires;
            this.path = path;
            this.domain = domain;
            this.secure = secure;
        }
        else {
            const cookie = name;
            this.name = cookie.name;
            this.value = cookie.value;
            this.expires = cookie.expires;
            this.path = cookie.path;
            this.domain = cookie.domain;
            this.secure = cookie.secure;
        }
    }
    static getAll() {
        const result = [];
        (document.cookie.match(/(?:^|; )([^;=]+)=([^;]*)/g) || []).forEach((matches) => {
            const match = matches.match(/(?:^|; )([^;=]+)=([^;]*)/);
            if (match && match[1]) {
                result.push(new this(match[1], match[2], null, '/'));
            }
        });
        return result;
    }
    static removeAll() {
        const cookies = this.getAll();
        /** @var {Cookie} cookie */
        cookies.forEach((cookie) => {
            cookie.remove();
        });
    }
    set() {
        if (!this.name) {
            return this;
        }
        const value = `${this.name}=${encodeURI(this.value || '')}`;
        const expires = this.expires ? `; expires=${encodeURI(this.expires)}` : '';
        const path = this.path ? `; path=${encodeURI(this.path)}` : '';
        const domain = this.domain ? `; domain=${encodeURI(this.domain)}` : '';
        const secure = this.secure ? '; secure' : '';
        document.cookie = `${value}${expires}${path}${domain}${secure}`;
        return this;
    }
    get() {
        const name = this.name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1');
        const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
        return matches ? decodeURIComponent(matches[1]) : undefined;
    }
    remove() {
        this.expires = -1;
        return this.set();
    }
}
exports.Cookie = Cookie;
//# sourceMappingURL=index.js.map