import {GreetingMessage} from "../core/GreetingMessage";

export interface GreetingsSender {
    send(messages: Array<GreetingMessage>): void;
}