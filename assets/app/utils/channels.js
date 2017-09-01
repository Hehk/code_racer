import { Socket } from 'phoenix';

const socket = new Socket('/socket');
socket.connect();

// TODO: add more channels to this system
// eslint-disable-next-line import/prefer-default-export
export const codeRaceChannel = ({ gameId }) =>
  socket.channel(`code_race:${gameId}`);
