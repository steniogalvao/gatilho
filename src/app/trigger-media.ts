import { User } from "./user";
import { Trigger } from "./trigger";
import { Media } from "./media";
export interface TriggerMedia{
    id:number,
    media:Media,
    trigger:Trigger,
    user:User,
    validation:boolean

}