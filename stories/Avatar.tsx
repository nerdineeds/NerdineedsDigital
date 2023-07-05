import React from "react";

export interface AvatarProps {
    /** Username of User */
    name: string;
    /** An optional image to appear for avatar */
    image?: {
        src: string;
    }
    /** Size of avatar */
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

export const Avatar = ({name, image, size}:AvatarProps) => {
    const initials = (name) ? name.split(' ').map((word)=>word[0]).join('') : null;

    const AvatarComp = () => {
        if(!image) {
            return (<div>
                <span className={`inline-block ${size} overflow-hidden rounded-full bg-gray-100`}>
           <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
             <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
           </svg>
         </span>
         <span>{initials}</span>
                </div> )
        } else {
            // eslint-disable-next-line @next/next/no-img-element
            <img
        className={`inline-block ${size} rounded-full`}
        src={image}
        alt={name}
      />
        }
    }



    return (<><AvatarComp/></>)
}