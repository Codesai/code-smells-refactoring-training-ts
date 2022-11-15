import {Rover} from '../src/Rover';

describe('Rover Rotation', () => {

  it(' facing north rotate left', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("l");

    expect(new Rover(0, 0, "W")).toEqual(rover);
  });

  it(' facing north rotate right', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("r");

    expect(new Rover(0, 0, "E")).toEqual(rover);
  });

  it(' facing south rotate left', () => {
    const rover = new Rover(0, 0, "S");

    rover.receive("l");

    expect(new Rover(0, 0, "E")).toEqual(rover);
  });

  it(' facing south rotate right', () => {
    const rover = new Rover(0, 0, "S");

    rover.receive("r");

    expect(new Rover(0, 0, "W")).toEqual(rover);
  });

  it(' facing west rotate left', () => {
    const rover = new Rover(0, 0, "W");

    rover.receive("l");

    expect(new Rover(0, 0, "S")).toEqual(rover);
  });

  it(' facing west rotate right', () => {
    const rover = new Rover(0, 0, "W");

    rover.receive("r");

    expect(new Rover(0, 0, "N")).toEqual(rover);
  });

  it(' facing east rotate left', () => {
    const rover = new Rover(0, 0, "E");

    rover.receive("l");

    expect(new Rover(0, 0, "N")).toEqual(rover);
  });

  it(' facing east rotate right', () => {
    const rover = new Rover(0, 0, "E");

    rover.receive("r");

    expect(new Rover(0, 0, "S")).toEqual(rover);
  });
});