import React from 'react';
import styled from 'styled-components';
import { codeRaceChannel } from 'utils/channels';
import { bgColor, grey } from 'utils/styles';

const Wrapper = styled.div`
  background-color: ${bgColor};
  color: ${grey};
  width: 500px;
  margin: 10px auto;
  padding: 1em;
  font-size: 1em;
  line-height: 1.5em;
  white-space: pre-wrap;
  font-family: monospace;
`;

class CodeRace extends React.Component {
  state = {
    channel: null,
    text: '',
  }
  componentWillMount() {
    // TODO: take the change
    const gameId = 'test';
    const userId = 'jimmy';
    const channel = codeRaceChannel({ gameId }, { userId });

    channel.join({ userId })
      .receive('ok', text => this.setState({ text }))
      .receive('error', res => console.log('err', res));
    this.setState({ channel });
  }

  render = () => (<Wrapper>
    {this.state.text}
  </Wrapper>)
}

export default CodeRace;
