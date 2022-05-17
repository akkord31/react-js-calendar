import { makeAutoObservable } from "mobx";

const EventsStore = makeAutoObservable({
    currentId:0,
    choosenEvent: new Object(),
    choosenEventId: 0,
   
})
export default EventsStore;