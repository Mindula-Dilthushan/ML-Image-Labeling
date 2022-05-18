/**
 *
 * project name    : Ml-image-labeling-app
 * project author  : mindula dilthushan
 * author email    : minduladilthushan1@gmail.com
 *
 */

import React from 'react';
import {Text, View} from 'react-native';
import AlphaCSS from '../style/AlphaCSS';

const WelcomeScreen = () => {
    return (
        <View style={[AlphaCSS.container,AlphaCSS.bgLightBlue]}>
            <Text style={[AlphaCSS.fontWhite,AlphaCSS.fontSize20]}>Welcome Screen</Text>
        </View>
    )
}

export default WelcomeScreen;
