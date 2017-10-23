(function () {
    angular
        .module("WampApp")
        .controller("widgetListController", widgetListController);

    function widgetListController($sce) {
        var model = this;
        model.trustHtmlContent = trustHtmlContent;
        model.trustUrlResource = trustUrlResource;
        model.getWidgetIncludeUrl = getWidgetIncludeUrl
        function init() {
            model.hello = "Hello from widgetListController";
            model.widgets =
                [
                    { "_id": "123", "widgetType": "HEADING", "pageId": "321", "size": 2, "text": "GIZMODO" },
                    { "_id": "234", "widgetType": "HTML", "pageId": "321", "size": 4, "text": "<p>GIZMODO</p>" },
                    { "_id": "345", "widgetType": "IMAGE", "pageId": "321", "width": "100%", "url": "http://lorempixel.com/400/200" },
                    { "_id": "456", "widgetType": "YOUTUBE", "pageId": "321", "size": 2, "text": "GIZMODO", "url": "https://www.youtube.com/embed/YH5sFprHgl0" }
                ];
        }
        init();
        function getWidgetIncludeUrl(widgetType) {
            return "views/widget/templates/widgets/widget-" + widgetType + ".view.client.html";
        }
        function trustUrlResource(url) {
            console.log(url);
            var youtubeUrl = "https://www.youtube.com/embed/";
            var urlParts = url.split("/");
            youtubeUrl += urlParts[urlParts.length - 1];
            return $sce.trustAsResourceUrl(youtubeUrl);
        }
        function trustHtmlContent(htmlContent) {
            return $sce.trustAsHtml(htmlContent);
        }
    }
})();