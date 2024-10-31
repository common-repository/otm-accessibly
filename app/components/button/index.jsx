import React from 'react';


function initProps(props) {
  const defaults =  {
    loading: false
  };
  return {
    ...defaults,
    ...props,
  };
}

const colors = {
  indigo: 'bg-ac hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white',
  transparent: 'bg-transparent border border-ac text-ac hover:bg-gray-100'
};


const Button = (propsSet) => {
  const props = initProps(propsSet);
  return (
    <button
        onClick={props.onClick}
        type={props.submit ? 'submit' : 'button'}
        disabled={props.disabled}
        className={`${props.isFat ? 'py-4 px-6 ' : 'py-2 px-4 '}${
            props.icon ? 'flex justify-center items-center ' : ''
        } ${
            colors[props.color]
        } transition ease-in duration-100 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            props.disabled ? ' opacity-70 cursor-not-allowed' : ''
        }${!props.label ? ' w-12 h-12' : ''} ${props.rounded ? 'rounded-full' : 'rounded-sm '} ${props.customClass ? props.customClass : ''}`}
    >

        {props.loading ? <span class="loader"></span> : null}

        {!props.loading && props.icon ? props.icon : null}

        {!props.loading && props.label ? props.label : null}

        {!props.loading && props.children ? props.children : null}
    </button>
);
}

export default Button;
