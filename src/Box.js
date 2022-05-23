import React, {useEffect, useState} from 'react';

const Box = props => {
    const [style, setStyle] = useState();

    useEffect(() => {
        console.log('박스 크기 조절')
        setStyle(props.createBoxStyle());
    }, [props.createBoxStyle] )

    return (
        <div style={style}></div>
    );
};

export default Box;