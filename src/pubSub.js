export const pubSub = (function () {
    const events = {};
    function subscribe(eventName, f) {
        if (!events[eventName]) events[eventName] = [f];
        else if (!events[eventName].includes(f)) events[eventName].push(f);
    }
    function unsubscribe(eventName, f) {
        if(events[eventName].includes(f)) events[eventName].splice(events[eventName].indexOf(f),1);
    }
    function publish(eventName, data) {
        if(events[eventName]) {
            for(let f of events[eventName]) {
                f(data);
            }
        }
    }
    return {subscribe, unsubscribe, publish};
})();