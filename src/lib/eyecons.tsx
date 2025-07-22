import * as React from 'react';
import { IconType } from 'react-icons';

// Import the same icons helper from the index page
function importIcons(r: any, attrs: string) {
  return r
    .keys()
    .filter((fileName: string) => fileName.startsWith('./'))
    .map((fileName: string) => {
      const name = fileName.slice(2).replace(/\.svg$/, '');
      const normalizedName = name.replaceAll(' ', '_');
      return {
        name: normalizedName,
        svg: r(fileName).default.replace('>', ` ${attrs}>`),
      };
    });
}

const icons = importIcons(
  //@ts-ignore
  require.context(`../icons/eyecons`, false, /\.svg$/),
  'class="w-5 h-5"'
);

// Helper function to create IconType-compatible components from Eyecons
export function createEyeconComponent(iconName: string): IconType {
  const eyecon = icons.find((i) => i.name === iconName);

  if (!eyecon) {
    return () => null;
  }

  const EyeconComponent: IconType = ({ className, ...props }) => {
    // Extract size props if they exist
    const { size, ...otherProps } = props as any;

    let finalClassName = className || 'w-5 h-5';

    // Handle size prop if provided
    if (size) {
      finalClassName = `${className || ''} w-[${size}px] h-[${size}px]`.trim();
    }

    return (
      <span
        {...otherProps}
        className={finalClassName}
        dangerouslySetInnerHTML={{
          __html: eyecon.svg.replace(
            'class="w-5 h-5"',
            `class="${finalClassName}"`
          ),
        }}
      />
    );
  };

  return EyeconComponent;
}

// Create Eyecon equivalents for commonly used icons
export const EyePlus = createEyeconComponent('Plus');
export const EyeArrowRight = createEyeconComponent('Arrow_Right');
export const EyeCreditCard = createEyeconComponent('Id_Card');
export const EyeDesktopComputer = createEyeconComponent('Windows'); // Using Windows as desktop equivalent
export const EyeDeviceMobile = createEyeconComponent('Mobile');
export const EyeShieldCheck = createEyeconComponent('Badge-True'); // Using closest equivalent for shield with check
export const EyeSpinner = createEyeconComponent('Loop'); // Using loop as loading spinner equivalent
export const EyeExclamationTriangle = createEyeconComponent(
  'Exclamation_Triangle'
);
export const EyeLinkedin = createEyeconComponent('Linkedin');
export const EyeAlarmWarning = createEyeconComponent('Exclamation_Triangle'); // Using exclamation triangle for warning alarm
