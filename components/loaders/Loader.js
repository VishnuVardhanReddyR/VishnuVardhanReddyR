import React from 'react'

function Loader() {
  return (
    <div className='flex items-center justify-center'>
        <svg width="135" height="30" viewBox="0 0 100 60">
            <rect fill="#C4C4C4" x="0" y="0" width="10" height="30" rx="6">
            <animate attributeType="CSS" 
                    attributeName="height" 
                    values="30;5;30;"
                    begin='0s'
                    dur="1s"
                    repeatCount="indefinite" />
            <animate attributeType="CSS" 
                    attributeName="y" 
                    begin='0s'
                    values="0;20;0;"
                    dur="1s"
                    repeatCount="indefinite" />
            </rect>
            <rect fill="#C4C4C4" x="20" y="0" width="10" height="30" rx="6">
            <animate attributeType="CSS" 
                    attributeName="height" 
                    values="30;5;30"
                    begin='0.2s'
                    dur="1s"
                    repeatCount="indefinite" />
            <animate attributeType="CSS" 
                    attributeName="y" 
                    values="0;20;0"
                    begin='0.2s'
                    dur="1s"
                    repeatCount="indefinite" />
            </rect>
            <rect fill="#C4C4C4" x="40" y="0" width="10" height="30" rx="6">
            <animate attributeType="CSS" 
                    attributeName="height" 
                    values="30;5;30"
                    begin='0.4s'
                    dur="1s"
                    repeatCount="indefinite" />
            <animate attributeType="CSS" 
                    attributeName="y" 
                    values="0;20;0"
                    begin='0.4s'
                    dur="1s"
                    repeatCount="indefinite" />
            </rect>
            <rect fill="#C4C4C4" x="60" y="0" width="10" height="30" rx="6">
            <animate attributeType="CSS" 
                    attributeName="height" 
                    values="30;5;30"
                    begin='0.6s'
                    dur="1s"
                    repeatCount="indefinite" />
            <animate attributeType="CSS" 
                    attributeName="y" 
                    values="0;20;0"
                    begin='0.6s'
                    dur="1s"
                    repeatCount="indefinite" />
            </rect>
            <rect fill="#C4C4C4" x="80" y="0" width="10" height="30" rx="6">
            <animate attributeType="CSS" 
                    attributeName="height" 
                    values="30;5;30"
                    begin='0.8s'
                    dur="1s"
                    repeatCount="indefinite" />
            <animate attributeType="CSS" 
                    attributeName="y" 
                    values="0;20;0"
                    begin='0.8s'
                    dur="1s"
                    repeatCount="indefinite" />
            </rect>
        </svg>
    </div>
  )
}

export default Loader
