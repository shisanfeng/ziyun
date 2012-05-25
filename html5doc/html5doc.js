$(function () {

    /* Markdown */
    var mdc = new Markdown.Converter();
    $(".markdown").each(function () {
        var $md = $(this);
        $md.html(
            mdc.makeHtml(
                $md.html().substring(4, $md.html().length - 3)
                        .replace(/-\\->/g, "-->")
            )
        );
    });

    /* 页面标题 */
    $("title:first").text($("h1:first").text());

    /* 版权信息 */
    $("footer > address").html("子云科技 ziyun");

    /* 外部链接 */
    $("a[href]").not($("a[href^='#']")).each(function () {
        $(this).attr("target", "_blank");
    });

});
