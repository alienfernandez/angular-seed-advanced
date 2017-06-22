export default class StringUtil {
    static escape(html:any) {
        return String(html)
            .replace(/&/g, '&amp;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;');
    }

    /**
     * Convert str from base 64 to UTF8
     * @param str
     * @returns {string}
     */
    static b64ToUtf8(str:string) {
        return decodeURIComponent(StringUtil.escape(window.atob(str)));
    }

    /**
     * Strip special chars
     * @param str
     * @returns {*}
     */
    stripSpecialChars(str:any) {
        var translate_re = /[ŠŒŽšœžŸ¥µÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖØÙÚÛÜÝßàáâãäåæçèéêëìíîïðñòóôõöøùúûüýÿ]/g;
        var translate = 'SOZsozYYuAAAAAAACEEEEIIIIDNOOOOOOUUUUYsaaaaaaaceeeeiiiionoooooouuuuyy';
        return (str.replace(translate_re, (match:any) => {
                return translate.substr(translate_re.source.indexOf(match) - 1, 1);
            })
        );

    }
}
