import {Rover} from '../src/Rover';

describe('Rover Position', () => {

  it('facing north move forward', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("f");

    expect(new Rover(0, 1, "N")).toEqual(rover);
  });

  it('facing north move backward', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("b");

    expect(new Rover(0, -1, "N")).toEqual(rover);
  });

  it('facing south move forward', () => {
    const rover = new Rover(0, 0, "S");

    rover.receive("f");

    expect(new Rover(0, -1, "S")).toEqual(rover);
  });

  it('facing south move backward', () => {
    const rover = new Rover(0, 0, "S");

    rover.receive("b");

    expect(new Rover(0, 1, "S")).toEqual(rover);
  });

  it('facing west move forward', () => {
    const rover = new Rover(0, 0, "W");

    rover.receive("f");

    expect(new Rover(-1, 0, "W")).toEqual(rover);
  });

  it('facing west move backward', () => {
    const rover = new Rover(0, 0, "W");

    rover.receive("b");

    expect(new Rover(1, 0, "W")).toEqual(rover);
  });

  it('facing east move forward', () => {
    const rover = new Rover(0, 0, "E");

    rover.receive("f");

    expect(new Rover(1, 0, "E")).toEqual(rover);
  });

  it('facing east move backward', () => {
    const rover = new Rover(0, 0, "E");

    rover.receive("b");

    expect(new Rover(-1, 0, "E")).toEqual(rover);
  });

});