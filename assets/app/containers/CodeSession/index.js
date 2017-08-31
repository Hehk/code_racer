import React from 'react';
import { codeSessionChannel } from 'utils/channels';

class CodeSession extends React.Component {
  componentWillMount() {
    // TODO: take the change
    const gameId = 'test';
    this.channel = codeSessionChannel({ gameId });
    this.channel.join()
      .receive('ok', res => console.log('joined', res))
      .receive('error', res => console.log('err', res));
  }

  channel = null
  render = () => (<div>
    test
  </div>)
}

export default CodeSession;
