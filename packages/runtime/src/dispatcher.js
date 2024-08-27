export class Dispatcher {
    #subscribers = new Map();

    subscribe(command, handler) {
        if (!this.#subscribers.has(command)) {
            this.#subscribers.set(command, []);
        }
        const handlers = this.#subscribers.get(command);
        handlers.push(handler);
    }

    dispatch(command, payload) {
        if (!this.#subscribers.has(command)) {
            return;
        }
        for(const handler of this.#subscribers.get(command)) {
            handler(payload);
        }
    }
}