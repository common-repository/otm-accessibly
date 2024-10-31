import React from 'react';
import axios from 'axios';
import Button from '../button'
import AppFeature from '../appFeature'

import CustomizeIcon from '../../assets/images/icons/svg/customizeIcon';
import CustomPlacementIcon from '../../assets/images/icons/svg/customPlacementIcon';
import ComplianceIcon from '../../assets/images/icons/svg/complianceIcon';
import LanguageIcon from '../../assets/images/icons/svg/languageIcon';

import featureBackground from '../../assets/images/featureBackground.svg';

const Notification = (props) => {
  return (
    <div
      className="w-full items-center bg-no-repeat bg-[8rem_center] bg-cover border-l-4 border-indigo-600 bg-white px-4 py-12 shadow md:flex block"
      style={{ backgroundImage: `url(${featureBackground})` }}
    >
      <div className="md:w-1/3 w-full mb-4 md:mb-0">
        <h2 className="text-lg font-semibold">Please Select a Subscription Plan</h2>
        <p className="mb-2">Subscription Plans May Be Changed or Cancelled at Your Convenience.</p>
        <Button customClass="mt-2" label="Start Accessibly Premium" color="indigo" onClick={() => props.onClick()}/>
      </div>
      <div className="md:w-2/3 w-full grid md:grid-cols-2 grid-cols-1 gap-3">

        <AppFeature
          title="Customize as You Want"
          text="Change the widget colors to match your branding, change the size of widget, remove Accessibly’s logo and many more."
          icon={<CustomizeIcon/>}
        />
        <AppFeature
          title="Custom Placement"
          text="Place your Accessibly widget to anywhere on your site as a static element. Menu bar, footer — you name it."
          icon={<CustomPlacementIcon/>}
        />
        <AppFeature
          title="More features, Increased compliance"
          text="With premium, your clients will have access to various new features like Line Height, Reading Mask, Saturation, Read page and others."
          icon={<ComplianceIcon/>}
        />
        <AppFeature
          title="Change Language"
          text="Make accessibility experience more local by changing the widget language."
          icon={<LanguageIcon/>}
        />

      </div>
    </div>
  )
}

export default Notification;
