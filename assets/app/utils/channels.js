import { Socket } from 'phoenix';

let socket = null;
export const initSocket = (params, logger) => {
  socket = new Socket('/socket', { params, logger });
  socket.connect();
};

const socketValidator = fn => (...args) => {
  if (socket === null) {
    console.error('You tried to join a channel before initializing the socket');
    return null;
  }
  return fn(...args);
};

// TODO: add more channels to this system
// eslint-disable-next-line import/prefer-default-export
export const codeRaceChannel = socketValidator(({ gameId }, params, logger) =>
  socket.channel(`code_race:${gameId}`, { params, logger }));
