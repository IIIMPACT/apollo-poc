## Findings
- Was relatively easy to get this up & running with appsync, the two are working well together so far.
- UI is pretty snappy after initial fetches of data, and caching. definitely a pro
  - the way subscriptions are implemented by appsync & apollo may be different. one uses MQTT over http (don't quote me on this, yet. Need to find source), and the other doesn't. although it seems there's already a workaround for that..

# Todo
- [ ] Some client side state
- [ ] Working example of subscriptions, on the listTodo view