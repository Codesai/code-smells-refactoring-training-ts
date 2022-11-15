import {Rover} from '../src/Rover';

describe('Rover Commands List', () => {

  it('no commands', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("");

    expect(new Rover(0, 0, "N")).toEqual(rover);
  });

  it('two commands', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("lf");

    expect(new Rover(-1, 0, "W")).toEqual(rover);
  });

  it('many commands', () => {
    const rover = new Rover(0, 0, "N");

    rover.receive("ffrbbrfflff");

    expect(new Rover(0, 0, "E")).toEqual(rover);
  });

});