import { makeAutoObservable } from "mobx";

const EventsStore = makeAutoObservable({
    currentId:0,
   
})
export default EventsStore;