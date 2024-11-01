import React, { forwardRef, Fragment, LegacyRef } from "react";

import { Text, View, TextInput, TextInputProps, TouchableOpacity, StyleProp, TextStyle } from 'react-native';
import {style} from "./styles";
import { themes } from "../../global/themes";

import {MaterialIcons,FontAwesome, Octicons} from '@expo/vector-icons';

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
                     React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
                     React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    iconRightName?: string,
    title?: string,
    onIconLeftPress?: ()=> void,
    onIconRightPress?: ()=> void,
    height?:number,
    labelStyle?:StyleProp<TextStyle>
}

export const Input = forwardRef((Props: Props, ref: LegacyRef<TextInput>|null)=>{

    const {IconLeft, IconRight, IconLeftName, iconRightName, title, onIconLeftPress, onIconRightPress, labelStyle, height, ...rest } = Props

    const calculateSizeWidth = () => {
        if (IconLeft && IconRight){
            return "80%"
        }else if (IconLeft || IconRight){
            return "90%"
        } else{
            return "100%"
        }
    }

    const calculateSizePaddingLeft = () =>{
        if (IconLeft && IconRight){
            return 0;
        }else if (IconLeft || IconRight){
            return 10;
        } else{
            return 20;
        }
    };

    return(
        <Fragment>
            {title&&<Text style={[style.titleInput, labelStyle]}>{title}</Text>}
            <View style={[style.BoxInput, {paddingLeft:calculateSizePaddingLeft(),height:height || 40}]}>
                {IconLeft && IconLeftName &&(
                    <TouchableOpacity onPress={onIconLeftPress} style={style.Button}>
                        <IconLeft name={IconLeftName as any} size={20} color={themes.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[
                        style.input, {width:calculateSizeWidth(), height:'100%'}
                    ]}
                    {...rest}
                />
                {IconRight && iconRightName &&(
                    <TouchableOpacity onPress={onIconRightPress} style={style.Button}>
                        <IconRight name={iconRightName as any} size={20} color={themes.colors.gray} style={style.Icon} />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    )
})