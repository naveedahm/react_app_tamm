import React from 'react';
import { useState } from 'react';

const MyHOC = ComposedComponent => {


    const HOC = () => {

        const [textHover, setHover] = useState(false);
        const [textColor, setTextColor] = useState('#888');
    

        return <ComposedComponent
        textColor={textColor}
        textHover={textHover}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onClick={() => setTextColor('red')} />

    }
    return HOC
  }


function MyComponent(props) {
    const { textColor, textHover, ...divProps } = props;
    return (
        <div>
            <h2 {...divProps} style={{ color: textColor }}>Mouse {textHover ? 'Over' : 'Out'}</h2>
        </div>
    )
}


export default MyHOC(MyComponent);