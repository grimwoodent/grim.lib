interface ICookieData {
    name: string;

    value: any;

    expires: string | number;

    path: string;

    domain: string;

    secure: string;
}

export class Cookie {
    public static getAll() {
        const result: any[] = [];

        (document.cookie.match(/(?:^|; )([^;=]+)=([^;]*)/g) || []).forEach((matches) => {
            const match = matches.match(/(?:^|; )([^;=]+)=([^;]*)/);

            if (match && match[1]) {
                result.push(new this(match[1], match[2], null, '/'));
            }
        });

        return result;
    }

    public static removeAll() {
        const cookies = this.getAll();

        /** @var {Cookie} cookie */
        cookies.forEach((cookie) => {
            cookie.remove();
        });
    }

    protected name: string = '';

    protected value: any = '';

    protected expires: string | number = null;

    protected path: string = null;

    protected domain: string = null;

    protected secure: string = null;

    constructor(
        name: string | ICookieData,
        value: string,
        expires?: string,
        path?: string,
        domain?: string,
        secure?: string,
    ) {
        if (typeof(name) === 'string') {
            this.name = name;
            this.value = value;
            this.expires = expires;
            this.path = path;
            this.domain = domain;
            this.secure = secure;
        } else {
            const cookie = name;

            this.name = cookie.name;
            this.value = cookie.value;
            this.expires = cookie.expires;
            this.path = cookie.path;
            this.domain = cookie.domain;
            this.secure = cookie.secure;
        }
    }

    public set(): Cookie {
        if (!this.name) {
            return this;
        }

        const value = `${this.name}=${encodeURI(this.value || '')}`;
        const expires = this.expires ? `; expires=${encodeURI(this.expires as string)}` : '';
        const path = this.path ? `; path=${encodeURI(this.path)}` : '';
        const domain = this.domain ? `; domain=${encodeURI(this.domain)}` : '';
        const secure = this.secure ? '; secure' : '';

        document.cookie = `${value}${expires}${path}${domain}${secure}`;

        return this;
    }

    public get(): any {
        const name = this.name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1');
        const matches = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));

        return matches ? decodeURIComponent(matches[1]) : undefined;
    }

    public remove(): Cookie {
        this.expires = -1;

        return this.set();
    }
}
