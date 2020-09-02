import Slider from '@material-ui/core/Slider';
import Tooltip from '@material-ui/core/Tooltip';
import React, { useState } from 'react';
import { AlphaPicker, HuePicker } from 'react-color';
import { Subtitle } from 'src/styles/components';
import { Notify } from '../Notify';
import { Shadow, ShadowBox, ShadowBoxController, ShadowContainer, ShadowItem } from './styles';

export default function ShadowController() {
  interface iShadow {
    offsetX: number;
    offsetY: number;
    blurRadius: number;
    spreadRadius: number;
    color: string;
  }
  const [shadow, setShadow] = useState<iShadow>({
    offsetX: 10,
    offsetY: 15,
    blurRadius: 30,
    spreadRadius: 0,
    color: 'rgba(0,0,0,.5)',
  });

  return (
    <ShadowContainer>
      <ShadowBox>
        <ShadowItem
          title={`${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px ${
            shadow.spreadRadius > 0 ? `${shadow.spreadRadius}px` : ''
          } ${shadow.color}`}
        />
      </ShadowBox>
      <ShadowBoxController>
        <Subtitle>Shadow Controller:</Subtitle>
        <div className="cont-input">
          <label htmlFor="offsetX">offset-x: {shadow.offsetX}px</label>
          <Slider
            defaultValue={shadow.offsetX}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            min={-100}
            max={100}
            id="offsetX"
            onChange={(e, val) => {
              setShadow({ ...shadow, offsetX: Number(val) });
            }}
          />
        </div>
        <div className="cont-input">
          <label htmlFor="offsetY">offset-y: {shadow.offsetY}px</label>
          <Slider
            defaultValue={shadow.offsetY}
            ValueLabelComponent={ValueLabelComponent}
            min={-100}
            max={100}
            aria-label="custom thumb label"
            id="offsetY"
            onChange={(e, val) => {
              setShadow({ ...shadow, offsetY: Number(val) });
            }}
          />
        </div>

        <div className="cont-input">
          <label htmlFor="blurRadius">blur-radius: {shadow.blurRadius}px</label>
          <Slider
            defaultValue={shadow.blurRadius}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            id="blurRadius"
            onChange={(e, val) => {
              setShadow({ ...shadow, blurRadius: Number(val) });
            }}
          />
        </div>
        <div className="cont-input">
          <label htmlFor="spreadRadius">spread-radius: {shadow.spreadRadius}px</label>
          <Slider
            defaultValue={shadow.spreadRadius}
            ValueLabelComponent={ValueLabelComponent}
            aria-label="custom thumb label"
            id="spreadRadius"
            onChange={(e, val) => {
              setShadow({ ...shadow, spreadRadius: Number(val) });
            }}
          />
        </div>
        <div className="cont-input">
          <label>color: {shadow.color}</label>
          <HuePicker
            color={shadow.color}
            onChange={(color) =>
              setShadow({
                ...shadow,
                color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b} ${color.rgb.a ? `,${color.rgb.a}` : ',0'})`,
              })
            }
          />
          <AlphaPicker
            color={shadow.color}
            onChange={(color) =>
              setShadow({
                ...shadow,
                color: `rgba(${color.rgb.r},${color.rgb.g},${color.rgb.b} ${color.rgb.a ? `,${color.rgb.a}` : ',0'})`,
              })
            }
          />
        </div>

        <Subtitle>Get the Shadow !</Subtitle>
        <Shadow
          onClick={() => {
            let input = document.getElementById('shadow') as HTMLInputElement;
            input.select();
            document.execCommand('copy');
            Notify('Copied to clipboard !!', 'success');
          }}
        >
          <input
            type="text"
            id="shadow"
            readOnly
            value={`${shadow.offsetX}px ${shadow.offsetY}px ${shadow.blurRadius}px ${
              shadow.spreadRadius > 0 ? `${shadow.spreadRadius}px` : ''
            } ${shadow.color}`}
          />
        </Shadow>
      </ShadowBoxController>
    </ShadowContainer>
  );
}
interface Props {
  children: React.ReactElement;
  open: boolean;
  value: number;
}
function ValueLabelComponent(props: Props) {
  const { children, open, value } = props;

  return (
    <Tooltip open={open} enterTouchDelay={0} placement="top" title={value}>
      {children}
    </Tooltip>
  );
}
