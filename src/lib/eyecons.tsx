import * as EyeconsLibrary from 'eyecons-library';
import * as React from 'react';
import { IconType } from 'react-icons';

// Helper function to create IconType-compatible components from Eyecons
export function createEyeconComponent(iconName: string): IconType {
  const IconComponent = (EyeconsLibrary as any)[iconName];

  if (!IconComponent) {
    return () => null;
  }

  const EyeconComponent: IconType = ({ className, size, ...props }) => {
    let finalClassName = className || 'w-5 h-5';

    // Handle size prop if provided
    if (size) {
      finalClassName = `w-[${size}px] h-[${size}px]`;
    }

    return <IconComponent {...props} className={finalClassName} />;
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
