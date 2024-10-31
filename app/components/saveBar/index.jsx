import React from 'react';
import axios from 'axios';
import Button from '../button'
import InfoIcon from '../../assets/images/icons/svg/infoIcon';

const SaveBar = (props) => {
  if (!props.showSaveBar) {
    return null;
  }
  return (
    <div className="w-full z-100 fixed bottom-0 z-[9999]">
      <div className="px-4 py-4 bg-white flex items-center shadow-2xl">
        <InfoIcon/>
        <h2 className="ml-2 mr-4 text-black text-base font-semibold">You have made some changes! Save them!</h2>
        <div>
          <Button customClass="mr-2" label="Save Changes" color="indigo" onClick={() => props.onSave()}/>
          <Button label="Discard Changes" color="transparent" onClick={() => props.onDiscard()}/>
        </div>
      </div>
    </div>
  )
}

export default SaveBar;
