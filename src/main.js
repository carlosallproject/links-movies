const REGEX_MAGNET = /magnet:\?xt=urn:btih:[a-zA-Z0-9]*/g; //magnet:\?[^\s\"]*
const TAG_LINK = "a";

function main() {
    // array tags with a link
    let tags = getTagsLink(TAG_LINK);
    //array tags filtered links
    let filteredTags = filterTagMagnetLink(tags);
    //array string with links
    let links = mapTagLinks(filteredTags);
    console.log('%cLinks magneticos extraidos:','color:blue; font-size:2em;');
    console.log(`%c${links}`,'color:red;font-size:1.5em;');
}

/**
 * 
 * @param nameTag string
 * @return string array of tags
 */
function getTagsLink(nameTag) {
    return Object.values(document.querySelectorAll(nameTag));
}

/**
 * Return array of tags match with regex
 * @param tags 
 * @return array of tags
 */
function filterTagMagnetLink(tags) {
    return tags.filter(tag => { return tag.href.match(REGEX_MAGNET) });
}

/**
 * 
 * @param tags 
 * @return array string 
 */
function mapTagLinks(tags) {
    return tags.map(tag => { return tag.href });
}

(() => {
    main();
})();