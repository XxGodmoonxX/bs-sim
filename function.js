var isset = function(data){
  if(data === "" || data === null || data ===undefined){
    return false;
  }else{
    return true;
  }
}
var isUrl = function(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator

  if(!pattern.test(str)) {
    return false;
  } else {
    return true;
  }
};
var isCharacterSheetUrl = function(url) {
  if (!url || !isUrl(url)) return false;
  m = url.match(/http:\/\/charasheet\.vampire-blood\.net\/(.*)/);
  if (m && isset(m[1])) {
    return true;
  } else {
    return false;
  }
}

function get_html(url) {
  return $.ajax({
    type: "GET",
    url: "ajax.php?url=" + encodeURIComponent(url),
    dataType: "text",
  });
}
