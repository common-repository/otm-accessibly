import React from 'react';

function initProps(props) {
  const defaults =  {
    title: "Default Title",
    text: "Some text describing feature...",
    icon: null,
  };
  return {
    ...defaults,
    ...props,
  };
}


const AppFeature = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <div className="flex py-3">
      {props.icon != null ?
        <div className="w-1/6 mr-2">
        {props.icon}
        </div>
      : null }
    <div className="w-5/6">
      <div>
        <h3 className="text-base mb-1 font-semibold">{props.title}</h3>
        <p className="text-xs">{props.text}</p>
      </div>
    </div>
  </div>
  )
}

export default AppFeature;
