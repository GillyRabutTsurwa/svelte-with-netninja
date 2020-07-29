So here, we did a few things, 
* Wrote code in our Tabs component, which accepts some props from the parent App component
* Emitted an event from Tabs to Parent using the event dispatcher and sent with it a value to change the value of activeItem. We do this to change which tab is the active one.
* Oh, we also styled the tab that is currently active.
* Lastly, we are actively showing which PollList or PollForm based on value of activeItem