import React from 'react';
import {Dimmer, Loader, Image} from 'semantic-ui-react';

const Spinner = (props) =>{
    return (
        <div>
      <Dimmer active>
        <Loader size='massive'>{props.message}</Loader>
      </Dimmer>

      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='https://react.semantic-ui.com/images/wireframe/short-paragraph.png' />
    </div>
    )
}

Spinner.defaultProps = {
  message: "Loading..."
}

export default Spinner;
