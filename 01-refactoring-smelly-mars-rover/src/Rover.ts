export class Rover {

    private direction: string;
    private y: number;
    private x: number;

    constructor(x: number, y: number, direction: string) {
        this.x = x;
        this.y = y;
        this.direction = direction;
    }

    public receive(commandsSequence: string) {
        for (let i = 0; i < commandsSequence.length; ++i) {
            const command = commandsSequence.substring(i, i + 1);

            if (command === "l" || command === "r") {

                // Rotate Rover
                if (this.direction === "N") {
                    if (command === "r") {
                        this.direction = "E";
                    } else {
                        this.direction = "W";
                    }
                } else if (this.direction === "S") {
                    if (command === "r") {
                        this.direction = "W";
                    } else {
                        this.direction = "E";
                    }
                } else if (this.direction === "W") {
                    if (command === "r") {
                        this.direction = "N";
                    } else {
                        this.direction = "S";
                    }
                } else {
                    if (command === "r") {
                        this.direction = "S";
                    } else {
                        this.direction = "N";
                    }
                }
            } else {

                // Displace Rover
                let displacement1 = -1;

                if (command === "f") {
                    displacement1 = 1;
                }
                let displacement = displacement1;

                if (this.direction === "N") {
                    this.y += displacement;
                } else if (this.direction === "S") {
                    this.y -= displacement;
                } else if (this.direction === "W") {
                    this.x -= displacement;
                } else {
                    this.x += displacement;
                }
            }
        }
    }

}