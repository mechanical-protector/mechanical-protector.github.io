function loadProd(url) {
    $(document).ready(function () {
        var htmlobj = $.ajax({url: url, dataType: 'json', async: false});
        var resp = htmlobj.responseText;
        var data = eval('(' + resp + ')');
        // 设置表名
        $("#title").append(data.title);
        $("#title2").append(data.title);
        $("#title_en").append(data.title_en);


        // table head
        var head = data.head;

        var strHead = "";
        // alert(head.length);
        for (var i = 0; i < head.length; i++) {
            strHead += "<th>" + head[i].headValue + "</th>"
        }
        $("#t_head").append(strHead);
        //设置data
        // $("#test").html("");
        var body = data.data;
        var strBody = "";
        for (var i = 0; i < body.length; i++) {
            strBody += "<tr>";
            for (var j = 0; j < body[i].length; j++) {
                // alert(head[j].split);
                if (head[j].split) {
                    var line = body[i][j].split(/[\s\n]/);
                    lineStr = "<td>";
                    for (var k = 0; k < line.length; k++) {
                        lineStr += line[k] + "<br>";
                    }
                    lineStr += "</td>";
                    strBody += lineStr;
                } else {
                    strBody += "<td>" + body[i][j] + "</td>";
                }
            }
            strBody += "</tr>"
        }
        $("#t_body").append(strBody);
    });
}

function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}

function myTrim(x) {
    return x.replace(/^\s+|\s+$/gm, '');
}