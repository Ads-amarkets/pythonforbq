function GaBqPlugin(tracker) {

    ga(function(tracker) {
        var originalSendHitTask = tracker.get('sendHitTask');
        tracker.set('sendHitTask', function(model) {
            var payLoad = model.get('hitPayload');
            originalSendHitTask(model);
            var gifRequest = new XMLHttpRequest();
            var amarkets-app = "http://your-gae-domain/collect";
            gifRequest.open('get', amarkets-app + '?' + payLoad, true);
            gifRequest.send();
        });
    });

}
ga('provide', 'gabqplugin', GaBqPlugin);