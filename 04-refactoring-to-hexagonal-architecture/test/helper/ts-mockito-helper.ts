import {capture} from "ts-mockito";
export class Spies {
    static captureCallsArguments(fn: (notification: (string | undefined)) => void): Array<string>[] {
        const calls: { actions: Array<{ args: Array<string> }> } = capture(
            fn
        ) as any as { actions: Array<{ args: Array<string> }> };
        return calls["actions"].map((item: { args: Array<string> }) => item["args"]);
    }
}
